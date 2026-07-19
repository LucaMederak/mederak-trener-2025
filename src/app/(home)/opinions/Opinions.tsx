"use client";
import React, { useState } from "react";
import CardList from "@/components/cards/CardList";
import Image from "next/image";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import { useLanguage } from "@/context/Language.context";
import { motion } from "framer-motion";
import { fadeItem } from "@/animations/fade";

//opinions
import Opinion1 from "@/assets/opinions/opinion1.png";
import Opinion2 from "@/assets/opinions/opinion2.png";
import Opinion3 from "@/assets/opinions/opinion3.png";
import Opinion4 from "@/assets/opinions/opinion4.png";
import Opinion5 from "@/assets/opinions/opinion5.png";
import Opinion6 from "@/assets/opinions/opinion6.png";

//icons
import { UnfoldVertical } from "lucide-react";

const opinions = [
  { id: 1, src: Opinion1 },
  { id: 2, src: Opinion2 },
  { id: 3, src: Opinion3 },
  { id: 4, src: Opinion4 },
  { id: 5, src: Opinion5 },
  { id: 6, src: Opinion6 },
];

const translations = {
  pl: {
    title: "Zobacz opinie",
    badge: "Opinie",
    showAll: "Pokaż wszystkie",
    alt: "Opinia",
  },
  en: {
    title: "See Client Reviews",
    badge: "Reviews",
    showAll: "Show all",
    alt: "Review",
  },
};

// function shuffleArray<T>(array: T[]): T[] {
//   const shuffled = [...array]; // Tworzymy kopię, aby nie mutować oryginalnej tablicy
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1)); // Losowy indeks od 0 do i
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Zamiana miejscami
//   }
//   return shuffled;
// }

// const shuffledOpinions = shuffleArray(opinions);

const Opinions = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="opinions" className="w-full py-8 md:py-12 bg-primary-50">
      <Container>
        <PageHeading
          title={t.title}
          headerType="h2"
          // description="Ten webinar pomoże Ci jeśli występują u Ciebie poniższe dolegliwości."
          position="center"
          badgeType="default"
          badgeText={t.badge}
        />
        <CardList
          className={`relative ${
            !showAllFeatures && "overflow-hidden h-[56rem]"
          } xl:grid-cols-auto-fill-image`}
        >
          {!showAllFeatures && (
            <div
              className={`w-full h-56 absolute bottom-0 flex items-end pb-6 justify-center bg-gradient-to-t from-primary-50 via-primary-50/50 `}
            >
              <button
                onClick={() => setShowAllFeatures(true)}
                className="mt-16 bg-white border border-primary-200 px-4 py-2 rounded-lg text-primary-900 font-semibold text-base flex items-center gap-3 hover:bg-primary-50 shadow-lg shadow-primary-100"
              >
                {t.showAll}
                <UnfoldVertical className="text-primary-900 h-4 w-4" />
              </button>
            </div>
          )}

          {opinions.map((opinion) => (
            <motion.div
              variants={fadeItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={opinion.id}
              className="bg-white p-4 border border-primary-100 rounded-xl"
            >
              <Image
                key={opinion.id}
                src={opinion.src}
                alt={`${t.alt} ${opinion.id}`}
                width={500}
                height={500}
                className="aspect-auto object-contain rounded-xl"
              />
            </motion.div>
          ))}
        </CardList>
      </Container>
    </section>
  );
};

export default Opinions;
