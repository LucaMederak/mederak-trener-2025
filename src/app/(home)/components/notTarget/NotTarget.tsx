"use client";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import React from "react";
import { motion } from "framer-motion";
import { fadeItem } from "@/animations/fade";
import Image from "next/image";

//assets
import NataliaImg from "@/assets/about/natalia.png";
import { ArrowRightCircle, XCircle } from "lucide-react";

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

const NotTargetGroup = () => {
  return (
    <section className="w-full py-8 md:py-12 bg-gradient-to-b from-white to-red-50">
      <Container>
        {/* <PageHeading
          title="Kurs nie jest dla Ciebie, jeśli:"
          headerType="h2"
          position="center"
        /> */}
        <h2 className="text-blue-950 text-4xl font-semibold text-center my-12">
          Kurs{" "}
          <span className="bg-red-600 px-3 py-2 text-white rounded-2xl text-3xl">
            nie jest
          </span>{" "}
          dla Ciebie jeśli:
        </h2>
        <motion.div className="flex items-start justify-start flex-col gap-5">
          {notTargetGroupItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-center justify-start gap-6 w-full max-w-4xl bg-white rounded-xl p-7 text-blue-950 m-auto border border-slate-200/70"
            >
              <div>
                <XCircle className="text-red-500" />
              </div>

              <span className="text-lg font-medium">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default NotTargetGroup;
