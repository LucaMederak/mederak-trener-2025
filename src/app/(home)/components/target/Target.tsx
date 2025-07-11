"use client";
import React from "react";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import {
  CheckCircleIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronsRightIcon,
  UserCheckIcon,
  XCircleIcon,
  XIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeItem } from "@/animations/fade";

const targetGroupItems = [
  {
    id: 1,
    name: "Masz dość walki z zaparciami, biegunkami lub nieregularnymi wypróżnieniami.",
  },
  {
    id: 2,
    name: "Chcesz zrozumieć swoje ciało i poprawić jego funkcjonowanie.",
  },
  {
    id: 3,
    name: "Szukasz trwałych i skutecznych rozwiązań wspierających zdrowie jelit.",
  },
  {
    id: 4,
    name: "Potrzebujesz prostego planu krok po kroku, który możesz wdrożyć w swoim.",
  },
  {
    id: 5,
    name: "Marzysz o lepszym samopoczuciu i większej energii każdego dnia.",
  },
];

const notTargetGroupItems = [
  {
    id: 1,
    name: "Szukasz szybkich rozwiązań typu „magiczną pigułkę” bez zmian w stylu życia.",
  },
  {
    id: 2,
    name: "Nie jesteś gotowy/a wprowadzić małych, ale konsekwentnych zmian w codziennej rutynie.",
  },
  {
    id: 3,
    name: " Nie odczuwasz problemów z trawieniem i wypróżnieniami.",
  },
  {
    id: 4,
    name: "Oczekujesz kompleksowego programu leczenia (to nie zastępuje porady medycznej).",
  },
];

const Target = () => {
  return (
    <section id="more-info" className="w-full py-8 md:py-12 bg-white">
      <Container className=" max-w-screen-xl flex items-center justify-center flex-col">
        <PageHeading
          badgeText="Przeznaczenie kursu"
          badgeType="default"
          title="Dla kogo przeznaczony jest kurs?"
          headerType="h2"
          position="center"
          description="Jeśli marzysz o trwałych, skutecznych rozwiązaniach wspierających zdrowie jelit i większej energii każdego dnia, ten kurs jest dla Ciebie!"
        />
        <div className="relative flex flex-col gap-12 lg:gap-0 lg:flex-row w-full  border-x border-t border-slate-200 border-dashed mt-4 lg:mt-16 rounded-lg">
          <div className="relative lg:border-r border-slate-200 border-dashed w-full lg:w-1/2 bg-gradient-to-b from-red-50 to-white">
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-600 p-4 rounded-full text-white">
              <XIcon />
            </span>
            <h2 className="text-blue-950 font-bold text-2xl text-center mb-8 mt-16 px-6">
              Kurs nie jest dla Ciebie jeśli
            </h2>
            <motion.div className="flex items-start justify-start flex-col gap-5 p-6 ">
              {notTargetGroupItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center justify-start gap-3 lg:gap-6 w-full text-blue-950"
                >
                  <div>
                    <XIcon className="text-red-500" />
                  </div>

                  <span className="text-lg font-medium">{item.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="relative w-full lg:w-1/2 bg-gradient-to-b from-green-50 to-white">
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 p-4 rounded-full text-white">
              <UserCheckIcon />
            </span>
            <h2 className="text-blue-950 font-bold text-2xl text-center mb-8 mt-16 px-6">
              Kurs jest dla Ciebie jeśli
            </h2>
            <motion.div className="flex items-start justify-start flex-col gap-5 p-6">
              {targetGroupItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center justify-start gap-3 lg:gap-6 w-full max-w-4xl text-blue-950"
                >
                  <div>
                    <CheckIcon strokeWidth={4} className="text-green-500" />
                  </div>

                  <text className="text-lg font-medium">{item.name}</text>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <span className="hidden lg:block absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full text-blue-950 border border-slate-300 border-dashed">
            <ChevronsRightIcon />
          </span>
        </div>
      </Container>
    </section>
  );
};

export default Target;
