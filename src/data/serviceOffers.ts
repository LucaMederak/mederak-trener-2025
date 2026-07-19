export type ServiceOffer = {
  slug: string;
  title: string;
  titleLines?: string[];
  shortTitle: string;
  description: string;
  pageDescription: string;
  eyebrow: string;
  forWho: string[];
  process: string[];
  benefits: string[];
  details: string[];
};

export type ServiceOfferCopy = Omit<ServiceOffer, "slug">;

export const serviceOffers: ServiceOffer[] = [
  {
    slug: "treningi-personalne",
    title: "Prowadzenie treningowe i treningi personalne stacjonarne",
    shortTitle: "Treningi personalne",
    eyebrow: "Warszawa Active Zone Wola ul. Jana Kazimierza 43",
    description:
      "Indywidualne treningi w Warszawie, nauka techniki i prowadzenie dopasowane do Twojego celu.",
    pageDescription:
      "Współpraca stacjonarna dla osób, które chcą trenować bezpiecznie, świadomie i z planem. Pracujemy nad techniką, doborem ćwiczeń, progresją oraz nawykami, które realnie da się utrzymać.",
    forWho: [
      "dla osób początkujących, które chcą dobrze wejść w trening siłowy",
      "dla osób wracających po przerwie lub po kontuzji",
      "dla osób, które chcą poprawić sylwetkę, siłę i sprawność",
      "dla tych, którzy potrzebują kontroli techniki na żywo",
    ],
    process: [
      "zaczynamy od konsultacji i określenia celu",
      "sprawdzamy aktualny poziom ruchu, technikę i ograniczenia",
      "układam plan treningowy oraz prowadzę Cię przez kolejne etapy",
      "na bieżąco korygujemy ćwiczenia, obciążenia i strategię",
    ],
    benefits: [
      "bezpieczniejsza technika ćwiczeń",
      "plan dopasowany do Twoich możliwości",
      "większa pewność na siłowni",
      "realna kontrola progresu",
    ],
    details: [
      "treningi personalne w Warszawie",
      "analiza techniki i nauka ćwiczeń",
      "plan treningowy dopasowany do celu",
      "stała kontrola postępów",
    ],
  },
  {
    slug: "prowadzenie-online",
    title: "Prowadzenie online",
    shortTitle: "Prowadzenie online",
    eyebrow: "Współpraca zdalna",
    description:
      "Plan treningowy, wsparcie żywieniowe i regularna kontrola postępów bez względu na miejsce.",
    pageDescription:
      "Prowadzenie online sprawdzi się, jeśli chcesz trenować samodzielnie, ale potrzebujesz konkretnego planu, korekt i osoby, która trzyma kierunek całego procesu.",
    forWho: [
      "dla osób trenujących samodzielnie na siłowni lub w domu",
      "dla osób mieszkających poza Warszawą",
      "dla tych, którzy potrzebują planu i regularnej kontroli",
      "dla osób, które chcą połączyć trening z rozsądnym żywieniem",
    ],
    process: [
      "zbieram informacje o celu, sprzęcie, czasie i doświadczeniu",
      "przygotowuję plan treningowy oraz główne założenia żywieniowe",
      "analizuję raporty, pomiary i nagrania techniki",
      "aktualizuję plan zgodnie z postępami i Twoim samopoczuciem",
    ],
    benefits: [
      "jasny plan działania",
      "elastyczność miejsca i czasu",
      "regularna kontrola postępów",
      "mniej chaosu w treningu i diecie",
    ],
    details: [
      "indywidualny plan treningowy",
      "wsparcie żywieniowe",
      "monitorowanie postępów",
      "kontakt i korekty w trakcie współpracy",
    ],
  },
  {
    slug: "konsultacje",
    title: "Konsultacje treningowe i żywieniowe",
    titleLines: ["Konsultacje treningowe", "i żywieniowe"],
    shortTitle: "Konsultacje",
    eyebrow: "Jednorazowe wsparcie",
    description:
      "Jednorazowe konsultacje dla osób, które chcą uporządkować trening, dietę lub kierunek działania.",
    pageDescription:
      "Konsultacja to dobry punkt startowy, jeśli nie wiesz, jak trenować, co poprawić w planie albo jak połączyć trening z odżywianiem w rozsądny sposób.",
    forWho: [
      "dla osób, które chcą sprawdzić swój obecny plan",
      "dla tych, którzy utknęli z progresami lub motywacją",
      "dla osób potrzebujących drugiej opinii o treningu lub diecie",
      "dla tych, którzy chcą zacząć, ale nie wiedzą od czego",
    ],
    process: [
      "przed konsultacją zbieram podstawowe informacje",
      "omawiamy cel, aktualne działania i największe problemy",
      "wskazuję priorytety oraz konkretne zmiany do wdrożenia",
      "po spotkaniu masz jasny kierunek dalszej pracy",
    ],
    benefits: [
      "szybkie uporządkowanie planu",
      "konkretne wskazówki bez nadmiaru teorii",
      "lepsze decyzje treningowe i żywieniowe",
      "dobry start przed dłuższą współpracą",
    ],
    details: [
      "omówienie celu i obecnego planu",
      "rekomendacje treningowe",
      "wskazówki żywieniowe",
      "konkretny kierunek dalszej pracy",
    ],
  },
  {
    slug: "wspolpraca-reklamowa",
    title: "Współpraca reklamowa",
    shortTitle: "Współpraca reklamowa",
    eyebrow: "Marki i projekty",
    description:
      "Materiały, kampanie i współprace marek z obszaru treningu, zdrowia, dietetyki i technologii.",
    pageDescription:
      "Współpracuję z markami, które pasują do moich wartości: zdrowie, jakość, edukacja, technologia i realna użyteczność dla odbiorców.",
    forWho: [
      "dla marek z branży fitness, health, dietetyki i sportu",
      "dla produktów lub usług, które mają realną wartość dla odbiorców",
      "dla firm technologicznych budujących rozwiązania dla aktywnych osób",
      "dla projektów, w których liczy się wiarygodność i edukacja",
    ],
    process: [
      "omawiamy cel kampanii i dopasowanie do mojej społeczności",
      "ustalamy format, zakres i sposób komunikacji",
      "przygotowujemy materiały w spójnym, naturalnym stylu",
      "analizujemy efekty i dalsze możliwości współpracy",
    ],
    benefits: [
      "naturalna komunikacja bez sztucznego tonu",
      "połączenie wiedzy trenerskiej, dietetycznej i biznesowej",
      "dopasowanie przekazu do aktywnych odbiorców",
      "możliwość współpracy przy dłuższych projektach",
    ],
    details: [
      "kampanie i materiały edukacyjne",
      "testy produktów i usług",
      "współpraca przy projektach fitness/health",
      "działania z marką osobistą",
    ],
  },
];

export const getServiceOffer = (slug: string) =>
  serviceOffers.find((offer) => offer.slug === slug);

export const serviceOfferTranslations: Record<string, ServiceOfferCopy> = {
  "treningi-personalne": {
    title: "Training Coaching and In-Person Personal Training",
    shortTitle: "Personal Training",
    eyebrow: "Warsaw Active Zone Wola, Jana Kazimierza 43",
    description:
      "Individual training sessions in Warsaw, technique coaching and support tailored to your goal.",
    pageDescription:
      "In-person cooperation for people who want to train safely, consciously and with a clear plan. We work on technique, exercise selection, progression and habits that can realistically be maintained.",
    forWho: [
      "for beginners who want to enter strength training properly",
      "for people returning after a break or injury",
      "for those who want to improve physique, strength and fitness",
      "for anyone who needs live technique supervision",
    ],
    process: [
      "we start with a consultation and define your goal",
      "we assess your current movement quality, technique and limitations",
      "I prepare the training plan and guide you through the next stages",
      "we adjust exercises, loads and strategy on an ongoing basis",
    ],
    benefits: [
      "safer exercise technique",
      "a plan matched to your capabilities",
      "more confidence in the gym",
      "clear progress tracking",
    ],
    details: [
      "personal training in Warsaw",
      "technique analysis and exercise coaching",
      "goal-based training plan",
      "ongoing progress control",
    ],
  },
  "prowadzenie-online": {
    title: "Online Coaching",
    shortTitle: "Online Coaching",
    eyebrow: "Remote cooperation",
    description:
      "Training plan, nutrition support and regular progress tracking wherever you train.",
    pageDescription:
      "Online coaching is a good fit if you want to train independently, but still need a clear plan, corrections and someone who keeps the whole process moving in the right direction.",
    forWho: [
      "for people training independently at the gym or at home",
      "for people living outside Warsaw",
      "for those who need a plan and regular accountability",
      "for people who want to combine training with practical nutrition",
    ],
    process: [
      "I collect information about your goal, equipment, time and experience",
      "I prepare your training plan and main nutrition guidelines",
      "I analyze reports, measurements and technique videos",
      "I update the plan according to your progress and wellbeing",
    ],
    benefits: [
      "a clear action plan",
      "flexibility of place and time",
      "regular progress tracking",
      "less chaos in training and nutrition",
    ],
    details: [
      "individual training plan",
      "nutrition support",
      "progress monitoring",
      "contact and adjustments during cooperation",
    ],
  },
  konsultacje: {
    title: "Training and Nutrition Consultations",
    titleLines: ["Training and Nutrition", "Consultations"],
    shortTitle: "Consultations",
    eyebrow: "One-off support",
    description:
      "One-off consultations for people who want to organize their training, nutrition or direction.",
    pageDescription:
      "A consultation is a good starting point if you are not sure how to train, what to improve in your plan or how to combine training with nutrition in a reasonable way.",
    forWho: [
      "for people who want to review their current plan",
      "for those who feel stuck with progress or motivation",
      "for people who need a second opinion on training or nutrition",
      "for anyone who wants to start but does not know where to begin",
    ],
    process: [
      "before the consultation I collect key information",
      "we discuss your goal, current actions and biggest obstacles",
      "I point out priorities and specific changes to implement",
      "after the meeting you have a clear direction for further work",
    ],
    benefits: [
      "quick organization of your plan",
      "specific guidance without unnecessary theory",
      "better training and nutrition decisions",
      "a strong starting point before longer cooperation",
    ],
    details: [
      "goal and current plan review",
      "training recommendations",
      "nutrition guidance",
      "clear direction for further work",
    ],
  },
  "wspolpraca-reklamowa": {
    title: "Brand Collaborations",
    shortTitle: "Brand Collaborations",
    eyebrow: "Brands and projects",
    description:
      "Content, campaigns and brand partnerships in fitness, health, nutrition and technology.",
    pageDescription:
      "I work with brands that match my values: health, quality, education, technology and real usefulness for the audience.",
    forWho: [
      "for brands in fitness, health, nutrition and sport",
      "for products or services that bring real value to the audience",
      "for technology companies building solutions for active people",
      "for projects where credibility and education matter",
    ],
    process: [
      "we discuss the campaign goal and fit with my audience",
      "we define the format, scope and communication style",
      "we prepare materials in a natural, consistent style",
      "we analyze results and further cooperation opportunities",
    ],
    benefits: [
      "natural communication without an artificial tone",
      "a combination of training, nutrition and business knowledge",
      "message matched to an active audience",
      "possibility of longer-term project cooperation",
    ],
    details: [
      "campaigns and educational materials",
      "product and service testing",
      "cooperation on fitness/health projects",
      "personal brand activities",
    ],
  },
};
