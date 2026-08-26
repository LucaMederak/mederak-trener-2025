export type ConsultationDetails = {
  pricingEyebrow: string;
  pricingTitle: string;
  pricingDescription: string;
  offer: {
    name: string;
    price: string;
    priceNote: string;
    description: string;
    highlights: string[];
    cta: string;
  };
  detailsTitle: string;
  detailsDescription: string;
  benefits: { title: string; description: string }[];
  closing: string;
};

export const consultationDetails: Record<"pl" | "en", ConsultationDetails> = {
  pl: {
    pricingEyebrow: "Konsultacja online",
    pricingTitle: "Jednorazowa konsultacja za 100 zł",
    pricingDescription:
      "To szybki sposób, żeby uporządkować trening, dietę albo kierunek działania bez wchodzenia od razu w dłuższą współpracę.",
    offer: {
      name: "Konsultacja online",
      price: "100 zł",
      priceNote: "jednorazowe spotkanie online",
      description:
        "Podczas konsultacji omawiamy Twój cel, obecne działania i największe problemy, a na końcu dostajesz konkretny kierunek dalszej pracy.",
      highlights: [
        "analiza obecnego planu treningowego lub żywieniowego",
        "odpowiedzi na konkretne pytania i wątpliwości",
        "priorytety do wdrożenia po konsultacji",
      ],
      cta: "Umawiam konsultację",
    },
    detailsTitle: "Co możemy omówić?",
    detailsDescription:
      "Konsultacja jest dopasowana do tego, z czym przychodzisz. Może dotyczyć treningu, odżywiania, techniki, progresu albo tego, jak zacząć bez chaosu.",
    benefits: [
      {
        title: "Plan treningowy",
        description:
          "Sprawdzimy, czy obecny plan pasuje do celu, poziomu zaawansowania, regeneracji i dostępnego sprzętu.",
      },
      {
        title: "Odżywianie",
        description:
          "Omówimy kalorie, makroskładniki, najczęstsze błędy i proste zasady, które możesz wdrożyć od razu.",
      },
      {
        title: "Technika i dobór ćwiczeń",
        description:
          "Możemy przeanalizować ćwiczenia, zamienniki, zakres ruchu, tempo i elementy, które warto poprawić.",
      },
      {
        title: "Kierunek dalszej pracy",
        description:
          "Po spotkaniu wiesz, co jest priorytetem i jakie następne kroki mają największy sens.",
      },
    ],
    closing:
      "Konsultacja online sprawdzi się, gdy potrzebujesz konkretnej odpowiedzi, drugiej opinii albo uporządkowania planu przed dalszym działaniem.",
  },
  en: {
    pricingEyebrow: "Online consultation",
    pricingTitle: "One-off consultation for PLN 100",
    pricingDescription:
      "A quick way to organize your training, nutrition or direction without committing to longer cooperation right away.",
    offer: {
      name: "Online consultation",
      price: "PLN 100",
      priceNote: "one-off online meeting",
      description:
        "During the consultation we discuss your goal, current actions and biggest obstacles, then define a clear direction for further work.",
      highlights: [
        "review of your current training or nutrition plan",
        "answers to specific questions and doubts",
        "priorities to implement after the consultation",
      ],
      cta: "Book a consultation",
    },
    detailsTitle: "What can we cover?",
    detailsDescription:
      "The consultation is shaped around what you bring in. It can cover training, nutrition, technique, progress or how to start without chaos.",
    benefits: [
      {
        title: "Training plan",
        description:
          "We check whether your current plan fits your goal, experience level, recovery and available equipment.",
      },
      {
        title: "Nutrition",
        description:
          "We discuss calories, macros, common mistakes and simple rules you can apply immediately.",
      },
      {
        title: "Technique and exercise selection",
        description:
          "We can analyze exercises, substitutions, range of motion, tempo and elements worth improving.",
      },
      {
        title: "Direction for further work",
        description:
          "After the meeting you know what the priority is and which next steps make the most sense.",
      },
    ],
    closing:
      "An online consultation works well when you need a concrete answer, a second opinion or plan organization before moving forward.",
  },
};
