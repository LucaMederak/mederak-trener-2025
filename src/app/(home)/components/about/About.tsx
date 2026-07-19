"use client";

import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import { fadeItem } from "@/animations/fade";
import { Award, Dumbbell, GraduationCap, MountainSnow } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

//assets
import AboutImg from "@/assets/hero/lukasz-2026-bez-tla.png";

const credentials = [
  "Trener personalny",
  "Dietetyk kliniczny",
  "Trener medyczny",
  "Instruktor sportu: narciarstwo",
];

const highlights = [
  {
    icon: <Dumbbell />,
    title: "Trening od podstaw",
    description:
      "Uczę techniki, kontroli ruchu i świadomego progresu, bez przypadkowego dokładania ciężaru.",
  },
  {
    icon: <GraduationCap />,
    title: "Dietetyka kliniczna",
    description:
      "Łączę trening z rozsądnym wsparciem żywieniowym i edukacją, którą da się utrzymać na co dzień.",
  },
  {
    icon: <Award />,
    title: "Praktyka i proces",
    description:
      "Stawiam na realny plan, regularną kontrolę i spokojne budowanie formy bez chaosu.",
  },
];

const About = () => {
  return (
    <section id="about" className="w-full bg-white py-10 md:py-16">
      <Container>
        <PageHeading
          title="Kilka słów o mnie"
          headerType="h2"
          position="center"
          badgeType="default"
          badgeText="O mnie"
          className="mb-10"
        />

        <motion.div
          variants={fadeItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)]"
        >
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <h2 className="max-w-2xl text-3xl font-bold leading-tight text-primary-950 md:text-4xl">
                Pomagam trenować mądrzej, bezpieczniej i z większą pewnością.
              </h2>
              <p className="max-w-3xl text-base font-medium leading-relaxed text-primary-900/75 md:text-lg">
                Nazywam się Łukasz Męderak. Jestem trenerem personalnym i
                dietetykiem klinicznym. Ukończyłem studia z dietetyki klinicznej
                na Śląskim Uniwersytecie Medycznym w Katowicach. W pracy łączę
                technikę treningu, edukację żywieniową i spokojne prowadzenie
                procesu, żeby forma nie była chwilowym zrywem, tylko czymś, co
                da się realnie utrzymać.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {credentials.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D5B89A]/55 bg-[#EFE2D3] px-3 py-1 text-xs font-semibold text-[#3B2B1E]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-primary-100 bg-primary-50/55 p-4"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-800 [&>svg]:h-5 [&>svg]:w-5">
                    {item.icon}
                  </span>
                  <h3 className="text-base font-bold text-primary-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-primary-900/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-sm items-end justify-center overflow-hidden rounded-[2.25rem] pt-8 md:max-w-md lg:max-w-none">
            <div className="absolute bottom-0 h-[78%] w-[86%] rounded-[2.25rem] bg-[#EFE2D3]" />
            <div className="absolute bottom-8 h-[64%] w-[72%] rounded-full bg-[#D5B89A]/45 blur-2xl" />
            <div className="absolute right-4 top-6 z-20 hidden items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-xs font-bold text-primary-950 backdrop-blur sm:flex">
              <MountainSnow className="h-4 w-4 text-primary-700" />
              instruktor sportu
            </div>
            <Image
              alt="Zdjęcie: Łukasz Męderak"
              src={AboutImg}
              className="relative z-10 w-full max-w-[19rem] object-contain sm:max-w-[22rem] lg:max-w-[24rem]"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
