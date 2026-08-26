export type OnlineCoachingDetails = {
  pricingEyebrow: string;
  pricingTitle: string;
  pricingDescription: string;
  plans: {
    duration: string;
    price: string;
    monthly: string;
    savings: string;
    badge?: string;
    description: string;
  }[];
  pricingNote: string;
  detailsTitle: string;
  detailsDescription: string;
  benefits: { title: string; description: string; items?: string[] }[];
  processTitle: string;
  processDescription: string;
  process: { title: string; description: string }[];
  closing: string;
  cta: string;
};

export const onlineCoachingDetails: Record<"pl" | "en", OnlineCoachingDetails> = {
  pl: {
    pricingEyebrow: "Cennik online",
    pricingTitle: "Wybierz okres prowadzenia online",
    pricingDescription:
      "Najlepsze efekty daje spokojny, konsekwentny proces. Dlatego dłuższe warianty mają niższą cenę miesięczną i więcej przestrzeni na realne prowadzenie progresu.",
    plans: [
      {
        duration: "1 miesiąc",
        price: "449 zł",
        monthly: "449 zł / miesiąc",
        savings: "dobry start bez długiej deklaracji",
        description:
          "Dla osób, które chcą przetestować współpracę, uporządkować trening i dostać konkretny plan działania.",
      },
      {
        duration: "3 miesiące",
        price: "1199 zł",
        monthly: "399,67 zł / miesiąc",
        savings: "oszczędzasz 148 zł",
        badge: "Najczęściej wybierane",
        description:
          "Najbardziej praktyczny wariant na zauważalny progres, regularne korekty i spokojne dopracowanie planu.",
      },
      {
        duration: "6 miesięcy",
        price: "2199 zł",
        monthly: "366,50 zł / miesiąc",
        savings: "oszczędzasz 495 zł",
        badge: "Największa oszczędność",
        description:
          "Dla osób, które chcą dłuższego procesu, mocniejszej kontroli nawyków i konsekwentnego rozwoju formy.",
      },
    ],
    pricingNote:
      "Oszczędność liczona względem ceny 449 zł za każdy miesiąc opłacany osobno.",
    detailsTitle: "Co obejmuje prowadzenie online?",
    detailsDescription:
      "To nie jest sam plan wysłany w PDF-ie. To bieżąca współpraca, w której masz jasny system działania, kontrolę postępów i korekty wtedy, kiedy są potrzebne.",
    benefits: [
      {
        title: "Indywidualny plan treningowy",
        description:
          "Plan jest dopasowany do celu, doświadczenia, dostępnego sprzętu, liczby dni treningowych i aktualnych możliwości regeneracji.",
      },
      {
        title: "Aplikacja Fitly by Zonvio",
        description:
          "W aplikacji znajdziesz plan, filmiki z ćwiczeniami, historię treningów i możliwość uruchomienia treningu live.",
      },
      {
        title: "Kontrola techniki",
        description:
          "Możesz przesyłać nagrania ćwiczeń, a ja analizuję ustawienie, tor ruchu, tempo, zakres i dobór obciążenia.",
      },
      {
        title: "Wsparcie żywieniowe",
        description:
          "Ustalamy kalorie, makroskładniki, tempo zmiany masy ciała oraz praktyczne zasady, które da się utrzymać na co dzień.",
      },
      {
        title: "Regularne raporty i aktualizacje",
        description:
          "Monitorujemy pomiary, samopoczucie, progres siłowy i wykonanie planu, a trening jest aktualizowany zgodnie z Twoją reakcją.",
      },
      {
        title: "Kontakt i bieżące decyzje",
        description:
          "W trakcie współpracy możesz zadawać pytania i konsultować sytuacje, które wpływają na trening, dietę lub regenerację.",
      },
    ],
    processTitle: "Jak wygląda współpraca online?",
    processDescription:
      "Proces jest prosty i konkretny: najpierw zbieramy dane, potem wdrażamy plan, obserwujemy reakcję organizmu i regularnie go dopracowujemy.",
    process: [
      {
        title: "Ankieta i analiza startowa",
        description:
          "Zbieram informacje o celu, zdrowiu, sprzęcie, czasie, doświadczeniu, diecie, śnie i dotychczasowym treningu.",
      },
      {
        title: "Plan i pierwsze wdrożenie",
        description:
          "Otrzymujesz plan treningowy w aplikacji, założenia żywieniowe oraz instrukcje, jak raportować treningi i pomiary.",
      },
      {
        title: "Kontrola wykonania",
        description:
          "Analizuję raporty, nagrania techniki, obciążenia, objętość i samopoczucie, żeby plan pasował do realnego życia.",
      },
      {
        title: "Aktualizacje i progresja",
        description:
          "Dopasowuję ćwiczenia, serie, powtórzenia, intensywność i strategię żywieniową do postępów oraz aktualnych możliwości.",
      },
    ],
    closing:
      "Prowadzenie online daje Ci strukturę, kontrolę i odpowiedzialność za proces, ale zostawia elastyczność trenowania tam, gdzie jest Ci najwygodniej.",
    cta: "Pytam o prowadzenie online",
  },
  en: {
    pricingEyebrow: "Online pricing",
    pricingTitle: "Choose your online coaching length",
    pricingDescription:
      "The best results come from a calm, consistent process. Longer options lower the monthly price and give more room for real progress management.",
    plans: [
      {
        duration: "1 month",
        price: "PLN 449",
        monthly: "PLN 449 / month",
        savings: "a flexible way to start",
        description:
          "For people who want to test the cooperation, organize training and get a clear plan of action.",
      },
      {
        duration: "3 months",
        price: "PLN 1,199",
        monthly: "PLN 399.67 / month",
        savings: "save PLN 148",
        badge: "Most popular",
        description:
          "The most practical option for visible progress, regular corrections and steady plan refinement.",
      },
      {
        duration: "6 months",
        price: "PLN 2,199",
        monthly: "PLN 366.50 / month",
        savings: "save PLN 495",
        badge: "Best saving",
        description:
          "For people who want a longer process, stronger habit control and consistent physique or performance development.",
      },
    ],
    pricingNote:
      "Savings are calculated against PLN 449 for each month paid separately.",
    detailsTitle: "What does online coaching include?",
    detailsDescription:
      "This is not just a PDF plan. It is ongoing cooperation with a clear system, progress tracking and corrections when they are needed.",
    benefits: [
      {
        title: "Individual training plan",
        description:
          "The plan is tailored to your goal, experience, available equipment, training frequency and current recovery capacity.",
      },
      {
        title: "Fitly by Zonvio app",
        description:
          "Inside the app you will find your plan, exercise videos, training history and the option to start a live workout.",
      },
      {
        title: "Technique review",
        description:
          "Send exercise videos for feedback on setup, movement path, tempo, range of motion and load selection.",
      },
      {
        title: "Nutrition support",
        description:
          "We set calories, macros, rate of body-weight change and practical rules you can maintain day to day.",
      },
      {
        title: "Regular reports and updates",
        description:
          "We monitor measurements, wellbeing, strength progress and plan execution, then update training according to your response.",
      },
      {
        title: "Contact and ongoing decisions",
        description:
          "During the cooperation you can ask questions and discuss situations affecting training, nutrition or recovery.",
      },
    ],
    processTitle: "How does online coaching work?",
    processDescription:
      "The process is simple and concrete: first we collect data, then implement the plan, observe your response and refine it regularly.",
    process: [
      {
        title: "Questionnaire and starting analysis",
        description:
          "I collect information about your goal, health, equipment, time, experience, nutrition, sleep and previous training.",
      },
      {
        title: "Plan and first implementation",
        description:
          "You receive your training plan in the app, nutrition guidelines and instructions for reporting workouts and measurements.",
      },
      {
        title: "Execution review",
        description:
          "I analyze reports, technique videos, loads, volume and wellbeing so the plan fits your real life.",
      },
      {
        title: "Updates and progression",
        description:
          "I adjust exercises, sets, reps, intensity and nutrition strategy to your progress and current capacity.",
      },
    ],
    closing:
      "Online coaching gives you structure, control and accountability while keeping the flexibility to train wherever it is most convenient.",
    cta: "Ask about online coaching",
  },
};
