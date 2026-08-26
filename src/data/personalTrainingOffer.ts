export type PersonalTrainingDetails = {
  pricingEyebrow: string;
  pricingTitle: string;
  pricingDescription: string;
  start: {
    name: string;
    subtitle: string;
    price: string;
    priceNote: string;
    badge: string;
    description: string;
    highlights: string[];
    cta: string;
  };
  packages: {
    title: string;
    description: string;
    items: { sessions: string; price: string; perSession: string }[];
    cta: string;
  };
  startDetailsTitle: string;
  startDetailsDescription: string;
  stages: { title: string; description: string; items: string[] }[];
  bonusTitle: string;
  bonusItems: string[];
  startForWhoTitle: string;
  startForWho: string[];
  packageDetailsTitle: string;
  packageDetailsDescription: string;
  packageBenefits: { title: string; description: string; items?: string[] }[];
  closing: string;
};

export const personalTrainingDetails: Record<"pl" | "en", PersonalTrainingDetails> = {
  pl: {
    pricingEyebrow: "Cennik",
    pricingTitle: "Wybierz najlepszy sposób na start",
    pricingDescription:
      "Zacznij od 2 sesji wprowadzających albo wybierz pakiet regularnych treningów z pełną opieką trenerską.",
    start: {
      name: "2 sesje wprowadzające",
      subtitle: "Fundament świadomego, bezpiecznego i efektywnego treningu",
      price: "249 zł",
      priceNote: "2 treningi · 124,50 zł / trening",
      badge: "Promocyjna cena startowa",
      description:
        "Dwie indywidualne, intensywne sesje, które w przemyślany sposób wprowadzą Cię w trening siłowy i pracę z ciałem.",
      highlights: [
        "diagnostyka ruchu i wywiad treningowo-zdrowotny",
        "nauka oddechu, stabilizacji i bezpiecznej techniki",
        "podstawy do dalszego treningu samodzielnego lub w pakiecie",
      ],
      cta: "Wybieram sesje wprowadzające",
    },
    packages: {
      title: "Pakiety treningów personalnych",
      description:
        "Regularne treningi, indywidualny plan, dostęp do aplikacji Fitly by Zonvio i kompleksowe wsparcie w realizacji Twojego celu.",
      items: [
        { sessions: "4 treningi", price: "719 zł", perSession: "179,75 zł / trening" },
        { sessions: "8 treningów", price: "1349 zł", perSession: "168,63 zł / trening" },
        { sessions: "16 treningów", price: "2599 zł", perSession: "162,44 zł / trening" },
      ],
      cta: "Pytam o pakiet",
    },
    startDetailsTitle: "Jak wyglądają 2 sesje wprowadzające?",
    startDetailsDescription:
      "To nie są tylko dwa zwykłe treningi. To proces diagnostyczno-edukacyjny, który daje solidne podstawy do dalszego rozwoju.",
    stages: [
      {
        title: "Analiza, diagnostyka i ocena ruchu",
        description:
          "Zaczynamy od wywiadu treningowo-zdrowotnego, historii urazów, stylu życia i nawyków żywieniowych. Testy funkcjonalne pokażą ograniczenia mobilności, stabilności, kontroli ruchu i kompensacje.",
        items: [
          "sprecyzowanie celu i wstępnego planu ćwiczeń",
          "ocena reakcji ciała na ruch i obciążenie",
          "elementy terapii ruchowej, jeśli występują ból lub ograniczenia",
        ],
      },
      {
        title: "Oddech, przepona i stabilizacja",
        description:
          "Nauczysz się wykorzystywać oddech, przeponę i cały system core do poprawy stabilizacji, siły, regeneracji oraz ochrony kręgosłupa.",
        items: [
          "synchronizacja oddechu z ruchem i obciążeniem",
          "ćwiczenia mięśni głębokich, prostych i skośnych brzucha",
          "nauka efektywnej tłoczni brzusznej",
        ],
      },
      {
        title: "Przygotowanie do treningu i technika",
        description:
          "Poznasz protokół rozgrzewkowy RAMP, który zwiększa mobilność, poprawia stabilność i przygotowuje ciało do wysiłku.",
        items: [
          "aktywacja pośladków, core i obręczy barkowej",
          "stabilizacja kręgosłupa i prawidłowe ustawienie łopatki",
          "kontrola ruchu, napięcia i bezpieczna technika",
        ],
      },
      {
        title: "Wzorce ruchowe w praktyce",
        description:
          "Przećwiczymy i dopasujemy kluczowe wzorce: przysiad, hip hinge i martwy ciąg, wyciskanie, podciąganie, wiosłowanie oraz przenoszenie.",
        items: [
          "ćwiczenia wielostawowe i izolowane",
          "praca ze sztangą, hantlami, kettlami, maszynami i wyciągami",
          "regresje i progresje dopasowane do Twojego poziomu",
        ],
      },
    ],
    bonusTitle: "Po sesjach wprowadzających otrzymujesz",
    bonusItems: [
      "PDF z podsumowaniem",
      "ćwiczenia i schematy przerobione na sesjach",
      "wskazówki do dalszego samodzielnego treningu",
    ],
    startForWhoTitle: "Dla kogo są 2 sesje wprowadzające?",
    startForWho: [
      "dla osób początkujących, które chcą rozpocząć trening mądrze i bezpiecznie",
      "dla osób wracających po przerwie lub kontuzji",
      "dla trenujących, którzy chcą poprawić technikę, stabilizację i świadomość ruchu",
      "dla każdego, kto chce trenować efektywnie, świadomie i bez bólu",
    ],
    packageDetailsTitle: "Pełna opieka w pakiecie treningowym",
    packageDetailsDescription:
      "Pakiet to nie tylko zestaw spotkań, ale indywidualnie dopasowany proces, który pomaga konsekwentnie realizować Twój cel.",
    packageBenefits: [
      {
        title: "Indywidualny plan treningowy",
        description:
          "Plan powstaje pod Twój cel — budowę siły, poprawę sylwetki lub wydolności. Możemy spotykać się raz lub dwa razy w tygodniu, a pozostałe jednostki wykonujesz samodzielnie, albo realizować cały plan wspólnie.",
      },
      {
        title: "Dostęp do aplikacji Fitly by Zonvio",
        description:
          "W aplikacji znajdziesz swój plan treningowy, filmiki z ćwiczeniami oraz możliwość uruchomienia treningu live.",
      },
      {
        title: "Stały kontakt z trenerem",
        description:
          "W trakcie pakietu możesz zadawać pytania, konsultować postępy i dostosowywać plan do aktualnych potrzeb.",
      },
      {
        title: "Metodyka i świadomość treningowa",
        description:
          "Poznasz fundamentalne wzorce ruchowe i zasady kompleksowego planowania treningu.",
        items: [
          "periodyzacja, serie, powtórzenia, objętość, intensywność i częstotliwość",
          "łączenie treningu siłowego z cardio i budowanie bazy tlenowej",
          "praca koncentryczna, ekscentryczna, statyczna i dobór ćwiczeń do celu",
        ],
      },
      {
        title: "Rozgrzewka i aktywacja",
        description:
          "Poznasz standardowe protokoły, efekt PAPe oraz bloki aktywacyjne dopasowane do Twoich potrzeb.",
      },
      {
        title: "Odżywianie i suplementacja",
        description:
          "Otrzymasz wyliczone zapotrzebowanie energetyczne, tempo zmiany masy ciała, zalecenia żywieniowe i suplementacyjne oraz monitoring postępów.",
      },
      {
        title: "Dodatkowe materiały treningowe",
        description:
          "Jeśli nie korzystałeś z sesji wprowadzających, dostaniesz protokoły rozgrzewki, bloki aktywacyjne dla łopatki, pośladków i core oraz opisy techniki ćwiczeń.",
      },
    ],
    closing:
      "To coś więcej niż trening — to kompleksowy proces rozwoju i opieka trenerska, dzięki której osiągniesz swój cel.",
  },
  en: {
    pricingEyebrow: "Pricing",
    pricingTitle: "Choose the best way to begin",
    pricingDescription:
      "Start with 2 introductory sessions or choose a regular training package with full coaching support.",
    start: {
      name: "2 introductory sessions",
      subtitle: "Your foundation for conscious, safe and effective training",
      price: "PLN 249",
      priceNote: "2 sessions · PLN 124.50 / session",
      badge: "Introductory price",
      description:
        "Two intensive one-to-one sessions designed to introduce you to strength training and conscious movement.",
      highlights: [
        "movement diagnostics and health-training interview",
        "breathing, stability and safe technique fundamentals",
        "a base for independent training or continued package work",
      ],
      cta: "Choose introductory sessions",
    },
    packages: {
      title: "Personal training packages",
      description:
        "Regular sessions, an individual plan, access to the Fitly by Zonvio app and comprehensive support in reaching your goal.",
      items: [
        { sessions: "4 sessions", price: "PLN 719", perSession: "PLN 179.75 / session" },
        { sessions: "8 sessions", price: "PLN 1,349", perSession: "PLN 168.63 / session" },
        { sessions: "16 sessions", price: "PLN 2,599", perSession: "PLN 162.44 / session" },
      ],
      cta: "Ask about a package",
    },
    startDetailsTitle: "What do the 2 introductory sessions include?",
    startDetailsDescription:
      "These are more than two workouts. It is a diagnostic and educational process that gives you a solid foundation for further development.",
    stages: [
      {
        title: "Analysis, diagnostics and movement assessment",
        description:
          "We begin with your health and training history, injuries, lifestyle and nutrition habits. Functional tests reveal mobility restrictions, stability issues, movement control and compensations.",
        items: ["clear goals and an initial exercise plan", "assessment under movement and load", "movement therapy elements when needed"],
      },
      {
        title: "Breathing, diaphragm and stability",
        description:
          "You will learn to use breathing, your diaphragm and the entire core system to improve stability, strength, recovery and spine protection.",
        items: ["breath synchronized with movement", "deep, straight and oblique abdominal work", "effective abdominal bracing"],
      },
      {
        title: "Training preparation and technique",
        description:
          "You will learn the RAMP warm-up protocol to increase mobility, improve stability and prepare your body for effort.",
        items: ["glute, core and shoulder activation", "spine and shoulder-blade positioning", "movement control and safe technique"],
      },
      {
        title: "Movement patterns in practice",
        description:
          "We practise and adapt the key patterns: squat, hip hinge and deadlift, pressing, pulling, rowing and carries.",
        items: ["compound and isolation exercises", "barbells, dumbbells, kettlebells, machines and cables", "regressions and progressions for your level"],
      },
    ],
    bonusTitle: "After the introductory sessions you receive",
    bonusItems: ["a summary PDF", "the exercises and routines covered", "guidance for further independent training"],
    startForWhoTitle: "Who are the 2 introductory sessions for?",
    startForWho: [
      "beginners who want to start wisely and safely",
      "people returning after a break or injury",
      "trainees who want better technique, stability and movement awareness",
      "anyone who wants to train effectively, consciously and without pain",
    ],
    packageDetailsTitle: "Full support in every training package",
    packageDetailsDescription:
      "A package is not merely a set of appointments. It is an individually tailored process that helps you pursue your goal consistently.",
    packageBenefits: [
      { title: "Individual training plan", description: "Your plan is built around strength, physique or endurance. Train with me once or twice a week and complete the remaining sessions independently, or do the full plan together." },
      { title: "Access to the Fitly by Zonvio app", description: "Inside the app you will find your training plan, exercise videos and the option to start a live workout." },
      { title: "Ongoing coach contact", description: "Ask questions, discuss progress and adjust the plan to your current needs throughout the package." },
      { title: "Training methods and awareness", description: "Learn fundamental movement patterns and the principles of complete training design.", items: ["periodization, sets, reps, volume, intensity and frequency", "combining strength training with cardio and aerobic-base work", "concentric, eccentric and static work plus goal-based exercise selection"] },
      { title: "Warm-up and activation", description: "Learn standard protocols, PAPe and activation blocks tailored to your needs." },
      { title: "Nutrition and supplementation", description: "Receive an energy target, an appropriate rate of weight change, nutrition and supplement guidance, and progress monitoring." },
      { title: "Additional training resources", description: "If you have not completed the introductory sessions, you receive warm-up protocols, shoulder-blade, glute and core activation blocks, and technique notes." },
    ],
    closing:
      "It is more than training — it is a complete development process and coaching support designed to help you reach your goal.",
  },
};
