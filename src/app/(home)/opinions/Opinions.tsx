"use client";
import React, { useState } from "react";
import CardList from "@/components/cards/CardList";
import Image from "next/image";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
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
  return (
    <section id="opinions" className="w-full py-8 md:py-12">
      <Container>
        <PageHeading
          title="Zobacz opinie"
          headerType="h2"
          // description="Ten webinar pomoże Ci jeśli występują u Ciebie poniższe dolegliwości."
          position="center"
          badgeType="default"
          badgeText="Opinie"
        />
        <CardList
          className={`relative ${
            !showAllFeatures && "overflow-hidden h-[56rem]"
          } xl:grid-cols-auto-fill-image`}
        >
          {!showAllFeatures && (
            <div
              className={`w-full h-56 absolute bottom-0 flex items-end pb-6 justify-center bg-gradient-to-t from-white via-white/50 `}
            >
              <button
                onClick={() => setShowAllFeatures(true)}
                className="mt-16 bg-white border border-slate-300 px-4 py-2 rounded-lg text-slate-600 font-semibold text-base flex items-center gap-3 hover:bg-slate-50 shadow-lg shadow-slate-200"
              >
                Pokaż wszystkie
                <UnfoldVertical className="text-slate-600 h-4 w-4" />
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
              className="bg-slate-100 p-4 border border-slate-200 rounded-xl"
            >
              <Image
                key={opinion.id}
                src={opinion.src}
                alt={`Opinia ${opinion.id}`}
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
