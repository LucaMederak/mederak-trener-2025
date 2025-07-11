"use client";
import Image from "next/image";
import React, { ComponentProps, ReactNode, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Container from "../../../../components/container/Container";
import {
  sizeStyles,
  variantStyles,
} from "../../../../components/button/Button";
import { Link } from "react-scroll";

//asstes
import Avatar from "@/assets/hero/hero-3.png";

type IHeroProps = {
  className?: ComponentProps<"div">["className"];
  children?: ReactNode;
};

const Hero = ({ className, children }: IHeroProps) => {
  return (
    <section
      className={`${twMerge(
        `w-full bg-white pt-6 md:pt-20 pb-10 md:pb-16 ${className}`
      )}`}
    >
      <Container className="flex items-center justify-center flex-col gap-8 xl:gap-12">
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 lg:leading-tight text-center">
            Trener Łukasz Męderak
          </h1>
          <p className="text-lg font-normal text-blue-950 lg:leading-normal text-center">
            Jeśli chcesz rozpocząć treningi na siłowni, poprawić{" "}
            <strong>zdrowie</strong>, uzyskać <strong>lepszą sylwetkę</strong>{" "}
            czy polepszyć wyniki w danej <strong>dyscyplinie sportu</strong>, to
            chętnie Ci w tym pomogę!
          </p>
          <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
            <Link
              to={"benefits"}
              smooth={true}
              spy={true}
              offset={-100}
              duration={400}
              className={twMerge(
                `${variantStyles["secondary"]} ${sizeStyles["2xl"]} border-2 border-slate-200/80 flex items-center justify-center w-full lg:w-auto cursor-pointer transition ease-out relative overflow-hidden`
              )}
            >
              <span className="absolute top-0 left-[-200%] w-[300%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rotate-22 animate-slide"></span>
              Zapoznaj się z ofertą
            </Link>
            <Link
              to={"pricing"}
              smooth={true}
              spy={true}
              // offset={-100}
              duration={400}
              className={twMerge(
                ` ${variantStyles["primary"]} ${sizeStyles["xl"]} bg-[#39FF14] bg-red-500 text-white flex items-center justify-center w-full lg:w-auto cursor-pointer transition ease-out  rounded-xl relative overflow-hidden`
              )}
            >
              <span className="absolute top-0 left-[-200%] w-[300%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rotate-22 animate-slide"></span>
              Umów konsultację
            </Link>
          </div>
        </div>
        <Image
          src={Avatar}
          width={800}
          height={1600}
          alt="Łukasz Męderak"
          className=" w-full xl:w-[700px]"
        />
      </Container>
    </section>
  );
};

export default Hero;
