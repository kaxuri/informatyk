import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type ChangelogEntry = {
  date: string;
  version: string;
  changes: string[];
}

const changelogData: ChangelogEntry[] = [
  {
    date: "2025-01-09",
    version: "0.0.4.1 (Stable)",
    changes: [
      "[+] Dodano wsparcie dla Javascript w kompilatorze",
    ]
  },
  {
    date: "2025-01-09",
    version: "0.0.4.0 (Old)",
    changes: [
      "[+] Poprawki Wizualne",
      "[+] Nowa strona (Kompilator HTML&CSS)",
      "[+] Naprawy błędów logicznych",
      "[+] Wyłączono wsparcie dla Javascriptu w Kompilatorze z powodu ryzyka naruszenia strony",
    ]
  },
  {
    date: "2025-01-05",
    version: "0.0.3.1 (Old)",
    changes: [
      "[+] Poprawki Wizualne [Szczegóły zmian w commicie]",
      "[+] Poprawiono Navbar i jego nawigacje",
      "[+] Dodano nową stronę z wyszukiwarką arkuszów praktycznych",
      "[+] Naprawiono pomniejsze błędy logiczne kodu",
      "[+] Dodano kilka pomniejszych istotnych elementów oraz funkcji",
      "[+] Dodano tryb skupienia w wersji beta (Tylko do wersji 40 pytań)",
    ]
  },
  {
    date: "2025-01-05",
    version: "0.0.3.0 (Old)",
    changes: [
      "Ogólne:",
      "[+] Poprawki Wizualne",
      "[+] Poprawiono numerowanie pytań",
      "[+] Dodano możliwość losowania 1 pytania dla obu kategorii",
      "[+] Usprawniono nawigacje pomiędzy stronami",
      `[+] Przygotowanie pod eksperymentalny tryb skupienia(Wyłączenie konsoli,przełączenie karty,pozostanie bez odpowiedzi przez dłużej niż 10 min anuluje test)`,
      `[+] Naprawiono pomniejsze błędy`,
    ]
  },
  {
    date: "2025-01-03",
    version: "0.0.2.1 (Old)",
    changes: [
      "Ogólne:",
      "[+] Poprawki Wizualne",
    ]
  },
  {
    date: "2025-01-01",
    version: "0.0.2 (Old)",
    changes: [
      "[+] Nowa Strona główna",
      "[+] Aktualizacja bazy pytań INF 02 / EE 08",
      "[+] Poprawki Navbara",
      "[+] Zmieniono czcionkę na Inter",
      "[+] Poprawiono wydajność",
      "[-] Usunięto zapis wyników w cookies {Powodował błędy} ",
      "[/] Rozpoczęto prace nad językiem ukraińskim strony",
      "[+] Strona przyjeła nazwę AKUMA",
    ]
  },
  {
    date: "2024-12-23",
    version: "0.0.1 (Old)",
    changes: [
      " [+] Wypuszczenie aplikacji",
    ]
  },
]

export function Changelog() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-12">Historia zmian</h1>
      <div className="space-y-8">
        {changelogData.map((entry, index) => (
          <Card key={index} className="relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#00000030] rounded-l-lg"></div>
            <CardHeader>
              <CardTitle className="text-2xl">{entry.version}</CardTitle>
              <CardDescription>
                {entry.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {entry.changes.map((change, changeIndex) => (
                  <li key={changeIndex}>{change}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

