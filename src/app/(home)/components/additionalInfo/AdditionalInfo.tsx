"use client";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import React from "react";
import { motion } from "framer-motion";
import { fadeItem } from "@/animations/fade";
import Image from "next/image";

//assets
import NataliaImg from "@/assets/about/natalia.png";
import { ArrowRightCircle } from "lucide-react";

const additionalInfoItems = [
  {
    id: 1,
    name: "Czym jest histamina i jakie role pełni w organizmie?",
  },
  {
    id: 2,
    name: "Co jest przyczyną nietolerancji histaminy?",
  },
  {
    id: 3,
    name: "Czym jest enzym DAO i jakie ma znaczenie dla prawidłowego działania organizmu?",
  },
  {
    id: 4,
    name: "Jaka zależność istnieje pomiędzy nietolerancją histaminy a innymi zaburzeniami działania układu pokarmowego?",
  },
  {
    id: 5,
    name: "Jak jeść, żeby nie nasilać objawów i nie zwariować?",
  },
];

const AdditionalInfo = () => {
  return (
    <section id="aboutCourse" className="w-full py-8 md:py-12">
      <Container>
        <motion.div
          variants={fadeItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-start justify-start flex-col gap-8 md:gap-12 lg:flex-row"
        >
          <div className="flex items-start justify-start flex-col gap-6 w-full lg:w-1/2">
            <h2 className="text-blue-950 text-3xl font-bold">
              Przygotowałam dla Ciebie kompleksowy pakiet wiedzy na temat
              nietolerancji histaminy, który zawiera odpowiedzi na pytania takie
              jak:
            </h2>
            <ul className="flex flex-col gap-4 text-blue-950 text-lg font-normal">
              {additionalInfoItems.map((item) => (
                <li key={item.id} className="flex items-center gap-4">
                  <div>
                    <ArrowRightCircle className="text-green-600 w-5 h-5" />
                  </div>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <Image
            alt="Zdjęcie: Natalia Stebel"
            width={500}
            height={300}
            src={NataliaImg}
            className=" w-full lg:w-1/2 rounded-xl"
          />
        </motion.div>
        {/* <motion.div
          variants={fadeItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col gap-2 w-full rounded-xl bg-primary-50 p-8 mt-16 lg:mt-28 max-w-5xl mx-auto "
        >
          <h3 className="text-blue-950 text-2xl md:text-3xl font-bold leading-normal text-center">
            Ja dostarczę Ci wiedzę,
          </h3>
          <span className="text-blue-950 text-xl md:text-2xl font-normal leading-normal text-center">
            ale to od Ciebie zależy, co z tym zrobisz i w jakim kierunku
            pójdziesz. To może być najlepsza inwestycja jaką podjąłeś w
            ostatnich latach!
          </span>
        </motion.div> */}
      </Container>
    </section>
  );
};

export default AdditionalInfo;
