import React from "react";

//components
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import CardList from "@/components/cards/CardList";
import DefaultCard from "@/components/cards/DefaultCard";

const benefitItems = [
  {
    id: 1,
    icon: <div className="w-5 h-5 flex items-center justify-center">1</div>,
    name: "Konsultacja",
    description:
      "Podczas pierwszej indywidualnej konsultacji treningowej sprecyzujemy Twoje cele treningowe, przeprowadzę testy funkcjonalne oraz zbadam stan Twojej sprawności. Następnie określimy wstępny plan na najbliższe tygodnie.",
  },
  {
    id: 2,
    icon: <div className="w-5 h-5 flex items-center justify-center">2</div>,
    name: "Sesje szkoleniowe",
    description:
      "Na 2 sesjach szkoleniowych przejdziemy krok po kroku przez podstawy treningu, dowiesz się o systemach rozgrzewki, formach treningu, poznasz szczegóły techniczne i anatomiczne oraz przejdziemy przez większość ćwiczeń izolowanych i wielostawowych. Po 2 sesjach otrzymasz także materiały online z przeprowadzonymi ćwiczeniami.",
  },
  {
    id: 3,
    icon: <div className="w-5 h-5 flex items-center justify-center">3</div>,
    name: "Treningi personalne",
    description:
      "Po pierwszych spotkaniach ustalę strategię i plan na najbliższe cykle treningowe. Następnie podczas wspólnych treningów będziemy realizować przygotowany indywidualny plan, oraz będę doradzać Ci także w diecie i suplementacji. W zależności od ilości czasu i środków możesz wykupić pojedynczy trening lub pakiet treningów.",
  },
  {
    id: 4,
    icon: <div className="w-5 h-5 flex items-center justify-center">4</div>,
    name: "Treningi kontrolne i współpraca online",
    description:
      "Podczas trwania pakietu będziesz ze mną w stałym kontakcie, będziemy spotykać się na treningach kontrolnych minimum 2 razy w miesiącu, określimy cel oraz plan treningowy. Będę prosił Cię także o filmiki z wykonywania przez Ciebie ćwiczeń aby monitorować, poprawiać ewentualne błędy i wprowadzać zmiany w ćwiczeniach. Taka forma współpracy jest możliwa po minimum 2 wcześniejszych stacjonarnych treningów personalnych lub po 2 treningach w ramach sesji szkoleniowej.",
  },
];

const Cooperation = () => {
  return (
    <section
      id="cooperation"
      className="w-full py-8 md:py-12 bg-white border-t border-primary-100"
    >
      <Container className="flex items-center justify-start flex-col">
        <PageHeading
          title="Jak będzie wyglądała nasza współpraca"
          headerType="h2"
          position="center"
          badgeType="default"
          badgeText="Współpraca"
          className="max-w-3xl"
          description="Zobacz jak będzie wyglądała nasza współpraca. Do każdego podchodzę w sposób indywidualny i stawiam na pracę od podstaw"
        />
        <CardList className="flex items-start justify-start flex-col max-w-screen-lg">
          {benefitItems.map((item) => (
            <DefaultCard
              key={item.id}
              icon={item.icon}
              title={item.name}
              description={item.description}
              className="w-full"
              headingWrapperClassName="flex md:items-center md:justify-start md:flex-row"
            />
          ))}
        </CardList>
      </Container>
    </section>
  );
};

export default Cooperation;
