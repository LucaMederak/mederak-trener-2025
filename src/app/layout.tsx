import AlertDisplay from "@/components/alert/AlertDisplay";
import { AlertProvider } from "@/context/Alert.context";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const figtree = Figtree({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://trener.mederak.com"),
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" data-theme="beige">
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
