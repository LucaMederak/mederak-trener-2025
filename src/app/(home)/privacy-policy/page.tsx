import React from "react";

//components
import Container from "@/components/container/Container";
import PageHeading from "@/components/pageHeading/PageHeading";

const PrivacyPolicyPage = () => {
  return (
    <section className="w-full py-6 lg:py-16">
      <Container>
        <PageHeading
          title="Polityka prywatności"
          headerType="h1"
          description="Zapoznaj się z polityką prywatności"
          position="center"
          headerClassName="lg:text-4xl"
        />
        <div className="flex items-start justify-start flex-col gap-8 w-full">
          <ul className="flex items-start justify-start flex-col gap-4 list-decimal text-blue-950 [&>h2]:text-xl [&>h2]:font-medium [&>li]:text-lg [&>li]:font-normal [&>li]:ml-4">
            <h2>I. Postanowienia ogólne</h2>
            <li>
              Niniejsza polityka prywatności określa zasady i warunki zbierania,
              przetwarzania i przechowywania danych danych Użytkowników,
              niezbędnych do świadczenia usług drogą elektroniczną za
              pośrednictwem serwisu internetowego lukasz.mederak.com (dalej jako
              „Serwis”).
            </li>
            <li>
              Serwis zbiera wyłącznie dane osobowe niezbędne do świadczenia i
              rozwoju usług w nim oferowanych.
            </li>
            <li>
              Użytkownikiem jest każda osoba fizyczna, której dane dotyczą,
              korzystająca z serwisu internetowego lukasz.mederak.com lub usług
              elektronicznych dostępnych za pośrednictwem Serwisu.
            </li>
            <li>
              Niniejsza polityka prywatności jest zgodna z obowiązującym prawem.
              Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane
              zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
              2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
              fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
              swobodnego przepływu takich danych oraz uchylenia dyrektywy
              95/46/WE (ogólne rozporządzenie o ochronie danych, dalej RODO)
              oraz ustawą o ochronie danych osobowych z dnia 10 maja 2018 r.
            </li>
          </ul>
          <ul className="flex items-start justify-start flex-col gap-4 list-decimal text-blue-950 [&>h2]:text-xl [&>h2]:font-medium [&>li]:text-lg [&>li]:font-normal [&>li]:ml-4">
            <h2>II. Administrator danych</h2>
            <li>
              Administratorem danych osobowych zbieranych przez Serwis jest
              Łukasz Męderak, adres poczty elektronicznej:
              mederak.trener@gmail.com (dalej jako „Administrator”).
            </li>
          </ul>
          <ul className="flex items-start justify-start flex-col gap-4 list-decimal text-blue-950 [&>h2]:text-xl [&>h2]:font-medium [&>li]:text-lg [&>li]:font-normal [&>li]:ml-4">
            <h2>III. Cel zbierania danych osobowych</h2>
            <li>
              Dane osobowe użytkowników zbierane przez Serwis są przetwarzane w
              celu umożliwienia korzystania z usług świadczonych przez naszą
              firmę. Administrator przetwarza dane osobowe Użytkownika w
              następujących celach:
              <ol className="list-disc ml-4 mt-2">
                <li>komunikacji z Użytkownikiem,</li>
                <li>
                  wysyłki newslettera (po wyrażeniu zgody Użytkownika na jego
                  otrzymywanie),
                </li>
                <li>promocji oferty Administratora,</li>
                <li>marketingu, remarketingu, afiliacji,</li>
                <li>świadczenia usług społecznościowych,</li>
                <li>działań analitycznych i statystycznych,</li>
              </ol>
            </li>
            <li>
              W przypadku zgody użytkownika, dane osobowe mogą być
              wykorzystywane w celach marketingowych, w tym do przesyłania
              informacji o naszych produktach i usługach, promocjach oraz
              nowościach w Serwisie.
            </li>
            <li>
              Administrator przetwarza dane osobowe wyłącznie w zakresie i
              celach określonych w polityce prywatności oraz zgodnie z
              obowiązującymi przepisami prawa.
            </li>
          </ul>
          <ul className="flex items-start justify-start flex-col gap-4 list-decimal text-blue-950 [&>h2]:text-xl [&>h2]:font-medium [&>li]:text-lg [&>li]:font-normal [&>li]:ml-4">
            <h2>IV. Sposób pozyskiwania danych osobowych.</h2>
            <li>
              Administrator pozyskuje dane osobowe bezpośrednio od Użytkownika
              za pośrednictwem Serwisu, poprzez dostępne w nim funkcjonalności i
              narzędzia do komunikacji oraz przesłanie za ich pośrednictwem
              wiadomości do Administratora. Podanie danych osobowych przez
              Użytkownika jest dobrowolne.
            </li>
          </ul>
          <ul className="flex items-start justify-start flex-col gap-4 list-decimal text-blue-950 [&>h2]:text-xl [&>h2]:font-medium [&>li]:text-lg [&>li]:font-normal [&>li]:ml-4">
            <h2>V. Rodzaj przetwarzanych danych osobowych</h2>
            <li>
              Administrator może przetwarzać dane osobowe Użytkownika: adres
              e-mail, imię i nazwisko, numer telefonu.
            </li>
          </ul>
          <ul className="flex items-start justify-start flex-col gap-4 list-decimal text-blue-950 [&>h2]:text-xl [&>h2]:font-medium [&>li]:text-lg [&>li]:font-normal [&>li]:ml-4">
            <h2>VI. Okres przetwarzania danych osobowych</h2>
            <li>
              Administrator przechowuje dane osobowe użytkowników przez okres
              niezbędny do realizacji celów, dla których dane te zostały
              zebrane, zgodnie z punktem 3 polityki prywatności.
            </li>
            <li>
              W przypadku przetwarzania danych osobowych na podstawie zgody
              użytkownika, dane te są przechowywane przez okres obowiązywania
              zgody
            </li>
            <li>
              Po upływie okresu przechowywania danych osobowych, Administrator
              usuwa te dane lub uniemożliwia dostęp do nich.
            </li>
            <li>
              W przypadku wycofania zgody na przetwarzanie danych osobowych,
              Administrator usuwa te dane lub uniemożliwia dostęp do nich w
              ciągu 30 dni od otrzymania żądania wycofania zgody, chyba że
              przepisy prawa lub regulacje prawnie uzasadnione wymagają
              przechowywania tych danych przez dłuższy okres.
            </li>
          </ul>
          <ul className="flex items-start justify-start flex-col gap-4 list-decimal text-blue-950 [&>h2]:text-xl [&>h2]:font-medium [&>li]:text-lg [&>li]:font-normal [&>li]:ml-4">
            <h2>VII. Udostępnianie danych osobowych</h2>
            <li>
              Dane osobowe Użytkownika nie są przekazywane przez Administratora
              podmiotom trzecim.
            </li>
          </ul>
          <ul className="flex items-start justify-start flex-col gap-4 list-decimal text-blue-950 [&>h2]:text-xl [&>h2]:font-medium [&>li]:text-lg [&>li]:font-normal [&>li]:ml-4">
            <h2>VIII. Prawa użytkownika</h2>
            <li>
              Każdy użytkownik, którego dane osobowe są przetwarzane przez
              Administratora, ma prawo do:
              <ol className="list-disc ml-4 mt-2">
                <li>
                  dostępu do swoich danych osobowych i otrzymania ich kopii,
                </li>
                <li>sprostowania swoich danych osobowych,</li>
                <li>usunięcia swoich danych osobowych,</li>
                <li>ograniczenia przetwarzania swoich danych osobowych,</li>
                <li>
                  wniesienia sprzeciwu wobec przetwarzania swoich danych
                  osobowych,
                </li>
                <li>przenoszenia swoich danych osobowych</li>
              </ol>
            </li>
            <li>
              W przypadku chęci skorzystania przez Użytkownika z przysługujących
              mu praw jako podmiotu danych osobowych, może on się skontaktować z
              Administratorem za pomocą następujących danych kontaktowych:
              Łukasz Męderak, lukasz.mederak@gmail.com.
            </li>
            <li>
              Użytkownik ma prawo do wniesienia skargi do organu nadzorczego, w
              przypadku naruszenia przez Administratora przepisów o ochronie
              danych osobowych.
            </li>
            <li>
              Administrator zapewnia użytkownikom możliwość realizacji ich praw,
              zgodnie z obowiązującymi przepisami prawa.
            </li>
          </ul>
          <ul className="flex items-start justify-start flex-col gap-4 list-decimal text-blue-950 [&>h2]:text-xl [&>h2]:font-medium [&>li]:text-lg [&>li]:font-normal [&>li]:ml-4">
            <h2>IX. Pliki cookies</h2>
            <li>
              Serwis korzysta z plików cookies w celu usprawnienia korzystania z
              witryny oraz dostarczania spersonalizowanych treści i reklam.
            </li>
            <li>
              Pliki cookies to niewielkie pliki tekstowe zapisywane na
              urządzeniu użytkownika (np. komputerze, tablecie lub smartfonie)
              podczas korzystania z witryny. Pliki cookie umożliwiają
              identyfikację przeglądarki lub urządzenia użytkownika oraz
              zapamiętanie preferencji i ustawień.
            </li>
            <li>
              Serwis wykorzystuje pliki cookies sesyjne oraz trwałe. Pliki
              cookies sesyjne wygasają po zamknięciu przeglądarki, natomiast
              pliki cookies trwałe pozostają na urządzeniu użytkownika przez
              określony czas lub do momentu ich ręcznego usunięcia.
            </li>
            <li>
              Użytkownik może zablokować lub ograniczyć używanie plików cookies
              za pomocą ustawień przeglądarki internetowej. Należy jednak
              pamiętać, że zablokowanie lub ograniczenie plików cookies może
              wpłynąć na funkcjonalność witryny i spowodować utrudnienia w
              korzystaniu z niej.
            </li>
            <li>
              Użytkownik może określić zakres dostępu plików cookies do swojego
              urządzenia w ustawieniach przeglądarki.
            </li>
          </ul>
          <ul className="flex items-start justify-start flex-col gap-4 list-decimal text-blue-950 [&>h2]:text-xl [&>h2]:font-medium [&>li]:text-lg [&>li]:font-normal [&>li]:ml-4">
            <h2>X. Postanowienia końcowe</h2>
            <li>
              Administrator zastrzega sobie prawo do wprowadzania zmian w
              Polityce Prywatności w dowolnym czasie. Zmiany te będą publikowane
              na stronie internetowej, a ich obowiązywanie zacznie się od
              momentu ich opublikowania.
            </li>
            <li>
              Informacja o wprowadzonych zmianach pojawi się w formie komunikatu
              dostępnego w Serwisie.
            </li>
            <li>
              W sprawach nieuregulowanych w niniejszej Polityce prywatności
              obowiązują przepisy RODO i przepisy prawa polskiego.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicyPage;
