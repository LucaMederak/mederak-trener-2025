import AlertDisplay from "@/components/alert/AlertDisplay";
import { AlertProvider } from "@/context/Alert.context";
import type { Metadata } from "next";
import { DM_Sans, Figtree, Raleway } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const figtree = Figtree({ subsets: ["latin", "latin-ext"] });
// const raleway = Raleway({
//   subsets: ["latin", "latin-ext"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify the desired weights
// });
// const dmSans = DM_Sans({
//   subsets: ["latin", "latin-ext"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify the desired weights
// });

export const metadata: Metadata = {
  title: "Łukasz Męderak | Trener personalny",
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
  // other: {
  //   "trustpilot-one-time-domain-verification-id":
  //     "57c620d0-4ee3-4fc0-8b7a-04ea80631980",
  // },
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
      <head>
        {/* {isProduction && (
          <>
            Usercentrics - autoblocker
            <Script
              src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"
              strategy="beforeInteractive"
            />

            Usercentrics - banner
            <Script
              id="usercentrics-cmp"
              src="https://web.cmp.usercentrics.eu/ui/loader.js"
              data-settings-id="g5KzRUbPrSWlkW"
              strategy="afterInteractive"
              async
            />
          </>
        )} */}
      </head>
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
