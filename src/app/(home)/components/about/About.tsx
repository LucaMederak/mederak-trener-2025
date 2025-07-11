"use client";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import React from "react";
import { motion } from "framer-motion";
import { fadeItem } from "@/animations/fade";
import Image from "next/image";

//assets
import AboutImg from "@/assets/hero/hero-3.png";

const About = () => {
  return (
    <section id="about" className="w-full py-8 md:py-12 ">
      <Container>
        <PageHeading
          title="Kilka słów o mnie"
          headerType="h2"
          position="center"
          badgeType="default"
          badgeText="O mnie"
        />
        <motion.div
          variants={fadeItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-start justify-start flex-col lg:flex-row gap-6 lg:gap-2 lg:pt-6 lg:pb-4 rounded-xl bg-slate-100"
        >
          <div className="flex items-start justify-start flex-col gap-6 w-full lg:w-auto px-8 pt-8 xs:pt-12 xs:px-12">
            <h2 className="text-blue-950 text-3xl font-bold">Łukasz Męderak</h2>
            <p className="text-blue-950 text-lg font-normal">
              Jestem certyfikowanym trenerem personalnym. Ukończyłem studia
              licencjackie z dietetyki klinicznej na Śląskim Uniwersytecie
              Medycznym w Katowicach. Prowadzę treningi personalne których celem
              jest m.in nauka odpowiednich wzorców ruchowych, zmniejszenie wad
              postawy, poprawa zdrowia i sylwetki oraz polepszenie zdolności
              motorycznych. Prowadzę konsultacje treningowe, na których pomagam
              określić strategię oraz cel. Doradzam w zakresie dietetyki i
              suplementacji. Wiedzę o dietetyce sportowej i treningu zdobyłem
              podczas uczestnictwa w licznych szkoleniach i kursach, a
              praktyczne doświadczenie podczas pracy z podopiecznymi oraz kilku
              lat pracy nad sobą. Oprócz bycia trenerem personalnym i
              dietetykiem z wykształcenia, jestem także instruktorem sportu o
              specjalności narciarstwo.
            </p>
          </div>
          <Image
            alt="Zdjęcie: Łukasz Męderak"
            width={800}
            height={600}
            src={AboutImg}
            className="w-full lg:w-[620px] rounded-xl "
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
