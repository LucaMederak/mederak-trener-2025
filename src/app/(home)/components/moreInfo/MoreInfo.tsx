"use client";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import React from "react";
import { Link } from "react-scroll";
import { twMerge } from "tailwind-merge";
import { sizeStyles, variantStyles } from "@/components/button/Button";

const MoreInfo = () => {
  return (
    <section id="more-info" className="w-full py-8 md:py-12 bg-primary-50">
      <Container className=" max-w-screen-md flex items-center justify-center flex-col">
        <PageHeading
          badgeText="Korzyści"
          badgeType="default"
          title="Dlaczego warto?"
          headerType="h2"
          position="center"
          className=" mb-4"
        />
        <p className="text-blue-950 font-medium text-lg text-center">
          Współpraca ze mną to coś więcej niż tylko treningi – to kompleksowe i
          indywidualne podejście do Twojego ciała, celów i stylu życia. Pracuję
          z osobami, które chcą zbudować solidne fundamenty, zrozumieć swoje
          ciało i trenować w sposób świadomy, bezpieczny i skuteczny.
        </p>
        <p className="text-blue-950 font-bold text-lg text-center my-4">
          Jeśli zależy Ci na jakości, zrozumieniu procesu i realnych efektach –
          zacznijmy współpracę. Napisz do mnie i zrób pierwszy krok w stronę
          świadomego treningu
        </p>
        <Link
          to={"contact"}
          smooth={true}
          spy={true}
          duration={400}
          className={twMerge(
            ` ${variantStyles["primary"]} ${sizeStyles["xl"]} text-white mt-4 max-w-xs flex items-center justify-center w-full lg:w-auto cursor-pointer transition ease-out  rounded-xl relative overflow-hidden`
          )}
        >
          <span className="absolute top-0 left-[-200%] w-[300%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rotate-22 animate-slide"></span>
          Umów konsultację
        </Link>
      </Container>
    </section>
  );
};

export default MoreInfo;
