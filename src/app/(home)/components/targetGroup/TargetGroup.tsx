"use client";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import React from "react";
import { motion } from "framer-motion";
import { fadeItem } from "@/animations/fade";
import Image from "next/image";

//assets
import NataliaImg from "@/assets/about/natalia.png";
import { ArrowRightCircle, Check, CheckCircle } from "lucide-react";

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

const TargetGroup = () => {
  return (
    <section className="w-full py-8 md:py-12 bg-gradient-to-b from-white to-green-50">
      <Container>
        {/* <PageHeading
          title="Kurs jest dla Ciebie, jeśli:"
          headerType="h2"
          position="center"
        /> */}
        <h2 className="text-blue-950 text-4xl font-semibold text-center my-12">
          Kurs{" "}
          <span className="bg-green-600 px-4 py-2 text-white rounded-2xl text-3xl">
            jest
          </span>{" "}
          dla Ciebie jeśli:
        </h2>
        <motion.div className="flex items-start justify-start flex-col gap-5">
          {targetGroupItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-center justify-start gap-6 w-full max-w-4xl bg-white rounded-xl p-7 text-blue-950 m-auto border border-slate-200/70"
            >
              <div>
                <Check strokeWidth={4} className="text-green-500" />
              </div>

              <text className="text-lg font-medium">{item.name}</text>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TargetGroup;
