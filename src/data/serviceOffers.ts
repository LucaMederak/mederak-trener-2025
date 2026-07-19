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
