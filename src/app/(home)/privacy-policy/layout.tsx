import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności | Łukasz Męderak",
  description: "Polityka prywatności serwisu trener.mederak.com.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Polityka prywatności | Łukasz Męderak",
    description: "Polityka prywatności serwisu trener.mederak.com.",
    url: "/privacy-policy",
  },
};

const PrivacyPolicyLayout = ({ children }: { children: React.ReactNode }) =>
  children;

export default PrivacyPolicyLayout;
