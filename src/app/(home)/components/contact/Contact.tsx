import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-primary-50/35 py-10 md:py-14">
      <Container className="flex flex-col items-center justify-center text-center">
        <PageHeading
          title="Skontaktuj się ze mną"
          description="Chcesz umówić konsultację lub zapytać o współpracę? Napisz bezpośrednio."
          headerType="h2"
          position="center"
          badgeType="default"
          badgeText="Kontakt"
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
