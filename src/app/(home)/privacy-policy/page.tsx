"use client";

import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";
import { useLanguage } from "@/context/Language.context";

const policy = {
  pl: {
    title: "Polityka prywatności",
    description: "Zapoznaj się z polityką prywatności",
    sections: [
      {
        title: "I. Postanowienia ogólne",
        items: [
          "Niniejsza polityka prywatności określa zasady i warunki zbierania, przetwarzania i przechowywania danych Użytkowników, niezbędnych do świadczenia usług drogą elektroniczną za pośrednictwem serwisu internetowego lukasz.mederak.com.",
          "Serwis zbiera wyłącznie dane osobowe niezbędne do świadczenia i rozwoju usług w nim oferowanych.",
          "Użytkownikiem jest każda osoba fizyczna, której dane dotyczą, korzystająca z serwisu internetowego lukasz.mederak.com lub usług elektronicznych dostępnych za pośrednictwem Serwisu.",
          "Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane zgodnie z RODO oraz ustawą o ochronie danych osobowych z dnia 10 maja 2018 r.",
        ],
      },
      {
        title: "II. Administrator danych",
        items: [
          "Administratorem danych osobowych zbieranych przez Serwis jest Łukasz Męderak, adres poczty elektronicznej: lukasz@mederak.com.",
        ],
      },
      {
        title: "III. Cel zbierania danych osobowych",
        items: [
          "Dane osobowe użytkowników są przetwarzane w celu komunikacji z Użytkownikiem, promocji oferty Administratora, działań marketingowych, remarketingowych, afiliacyjnych, społecznościowych, analitycznych i statystycznych.",
          "W przypadku zgody użytkownika dane osobowe mogą być wykorzystywane w celach marketingowych, w tym do przesyłania informacji o produktach, usługach, promocjach oraz nowościach w Serwisie.",
          "Administrator przetwarza dane osobowe wyłącznie w zakresie i celach określonych w polityce prywatności oraz zgodnie z obowiązującymi przepisami prawa.",
        ],
      },
      {
        title: "IV. Sposób pozyskiwania danych osobowych",
        items: [
          "Administrator pozyskuje dane osobowe bezpośrednio od Użytkownika za pośrednictwem Serwisu, poprzez dostępne funkcjonalności i narzędzia do komunikacji. Podanie danych osobowych jest dobrowolne.",
        ],
      },
      {
        title: "V. Rodzaj przetwarzanych danych osobowych",
        items: [
          "Administrator może przetwarzać następujące dane osobowe Użytkownika: adres e-mail, imię i nazwisko oraz numer telefonu.",
        ],
      },
      {
        title: "VI. Okres przetwarzania danych osobowych",
        items: [
          "Administrator przechowuje dane osobowe przez okres niezbędny do realizacji celów, dla których dane zostały zebrane.",
          "W przypadku przetwarzania danych na podstawie zgody dane są przechowywane przez okres obowiązywania zgody.",
          "Po upływie okresu przechowywania Administrator usuwa dane lub uniemożliwia dostęp do nich.",
          "W przypadku wycofania zgody Administrator usuwa dane lub uniemożliwia dostęp do nich w ciągu 30 dni od otrzymania żądania, chyba że przepisy prawa wymagają dłuższego przechowywania.",
        ],
      },
      {
        title: "VII. Udostępnianie danych osobowych",
        items: [
          "Dane osobowe Użytkownika nie są przekazywane przez Administratora podmiotom trzecim.",
        ],
      },
      {
        title: "VIII. Prawa użytkownika",
        items: [
          "Użytkownik ma prawo dostępu do swoich danych osobowych, otrzymania ich kopii, sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu oraz przenoszenia danych.",
          "W celu skorzystania z praw dotyczących danych osobowych Użytkownik może skontaktować się z Administratorem: Łukasz Męderak, lukasz@mederak.com.",
          "Użytkownik ma prawo do wniesienia skargi do organu nadzorczego w przypadku naruszenia przepisów o ochronie danych osobowych.",
          "Administrator zapewnia użytkownikom możliwość realizacji ich praw zgodnie z obowiązującymi przepisami prawa.",
        ],
      },
      {
        title: "IX. Pliki cookies",
        items: [
          "Serwis korzysta z plików cookies w celu usprawnienia korzystania z witryny oraz dostarczania spersonalizowanych treści i reklam.",
          "Pliki cookies to niewielkie pliki tekstowe zapisywane na urządzeniu użytkownika podczas korzystania z witryny. Umożliwiają identyfikację przeglądarki lub urządzenia oraz zapamiętanie preferencji i ustawień.",
          "Serwis wykorzystuje pliki cookies sesyjne oraz trwałe.",
          "Użytkownik może zablokować lub ograniczyć używanie plików cookies w ustawieniach przeglądarki. Może to jednak wpłynąć na funkcjonalność witryny.",
          "Użytkownik może określić zakres dostępu plików cookies do swojego urządzenia w ustawieniach przeglądarki.",
        ],
      },
      {
        title: "X. Postanowienia końcowe",
        items: [
          "Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. Zmiany będą publikowane na stronie internetowej i obowiązują od momentu publikacji.",
          "Informacja o wprowadzonych zmianach może pojawić się w formie komunikatu dostępnego w Serwisie.",
          "W sprawach nieuregulowanych w niniejszej Polityce prywatności obowiązują przepisy RODO i przepisy prawa polskiego.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    description: "Read the privacy policy",
    sections: [
      {
        title: "I. General Provisions",
        items: [
          "This privacy policy sets out the rules and conditions for collecting, processing and storing Users’ data necessary to provide electronic services through the website lukasz.mederak.com.",
          "The website collects only personal data necessary to provide and develop the services offered through it.",
          "A User is any natural person whose data is concerned and who uses lukasz.mederak.com or electronic services available through the website.",
          "Personal data collected through the website is processed in accordance with the GDPR and the Polish Personal Data Protection Act of 10 May 2018.",
        ],
      },
      {
        title: "II. Data Controller",
        items: [
          "The controller of personal data collected through the website is Łukasz Męderak, email address: lukasz@mederak.com.",
        ],
      },
      {
        title: "III. Purpose of Collecting Personal Data",
        items: [
          "Users’ personal data is processed for communication with the User, promotion of the Controller’s offer, marketing, remarketing, affiliation, social media, analytical and statistical activities.",
          "If the User gives consent, personal data may be used for marketing purposes, including sending information about products, services, promotions and website updates.",
          "The Controller processes personal data only within the scope and purposes specified in this privacy policy and in accordance with applicable law.",
        ],
      },
      {
        title: "IV. How Personal Data Is Collected",
        items: [
          "The Controller obtains personal data directly from the User through the website, via available features and communication tools. Providing personal data is voluntary.",
        ],
      },
      {
        title: "V. Types of Personal Data Processed",
        items: [
          "The Controller may process the User’s personal data such as email address, first and last name and phone number.",
        ],
      },
      {
        title: "VI. Personal Data Retention Period",
        items: [
          "The Controller stores personal data for the period necessary to achieve the purposes for which the data was collected.",
          "If data is processed on the basis of consent, it is stored for the duration of that consent.",
          "After the retention period expires, the Controller deletes the data or prevents access to it.",
          "If consent is withdrawn, the Controller deletes the data or prevents access to it within 30 days of receiving the request, unless applicable law requires a longer retention period.",
        ],
      },
      {
        title: "VII. Sharing Personal Data",
        items: [
          "The User’s personal data is not transferred by the Controller to third parties.",
        ],
      },
      {
        title: "VIII. User Rights",
        items: [
          "The User has the right to access their personal data, receive a copy, rectify it, erase it, restrict processing, object to processing and transfer their data.",
          "To exercise rights related to personal data, the User may contact the Controller: Łukasz Męderak, lukasz@mederak.com.",
          "The User has the right to lodge a complaint with a supervisory authority if data protection regulations are violated.",
          "The Controller enables Users to exercise their rights in accordance with applicable law.",
        ],
      },
      {
        title: "IX. Cookies",
        items: [
          "The website uses cookies to improve website use and provide personalized content and advertisements.",
          "Cookies are small text files stored on the User’s device when using the website. They allow the browser or device to be identified and preferences and settings to be remembered.",
          "The website uses session cookies and persistent cookies.",
          "The User may block or restrict cookies in the browser settings. However, this may affect website functionality.",
          "The User may define the scope of cookie access to their device in the browser settings.",
        ],
      },
      {
        title: "X. Final Provisions",
        items: [
          "The Controller reserves the right to amend this Privacy Policy. Changes will be published on the website and become effective upon publication.",
          "Information about changes may appear as a notice available on the website.",
          "Matters not regulated by this Privacy Policy are governed by the GDPR and Polish law.",
        ],
      },
    ],
  },
};

const PrivacyPolicyPage = () => {
  const { language } = useLanguage();
  const t = policy[language];

  return (
    <section className="w-full py-6 lg:py-16">
      <Container>
        <PageHeading
          title={t.title}
          headerType="h1"
          description={t.description}
          position="center"
          headerClassName="lg:text-4xl"
        />
        <div className="flex w-full flex-col items-start justify-start gap-8">
          {t.sections.map((section) => (
            <section
              key={section.title}
              className="flex w-full flex-col items-start justify-start gap-4 text-blue-950"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <ol className="flex list-decimal flex-col gap-4 pl-5">
                {section.items.map((item) => (
                  <li key={item} className="text-lg font-normal leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicyPage;
