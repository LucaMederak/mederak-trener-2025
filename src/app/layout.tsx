import AlertDisplay from "@/components/alert/AlertDisplay";
import { AlertProvider } from "@/context/Alert.context";
import type { Metadata } from "next";
import { DM_Sans, Figtree, Raleway } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const figtree = Figtree({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Trener personalny Warszawa Wola | Łukasz Męderak",
  description:
    "Trener personalny Warszawa Wola – Łukasz Męderak. Treningi personalne na siłowni przy ul. Jana Kazimierza. Popraw zdrowie, sylwetkę i wyniki sportowe z doświadczonym trenerem.",
  keywords: [
    "trener personalny Warszawa",
    "trener personalny Wola",
    "trening personalny Warszawa",
    "treningi personalne Wola",
    "siłownia Jana Kazimierza",
    "trener personalny Warszawa Wola",
  ],
  openGraph: {
    title: "Trener personalny Warszawa Wola | Łukasz Męderak",
    description:
      "Szukasz trenera personalnego w Warszawie na Woli? Oferuję indywidualne treningi personalne przy ul. Jana Kazimierza. Skutecznie, bezpiecznie i z planem dopasowanym do Ciebie.",
    url: "https://trener.mederak.com",
    siteName: "Łukasz Męderak – Trener Personalny",
    images: [
      {
        url: "https://trener.mederak.com/images/lukasz-mederak.jpg",
        width: 800,
        height: 800,
        alt: "Łukasz Męderak – trener personalny Warszawa Wola",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  alternates: {
    canonical: "https://trener.mederak.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <html lang="pl" data-theme="blue">
      {/* rose, lime, yellow, blue, indigo */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      <head></head>
      <body className={twMerge(` bg-defaultWhite`, figtree.className)}>
        <AlertProvider>
          <AlertDisplay />
          <div id="modal-portal" />
          {children}
        </AlertProvider>
      </body>
    </html>
  );
}
