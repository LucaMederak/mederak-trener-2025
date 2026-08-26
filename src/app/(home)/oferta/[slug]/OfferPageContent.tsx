"use client";

import Container from "@/components/container/Container";
import { useLanguage } from "@/context/Language.context";
import {
  serviceOffers,
  serviceOfferTranslations,
  ServiceOffer,
} from "@/data/serviceOffers";
import { consultationDetails } from "@/data/consultationOffer";
import { onlineCoachingDetails } from "@/data/onlineCoachingOffer";
import { personalTrainingDetails } from "@/data/personalTrainingOffer";
import { ArrowLeft, CheckCircle2, Mail, Sparkles } from "lucide-react";
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
  const trainingDetails =
    offer.slug === "treningi-personalne"
      ? personalTrainingDetails[language]
      : null;
  const onlineDetails =
    offer.slug === "prowadzenie-online" ? onlineCoachingDetails[language] : null;
  const consultation =
    offer.slug === "konsultacje" ? consultationDetails[language] : null;

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

          {trainingDetails && (
            <>
              <section className="overflow-hidden rounded-3xl border border-primary-100 bg-white/90 p-6 md:p-10">
                <div className="max-w-3xl">
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">
                    {trainingDetails.pricingEyebrow}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-primary-950 md:text-4xl">
                    {trainingDetails.pricingTitle}
                  </h2>
                  <p className="mt-3 text-base font-medium leading-relaxed text-primary-900/70">
                    {trainingDetails.pricingDescription}
                  </p>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
                  <article className="relative flex flex-col rounded-3xl border border-[#D5B89A]/55 bg-[#F3E8D8] p-6 text-primary-950 md:p-8">
                    <span className="w-fit rounded-full border border-[#CBA783]/60 bg-[#EFE2D3] px-3 py-1 text-xs font-bold text-[#3B2B1E]">
                      {trainingDetails.start.badge}
                    </span>
                    <h3 className="mt-5 text-2xl font-bold">
                      {trainingDetails.start.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-primary-900/70">
                      {trainingDetails.start.subtitle}
                    </p>
                    <div className="mt-7 text-4xl font-bold">
                      {trainingDetails.start.price}
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary-900/60">
                      {trainingDetails.start.priceNote}
                    </p>
                    <p className="mt-6 text-sm font-medium leading-relaxed text-primary-900/75">
                      {trainingDetails.start.description}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 border-t border-[#D5B89A]/60 pt-5">
                      {trainingDetails.start.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm font-medium leading-relaxed text-primary-900/75"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:lukasz@mederak.com?subject=${encodeURIComponent(trainingDetails.start.name)}`}
                      className="mt-7 inline-flex w-fit rounded-full bg-primary-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-600"
                    >
                      {trainingDetails.start.cta}
                    </a>
                  </article>

                  <article className="rounded-3xl border border-primary-100 bg-primary-50/60 p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-primary-950">
                      {trainingDetails.packages.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-primary-900/70">
                      {trainingDetails.packages.description}
                    </p>
                    <div className="mt-6 grid gap-3">
                      {trainingDetails.packages.items.map((item) => (
                        <div
                          key={item.sessions}
                          className="flex flex-col gap-2 rounded-2xl border border-primary-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <div className="font-bold text-primary-950">
                              {item.sessions}
                            </div>
                            <div className="mt-0.5 text-xs font-semibold text-primary-900/55">
                              {item.perSession}
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-primary-950">
                            {item.price}
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`mailto:lukasz@mederak.com?subject=${encodeURIComponent(trainingDetails.packages.title)}`}
                      className="mt-6 inline-flex w-fit rounded-full bg-primary-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-600"
                    >
                      {trainingDetails.packages.cta}
                    </a>
                  </article>
                </div>
              </section>

              <section className="rounded-3xl border border-primary-100 bg-white/90 p-6 md:p-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold text-primary-950">
                    {trainingDetails.startDetailsTitle}
                  </h2>
                  <p className="mt-3 font-medium leading-relaxed text-primary-900/70">
                    {trainingDetails.startDetailsDescription}
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {trainingDetails.stages.map((stage, index) => (
                    <article
                      key={stage.title}
                      className="rounded-2xl border border-primary-100 bg-primary-50/45 p-5 md:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-primary-950">
                            {stage.title}
                          </h3>
                          <p className="mt-2 text-sm font-medium leading-relaxed text-primary-900/70">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-5 flex flex-col gap-2 border-t border-primary-100 pt-4">
                        {stage.items.map((item) => (
                          <li key={item} className="flex gap-2 text-sm font-medium leading-relaxed text-primary-900/70">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <aside className="rounded-2xl border border-[#D5B89A]/55 bg-[#F3E8D8] p-6 text-primary-950">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary-600" />
                      <h3 className="text-lg font-bold">{trainingDetails.bonusTitle}</h3>
                    </div>
                    <ul className="mt-4 flex flex-col gap-3">
                      {trainingDetails.bonusItems.map((item) => (
                        <li key={item} className="flex gap-2 text-sm font-medium text-primary-900/75">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>
                  <aside className="rounded-2xl border border-primary-100 bg-white p-6">
                    <h3 className="text-lg font-bold text-primary-950">
                      {trainingDetails.startForWhoTitle}
                    </h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {trainingDetails.startForWho.map((item) => (
                        <li key={item} className="flex gap-2 text-sm font-medium leading-relaxed text-primary-900/70">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>
                </div>
              </section>

              <section className="rounded-3xl border border-primary-100 bg-white/90 p-6 md:p-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold text-primary-950">
                    {trainingDetails.packageDetailsTitle}
                  </h2>
                  <p className="mt-3 font-medium leading-relaxed text-primary-900/70">
                    {trainingDetails.packageDetailsDescription}
                  </p>
                </div>
                <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2">
                  {trainingDetails.packageBenefits.map((benefit) => (
                    <article key={benefit.title} className="border-t border-primary-100 pt-5">
                      <h3 className="flex gap-2 text-lg font-bold text-primary-950">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                        <span>{benefit.title}</span>
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-primary-900/70">
                        {benefit.description}
                      </p>
                      {benefit.items && (
                        <ul className="mt-3 flex flex-col gap-2 pl-7">
                          {benefit.items.map((item) => (
                            <li key={item} className="list-disc text-sm font-medium leading-relaxed text-primary-900/65">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
                <p className="mt-8 rounded-2xl bg-primary-50 p-5 text-base font-bold leading-relaxed text-primary-950">
                  {trainingDetails.closing}
                </p>
              </section>
            </>
          )}

          {onlineDetails && (
            <>
              <section className="overflow-hidden rounded-3xl border border-primary-100 bg-white/90 p-6 md:p-10">
                <div className="max-w-3xl">
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">
                    {onlineDetails.pricingEyebrow}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-primary-950 md:text-4xl">
                    {onlineDetails.pricingTitle}
                  </h2>
                  <p className="mt-3 text-base font-medium leading-relaxed text-primary-900/70">
                    {onlineDetails.pricingDescription}
                  </p>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                  {onlineDetails.plans.map((plan) => (
                    <article
                      key={plan.duration}
                      className={`flex flex-col rounded-3xl border p-6 md:p-7 ${
                        plan.badge
                          ? "border-[#D5B89A]/65 bg-[#F3E8D8]"
                          : "border-primary-100 bg-primary-50/55"
                      }`}
                    >
                      <div className="flex min-h-7 items-start justify-between gap-3">
                        <h3 className="text-xl font-bold text-primary-950">
                          {plan.duration}
                        </h3>
                        {plan.badge && (
                          <span className="rounded-full border border-[#CBA783]/60 bg-[#EFE2D3] px-2.5 py-1 text-xs font-bold text-[#3B2B1E]">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <div className="mt-6 text-4xl font-bold text-primary-950">
                        {plan.price}
                      </div>
                      <p className="mt-1 text-sm font-semibold text-primary-900/60">
                        {plan.monthly}
                      </p>
                      <p className="mt-4 w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-primary-800">
                        {plan.savings}
                      </p>
                      <p className="mt-5 text-sm font-medium leading-relaxed text-primary-900/70">
                        {plan.description}
                      </p>
                      <a
                        href={`mailto:lukasz@mederak.com?subject=${encodeURIComponent(`${onlineDetails.cta} - ${plan.duration}`)}`}
                        className="mt-7 inline-flex w-fit rounded-full bg-primary-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-600"
                      >
                        {onlineDetails.cta}
                      </a>
                    </article>
                  ))}
                </div>
                <p className="mt-5 text-sm font-semibold leading-relaxed text-primary-900/60">
                  {onlineDetails.pricingNote}
                </p>
              </section>

              <section className="rounded-3xl border border-primary-100 bg-white/90 p-6 md:p-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold text-primary-950">
                    {onlineDetails.detailsTitle}
                  </h2>
                  <p className="mt-3 font-medium leading-relaxed text-primary-900/70">
                    {onlineDetails.detailsDescription}
                  </p>
                </div>
                <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2">
                  {onlineDetails.benefits.map((benefit) => (
                    <article
                      key={benefit.title}
                      className="border-t border-primary-100 pt-5"
                    >
                      <h3 className="flex gap-2 text-lg font-bold text-primary-950">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                        <span>{benefit.title}</span>
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-primary-900/70">
                        {benefit.description}
                      </p>
                      {benefit.items && (
                        <ul className="mt-3 flex flex-col gap-2 pl-7">
                          {benefit.items.map((item) => (
                            <li
                              key={item}
                              className="list-disc text-sm font-medium leading-relaxed text-primary-900/65"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-primary-100 bg-white/90 p-6 md:p-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold text-primary-950">
                    {onlineDetails.processTitle}
                  </h2>
                  <p className="mt-3 font-medium leading-relaxed text-primary-900/70">
                    {onlineDetails.processDescription}
                  </p>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {onlineDetails.process.map((step, index) => (
                    <article
                      key={step.title}
                      className="rounded-2xl border border-primary-100 bg-primary-50/45 p-5 md:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-primary-950">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm font-medium leading-relaxed text-primary-900/70">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <p className="mt-8 rounded-2xl border border-[#D5B89A]/55 bg-[#F3E8D8] p-5 text-base font-bold leading-relaxed text-primary-950">
                  {onlineDetails.closing}
                </p>
              </section>
            </>
          )}

          {consultation && (
            <>
              <section className="overflow-hidden rounded-3xl border border-primary-100 bg-white/90 p-6 md:p-10">
                <div className="max-w-3xl">
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">
                    {consultation.pricingEyebrow}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-primary-950 md:text-4xl">
                    {consultation.pricingTitle}
                  </h2>
                  <p className="mt-3 text-base font-medium leading-relaxed text-primary-900/70">
                    {consultation.pricingDescription}
                  </p>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
                  <article className="relative flex flex-col rounded-3xl border border-[#D5B89A]/55 bg-[#F3E8D8] p-6 text-primary-950 md:p-8">
                    <span className="w-fit rounded-full border border-[#CBA783]/60 bg-[#EFE2D3] px-3 py-1 text-xs font-bold text-[#3B2B1E]">
                      {consultation.offer.name}
                    </span>
                    <div className="mt-7 text-6xl font-bold leading-none md:text-7xl">
                      {consultation.offer.price}
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary-900/60">
                      {consultation.offer.priceNote}
                    </p>
                    <p className="mt-6 text-sm font-medium leading-relaxed text-primary-900/75">
                      {consultation.offer.description}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2 border-t border-[#D5B89A]/60 pt-5">
                      {consultation.offer.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm font-medium leading-relaxed text-primary-900/75"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:lukasz@mederak.com?subject=${encodeURIComponent(consultation.offer.name)}`}
                      className="mt-7 inline-flex w-fit rounded-full bg-primary-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-600"
                    >
                      {consultation.offer.cta}
                    </a>
                  </article>

                  <article className="rounded-3xl border border-primary-100 bg-primary-50/60 p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-primary-950">
                      {consultation.detailsTitle}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-primary-900/70">
                      {consultation.detailsDescription}
                    </p>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {consultation.benefits.map((benefit) => (
                        <div
                          key={benefit.title}
                          className="rounded-2xl border border-primary-100 bg-white p-4"
                        >
                          <h4 className="flex gap-2 text-base font-bold text-primary-950">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                            <span>{benefit.title}</span>
                          </h4>
                          <p className="mt-2 text-sm font-medium leading-relaxed text-primary-900/70">
                            {benefit.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
                <p className="mt-5 rounded-2xl border border-[#D5B89A]/55 bg-[#F3E8D8] p-5 text-base font-bold leading-relaxed text-primary-950">
                  {consultation.closing}
                </p>
              </section>
            </>
          )}

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
