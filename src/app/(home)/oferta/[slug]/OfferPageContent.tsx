"use client";

import Container from "@/components/container/Container";
import { useLanguage } from "@/context/Language.context";
import {
  serviceOffers,
  serviceOfferTranslations,
  ServiceOffer,
} from "@/data/serviceOffers";
import { ArrowLeft, CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";

const uiTranslations = {
  pl: {
    back: "Wróć na stronę główną",
    summary: "W skrócie",
    forWho: "Dla kogo",
    process: "Jak wygląda współpraca",
    benefits: "Co zyskujesz",
    other: "Pozostałe formy współpracy",
    ctaTitle: "Chcesz omówić szczegóły?",
    ctaDescription:
      "Napisz do mnie, a dobierzemy najlepszą formę współpracy.",
  },
  en: {
    back: "Back to homepage",
    summary: "In short",
    forWho: "Who It Is For",
    process: "How Cooperation Works",
    benefits: "What You Gain",
    other: "Other Ways to Work Together",
    ctaTitle: "Want to Discuss the Details?",
    ctaDescription:
      "Message me and we will choose the best form of cooperation.",
  },
};

type OfferPageContentProps = {
  offer: ServiceOffer;
};

const OfferPageContent = ({ offer }: OfferPageContentProps) => {
  const { language } = useLanguage();
  const ui = uiTranslations[language];
  const copy =
    language === "en" ? serviceOfferTranslations[offer.slug] : offer;

  return (
    <main className="w-full bg-primary-50/45 pt-36">
      <section className="w-full pb-14 md:pb-20">
        <Container className="flex flex-col gap-8">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-primary-800 transition hover:text-primary-950"
          >
            <ArrowLeft className="h-4 w-4" />
            {ui.back}
          </Link>

          <div className="grid gap-8 rounded-3xl border border-primary-100 bg-white/85 p-6 md:p-10 lg:grid-cols-[1fr_22rem]">
            <div className="flex flex-col gap-5">
              <span className="w-fit rounded-full border border-[#D5B89A]/55 bg-[#EFE2D3] px-2.5 py-0.5 text-xs font-semibold text-[#3B2B1E]">
                {copy.eyebrow}
              </span>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-primary-950 md:text-5xl">
                {copy.titleLines
                  ? copy.titleLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))
                  : copy.title}
              </h1>
              <p className="max-w-3xl text-lg font-medium leading-relaxed text-primary-900/75">
                {copy.pageDescription}
              </p>
            </div>

            <aside className="rounded-2xl border border-primary-100 bg-primary-50/70 p-5">
              <h2 className="text-base font-bold text-primary-950">
                {ui.summary}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {copy.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-2 text-sm font-medium leading-relaxed text-primary-900/75"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <section className="rounded-3xl border border-primary-100 bg-white/80 p-6 md:p-7">
              <h2 className="text-xl font-bold text-primary-950">
                {ui.forWho}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {copy.forWho.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm font-medium leading-relaxed text-primary-900/75"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-primary-100 bg-white/80 p-6 md:p-7">
              <h2 className="text-xl font-bold text-primary-950">
                {ui.process}
              </h2>
              <ol className="mt-5 flex flex-col gap-3">
                {copy.process.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm font-medium leading-relaxed text-primary-900/75"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-800">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-3xl border border-primary-100 bg-white/80 p-6 md:p-7">
              <h2 className="text-xl font-bold text-primary-950">
                {ui.benefits}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {copy.benefits.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm font-medium leading-relaxed text-primary-900/75"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="rounded-3xl border border-primary-100 bg-white/80 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-primary-950">
              {ui.other}
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {serviceOffers
                .filter((item) => item.slug !== offer.slug)
                .map((item) => {
                  const itemCopy =
                    language === "en"
                      ? serviceOfferTranslations[item.slug]
                      : item;

                  return (
                    <Link
                      key={item.slug}
                      href={`/oferta/${item.slug}`}
                      className="rounded-2xl border border-primary-100 bg-primary-50/55 p-4 transition hover:border-primary-300 hover:bg-primary-50"
                    >
                      <h3 className="text-base font-bold text-primary-950">
                        {itemCopy.shortTitle}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-primary-900/70">
                        {itemCopy.description}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </section>

          <div className="flex flex-col items-start gap-4 rounded-3xl border border-primary-100 bg-white/80 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="text-2xl font-bold text-primary-950">
                {ui.ctaTitle}
              </h2>
              <p className="mt-2 text-base font-medium text-primary-900/70">
                {ui.ctaDescription}
              </p>
            </div>
            <a
              href="mailto:lukasz@mederak.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-600"
            >
              <Mail className="h-4 w-4" />
              lukasz@mederak.com
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default OfferPageContent;
