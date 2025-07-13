import AlertDisplay from "@/components/alert/AlertDisplay";
import { AlertProvider } from "@/context/Alert.context";
import type { Metadata } from "next";
import { DM_Sans, Figtree, Raleway } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const figtree = Figtree({ subsets: ["latin", "latin-ext"] });
const raleway = Raleway({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify the desired weights
});
const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify the desired weights
});

export const metadata: Metadata = {
  title: "Łukasz Męderak | Trener",
  description:
    "Treningi personalne Warszawa Wola ul.Jana Kazimierza. Jeśli chcesz rozpocząć treningi na siłowni pod okiem trenera personalnego, poprawić zdrowie, uzyskać lepszą sylwetkę czy polepszyć wyniki w danej dyscyplinie sportu, to chętnie Ci w tym pomogę.",
  openGraph: {
    title: "Łukasz Męderak | Trener",
    description:
      "Treningi personalne Warszawa Wola ul.Jana Kazimierza. Jeśli chcesz rozpocząć treningi na siłowni pod okiem trenera personalnego, poprawić zdrowie, uzyskać lepszą sylwetkę czy polepszyć wyniki w danej dyscyplinie sportu, to chętnie Ci w tym pomogę.",
    url: "https://trener.mederak.com",
    siteName: "Łukasz Męderak | Trener!",
    images: [
      {
        url: "https://trener.mederak.com/images/lukasz-mederak.png",
        width: 800,
        height: 800,
        alt: "Łukasz Męderak | Trener",
      },
    ],
    locale: "pl",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" data-theme="blue">
      {/* rose, lime, yellow, blue, indigo */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      <body className={twMerge(` bg-defaultWhite`, raleway.className)}>
        <AlertProvider>
          <AlertDisplay />
          <div id="modal-portal" />

          {children}
        </AlertProvider>
      </body>
    </html>
  );
}
