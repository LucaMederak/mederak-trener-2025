"use client";

import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import { useLanguage } from "@/context/Language.context";
import { serviceOffers } from "@/data/serviceOffers";
import { ArrowUpRight, BadgeCheck, Dumbbell, Handshake, Laptop } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  "treningi-personalne": <Dumbbell />,
  "prowadzenie-online": <Laptop />,
  "wspolpraca-reklamowa": <Handshake />,
  konsultacje: <BadgeCheck />,
};

const translations = {
  pl: {
    title: "Jak mogę Ci pomóc",
    description:
      "Wybierz formę współpracy, która najlepiej pasuje do Twojego celu, trybu życia i miejsca, w którym teraz jesteś.",
    badge: "Oferta",
    details: "Zobacz szczegóły",
    offers: {
      "treningi-personalne": {
        title: "Treningi personalne",
        description:
          "Indywidualne treningi w Warszawie, nauka techniki i prowadzenie dopasowane do Twojego celu.",
      },
      "prowadzenie-online": {
        title: "Prowadzenie online",
        description:
          "Plan treningowy, wsparcie żywieniowe i regularna kontrola postępów bez względu na miejsce.",
      },
      konsultacje: {
        title: "Konsultacje",
        description:
          "Jednorazowe konsultacje dla osób, które chcą uporządkować trening, dietę lub kierunek działania.",
      },
      "wspolpraca-reklamowa": {
        title: "Współpraca reklamowa",
        description:
          "Materiały, kampanie i współprace marek z obszaru treningu, zdrowia, dietetyki i technologii.",
      },
    },
  },
  en: {
    title: "How I Can Help You",
    description:
      "Choose the type of cooperation that best fits your goal, lifestyle and current starting point.",
    badge: "Offer",
    details: "View details",
    offers: {
      "treningi-personalne": {
        title: "Personal Training",
        description:
          "Individual training sessions in Warsaw, technique coaching and support tailored to your goal.",
      },
      "prowadzenie-online": {
        title: "Online Coaching",
        description:
          "Training plan, nutrition support and regular progress tracking wherever you train.",
      },
      konsultacje: {
        title: "Consultations",
        description:
          "One-off consultations for people who want to organize their training, nutrition or direction.",
      },
      "wspolpraca-reklamowa": {
        title: "Brand Collaborations",
        description:
          "Content, campaigns and brand partnerships in fitness, health, nutrition and technology.",
      },
    },
  },
};

const ServiceOffers = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="w-full bg-primary-50/45 py-10 md:py-16">
      <Container className="flex flex-col items-center">
        <PageHeading
          title={t.title}
          description={t.description}
          headerType="h2"
          position="center"
          badgeType="default"
          badgeText={t.badge}
          className="mb-10 max-w-3xl"
        />

        <div className="grid w-full gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceOffers.map((offer) => {
            const offerCopy = t.offers[offer.slug as keyof typeof t.offers];

            return (
              <Link
                key={offer.slug}
                href={`/oferta/${offer.slug}`}
                className="group flex min-h-[17rem] flex-col justify-between rounded-2xl border border-primary-100 bg-white/82 p-5 transition hover:-translate-y-1 hover:border-primary-300 hover:bg-white"
              >
                <div className="flex flex-col gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-100 bg-primary-50 text-primary-800 [&>svg]:h-5 [&>svg]:w-5">
                    {icons[offer.slug]}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold leading-snug text-primary-950">
                      {offerCopy.title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-primary-900/75">
                      {offerCopy.description}
                    </p>
                  </div>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary-700 transition group-hover:text-primary-900">
                  {t.details}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServiceOffers;
