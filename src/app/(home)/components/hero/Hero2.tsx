"use client";
import Image from "next/image";
import React, { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Container from "../../../../components/container/Container";
import {
  sizeStyles,
  variantStyles,
} from "../../../../components/button/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

//assets
import Lukasz2026Mobile from "@/assets/hero/lukasz-mederak-2026.jpg";
import Lukasz2026Desktop from "@/assets/hero/lukasz-mederak-2026-desktop.png";
import { shopUrlLink } from "@/utils/shopUrl";
import { useInView } from "react-intersection-observer";
import { fadeAnimation, fadeItem } from "@/animations/fade";

type IHeroProps = {
  className?: ComponentProps<"div">["className"];
  children?: ReactNode;
};

const Hero = ({ className, children }: IHeroProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animacja tylko raz
    threshold: 0.2, // 20% sekcji musi być widoczne
  });

  return (
    <section
      ref={ref}
      className={twMerge(
        `relative w-full h-[90vh] flex items-center justify-center ${className}`
      )}
    >
      {/* Tło */}
      <Image
        src={Lukasz2026Mobile}
        alt="Łukasz Męderak Trener Personalny"
        fill
        className="lg:hidden object-cover"
        priority
      />

      <Image
        src={Lukasz2026Desktop}
        alt="Łukasz Męderak Trener Personalny"
        fill
        className="hidden lg:block object-cover"
        priority
      />

      {/* Nakładka */}
      <div className="absolute inset-0 bg-black/30"></div>
      {/* Jeśli chcesz czarną: bg-black/50 */}

      {/* Treść */}
      <Container className="relative z-10 text-center text-white flex flex-col items-center justify-center gap-6">
        <motion.div
          variants={fadeAnimation}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center gap-6"
        >
          <motion.h1
            variants={fadeItem}
            className="text-4xl md:text-5xl font-bold lg:leading-tight"
          >
            Łukasz Męderak – Trener Personalny i&nbsp;Dietetyk
          </motion.h1>

          <motion.h2
            variants={fadeItem}
            className="hidden sm:block text-2xl font-semibold lg:leading-tight"
          >
            Kompleksowe wsparcie w&nbsp;poprawie zdrowia, sylwetki i&nbsp;formy
          </motion.h2>

          <motion.p
            variants={fadeItem}
            transition={{ delay: 0.4 }}
            className="text-lg max-w-2xl"
          >
            Wspieram osoby, które chcą poprawić sprawność, sylwetkę
            i&nbsp;nawyki żywieniowe. Pomagam trenować bezpiecznie, skutecznie
            i&nbsp;z&nbsp;planem, łącząc wiedzę treningową z&nbsp;dietetyką.
          </motion.p>

          <Link
            to={"cooperation"}
            smooth={true}
            spy={true}
            offset={-50}
            className={twMerge(
              `${variantStyles["primary"]} ${sizeStyles["2xl"]} flex items-center justify-center cursor-pointer transition ease-out border-2 border-blue-400 rounded-xl relative overflow-hidden`
            )}
          >
            <span className="absolute top-0 left-[-200%] w-[300%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-slide"></span>
            Zapoznaj się z ofertą
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
