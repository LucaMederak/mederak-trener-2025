"use client";
import React from "react";
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import { motion } from "framer-motion";
import { fadeAnimation, fadeItem } from "@/animations/fade";

import CardList from "@/components/cards/CardList";
import { Check, InfoIcon } from "lucide-react";
import { formatPrice } from "@/utils/formatPrice";
import Button, { sizeStyles, variantStyles } from "@/components/button/Button";
import { shopUrlLink } from "@/utils/shopUrl";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type IPricingItem = {
  id: number;
  name: string;
  href: string;
  regularPrice: number;
  salePrice?: number;
  badge?: string;
  available: boolean;
  features: {
    id: number;
    name: string;
  }[];
  buttonName?: string;
};

const pricingItems: IPricingItem[] = [
  {
    id: 1,
    name: "📦 Pakiet BASIC",
    href: `${shopUrlLink}/pozegnaj-wzdecia-i-gazy-na-zawsze-basic`,
    regularPrice: 129,
    // salePrice: 89,
    available: true,
    features: [
      {
        id: 1,
        name: "Dostęp do webinaru na żywo",
      },
      {
        id: 2,
        name: "Dostęp do nagrania webinaru",
      },
    ],
    buttonName: "Kup pakiet",
  },
  {
    id: 2,
    name: "💎 Pakiet PREMIUM",
    href: `${shopUrlLink}/pozegnaj-wzdecia-i-gazy-na-zawsze-premium`,
    regularPrice: 169,
    // salePrice: 119,
    available: true,
    features: [
      { id: 1, name: "Dostęp do webinaru na żywo" },
      {
        id: 2,
        name: "Dostęp do nagrania webinaru",
      },
      {
        id: 3,
        name: "Dostęp do masterclass na żywo - omówię Wasze nadesłane historie i pytania, odpowiem na personalne pytania",
      },
      {
        id: 4,
        name: "Dostęp do nagrania masterclass",
      },
      {
        id: 5,
        name: "Prezentacja PDF z webinaru",
      },
      {
        id: 6,
        name: "Członkostwo w zamkniętej grupie na Facebooku",
      },
    ],
    buttonName: "Kup pakiet",
  },
  {
    id: 3,
    name: "👑 Pakiet VIP",
    href: `${shopUrlLink}/pozegnaj-wzdecia-i-gazy-na-zawsze-vip`,
    regularPrice: 719,
    // salePrice: 649,
    badge: "Tylko 3 miejsca",
    available: false,
    features: [
      {
        id: 1,
        name: "Dostęp do webinaru na żywo",
      },
      {
        id: 2,
        name: "Dostęp do nagrania webinaru",
      },
      {
        id: 3,
        name: "Dostęp do masterclass na żywo - omówię Wasze nadesłane historie i pytania, odpowiem na personalne pytania",
      },
      {
        id: 4,
        name: "Dostęp do nagrania masterclass",
      },
      {
        id: 5,
        name: "Członkostwo w zamkniętej grupie na Facebooku",
      },
      {
        id: 6,
        name: "Indywidualna konsultacja (90 minut) z personalnymi zaleceniami!",
      },
    ],
  },
];

// ${
//   itemIndex === 1 &&
//   " bg-defaultRed-500 border-defaultRed-100 hover:bg-defaultRed-600 delay-500"
// }
//  ${
//   itemIndex === 2 &&
//   "bg-black border-slate-200 hover:bg-slate-800 delay-1000"
// }

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-8 md:py-12 bg-white">
      <Container>
        <PageHeading
          badgeText="Pakiety uczestnictwa"
          badgeType="default"
          title="Webinar dostępny w 3 pakietach"
          description="Wybierz pakiet, który najbardziej Ci odpowiada"
          headerType="h2"
          position="center"
        />
        <CardList className="xl:grid-cols-auto-fill-image">
          {pricingItems.map((item, itemIndex) => (
            <motion.div
              variants={fadeItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={item.id}
              className="flex items-start justify-start flex-col border border-slate-200 bg-white rounded-xl text-blue-950"
            >
              <div
                className={twMerge(
                  `flex flex-col w-full px-8 relative ${
                    item.badge || !item.available ? "pt-16" : "pt-8"
                  }`
                )}
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                {!item.salePrice ? (
                  <h4 className="text-4xl font-bold">
                    {formatPrice(item.regularPrice, {
                      currency: "PLN",
                      notation: "standard",
                    })}
                  </h4>
                ) : (
                  <div className="flex space-x-3">
                    <h4 className="text-3xl font-bold">
                      {formatPrice(item.salePrice, {
                        currency: "PLN",
                        notation: "standard",
                      })}
                    </h4>
                    <span className="text-2xl !font-normal line-through text-slate-700">
                      {formatPrice(item.regularPrice, {
                        currency: "PLN",
                        notation: "standard",
                      })}
                    </span>
                  </div>
                )}

                {!item.available && (
                  <span className="text-red-600 flex items-center gap-2 text-base font-semibold mt-4">
                    <InfoIcon className="w-4 h-4" />
                    Niedostępne
                  </span>
                )}

                {item.badge && item.available && (
                  <span className="text-primary-500 flex items-center gap-2 text-base font-semibold absolute top-0 left-0 rounded-t-xl p-3 bg-defaultPink-50 w-full">
                    <InfoIcon className="w-4 h-4" />
                    {item.badge}
                  </span>
                )}

                <Link
                  href={item.href}
                  target="_blank"
                  className={twMerge(
                    `relative overflow-hidden delay-0 ${
                      item.available
                        ? variantStyles["primary"]
                        : variantStyles["disabled"]
                    } ${
                      sizeStyles["xl"]
                    } flex items-center justify-center w-full cursor-pointer transition ease-out mt-8 border-2 border-defaultPink-200 rounded-xl 
                    

                    
                    `
                  )}
                >
                  {item.available && (
                    <span className="absolute top-0 left-[-200%] w-[300%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rotate-22 animate-slide "></span>
                  )}
                  {item.buttonName || "Kup pakiet"}
                </Link>
              </div>

              <div className="flex flex-col w-full h-full justify-between p-8">
                <ul className="flex flex-col gap-4 ">
                  {item.features.map((feature) => (
                    <li
                      key={feature.id}
                      className="flex items-center gap-2 text-base font-medium"
                    >
                      <div>
                        <Check
                          strokeWidth={5}
                          className="w-5 h-5 text-green-600"
                        />
                      </div>
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </CardList>
      </Container>
    </section>
  );
};

export default Pricing;
