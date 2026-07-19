"use client";

import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import { useLanguage } from "@/context/Language.context";
import { Mail } from "lucide-react";

const translations = {
  pl: {
    title: "Skontaktuj się ze mną",
    description:
      "Chcesz umówić konsultację lub zapytać o współpracę? Napisz bezpośrednio.",
    badge: "Kontakt",
  },
  en: {
    title: "Contact Me",
    description:
      "Want to book a consultation or ask about cooperation? Message me directly.",
    badge: "Contact",
  },
};

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="w-full bg-primary-50/35 py-10 md:py-14">
      <Container className="flex flex-col items-center justify-center text-center">
        <PageHeading
          title={t.title}
          description={t.description}
          headerType="h2"
          position="center"
          badgeType="default"
          badgeText={t.badge}
        />

        <div className="mt-1 flex flex-col items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 bg-primary-100/60 text-primary-700">
            <Mail className="h-5 w-5" />
          </div>
          <a
            href="mailto:lukasz@mederak.com"
            className="break-all text-xl font-bold text-slate-950 underline decoration-primary-400/35 underline-offset-8 transition hover:text-primary-600 hover:decoration-primary-500 md:text-3xl"
          >
            lukasz@mederak.com
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
