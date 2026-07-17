"use client";

import { fadeAnimation, fadeItem } from "@/animations/fade";
import {
  sizeStyles,
  variantStyles,
} from "@/components/button/Button";
import Container from "@/components/container/Container";
import LukaszCutout from "@/assets/hero/lukasz-2026-bez-tla.png";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { ComponentProps, ReactNode } from "react";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

type HeroPropositionProps = {
  className?: ComponentProps<"section">["className"];
  children?: ReactNode;
};

const HeroProposition = ({ className }: HeroPropositionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className={twMerge(
        "relative flex min-h-screen w-full items-center overflow-hidden bg-[#0D1011] pt-28 text-white",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,161,25,0.08),transparent_32%),radial-gradient(circle_at_80%_46%,rgba(249,247,240,0.12),transparent_32%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#17110B] via-[#0D1011] to-black" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(249,247,240,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(249,247,240,0.45)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_center,rgba(249,247,240,0.8)_1px,transparent_1.5px)] [background-size:22px_22px]" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary-500/12 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-primary-100/18 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />

      <Container className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-10 py-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(28rem,1fr)]">
        <motion.div
          variants={fadeAnimation}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex max-w-2xl -translate-x-4 -translate-y-10 flex-col items-start gap-6 xl:-translate-x-8"
        >
          <motion.div
            variants={fadeItem}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
              <MapPin className="h-4 w-4 text-primary-500" />
              Warszawa, Jana Kazimierza
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
              Online
            </span>
          </motion.div>

          <motion.div variants={fadeItem} className="flex flex-col gap-5">
            <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-[3.25rem]">
              Łukasz Męderak
              <span className="block text-primary-500">
                Trener Personalny
                <span className="block">i Dietetyk Kliniczny</span>
              </span>
            </h1>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-white/72 md:text-xl">
              Pomagam poprawić sylwetkę, zdrowie i sprawność przez trening
              dopasowany do Twoich możliwości oraz rozsądne wsparcie żywieniowe.
            </p>
          </motion.div>

          <motion.div
            variants={fadeItem}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="cooperation"
              smooth
              spy
              offset={-50}
              className={twMerge(
                variantStyles["primary"],
                sizeStyles["xl"],
                "group relative flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl border-2 border-primary-400 !text-white shadow-xl shadow-black/20"
              )}
            >
              <span className="absolute top-0 left-[-200%] h-full w-[300%] rotate-12 animate-slide bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
              <span className="relative z-10">Zobacz jak pracuję</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="contact"
              smooth
              spy
              offset={-80}
              className="flex cursor-pointer items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white shadow-sm backdrop-blur transition hover:bg-white/20"
            >
              Umów konsultację
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeAnimation}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="relative mx-auto hidden min-h-[42rem] w-full max-w-[40rem] items-end justify-center lg:flex"
        >
          <div className="absolute bottom-6 h-[33rem] w-[33rem] rounded-full bg-[radial-gradient(circle,rgba(249,247,240,0.14),rgba(249,247,240,0.04)_44%,transparent_70%)]" />
          <div className="absolute bottom-10 h-[34rem] w-[26rem] rounded-full border border-white/8" />
          <div className="absolute bottom-0 h-24 w-[70%] rounded-full bg-black/45 blur-2xl" />
          <div className="absolute right-4 top-20 z-20 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white shadow-xl backdrop-blur">
            <p className="text-sm font-semibold">Bezpieczna technika</p>
            <p className="text-xs font-medium text-white/60">
              od pierwszego treningu
            </p>
          </div>
          <div className="absolute bottom-14 left-12 z-20 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white shadow-xl backdrop-blur">
            <p className="text-2xl font-bold">Plan</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
              trening + żywienie
            </p>
          </div>
          <motion.div
            variants={fadeItem}
            className="relative z-10 h-[43rem] translate-y-14"
          >
            <Image
              src={LukaszCutout}
              alt="Łukasz Męderak"
              priority
              className="h-full w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroProposition;
