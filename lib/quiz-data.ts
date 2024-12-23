"use client"
import { Question } from '../types/quiz';

export const allQuizData: Question[] = [
  {
    "id": 1,
    "text": "1. Którego polecenia nalezy użyć, aby wyraz TEKST został wyświetleny w kolorze czarnym w oknie przeglądarki internetowej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<body color=\"black\"> TEKST </font>"
      },
      {
        "id": "B",
        "text": "<font color=\"czarny\"> TEKST </font>"
      },
      {
        "id": "C",
        "text": "<font color=\"#000000\"> TEKST </font>"
      },
      {
        "id": "D",
        "text": "<body bgcolor=\"black\"> TEKST </body>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 2,
    "text": "2. W poleceniach, których celem jest odtwarzanie na stronie internetowej dźwięku jako podkładu muzycznego NIE wykorzystuje się atrybutu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "loop=\"10\""
      },
      {
        "id": "B",
        "text": "balance=\"-10\""
      },
      {
        "id": "C",
        "text": "volume=\"-100\""
      },
      {
        "id": "D",
        "text": "href=\"C:/100.wav\""
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 3,
    "text": "3. Jakiego znacznika należy użyć, aby przejść do kolejnej linii tekstu, nie tworząc akapitu na stronie internetowej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<p>"
      },
      {
        "id": "B",
        "text": "</b>"
      },
      {
        "id": "C",
        "text": "<br>"
      },
      {
        "id": "D",
        "text": "</br>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 4,
    "text": "4. Kaskadowe arkusze stylów tworzy się w celu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ułatwienia formatowania strony"
      },
      {
        "id": "B",
        "text": "nadpisywania wartości znaczników już ustawionych na stronie"
      },
      {
        "id": "C",
        "text": "połączenia struktury dokumentu strony z właściwą formą jego prezentacji"
      },
      {
        "id": "D",
        "text": "blokowania jakichkolwiek zmian w wartościach znaczników już przypisanych w pliku CSS"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 5,
    "text": "5. W podanej regule CSS: h1 {color: blue} h1 oznacza",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "klasę"
      },
      {
        "id": "B",
        "text": "wartość"
      },
      {
        "id": "C",
        "text": "selektor"
      },
      {
        "id": "D",
        "text": "deklarację"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 6,
    "text": "6. Edytor spełniający założenia WYSIWYG musi umożliwiać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "tworzenie podstawowej grafiki wektorowej"
      },
      {
        "id": "B",
        "text": "publikację strony na serwerze poprzez wbudowanego klienta FTP"
      },
      {
        "id": "C",
        "text": "obróbkę plików dźwiękowych przed umieszczeniem ich na stronie internetowej"
      },
      {
        "id": "D",
        "text": "uzyskanie zbliżonego wyniku tworzenej strony do jej obrazu w przegladarce interenetowej"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 7,
    "text": "7. Do graficznego tworzenia stron internetowych należy wykorzystać.",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "edytor CSS"
      },
      {
        "id": "B",
        "text": "przeglądarkę internetową"
      },
      {
        "id": "C",
        "text": "program typu WYSIWYG"
      },
      {
        "id": "D",
        "text": "program MS Office Picture Manager"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 8,
    "text": "8. W procesie walidacji stron internetowych nie bada się",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "działania linków"
      },
      {
        "id": "B",
        "text": "błędów składni kodu"
      },
      {
        "id": "C",
        "text": "zgodności z przeglądarkami"
      },
      {
        "id": "D",
        "text": "źródła pochodzenia narzędzi edytorskich"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 9,
    "text": "9. Model opisu przestrzeni barw o parametrach: odcień, nasycenie i jasność, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "HSV"
      },
      {
        "id": "B",
        "text": "RGB"
      },
      {
        "id": "C",
        "text": "CMY"
      },
      {
        "id": "D",
        "text": "CMYK"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 10,
    "text": "10. Wskaż model barw, który stosuje się do wyświetlania kolorów na ekranie monitora komputerowego",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "HLS"
      },
      {
        "id": "B",
        "text": "RGB"
      },
      {
        "id": "C",
        "text": "CMY"
      },
      {
        "id": "D",
        "text": "CMYK"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 11,
    "text": "11. Który parametr obiektu graficznego ulegnie zmianie po modyfikacji wartości kanału alfa?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Nasycenie barw"
      },
      {
        "id": "B",
        "text": "Przezroczystość"
      },
      {
        "id": "C",
        "text": "Ostrość krawędzi"
      },
      {
        "id": "D",
        "text": "Kolejność wyświetlenia pikseli"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 12,
    "text": "12. Jakiego formatu należy użyć do zapisu obrazu z kompresją stratną?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "GIF"
      },
      {
        "id": "B",
        "text": "PNG"
      },
      {
        "id": "C",
        "text": "PCX"
      },
      {
        "id": "D",
        "text": "JPEG"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 13,
    "text": "13. Najprostszy sposób zamiany obiektu oznaczonego cyfrą 1 na obiekt oznaczony cyfrą 2 polega na",
    "image": "e14/13.jpg",
    "answers": [
      {
        "id": "A",
        "text": "animowaniu obiektu"
      },
      {
        "id": "B",
        "text": "zmianie warstwy obiektu"
      },
      {
        "id": "C",
        "text": "narysowaniu docelowego obiektu"
      },
      {
        "id": "D",
        "text": "geometrycznym transformowaniu obiektu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 14,
    "text": "14. Jak nazywa się proces przedstawienia, we właściwej dla danego środowiska formie, informacji zawartej w dokumencie elektronicznym?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Mapowanie"
      },
      {
        "id": "B",
        "text": "Rasteryzacja"
      },
      {
        "id": "C",
        "text": "Renderowanie"
      },
      {
        "id": "D",
        "text": "Teksturowanie"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 15,
    "text": "15. Proces filtracji sygnału wejściowego w dziedzinie czasu, obejmujący zasadę superpozycji, związany jest filtrem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "liniowym"
      },
      {
        "id": "B",
        "text": "przyczynowym"
      },
      {
        "id": "C",
        "text": "niezmiennym w czasie"
      },
      {
        "id": "D",
        "text": "o skończonej odpowiedzi impulsowej"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 16,
    "text": "16. Jak nazywa się podzbiór strukturalnego języka zapytań, związany z formułowaniem zapytań do bazy danych za pomocą polecenia SELECT?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SQL DML (ang. Data Manipulation Language)"
      },
      {
        "id": "B",
        "text": "SQL DDL (ang. Data Definition Language)"
      },
      {
        "id": "C",
        "text": "SQL DCL (ang. Data Control Language)"
      },
      {
        "id": "D",
        "text": "SQL DQL (ang. Data Query Language)"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 17,
    "text": "17. Jakie sa nazwy typowych poleceń języka zapytań SQL, związane z wykonywaniem operacji na danych SQL DML (np.: umieszczanie danych w bazie, kasowanie dokonywanie zmian w danych)?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT, SELECT INTO"
      },
      {
        "id": "B",
        "text": "ALTER, CREATE, DROP"
      },
      {
        "id": "C",
        "text": "DENY, GRANT, REVOKE"
      },
      {
        "id": "D",
        "text": "DELETE, INSERT, UPDATE"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 18,
    "text": "18. Jak posortowana będzie lista, utworzona ze wszystkich kolumn tabeli uczniowie i zawierająca uczniów ze średnią większą od 5, która zostanie zwrócona jako wynik przedstawionego zapytania?",
    "image": "e14/18.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Rosnąca według parametru klasa"
      },
      {
        "id": "B",
        "text": "Malejąco według parametru klasa"
      },
      {
        "id": "C",
        "text": "Rosnaco według parametru srednia"
      },
      {
        "id": "D",
        "text": "Malejąco według parametru srednia"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 19,
    "text": "19. Według którego parametru oraz dla ilu tabel zostaną zwrócone wiersze na liście w wyniku przedstawionego zapytania?",
    "image": "e14/19.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Według parametru wyrob_id wyłącznie dla trzech tabel"
      },
      {
        "id": "B",
        "text": "Według parametru wyrob_id dla wyłącznie dla trzech tabel"
      },
      {
        "id": "C",
        "text": "Według parametru nr_id wyłącznie dla trzech tabel"
      },
      {
        "id": "D",
        "text": "Według parametru nr_id dla wszystkich tabel"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 20,
    "text": "20. Który z obiektów relacyjnej bazy danych, będący kodem języka SQL, może być wywoływany w zapytaniach modyfikujących kolumny danych widoczne jako tabela, bez względu na to czy jest tworzony programowo, czy dynamicznie?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Reguła"
      },
      {
        "id": "B",
        "text": "Wyzwalacz"
      },
      {
        "id": "C",
        "text": "Procedura składowa"
      },
      {
        "id": "D",
        "text": "Funkcja zdefiniowana"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 21,
    "text": "21. Jak nazywa się element bazy danych, za pomocą którego można jedynie odczytać dane z bazy, prezentując je w postaci tekstu lub wykresu?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Tabela"
      },
      {
        "id": "B",
        "text": "Raport"
      },
      {
        "id": "C",
        "text": "Zapytanie"
      },
      {
        "id": "D",
        "text": "Formularz"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 22,
    "text": "22. Jakiego typu specjalizowane oprogramowanie narzędziowe należy zainstalować, aby umożliwić wykonywanie jego użytkownikowi operacji na zgromadzonych danych?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Klucz obcy"
      },
      {
        "id": "B",
        "text": "System Zarządzania Bazą Danych (SZBD)"
      },
      {
        "id": "C",
        "text": "Obiektowy System Zarządzania Bazą Danych"
      },
      {
        "id": "D",
        "text": "Otwarty mechanizm komunikacji bazy danych"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 23,
    "text": "23. Co należy zastosować w organizacji danych, aby zapytania w bazie danych były wykonywane szybciej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Reguły"
      },
      {
        "id": "B",
        "text": "Indeksy"
      },
      {
        "id": "C",
        "text": "Wartości domyślne"
      },
      {
        "id": "D",
        "text": "Klucze podstawowe"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 24,
    "text": "24. W programie Microsoft Access formą zabezpieczeń dostępu do danych związaną z tabelą i kwerendą jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "stosowanie makr"
      },
      {
        "id": "B",
        "text": "przypisanie uprawnień"
      },
      {
        "id": "C",
        "text": "określanie przestrzeni tabel"
      },
      {
        "id": "D",
        "text": "wprowadzenie limitów przestrzeni dyskowej"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 25,
    "text": "25. Które z wymienionych osób odpowiadają za przygotowanie systemu bazy danych do pracy produkcyjnej w sposób ciągły, zarządzanie użytkownikami i instalowanie nowych wersji systemu bazodanowego?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Projektanci narzędzi deweloperskich"
      },
      {
        "id": "B",
        "text": "Administratorzy systemu bazy danych"
      },
      {
        "id": "C",
        "text": "Administratorzy serwerów i sieci komputerowych"
      },
      {
        "id": "D",
        "text": "Projektanci i programiści Systemu Zarządzania Bazą Danych."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 26,
    "text": "26. Z jakimi mechanizmami nadawania zabezpieczeń, dającymi możliwości wykonywania operacji na bazie danych, związane są zagadnienia zarządzania kontami, użytkownikami i uprawnieniami?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Z regułami"
      },
      {
        "id": "B",
        "text": "Z atrybutami"
      },
      {
        "id": "C",
        "text": "Z przywilejami obiektowymi"
      },
      {
        "id": "D",
        "text": "Z przywilejami systemowymi"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 27,
    "text": "27. Metoda udostępniania bazy danych w programie Microsoft Access, dotycząca wszystkich obiektów bazy umieszczonych na dysku sieciowym i używanych jednocześnie przez różne osoby nosi nazwę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "folderu sieciowego"
      },
      {
        "id": "B",
        "text": "serwera bazy danych"
      },
      {
        "id": "C",
        "text": "dzielonej bazy danych"
      },
      {
        "id": "D",
        "text": "witryny programu SharePoint"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 28,
    "text": "28. Jakie należy posiadać uprawnienia, aby wykonać i odtworzyć kopię zapasową bazy danych Microsoft SQL Server 2005 Express?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Users"
      },
      {
        "id": "B",
        "text": "Security users"
      },
      {
        "id": "C",
        "text": "Użytkownik lokalny"
      },
      {
        "id": "D",
        "text": "Administrator systemu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 29,
    "text": "29. Typ zmiennej w języku JavaScript",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "nie występuje"
      },
      {
        "id": "B",
        "text": "jest tylko jeden"
      },
      {
        "id": "C",
        "text": "następuje poprzez przypisanie wartości"
      },
      {
        "id": "D",
        "text": "musi być zadeklarowany na początku skryptu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 30,
    "text": "30. Zmienne typu int odnoszą się do liczb",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "naturalnych"
      },
      {
        "id": "B",
        "text": "całkowitych"
      },
      {
        "id": "C",
        "text": "w notacji stałoprzecinkowej"
      },
      {
        "id": "D",
        "text": "w notacji zmiennoprzecinkowej"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 31,
    "text": "31. Co definiuje w języku C++ przedstawiony fragment kodu?",
    "image": "e14/31.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Hierarchię zmiennych"
      },
      {
        "id": "B",
        "text": "Trzy zmienne niepowiązane ze sobą"
      },
      {
        "id": "C",
        "text": "Typ strukturalny składający się z trzech pól"
      },
      {
        "id": "D",
        "text": "Kontakt pomiędzy zmiennymi globalnymi i lokalnymi"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 32,
    "text": "32. Sposób programowania, w którym ciąg poleceń (sekwencji instrukcji) przekazywanych komputerowi jest postrzegany jako program, nosi nazwę programowania",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "stanowego"
      },
      {
        "id": "B",
        "text": "logicznego"
      },
      {
        "id": "C",
        "text": "funkcyjnego"
      },
      {
        "id": "D",
        "text": "imperatywnego"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 33,
    "text": "33. Które wartości będą kolejno wypisane w wyniku działania przedstawionego skryptu",
    "image": "e14/33.jpg",
    "answers": [
      {
        "id": "A",
        "text": "2 2 1"
      },
      {
        "id": "B",
        "text": "2 1 1"
      },
      {
        "id": "C",
        "text": "1 2 1"
      },
      {
        "id": "D",
        "text": "1 2 2"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 34,
    "text": "34. Fragment kodu prezentuje składnię języka",
    "image": "e14/34.jpg",
    "answers": [
      {
        "id": "A",
        "text": "C"
      },
      {
        "id": "B",
        "text": "C#"
      },
      {
        "id": "C",
        "text": "PHP"
      },
      {
        "id": "D",
        "text": "JavaScript"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 35,
    "text": "35. Jaki program komputerowy przekształca kod źródłowy, napisany w konkretnym języku programowania, na język komputera?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Debugger"
      },
      {
        "id": "B",
        "text": "Kompilator"
      },
      {
        "id": "C",
        "text": "Edytor kodu źródłowego"
      },
      {
        "id": "D",
        "text": "Środowisko programistyczne"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 36,
    "text": "36. Jak nazywa się program, który wykonuje instrukcje zawarte w kodzie źródłowym tworzonego programu bez uprzedniego generowania programu wynikowego?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Interpreter"
      },
      {
        "id": "B",
        "text": "Kompilator"
      },
      {
        "id": "C",
        "text": "Konwerter kodu"
      },
      {
        "id": "D",
        "text": "Konwerter języka"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 37,
    "text": "37. Który język skryptowy ogólnego przeznaczenia należy wykorzystać do tworzenia aplikacji WWW, zagnieżdżanych w języku HTML i uruchamianych po stronie serwera?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "C#"
      },
      {
        "id": "B",
        "text": "Perl"
      },
      {
        "id": "C",
        "text": "PHP"
      },
      {
        "id": "D",
        "text": "JavaScript"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 38,
    "text": "38. Jak nazywa się technika umożliwiająca otwarcie połączenia klienta z serwerem i komunikację bez przeładowywania całej strony WWW w sposób asynchroniczny ?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "PHP"
      },
      {
        "id": "B",
        "text": "XML"
      },
      {
        "id": "C",
        "text": "AJAX"
      },
      {
        "id": "D",
        "text": "VBScript"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 39,
    "text": "39. Jak nazywa się element oznaczony znakiem zapytania w strukturze platformy .NET, który umożliwia tworzenie własnych aplikacji z użyciem frameworków i zamianę kompilowanego kodu pośredniego na kod maszynowy procesora zainstalowanego w komputerze?",
    "image": "e14/39.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Infrastruktura językowa (CLI)"
      },
      {
        "id": "B",
        "text": "Biblioteka klas bazowych (BCL)"
      },
      {
        "id": "C",
        "text": "Wspólne środowisko programistyczne (CLP)"
      },
      {
        "id": "D",
        "text": "Wspólne środowisko uruchomieniowe (CLR)"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 40,
    "text": "40. Jakiego rodzaju mechanizm kontroli bezpieczeństwa wykonywania aplikacji zawiera środowisko uruchomieniowe platformy .NET Framework?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Mechanizm wykonywania aplikacji dla bibliotek klas"
      },
      {
        "id": "B",
        "text": "Mechanizm wykonywania aplikacji realizowany przez frameworki aplikacji internetowych (ASP.NET)"
      },
      {
        "id": "C",
        "text": "Mechanizm wykonywania aplikacji realizowany przez funkcję Windows API (Application Programming Interface)"
      },
      {
        "id": "D",
        "text": "Mechanizm wykonywania aplikacji oparty na uprawnieniach kodu (CAS - Code Access Security) i na rolach (RBS - Role-Based Security)"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 41,
    "text": "41. Co to jest DBMS?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Strukturalny język zapytań kierowanych do bazy danych"
      },
      {
        "id": "B",
        "text": "System zarządzania bazą danych"
      },
      {
        "id": "C",
        "text": "Obiektowy język programowania do generowania stron www"
      },
      {
        "id": "D",
        "text": "Kaskadowy arkusz stylów do opisu wyglądu strony www"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 42,
    "text": "42. Który z odsyłaczy posiada poprawną konstrukcję?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<a href='mailto:adres'> tekst </a>"
      },
      {
        "id": "B",
        "text": "<a href='http://adres'> tekst </a>"
      },
      {
        "id": "C",
        "text": "<a href=\"http://adres\"> tekst <a>"
      },
      {
        "id": "D",
        "text": "<a href=\"mailto:adres\"> tekst </a>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 43,
    "text": "43. Fragment kodu napisany w języku HTML zamieszczony w ramce przedstawia listę",
    "image": "e14/43.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wypunktowaną"
      },
      {
        "id": "B",
        "text": "numerowaną"
      },
      {
        "id": "C",
        "text": "odnośników"
      },
      {
        "id": "D",
        "text": "skrótów"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 44,
    "text": "44. Polecenie colspan służy do łączenia komórek tabeli w poziomie, natomiast rowspan w pionie. Którą z tabel wyświetli fragment kodu napisany w języku HTML?",
    "image": "e14/44.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 45,
    "text": "45. W znaczniku <head> (w części <meta>) strony www NIE umieszcza się informacji dotyczącej",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "autora"
      },
      {
        "id": "B",
        "text": "kodowania"
      },
      {
        "id": "C",
        "text": "typu dokumentu"
      },
      {
        "id": "D",
        "text": "automatycznego odświeżania"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 46,
    "text": "46. Wskaż sposób, w jaki należy odwołać się do pliku default.css, jeśli index.html znajduje się bezpośrednio w katalogu Strona?",
    "image": "e14/46.jpg",
    "answers": [
      {
        "id": "A",
        "text": "<link rel=\"stylesheet\" type=\"text/css\" href=\"./style/default.css\" />"
      },
      {
        "id": "B",
        "text": "<link rel=\"stylesheet\" type=\"text/css\" href=\"C:/style/default.css\" />"
      },
      {
        "id": "C",
        "text": "<link rel=\"stylesheet\" type=\"text/css\" href=\"...styledefault.css\" />"
      },
      {
        "id": "D",
        "text": "<link rel=\"stylesheet\" type=\"text/css\" href=\"c:style/default.css\" />"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 47,
    "text": "47. Wskaż stwierdzenie, które jest prawdziwe dla następującej definicji stylu:",
    "image": "e14/47.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Jest to styl lokalny"
      },
      {
        "id": "B",
        "text": "Zdefiniowano dwie klasy"
      },
      {
        "id": "C",
        "text": "Akapit będzie transponowany na małe litery"
      },
      {
        "id": "D",
        "text": "Odnośnik będzie pisany czcionką 14 punktów"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 48,
    "text": "48. W palecie kolorów RGB kolor żółty jest połączeniem dwóch kolorów: zielonego i czerwonego. Który z kodów szesnastkowych oznacza kolor żółty?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#FF00FF"
      },
      {
        "id": "B",
        "text": "#00FFFF"
      },
      {
        "id": "C",
        "text": "#FFFF00"
      },
      {
        "id": "D",
        "text": "#F0F0F0"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 49,
    "text": "49. Który z formatów NIE pozwala na zapis plików animowanych?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "GIF"
      },
      {
        "id": "B",
        "text": "ACE"
      },
      {
        "id": "C",
        "text": "SWF"
      },
      {
        "id": "D",
        "text": "SVG"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 50,
    "text": "50. Który z formatów graficznych pozwala na zapis przejrzystego tła?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "GIF"
      },
      {
        "id": "B",
        "text": "RAW"
      },
      {
        "id": "C",
        "text": "BMP"
      },
      {
        "id": "D",
        "text": "JPEG"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 51,
    "text": "51. Proces walidacji strony internetowej to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zespół działań mających na celu zwiększenie oglądalności"
      },
      {
        "id": "B",
        "text": "sprawdzenie jej w celu wyeliminowania błędów"
      },
      {
        "id": "C",
        "text": "publikowanie w sieci"
      },
      {
        "id": "D",
        "text": "promocja strony"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 52,
    "text": "52. Które oprogramowanie NIE JEST systemem zarządzania treścią (CMS)?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Joomla"
      },
      {
        "id": "B",
        "text": "Apache"
      },
      {
        "id": "C",
        "text": "Mambo"
      },
      {
        "id": "D",
        "text": "WordPress"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 53,
    "text": "53. Który z formatów zapewnia największa redukcję rozmiaru pliku dźwiękowego?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "WAV"
      },
      {
        "id": "B",
        "text": "PCM"
      },
      {
        "id": "C",
        "text": "MP3"
      },
      {
        "id": "D",
        "text": "CD-Audio"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 54,
    "text": "54. Wskaż prawidłową kolejność tworzenia bazy danych",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Określenie celu, utworzenie relacji, stworzenie tabel, normalizacja"
      },
      {
        "id": "B",
        "text": "Określenie celu, normalizacja, utworzenie relacji, stworzenie tabel"
      },
      {
        "id": "C",
        "text": "Określenie celu, stworzenie tabel, utworzenie relacji, normalizacja"
      },
      {
        "id": "D",
        "text": "Określenie celu, normalizacja, stworzenie tabel, utworzenie relacji"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 55,
    "text": "55. Wskaż typ relacji pomiędzy tabelami: Tabela1 i Tabela3",
    "image": "e14/55.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Jeden do jednego"
      },
      {
        "id": "B",
        "text": "Wiele do jednego"
      },
      {
        "id": "C",
        "text": "Jeden do wielu"
      },
      {
        "id": "D",
        "text": "Wiele do wielu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 56,
    "text": "56. Które z pól są umieszczone w formularzu?",
    "image": "e14/56.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Textarea, Option, Input(Chechbox), Input(Checkbox), Input(Submit) Input(Reset)"
      },
      {
        "id": "B",
        "text": "Input(Text), Select, Input(Radio), Input(Radio), Input(Submit), Input(Reset)"
      },
      {
        "id": "C",
        "text": "Textarea, Select, Input(Radio), Input(Radio), Input(Reset), Input(Submit)"
      },
      {
        "id": "D",
        "text": "Input(Text), Input(Chechbox), Select, Select, Input(Submit), Input(Reset)"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 57,
    "text": "57. Którą z właściwości pola tabeli należy zdefiniować, aby pole przyjmowało dane składające się wyłącznie z cyfr?",
    "image": "e14/57.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Tagi inteligentne"
      },
      {
        "id": "B",
        "text": "Wartość domyślną"
      },
      {
        "id": "C",
        "text": "Maskę wprowadzania"
      },
      {
        "id": "D",
        "text": "Regułę sprawdzania poprawności"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 58,
    "text": "58. Którego ze słów kluczowych języka SQL należy użyć, aby wyeliminować duplikaty?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "LIKE"
      },
      {
        "id": "B",
        "text": "DISTINCT"
      },
      {
        "id": "C",
        "text": "ORDER BY"
      },
      {
        "id": "D",
        "text": "GROUP BY"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 59,
    "text": "59. Które ze stwierdzeń prawidłowo charakteryzuje zdefiniowaną tabelę: CREATE TABLE dane (kolumna INTEGER(3));",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Tabela o nazwie posiada trzy kolumny liczb całkowitych"
      },
      {
        "id": "B",
        "text": "Tabela o nazwie posiada jedną kolumnę liczb całkowitych"
      },
      {
        "id": "C",
        "text": "Tabela posiada jedną kolumnę zawierającą trzy elementowe tablice"
      },
      {
        "id": "D",
        "text": "Kolumny tabeli nazywają się: , ,"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 60,
    "text": "60. Polecenie REVOKE SELECT ON nazwa1 FROM nazwa2 w języku SQL umożliwia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "nadanie uprawnień z użyciem zdefiniowanego schematu"
      },
      {
        "id": "B",
        "text": "odbieranie uprawnień użytkownikowi"
      },
      {
        "id": "C",
        "text": "usuwanie użytkownika z bazy"
      },
      {
        "id": "D",
        "text": "nadawanie praw do tabeli"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 61,
    "text": "61. Które polecenie wydane z konsoli systemu operacyjnego, zawierające w swojej składni opcję --repair, umożliwia naprawę bazy danych?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "mysqlcheck"
      },
      {
        "id": "B",
        "text": "mysqldump"
      },
      {
        "id": "C",
        "text": "truncate"
      },
      {
        "id": "D",
        "text": "create"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 62,
    "text": "62. Które polecenie wydane z konsoli systemowej dokona przywrócenia bazy danych?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "mysqldump -u root -p baza > kopia.sql"
      },
      {
        "id": "B",
        "text": "mysqldump -u root -p baza < kopia.sql"
      },
      {
        "id": "C",
        "text": "mysql -u root -p baza < kopia.sql"
      },
      {
        "id": "D",
        "text": "mysql -u root -p baza > kopia.sql"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 63,
    "text": "63. Polecenie w języku SQL GRANT ALL PRIVILEGES ON klienci TO pracownik",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "nadaje uprawnienie grupie do tabeli"
      },
      {
        "id": "B",
        "text": "odbiera wszystkie uprawnienia do tabeli"
      },
      {
        "id": "C",
        "text": "skopiuje uprawnienia z grupy na użytkownika"
      },
      {
        "id": "D",
        "text": "nadaje wszystkie uprawnienia do tabeli użytkownikowi"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 64,
    "text": "64. Która z wymienionych funkcji sortowania wykorzystywana w języku PHP sortuje tablicę asocjacyjną według indeksów",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "sort()"
      },
      {
        "id": "B",
        "text": "rsort()"
      },
      {
        "id": "C",
        "text": "asort()"
      },
      {
        "id": "D",
        "text": "ksort()"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 65,
    "text": "65. W skrypcie PHP należy utworzyć cookie o nazwie owoce które przyjmie wartość jabłko. Cookie ma być dostępne przez jedną godzinę od jego utworzenia. W tym celu należy w skrypcie PHP użyć funkcji:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "cookie(\"owoce\",\"jabłko\",3600);"
      },
      {
        "id": "B",
        "text": "cookie(\"jabłko\",\"owoce\",3600);"
      },
      {
        "id": "C",
        "text": "setcookie(\"owoce\",\"jabłko\",time()+3600);"
      },
      {
        "id": "D",
        "text": "setcookie(\"jabłko\",\"owoce\",time()+3600);"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 66,
    "text": "66. Wskaż słowo kluczowe w języku C++ dodawane przed wbudowanym typem danych, które przesuwa zakres liczby wyłącznie nieujemne",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "long"
      },
      {
        "id": "B",
        "text": "const"
      },
      {
        "id": "C",
        "text": "short"
      },
      {
        "id": "D",
        "text": "unsigned"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 67,
    "text": "67. W językach programowania tylko zmienna jednego typu wbudowanego może przyjmować wyłącznie dwie wartości. Jest to typ",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "logiczny"
      },
      {
        "id": "B",
        "text": "znakowy"
      },
      {
        "id": "C",
        "text": "tablicowy"
      },
      {
        "id": "D",
        "text": "łańcuchowy"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 68,
    "text": "68. Instrukcja języka PHP tworząca obiekt pkt dla zdefiniowanej w ramce klasy ma postać",
    "image": "e14/68.jpg",
    "answers": [
      {
        "id": "A",
        "text": "pkt Punkt;"
      },
      {
        "id": "B",
        "text": "pkt = new Punkt();"
      },
      {
        "id": "C",
        "text": "pkt Punkt();"
      },
      {
        "id": "D",
        "text": "Punkt() pkt;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 69,
    "text": "69. Wskaż wynik wykonania skryptu napisanego w języku PHP",
    "image": "e14/69.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 70,
    "text": "70. Które ze stwierdzeń dotyczących języków programowania NIE jest prawdziwe",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "C++ jest językiem obiektowym"
      },
      {
        "id": "B",
        "text": "JavaScript jest językiem skryptowym"
      },
      {
        "id": "C",
        "text": "SQL jest językiem programowania strukturalnego"
      },
      {
        "id": "D",
        "text": "PHP jest językiem do tworzenia stron w czasie rzeczywistym"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 71,
    "text": "71. Jaka wartość zostanie wypisana na standardowym wyjściu dla zamieszczonego w ramce fragmentu programu napisanego w języku C++",
    "image": "e14/71.jpg",
    "answers": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "32"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 72,
    "text": "72. Wskaż stwierdzenie, które nie jest prawdziwe dla następującej definicji funkcji w języku C++?",
    "image": "e14/72.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Funkcja zwraca wartość"
      },
      {
        "id": "B",
        "text": "Funkcja nie zwraca wartości"
      },
      {
        "id": "C",
        "text": "Funkcja posiada dwa parametry"
      },
      {
        "id": "D",
        "text": "Funkcja odwołuje się do parametrów przez referencję"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 73,
    "text": "73. Element zadeklarowany w języku C++ double *x; to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Parametr formalny typu rzeczywistego"
      },
      {
        "id": "B",
        "text": "Zmienna rzeczywista"
      },
      {
        "id": "C",
        "text": "Zmienna całkowita"
      },
      {
        "id": "D",
        "text": "Wskaźnik"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 74,
    "text": "74. Wskaż prawidłową kolejność tworzenia aplikacji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Specyfikacja wymagań, analiza wymagań klienta, tworzenie, wdrażanie,testy"
      },
      {
        "id": "B",
        "text": "Analiza wymagań klienta, specyfikacja wymagań tworzenie, testy, wdrażanie"
      },
      {
        "id": "C",
        "text": "Tworzenie, analiza wymagań klienta, specyfikacja wymagań, wdrażanie, testy"
      },
      {
        "id": "D",
        "text": "Analiza wymagań klienta, specyfikacja wymagań, tworzenie, wdrażanie, testy"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 75,
    "text": "75. Jaką wartość zwróci funkcja zao zdefiniowana w języku C++, wywołana z aktualnym parametrem 3.55",
    "image": "e14/75.jpg",
    "answers": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "3.5"
      },
      {
        "id": "D",
        "text": "4.05"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 76,
    "text": "76. Proces tłumaczenia kodu źródłowego pisanego przez programistę na zrozumiały dla komputera kod maszynowy to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "debugowanie"
      },
      {
        "id": "B",
        "text": "uruchamianie"
      },
      {
        "id": "C",
        "text": "kompilowanie"
      },
      {
        "id": "D",
        "text": "implementowanie"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 77,
    "text": "77. Które ze stwierdzeń, w odniesieniu do zamieszczonej w ramce definicji funkcji, jest poprawne?",
    "image": "e14/77.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Pętla wykona się tylko raz"
      },
      {
        "id": "B",
        "text": "Funkcja posiada pętlę powtarzającą się 3 razy"
      },
      {
        "id": "C",
        "text": "Tekst będzie wczytywany do momentu podania liczby większej niż 3"
      },
      {
        "id": "D",
        "text": "Wczytanie tekstu zakończy się, gdy tekst będzie się składał przynajmniej z 3 znaków"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 78,
    "text": "78. Po wykonaniu zamieszczonego w ramce skryptu napisanego w języku JavaScript w przeglądarce zostanie wypisana wartość",
    "image": "e14/78.jpg",
    "answers": [
      {
        "id": "A",
        "text": "12,4"
      },
      {
        "id": "B",
        "text": "12,5"
      },
      {
        "id": "C",
        "text": "15,4"
      },
      {
        "id": "D",
        "text": "15,5"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 79,
    "text": "79. Poprzez deklarację var x=\"true\"; w języku JavieScript tworzy się zmienną typu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Logicznego"
      },
      {
        "id": "B",
        "text": "Liczbowego"
      },
      {
        "id": "C",
        "text": "String (ciąg znaków)"
      },
      {
        "id": "D",
        "text": "Nieokreślonego (undefined)"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 80,
    "text": "80. Platforma wspierająca programowanie w technologii .NET to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "db2"
      },
      {
        "id": "B",
        "text": "eclipse"
      },
      {
        "id": "C",
        "text": "framework"
      },
      {
        "id": "D",
        "text": "middleware"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 81,
    "text": "81. Proces, w którym wykrywa się i usuwa błędy w kodzie źródłowym programów, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Kompilowanie"
      },
      {
        "id": "B",
        "text": "Debugowanie"
      },
      {
        "id": "C",
        "text": "standaryzacja"
      },
      {
        "id": "D",
        "text": "Normalizacja"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 82,
    "text": "82. Aby ustawić tło na stronie www należy użyć polecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<background=\"\"> </background>"
      },
      {
        "id": "B",
        "text": "<body bgcolor=\"\"> </body>"
      },
      {
        "id": "C",
        "text": "<bgcolor=\"\"> </bgcolor>"
      },
      {
        "id": "D",
        "text": "<body background=\"\"> </body>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 83,
    "text": "83. Parametr face znacznika <font> służy do określenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "barwy czcionki"
      },
      {
        "id": "B",
        "text": "nazwy czcionki"
      },
      {
        "id": "C",
        "text": "efektów czcionki"
      },
      {
        "id": "D",
        "text": "wielkości czcionki"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 84,
    "text": "84. Kodowanie w standardzie ISO-8859-2 stosowane jest w celu poprawnego wyświetlenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "symboli matematycznych"
      },
      {
        "id": "B",
        "text": "polskich liter, takich jak: ś, ć, ń, ó, ą"
      },
      {
        "id": "C",
        "text": "znaków specjalnych dla języka kodu strony"
      },
      {
        "id": "D",
        "text": "znaków zarezerwowanych dla języka opisu strony"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 85,
    "text": "85. Zamieszczony w ramce kod wyświetla tabelę składajacą się z",
    "image": "e14/85.jpg",
    "answers": [
      {
        "id": "A",
        "text": "dwóch wierszy i dwóch kolumn"
      },
      {
        "id": "B",
        "text": "dwóch wierszy i jednej kolumny"
      },
      {
        "id": "C",
        "text": "jednego wiersza i dwóch kolumn"
      },
      {
        "id": "D",
        "text": "jednego wiersza i jednej kolumny"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 86,
    "text": "86. W języku JavaScript, aby wydzielić fragment napisu znajdujący się pomiędzy wskazanymi przez parametr indeksami należy użyć metody",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "slice()"
      },
      {
        "id": "B",
        "text": "replace()"
      },
      {
        "id": "C",
        "text": "trim()"
      },
      {
        "id": "D",
        "text": "concat()"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 87,
    "text": "87. Które polecenie w CSS służy do załączenia zewnętrznego arkusza stylów?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "open"
      },
      {
        "id": "B",
        "text": "import"
      },
      {
        "id": "C",
        "text": "require"
      },
      {
        "id": "D",
        "text": "include"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 88,
    "text": "88. Selektor CSS a:link {color:red} zawarty w kaskadowych arkuszach stylów definiuje",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "klasę"
      },
      {
        "id": "B",
        "text": "pseudoklasę"
      },
      {
        "id": "C",
        "text": "identyfikator"
      },
      {
        "id": "D",
        "text": "pseudoelement"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 89,
    "text": "89. Jak nazywa się edytor wspomagający tworzenie stron internetowych, którego sposób działania można w polskim tłumaczeniu określić jako: otrzymujesz to, co widzisz?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "IDE"
      },
      {
        "id": "B",
        "text": "WYSIWYG"
      },
      {
        "id": "C",
        "text": "WEB STUDIO"
      },
      {
        "id": "D",
        "text": "VISUAL EDITOR"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 90,
    "text": "90. Kolor 255 12 12 w modelu RGB na stronie www powinien być zapisany w postaci",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#2551212"
      },
      {
        "id": "B",
        "text": "#EE0C0C"
      },
      {
        "id": "C",
        "text": "#AB1A1D"
      },
      {
        "id": "D",
        "text": "#FF0C0C"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 91,
    "text": "91. CMYK to zestaw czterech podstawowych kolorów farb drukarskich:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "turkusowego, błękitnego, białego, różowego"
      },
      {
        "id": "B",
        "text": "turkusowego, purpurowego, białego, czarnego"
      },
      {
        "id": "C",
        "text": "czerwonego, purpurowego, żółtego, szarego"
      },
      {
        "id": "D",
        "text": "turkusowego, purpurowego, żółtego, czarnego"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 92,
    "text": "92. Cechą formatu PNG jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "obsługa animacji"
      },
      {
        "id": "B",
        "text": "bezstratna kompresja"
      },
      {
        "id": "C",
        "text": "brak obsługi kanału alfa"
      },
      {
        "id": "D",
        "text": "reprezentacja grafiki wektorowej"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 93,
    "text": "93. Saturacja koloru nazywana jest inaczej",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "jasnością koloru"
      },
      {
        "id": "B",
        "text": "nasyceniem koloru"
      },
      {
        "id": "C",
        "text": "dopełnieniem koloru"
      },
      {
        "id": "D",
        "text": "przezroczystością koloru"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 94,
    "text": "94. Kanał alfa służy do zdefiniowania",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "jasności i kontrastu kolorów"
      },
      {
        "id": "B",
        "text": "przezroczystość obiektu graficznego"
      },
      {
        "id": "C",
        "text": "zaznaczonego fragmentu obiektu graficznego"
      },
      {
        "id": "D",
        "text": "podstawowych parametrów obiektu graficznego"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 95,
    "text": "95. Częstotliwość próbkowania ma wpływ na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "jakość cyfrowego dzwięku"
      },
      {
        "id": "B",
        "text": "jakość analogowego dzwięku"
      },
      {
        "id": "C",
        "text": "amplitudę fali dźwiękowej utworu"
      },
      {
        "id": "D",
        "text": "skalę głośności zapisanego utworu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 96,
    "text": "96. Wysokość dźwięku zależy od",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "siły wzbudzenia drgania"
      },
      {
        "id": "B",
        "text": "sposobu pobudzania drgania"
      },
      {
        "id": "C",
        "text": "czasu drgania źródła dzwięku"
      },
      {
        "id": "D",
        "text": "częstotliwości drgania fali akustycznej"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 97,
    "text": "97. Typ stało-znakowy w języku SQL to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "char"
      },
      {
        "id": "B",
        "text": "text"
      },
      {
        "id": "C",
        "text": "time"
      },
      {
        "id": "D",
        "text": "bool"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 98,
    "text": "98. Operator arytmetyczny modulo w języku SQL to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "/"
      },
      {
        "id": "B",
        "text": "||"
      },
      {
        "id": "C",
        "text": "&"
      },
      {
        "id": "D",
        "text": "%"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 99,
    "text": "99. Polecenie w języku SQL ALTER TABLE USA... ma za zadanie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "usunięcie tabeli USA"
      },
      {
        "id": "B",
        "text": "modyfikację tabeli USA"
      },
      {
        "id": "C",
        "text": "nadpisanie starej tabeli USA"
      },
      {
        "id": "D",
        "text": "utworzenie nowej tabeli USA"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 100,
    "text": "100. Kod: SELECT imie, pesel, wiek FROM dane WHERE wiek IN (18,30) spowoduje wybranie:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "imion, nazwisk i numerów PESEL osób w wieku poniżej 18 lat"
      },
      {
        "id": "B",
        "text": "imion, numerów PESEL i wieku osób z przedziału od 18 do 30 lat"
      },
      {
        "id": "C",
        "text": "imion, numerów PESEL i wieku osób posiadających powyżej 30 lat"
      },
      {
        "id": "D",
        "text": "imion, numerów PESEL i wieku osób w wieku równym 18 lub 30 lat"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 101,
    "text": "101. Aby policzyć wszystkie wiersze tabeli Koty należy użyć polecenia:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT COUNT(*) FROM Koty"
      },
      {
        "id": "B",
        "text": "SELECT ROWNUM() FROM Koty"
      },
      {
        "id": "C",
        "text": "SELECT COUNT(Koty) AS ROWNUM"
      },
      {
        "id": "D",
        "text": "SELECT COUNT(ROWNUM) FROM Koty"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 102,
    "text": "102. Aby podczas tworzenia tabeli utworzyć klucz obcy na wielu kolumnach, należy użyć polecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "CONSTRAINT(nazwisko,imie) FOREIGN KEY REFERENCES osoby (nazwisko, imie)"
      },
      {
        "id": "B",
        "text": "CONSTRAINT(nazwisko,imie) FOREIGN REFERENCES KEY osoby (nazwisko, imie)"
      },
      {
        "id": "C",
        "text": "CONSTRAINT fk_osoba_uczen FOREIGN KEY (nazwisko, imie) REFERENCES osoby (nazwisko,imie)"
      },
      {
        "id": "D",
        "text": "CONSTRAINT fk_osoba_uczen FOREIGN KEY ON (nazwisko, imie) REFERENCES osoby (nazwisko,imie)"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 103,
    "text": "103. W algebrze relacji operacja selekcji polega na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wyelminowaniu pustych wierszy"
      },
      {
        "id": "B",
        "text": "wybraniu krotek spełniających określone warunki"
      },
      {
        "id": "C",
        "text": "wybraniu krotek niezawierających wartości NULL"
      },
      {
        "id": "D",
        "text": "wyelminowaniu krotek z powtarzającymi się polami"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 104,
    "text": "104. Relacja w bazach danych jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "logicznym połączeniem tabel"
      },
      {
        "id": "B",
        "text": "kluczem głównym w relacji tabel"
      },
      {
        "id": "C",
        "text": "algebraicznym połączeniem tabel"
      },
      {
        "id": "D",
        "text": "połączeniem dwóch pól jednej tabeli"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 105,
    "text": "105. Wskaż poprawną kolejność etapów projektowania relacyjnej bazy danych",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Selekcja, Określenie relacji, Określenie kluczy podstawowych tabel, Określenie zbioru danych"
      },
      {
        "id": "B",
        "text": "Określenie relacji, Określenie kluczy podstawowych tabel, Selekcja, Określenie zbioru danych"
      },
      {
        "id": "C",
        "text": "Określenie kluczy podstawowych tabel, Określenie zbioru danych, Selekcja, Określenie relacji"
      },
      {
        "id": "D",
        "text": "Określenie zbioru danych, Selekcja, Określenie kluczy podstawowych tabel, Określenie relacji"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 106,
    "text": "106. Formularze do obsługi baz danych tworzy się w celu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "raportowania danych"
      },
      {
        "id": "B",
        "text": "wyszukiwania wierszy spełniających dane kryteria"
      },
      {
        "id": "C",
        "text": "wprowadzenia powiązań w relacyjnych bazach danych"
      },
      {
        "id": "D",
        "text": "wygodniejszego wprowadzania, edytowania i usuwania danych"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 107,
    "text": "107. Integralność referencyjna w modelu relacyjnych baz danych oznacza, że",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wartość klucza głównego oraz klucza obcego nie jest pusta"
      },
      {
        "id": "B",
        "text": "klucz główny lub klucz obcy nie zawierają wartości NULL"
      },
      {
        "id": "C",
        "text": "każdemu kluczowi głównemu odpowiada dokładnie jeden klucz obcy w tabeli lub tabelach powiązanych"
      },
      {
        "id": "D",
        "text": "wartość klucza obcego w danej tabeli musi być albo równa wartości klucza głównego w tabeli z nia powiązanej albo równa wartości NULL"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 108,
    "text": "108. Deklaracja w języku JavaScript: var x=true; powoduje, że zmienna x jest typu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "logicznego"
      },
      {
        "id": "B",
        "text": "liczbowego"
      },
      {
        "id": "C",
        "text": "ciąg znaków"
      },
      {
        "id": "D",
        "text": "wyliczeniowego"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 109,
    "text": "109. Obiekt typu array w języku Javascript służy do przechowywania",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wielu wartości lub funkcji"
      },
      {
        "id": "B",
        "text": "wielu wartości dowolnego typu"
      },
      {
        "id": "C",
        "text": "wielu wartości wyłącznie liczbowych"
      },
      {
        "id": "D",
        "text": "wielu wartości wyłącznie tekstowych"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 110,
    "text": "110. Ukrywanie pewnych pól lub metod obiektów danej klasy tak, aby były one dostępne tylko metodom wewnętrznym tej klasy lub funkcjom zaprzyjaźnionym, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "polimorfizm"
      },
      {
        "id": "B",
        "text": "hermetyzacja"
      },
      {
        "id": "C",
        "text": "konkatenacja"
      },
      {
        "id": "D",
        "text": "dziedziczenie"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 111,
    "text": "111. Odwoływanie funkcji do samej siebie to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "iteracja"
      },
      {
        "id": "B",
        "text": "rekurencja"
      },
      {
        "id": "C",
        "text": "hermetyzacja"
      },
      {
        "id": "D",
        "text": "dziedziczenie"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 112,
    "text": "112. W języku PHP zmienna $_GET jest zmienną",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "predefiniowaną, używaną do przekazywania danych do skryptów PHP poprzez adres strony"
      },
      {
        "id": "B",
        "text": "predefiniowaną, używaną do gromadzenia wartości formularza po nagłówkach zlecenia HTTP (danych z formularza nie można zobaczyć w adresie)"
      },
      {
        "id": "C",
        "text": "zdefiniowaną przez twórcę strony, służącą do przekazywania danych z formularza przez adres strony"
      },
      {
        "id": "D",
        "text": "zwykłą, zdefiniowaną przez twórcę strony"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 113,
    "text": "113. W języku PHP w instrukcji switch musi występować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "instrukcja default"
      },
      {
        "id": "B",
        "text": "konstrukcja switch(wyrażenie)"
      },
      {
        "id": "C",
        "text": "przynajmniej dwie instrukcje case"
      },
      {
        "id": "D",
        "text": "instrukcja break po każdej instrukcji case"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 114,
    "text": "114. Konstruktor w języku PHP jest metodą o nazwie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "_new"
      },
      {
        "id": "B",
        "text": "_open"
      },
      {
        "id": "C",
        "text": "_create"
      },
      {
        "id": "D",
        "text": "_construct"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 115,
    "text": "115. Debugger to program służący do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "badania właściwości programu"
      },
      {
        "id": "B",
        "text": "sprawdzania szybkości programu"
      },
      {
        "id": "C",
        "text": "wyszukiwania błędów w kodzie programu"
      },
      {
        "id": "D",
        "text": "zoptymalizowanie pamięci używanej przez aplikację"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 116,
    "text": "116. Kod zamieszczony w ramce spowoduje wypisanie liczb",
    "image": "e14/116.jpg",
    "answers": [
      {
        "id": "A",
        "text": "2 4 6 8"
      },
      {
        "id": "B",
        "text": "1 3 5 7 9"
      },
      {
        "id": "C",
        "text": "2 4 6 8 10"
      },
      {
        "id": "D",
        "text": "1 2 3 4 5 6 7 8 9 10"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 117,
    "text": "117. Który kod jest alternatywny do kodu zamieszczonego w ramce?",
    "image": "e14/117.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 118,
    "text": "118. Zamieszczony w ramce fragment skryptu w języku JavaScript",
    "image": "e14/118.jpg",
    "answers": [
      {
        "id": "A",
        "text": "przypisze zmienniej s zmienną t"
      },
      {
        "id": "B",
        "text": "wyświetli długość napisu ze zmiennej t"
      },
      {
        "id": "C",
        "text": "przypisze zmiennej s długość napisu ze zmiennej t"
      },
      {
        "id": "D",
        "text": "przypisze zmiennej s fragment napisu ze zmiennej t, o określonej przez zmienną length długości"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 119,
    "text": "119. Zamieszczony w ramce fragment kodu w JavaScript wypisze",
    "image": "e14/119.jpg",
    "answers": [
      {
        "id": "A",
        "text": "\"ze\""
      },
      {
        "id": "B",
        "text": "\"wo\""
      },
      {
        "id": "C",
        "text": "\"owodzeni\""
      },
      {
        "id": "D",
        "text": "\"wodzenia\""
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 120,
    "text": "120. Który fragment kodu JavaScript zwróci wartość true?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "\"a\" > \"b\""
      },
      {
        "id": "B",
        "text": "\"ab\" > \"c\""
      },
      {
        "id": "C",
        "text": "\"abc\" > \"def\""
      },
      {
        "id": "D",
        "text": "\"def\" > \"abc\""
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 121,
    "text": "121. W kodzie PHP znak \"//\" oznacza",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "początek skryptu"
      },
      {
        "id": "B",
        "text": "operator alernatywy"
      },
      {
        "id": "C",
        "text": "operator dzielenia całkowitego"
      },
      {
        "id": "D",
        "text": "początek komentarza jednoliniowego"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 122,
    "text": "122. Zapisując hasło użytkownika serwisu WWW (np. bankowości internetowej), w celu jego zabezpieczenia przed odtajnieniem, zwykle używa się funkcji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "klucza"
      },
      {
        "id": "B",
        "text": "cyklometrycznych"
      },
      {
        "id": "C",
        "text": "abstrakcyjnych"
      },
      {
        "id": "D",
        "text": "mieszających"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 123,
    "text": "123. W celu określenia wysokości obrazka wyświetlonego na stronie WWW należy wykorzystać właściwość CSS o nazwie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "width"
      },
      {
        "id": "B",
        "text": "padding"
      },
      {
        "id": "C",
        "text": "height"
      },
      {
        "id": "D",
        "text": "margin"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 124,
    "text": "124. Aby ustawić czcionkę Verdana w kodzie CSS, należy wykorzystać właściwość",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "font-family: Verdana;"
      },
      {
        "id": "B",
        "text": "font-style: Verdana;"
      },
      {
        "id": "C",
        "text": "font-name: Verdana;"
      },
      {
        "id": "D",
        "text": "font-weight: Verdana;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 125,
    "text": "125. Funkcja zapisana językiem PHP służy do",
    "image": "e14/125.jpg",
    "answers": [
      {
        "id": "A",
        "text": "połączenia z bazą danych"
      },
      {
        "id": "B",
        "text": "ustawienia hasła do bazy danych"
      },
      {
        "id": "C",
        "text": "zabezpieczenia bazy danych"
      },
      {
        "id": "D",
        "text": "pobrania danych z bazy danych"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 126,
    "text": "126. Kwerenda pozwalająca na wprowadzenie zmian w wielu rekordach lub przeniesienie wielu rekordów przy użyciu pojedynczej operacji, nosi nazwę kwerendy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "krzyżowej"
      },
      {
        "id": "B",
        "text": "funkcjonalnej"
      },
      {
        "id": "C",
        "text": "wybierającej"
      },
      {
        "id": "D",
        "text": "parametrycznej"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 127,
    "text": "127. Wskaż rezultat działania fragmentu kodu JavaScript",
    "image": "e14/127.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Usunięcie akapitu ze strony"
      },
      {
        "id": "B",
        "text": "Dodanie akapitu na koniec strony"
      },
      {
        "id": "C",
        "text": "Wyświetlenie okna dialogowego z napisem akapit"
      },
      {
        "id": "D",
        "text": "Dodanie akapitu na początku strony"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 128,
    "text": "128. Fizyczny model replikacji bazy danych przedstawiony na rysunku jest modelem",
    "image": "e14/128.jpg",
    "answers": [
      {
        "id": "A",
        "text": "rozproszonym"
      },
      {
        "id": "B",
        "text": "centralnego subskrybenta"
      },
      {
        "id": "C",
        "text": "równorzędnym"
      },
      {
        "id": "D",
        "text": "centralnego wydawcy"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 129,
    "text": "129. Za pomocą którego protokołu należy wysłać pliki na serwer WWW?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DHCP"
      },
      {
        "id": "B",
        "text": "FTP"
      },
      {
        "id": "C",
        "text": "POP3"
      },
      {
        "id": "D",
        "text": "DNS"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 130,
    "text": "130. Wynikiem działania zamieszczonej pętli zapisanej językiem PHP jest wypisanie kolejnych liczb",
    "image": "e14/130.jpg",
    "answers": [
      {
        "id": "A",
        "text": "od 10 do 1"
      },
      {
        "id": "B",
        "text": "od 1 do 10"
      },
      {
        "id": "C",
        "text": "od 10 do 2"
      },
      {
        "id": "D",
        "text": "od 2 do 10"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 131,
    "text": "131. Które z poleceń naprawi uszkodzoną tabelę w języku SQL?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "REGENERATE TABLE tbl_name"
      },
      {
        "id": "B",
        "text": "REPAIR TABLE tblname"
      },
      {
        "id": "C",
        "text": "OPTIMIZE TABLE tbl_name"
      },
      {
        "id": "D",
        "text": "ANALYZE TABLE tbl_name"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 132,
    "text": "132. Który z wymienionych formatów plików graficznych obsługuje przezroczystość?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "JPG"
      },
      {
        "id": "B",
        "text": "PNG"
      },
      {
        "id": "C",
        "text": "NEF"
      },
      {
        "id": "D",
        "text": "BMP"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 133,
    "text": "133. Który zapis stylu CSS ustawi tło bloku na kolor niebieski?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "div {shadow: blue;}"
      },
      {
        "id": "B",
        "text": "div {border-color: blue;}"
      },
      {
        "id": "C",
        "text": "div {color: blue;}"
      },
      {
        "id": "D",
        "text": "div {background-color: blue;}"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 134,
    "text": "134. Domyślna nazwa pliku konfiguracyjnego serwera Apache to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": ".configuration"
      },
      {
        "id": "B",
        "text": "configuration.php"
      },
      {
        "id": "C",
        "text": "htaccess.cnf"
      },
      {
        "id": "D",
        "text": ".htaccess"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 135,
    "text": "135. Organizacja zajmująca się ustalaniem standardu dla języka HTML nosi nazwę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "W3C"
      },
      {
        "id": "B",
        "text": "ISO"
      },
      {
        "id": "C",
        "text": "NASK"
      },
      {
        "id": "D",
        "text": "WYSIWYG"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 136,
    "text": "136. Który z wymienionych systemów nie jest systemem CMS?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Joomla"
      },
      {
        "id": "B",
        "text": "Adobe Flash"
      },
      {
        "id": "C",
        "text": "WordPress"
      },
      {
        "id": "D",
        "text": "Drupal"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 137,
    "text": "137. Która ze zdefiniowanych funkcji w języku PHP jako wynik zwraca połowę kwadratu wartości przekazanej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "function licz($a) { echo $a*$a/2; }"
      },
      {
        "id": "B",
        "text": "function licz($a) { return $a/2; }"
      },
      {
        "id": "C",
        "text": "function licz($a) { return $a*$a/2; }"
      },
      {
        "id": "D",
        "text": "function licz($a) { echo $a/2; }"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 138,
    "text": "138. W strukturalnych językach programowania w celu przechowania informacji o 50 uczniach (ich imionach, nazwiskach, średniej ocen) należy użyć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "tablicy 50 elementów o składowych strukturalnych"
      },
      {
        "id": "B",
        "text": "struktury 50 elementów o składowych typu tablicowego"
      },
      {
        "id": "C",
        "text": "tablicy 50 elementów o składowych łańcuchowych"
      },
      {
        "id": "D",
        "text": "klasy 50 elementów typu tablicowego"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 139,
    "text": "139. Aby zobaczyć wyniki działania skryptu napisanego w języku PHP, będącego elementem strony WWW, musi być on",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zinterpretowany po stronie serwera"
      },
      {
        "id": "B",
        "text": "skompilowany po stronie klienta"
      },
      {
        "id": "C",
        "text": "skompilowany po stronie serwera"
      },
      {
        "id": "D",
        "text": "zinterpretowany po stronie klienta"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 140,
    "text": "140. Projektowanie logicznego układu witryny polega na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "rozmieszczeniu elementów w konkretnych miejscach witryny"
      },
      {
        "id": "B",
        "text": "opracowaniu zestawu grafik dla witryny"
      },
      {
        "id": "C",
        "text": "zdefiniowaniu treści witryny"
      },
      {
        "id": "D",
        "text": "ustaleniu adresów URL dla podstron witryny"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 141,
    "text": "141. Prosta animacja może być zapisana w formacie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "PSD"
      },
      {
        "id": "B",
        "text": "BMP"
      },
      {
        "id": "C",
        "text": "GIF"
      },
      {
        "id": "D",
        "text": "TIFF"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 142,
    "text": "142. Która z instrukcji umożliwia wysłanie tekstu do przeglądarki?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "echo"
      },
      {
        "id": "B",
        "text": "exit"
      },
      {
        "id": "C",
        "text": "break"
      },
      {
        "id": "D",
        "text": "type"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 143,
    "text": "143. Aby stworzyć tabelę w bazie danych, należy zastosować polecenie SQL",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ADD TABLE"
      },
      {
        "id": "B",
        "text": "NEW TABLE"
      },
      {
        "id": "C",
        "text": "PLUS TABLE"
      },
      {
        "id": "D",
        "text": "CREATE TABLE"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 144,
    "text": "144. Zdarzenie JavaScript, będące reakcją na pojedynczo kliknięty dowolny element strony, nosi nazwę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "onClick"
      },
      {
        "id": "B",
        "text": "onDblClick"
      },
      {
        "id": "C",
        "text": "onLoad"
      },
      {
        "id": "D",
        "text": "onKeyDown"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 145,
    "text": "145. W skład typowego frameworka wchodzą",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zarządzanie komunikacją z bazą danych, mechanizm uruchamiania i przetwarzania akcji"
      },
      {
        "id": "B",
        "text": "domena i obsługa błędów"
      },
      {
        "id": "C",
        "text": "obsługa formularzy i wbudowany serwer"
      },
      {
        "id": "D",
        "text": "mechanizm uruchamiania i przetwarzania akcji, oraz certyfikat http"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 146,
    "text": "146. W celu stworzenia relacji wiele do wielu łączącej tabele A i B wystarczy, że",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "tabela A będzie zawierała te same pola co tabela B"
      },
      {
        "id": "B",
        "text": "wiele rekordów z tabeli A zduplikuje się w tabeli B"
      },
      {
        "id": "C",
        "text": "zdefiniuje się trzecią tabelę z kluczami obcymi do tabel A i B"
      },
      {
        "id": "D",
        "text": "tabelę A połączy się z tabelą B poprzez zdefiniowanie kluczy obcych"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 147,
    "text": "147. W celu zapewnienia spójności danych w bazie programu Microsoft Access należy skorzystać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "z więzów integralności"
      },
      {
        "id": "B",
        "text": "z kwerendy aktualizującej"
      },
      {
        "id": "C",
        "text": "z defragmentacji bazy"
      },
      {
        "id": "D",
        "text": "z archiwizacji bazy"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 148,
    "text": "148. W załączonym fragmencie kodu CSS kolor jest zapisany w postaci",
    "image": "e14/148.jpg",
    "answers": [
      {
        "id": "A",
        "text": "HSL"
      },
      {
        "id": "B",
        "text": "dziesiętnej"
      },
      {
        "id": "C",
        "text": "CMYK"
      },
      {
        "id": "D",
        "text": "szesnastkowej"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 149,
    "text": "149. W języku skryptowym JavaScript zmienne mogą być deklarowane",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "w momencie pierwszego użycia zmiennej"
      },
      {
        "id": "B",
        "text": "tylko na początku skryptu"
      },
      {
        "id": "C",
        "text": "tylko jeśli podamy typ zmiennej i jej nazwę"
      },
      {
        "id": "D",
        "text": "zawsze z poprzedzającym nazwę znakiem $"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 150,
    "text": "150. W językach programowania zmienna typu integer służy do przechowywania",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "znaku"
      },
      {
        "id": "B",
        "text": "liczby całkowitej"
      },
      {
        "id": "C",
        "text": "liczby rzeczywistej"
      },
      {
        "id": "D",
        "text": "wartości logicznej"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 151,
    "text": "151. Jeśli rozmiar pliku graficznego jest zbyt duży do publikacji w Internecie, należy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "dodać kanał alfa"
      },
      {
        "id": "B",
        "text": "zmniejszyć jego rozdzielczość"
      },
      {
        "id": "C",
        "text": "zwiększyć jego głębię kolorów"
      },
      {
        "id": "D",
        "text": "zapisać w formacie BMP"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 152,
    "text": "152. Które z poleceń umożliwia dodanie kolumny zadaniekompletne do tabeli zadania?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ALTER TABLE zadania ADD COLUMN zadaniekompletne int"
      },
      {
        "id": "B",
        "text": "ADD COLUMN zadaniekompletne WITH zadania"
      },
      {
        "id": "C",
        "text": "CREATEINDEX zadania ADD COLUMN zadaniekompletne int"
      },
      {
        "id": "D",
        "text": "INSERT INTO zadania VALUES zadaniakompletne"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 153,
    "text": "153. W bazie danych, w celu uporządkowania listy uczniów według roku urodzenia, należy użyć polecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT imie,nazwisko,klasa from uczniowie group by rok_urodzenia"
      },
      {
        "id": "B",
        "text": "SELECT imie,nazwisko,klasa from uczniowie order by rok_urodzenia"
      },
      {
        "id": "C",
        "text": "SELECT imie,nazwisko,klasa from uczniowie order by nazwisko"
      },
      {
        "id": "D",
        "text": "SELECT imie,nazwisko,klasa from uczniowie where rok_urodzenia = 1994"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 154,
    "text": "154. Wskaż dwa sposoby zabezpieczenia bazy danych Microsoft Access",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Ustalanie hasła do otwarcia bazy danych oraz zabezpieczeń na poziomie użytkownika"
      },
      {
        "id": "B",
        "text": "Zaszyfrowanie pliku bazy danych oraz SMSy z kodem autoryzującym"
      },
      {
        "id": "C",
        "text": "Funkcje anonimowe oraz ustalenie hasła otwarcia bazy danych"
      },
      {
        "id": "D",
        "text": "Ustalenie zabezpieczeń na poziomie użytkownika oraz sesji"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 155,
    "text": "155. W zamieszczonym przykładzie pseudoklasa hover sprawi, że styl pogrubiony będzie przypisany",
    "image": "e14/155.jpg",
    "answers": [
      {
        "id": "A",
        "text": "odnośnikowi, w momencie kiedy najechał na niego kursor myszy"
      },
      {
        "id": "B",
        "text": "wszystkim odnośnikom nieodwiedzonym"
      },
      {
        "id": "C",
        "text": "każdemu odnośnikowi niezależnie od aktualnego stanu"
      },
      {
        "id": "D",
        "text": "wszystkim odnośnikom odwiedzonym"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 156,
    "text": "156. Certyfikat SSL jest stosowany do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zapisania danych o sesjach tworzonych w witrynie"
      },
      {
        "id": "B",
        "text": "zidentyfikowania właściciela domeny"
      },
      {
        "id": "C",
        "text": "deszyfracji transmitowanych danych"
      },
      {
        "id": "D",
        "text": "blokowania szkodliwego oprogramowania w witrynie"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 157,
    "text": "157. W języku SQL przywilej SELECT polecenia GRANT pozwala użytkownikowi baz danych na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "odczyt danych z tabeli"
      },
      {
        "id": "B",
        "text": "tworzenie tabeli"
      },
      {
        "id": "C",
        "text": "usunięcie danych z tabeli"
      },
      {
        "id": "D",
        "text": "modyfikowanie danych w tabeli"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 158,
    "text": "158. W języku HTML atrybut alt znacznika img jest wykorzystywany w celu zdefiniowania",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ścieżki i nazwy pliku źródłowego grafiki"
      },
      {
        "id": "B",
        "text": "tekstu, który będzie wyświetlony, jeśli nie może być wyświetlona grafika"
      },
      {
        "id": "C",
        "text": "podpisu, który zostanie wyświetlony pod grafiką"
      },
      {
        "id": "D",
        "text": "atrybutów grafiki, takich jak rozmiar, obramowanie, wyrównanie"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 159,
    "text": "159. Warunek zapisany językiem PHP wypisze liczbę, gdy",
    "image": "e14/159.jpg",
    "answers": [
      {
        "id": "A",
        "text": "jest ona parzysta"
      },
      {
        "id": "B",
        "text": "jest ona liczbą pierwszą"
      },
      {
        "id": "C",
        "text": "wynik dzielenia liczby przez 2 jest równy 0"
      },
      {
        "id": "D",
        "text": "jest ona dodatnia"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 160,
    "text": "160. Analizując przedstawiony kod zapisany w języku HTML, można stwierdzić, że w przeglądarce",
    "image": "e14/160.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zostanie ustawiony dolny margines dla bloku B"
      },
      {
        "id": "B",
        "text": "blok B będzie oddalony od bloku A o 20 px"
      },
      {
        "id": "C",
        "text": "blok A będzie przesunięty w lewo o 20 px"
      },
      {
        "id": "D",
        "text": "bloki A i B będą nachodzić na siebie."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 161,
    "text": "161. Baza danych zawiera tabelę o nazwie pracownicy o polach: nazwisko, imie, pensja, wiek. Jak wygląda składnia polecenia wyznaczającego średnią pensję pracowników?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "select AVG (nazwisko) into pensja"
      },
      {
        "id": "B",
        "text": "select VAR (pracownicy) into pensja"
      },
      {
        "id": "C",
        "text": "select AVG (pensja) from pracownicy"
      },
      {
        "id": "D",
        "text": "select VAR (pensja) from nazwisko"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 162,
    "text": "162. Do reprezentacji liczb zmiennoprzecinkowych w języku C stosowany jest typ",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "int"
      },
      {
        "id": "B",
        "text": "bool"
      },
      {
        "id": "C",
        "text": "char"
      },
      {
        "id": "D",
        "text": "double"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 163,
    "text": "163. Polecenie SQL o treści: UPDATE artykuly SET cena = cena * 0.7 WHERE kod = 2; oznacza",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "w tabeli artykuly obniża wartość każdego pola cena o 30% dla wszystkich artykułów"
      },
      {
        "id": "B",
        "text": "w tabeli artykuly obniża wartość każdego pola cena dla którego pole kod jest równe 2"
      },
      {
        "id": "C",
        "text": "wprowadzenie w tabeli artykuly nowych pól cena i kod"
      },
      {
        "id": "D",
        "text": "wprowadzenie w tabeli artykuly pola o nazwie cena ze znacznikiem kod"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 164,
    "text": "164. Do edycji grafiki wektorowej stosuje się program",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Paint"
      },
      {
        "id": "B",
        "text": "Audacity"
      },
      {
        "id": "C",
        "text": "Wordpad"
      },
      {
        "id": "D",
        "text": "Corel Draw"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 165,
    "text": "165. W programowaniu obiektowym mechanizm współdzielenia pól i metod klasy w taki sposób, że klasa pochodna zawiera metody zdefiniowane w klasie bazowej nazywa się",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "hermetyzacją"
      },
      {
        "id": "B",
        "text": "wirtualizacją"
      },
      {
        "id": "C",
        "text": "polimorfizmem"
      },
      {
        "id": "D",
        "text": "dziedziczeniem"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 166,
    "text": "166. Który z wymienionych znaczników języka HTML nie jest stosowany w celu formatowania tekstu?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<em>"
      },
      {
        "id": "B",
        "text": "<sub>"
      },
      {
        "id": "C",
        "text": "<div>"
      },
      {
        "id": "D",
        "text": "<strong>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 167,
    "text": "167. Aby zdefiniować w języku HTML listę nienumerowaną, należy użyć znacznika",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<dd>"
      },
      {
        "id": "B",
        "text": "<dt>"
      },
      {
        "id": "C",
        "text": "<ol>"
      },
      {
        "id": "D",
        "text": "<ul>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 168,
    "text": "168. W języku CSS właściwość font-size przyjmuje, według słów kluczowych, wartości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "tylko big i small"
      },
      {
        "id": "B",
        "text": "wyłączenie small, medium, large"
      },
      {
        "id": "C",
        "text": "jedynie small, smaller,large, larger"
      },
      {
        "id": "D",
        "text": "ze zbioru xx-small, x-small, medium, large, x-large, xx-large"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 169,
    "text": "169. W języku CSS, w celu zdefiniowania wewnętrznego górnego marginesu, czyli odstepu między elementem a otaczającym go obramowaniem, należy użyć polecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "padding-top"
      },
      {
        "id": "B",
        "text": "outline-top"
      },
      {
        "id": "C",
        "text": "border-top"
      },
      {
        "id": "D",
        "text": "local-top"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 170,
    "text": "170. Funkcja edytor WYSIWYG Adobe Dreamweaver służy do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wyświetlania interaktywnego drzewa struktury HTML dla zawartości statycznej i dynamicznej"
      },
      {
        "id": "B",
        "text": "definiowania kaskadowych arkuszy stylów dołączonych do witryny"
      },
      {
        "id": "C",
        "text": "formatowanie tekstu przy pomocy dostępnych znaczników"
      },
      {
        "id": "D",
        "text": "tworzenia szablonu strony internetowej"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 171,
    "text": "171. Aby witryna internetowa prawidłowo skalowała się w urządzeniach mobilnych, należy wielkość czcionki zdefiniować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "w pikselach"
      },
      {
        "id": "B",
        "text": "w procentach"
      },
      {
        "id": "C",
        "text": "w milimetrach"
      },
      {
        "id": "D",
        "text": "tylko znacznikami big i small"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 172,
    "text": "172. Znacznik meta języka HTML należy umieścić",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "pomiędzy znacznikami body"
      },
      {
        "id": "B",
        "text": "w części nagłówkowej witryny internetowej"
      },
      {
        "id": "C",
        "text": "pomiędzy znacznikami paragrafu"
      },
      {
        "id": "D",
        "text": "w stopce witryny internetowej"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 173,
    "text": "173. Prawidłowy, zgodny ze standardem języka XHTML, zapis samozamykającego się znacznika odpowiadającego za łamanie linii ma postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "</ br>"
      },
      {
        "id": "B",
        "text": "<br />"
      },
      {
        "id": "C",
        "text": "</br/>"
      },
      {
        "id": "D",
        "text": "<br> </br>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 174,
    "text": "174. Najprostszą i najmniej pracochłonną metodą przetestowania działania witryny internetowej w wielu przeglądarkach i ich różnych wersjach jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "skorzystanie z walidatora języka HTML"
      },
      {
        "id": "B",
        "text": "skorzystanie z emulatora przeglądarek internetowych np. Browser Sandbox"
      },
      {
        "id": "C",
        "text": "zainstalowanie na kilku komputerach różnych przeglądarek i testowanie witryny"
      },
      {
        "id": "D",
        "text": "testowanie witryny w programie Internet Explorer, zakładając kompatybilność innych przeglądarek"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 175,
    "text": "175. Aby przenieść witrynę na serwer, można skorzystać z oprogramowania",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Bugzilla"
      },
      {
        "id": "B",
        "text": "Go!Zilla"
      },
      {
        "id": "C",
        "text": "FileZilla"
      },
      {
        "id": "D",
        "text": "CloneZilla"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 176,
    "text": "176. Kolor zapisany kodem RGB, o wartości rgb(255, 128, 16) w kodzie szesnastkowym będzie miał wartość:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#008010"
      },
      {
        "id": "B",
        "text": "#ff0f10"
      },
      {
        "id": "C",
        "text": "#ff8010"
      },
      {
        "id": "D",
        "text": "#ff8011"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 177,
    "text": "177. Plik graficzny należy zapisać w formacie GIF, jeżeli",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "jest to grafika wektorowa"
      },
      {
        "id": "B",
        "text": "jest to obraz stereoskopowy"
      },
      {
        "id": "C",
        "text": "jest potrzeba zapisu obrazu bez kompresji"
      },
      {
        "id": "D",
        "text": "jest potrzeba zapisu obrazu lub animacji"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 178,
    "text": "178. Aby dopasować dźwięk do danego poziomu głośności, należy użyć efektu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wyciszenia"
      },
      {
        "id": "B",
        "text": "normalizacji"
      },
      {
        "id": "C",
        "text": "podbicia basów"
      },
      {
        "id": "D",
        "text": "usuwania szumów"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 179,
    "text": "179. Instrukcja DROP języka SQL ma za zadanie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "usunąć istniejący obiekt"
      },
      {
        "id": "B",
        "text": "zmienić parametry obiektu"
      },
      {
        "id": "C",
        "text": "zaktualizować dane obiektu"
      },
      {
        "id": "D",
        "text": "dodać nowy obiekt"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 180,
    "text": "180. Baza danych zawiera tabelę uczniowie z polami: imie, nazwisko, klasa. Aby odnaleźć imiona i nazwiska tych uczniów, których nazwiska rozpoczynają się literą M, należy zastosować polecenie SQL",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwisko, imie FROM uczniowie WHERE nazwisko IN \"M%\";"
      },
      {
        "id": "B",
        "text": "SELECT nazwisko, imie FROM uczniowie WHERE nazwisko LIKE \"M%\";"
      },
      {
        "id": "C",
        "text": "SELECT nazwisko, imie FROM uczniowie ORDER BY nazwisko = \"M%\";"
      },
      {
        "id": "D",
        "text": "SELECT nazwisko, imie FROM uczniowie ORDER BY nazwisko IN \"M%\";"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 181,
    "text": "181. Baza danych zawiera tabele z polami: . Aby wyświetlić wszystkie nazwy artykułów wyłącznie typu pralka, dla których cena jest z przedziału 1000 PLN i 1500 PLN, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" AND cena FROM 1000 TO 1500;"
      },
      {
        "id": "B",
        "text": "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" OR cena BETWEEN 1000 OR 1500;"
      },
      {
        "id": "C",
        "text": "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" OR cena BETWEEN 1000 AND 1500;"
      },
      {
        "id": "D",
        "text": "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" AND cena BETWEEN 1000 AND 1500;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 182,
    "text": "182. Wartość pola tabeli pełniącego rolę klucza podstawowego",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "musi być unikalna"
      },
      {
        "id": "B",
        "text": "jest zawsze typu numerycznego"
      },
      {
        "id": "C",
        "text": "służy do szyfrowania zawartości tabeli"
      },
      {
        "id": "D",
        "text": "może przyjmować wartość pustą (NULL)"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 183,
    "text": "183. Aby utworzyć relację jeden do wielu, w tabeli po stronie , należy zdefiniować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "klucz obcy wskazujący na klucz obcy tabeli po stronie"
      },
      {
        "id": "B",
        "text": "klucz sztuczny odnoszący się do kluczy podstawowych obu tabel"
      },
      {
        "id": "C",
        "text": "klucz obcy wskazujący na klucz podstawowy tabeli po stronie"
      },
      {
        "id": "D",
        "text": "klucz podstawowy wskazujący na klucz podstawowy tabeli po stronie"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 184,
    "text": "184. Narzędziem służącym do grupowania i prezentowania informacji z wielu rekordów w celu ich drukowania lub rozpowszechniania jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "raport"
      },
      {
        "id": "B",
        "text": "kwerenda"
      },
      {
        "id": "C",
        "text": "formularz"
      },
      {
        "id": "D",
        "text": "makropolecenie"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 185,
    "text": "185. Aby uprościć wprowadzenie i edytowanie danych w tabeli, należy zdefiniować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "kwerendę SELECT"
      },
      {
        "id": "B",
        "text": "formularz"
      },
      {
        "id": "C",
        "text": "raport"
      },
      {
        "id": "D",
        "text": "filtr"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 186,
    "text": "186. Baza danych 6-letniej szkoły podstawowej zawiera tabelę z polami: . Wszyscy uczniowie klas 1-5 zdali do następnej klasy. Aby zwiększyć wartość w polu klasa o 1 należy użyć polecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT szkola FROM klasa=klasa+1 WHERE klasa >=1 AND klasa <=5;"
      },
      {
        "id": "B",
        "text": "SELECT nazwisko, imie FROM klasa=klasa+1 WHERE klasa>1 OR klasa <5;"
      },
      {
        "id": "C",
        "text": "UPDATE szkola SET klasa=klasa+1 WHERE klasa>=1 AND klasa <=5;"
      },
      {
        "id": "D",
        "text": "UPDATE nazwisko, imie SET klasa=klasa+1 WHERE klasa>1 OR klasa<5;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 187,
    "text": "187. Uprawnienia obiektowe, nadawane użytkownikom serwera bazy danych, mogą pozwalać lub zabraniać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "dziedziczyć uprawnienia"
      },
      {
        "id": "B",
        "text": "modyfikować role i konta użytkowników"
      },
      {
        "id": "C",
        "text": "wykonywać instrukcje, takie jak tworzenie kopii zapasowej"
      },
      {
        "id": "D",
        "text": "wykonywać operacje na bazie, takie jak wstawanie lub modyfikowanie danych"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 188,
    "text": "188. Przed wykonaniem kopii bezpieczeństwa bazy danych, tak aby kopia ta była poprawna i możliwa do późniejszego odtworzenia, należy sprawdzić",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "możliwość udostępnienia bazy danych"
      },
      {
        "id": "B",
        "text": "prawa dostępu do serwera bazy danych"
      },
      {
        "id": "C",
        "text": "poprawność składni zapytań"
      },
      {
        "id": "D",
        "text": "spójność bazy danych"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 189,
    "text": "189. W MS SQL Server polecenie RESTORE DATABASE służy do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "odtworzenia bazy danych z kopii bezpieczeństwa"
      },
      {
        "id": "B",
        "text": "odświeżenia bazy danych z kontrolą więzów integralności"
      },
      {
        "id": "C",
        "text": "przebudowania bazy danych w oparciu o buforowane dane"
      },
      {
        "id": "D",
        "text": "usunięcia bazy danych z serwera centralnego subskrybenta"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 190,
    "text": "190. W języku PHP zmienna typu float przyjmuje wartości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "logiczne"
      },
      {
        "id": "B",
        "text": "nieliczbowe"
      },
      {
        "id": "C",
        "text": "tylko całkowite"
      },
      {
        "id": "D",
        "text": "zmiennoprzecinkowe"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 191,
    "text": "191. Dany jest fragment kodu PHP z zdeklarowaną zmienną typu tablicowego. W wyniku wykonania kodu zostanie wpisane imię",
    "image": "e14/191.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Anna"
      },
      {
        "id": "B",
        "text": "Tomasz"
      },
      {
        "id": "C",
        "text": "Krzysztof"
      },
      {
        "id": "D",
        "text": "Aleksandra"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 192,
    "text": "192. Przedstawiony kod języka PHP",
    "image": "e14/192.jpg",
    "answers": [
      {
        "id": "A",
        "text": "jest błędny, nieznany operator =>"
      },
      {
        "id": "B",
        "text": "definiuje tablicę z trzema wartościami"
      },
      {
        "id": "C",
        "text": "definiuje tablicę z sześcioma wartościami"
      },
      {
        "id": "D",
        "text": "jest błędny, indeksami tablicy mogą być tylko liczby całkowite"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 193,
    "text": "193. W języku JavaScript poprawnie nazwana zmienna to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#imie"
      },
      {
        "id": "B",
        "text": "imie2"
      },
      {
        "id": "C",
        "text": "imię2"
      },
      {
        "id": "D",
        "text": "imię%"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 194,
    "text": "194. Zakładając, że zmienne: a, b, c przechowują wartości numeryczne, wynikiem działania warunku będzie wypisanie liczby",
    "image": "e14/194.jpg",
    "answers": [
      {
        "id": "A",
        "text": "najmniejszej"
      },
      {
        "id": "B",
        "text": "największej"
      },
      {
        "id": "C",
        "text": "nieparzystej"
      },
      {
        "id": "D",
        "text": "parzystej"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 195,
    "text": "195. Fragment kodu języku PHP ma następującą postać. Wynikiem działania pętli będzie wypisanie liczb:",
    "image": "e14/195.jpg",
    "answers": [
      {
        "id": "A",
        "text": "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20"
      },
      {
        "id": "B",
        "text": "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19"
      },
      {
        "id": "C",
        "text": "0,4,8,12,16,20"
      },
      {
        "id": "D",
        "text": "0,4,8,12,16"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 196,
    "text": "196. Zadaniem funkcji zapisanej w języku PHP jest",
    "image": "e14/196.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Wypisanie liczby parzystej"
      },
      {
        "id": "B",
        "text": "Wypisanie liczby nieparzystej"
      },
      {
        "id": "C",
        "text": "Zwrócenie wartości 1, gdy liczba jest parzysta"
      },
      {
        "id": "D",
        "text": "Zwrócenie wartości 0, gdy liczba jest parzysta"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 197,
    "text": "197. Wykonanie kodu JavaScript w przeglądarce wymaga",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "debugowania"
      },
      {
        "id": "B",
        "text": "kompilowania"
      },
      {
        "id": "C",
        "text": "interpretowania"
      },
      {
        "id": "D",
        "text": "zamiany na kod maszynowy"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 198,
    "text": "198. Kod strony WWW napisanej w języku PHP",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "jest wykonywany po stronie klienta"
      },
      {
        "id": "B",
        "text": "jest wykonywany po stronie serwera"
      },
      {
        "id": "C",
        "text": "może być uruchomiony bez obsługi serwera WWW"
      },
      {
        "id": "D",
        "text": "jest przetwarzany na tych samych zasadach co JavaScript"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 199,
    "text": "199. Zakładając, że zmienna tablicowa $tab jest wypełniona liczbami naturalnymi, wynikiem programu będzie wypisanie",
    "image": "e14/199.jpg",
    "answers": [
      {
        "id": "A",
        "text": "największego elementu tablicy"
      },
      {
        "id": "B",
        "text": "najmniejszego elementu tablicy"
      },
      {
        "id": "C",
        "text": "elementu tablicy, który jest równy wartości $tab[0]"
      },
      {
        "id": "D",
        "text": "tych elementów, które są większe od zmiennej $liczba"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 200,
    "text": "200. Fragment kodu w języku JavaScript realizujący dodawanie dwóch liczb ma następującą postać. Aby dodawanie wykonane było po kliknięciu przycisku o nazwie , należy w wykropkowane miejsce wstawić",
    "image": "e14/200.jpg",
    "answers": [
      {
        "id": "A",
        "text": "<button onselect=\"return dodaj()\">dodaj</button>"
      },
      {
        "id": "B",
        "text": "<button onselect=\"return dodaj()\">oblicz</button>"
      },
      {
        "id": "C",
        "text": "<button onclick=\"return oblicz()\">dodaj</button>"
      },
      {
        "id": "D",
        "text": "<button onclick=\"return dodaj()\">dodaj</button>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 201,
    "text": "201. Komentarz w języku JavaScript rozpoczyna się od znaku lub znaków",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<!--"
      },
      {
        "id": "B",
        "text": "<?"
      },
      {
        "id": "C",
        "text": "//"
      },
      {
        "id": "D",
        "text": "#"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 202,
    "text": "202. Polecenie pg_connect języka PHP służy do połączenia z bazą",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "mySQL"
      },
      {
        "id": "B",
        "text": "MS SQL"
      },
      {
        "id": "C",
        "text": "PostgreSQL"
      },
      {
        "id": "D",
        "text": "MS ACCESS"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 203,
    "text": "203. Aby zamieścić aplikację PHP w internecie, należy jej pliki źródłowe skopiować na serwer za pomocą protokołu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "FTP"
      },
      {
        "id": "B",
        "text": "HTTP"
      },
      {
        "id": "C",
        "text": "SMTP"
      },
      {
        "id": "D",
        "text": "NNTP"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 204,
    "text": "204. Personalizowanie wyglądu strony dla danego użytkownika i jego identyfikacja w serwisie są możliwe dzięki mechanizmowi",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "obiektów DOM"
      },
      {
        "id": "B",
        "text": "łączenia z bazą"
      },
      {
        "id": "C",
        "text": "formularzy"
      },
      {
        "id": "D",
        "text": "cookie"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 205,
    "text": "205. Automatyczna weryfikacja właściciela strony udostępnianej przez protokół HTTPS jest możliwa dzięki",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "danym kontaktowym na stronie"
      },
      {
        "id": "B",
        "text": "kluczom prywatnym"
      },
      {
        "id": "C",
        "text": "certyfikatowi SSL"
      },
      {
        "id": "D",
        "text": "danym whois"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 206,
    "text": "206. Do grupowania obszarów na poziomie bloków, które będą formatowane za pośrednictwem znaczników, należy użyć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<p>"
      },
      {
        "id": "B",
        "text": "<div>"
      },
      {
        "id": "C",
        "text": "<span>"
      },
      {
        "id": "D",
        "text": "<param>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 207,
    "text": "207. Znacznik <i> języka HTML służy do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "umieszczenia obrazka"
      },
      {
        "id": "B",
        "text": "zdefiniowania formularza"
      },
      {
        "id": "C",
        "text": "zmiany kroju pisma na pochylony"
      },
      {
        "id": "D",
        "text": "zdefiniowania nagłówka w tekście"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 208,
    "text": "208. Poniżej przedstawiono fragment kodu języka HTML. Jest on definicją listy:",
    "image": "e14/208.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 209,
    "text": "209. Kod języka CSS można umieścić wewnątrz kodu HTML, posługując się znacznikiem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<head>"
      },
      {
        "id": "B",
        "text": "<style>"
      },
      {
        "id": "C",
        "text": "<meta>"
      },
      {
        "id": "D",
        "text": "<body>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 210,
    "text": "210. Chcąc zdefiniować formatowanie tabeli w języku CSS w taki sposób, aby wiersz, który jest aktualnie wskazywany kursorem myszy, został wyróżniony np. innym kolorem, należy zastosować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "pseudoklasę :visited"
      },
      {
        "id": "B",
        "text": "pseudoklasę :hover"
      },
      {
        "id": "C",
        "text": "pseudoelement :first-line"
      },
      {
        "id": "D",
        "text": "nowy selektor klasy dla wiersza tabeli"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 211,
    "text": "211. Aby uzyskać efekt rozstrzelenia liter w selektorze CSS, należy użyć właściwości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "letter-transform"
      },
      {
        "id": "B",
        "text": "text-decoration"
      },
      {
        "id": "C",
        "text": "letter-spacing"
      },
      {
        "id": "D",
        "text": "text-space"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 212,
    "text": "212. Blok deklaracji postaci background-attachment: scroll powoduje, że",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "grafika tła będzie powtarzana (kafelki)"
      },
      {
        "id": "B",
        "text": "tło strony będzie przewijane razem z tekstem"
      },
      {
        "id": "C",
        "text": "tło strony będzie stałe, a tekst będzie się przewijał"
      },
      {
        "id": "D",
        "text": "grafika tła będzie wyświetlona w prawym górnym rogu strony"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 213,
    "text": "213. Ikona, która wyświetlona jest przed adresem, w polu adresowym przeglądarki internetowej lub przy tytule otwartej karty przeglądarki nosi nazwę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "iConji"
      },
      {
        "id": "B",
        "text": "favicon"
      },
      {
        "id": "C",
        "text": "webicon"
      },
      {
        "id": "D",
        "text": "emoticon"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 214,
    "text": "214. Aby poprawnie zdefiniować hierarchiczną strukturę tekstu witryny internetowej, należy zastosować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "znacznik <div>"
      },
      {
        "id": "B",
        "text": "znaczniki <frame> i <table>"
      },
      {
        "id": "C",
        "text": "znacznik <p> z formatowaniem"
      },
      {
        "id": "D",
        "text": "znaczniki <h1>, <h2> oraz <p>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 215,
    "text": "215. Która z reguł walidacji strony internetowej jest błędna?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Jeżeli w instrukcji używa się kilku atrybutów, ich kolejność powinna być zgodna z alfabetem, np. <img alt=\"....\" src=\"....\" />"
      },
      {
        "id": "B",
        "text": "Wyłączanie znaczników musi następować w odwrotnej kolejności, niż były one włączane, np. <p>....<big>...</big></p>"
      },
      {
        "id": "C",
        "text": "Znaczniki, oprócz samozamykających się, działają do momentu ich wyłączenia znakiem \"/\", np. <p>...</p>"
      },
      {
        "id": "D",
        "text": "W znacznikach nie są rozróżniane wielkie i małe litery, np. <p> i <P> to ten sam znacznik"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 216,
    "text": "216. Oznaczenie barwy w postaci #ff00e0 jest równoważne zapisowi",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "rgb(f,0,e0)"
      },
      {
        "id": "B",
        "text": "rgb(ff,0,e0)"
      },
      {
        "id": "C",
        "text": "rgb(255,0,128)"
      },
      {
        "id": "D",
        "text": "rgb(255,0,224)"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 217,
    "text": "217. Formatem zapisu rastrowych plików graficznych z kompresją bezstratną jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "JNG"
      },
      {
        "id": "B",
        "text": "PNG"
      },
      {
        "id": "C",
        "text": "CDR"
      },
      {
        "id": "D",
        "text": "SVG"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 218,
    "text": "218. Podczas obróbki grafiki rastrowej w programie z obsługą kanałów dodanie kanału alfa oznacza",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "dodanie warstwy z przezroczystością"
      },
      {
        "id": "B",
        "text": "określenie poprawnego balansu bieli"
      },
      {
        "id": "C",
        "text": "zwiększenie głębi ostrości obrazu"
      },
      {
        "id": "D",
        "text": "wyostrzenie krawędzi obrazu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 219,
    "text": "219. Aby pozbyć się nienaturalnego odwzorowania ukośnych krawędzi linii w grafice rastrowej, czyli tak zwanego schodkowania, należy zastosować filtr",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "szumu"
      },
      {
        "id": "B",
        "text": "gradientu"
      },
      {
        "id": "C",
        "text": "pikselizacji"
      },
      {
        "id": "D",
        "text": "antyaliasingu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 220,
    "text": "220. Formatem bezstratnej kompresji dźwięku jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "MP3"
      },
      {
        "id": "B",
        "text": "AAC"
      },
      {
        "id": "C",
        "text": "WWA"
      },
      {
        "id": "D",
        "text": "FLAC"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 221,
    "text": "221. W języku SQL polecenie INSERT INTO",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "dodaje tabelę"
      },
      {
        "id": "B",
        "text": "dodaje pola do tabeli"
      },
      {
        "id": "C",
        "text": "wprowadza dane do tabeli"
      },
      {
        "id": "D",
        "text": "aktualizuje rekordy określoną wartością"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 222,
    "text": "222. W języku SQL klauzula DISTINCT instrukcji SELECT sprawi, że zwrócone dane",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zostaną posortowane"
      },
      {
        "id": "B",
        "text": "nie będą zawierały powtórzeń"
      },
      {
        "id": "C",
        "text": "będą spełniały określony warunek"
      },
      {
        "id": "D",
        "text": "będą pogrupowane według określonego pola"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 223,
    "text": "223. Zdefiniowano bazę danych z tabelą sklepy o polach: nazwa, ulica, miasto, branza. Aby wyszukać wszystkie nazwy sklepów spożywczych zlokalizowanych wyłącznie we Wrocławiu, należy posłużyć się kwerendą:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT sklepy FROM nazwa WHERE branza=\"spożywczy\" BETWEEN miasto=\"Wrocław\";"
      },
      {
        "id": "B",
        "text": "SELECT sklepy FROM branza=\"spożywczy\" WHERE miasto=\"Wrocław\";"
      },
      {
        "id": "C",
        "text": "SELECT nazwa FROM sklepy WHERE branza=\"spozywczy\" OR miasto=\"Wrocław\";"
      },
      {
        "id": "D",
        "text": "SELECT nazwa FROM sklepy WHERE branza=\"spozywczy\" AND miasto=\"Wrocław\";"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 224,
    "text": "224. Zdefiniowano bazę danych z tabelą podzespoły o polach: model, producent, typ, cena. Aby wyświetlić wszystkie modele pamięci RAM firmy Kingston w kolejności od najtańszej do najdroższej, należy posłużyć się kwerendą:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT model FROM podzespoly WHERE typ=\"RAM\" AND producent=\"Kingston\" ORDER BY cena ASC;"
      },
      {
        "id": "B",
        "text": "SELECT model FROM podzespoly WHERE typ=\"RAM\" AND producent=\"Kingston\" ORDER BY cena DESC;"
      },
      {
        "id": "C",
        "text": "SELECT model FROM podzespoly WHERE typ=\"RAM\" OR producent=\"Kingston\" ORDER BY cena DESC;"
      },
      {
        "id": "D",
        "text": "SELECT model FROM producent WHERE typ=\"RAM\" OR producent=\"Kingston\" ORDER BY podzespoly ASC;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 225,
    "text": "225. W celu przyspieszenia operacji na bazie danych należy do pól często wyszukiwanych lub sortowanych",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "utworzyć indeks"
      },
      {
        "id": "B",
        "text": "dodać klucz obcy"
      },
      {
        "id": "C",
        "text": "dodać więzy integralności"
      },
      {
        "id": "D",
        "text": "stworzyć osobną tabelę przechowującą tylko te pola"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 226,
    "text": "226. Jednoznacznym identyfikatorem rekordu w bazie danych jest pole",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "klucza podstawowego"
      },
      {
        "id": "B",
        "text": "klucza obcego"
      },
      {
        "id": "C",
        "text": "numeryczne"
      },
      {
        "id": "D",
        "text": "relacji"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 227,
    "text": "227. Zdefiniowano bazę danych z tabelą mieszkancy o polach: nazwisko, imie, miasto. Następnie stworzono następujące zapytanie do bazy: SELECT nazwisko, imie FROM mieszkancy WHERE miasto=\"Poznań\" UNION ALL SELECT nazwisko, imie FROM mieszkancy WHERE miasto=\"Kraków\"; Wskaż zapytanie, które zwróci identyczne dane:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwisko, imie FROM mieszkancy AS \"Poznań\" OR \"Kraków\";"
      },
      {
        "id": "B",
        "text": "SELECT nazwisko, imie FROM mieszkancy WHERE miasto HAVING \"Poznań\" OR \"Kraków\";"
      },
      {
        "id": "C",
        "text": "SELECT nazwisko, imie FROM mieszkancy WHERE miasto=\"Poznań\" OR miasto=\"Kraków\";"
      },
      {
        "id": "D",
        "text": "SELECT nazwisko, imie FROM mieszkancy WHERE miasto BETWEEN \"Poznań\" OR \"Kraków\";"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 228,
    "text": "228. W bazie danych sklepu istnieje tabela artykuly zawierająca pole o nazwie nowy. Aby to pole wypełnić wartościami TRUE dla każdego rekordu, należy zastosować kwerendę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UPDATE artykuly SET nowy=TRUE;"
      },
      {
        "id": "B",
        "text": "INSERT INTO artykuly VALUE nowy=TRUE;"
      },
      {
        "id": "C",
        "text": "UPDATE nowy FROM artykuly VALUE TRUE;"
      },
      {
        "id": "D",
        "text": "INSERT INTO nowy FROM artykuly SET TRUE;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 229,
    "text": "229. W MS SQL Server predefiniowana rola o nazwie dbcreator pozwala użytkownikowi na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zarządzanie plikami na dysku"
      },
      {
        "id": "B",
        "text": "zarządzanie bezpieczeństwem systemu"
      },
      {
        "id": "C",
        "text": "tworzenie, modyfikowanie, usuwanie i odzyskiwanie bazy danych"
      },
      {
        "id": "D",
        "text": "wykonywanie każdej operacji na serwerze i posiadanie prawa własności każdej bazy"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 230,
    "text": "230. Aby odebrać prawa dostępu do serwera MySQL, należy posłużyć się instrukcją",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "USAGE"
      },
      {
        "id": "B",
        "text": "GRANT"
      },
      {
        "id": "C",
        "text": "DELETE"
      },
      {
        "id": "D",
        "text": "REVOKE"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 231,
    "text": "231. Za pomocą polecenia BACKUP LOG w MS SQL Server można",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wykonać pełną kopię bezpieczeństwa"
      },
      {
        "id": "B",
        "text": "zalogować sie do kopii bezpieczeństwa"
      },
      {
        "id": "C",
        "text": "wykonać kopię bezpieczeństwa dziennika transakcyjnego"
      },
      {
        "id": "D",
        "text": "przeczytać komunikaty wygenerowane podczas tworzenia kopii"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 232,
    "text": "232. Polecenie DBCC CHECKDB(\"sklepAGD\", Repair_fast) w MS SQL Server",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "sprawdzi spójność określonej tabeli"
      },
      {
        "id": "B",
        "text": "sprawdzi spójność bazy danych i naprawi uszkodzone indeksy"
      },
      {
        "id": "C",
        "text": "sprawdzi spójność bazy danych i wykona kopię bezpieczeństwa"
      },
      {
        "id": "D",
        "text": "sprawdzi spójność określonej tabeli i naprawi uszkodzone rekordy"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 233,
    "text": "233. Aby naprawić bazę danych w MySQL, należy użyć polecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "FIX"
      },
      {
        "id": "B",
        "text": "REPAIR"
      },
      {
        "id": "C",
        "text": "UPDATE"
      },
      {
        "id": "D",
        "text": "CHANGE"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 234,
    "text": "234. Aby zdefiniować łamanie linii tekstu, np. w zmiennej napisowej, należy posłużyć się znakiem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "slash"
      },
      {
        "id": "B",
        "text": "b"
      },
      {
        "id": "C",
        "text": "n"
      },
      {
        "id": "D",
        "text": "t"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 235,
    "text": "235. Dana jest tablica n-elementowa o nazwie t[n]. Zadaniem algorytmu zapisanego w postaci listy kroków jest wypisania sumy",
    "image": "e14/235.jpg",
    "answers": [
      {
        "id": "A",
        "text": "n-elementów tablicy"
      },
      {
        "id": "B",
        "text": "co drugiego elementu tablicy"
      },
      {
        "id": "C",
        "text": "sumy wszystkich elementów tablicy"
      },
      {
        "id": "D",
        "text": "sumy tych elementów tablicy, których wartości są nieparzyste"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 236,
    "text": "236. Interpreter PHP wygeneruje błąd i nie wykona kodu, jeżeli programista:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "będzie pisał kod bez wcięć"
      },
      {
        "id": "B",
        "text": "nie postawi średnika po wyrażeniu w instrukcji if, jeśli po nim nastąpiła sekcja else"
      },
      {
        "id": "C",
        "text": "będzie deklarował zmienne wewnątrz warunku"
      },
      {
        "id": "D",
        "text": "pobierze wartość z formularza, w którym pole input nie było wypełnione"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 237,
    "text": "237. Dana jest tablica o nazwie tab wypełniona liczbami całkowitymi różnymi od zera. Przedstawiony kod zapisany w języku PHP ma za zadanie:",
    "image": "e14/237.jpg",
    "answers": [
      {
        "id": "A",
        "text": "obliczyć iloczyn wszystkich liczb w tablicy"
      },
      {
        "id": "B",
        "text": "obliczyć wartość bezwzględną elementów tablicy"
      },
      {
        "id": "C",
        "text": "zamienić wszystkie elementy tablicy na liczby z przeciwnym znakiem"
      },
      {
        "id": "D",
        "text": "zamienić elementy tablicy na wartości przechowywane w zmiennej liczba"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 238,
    "text": "238. Warunek zapisany w JavaScript jest prawdziwy, gdy zmienna x przechowuje",
    "image": "e14/238.jpg",
    "answers": [
      {
        "id": "A",
        "text": "pusty napis"
      },
      {
        "id": "B",
        "text": "wartość nie liczbową"
      },
      {
        "id": "C",
        "text": "dowolną całkowitą wartość liczbową"
      },
      {
        "id": "D",
        "text": "dowolną dodatnią wartość liczbową"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 239,
    "text": "239. Przedstawiona funkcja zapisana kodem JavaScript ma za zadanie:",
    "image": "e14/239.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zwrócić wynik potęgowania a^n"
      },
      {
        "id": "B",
        "text": "wpisać kolejne liczby od a do n"
      },
      {
        "id": "C",
        "text": "wpisać wyniki mnożenia a przez n"
      },
      {
        "id": "D",
        "text": "zwrócić iloczyn kolejnych liczb od 1 do a"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 240,
    "text": "240. Program debugger służy do:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "interpretacji kodu w wirtualnej maszynie Java"
      },
      {
        "id": "B",
        "text": "analizy wykonywanego programu w celu lokalizacji błędów"
      },
      {
        "id": "C",
        "text": "analizy kodu źródłowego w celu odnalezienia błędów składniowych"
      },
      {
        "id": "D",
        "text": "tłumaczenia kodu zapisanego językiem wyższego poziomu na język maszynowy"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 241,
    "text": "241. Funkcja phpinfo() pozwala na:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "debugowanie kodu PHP"
      },
      {
        "id": "B",
        "text": "zainicjowanie kodu w języku PHP"
      },
      {
        "id": "C",
        "text": "sprawdzanie wartości zmiennych użytych w kodzie PHP"
      },
      {
        "id": "D",
        "text": "uzyskanie informacji o środowisku pracy serwera obsługującego PHP"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 242,
    "text": "242. Którego języka należy użyć, aby zapisać skrypt wykonywany po stronie klienta w przegladarce internetowej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Perl"
      },
      {
        "id": "B",
        "text": "PHP"
      },
      {
        "id": "C",
        "text": "Python"
      },
      {
        "id": "D",
        "text": "JavaScript"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 243,
    "text": "243. W języku PHP pobrano z bazy danych wyniki działania kwerendy za pomocą polecenia mysql_query(). Aby otrzymać ze zwróconej kwerendy wierszy danych, należy zastosować polecenie:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "mysql_field_len()"
      },
      {
        "id": "B",
        "text": "mysql_list_fields()"
      },
      {
        "id": "C",
        "text": "mysql_fetch_row()"
      },
      {
        "id": "D",
        "text": "mysql_fetch_lengths()"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 244,
    "text": "244. Błędy interpretacji kodu PHP są zapisane:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "w logu pod warunkiem ustawienia odpowiedniego parametru w pliku php.ini"
      },
      {
        "id": "B",
        "text": "w podglądzie zdarzeń systemu Windows"
      },
      {
        "id": "C",
        "text": "w oknie edytora, w którym powstaje kod PHP"
      },
      {
        "id": "D",
        "text": "nigdzie, są ignorowanie przez przeglądarkę oraz interpreter kodu PHP"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 245,
    "text": "245. Do uruchomienia systemu CMS Joomla! wymagane jest środowisko:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "PHP i MySQL"
      },
      {
        "id": "B",
        "text": "Apache i PHP"
      },
      {
        "id": "C",
        "text": "Apache, PHP i MySQL"
      },
      {
        "id": "D",
        "text": "IIS, PERL i MySQL"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 246,
    "text": "246. W języku HTML, aby uzyskać następujący efekt pogrubienia, pochylenia lub zapisania w górnym indeksie należy zapisać kod:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<i>pogrubiony <b>pochylony lub w </i><sup>górnym indeksie</sup>"
      },
      {
        "id": "B",
        "text": "<i>pogrubiony </i><b>pochylony</b> lub w <sub>górnym indeksie</sub>"
      },
      {
        "id": "C",
        "text": "<b>pogrubiony </b><i>pochylony</i> lub w <sup>górnym indeksie</sup>"
      },
      {
        "id": "D",
        "text": "<b>pogrubiony <i>pochylony</i></b> lub w <sub>górnym indeksie</sub>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 247,
    "text": "247. W kodzie HTML zapisano w bloku tekst formatowany pewnym stylem. Aby wtrącić wewnątrz tekstu kilka słów formatowanych innym stylem, należy zastosować znacznik",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<hr>"
      },
      {
        "id": "B",
        "text": "<span>"
      },
      {
        "id": "C",
        "text": "<table>"
      },
      {
        "id": "D",
        "text": "<section>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 248,
    "text": "248. Który z zapisów znacznika <meta> jest prawidłowy ze względu na wykorzystane atrybuty?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<meta background = blue>"
      },
      {
        "id": "B",
        "text": "<meta name = \"!DOCTYPE\">"
      },
      {
        "id": "C",
        "text": "<meta title = \"Strona dla hobbystów\">"
      },
      {
        "id": "D",
        "text": "<meta name = \"description\" content = \"Masz jakieś hobby? To jest strona dla Ciebie!\">"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 249,
    "text": "249. Który z wymienionych znaczników należy do części <head> dokumentu HTML?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<img>"
      },
      {
        "id": "B",
        "text": "<title>"
      },
      {
        "id": "C",
        "text": "<span>"
      },
      {
        "id": "D",
        "text": "<section>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 250,
    "text": "250. W języku CSS poniższy zapis sprawi, że koloru zielonego będzie",
    "image": "e14/250.jpg",
    "answers": [
      {
        "id": "A",
        "text": "tło całej strony"
      },
      {
        "id": "B",
        "text": "czcionka nagłówka drugiego stopnia"
      },
      {
        "id": "C",
        "text": "tło tekstu nagłówka drugiego stopnia"
      },
      {
        "id": "D",
        "text": "czcionka każdego nagłówka na stronie"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 251,
    "text": "251. W języku CSS, aby formatować tekst poprzez przekreślenie, podkreślenie dolne lub górne, należy zastosować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "text-align"
      },
      {
        "id": "B",
        "text": "text-indent"
      },
      {
        "id": "C",
        "text": "text-transform"
      },
      {
        "id": "D",
        "text": "text-decoration"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 252,
    "text": "252. W języku CSS poniższy zapis sprawi, że kolor żółty przyjmie czcionka",
    "image": "e14/252.jpg",
    "answers": [
      {
        "id": "A",
        "text": "tekstu paragrafu"
      },
      {
        "id": "B",
        "text": "każdego odnośnika"
      },
      {
        "id": "C",
        "text": "odnośników, które otwierają sie w osobnej karcie"
      },
      {
        "id": "D",
        "text": "odnośników, które otwierają sie w tej samej karcie"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 253,
    "text": "253. W języku CSS poniższy zapis użyty na stronie, na której jest kilka paragrafów, a każdy z nich ma po kilka linii sprawi, że",
    "image": "e14/253.jpg",
    "answers": [
      {
        "id": "A",
        "text": "pierwsza linia każdego paragrafu będzie miała mniejszą czcionkę niż następne linie"
      },
      {
        "id": "B",
        "text": "pierwsza linia każdego paragrafu będzie miała większą czcionkę niż następne linie"
      },
      {
        "id": "C",
        "text": "pierwszy paragraf na stronie będzie w całości miał powiększoną czcionkę"
      },
      {
        "id": "D",
        "text": "całość tekstu paragrafu będzie powiększona o 150%"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 254,
    "text": "254. Który znacznik lub grupa znaczników nie są stosowane do definiowania struktury strony HTML?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<header>, <footer>"
      },
      {
        "id": "B",
        "text": "<i>, <b>, <u>"
      },
      {
        "id": "C",
        "text": "<section>"
      },
      {
        "id": "D",
        "text": "<div>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 255,
    "text": "255. Który z przedstawionych kodów HTML sformatuje tekst według wzoru? (uwaga: słowo \"stacji\" jest zapisane większą czcionką niż reszta słów w tej linii)",
    "image": "e14/255.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 256,
    "text": "256. Kolor zapisany w postaci szesnastkowej o wartości #11FE07 w kodzie RGB ma postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "rgb(17,FE,7)"
      },
      {
        "id": "B",
        "text": "rgb(11,127,7)"
      },
      {
        "id": "C",
        "text": "rgb(17,255,7)"
      },
      {
        "id": "D",
        "text": "rgb(17,254,7)"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 257,
    "text": "257. Które ze zdań jest prawdziwe w stosunku do grafiki rastrowej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Podczas przekształcania polegającego na skalowaniu, skalowany obraz nie zmienia jakości"
      },
      {
        "id": "B",
        "text": "Zapisywany obraz jest opisywany za pośrednictwem figur geometrycznych umieszczonych w układzie współrzędnych"
      },
      {
        "id": "C",
        "text": "Grafika rastrowa nie jest zapisana w formacie WMF (ang. Windows Metafile Format - format metaplików w Windows)"
      },
      {
        "id": "D",
        "text": "Jest to prezentacja obrazu za pomocą pionowo-poziomej siatki odpowiednio kolorowanych pikseli na monitorze komputera, drukarce lub innym urządzeniu wyjściowym"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 258,
    "text": "258. Który z formatów grafiki jest najbardziej odpowiedni do zapisu obrazu z przezroczystością na potrzeby strony internetowej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "JPG"
      },
      {
        "id": "B",
        "text": "PNG"
      },
      {
        "id": "C",
        "text": "BMP"
      },
      {
        "id": "D",
        "text": "SVG"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 259,
    "text": "259. W czasie przetwarzania dźwięku, aby pozbyć się niechcianych odgłosów spowodowanych złą jakością mikrofonu, należy zastosować narzędzie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "echa"
      },
      {
        "id": "B",
        "text": "obwiedni"
      },
      {
        "id": "C",
        "text": "wyciszenia"
      },
      {
        "id": "D",
        "text": "usuwania szumów"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 260,
    "text": "260. Aby obraz zmieniał się płynnie w filmie, liczba klatek (nieprzenikających się wzajemnie) na sekundę musi znajdować się przynajmniej w zakresie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "16-19 fps"
      },
      {
        "id": "B",
        "text": "20-23 fps"
      },
      {
        "id": "C",
        "text": "24-30 fps"
      },
      {
        "id": "D",
        "text": "31-36 fps"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 261,
    "text": "261. W poleceniu CREATE TABLE języku SQL atrybut określający, która kolumna tabeli jest kluczem podstawowym, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UNIQUE"
      },
      {
        "id": "B",
        "text": "MAIN KEY"
      },
      {
        "id": "C",
        "text": "PRIMARY KEY"
      },
      {
        "id": "D",
        "text": "IDENTITY FIELD"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 262,
    "text": "262. Dana jest tabela psy o polach: imie, rasa, telefon_wlasciciela, rok_szczepienia. Aby wyszukać telefony właścicieli, których psy były szczepione przed 2015 rokiem, należy użyć polecenia SQL",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT psy FROM rok_szczepienia < 2015"
      },
      {
        "id": "B",
        "text": "SELECT imie, rasa FROM psy WHERE rok_szczepienia > 2015"
      },
      {
        "id": "C",
        "text": "SELECT telefon_wlasciciela FROM psy WHERE rok_szczepienia < 2015"
      },
      {
        "id": "D",
        "text": "SELECT telefon_wlasciciela FROM psy WHERE rok_szczepienia > 2015"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 263,
    "text": "263. Na rysunku została przedstawiona relacja jeden do wielu. Łączy ona",
    "image": "e14/263.jpg",
    "answers": [
      {
        "id": "A",
        "text": "klucz obcy rezyserzy_id tabeli filmy z kluczem obcym id tabeli rezyserzy"
      },
      {
        "id": "B",
        "text": "klucz podstawowy id tabeli filmy z kluczem podstawowym id tabeli rezyserzy"
      },
      {
        "id": "C",
        "text": "klucz obcy rezyserzy_id tabeli filmy z kluczem podstawowym id tabeli rezyserzy"
      },
      {
        "id": "D",
        "text": "klucz podstawowy id tabeli z kluczem obcym rezyserzy_id tabeli rezyserzy"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 264,
    "text": "264. W bazie danych sklepu spożywczego pod koniec dnia jest tworzony raport wyświetlający te produkty wraz z ich dostawcami, dla których stan magazynowy jest mniejszy niż 10 sztuk. Do zdefiniowania tego raportu posłużono się kwerendą",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT"
      },
      {
        "id": "B",
        "text": "UPDATE"
      },
      {
        "id": "C",
        "text": "INSERT INTO"
      },
      {
        "id": "D",
        "text": "CHECK TABLE"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 265,
    "text": "265. Wskaż polecenie SQL dodające pole miesiacSiewu do istniejącej tabeli rosliny",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UPDATE rosliny ADD miesiacSiewu int"
      },
      {
        "id": "B",
        "text": "CREATE TABLE rosliny {miesiacSiewu int}"
      },
      {
        "id": "C",
        "text": "ALTER TABLE rosliny ADD miesiacSiewu int"
      },
      {
        "id": "D",
        "text": "INSERT INTO rosliny VALUES (miesiacSiewu int)"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 266,
    "text": "266. Polecenie serwera MySQL przedstawione poniżej sprawi, że użytkownikowi tkowal zostaną",
    "image": "e14/266.jpg",
    "answers": [
      {
        "id": "A",
        "text": "przydzielone prawa do usuwania i aktualizowania danych w tabeli pracownicy"
      },
      {
        "id": "B",
        "text": "odebrane prawa usuwania i modyfikowania danych w tabeli pracownicy"
      },
      {
        "id": "C",
        "text": "odebrane prawa usuwanie i dodawania rekordów w tabeli pracownicy"
      },
      {
        "id": "D",
        "text": "przydzielone prawa wszelkiej zmiany struktury tabeli pracownicy"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 267,
    "text": "267. W serwerze MySQL nadanie roli o nazwie DBManager przyznaje użytkownikowi prawa umożliwiające",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "monitorowanie serwera"
      },
      {
        "id": "B",
        "text": "wszelkie operacje na bazach danych serwera"
      },
      {
        "id": "C",
        "text": "tworzenie użytkowników serwera i ustawianie im haseł"
      },
      {
        "id": "D",
        "text": "wszystkie operacje na bazach danych i użytkownikach serwera"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 268,
    "text": "268. W bazie danych wykonano następujące polecenie dotyczące praw użytkownika adam. Po wykonaniu poleceń użytkownik adam będzie miał prawa do",
    "image": "e14/268.jpg",
    "answers": [
      {
        "id": "A",
        "text": "usunięcia tabeli lub jej rekordów"
      },
      {
        "id": "B",
        "text": "aktualizowania danych i przeglądania tabeli klienci"
      },
      {
        "id": "C",
        "text": "tworzenia tabeli klienci i aktualizowania w niej danych"
      },
      {
        "id": "D",
        "text": "przeglądania tabeli klienci i wstawiania do niej sektorów"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 269,
    "text": "269. Wskaż poprawną zasadę dotyczącą spójności danych w bazie danych",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "pole klucza obcego nie może być puste"
      },
      {
        "id": "B",
        "text": "pole klucza podstawowego nie może być puste"
      },
      {
        "id": "C",
        "text": "pole klucza podstawowego musi posiadać utworzony indeks"
      },
      {
        "id": "D",
        "text": "w relacji 1..n pole klucza obcego jest połączone z polem klucza obcego innej tabeli"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 270,
    "text": "270. Aby naprawić uszkodzoną tabelę w MySQL, należy wydać polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "FIX TABLE"
      },
      {
        "id": "B",
        "text": "CHECK TABLE"
      },
      {
        "id": "C",
        "text": "REPAIR TABLE"
      },
      {
        "id": "D",
        "text": "RESOLVE TABLE"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 271,
    "text": "271. W formularzu dane z pola input o typie number zostały zapisane do zmiennej a, a następnie przetworzone w skrypcie JavaScript w następujący sposób. Zmienna z będzie typu",
    "image": "e14/271.jpg",
    "answers": [
      {
        "id": "A",
        "text": "NaN"
      },
      {
        "id": "B",
        "text": "napisowego"
      },
      {
        "id": "C",
        "text": "zmiennoprzecinkowego"
      },
      {
        "id": "D",
        "text": "liczbowego, całkowitego"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 272,
    "text": "272. Aby w pliku z rozszerzeniem php umieścić kod w języku PHP należy użyć znaczników",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<php .......... />"
      },
      {
        "id": "B",
        "text": "<?php .......... ?>"
      },
      {
        "id": "C",
        "text": "<php> ......... </php>"
      },
      {
        "id": "D",
        "text": "<?php> ........ <php?>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 273,
    "text": "273. Ile iteracji będzie miała pętla zapisana w języku PHP, zakładając, że zmienna sterująca nie jest modyfikowana we wnętrzu pętli?",
    "image": "e14/273.jpg",
    "answers": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 274,
    "text": "274. W JavaScript wynik operacji jest równy wartości NaN, jeśli skrypt próbował wykonać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "funkcję parseFloat zamiast parseInt na zmiennej liczbowej"
      },
      {
        "id": "B",
        "text": "działanie arytmetyczne, a zawartość zmiennej była napisem"
      },
      {
        "id": "C",
        "text": "działanie arytmetyczne na dwóch zmiennych liczbowych dodatnich"
      },
      {
        "id": "D",
        "text": "funkcję sprawdzającą długość napisu, a zawartość zmiennej była liczbą"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 275,
    "text": "275. W instrukcji warunkowej języka JavaScript należy sprawdzić przypadek, gdy wartość zmiennej a jest z przedziału (0, 100), natomiast wartość zmiennej b jest większa od zera. Warunek taki jest prawidłowo zapisany w nastepujący sposób",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "if (a>0 || a<100 || b<0)"
      },
      {
        "id": "B",
        "text": "if (a>0 && a<100 && b>0)"
      },
      {
        "id": "C",
        "text": "if ((a>0 || a<100) && b>0)"
      },
      {
        "id": "D",
        "text": "if ((a>0 && a<100) || b<0)"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 276,
    "text": "276. Dla dowolnego a z przedziału (0,99) zadaniem funkcji zapisanej w języku Java Script jest:",
    "image": "e14/276.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zwrócenie liczb z przedziału a..99"
      },
      {
        "id": "B",
        "text": "wypisanie liczb z przedziału a..99 i zwrócenie wartości 100"
      },
      {
        "id": "C",
        "text": "wypisanie wartości zmiennej a oraz zwrócenie wartości zmiennej n"
      },
      {
        "id": "D",
        "text": "wypisanie liczb z przedziału a...100 i zwrócenie wartości zmiennej n"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 277,
    "text": "277. Zapis w języku JavaScript ma za zadanie",
    "image": "e14/277.jpg",
    "answers": [
      {
        "id": "A",
        "text": "utworzenie nowej klasy napis1."
      },
      {
        "id": "B",
        "text": "wywołanie metody obiektu napisy"
      },
      {
        "id": "C",
        "text": "utworzenie obiektu napis1 klasy napisy"
      },
      {
        "id": "D",
        "text": "zadeklarowanie zmiennej napis1 i wywołanie funkcji, której argumentem jest napis1"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 278,
    "text": "278. Aby wykonać kod zapisany językiem PHP wystarczy, że w systemie zainstalowano",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "przeglądarkę internetową"
      },
      {
        "id": "B",
        "text": "serwer WWW z interpreterem PHP"
      },
      {
        "id": "C",
        "text": "serwer WWW z serwerem MySQL"
      },
      {
        "id": "D",
        "text": "serwer WWW, parser PHP oraz serwer MySQL"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 279,
    "text": "279. Pętla zapisana w języku PHP wstawi do tablicy liczby",
    "image": "e14/279.jpg",
    "answers": [
      {
        "id": "A",
        "text": "0, 1, 2, 3, 4, 5, 6, 7, 8, 9"
      },
      {
        "id": "B",
        "text": "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
      },
      {
        "id": "C",
        "text": "0, 10, 20, 30, 40, 50, 60, 70, 80, 90"
      },
      {
        "id": "D",
        "text": "10, 20, 30, 40, 50, 60, 70, 80, 90, 100"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 280,
    "text": "280. Wymaganiem aplikacji internetowej jest, aby ta była wykonywana po stronie klienta. W którym języku należy zaimplementować tę aplikację?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Perl"
      },
      {
        "id": "B",
        "text": "PHP"
      },
      {
        "id": "C",
        "text": "Python"
      },
      {
        "id": "D",
        "text": "JavaScript"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 281,
    "text": "281. Zadaniem funkcji PHP o nazwie mysql_num_rows() jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ponumerować rekordy w bazie danych"
      },
      {
        "id": "B",
        "text": "zwrócić kolejny rekord z wynikami zapytania"
      },
      {
        "id": "C",
        "text": "zwrócić liczbę wierszy znajdujących się w wyniku zapytania"
      },
      {
        "id": "D",
        "text": "zwrócić rekord, którego numer podany został w parametrze funkcji"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 282,
    "text": "282. Jaka treść komunikatu powinna być wstawiona w przedstawionym kodzie PHP zamiast znaków zapytania?",
    "image": "e14/282.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Wybrana baza nie istnieje"
      },
      {
        "id": "B",
        "text": "Błąd połączenia z serwerem SQL"
      },
      {
        "id": "C",
        "text": "Pomyślnie dodano rekord do bazy"
      },
      {
        "id": "D",
        "text": "Błąd przetwarzania zapytania SQL"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 283,
    "text": "283. Testy aplikacji internetowej mające za zadanie sprawdzenie skalowalności aplikacji i bazy danych oraz architektury serwera i konfiguracji noszą nazwę testów",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "kompatybilności"
      },
      {
        "id": "B",
        "text": "bezpieczeństwa"
      },
      {
        "id": "C",
        "text": "funkcjonalnych"
      },
      {
        "id": "D",
        "text": "użyteczności"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 284,
    "text": "284. Aby prawidłowo udokumentować linię kodu języka Java Script, należy po znakach // wpisać komentarz",
    "image": "e14/284.jpg",
    "answers": [
      {
        "id": "A",
        "text": "nieprawidłowe dane"
      },
      {
        "id": "B",
        "text": "wybór losowej wartości ze zmiennych a, b i c"
      },
      {
        "id": "C",
        "text": "w zmiennej x minimalna wartość ze zmiennych a, b, c"
      },
      {
        "id": "D",
        "text": "w zmiennej x maksymalna wartość ze zmiennych a, b, c"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 285,
    "text": "285. Aby stronę WWW można było przesłać do przeglądarki internetowej w postaci zaszyfrowanej, należy użyć protokołu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "HTTPS"
      },
      {
        "id": "B",
        "text": "HTTP"
      },
      {
        "id": "C",
        "text": "SFTP"
      },
      {
        "id": "D",
        "text": "SSH"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 286,
    "text": "286. W języku HTML, aby uzyskać efekt jak na przykładzie, należy zastosować konstrukcję",
    "image": "e14/286.jpg",
    "answers": [
      {
        "id": "A",
        "text": "<p><big>Duży tekst</p> zwykły tekst"
      },
      {
        "id": "B",
        "text": "<p><strike>Duży tekst zwykły tekst</p>"
      },
      {
        "id": "C",
        "text": "<p><big>Duży tekst</big> zwykły tekst</p>"
      },
      {
        "id": "D",
        "text": "<p><strike>Duży tekst</strike> zwykły tekst</p>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 287,
    "text": "287. Zapis znacznika HTML w postaci",
    "image": "e14/287.jpg",
    "answers": [
      {
        "id": "A",
        "text": "jest niepoprawny, w atrybucie href należy podać adres URL"
      },
      {
        "id": "B",
        "text": "jest niepoprawny, zastosowano błędnie znak # w atrybucie href"
      },
      {
        "id": "C",
        "text": "jest poprawny, po wybraniu odnośnika otworzy się strona internetowa o adresie \"hobby\""
      },
      {
        "id": "D",
        "text": "jest poprawny, po wybraniu odnośnika aktualna strona zostanie przewinięta do elementu o nazwie \"hobby\""
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 288,
    "text": "288. W części nagłówkowej kodu HTML zapisano tekst przedstawiony na obrazku. Zapisany tekst zostanie wyświetlony",
    "image": "e14/288.jpg",
    "answers": [
      {
        "id": "A",
        "text": "na pasku tytułu przeglądarki"
      },
      {
        "id": "B",
        "text": "w treści strony, na banerze"
      },
      {
        "id": "C",
        "text": "w polu adresu, za wpisanym adresem URL"
      },
      {
        "id": "D",
        "text": "w treści strony, w pierwszym wyświetlonym nagłówku"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 289,
    "text": "289. Przeglądarka internetowa wyświetliła stronę w następujący sposób. Wskaż kod HTML, który poprawnie definiuje przedstawioną hierarchiczną strukturę tekstu:",
    "image": "e14/289.jpg",
    "answers": [
      {
        "id": "A",
        "text": "<h1>Rozdział 1<p>tekst <h2>Podrozdział 1.1<p>tekst <h2>Podrozdział 1.2"
      },
      {
        "id": "B",
        "text": "<ul><li>Rozdział 1<li>tekst<li>Podrozdział 1.1<li>tekst<li>Podrozdział 1.2</ul>"
      },
      {
        "id": "C",
        "text": "<big>Rozdział 1</big>tekst<big>Podrozdział 1.1</big>tekst<big>Podrozdział 1.2</big>"
      },
      {
        "id": "D",
        "text": "<h1>Rozdział 1</h1> <p>tekst</p> <h2>Podrozdział 1.1</h2> <p>tekst</p> <h2>Podrozdział 1.2</h2>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 290,
    "text": "290. W języku CSS, przedstawiony zapis sprawi, że plik rysunek.png będzie",
    "image": "e14/290.jpg",
    "answers": [
      {
        "id": "A",
        "text": "tłem całej strony"
      },
      {
        "id": "B",
        "text": "tłem każdego paragrafu"
      },
      {
        "id": "C",
        "text": "wyświetlony obok każdego paragrafu"
      },
      {
        "id": "D",
        "text": "wyświetlony, jeśli w kodzie zostanie zastosowany znacznik img"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 291,
    "text": "291. W języku CSS, aby zdefiniować niestandardowe odstępy między wyrazami, stosuje się właściwość",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "line-spacing"
      },
      {
        "id": "B",
        "text": "white-space"
      },
      {
        "id": "C",
        "text": "word-spacing"
      },
      {
        "id": "D",
        "text": "letter-space"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 292,
    "text": "292. W języku CSS zdefiniowano następujące formatowanie. Oznacza to, że kolorem niebieskim zostanie zapisany",
    "image": "e14/292.jpg",
    "answers": [
      {
        "id": "A",
        "text": "cały tekst paragrafu niezależnie od jego formatowania"
      },
      {
        "id": "B",
        "text": "pochylony tekst paragrafu"
      },
      {
        "id": "C",
        "text": "cały tekst nagłówków niezależnie od ich formatowania"
      },
      {
        "id": "D",
        "text": "pogrubiony tekst paragrafu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 293,
    "text": "293. W języku CSS, zapis w następującej postaci sprawi, iż koloru czerwonego będzie",
    "image": "e14/293.jpg",
    "answers": [
      {
        "id": "A",
        "text": "pierwsza linia paragrafu"
      },
      {
        "id": "B",
        "text": "tekst nagłówka pierwszego stopnia"
      },
      {
        "id": "C",
        "text": "pierwsza litera nagłówka drugiego stopnia"
      },
      {
        "id": "D",
        "text": "pierwsza litera nagłówka pierwszego stopnia"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 294,
    "text": "294. W języku HTML informacje dotyczące autora, streszczenia i słów kluczowych strony należy umieścić",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "pomiędzy znacznikami <head> i </head>, w znaczniku <meta>"
      },
      {
        "id": "B",
        "text": "pomiędzy znacznikami <head> i </head>, w znaczniku <style>"
      },
      {
        "id": "C",
        "text": "pomiędzy znacznikami <body> i </body>, w znaczniku <meta>"
      },
      {
        "id": "D",
        "text": "pomiędzy znacznikami <body> i </body>, w znaczniku <html>"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 295,
    "text": "295. Który z przedstawionych kodów XHTML sformatuje tekst według podanego wzoru?",
    "image": "e14/295.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 296,
    "text": "296. Kolor zapisany kodem RGB o wartości rgb(128, 16, 8) w postaci szesnastkowej ma wartość",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#FF0F80"
      },
      {
        "id": "B",
        "text": "#FF1008"
      },
      {
        "id": "C",
        "text": "#801008"
      },
      {
        "id": "D",
        "text": "#800F80"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 297,
    "text": "297. Które ze zdań opisuje grafikę wektorową?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Jest to prezentacja obrazu za pomocą pionowo-poziomej siatki odpowiednio kolorowanych pikseli na monitorze komputera, drukarce lub innym urządzeniu wyjściowym"
      },
      {
        "id": "B",
        "text": "Może być przechowywana w formacie JPG lub PNG"
      },
      {
        "id": "C",
        "text": "Jest wykorzystywana do zapisu fotografii cyfrowej"
      },
      {
        "id": "D",
        "text": "Zapisywany obraz jest opisywany za pośrednictwem figur geometrycznych umieszczonych w układzie współrzędnych"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 298,
    "text": "298. Aby zbadać rozkład ilościowy poszczególnych kolorów zdjęcia, należy użyć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "desaturacji"
      },
      {
        "id": "B",
        "text": "histogramu"
      },
      {
        "id": "C",
        "text": "balansu kolorów"
      },
      {
        "id": "D",
        "text": "rozmycia Gaussa"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 299,
    "text": "299. W standardzie HDTV jest stosowana rozdzielczość",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "704 x 576 px"
      },
      {
        "id": "B",
        "text": "720 x 480 px"
      },
      {
        "id": "C",
        "text": "1280 x 1024 px"
      },
      {
        "id": "D",
        "text": "1920 x 1080 px"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 300,
    "text": "300. Którą klauzulę powinno się zastosować w poleceniu CREATE TABLE języka SQL, aby dane pole rekordu nie było puste?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "NULL"
      },
      {
        "id": "B",
        "text": "CHECK"
      },
      {
        "id": "C",
        "text": "DEFAULT"
      },
      {
        "id": "D",
        "text": "NOT NULL"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 301,
    "text": "301. Polecenie języka SQL w postaci",
    "image": "e14/301.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zamienia nazwę tabeli miasta na nazwę kod"
      },
      {
        "id": "B",
        "text": "dodaje do tabeli kolumnę o nazwie kod typu text"
      },
      {
        "id": "C",
        "text": "dodaje do tabeli dwie kolumny o nazwach: kod i text"
      },
      {
        "id": "D",
        "text": "w tabeli miasta zamienia nazwę kolumny kod na nazwę text"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 302,
    "text": "302. W bazie danych hurtowni zdefiniowano tabelę sprzedaz o polach: id, kontrahent, grupa_cenowa, obrot. Aby wyszukać wyłącznie kontrahentów z drugiej grupy cenowej, których obrót jest większy niż 4000zł, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT sprzedaz FROM kontrahent WHERE obrot > 4000;"
      },
      {
        "id": "B",
        "text": "SELECT kontrahent FROM sprzedaz WHERE grupa_cenowa = 2 OR obrot > 4000;"
      },
      {
        "id": "C",
        "text": "SELECT kontrahent FROM sprzedaz WHERE grupa_cenowa = 2 AND obrot > 4000;"
      },
      {
        "id": "D",
        "text": "SELECT sprzedaz FROM kontrahent WHERE grupa_cenowa = 2 AND obrot > 4000;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 303,
    "text": "303. Dana jest tabela programiści o polach: id, nick, ilosc_kodu, ocena. Pole ilosc_kodu zawiera liczbę linii kodu napisanych przez programistę w danym miesiącu. Aby policzyć sumę linii kodu, który napisali wszyscy programiści, należy użyć polecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT SUM(ocena) FROM ilosc_kodu;"
      },
      {
        "id": "B",
        "text": "SELECT SUM(ilosc_kodu) FROM programisci;"
      },
      {
        "id": "C",
        "text": "SELECT COUNT(programisci) FROM ilosc_kodu;"
      },
      {
        "id": "D",
        "text": "SELECT MAX(ilosc_kodu) FROM programisci"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 304,
    "text": "304. W instrukcji CREATE TABLE użycie klauzuli PRIMARY KEY przy deklaracji pola tabeli spowoduje, że pole to stanie się",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "kluczem obcym"
      },
      {
        "id": "B",
        "text": "indeksem klucza"
      },
      {
        "id": "C",
        "text": "indeksem unikalnym"
      },
      {
        "id": "D",
        "text": "kluczem podstawowym"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 305,
    "text": "305. Baza danych księgarni zawiera tabelę ksiazki z polami: id, idAutor, tytul, ileSprzedanych oraz tabelę autorzy z polami: id, imie, nazwisko. Aby stworzyć raport sprzedanych książek z tytułami i nazwiskami autorów, należy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "stworzyć kwerendę wyszukującą tytuły książek"
      },
      {
        "id": "B",
        "text": "Zdefiniować relację 1..n dla tabel ksiazki i autorzy, a następnie stworzyć kwerendę łączącą obie tabele"
      },
      {
        "id": "C",
        "text": "Zdefiniować relację 1..1 dla tabel ksiazki i autorzy, a następnie stworzyć kwerendę łączącą obie tabele"
      },
      {
        "id": "D",
        "text": "stworzyć dwie osobne kwerendy: pierwszą wyszukującą tytuły książek, drugą wyszukującą nazwiska autorów"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 306,
    "text": "306. Istnieje tabela pracownicy z polami: id, imie, nazwisko, pensja. W nowym roku postawiono podnieść pensję wszystkim pracownikom o 100 zł. Aktualizacja ta w bazie danych będzie miała postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UPDATE pracownicy SET pensja = pensja + 100;"
      },
      {
        "id": "B",
        "text": "UPDATE pracownicy SET pensja = 100;"
      },
      {
        "id": "C",
        "text": "UPDATE pensja SET +100;"
      },
      {
        "id": "D",
        "text": "UPDATE pensja SET 100;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 307,
    "text": "307. W tabeli artykuly wykonano następujące polecenia dotyczące praw użytkowania jan. Po wykonaniu poleceń użytkownik jan będzie miał prawa do",
    "image": "e14/307.jpg",
    "answers": [
      {
        "id": "A",
        "text": "tworzenia tabeli i aktualizowania w niej danych"
      },
      {
        "id": "B",
        "text": "aktualizowania danych i przeglądania tabeli"
      },
      {
        "id": "C",
        "text": "tworzenia tabeli i wypełniania jej danymi"
      },
      {
        "id": "D",
        "text": "przeglądania tabeli"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 308,
    "text": "308. Aby przywrócić bazę danych MS SQL z kopii bezpieczeństwa, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DBCC CHECKDB"
      },
      {
        "id": "B",
        "text": "SAVE DATABASE"
      },
      {
        "id": "C",
        "text": "RESTORE DATABASE"
      },
      {
        "id": "D",
        "text": "REBACKUP DATABASE"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 309,
    "text": "309. Baza danych MySQL uległa uszkodzeniu. Które z działań NIE pomoże przy jej naprawie?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Wykonanie replikacji bazy danych"
      },
      {
        "id": "B",
        "text": "Próba naprawy poleceniem REPAIR"
      },
      {
        "id": "C",
        "text": "Odtworzenie bazy z kopii bezpieczeństwa"
      },
      {
        "id": "D",
        "text": "Stworzenie nowej bazy i przeniesienie do niej tabel"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 310,
    "text": "310. W formularzu, dane z pola input o typie number zostały zapisane do zmiennej a, a następnie przetworzone w skrypcie JavaScript w następujący sposób. Zmienna x będzie typu",
    "image": "e14/310.jpg",
    "answers": [
      {
        "id": "A",
        "text": "NaN"
      },
      {
        "id": "B",
        "text": "napisowego"
      },
      {
        "id": "C",
        "text": "zmiennoprzecinkowego"
      },
      {
        "id": "D",
        "text": "liczbowego, całkowitego"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 311,
    "text": "311. Wstawki kodu JavaScript w dokumencie HTML mogą się znaleźć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "tylko w cześci <head>, w znaczniku <script>"
      },
      {
        "id": "B",
        "text": "tylko w cześci <body>, w znaczniku <java>"
      },
      {
        "id": "C",
        "text": "zarówno w cześci <head>, jak i <body>, w znaczniku <java>"
      },
      {
        "id": "D",
        "text": "zarówno w cześci <head>, jak i <body>, w znaczniku <script>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 312,
    "text": "312. W przedstawonym kodzie JavaScript dla ułatwienia ponumerowano linie. W kodzie znajduje się błąd, gdyż po uruchomieniu żaden komunikat nie zostaje wyświetlony. Aby wyeliminować błąd, należy",
    "image": "e14/312.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wstawić znaki $ przed nazwami zmiennych."
      },
      {
        "id": "B",
        "text": "wstawić nawiasy klamrowe do sekcji if oraz else"
      },
      {
        "id": "C",
        "text": "w liniach 2 i 5 zmienne a i b wstawić w cudzysłów"
      },
      {
        "id": "D",
        "text": "w liniach 3 i 6 zamienić znaki cudzysłowu na apostrof, np. ’jest mniejsze’"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 313,
    "text": "313. Ile iteracji będzie miała przedstawiona pętla zapisana w języku PHP, zakładając, że zmienna sterująca nie jest modyfikowana we wnętrzu pętli?",
    "image": "e14/313.jpg",
    "answers": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "Nieskończenie wiele"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 314,
    "text": "314. W języku JavaScript metoda document.getElementById(id) ma za zadanie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wstawić tekst o treści ’id’ na stronie WWW"
      },
      {
        "id": "B",
        "text": "sprawdzić poprawność formularza o identyfikatorze id"
      },
      {
        "id": "C",
        "text": "pobrać dane z pola formularza i wstawić je do zmiennej id"
      },
      {
        "id": "D",
        "text": "zwrócić odniesienie do pierwszego elementu HTML o podanym id"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 315,
    "text": "315. W instrukcji warunkowej JavaScript należy sprawdzić przypadek, gdy zmienne a oraz b są dodatnie, z czego zmienna b jest mniejsza od 100. Warunek taki powinien być zapisany w następujący sposób:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "if ( a > 0 || b > 0 || b > 100)"
      },
      {
        "id": "B",
        "text": "if ( a > 0 && b > 0 || b > 100)"
      },
      {
        "id": "C",
        "text": "if ( a > 0 || (b > 0 && b < 100))"
      },
      {
        "id": "D",
        "text": "if ( a > 0 && b > 0 && b < 100)"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 316,
    "text": "316. Zadaniem przedstawionej funkcji zapisanej w języku JavaScript jest",
    "image": "e14/316.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zwrócenie wartości parzystych liczb od a do b"
      },
      {
        "id": "B",
        "text": "wypisanie liczb parzystych z przedziału od a do b"
      },
      {
        "id": "C",
        "text": "wypisanie wszystkich liczb z przedziału od a do b"
      },
      {
        "id": "D",
        "text": "sprawdzenie, czy liczba a jest nieparzysta; jeśli tak, wypisanie jej"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 317,
    "text": "317. Przedstawiony kod został zapisany w języku JavaScript. W podanej definicji obiektu metodą jest element o nazwie",
    "image": "e14/317.jpg",
    "answers": [
      {
        "id": "A",
        "text": "obj1"
      },
      {
        "id": "B",
        "text": "oblicz"
      },
      {
        "id": "C",
        "text": "czescCalkowita"
      },
      {
        "id": "D",
        "text": "czescUlamkowa"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 318,
    "text": "318. Aby uzyskać informacje o środowisku pracy serwera obsługującego PHP, należy skorzystać z funkcji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "php()"
      },
      {
        "id": "B",
        "text": "phpinfo()"
      },
      {
        "id": "C",
        "text": "phpgetinfo()"
      },
      {
        "id": "D",
        "text": "phpinformation()"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 319,
    "text": "319. Fragment kodu w języku PHP wypisze",
    "image": "e14/319.jpg",
    "answers": [
      {
        "id": "A",
        "text": "nazwę konta ze znakiem @, czyli \"adres@\""
      },
      {
        "id": "B",
        "text": "cały adres e-mail, czyli \"adres@host.pl\""
      },
      {
        "id": "C",
        "text": "samą nazwę domeny, czyli \"host.pl\""
      },
      {
        "id": "D",
        "text": "samą nazwę konta, czyli \"adres\""
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 320,
    "text": "320. Do uruchomienia skryptu JavaScript wymagane jest oprogramowanie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "serwera WWW"
      },
      {
        "id": "B",
        "text": "serwera MySQL"
      },
      {
        "id": "C",
        "text": "debugera JavaScript"
      },
      {
        "id": "D",
        "text": "przeglądarki internetowej"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 321,
    "text": "321. Zadaniem funkcji PHP o nazwie mysql_select_db() jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "połączyć bazę danych z serwerem SQL"
      },
      {
        "id": "B",
        "text": "określić bazę, z której będą pobierane dane"
      },
      {
        "id": "C",
        "text": "określić tabelę, z której będą pobierane dane"
      },
      {
        "id": "D",
        "text": "pobrać dane z bazy danych na podstawie kwerendy"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 322,
    "text": "322. W przedstawionym kodzie PHP, zamiast znaków zapytania powinien pojawić się komunikat:",
    "image": "e14/322.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Błąd przetwarzania zapytania"
      },
      {
        "id": "B",
        "text": "Zapytanie przetworzono pomyślnie"
      },
      {
        "id": "C",
        "text": "Nieprawidłowa nazwa bazy danych"
      },
      {
        "id": "D",
        "text": "Nieprawidłowe hasło do bazy danych"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 323,
    "text": "323. Testy wydajnościowe mają na celu sprawdzenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zdolności oprogramowania do działania w warunkach wadliwej pracy sprzętu"
      },
      {
        "id": "B",
        "text": "zdolności oprogramowania do działania w warunkach wadliwej pracy systemu"
      },
      {
        "id": "C",
        "text": "stopnia spełnienia wymagań wydajnościowych przez system lub moduł"
      },
      {
        "id": "D",
        "text": "ciągu zdarzeń, w którym prawdopodobieństwo każdego zdarzenia zależy jedynie od wyniku poprzedniego"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 324,
    "text": "324. Aby prawidłowo udokumentować przedstawioną linię kodu języka JavaScript, należy po znakach // wpisać komentarz",
    "image": "e14/324.jpg",
    "answers": [
      {
        "id": "A",
        "text": "nieprawidłowe dane"
      },
      {
        "id": "B",
        "text": "zmiana stylu atrybutu innerHTML"
      },
      {
        "id": "C",
        "text": "wyświetlenie tekstu \"Date()\" w znaczniku o id = napis"
      },
      {
        "id": "D",
        "text": "wyświetlenie daty i czasu w znaczniku o id = napis"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 325,
    "text": "325. Przekierowanie 301 służące przekierowaniu użytkownika z jednego adresu URL na inny można ustawić w pliku konfiguracji serwera Apache o nazwie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "conf.php"
      },
      {
        "id": "B",
        "text": ".htaccess"
      },
      {
        "id": "C",
        "text": ".apacheConf"
      },
      {
        "id": "D",
        "text": "configuration.php"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 326,
    "text": "326. W języku HTML aby zdefiniować słowa kluczowe strony, należy użyć zapisu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<meta keywords=\"psy, koty, gryzonie\">"
      },
      {
        "id": "B",
        "text": "<meta name=\"keywords\" =\"psy, koty, gryzonie\">"
      },
      {
        "id": "C",
        "text": "<meta name=\"keywords\" content=\"psy, koty, gryzonie\">"
      },
      {
        "id": "D",
        "text": "<meta name=\"description\" content=\"psy, koty, gryzonie\">"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 327,
    "text": "327. W języku HTML zdefiniowano znacznik a. Wartość nofollow atrybutu rel",
    "image": "e14/327.jpg",
    "answers": [
      {
        "id": "A",
        "text": "oznacza, że kliknięcie na link nie przeniesie do strony website.com"
      },
      {
        "id": "B",
        "text": "oznacza, że kliknięcie na link otworzy go w osobnej karcie przeglądarki"
      },
      {
        "id": "C",
        "text": "jest informacją dla robota wyszukiwarki Google, aby nie podążał za tym linkiem"
      },
      {
        "id": "D",
        "text": "jest informacją dla przeglądarki internetowej, aby nie formatowała słowa \"link\" jako odnośnika"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 328,
    "text": "328. W języku HTML aby zdefiniować poziomą linię, należy użyć znacznika",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<line>"
      },
      {
        "id": "B",
        "text": "<br>"
      },
      {
        "id": "C",
        "text": "<hl>"
      },
      {
        "id": "D",
        "text": "<hr>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 329,
    "text": "329. Zapisano kod HTML wstawiający grafikę na stronę internetową. Jeżeli rysunek.png nie zostanie odnaleziony, przeglądarka",
    "image": "e14/329.jpg",
    "answers": [
      {
        "id": "A",
        "text": "nie wyświetli strony internetowej"
      },
      {
        "id": "B",
        "text": "w miejscu grafiki wypisze tekst \"pejzaż\""
      },
      {
        "id": "C",
        "text": "w miejscu grafiki wypisze tekst \"rysunek.png\""
      },
      {
        "id": "D",
        "text": "w miejscu grafiki wypisze błąd wyświetlania strony"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 330,
    "text": "330. Aby w języku HTML uzyskać takie formatowanie paragrafu dla tekstu należy zastosować kod",
    "image": "e14/330.jpg",
    "answers": [
      {
        "id": "A",
        "text": "<p>Tekst może być <mark>zaznaczony</mark> albo <em>istotny dla autora</p>"
      },
      {
        "id": "B",
        "text": "<p>Tekst może być <mark>zaznaczony albo <i>istotny</i> dla autora</mark></p>"
      },
      {
        "id": "C",
        "text": "<p>Tekst może być <mark>zaznaczony</mark> albo <em>istotny</em> dla autora</p>"
      },
      {
        "id": "D",
        "text": "<p>Tekst może być <mark>zaznaczony albo <em>istotny</em> dla autora</mark></p>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 331,
    "text": "331. Zamieszczony kod HTML formularza zostanie wyświetlony przez przeglądarkę w sposób:",
    "image": "e14/331.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 332,
    "text": "332. W języku CSS wcięcie pierwszej linii akapitu na 30 pikseli uzyska się za pomocą zapisu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "p { text-indent: 30px; }"
      },
      {
        "id": "B",
        "text": "p { text-spacing: 30px; }"
      },
      {
        "id": "C",
        "text": "p { line-height: 30px; }"
      },
      {
        "id": "D",
        "text": "p { line-indent: 30px; }"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 333,
    "text": "333. W języku CSS zdefiniowano następujące formatowanie. Kolorem czerwonym zostanie zapisany",
    "image": "e14/333.jpg",
    "answers": [
      {
        "id": "A",
        "text": "tylko tekst pochylony nagłówka pierwszego stopnia"
      },
      {
        "id": "B",
        "text": "tylko tekst pochylony we wszystkich poziomach nagłówków"
      },
      {
        "id": "C",
        "text": "cały tekst nagłówka pierwszego stopnia oraz pochylony tekst akapitu"
      },
      {
        "id": "D",
        "text": "cały tekst nagłówka pierwszego stopnia oraz cały tekst pochylony, niezależnie od tego, w którym miejscu strony się znajduje"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 334,
    "text": "334. W języku CSS, aby sformatować dowolny element języka HTML w ten sposób, że po najechaniu na niego kursorem zmienia on kolor czcionki, należy zastosować pseudoklasę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": ":active"
      },
      {
        "id": "B",
        "text": ":hover"
      },
      {
        "id": "C",
        "text": ":visited"
      },
      {
        "id": "D",
        "text": ":coursor"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 335,
    "text": "335. Zapis CSS w takiej postaci sprawi, że na stronie internetowej",
    "image": "e14/335.jpg",
    "answers": [
      {
        "id": "A",
        "text": "punktorem listy nienumerowanej będzie rys.gif"
      },
      {
        "id": "B",
        "text": "rys.gif będzie stanowił ramkę dla listy nienumerowanej"
      },
      {
        "id": "C",
        "text": "wyświetli się rys.gif jako tło listy nienumerowanej"
      },
      {
        "id": "D",
        "text": "każdy z punktów listy będzie miał osobne tło pobrane z grafiki rys.gif"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 336,
    "text": "336. W języku CSS aby zdefiniować odmienne formatowanie dla pierwszej litery akapitu, należy zastosować selektor",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "klasy p.first-letter"
      },
      {
        "id": "B",
        "text": "dziecka p + first-letter"
      },
      {
        "id": "C",
        "text": "atrybutu p [first-letter]"
      },
      {
        "id": "D",
        "text": "pseudoelementu p::first-letter"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 337,
    "text": "337. W kodzie źródłowym zapisanym w języku HTML wskaż błąd walidacji dotyczący tego fragmentu",
    "image": "e14/337.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Nieznany znacznik h6"
      },
      {
        "id": "B",
        "text": "Znacznik br nie został poprawnie zamknięty"
      },
      {
        "id": "C",
        "text": "Znacznik br nie może występować wewnątrz znacznika p"
      },
      {
        "id": "D",
        "text": "Znacznik zamykający /b niezgodny z zasadą zagnieżdżania"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 338,
    "text": "338. W ramce przedstawiono właściwości pliku graficznego. W celu optymalizacji czasu ładowania rysunku na stronę WWW należy",
    "image": "e14/338.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zmniejszyć wymiary rysunku"
      },
      {
        "id": "B",
        "text": "zwiększyć rozdzielczość"
      },
      {
        "id": "C",
        "text": "zmienić format grafiki na CDR"
      },
      {
        "id": "D",
        "text": "zmienić proporcje szerokości do wysokości"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 339,
    "text": "339. W programie INKSCAPE / COREL aby uzyskać przedstawiony efekt napisu, należy",
    "image": "e14/339.jpg",
    "answers": [
      {
        "id": "A",
        "text": "skorzystać z funkcji gradientu"
      },
      {
        "id": "B",
        "text": "zastosować funkcję sumy z kołem"
      },
      {
        "id": "C",
        "text": "zastosować funkcję wykluczenia z kołem"
      },
      {
        "id": "D",
        "text": "skorzystać z funkcji wstaw / dopasuj tekst do ścieżki"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 340,
    "text": "340. Programem do edycji dźwięku jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Brasero"
      },
      {
        "id": "B",
        "text": "Winamp"
      },
      {
        "id": "C",
        "text": "Audacity"
      },
      {
        "id": "D",
        "text": "RealPlayer"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 341,
    "text": "341. Dana jest tabela pracownicy. Polecenie MySQL usuwające wszystkie rekordy z tabeli, dla których nie wypełniono pola rodzaj_umowy, ma postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DROP pracownicy FROM rodzaj_umowy = 0;"
      },
      {
        "id": "B",
        "text": "DROP pracownicy WHERE rodzaj_umowy IS NULL;"
      },
      {
        "id": "C",
        "text": "DELETE pracownicy WHERE rodzaj_umowy = 'brak';"
      },
      {
        "id": "D",
        "text": "DELETE FROM pracownicy WHERE rodzaj_umowy IS NULL;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 342,
    "text": "342. W języku SQL, aby stworzyć tabelę, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ADD TABLE"
      },
      {
        "id": "B",
        "text": "ALTER TABLE"
      },
      {
        "id": "C",
        "text": "INSERT TABLE"
      },
      {
        "id": "D",
        "text": "CREATE TABLE"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 343,
    "text": "343. W przedstawionym fragmencie kwerendy języka SQL, komenda SELECT ma za zadanie zwrócić",
    "image": "e14/343.jpg",
    "answers": [
      {
        "id": "A",
        "text": "średnią tabeli"
      },
      {
        "id": "B",
        "text": "liczbę wierszy"
      },
      {
        "id": "C",
        "text": "sumę w kolumnie wartosc"
      },
      {
        "id": "D",
        "text": "średnią w kolumnie wartosc"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 344,
    "text": "344. Dana jest tabela ksiazki z polami: tytul, autor (typu tekstowego), cena (typu liczbowego). Aby kwerenda SELECT zwróciła tylko tytuły, dla których cena jest mniejsza od 50zł, należy zapisać:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT * FROM ksiazki WHERE cena < 50;"
      },
      {
        "id": "B",
        "text": "SELECT tytul FROM ksiazki WHERE cena < 50;"
      },
      {
        "id": "C",
        "text": "SELECT tytul FROM ksiazki WHERE cena > '50 zł';"
      },
      {
        "id": "D",
        "text": "SELECT ksiazki FROM tytul WHERE cena < '50 zł';"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 345,
    "text": "345. W bazie danych MYSQL dana jest tabela programów komputerowych o polach: nazwa, producent, rokWydania. Aby kwerenda SELECT zwróciła wszystkie nazwy producentów tak, by nazwy te nie powtarzały się, należy zapisać:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT UNIQUE producent FROM programy;"
      },
      {
        "id": "B",
        "text": "SELECT DISTINCT producent FROM programy;"
      },
      {
        "id": "C",
        "text": "SELECT producent FROM programy WHERE UNIQUE;"
      },
      {
        "id": "D",
        "text": "SELECT producent FROM programy WHERE producent NOT DUPLICATE;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 346,
    "text": "346. Tabela filmy zawiera klucz główny id oraz klucz obcy rezyserID. Tabela rezyserzy zawiera klucz główny id. Obydwie tabele połączone są relacją jeden po stronie rezyserzy do wielu po stronie filmy. Aby w kwerendzie SELECT połączyć tabele filmy i rezyserzy, należy zapisać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "... filmy JOIN rezyserzy ON filmy.id = rezyserzy.id ..."
      },
      {
        "id": "B",
        "text": "... filmy JOIN rezyserzy ON filmy.id = rezyserzy.filmyID ..."
      },
      {
        "id": "C",
        "text": "... filmy JOIN rezyserzy ON filmy.rezyserID = rezyserzy.id ..."
      },
      {
        "id": "D",
        "text": "... filmy JOIN rezyserzy ON filmy.rezyserID = rezyserzy.filmyID ..."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 347,
    "text": "347. Na rysunku przedstawiono dwie tabele. Aby połączyć je relacją jeden do wielu, jeden po stronie Klienci wiele po stronie Zamowienia, należy",
    "image": "e14/347.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Połączyć relacją pola ID z obu tabel"
      },
      {
        "id": "B",
        "text": "Dodać pole klucza obcego do tabeli Zamowienia i połączyć je z ID tabeli Klienci"
      },
      {
        "id": "C",
        "text": "Dodać pole klucza obcego do tabeli Klienci i połączyć je z ID tabeli Zamowienia"
      },
      {
        "id": "D",
        "text": "Zdefiniować trzecią tabelę z dwoma kluczami obcymi. Jeden klucz połączyć z ID tabeli Klienci, drugi klucz połączyć z ID tabeli Zamowienia"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 348,
    "text": "348. Źródłem rekordów dla raportu może być",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Tabela"
      },
      {
        "id": "B",
        "text": "Inny raport"
      },
      {
        "id": "C",
        "text": "Makropolecenie"
      },
      {
        "id": "D",
        "text": "Zapytanie INSERT INTO"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 349,
    "text": "349. Przedstawione polecenie MySQL ma za zadanie",
    "image": "e14/349.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Usunąć kolumnę tytul z tabeli ksiazki"
      },
      {
        "id": "B",
        "text": "Dodać do tabeli ksiazki kolumnę tytul"
      },
      {
        "id": "C",
        "text": "Zmienić nazwę kolumny w tabeli ksiazki"
      },
      {
        "id": "D",
        "text": "Zmienić typ kolumny w tabeli ksiazki"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 350,
    "text": "350. W tabeli podzespoly należy zmienić wartość pola URL na 'toshiba.pl' dla wszystkich rekordów, gdzie pole producent to TOSHIBA. W języku SQL modyfikacja będzie miała postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UPDATE podzespoly SET URL='toshiba.pl';"
      },
      {
        "id": "B",
        "text": "UPDATE producent='TOSHIBA' SET URL='toshiba.pl';"
      },
      {
        "id": "C",
        "text": "UPDATE podzespoly.producent='TOSHIBA' SET URL='toshiba.pl';"
      },
      {
        "id": "D",
        "text": "UPDATE podzespoly SET URL='toshiba.pl' WHERE producent='TOSHIBA';"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 351,
    "text": "351. Do zabezpieczeń serwera bazy danych przed atakami hakerów nie należy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Włączenie zapory"
      },
      {
        "id": "B",
        "text": "Defragmentacja dysków"
      },
      {
        "id": "C",
        "text": "Stosowanie złożonych haseł do bazy"
      },
      {
        "id": "D",
        "text": "Blokowanie portów związanych z bazą danych"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 352,
    "text": "352. W języku MySQL należy zastosować polecenie REVOKE, aby użytkownikowi anna odebrać prawo do dokonywania zmian jedynie w definicji struktury bazy danych. Polecenie odpowiadające odebraniu tych praw ma postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "REVOKE ALL ON tabela1 FROM 'anna'@'localhost'"
      },
      {
        "id": "B",
        "text": "REVOKE CREATE ALTER DROP ON tabela1 FROM 'anna'@'localhost'"
      },
      {
        "id": "C",
        "text": "REVOKE CREATE UPDATE DROP ON tabela1 FROM 'anna'@'localhost'"
      },
      {
        "id": "D",
        "text": "REVOKE CREATE INSERT DELETE ON tabela1 FROM 'anna'@'localhost'"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 353,
    "text": "353. W języku JavaScript, aby sprawdzić warunek czy liczba znajduje się w przedziale (100;200>, należy zapisać:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "if (liczba > 100 || liczba <= 200)"
      },
      {
        "id": "B",
        "text": "if (liczba < 100 || liczba >= 200)"
      },
      {
        "id": "C",
        "text": "if (liczba > 100 && liczba <= 200)"
      },
      {
        "id": "D",
        "text": "if (liczba < 100 && liczba <= 200)"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 354,
    "text": "354. W wyniku działania pętli zapisanej w języku PHP zostanie wypisany ciąg liczb",
    "image": "e14/354.jpg",
    "answers": [
      {
        "id": "A",
        "text": "10 15 20 25 30 35 40 45"
      },
      {
        "id": "B",
        "text": "10 15 20 25 30 35 40 45 50"
      },
      {
        "id": "C",
        "text": "0 5 10 15 20 25 30 35 40 45"
      },
      {
        "id": "D",
        "text": "0 5 10 15 20 25 30 35 40 45 50"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 355,
    "text": "355. Które z poniższych zdań dotyczących zasad programowania w języku PHP jest prawdziwe?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Jest to język o słabej kontroli typów"
      },
      {
        "id": "B",
        "text": "Nazwy zmiennych są poprzedzone znakiem !"
      },
      {
        "id": "C",
        "text": "Deklaracja zmiennych następuje po słowie var"
      },
      {
        "id": "D",
        "text": "W nazwach zmiennych nie jest rozróżniana wielkość liter"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 356,
    "text": "356. W języku PHP instrukcja foreach jest instrukcją",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Wyboru, dla elementów tablicy"
      },
      {
        "id": "B",
        "text": "Pętli, niezależnie od typu zmiennej"
      },
      {
        "id": "C",
        "text": "Pętli, wyłącznie dla elementów tablicy"
      },
      {
        "id": "D",
        "text": "Warunkową, niezależnie od typu zmiennej"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 357,
    "text": "357. Funkcją języka PHP tworzącą ciasteczko jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "createcookie()"
      },
      {
        "id": "B",
        "text": "echocookie()"
      },
      {
        "id": "C",
        "text": "addcookie()"
      },
      {
        "id": "D",
        "text": "setcookie()"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 358,
    "text": "358. W języku PHP funkcja trim ma za zadanie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Podawać długość napisu"
      },
      {
        "id": "B",
        "text": "Porównywać dwa napisy i wypisać część wspólną"
      },
      {
        "id": "C",
        "text": "Zmniejszać napis o wskazaną w parametrze liczbę znaków"
      },
      {
        "id": "D",
        "text": "Usuwać białe znaki lub inne znaki podane w parametrze, z obu końców napisu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 359,
    "text": "359. W języku JavaScript zapis w ramce oznacza, że",
    "image": "e14/359.jpg",
    "answers": [
      {
        "id": "A",
        "text": "nazwa jest polem klasy przedmiot"
      },
      {
        "id": "B",
        "text": "nazwa jest właściwością obiektu przedmiot"
      },
      {
        "id": "C",
        "text": "zmienna x będzie przechowywać wynik działania metody nazwa"
      },
      {
        "id": "D",
        "text": "zmienna x będzie przechowywać wynik działania funkcji przedmiot"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 360,
    "text": "360. W języku JavaScript zapisano następującą funkcję. Ma ona za zadanie",
    "image": "e14/360.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Wypisać wartość odwrotną do f"
      },
      {
        "id": "B",
        "text": "Zwrócić wartość odwrotną do f"
      },
      {
        "id": "C",
        "text": "Wypisać wartość bezwzględną z f"
      },
      {
        "id": "D",
        "text": "Zwrócić wartość bezwzględną z f"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 361,
    "text": "361. Za pomocą języka PHP nie jest możliwe",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Przetwarzanie danych formularzy"
      },
      {
        "id": "B",
        "text": "Generowanie dynamicznej zawartości strony"
      },
      {
        "id": "C",
        "text": "Przetwarzanie danych zgromadzonych w bazie danych"
      },
      {
        "id": "D",
        "text": "Zmienianie dynamiczne zawartości strony HTML w przeglądarce"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 362,
    "text": "362. Działaniem przedstawionego kodu PHP będzie wypełnienie tablicy",
    "image": "e14/362.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Kolejnymi liczbami od 0 do 9 i wypisanie ich"
      },
      {
        "id": "B",
        "text": "Kolejnymi liczbami od -100 do 100 i wypisanie wartości ujemnych"
      },
      {
        "id": "C",
        "text": "10 losowymi wartościami, a następnie wypisanie wartości ujemnych"
      },
      {
        "id": "D",
        "text": "100 losowymi wartościami, a następnie wypisanie wartości dodatnich"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 363,
    "text": "363. W języku JavaScript zapisano fragment kodu. Po wykonaniu skryptu zmienna x",
    "image": "e14/363.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Będzie równa 11 i zostanie wypisana w oknie popup"
      },
      {
        "id": "B",
        "text": "Będzie równa 10 i zostanie wypisana w dokumencie HTML"
      },
      {
        "id": "C",
        "text": "Będzie równa 11 i zostanie wypisana w konsoli przeglądarki internetowej"
      },
      {
        "id": "D",
        "text": "Będzie równa 10 i zostanie wypisana w głównym oknie przeglądarki internetowej"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 364,
    "text": "364. W języku PHP, wykonując operacje na bazie danych MySQL, aby zakończyć pracę z bazą, należy wywołać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "mysqli_exit();"
      },
      {
        "id": "B",
        "text": "mysqli_close();"
      },
      {
        "id": "C",
        "text": "mysqli_commit();"
      },
      {
        "id": "D",
        "text": "mysqli_rollback();"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 365,
    "text": "365. W ramce przedstawiono kod JavaScript z błędem logicznym. Program powinien wypisywać informację, czy liczby są sobie równe czy nie, lecz nie wykonuje tego. Wskaż odpowiedź, która dotyczy błędu",
    "image": "e14/365.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Nieprawidłowo zadeklarowano zmienne"
      },
      {
        "id": "B",
        "text": "Przed klauzulą else nie powinno być średnika"
      },
      {
        "id": "C",
        "text": "W klauzuli if występuje przypisanie zamiast porównania"
      },
      {
        "id": "D",
        "text": "Instrukcje wewnątrz sekcji if oraz else powinny być zamienione miejscami"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 366,
    "text": "366. Która z zasad tworzenia części <head> języka HTML jest poprawna?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "W części <head> zawiera się część <body>"
      },
      {
        "id": "B",
        "text": "W części <head> mogą wystąpić znaczniki <meta>, <title>, <link>"
      },
      {
        "id": "C",
        "text": "W części <head> można definiować szablon strony znacznikami <div>"
      },
      {
        "id": "D",
        "text": "W części <head> nie można umieszczać kodu CSS, a jedynie odwołanie do pliku CSS"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 367,
    "text": "367. W języku HTML znacznik <strong>tekst</strong> będzie wyświetlany w ten sam sposób przez przeglądarkę co znacznik",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<b>tekst</b>"
      },
      {
        "id": "B",
        "text": "<h1>tekst</h1>"
      },
      {
        "id": "C",
        "text": "<big>tekst</big>"
      },
      {
        "id": "D",
        "text": "<sub>tekst</sub>"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 368,
    "text": "368. Aby strona WWW była responsywna, należy między innymi definiować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "jedynie znane czcionki, np. Arial"
      },
      {
        "id": "B",
        "text": "rozmiary obrazów w procentach"
      },
      {
        "id": "C",
        "text": "rozmiary obrazów wyłącznie w pikselach"
      },
      {
        "id": "D",
        "text": "rozkład strony wyłącznie za pomocą tabel"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 369,
    "text": "369. W języku HTML, aby zapisać sekcję cytatu, która może zawierać kilka paragrafów tak, by przeglądarka dodała wspólne wcięcie, należy zastosować znacznik",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<q>"
      },
      {
        "id": "B",
        "text": "<indent>"
      },
      {
        "id": "C",
        "text": "<blockq>"
      },
      {
        "id": "D",
        "text": "<blockquote>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 370,
    "text": "370. W języku CSS wartości underline, overline, blink przyjmują atrybut",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "text-style"
      },
      {
        "id": "B",
        "text": "font-style"
      },
      {
        "id": "C",
        "text": "font-weight"
      },
      {
        "id": "D",
        "text": "text-decoration"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 371,
    "text": "371. W przedstawionej definicji stylu CSS, powtarzanie dotyczy",
    "image": "e14/371.jpg",
    "answers": [
      {
        "id": "A",
        "text": "tła każdego ze znaczników akapitu"
      },
      {
        "id": "B",
        "text": "rysunku umieszczonego znacznikiem img"
      },
      {
        "id": "C",
        "text": "rysunku umieszczonego w tle strony w pionie"
      },
      {
        "id": "D",
        "text": "rysunku umieszczonego w tle strony w poziomie"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 372,
    "text": "372. W języku CSS zdefiniowano styl. Sformatowana stylem sekcja będzie zawierała obramowanie o szerokości",
    "image": "e14/372.jpg",
    "answers": [
      {
        "id": "A",
        "text": "2 px oraz marginesy wewnątrz tego obramowania"
      },
      {
        "id": "B",
        "text": "20 px oraz marginesy wewnątrz tego obramowania"
      },
      {
        "id": "C",
        "text": "2 px oraz marginesy na zewnątrz tego obramowania"
      },
      {
        "id": "D",
        "text": "20 px oraz marginesy na zewnątrz tego obramowania"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 373,
    "text": "373. Strona HTML definiuje akapit oraz rysunek. Aby rysunek został umieszczony przez przeglądarkę w tej samej linii co akapit po jego lewej stronie, należy w stylu CSS rysunku zawrzeć własność",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "float:left;"
      },
      {
        "id": "B",
        "text": "align:left;"
      },
      {
        "id": "C",
        "text": "style:left;"
      },
      {
        "id": "D",
        "text": "alt:left;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 374,
    "text": "374. W języku CSS określono formatowanie znacznika h1 według wzoru. Zakładając, że żadne inne formatowanie nie jest dodane do znacznika h1, wskaż sposób formatowania tego znacznika",
    "image": "e14/374.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 375,
    "text": "375. Aby przygotować szablon strony z trzema kolumnami ustawionymi obok siebie, można posłużyć się stylem CSS",
    "image": "e14/375.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 376,
    "text": "376. Przedstawiono fragment kodu HTML, który nie waliduje się poprawnie. Błąd walidacji tego fragmentu kodu będzie dotyczył",
    "image": "e14/376.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Braku cudzysłowu"
      },
      {
        "id": "B",
        "text": "Niedomknięcia znacznika br"
      },
      {
        "id": "C",
        "text": "Niedomknięcia znacznika img"
      },
      {
        "id": "D",
        "text": "Powtórzenia nazwy pliku graficznego"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 377,
    "text": "377. Modelem barw opisującym kolor z użyciem stożka przestrzeni barw jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "CIE"
      },
      {
        "id": "B",
        "text": "HSV"
      },
      {
        "id": "C",
        "text": "CMY"
      },
      {
        "id": "D",
        "text": "CMYK"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 378,
    "text": "378. Rozmycie Gaussa, wygładzanie, szum RGB są funkcjami programu do obróbki",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Grafiki rastrowej"
      },
      {
        "id": "B",
        "text": "Grafiki wektorowej"
      },
      {
        "id": "C",
        "text": "Ścieżki dźwiękowej"
      },
      {
        "id": "D",
        "text": "Dźwięku w formacie MIDI"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 379,
    "text": "379. Aby edytować nakładające się na siebie pojedyncze fragmenty obrazu, pozostawiając pozostałe elementy niezmienione, należy zastosować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Warstwy"
      },
      {
        "id": "B",
        "text": "Histogram"
      },
      {
        "id": "C",
        "text": "Kanał alfa"
      },
      {
        "id": "D",
        "text": "Kadrowanie"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 380,
    "text": "380. W języku SQL wykorzystywanym przez bazę danych MySQL atrybut UNIQUE polecenia CREATE TABLE",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Wymusza unikatowe nazwy pól tabeli"
      },
      {
        "id": "B",
        "text": "Blokuje możliwość wpisania wartości NULL"
      },
      {
        "id": "C",
        "text": "Jest stosowany tylko w przypadku pól liczbowych"
      },
      {
        "id": "D",
        "text": "Jest stosowany, jeśli wartość w kolumnie nie mogą się powtarzać"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 381,
    "text": "381. Funkcja agregująca MIN języka SQL ma za zadanie policzyć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Liczbę wierszy zwróconych kwerendą"
      },
      {
        "id": "B",
        "text": "Wartość minimalną kolumny zwróconej kwerendą"
      },
      {
        "id": "C",
        "text": "długość znaków w zwróconych kwerendą rekordach"
      },
      {
        "id": "D",
        "text": "Średnią wartości różnych pól rekordu zwróconego zapytaniem"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 382,
    "text": "382. Dana jest tabela o nazwie wycieczki z polami: nazwa, cena, miejsca (jako liczba wolnych miejsc). Aby dla dowolnego zbioru danych tabeli wyświetlić jedynie nazwy tych wycieczek, dla których cena jest niższa niż 2000 zł i mają przynajmniej cztery wolne miejsca, należy posłużyć się zapytaniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwa FROM wycieczki WHERE cena < 2000 AND miejsca > 3;"
      },
      {
        "id": "B",
        "text": "SELECT nazwa FROM wycieczki WHERE cena < 2000 OR miejsca > 4;"
      },
      {
        "id": "C",
        "text": "SELECT * FROM wycieczki WHERE cena < 2000 AND miejsca > 4;"
      },
      {
        "id": "D",
        "text": "SELECT * FROM wycieczki WHERE cena < 2000 OR miejsca > 3;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 383,
    "text": "383. Dana jest tabela o nazwie przedmioty z polami: ocena i uczenID. Aby policzyć średnią ocen ucznia o ID równym 7, należy posłużyć się zapytaniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "AVG SELECT ocena FROM przedmioty WHERE uczenID = 7;"
      },
      {
        "id": "B",
        "text": "SELECT AVG(ocena) FROM przedmioty WHERE uczenID = 7;"
      },
      {
        "id": "C",
        "text": "COUNT SELECT ocena FROM przedmioty WHERE uczenID = 7;"
      },
      {
        "id": "D",
        "text": "SELECT COUNT(ocena) FROM przedmioty WHERE uczenID = 7;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 384,
    "text": "384. Tabela o nazwie naprawy zawiera pola: klient, czyNaprawione. Aby usunąć te rekordy, w których pole czyNaprawione jest prawdą, należy posłużyć się poleceniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DELETE FROM naprawy;"
      },
      {
        "id": "B",
        "text": "DELETE naprawy WHERE czyNaprawione = TRUE;"
      },
      {
        "id": "C",
        "text": "DELETE FROM naprawy WHERE czyNaprawione = TRUE;"
      },
      {
        "id": "D",
        "text": "DELETE klient FROM naprawy WHERE czyNaprawione = TRUE;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 385,
    "text": "385. Formularz nadrzędny wykorzystywany do nawigacji w bazie danych pomiędzy dostępnymi w systemie formularzami, kwerendami jest nazywany formularzem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "głównym"
      },
      {
        "id": "B",
        "text": "sterującym"
      },
      {
        "id": "C",
        "text": "pierwotnym"
      },
      {
        "id": "D",
        "text": "zagnieżdżonym"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 386,
    "text": "386. W bazie danych sklepu komputerowego istnieje tabela komputery. Aby zdefiniować raport wyświetlający dla dowolnego zbioru danych tabeli, jedynie pola tabeli dla komputerów, w których jest nie mniej niż 8 GB pamięci, a procesor to Intel, można posłużyć sie kwerendą",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT * FROM komputery WHERE procesor = \"Intel\" OR pamiec < 8;"
      },
      {
        "id": "B",
        "text": "SELECT * FROM komputery WHERE procesor = \"Intel\" OR pamiec >= 8;"
      },
      {
        "id": "C",
        "text": "SELECT * FROM komputery WHERE procesor = \"Intel\" AND pamiec < 8;"
      },
      {
        "id": "D",
        "text": "SELECT * FROM komputery WHERE procesor = \"Intel\" AND pamiec >= 8;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 387,
    "text": "387. Za pomocą polecenia ALTER TABLE można",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zmienić wartości rekordów"
      },
      {
        "id": "B",
        "text": "zmienić strukturę tabeli"
      },
      {
        "id": "C",
        "text": "usunąć rekord"
      },
      {
        "id": "D",
        "text": "usunąć tabelę"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 388,
    "text": "388. W języku SQL, wykorzystywanym przez bazę danych MySQL w tabeli samochody, aby nadać wartość równą 0 dla kolumny przebieg, należy posłużyć się kwerendą",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UPDATE samochody SET przebieg = 0;"
      },
      {
        "id": "B",
        "text": "UPDATE przebieg SET 0 FROM samochody;"
      },
      {
        "id": "C",
        "text": "UPDATE przebieg SET 0 TABLE samochody;"
      },
      {
        "id": "D",
        "text": "UPDATE samochody SET przebieg VALUE 0;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 389,
    "text": "389. Przedstawione polecenie SQL, użytkownikowi adam@localhost nadaje prawa",
    "image": "e14/389.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zarządzania strukturą tabeli klienci"
      },
      {
        "id": "B",
        "text": "manipulowania danymi w tabeli klienci"
      },
      {
        "id": "C",
        "text": "zarządzania strukturą bazy danych klienci"
      },
      {
        "id": "D",
        "text": "manipulowania danymi bazy danych klienci"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 390,
    "text": "390. W języku JavaScript przedstawiona definicja jest definicją",
    "image": "e14/390.jpg",
    "answers": [
      {
        "id": "A",
        "text": "klasy"
      },
      {
        "id": "B",
        "text": "tablicy"
      },
      {
        "id": "C",
        "text": "obiektu"
      },
      {
        "id": "D",
        "text": "kolekcji"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 391,
    "text": "391. Dla każdej iteracji pętli wartość bieżącego elementu tablicy jest przypisywana do zmiennej, a wskaźnik tablicy jest przesuwany o jeden, aż do ostatniego elementu tablicy. Zdanie to jest prawdziwe dla instrukcji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "for"
      },
      {
        "id": "B",
        "text": "next"
      },
      {
        "id": "C",
        "text": "while"
      },
      {
        "id": "D",
        "text": "foreach"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 392,
    "text": "392. Wskaż zapisany w języku JavaScript warunek, który ma sprawdzić spełnienie z przypadków: 1) dowolna naturalna liczba a jest trzycyfrowa, 2) dowolna całkowita liczba b jest ujemna",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "((a>99) || (a<1000)) || (b<0)"
      },
      {
        "id": "B",
        "text": "((a>99) && (a<1000)) || (b<0)"
      },
      {
        "id": "C",
        "text": "((a>99) || (a<1000)) && (b<0)"
      },
      {
        "id": "D",
        "text": "((a>99) && (a<1000)) && (b<0)"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 393,
    "text": "393. Którą czynność gwarantującą poprawne wykonanie przedstawionego kodu JavaScript, należy wykonać przed pętlą?",
    "image": "e14/393.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Zadeklarować zmienną i"
      },
      {
        "id": "B",
        "text": "Zainicjować zmienną text"
      },
      {
        "id": "C",
        "text": "Sprawdzić rozmiar tabeli tab"
      },
      {
        "id": "D",
        "text": "Sprawdzić czy text jest typu znakowego"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 394,
    "text": "394. Hermetyzacja to zasada programowania obiektowego mówiąca o tym, że",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "klasy/obiekty mogą współdzielić ze sobą funkcjonalność"
      },
      {
        "id": "B",
        "text": "pola i metody wykorzystywane tylko przez daną klasę/obiekt są ograniczone zasięgiem private lub protected"
      },
      {
        "id": "C",
        "text": "klasy/obiekty mogą mieć zdefiniowane metody wirtualne, które są implementowane w pochodnych klasach/obiektach"
      },
      {
        "id": "D",
        "text": "typy pól w klasach/obiektach mogą być dynamicznie zmieniane w zależności od danych im przypisywanych"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 395,
    "text": "395. Przedstawiono fragment JavaScript. Po jego wykonaniu zmienna str2 będzie przechowywać",
    "image": "e14/395.jpg",
    "answers": [
      {
        "id": "A",
        "text": "vaSc"
      },
      {
        "id": "B",
        "text": "avaS"
      },
      {
        "id": "C",
        "text": "vaScri"
      },
      {
        "id": "D",
        "text": "nvaScr"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 396,
    "text": "396. Który ze sposobów wypisania tekstu nie jest zdefiniowany w języku JavaScript?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Własność innerHTML"
      },
      {
        "id": "B",
        "text": "Metoda window.alert()"
      },
      {
        "id": "C",
        "text": "Funkcja MessageBox()"
      },
      {
        "id": "D",
        "text": "Metoda document.write()"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 397,
    "text": "397. Funkcja JavaScript powinna być wywołana za każdym razem, gdy użytkownik wpisze dowolny znak do pola edycji. Którego zdarzenia należy użyć?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "onload"
      },
      {
        "id": "B",
        "text": "onclick"
      },
      {
        "id": "C",
        "text": "onkeydown"
      },
      {
        "id": "D",
        "text": "onmouseout"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 398,
    "text": "398. Która z wymienionych funkcji zapisanych językiem PHP zwraca sumę połowy a i połowy b",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "function licz($a, $b) {return $a/2 + $b;}"
      },
      {
        "id": "B",
        "text": "function licz($a, $b) {return 2/$a + 2/$b;}"
      },
      {
        "id": "C",
        "text": "function licz($a, $b) {return $a/2 + $b/2;}"
      },
      {
        "id": "D",
        "text": "function licz($a, $b) {return ($a/2 + $b)/2;}"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 399,
    "text": "399. W języku JavaScript zapisano definicję obiektu. Aby odwołać się do własności nazwisko należy zapisać",
    "image": "e14/399.jpg",
    "answers": [
      {
        "id": "A",
        "text": "osoba[1]"
      },
      {
        "id": "B",
        "text": "osoba[2]"
      },
      {
        "id": "C",
        "text": "osoba.nazwisko"
      },
      {
        "id": "D",
        "text": "osoba::nazwisko"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 400,
    "text": "400. W języku PHP zapisano fragment kodu. Plik cookie stworzony tym poleceniem",
    "image": "e14/400.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zostanie usunięty po jednym dniu od jego utworzenia"
      },
      {
        "id": "B",
        "text": "będzie przechowywany na serwerze przez jeden dzień"
      },
      {
        "id": "C",
        "text": "zostanie usunięty po jednej godzinie od jego utworzenia"
      },
      {
        "id": "D",
        "text": "będzie przechowywany na serwerze przez jedną godzinę"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 401,
    "text": "401. W języku PHP zapisano fragment kodu. Po zakończeniu pętli zmienna a przyjmie wartość",
    "image": "e14/401.jpg",
    "answers": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 402,
    "text": "402. W języku JavaScript, aby zmienić wartość atrybutu znacznika HTML, po uzyskaniu obiektu za pomocą metody getElementById należy skorzystać z",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "pola innerHTML"
      },
      {
        "id": "B",
        "text": "metody getAttribute"
      },
      {
        "id": "C",
        "text": "metody setAttribute"
      },
      {
        "id": "D",
        "text": "pola attribute i podać nazwę atrybutu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 403,
    "text": "403. W języku JavaScript zapisano kod, którego wynikiem działania jest",
    "image": "e14/403.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wyświetlenie okna z pustym polem edycyjnym"
      },
      {
        "id": "B",
        "text": "bezpośrednie wpisanie do zmiennej osoba wartości \"Adam\""
      },
      {
        "id": "C",
        "text": "pobranie z formularza wyświetlonego na stronie HTML imienia \"Adam\""
      },
      {
        "id": "D",
        "text": "wyświetlenie okna z polem edycyjnym, w którym jest wpisany domyślny tekst \"Adam\""
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 404,
    "text": "404. W języku PHP zapisano fragment kodu działającego na bazie MySQL. Jego zadaniem jest wypisanie",
    "image": "e14/404.jpg",
    "answers": [
      {
        "id": "A",
        "text": "ulicy i miasta z pierwszego zwróconego rekordu"
      },
      {
        "id": "B",
        "text": "ulicy i miasta ze wszystkich zwróconych rekordów"
      },
      {
        "id": "C",
        "text": "miasta i kodu pocztowego z pierwszego zwróconego rekordu"
      },
      {
        "id": "D",
        "text": "miasta i kodu pocztowego ze wszystkich zwróconych rekordów"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 405,
    "text": "405. Który sposób komentowania jednoliniowego jest dozwolony w języku JavaScript?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "!"
      },
      {
        "id": "B",
        "text": "#"
      },
      {
        "id": "C",
        "text": "//"
      },
      {
        "id": "D",
        "text": "<!"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 406,
    "text": "406. Znaczniki <header>, <article>, <section>, <footer> są charakterystyczne dla języka",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "HTML 5"
      },
      {
        "id": "B",
        "text": "XHTML 1.1"
      },
      {
        "id": "C",
        "text": "HTML 4.01 Strict"
      },
      {
        "id": "D",
        "text": "HTML 4.01 Transitional"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 407,
    "text": "407. Przy użyciu którego znacznika w języku HTML nie można umieścić na stronie grafiki dynamicznej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<img>"
      },
      {
        "id": "B",
        "text": "<strike>"
      },
      {
        "id": "C",
        "text": "<embed>"
      },
      {
        "id": "D",
        "text": "<object>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 408,
    "text": "408. Które ze znaczników HTML umożliwią wyświetlenie na stronie tekstu w jednym wierszu, jeżeli żadne formatowanie CSS nie zostało zdefiniowane?",
    "image": "e14/408.jpg",
    "answers": [
      {
        "id": "A",
        "text": "<p>Dobre strony </p><p style=\"letter-spacing:3px\">mojej strony</p>"
      },
      {
        "id": "B",
        "text": "<h3>Dobre strony </h3><h3 style=\"letter-spacing:3px\">mojej strony</h3>"
      },
      {
        "id": "C",
        "text": "<div>Dobre strony </div><div style=\"letter-spacing:3px\">mojej strony</div>"
      },
      {
        "id": "D",
        "text": "<span>Dobre strony </span><span style=\"letter-spacing:3px\">mojej strony</span>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 409,
    "text": "409. W języku HTML atrybut shape znacznika area, określający typ obszaru, może przyjąć wartość",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "rect, triangle, circle"
      },
      {
        "id": "B",
        "text": "poly, square, circle"
      },
      {
        "id": "C",
        "text": "rect, square, circle"
      },
      {
        "id": "D",
        "text": "rect, poly, circle"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 410,
    "text": "410. Wskaż prawidłową kolejność stylów CSS mając na uwadze ich pierwszeństwo w formatowaniu elementów strony WWW.",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Lokalny, Wewnętrzny, Zewnętrzny"
      },
      {
        "id": "B",
        "text": "Zewnętrzny, Wydzielone bloki, Lokalny"
      },
      {
        "id": "C",
        "text": "Rozciąganie stylu, Zewnętrzny, Lokalny"
      },
      {
        "id": "D",
        "text": "Wewnętrzny, Zewnętrzny, Rozciąganie stylu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 411,
    "text": "411. W folderze www znajdują się podfoldery html i style, w których zapisane są odpowiednio pliki z rozszerzeniem html i pliki z rozszerzeniem css. Chcąc dołączyć styl.css do pliku HTML należy użyć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<link rel=\"Stylesheet\" type=\"text/css\" href=\"/styl.css\" />"
      },
      {
        "id": "B",
        "text": "<link rel=\"Stylesheet\" type=\"text/css\" href=\"/style/styl.css\" />"
      },
      {
        "id": "C",
        "text": "<link rel=\"Stylesheet\" type=\"text/css\" href=\"/www/style/styl.css\" />"
      },
      {
        "id": "D",
        "text": "<link rel=\"Stylesheet\" type=\"text/css\" href=\"/../style/styl.css\" />"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 412,
    "text": "412. Chcąc zdefiniować marginesy wewnętrzne dla danych: margines górny 50px, dolny 40px, prawy 20px i lewy 30px należy użyć składni CSS",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "padding: 50px, 40px, 20px, 30px;"
      },
      {
        "id": "B",
        "text": "padding: 50px, 20px, 40px, 30px;"
      },
      {
        "id": "C",
        "text": "padding: 20px, 40px, 30px, 50px;"
      },
      {
        "id": "D",
        "text": "padding: 40px, 30px, 50px, 20px;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 413,
    "text": "413. Chcąc sformatować w stylach CSS wszystkie obrazy zawarte w akapicie, powinno się użyć selektora",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "p img"
      },
      {
        "id": "B",
        "text": "p#img"
      },
      {
        "id": "C",
        "text": "p+img"
      },
      {
        "id": "D",
        "text": "p.img"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 414,
    "text": "414. Który z atrybutów background-attachment w języku CSS należy wybrać, aby tło strony było nieruchome względem okna przeglądarki?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Scroll"
      },
      {
        "id": "B",
        "text": "Fixed"
      },
      {
        "id": "C",
        "text": "Local"
      },
      {
        "id": "D",
        "text": "Inherit"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 415,
    "text": "415. Barwa zapisana w modelu RGB(255, 0, 0) jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "żółta"
      },
      {
        "id": "B",
        "text": "zielona"
      },
      {
        "id": "C",
        "text": "niebieska"
      },
      {
        "id": "D",
        "text": "czerwona"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 416,
    "text": "416. Połączenie dwóch barw leżących po przeciwnych stronach w kole barw jest połączeniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "trójkątnym"
      },
      {
        "id": "B",
        "text": "sąsiadującym"
      },
      {
        "id": "C",
        "text": "dopełniającym"
      },
      {
        "id": "D",
        "text": "monochromatycznym"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 417,
    "text": "417. Model barw oparty na 3 parametrach: odcień, nasycenie i jasność to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "RGB"
      },
      {
        "id": "B",
        "text": "HSV"
      },
      {
        "id": "C",
        "text": "CMY"
      },
      {
        "id": "D",
        "text": "CMYK"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 418,
    "text": "418. Który z wymienionych formatów plików NIE JEST wykorzystywany do publikacji grafiki lub animacji na stronach internetowych?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "PNG"
      },
      {
        "id": "B",
        "text": "SWF"
      },
      {
        "id": "C",
        "text": "SVG"
      },
      {
        "id": "D",
        "text": "AIFF"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 419,
    "text": "419. Aby stworzyć przycisk na stronę internetową według wzoru, należy w programie do grafiki rastrowej użyć opcji",
    "image": "e14/419.jpg",
    "answers": [
      {
        "id": "A",
        "text": "propagacja wartości"
      },
      {
        "id": "B",
        "text": "zaznaczenie eliptyczne"
      },
      {
        "id": "C",
        "text": "zniekształcenia i deformowanie"
      },
      {
        "id": "D",
        "text": "zaokrąglenie lub wybranie opcji prostokąt z zaokrąglonymi rogami"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 420,
    "text": "420. Pierwszym krokiem podczas przetwarzania sygnału analogowego na cyfrowy jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "próbkowanie"
      },
      {
        "id": "B",
        "text": "kwantyzacja"
      },
      {
        "id": "C",
        "text": "filtrowanie"
      },
      {
        "id": "D",
        "text": "kodowanie"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 421,
    "text": "421. Wskaż FAŁSZYWE stwierdzenie dotyczące normalizacji sygnału dźwiękowego",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Polecenie normalizacja dostępne jest w menu programu do obróbki dźwięku"
      },
      {
        "id": "B",
        "text": "W wyniku normalizacji wyrównywany jest poziom głośności całego nagrania"
      },
      {
        "id": "C",
        "text": "Jeśli najgłośniejszy fragment dźwięku osiąga połowę skali, wszystko zostanie pogłośnione razy dwa - czyli tak, aby najgłośniejszy fragment osiągnął maksimum na skali"
      },
      {
        "id": "D",
        "text": "Normalizacja polega na zmniejszeniu poziomu najgłośniejszej próbki w sygnale do zadanej wartości i następnie w odniesieniu do niej proporcjonalnym zwiększeniu głośności reszty sygnału"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 422,
    "text": "422. Wskaż PRAWDZIWE stwierdzenie dla polecenia: CREATE TABLE IF NOT EXISTS ADRES(ulica VARCHAR(70) CHARACTER SET utf8);",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Rekordem tabeli nie może być 3 MAJA"
      },
      {
        "id": "B",
        "text": "Klauzula CHARACTER SET utf8 jest obowiązkowa"
      },
      {
        "id": "C",
        "text": "Do tabeli nie można wprowadzać ulic zawierających w nazwie polskie znaki"
      },
      {
        "id": "D",
        "text": "IF NOT EXISTS stosuje się opcjonalnie, aby upewnić się, że brak w bazie danych takiej tabeli"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 423,
    "text": "423. Jak działa instrukcja łącząca wyniki zapytań INTERSECT w języku SQL?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Zwraca listę wyników z pierwszego zapytania oraz listę wyników z drugiego zapytania, powodując domyślne usuwanie powtarzających się wierszy."
      },
      {
        "id": "B",
        "text": "Zwraca te wiersze, które wystąpiły w wyniku pierwszego zapytania, ale nie było ich w wyniku drugiego zapytania."
      },
      {
        "id": "C",
        "text": "Zwraca te wiersze, które wystąpiły w wyniku drugiego zapytania, ale nie było ich w wyniku pierwszego zapytania."
      },
      {
        "id": "D",
        "text": "Zwraca część wspólną wyników dwóch zapytań."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 424,
    "text": "424. W języku SQL dla dowolnych zestawów danych w tabeli Uczniowie, aby wybrać rekordy, które zawierają wyłącznie uczennice o imieniu \"Aleksandra\", urodzone po roku \"1998\", należy zapisać zapytanie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT * FROM Uczniowie WHERE imie=\"Aleksandra\" AND rok_urodzenia > \"1998\";"
      },
      {
        "id": "B",
        "text": "SELECT * FROM Uczniowie WHERE imie =\"Aleksandra\" OR rok_urodzenia < \"1998\";"
      },
      {
        "id": "C",
        "text": "SELECT * FROM Uczniowie WHERE imie=\"Aleksandra\" OR rok_urodzenia > \"1998\";"
      },
      {
        "id": "D",
        "text": "SELECT * FROM Uczniowie WHERE imie=\"Aleksandra\" AND rok_urodzenia < \"1998\";"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 425,
    "text": "425. Którą relację w projekcie bazy danych należy ustalić między tabelami widocznymi na rysunku zakładając, że każdy klient sklepu internetowego dokona przynajmniej dwóch zamówień?",
    "image": "e14/425.jpg",
    "answers": [
      {
        "id": "A",
        "text": "1:1"
      },
      {
        "id": "B",
        "text": "1:n, gdzie 1 jest po stronie Klienta, a wiele po stronie Zamówienia"
      },
      {
        "id": "C",
        "text": "1:n, gdzie 1 jest po stronie Zamówienia, a wiele po stronie Klienta"
      },
      {
        "id": "D",
        "text": "n:n"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 426,
    "text": "426. Wyszukując z tabeli Pracownicy wyłącznie nazwiska, w których ostatnią literą jest \"i\", można użyć kwerendy SQL",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"i\";"
      },
      {
        "id": "B",
        "text": "SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"%i%\";"
      },
      {
        "id": "C",
        "text": "SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"%i\";"
      },
      {
        "id": "D",
        "text": "SELECT nazwisko FROM Pracownicy WHERE nazwisko LIKE \"i%\";"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 427,
    "text": "427. W celu dodania rekordu do tabeli Pracownicy należy użyć polecenia SQL",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "INSERT INTO Pracownicy VALUES (\"Jan\", \"Kowalski\");"
      },
      {
        "id": "B",
        "text": "INSERT VALUES (Jan; Kowalski) INTO Pracownicy;"
      },
      {
        "id": "C",
        "text": "INSERT VALUES Pracownicy INTO (Jan, Kowalski);"
      },
      {
        "id": "D",
        "text": "INSERT (Jan), (Kowalski) INTO TABLE Pracownicy;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 428,
    "text": "428. W języku SQL w wyniku wykonania zapytania ALTER TABLE osoba DROP COLUMN grupa; zostanie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "dodana kolumna grupa"
      },
      {
        "id": "B",
        "text": "usunięta kolumna grupa"
      },
      {
        "id": "C",
        "text": "zmieniona nazwa tabeli na grupa"
      },
      {
        "id": "D",
        "text": "zmieniona nazwa kolumny na grupa"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 429,
    "text": "429. Właściwym zestawem kroków według kolejności, które należy wykonać w celu nawiązania współpracy między aplikacją internetową po stronie serwera a bazą SQL, jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zapytanie do bazy, wybór bazy, wyświetlenie na stronie WWW, zamknięcie połączenia"
      },
      {
        "id": "B",
        "text": "wybór bazy danych, nawiązanie połączenia z serwerem baz danych, zapytanie do bazy, wyświetlenie na stronie WWW, zamknięcie połączenia"
      },
      {
        "id": "C",
        "text": "wybór bazy, zapytanie do bazy, nawiązanie połączenia z serwerem baz danych, wyświetlenie na stronie WWW, zamknięcie połączenia"
      },
      {
        "id": "D",
        "text": "nawiązanie połączenia z serwerem baz danych, wybór bazy, zapytanie do bazy - wyświetlane na stronie WWW, zamknięcie połączenia"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 430,
    "text": "430. Do poprawnego i spójnego działania bazy danych niezbędne jest umieszczenie w każdej tabeli",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "kluczy PRIMARY KEY i FOREIGN KEY"
      },
      {
        "id": "B",
        "text": "klucza FOREIGN KEY z wartością NOT NULL"
      },
      {
        "id": "C",
        "text": "klucza obcego z wartością NOT NULL i UNIQUE"
      },
      {
        "id": "D",
        "text": "klucza PRIMARY KEY z wartością NOT NULL i UNIQUE"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 431,
    "text": "431. W języku PHP, dla zmiennych a = 5 i b = 3 wartość typu zmiennoprzecinkowego zwróci wyrażenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "a + b"
      },
      {
        "id": "B",
        "text": "a * b"
      },
      {
        "id": "C",
        "text": "a / b"
      },
      {
        "id": "D",
        "text": "a && b"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 432,
    "text": "432. Wartość i typ zmiennej w języku PHP można sprawdzić za pomocą funkcji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "readfile()"
      },
      {
        "id": "B",
        "text": "var_dump()"
      },
      {
        "id": "C",
        "text": "implode()"
      },
      {
        "id": "D",
        "text": "strlen()"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 433,
    "text": "433. W języku JavaScript zdefiniowana zmienna i, która ma przechowywać wynik dzielenia wynoszący 1, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "var i=3/2;"
      },
      {
        "id": "B",
        "text": "var i=Number(3/2);"
      },
      {
        "id": "C",
        "text": "var i=parseInt(3/2);"
      },
      {
        "id": "D",
        "text": "var i=parseFloat(3/2);"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 434,
    "text": "434. Wskaż BŁĘDNY opis optymalizacji kodu wynikowego programu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Jej celem jest poprawienie wydajności programu"
      },
      {
        "id": "B",
        "text": "W celu zwiększenia szybkości wykonywania kodu przez procesor może być prowadzona na różnych etapach pracy"
      },
      {
        "id": "C",
        "text": "Jej celem jest sprawdzenie zgodności z wymogami formalnymi"
      },
      {
        "id": "D",
        "text": "Powinna prowadzić do modyfikacji kodu źródłowego do postaci, w której będzie on działał szybciej"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 435,
    "text": "435. Podaj wynik działania programu zapisanego w języku JavaScript, znajdującego się w ramce, po podaniu na wejściu wartości 5",
    "image": "e14/435.jpg",
    "answers": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "120"
      },
      {
        "id": "C",
        "text": "125"
      },
      {
        "id": "D",
        "text": "625"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 436,
    "text": "436. W języku PHP chcąc wyświetlić ciąg n znaków @, należy użyć funkcji",
    "image": "e14/436.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 437,
    "text": "437. Językami programowania działającymi po stronie serwera są:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Java, C#, AJAX, Ruby, PHP"
      },
      {
        "id": "B",
        "text": "Java, C#, Python, Ruby, PHP"
      },
      {
        "id": "C",
        "text": "C#, Python, Ruby, PHP, JavaScript"
      },
      {
        "id": "D",
        "text": "Java, C#, Python, ActionScript, PHP"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 438,
    "text": "438. Instrukcja przypisania elementu do tablicy w języku JavaScript dotyczy tablicy",
    "image": "e14/438.jpg",
    "answers": [
      {
        "id": "A",
        "text": "statycznej"
      },
      {
        "id": "B",
        "text": "asocjacyjnej"
      },
      {
        "id": "C",
        "text": "numerycznej"
      },
      {
        "id": "D",
        "text": "wielowymiarowej"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 439,
    "text": "439. Jakie elementy wypisze funkcja wypisz(2) stworzona w języku JavaScript?",
    "image": "e14/439.jpg",
    "answers": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "2 3 4 6"
      },
      {
        "id": "C",
        "text": "3 4 6 8"
      },
      {
        "id": "D",
        "text": "3 4 6"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 440,
    "text": "440. W formularzu dokumentu PHP istnieje pole <input name=\"im\" />. Po wprowadzeniu przez użytkownika ciągu znaków \"Janek\", w celu dodania zawartości pola do bazy danych, w tablicy $_POST zawarty jest element",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "im o indeksie Janek"
      },
      {
        "id": "B",
        "text": "Janek o indeksie im"
      },
      {
        "id": "C",
        "text": "im z kolejnym numerem indeksu"
      },
      {
        "id": "D",
        "text": "Janek z kolejnym numerem indeksu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 441,
    "text": "441. W celu zmodyfikowania tekstu \"ala ma psa\" na \"ALA MA PSA\" należy użyć funkcji PHP",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "strtoupper(\"ala ma psa\");"
      },
      {
        "id": "B",
        "text": "strtolower(\"ala ma psa\");"
      },
      {
        "id": "C",
        "text": "ucfirst(\"ala ma psa\");"
      },
      {
        "id": "D",
        "text": "strstr(\"ala ma psa\");"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 442,
    "text": "442. W kodzie JavaScript pętla zostanie wykonana",
    "image": "e14/442.jpg",
    "answers": [
      {
        "id": "A",
        "text": "2 razy"
      },
      {
        "id": "B",
        "text": "3 razy"
      },
      {
        "id": "C",
        "text": "26 razy"
      },
      {
        "id": "D",
        "text": "27 razy"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 443,
    "text": "443. Poprawne udokumentowanie wzorca weryfikacji pola nazwa w części kodu aplikacji JavaScript to",
    "image": "e14/443.jpg",
    "answers": [
      {
        "id": "A",
        "text": "/* Pole nazwa może składać się z dowolnego ciągu cyfr (z wyłączeniem 0), małych i dużych liter. */"
      },
      {
        "id": "B",
        "text": "/* Pole nazwa powinno składać się w kolejności: z ciągu cyfr (z wyłączeniem 0), następnie dużej litery i ciągu małych liter. */"
      },
      {
        "id": "C",
        "text": "/* Pole nazwa musi składać się w kolejności: z ciągu cyfr (z wyłączeniem 0), następnie dużej litery i dwóch małych liter. */"
      },
      {
        "id": "D",
        "text": "/* Pole nazwa może zawierać dowolny ciąg cyfr (z wyłączeniem 0), następnie musi zawierać dużą literę i ciąg minimum dwóch małych liter. */"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 444,
    "text": "444. Włączenie do kodu skryptu zawartości pliku egzamin.php, zawierającego kod PHP, wymaga dodania instrukcji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "fgets(\"egzamin.php\");"
      },
      {
        "id": "B",
        "text": "fopen(\"egzamin.php\");"
      },
      {
        "id": "C",
        "text": "getfile(\"egzamin.php\");"
      },
      {
        "id": "D",
        "text": "include(\"egzamin.php\");"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 445,
    "text": "445. Do utworzenia kopii zapasowej bazy danych w MySQL należy użyć polecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "mysqlslap"
      },
      {
        "id": "B",
        "text": "mysqlreplicate"
      },
      {
        "id": "C",
        "text": "mysqldump"
      },
      {
        "id": "D",
        "text": "mysqlcheck"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 446,
    "text": "446. Deklaracja typu dokumentu HTML: <!DOCTYPE HTML> oznacza, że kod jest napisany w wersji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 447,
    "text": "447. Dołączenie zewnętrznego arkusza stylów do kodu HTML jest realizowane przy użyciu znacznika",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<css>"
      },
      {
        "id": "B",
        "text": "<link>"
      },
      {
        "id": "C",
        "text": "<style>"
      },
      {
        "id": "D",
        "text": "<meta>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 448,
    "text": "448. Który z rysunków obrazuje efekt działania przedstawionego fragmentu kodu HTML?",
    "image": "e14/448.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 449,
    "text": "449. Przedstawione pole input umożliwi",
    "image": "e14/449.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wpisanie hasła"
      },
      {
        "id": "B",
        "text": "zaznaczenie opcji"
      },
      {
        "id": "C",
        "text": "wpisanie dowolnego tekstu"
      },
      {
        "id": "D",
        "text": "wybranie opcji z listy o wartościach text1 i text2"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 450,
    "text": "450. W języku HTML zdefiniowano hiperłącze ze znakiem #. Co stanie się po wybraniu przedstawionego odsyłacza?",
    "image": "e14/450.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Zostanie wywołany skrypt o nazwie dane"
      },
      {
        "id": "B",
        "text": "Otworzy się osobna karta przeglądarki o nazwie dane"
      },
      {
        "id": "C",
        "text": "Zostanie wybrany adres względny URL o nazwie dane"
      },
      {
        "id": "D",
        "text": "Strona przewinie się do elementu o wartości id równej dane"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 451,
    "text": "451. Podana definicja stylu CSS sprawi, że nagłówki pierwszego stopnia będą",
    "image": "e14/451.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wyjustowane, pisane wielkimi literami, a odstępy między liniami będą ustawione na 10 px"
      },
      {
        "id": "B",
        "text": "wyjustowane, pisane małymi literami, a odstępy między literami będą ustawione na 10 px"
      },
      {
        "id": "C",
        "text": "wyśrodkowane, pisane małymi literami, a odstępy między liniami będą ustawione na 10 px"
      },
      {
        "id": "D",
        "text": "wyśrodkowane, pisane wielkimi literami, a odstępy między literami będą ustawione na 10 px"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 452,
    "text": "452. Jak zdefiniować w języku CSS formatowanie hiperłącza, żeby nieodwiedzony link był w kolorze żółtym, a odwiedzony w kolorze zielonym?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "a:visited {color: yellow;} a:link{color: green;}"
      },
      {
        "id": "B",
        "text": "a:hover {color: green;} a:link{color: yellow;}"
      },
      {
        "id": "C",
        "text": "a:hover {color: yellow;} a:visited{color: green;}"
      },
      {
        "id": "D",
        "text": "a:link {color: yellow;} a:visited{color: green;}"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 453,
    "text": "453. W języku CSS zdefiniowano formatowanie dla stopki. Aby użyć tego formatowania dla bloku opisanego znacznikiem div, należy zapisać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<div \"stopka\">"
      },
      {
        "id": "B",
        "text": "<div id=\"stopka\">"
      },
      {
        "id": "C",
        "text": "<div title=\"stopka\">"
      },
      {
        "id": "D",
        "text": "<div class=\"stopka\">"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 454,
    "text": "454. Przedstawiono efekt formatowania CSS oraz kod HTML. Jak należy zdefiniować styl, aby osiągnąć takie formatowanie?",
    "image": "e14/454.jpg",
    "answers": [
      {
        "id": "A",
        "text": ".first-line {font-size: 200%; color:brown;}"
      },
      {
        "id": "B",
        "text": "#first-line {font-size: 200%; color:brown;}"
      },
      {
        "id": "C",
        "text": "p::first-line {font-size: 200%; color:brown;}"
      },
      {
        "id": "D",
        "text": "p.first-line {font-size: 200%; color:brown;}"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 455,
    "text": "455. Przedstawione formatowanie CSS sprawi, że dla prezentowanego nagłówka trzeciego stopnia",
    "image": "e14/455.jpg",
    "answers": [
      {
        "id": "A",
        "text": "tło będzie szare"
      },
      {
        "id": "B",
        "text": "tło będzie pomarańczowe"
      },
      {
        "id": "C",
        "text": "kolor czcionki będzie szary"
      },
      {
        "id": "D",
        "text": "kolor czcionki będzie pomarańczowy"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 456,
    "text": "456. W języku XHTML zapisano fragment kodu, który zawiera błąd walidacji. Na czym polega ten błąd?",
    "image": "e14/456.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Znacznik <br> powinien być zamknięty"
      },
      {
        "id": "B",
        "text": "Nie istnieje nagłówek szóstego stopnia"
      },
      {
        "id": "C",
        "text": "Znaczniki należy pisać wielkimi literami"
      },
      {
        "id": "D",
        "text": "Znacznik <b> nie może być zagnieżdżany w znaczniku"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 457,
    "text": "457. Kolor zapisany kodem heksadecymalnym: #1510FE w kodzie RGB będzie miał wartość",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "rgb(15,10,FE)"
      },
      {
        "id": "B",
        "text": "rgb(21,16,FE)"
      },
      {
        "id": "C",
        "text": "rgb(21,16,254)"
      },
      {
        "id": "D",
        "text": "rgb(21,16,255)"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 458,
    "text": "458. Edytując grafikę w edytorze grafiki rastrowej należy pozbyć się kolorów z rysunku tak, aby obraz był w odcieniach szarości. Można do tego efektu wykorzystać funkcję",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "desaturacji"
      },
      {
        "id": "B",
        "text": "kadrowania"
      },
      {
        "id": "C",
        "text": "szumu RGB"
      },
      {
        "id": "D",
        "text": "filtru rozmycia"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 459,
    "text": "459. W edytorze grafiki wektorowej stworzono przedstawiony kształt, który powstał z dwóch figur: trójkąta i koła. W celu stworzenia tego kształtu, po narysowaniu figur i odpowiednim ich ustawieniu, należy skorzystać z funkcji",
    "image": "e14/459.jpg",
    "answers": [
      {
        "id": "A",
        "text": "sumy"
      },
      {
        "id": "B",
        "text": "różnicy"
      },
      {
        "id": "C",
        "text": "rozdzielenia"
      },
      {
        "id": "D",
        "text": "wykluczenia"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 460,
    "text": "460. Aby zapisać prostą animację na potrzeby strony internetowej, można skorzystać z formatu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "GIF"
      },
      {
        "id": "B",
        "text": "JPG"
      },
      {
        "id": "C",
        "text": "PNG"
      },
      {
        "id": "D",
        "text": "CDR"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 461,
    "text": "461. Tworząc tabelę w języku SQL, zdefiniowano dla kolumny klucz główny. Aby zabezpieczyć ją przed wstawieniem wartości pustej, należy zastosować atrybut",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "NULL"
      },
      {
        "id": "B",
        "text": "UNIQUE"
      },
      {
        "id": "C",
        "text": "DEFAULT"
      },
      {
        "id": "D",
        "text": "NOT NULL"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 462,
    "text": "462. Dana jest tabela mieszkania zawierająca kolumny o nazwach: adres, metraz, ile_pokoi, standard, status, cena. Wykonanie przedstawionej kwerendy SQL SELECT sprawi, że zostaną wyświetlone",
    "image": "e14/462.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Wszystkie dane tych mieszkań, które mają co najmniej 3 pokoje"
      },
      {
        "id": "B",
        "text": "Metraż oraz cena tych mieszkań, które mają więcej niż 3 pokoje"
      },
      {
        "id": "C",
        "text": "Metraż oraz cena tych mieszkań, które mają co najmniej niż 3 pokoje"
      },
      {
        "id": "D",
        "text": "Wszystkie dane oprócz adresu tych mieszkań, które mają więcej niż 3 pokoje"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 463,
    "text": "463. Do tabeli pracownicy wpisano rekordy. Co zostanie wyświetlone po uruchomieniu kwerendy SQL SELECT podanej w ramce?",
    "image": "e14/463.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Wartość 5400, czyli najwyższa pensja pracownika."
      },
      {
        "id": "B",
        "text": "Wartość 19500, czyli suma wszystkich pensji pracowników."
      },
      {
        "id": "C",
        "text": "Wartość 10000, czyli suma pensji pracownika o id=4 oraz o id=6"
      },
      {
        "id": "D",
        "text": "Dwie wartości: 4600 i 5400, jako pensje pracowników wyższe niż 4000"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 464,
    "text": "464. Na przedstawionej tabeli samochody wykonano zapytanie SQL: SELECT model FROM samochody WHERE rocznik=2016; W wyniku podanego zapytania zostaną zwrócone następujące wartości:",
    "image": "e14/464.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Fiat, Opel, Toyota"
      },
      {
        "id": "B",
        "text": "Czerwony, grafitowy"
      },
      {
        "id": "C",
        "text": "Punto, Corsa, Corolla"
      },
      {
        "id": "D",
        "text": "Punto, Corsa, Astra, Corolla, Yaris"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 465,
    "text": "465. Baza danych ma dwie tabele połączone relacją 1..n. Którą klauzulą SQL należy połączyć tabele, aby wybrać korespondujące ze sobą wartości z pól obu tabel?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "OUTER LINK"
      },
      {
        "id": "B",
        "text": "INNER LINK"
      },
      {
        "id": "C",
        "text": "JOIN"
      },
      {
        "id": "D",
        "text": "AND"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 466,
    "text": "466. Zdefiniowanie klucza obcego jest niezbędne do utworzenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "transakcji"
      },
      {
        "id": "B",
        "text": "relacji 1..n"
      },
      {
        "id": "C",
        "text": "relacji 1..1"
      },
      {
        "id": "D",
        "text": "klucza podstawowego"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 467,
    "text": "467. Zgodnie z właściwościami ACID, dotyczącym wykonania transakcji, wymaganie trwałości (ang. durability) oznacza, że",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "transakcja może być w pewnych warunkach podzielona na dwa niezależne etapy"
      },
      {
        "id": "B",
        "text": "w czasie wykonania transakcji dane mogą być modyfikowane przez inne transakcje"
      },
      {
        "id": "C",
        "text": "w przypadku naruszenia spójności bazy danych transakcja usuwa tabele z kluczami obcymi"
      },
      {
        "id": "D",
        "text": "dane zatwierdzone przez transakcję powinny być dostępne niezależnie od tego, co się będzie działo po jej zakończeniu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 468,
    "text": "468. Baza danych zawiera tabelę faktury o polach: numer, data, id_klienta, wartość, status. Każdego dnia generowany jest raport faktur z bieżącego dnia. Wyświetlane są jedynie numery i wartości faktur. Która z kwerend SQL służy do stworzenia tego raportu?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT * FROM faktury;"
      },
      {
        "id": "B",
        "text": "SELECT numer,wartość FROM faktury;"
      },
      {
        "id": "C",
        "text": "SELECT * FROM faktury WHERE data=CURRENT_DATE();"
      },
      {
        "id": "D",
        "text": "SELECT numer, wartosc FROM faktury WHERE data=CURRENT_DATE();"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 469,
    "text": "469. Polecenie SQL, które usuwa bazę danych o nazwie firma, ma postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DROP firma;"
      },
      {
        "id": "B",
        "text": "ALTER firma DROP;"
      },
      {
        "id": "C",
        "text": "DROP DATABASE firma;"
      },
      {
        "id": "D",
        "text": "ALTER firma DROP DATABASE;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 470,
    "text": "470. Zastosowanie kwerendy SQL: DELETE FROM mieszkania WHERE status=1; spowoduje usunięcie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "tabeli mieszkania z bazy danych"
      },
      {
        "id": "B",
        "text": "pola o nazwie status z tabeli mieszkania"
      },
      {
        "id": "C",
        "text": "rekordów, w których pole status jest równe 1, z tabeli mieszkania"
      },
      {
        "id": "D",
        "text": "tabel, w których pole status jest równe 1, z bazy danych mieszkania"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 471,
    "text": "471. Aby przywrócić bazę danych z kopii bezpieczeństwa na serwerze MSSQL, należy posłużyć się poleceniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "EXPORT DATABASE"
      },
      {
        "id": "B",
        "text": "BACKUP DATABASE"
      },
      {
        "id": "C",
        "text": "RESTORE DATABASE"
      },
      {
        "id": "D",
        "text": "UNBACKUP DATABASE"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 472,
    "text": "472. W języku SQL wykonano przedstawione w ramce polecenia GRANT. Kto będzie miał prawo do przeglądania danych oraz ich zmiany?",
    "image": "e14/472.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Adam i Anna"
      },
      {
        "id": "B",
        "text": "Tylko Tomasz"
      },
      {
        "id": "C",
        "text": "Tomasz i Anna"
      },
      {
        "id": "D",
        "text": "Tomasz i Adam"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 473,
    "text": "473. W języku PHP zastosowano funkcję is_int(). Które z podanych wywołań tej funkcji zwróci wartość TRUE?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "is_int(\"135\")"
      },
      {
        "id": "B",
        "text": "is_int(NULL)"
      },
      {
        "id": "C",
        "text": "is_int(13.5)"
      },
      {
        "id": "D",
        "text": "is_int(135)"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 474,
    "text": "474. W języku JavaScript należy zapisać warunek, który będzie spełniony, gdy zmienna a będzie dowolną liczbą naturalną dodatnią (bez 0) lub gdy zmienna b będzie dowolną liczbą z przedziału domkniętego od 10 do 100. Użyte w tym warunku wyrażenie logiczne będzie miało postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "(a>0) || ((b>=10) || (b<=100))"
      },
      {
        "id": "B",
        "text": "(a>0) && ((b>=10) || (b<=100))"
      },
      {
        "id": "C",
        "text": "(a>0) || ((b>=10) && (b<=100))"
      },
      {
        "id": "D",
        "text": "(a>0) && ((b>=10) && (b<=100))"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 475,
    "text": "475. Dana jest tabela firmy zawierająca następujące kolumny: nazwa, adres, NIP, obrot (obrót w ostatnim miesiącu), rozliczenie, status. Wykonanie kwerendy SQL SELECT sprawi, że zostaną wyświetlone",
    "image": "e14/475.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wszystkie dane firm, które w ostatnim miesiącu miały obrót mniejszy niż 4000 zł"
      },
      {
        "id": "B",
        "text": "wszystkie dane firm, które w ostatnim miesiącu miały obrót co najmniej 4000 zł"
      },
      {
        "id": "C",
        "text": "jedynie nazwa oraz numer NIP firm, które w ostatnim miesiącu miały obrót co najmniej 4000 zł"
      },
      {
        "id": "D",
        "text": "jedynie nazwa oraz numer NIP firm, które w ostatnim miesiącu miały obrót mniejszy niż 4000 zł"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 476,
    "text": "476. W języku JavaScript wynik działania instrukcji zmienna++; będzie taki sam jak instrukcji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zmienna--;"
      },
      {
        "id": "B",
        "text": "zmienna+=1;"
      },
      {
        "id": "C",
        "text": "zmienna=zmienna+10;"
      },
      {
        "id": "D",
        "text": "zmienna===zmienna+1;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 477,
    "text": "477. W języku PHP zmienna predefiniowana $_SESSION zawiera",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zmienne zarejestrowane w bieżącej sesji"
      },
      {
        "id": "B",
        "text": "spis zarejestrowanych sesji na serwerze WWW"
      },
      {
        "id": "C",
        "text": "zmienne przesyłane do skryptu za pomocą formularza"
      },
      {
        "id": "D",
        "text": "zmienne przesyłane do skryptu za pomocą ciastek (cookie)"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 478,
    "text": "478. Przedstawiony kod źródłowy ma za zadanie wyświetlić",
    "image": "e14/478.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wylosowane liczby od 1 do 99"
      },
      {
        "id": "B",
        "text": "kolejne liczby od 1 do 100"
      },
      {
        "id": "C",
        "text": "wczytane z klawiatury liczby tak długo, aż nie zostanie wczytana wartość 0"
      },
      {
        "id": "D",
        "text": "losowe liczby od 0 do 100 tak długo, aż nie zostanie wylosowana wartość 0"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 479,
    "text": "479. W języku JavaScript należy odwołać się do elementu zawartego w pierwszym paragrafie przedstawionego fragmentu strony HTML. Można to wykonać za pomocą funkcji",
    "image": "e14/479.jpg",
    "answers": [
      {
        "id": "A",
        "text": "getElement(\"p\");"
      },
      {
        "id": "B",
        "text": "getElementById(\"p1\");"
      },
      {
        "id": "C",
        "text": "getElementByTagName(\"p\")[0];"
      },
      {
        "id": "D",
        "text": "getElementByClassName(\"p.1\")[0];"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 480,
    "text": "480. O przedstawionym obiekcie języka JavaScript można powiedzieć, że ma",
    "image": "e14/480.jpg",
    "answers": [
      {
        "id": "A",
        "text": "trzy metody"
      },
      {
        "id": "B",
        "text": "trzy właściwości"
      },
      {
        "id": "C",
        "text": "dwie metody i jedną właściwość"
      },
      {
        "id": "D",
        "text": "dwie właściwości i jedną metodę"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 481,
    "text": "481. W języku JavaScript stworzono funkcję o nazwie liczba_max porównującą trzy liczby naturalne pobrane z parametrów funkcji i zwracającą maksymalną z nich. Prawidłowe wywołanie takiej funkcji wraz z pobraniem jej wyniku będzie miało postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "liczba_max(a,b,c);"
      },
      {
        "id": "B",
        "text": "liczba_max(a,b,c,wynik);"
      },
      {
        "id": "C",
        "text": "liczba_max(a,b,c)=wynik;"
      },
      {
        "id": "D",
        "text": "var wynik=liczba_max(a,b,c);"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 482,
    "text": "482. Które z zadań programistycznych powinno być wykonane po stronie serwera?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Zmiana stylu HTML na stronie wywołana przesunięciem kursora"
      },
      {
        "id": "B",
        "text": "Zapisanie danych pobranych z aplikacji internetowej w bazie danych"
      },
      {
        "id": "C",
        "text": "Sprawdzenie danych wpisanych do pola tekstowego w czasie rzeczywistym"
      },
      {
        "id": "D",
        "text": "Ukrywanie i pokazywanie elementów strony w zależności od aktualnego stanu kursora"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 483,
    "text": "483. Język JavaScrypt ma obsługę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "obiektów DOM"
      },
      {
        "id": "B",
        "text": "funkcji wirtualnych"
      },
      {
        "id": "C",
        "text": "klas abstrakcyjnych"
      },
      {
        "id": "D",
        "text": "wysyłania ciastek z tą samą informacją do wielu klientów strony"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 484,
    "text": "484. W prezentowanym kodzie PHP w miejscu kropek powinno znaleźć się polecenie",
    "image": "e14/484.jpg",
    "answers": [
      {
        "id": "A",
        "text": "mysqli_fetch_row($zapytanie);"
      },
      {
        "id": "B",
        "text": "mysqli_free_result($zapytanie);"
      },
      {
        "id": "C",
        "text": "mysqli_num_fields($zapytanie);"
      },
      {
        "id": "D",
        "text": "mysqli_query($zapytanie);"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 485,
    "text": "485. Który z elementów dokumentacji aplikacji powinien znaleźć się w dokumentacji użytkownika?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Opis kodu źródłowego"
      },
      {
        "id": "B",
        "text": "Opis obsługi funkcji systemu"
      },
      {
        "id": "C",
        "text": "Opis wykorzystanej technologii i bibliotek"
      },
      {
        "id": "D",
        "text": "Opis algorytmów zastosowanych w kodzie"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 486,
    "text": "486. Znacznik <s> w języku HTML powoduje",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "migotanie tekstu"
      },
      {
        "id": "B",
        "text": "pochylenie tekstu"
      },
      {
        "id": "C",
        "text": "podkreślenie tekstu"
      },
      {
        "id": "D",
        "text": "przekreślenie tekstu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 487,
    "text": "487. Metainformacja \"Description\" zawarta w pliku źródłowym HTML powinna zawierać",
    "image": "e14/487.jpg",
    "answers": [
      {
        "id": "A",
        "text": "opis, co znajduje się na stronie"
      },
      {
        "id": "B",
        "text": "informację, kto jest autorem strony"
      },
      {
        "id": "C",
        "text": "wykazy kluczowe, z których korzystają wyszukiwarki sieciowe"
      },
      {
        "id": "D",
        "text": "nazwę programu, przy użyciu którego została stworzona strona"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 488,
    "text": "488. Który opis odnosi się do metody POST wysyłania formularza?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Może być zapisana jako zakładka w przeglądarce internetowej"
      },
      {
        "id": "B",
        "text": "Dane przesyłane są za pomocą adresu URL, czyli w sposób widoczny dla użytkownika"
      },
      {
        "id": "C",
        "text": "Posiada dodatkowe ograniczenia jakim jest długość adresu - maksymalnie 255 znaków"
      },
      {
        "id": "D",
        "text": "Jest wskazana, gdy przesyłane są informacje poufne, np. hasło, numer telefonu czy numer karty kredytowej"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 489,
    "text": "489. Atrybut value w polu formularza XHTML",
    "image": "e14/489.jpg",
    "answers": [
      {
        "id": "A",
        "text": "ogranicza długość pola"
      },
      {
        "id": "B",
        "text": "wskazuje na nazwę pola"
      },
      {
        "id": "C",
        "text": "ustawia pole tylko do odczytu"
      },
      {
        "id": "D",
        "text": "wskazuje odpowiedź domyślną"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 490,
    "text": "490. W języku HTML zapis < spowoduje wyświetlenie w przeglądarce znaku",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": ">"
      },
      {
        "id": "B",
        "text": "&"
      },
      {
        "id": "C",
        "text": "\""
      },
      {
        "id": "D",
        "text": "<"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 491,
    "text": "491. Przy użyciu jakiego znacznika HTML otrzymamy tekst napisany czcionką o stałej szerokości znaku, który uwzględnia dodatkowe spacje, tabulacje i znaki końca linii?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<ins> ... </ins>"
      },
      {
        "id": "B",
        "text": "<pre> ... </pre>"
      },
      {
        "id": "C",
        "text": "<code> ... </code>"
      },
      {
        "id": "D",
        "text": "<blockquote> ... </blockquote>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 492,
    "text": "492. W celu uzyskania efektu widocznego na rysunku, w kodzie HTML, należy umieścić znacznik skrótu <abbr> z atrybutem",
    "image": "e14/492.jpg",
    "answers": [
      {
        "id": "A",
        "text": "alt"
      },
      {
        "id": "B",
        "text": "dfn"
      },
      {
        "id": "C",
        "text": "title"
      },
      {
        "id": "D",
        "text": "name"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 493,
    "text": "493. W HTML, aby wstawić obrazek z tekstem przyległym, znajdującym się pośrodku obrazka, należy zapisać znacznik",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<img src=\"/obrazek.png\" alt=\"obraz1\" hspace=\"30px\"> tekst"
      },
      {
        "id": "B",
        "text": "<img src=\"/obrazek.png\" alt=\"obraz2\" align=\"middle\"> tekst"
      },
      {
        "id": "C",
        "text": "<img src=\"/obrazek.png\" alt=\"obraz3\" height=\"50%\"> tekst"
      },
      {
        "id": "D",
        "text": "<img src=\"/obrazek.png\" alt=\"obraz4\"> tekst"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 494,
    "text": "494. Który styl CSS pozwoli zdefiniować wyrównanie tekstu do prawej strony?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<p style=\"font: right\">tekst</p>"
      },
      {
        "id": "B",
        "text": "<p style=\"align: right\">tekst</p>"
      },
      {
        "id": "C",
        "text": "<p style=\"position: right\">tekst</p>"
      },
      {
        "id": "D",
        "text": "<p style=\"text-align: right\">tekst</p>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 495,
    "text": "495. Przedstawiono kod tabeli 3x2. Której z modyfikacji w jej drugim wierszu należy dokonać, aby tabela wyglądała jak na obrazku z niewidocznym wierszem?",
    "image": "e14/495.jpg",
    "answers": [
      {
        "id": "A",
        "text": "<tr style=\"clear: none\">"
      },
      {
        "id": "B",
        "text": "<tr style=\"display: none\">"
      },
      {
        "id": "C",
        "text": "<tr style=\"visibility: hidden\">"
      },
      {
        "id": "D",
        "text": "<tr style=\"display: table-cell\">"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 496,
    "text": "496. Który zapis znacznika <div> może wystąpić w dokumencie HTML tylko jeden raz, a ponowne użycie tego zapisu spowoduje wygenerowanie błędów podczas walidacji dokumentu?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<div class=\"klasa1 klasa2\">"
      },
      {
        "id": "B",
        "text": "<div id=\"identyfikator\">"
      },
      {
        "id": "C",
        "text": "<div class=\"klasa\">"
      },
      {
        "id": "D",
        "text": "<div>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 497,
    "text": "497. Przedstawiona linia kreskowana w stylu obramowania CSS jest określona właściwością",
    "image": "e14/497.jpg",
    "answers": [
      {
        "id": "A",
        "text": "solid"
      },
      {
        "id": "B",
        "text": "double"
      },
      {
        "id": "C",
        "text": "dotted"
      },
      {
        "id": "D",
        "text": "dashed"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 498,
    "text": "498. Systemem zarządzania treścią pozwalającym na łatwe utworzenie i aktualizację serwisu WWW jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "CMS"
      },
      {
        "id": "B",
        "text": "SQL"
      },
      {
        "id": "C",
        "text": "PHP"
      },
      {
        "id": "D",
        "text": "CSS"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 499,
    "text": "499. W podanym kodzie HTML przedstawiony styl CSS jest stylem",
    "image": "e14/499.jpg",
    "answers": [
      {
        "id": "A",
        "text": "nagłówkowym"
      },
      {
        "id": "B",
        "text": "dynamicznym"
      },
      {
        "id": "C",
        "text": "zewnętrznym"
      },
      {
        "id": "D",
        "text": "lokalnym"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 500,
    "text": "500. Kolor zapisany w notacji heksadecymalnej #0000FF to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "czarny"
      },
      {
        "id": "B",
        "text": "zielony"
      },
      {
        "id": "C",
        "text": "niebieski"
      },
      {
        "id": "D",
        "text": "czerwony"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 501,
    "text": "501. Które stwierdzenie odnosi się do skalowania obrazu?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Łączy lub odejmuje kształty"
      },
      {
        "id": "B",
        "text": "Polega na zmianie sposobu zapisu obrazu tak, aby zmienić sposób kompresji"
      },
      {
        "id": "C",
        "text": "Powoduje zmianę rozmiaru obrazu bez zmieniania ważnej zawartości wizualnej"
      },
      {
        "id": "D",
        "text": "Powoduje wycięcie z oryginalnego obrazu określonego jego fragmentu z celu uzyskania optymalnego widoku"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 502,
    "text": "502. W języku HTML atrybutem znacznika video, który włącza tryb odtwarzania w kółko, jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "loop"
      },
      {
        "id": "B",
        "text": "muted"
      },
      {
        "id": "C",
        "text": "poster"
      },
      {
        "id": "D",
        "text": "controls"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 503,
    "text": "503. W języku HTML, aby dodać animację FLASH (z rozszerzeniem .swf) na stronę internetową, należy użyć znacznika",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<img>"
      },
      {
        "id": "B",
        "text": "<audio>"
      },
      {
        "id": "C",
        "text": "<video>"
      },
      {
        "id": "D",
        "text": "<object>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 504,
    "text": "504. Formatem plików dźwiękowych z kompresją bezstratną jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "MP3"
      },
      {
        "id": "B",
        "text": "WAW"
      },
      {
        "id": "C",
        "text": "FLAC"
      },
      {
        "id": "D",
        "text": "MPEG"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 505,
    "text": "505. Na tabeli muzyka, przedstawionej na rysunku, zostało wykonane następujące zapytanie SQL. Jaki wynik zwróci ta kwerenda?",
    "image": "e14/505.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Czesław"
      },
      {
        "id": "B",
        "text": "pusty wynik"
      },
      {
        "id": "C",
        "text": "Czesław, Niemen"
      },
      {
        "id": "D",
        "text": "Czesław, Czechowski"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 506,
    "text": "506. Jaki wynik zwróci zapytanie z ramki wykonane na przedstawionej tabeli?",
    "image": "e14/506.jpg",
    "answers": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 507,
    "text": "507. W relacyjnym modelu baz danych krotkami nazywa się",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "liczbę rekordów tabeli"
      },
      {
        "id": "B",
        "text": "wszystkie wiersze tabeli wraz z wierszem nagłówkowym"
      },
      {
        "id": "C",
        "text": "wszystkie kolumny tabeli, które zawierają atrybuty obiektu"
      },
      {
        "id": "D",
        "text": "wiersze tabeli z wyjątkiem wiersza nagłówkowego, w którym umieszcza się nazwy kolumn"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 508,
    "text": "508. Co można powiedzieć o normalizacji przedstawionej tabeli?",
    "image": "e14/508.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Tabela nie jest znormalizowana"
      },
      {
        "id": "B",
        "text": "Tabela jest w trzeciej postaci normalnej"
      },
      {
        "id": "C",
        "text": "Tabela jest w drugiej postaci normalnej"
      },
      {
        "id": "D",
        "text": "Tabela jest w pierwszej postaci normalnej"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 509,
    "text": "509. Które zapytanie SQL dla tabeli pracownicy utworzonej według schematu: id, imie, nazwisko, plec, zarobek, obliczy osobno średni zarobek kobiet i średni zarobek mężczyzn?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT AVG(zarobek) FROM pracownicy GROUP BY plec;"
      },
      {
        "id": "B",
        "text": "SELECT AVG(zarobek) FROM pracownicy AS sredni_zarobek;"
      },
      {
        "id": "C",
        "text": "SELECT AVG(zarobek) FROM pracownicy WHERE plec='k' AND plec='m';"
      },
      {
        "id": "D",
        "text": "SELECT AVG(zarobek) FROM pracownicy GROUP BY plec HAVING plec='k' AND plec='m';"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 510,
    "text": "510. Które polecenie SQL zamieni w tabeli tab w kolumnie kol wartość Ania na Zosia?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UPDATE tab SET kol='Zosia' WHERE kol='Ania';"
      },
      {
        "id": "B",
        "text": "UPDATE tab SET kol='Ania' WHERE kol='Zosia';"
      },
      {
        "id": "C",
        "text": "ALTER TABLE tab CHANGE kol='Zosia' kol='Ania';"
      },
      {
        "id": "D",
        "text": "ALTER TABLE tab CHANGE kol='Ania' kol='Zosia';"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 511,
    "text": "511. Aby w tworzonej w języku SQL tabeli praca dodać w kolumnie stawka warunek, że musi przyjmować rzeczywiste wartości dodatnie mniejsze od 50, należy użyć zapisu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "... stawka float CHECK(stawka IN (0, 50.00))"
      },
      {
        "id": "B",
        "text": "... stawka float CHECK(stawka>0 OR stawka<50.00)"
      },
      {
        "id": "C",
        "text": "... stawka float CHECK(stawka>0 AND stawka<50.00)"
      },
      {
        "id": "D",
        "text": "... stawka float CHECK(stawka BETWEEN 0 AND 50.00)"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 512,
    "text": "512. W jaki sposób wykonanie podanej w ramce kwerendy SQL wpłynie na tabelę pracownicy?",
    "image": "e14/512.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Zmieni typ danych kolumny plec na znakowy o stałej długości 9"
      },
      {
        "id": "B",
        "text": "Doda kolumnę plec ze znakowym typem danych o stałej długości 9"
      },
      {
        "id": "C",
        "text": "Zmieni typ danych kolumny plec na znakowy o zmiennej długości 9"
      },
      {
        "id": "D",
        "text": "Doda kolumnę plec ze znakowym typem danych o zmiennej długości 9"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 513,
    "text": "513. Wykonując raport w systemie obsługi relacyjnych baz danych, umożliwia się",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "analizę wybranych danych"
      },
      {
        "id": "B",
        "text": "usuwanie danych w tabelach"
      },
      {
        "id": "C",
        "text": "dodawanie danych w tabelach"
      },
      {
        "id": "D",
        "text": "aktualizowanie danych w tabelach"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 514,
    "text": "514. Przedstawiona instrukcja JavaScript wyświetli",
    "image": "e14/514.jpg",
    "answers": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "true"
      },
      {
        "id": "D",
        "text": "false"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 515,
    "text": "515. Która wartość tekstowa nie pasuje do podanego w ramce wzorca wyrażenia regularnego?",
    "image": "e14/515.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Kowalski"
      },
      {
        "id": "B",
        "text": "Kasprowicza"
      },
      {
        "id": "C",
        "text": "Jelenia Góra"
      },
      {
        "id": "D",
        "text": "Nowakowska-Kowalska"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 516,
    "text": "516. Który modyfikator wskazuje podany opis?",
    "image": "e14/516.jpg",
    "answers": [
      {
        "id": "A",
        "text": "static"
      },
      {
        "id": "B",
        "text": "public"
      },
      {
        "id": "C",
        "text": "private"
      },
      {
        "id": "D",
        "text": "protected"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 517,
    "text": "517. Tworzenie i przypisanie do zmiennej tablicy asocjacyjnej zrealizuje się w PHP zapisem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "$tab = array (1, 2, 3, 4);"
      },
      {
        "id": "B",
        "text": "$tab = array (array (1, 2), array (3, 4));"
      },
      {
        "id": "C",
        "text": "$tab = array (); $tab[] = array (1, 2, 3, 4);"
      },
      {
        "id": "D",
        "text": "$tab = array (\"a\" => 1, \"b\" => 2, \"c\" => 3);"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 518,
    "text": "518. W której technologii nie jest możliwe przetwarzanie danych użytkownika wprowadzanych na stronie WWW?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "CSS"
      },
      {
        "id": "B",
        "text": "PHP"
      },
      {
        "id": "C",
        "text": "AJAX"
      },
      {
        "id": "D",
        "text": "JavaScript"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 519,
    "text": "519. W programowaniu obiektowym w języku JavaScript użyty w przedstawionym kodzie zapis: this.zawod oznacza",
    "image": "e14/519.jpg",
    "answers": [
      {
        "id": "A",
        "text": "klasę"
      },
      {
        "id": "B",
        "text": "metodę"
      },
      {
        "id": "C",
        "text": "konstruktor"
      },
      {
        "id": "D",
        "text": "właściwość"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 520,
    "text": "520. W języku PHP sumę logiczną oznacza operator",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "!"
      },
      {
        "id": "B",
        "text": "||"
      },
      {
        "id": "C",
        "text": "+"
      },
      {
        "id": "D",
        "text": "&&"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 521,
    "text": "521. W jakim formacie będzie wyświetlana data po uruchomieniu przedstawionego kodu?",
    "image": "e14/521.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Monday, 10 July 2017"
      },
      {
        "id": "B",
        "text": "10, Monday July 2017"
      },
      {
        "id": "C",
        "text": "Monday, 10th July 17"
      },
      {
        "id": "D",
        "text": "Monday, 10th July 2017"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 522,
    "text": "522. Wynikiem działania pętli for w przedstawionym kodzie PHP jest wyświetlenie liczb",
    "image": "e14/522.jpg",
    "answers": [
      {
        "id": "A",
        "text": "1 0"
      },
      {
        "id": "B",
        "text": "1 1"
      },
      {
        "id": "C",
        "text": "1 0 1"
      },
      {
        "id": "D",
        "text": "1 0 1 0"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 523,
    "text": "523. W JavaScript wywołanie zdarzenia onKeydown nastąpi wtedy, gdy klawisz",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "myszki został naciśnięty"
      },
      {
        "id": "B",
        "text": "myszki został zwolniony"
      },
      {
        "id": "C",
        "text": "klawiatury został naciśnięty"
      },
      {
        "id": "D",
        "text": "klawiatury został zwolniony"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 524,
    "text": "524. Po wykonaniu przedstawionego kodu JavaScript wyświetli się wartość",
    "image": "e14/524.jpg",
    "answers": [
      {
        "id": "A",
        "text": "11"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "13"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 525,
    "text": "525. Wciśnięcie przycisku o treści \"niebieski\" spowoduje wykonanie przedstawionego kodu JavaScript. Jaki będzie efekt jego działania?",
    "image": "e14/525.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Zmiana koloru przycisku na niebieski"
      },
      {
        "id": "B",
        "text": "Zmiana koloru tekstu \"i skrypt\" na niebieski"
      },
      {
        "id": "C",
        "text": "Zmiana koloru tekstu \"Przykładowy tekst\" na niebieski"
      },
      {
        "id": "D",
        "text": "Zmiana koloru tekstu \"Przykładowy tekst i skrypt\" na niebieski"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 526,
    "text": "526. Którego znacznika nie należy umieszczać w nagłówku dokumentu HTML?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<h2>"
      },
      {
        "id": "B",
        "text": "<link>"
      },
      {
        "id": "C",
        "text": "<title>"
      },
      {
        "id": "D",
        "text": "<meta>"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 527,
    "text": "527. Znacznik języka HTML, który służy do oznaczenia fragmentu tekstu jako kodu komputerowego, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<em> </em>"
      },
      {
        "id": "B",
        "text": "<span> </span>"
      },
      {
        "id": "C",
        "text": "<code> </code>"
      },
      {
        "id": "D",
        "text": "<blockquote> </blockquote>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 528,
    "text": "528. W języku HTML dla hiperłącza wartość atrybutu target, która odpowiada za załadowanie strony do nowego okna lub karty, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "_parent"
      },
      {
        "id": "B",
        "text": "_blank"
      },
      {
        "id": "C",
        "text": "_self"
      },
      {
        "id": "D",
        "text": "_top"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 529,
    "text": "529. Znacznik <ins> w języku HTML służy do oznaczenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "cytowanego bloku tekstu."
      },
      {
        "id": "B",
        "text": "tekstu przeformatowanego."
      },
      {
        "id": "C",
        "text": "tekstu, który został dodany."
      },
      {
        "id": "D",
        "text": "tekstu, który został usunięty."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 530,
    "text": "530. Do określenia listy definicji w kodzie HTML używa się znacznika",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<dl>"
      },
      {
        "id": "B",
        "text": "<td>"
      },
      {
        "id": "C",
        "text": "<abbr>"
      },
      {
        "id": "D",
        "text": "<label>"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 531,
    "text": "531. Jaki rezultat zostanie wyświetlony po wykonaniu przedstawionego kodu HTML?",
    "image": "e14/531.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 532,
    "text": "532. W języku HTML, aby scalić w pionie dwie sąsiednie komórki w kolumnie tabeli, należy zastosować atrybut",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "colspan"
      },
      {
        "id": "B",
        "text": "rowspan"
      },
      {
        "id": "C",
        "text": "cellpadding"
      },
      {
        "id": "D",
        "text": "cellspacing"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 533,
    "text": "533. Chcąc dodać do listy rozwijalnej przedstawionego formularza HTML możliwość zaznaczenia kilku opcji jednocześnie, należy w znaczniku select dodać atrybut",
    "image": "e14/533.jpg",
    "answers": [
      {
        "id": "A",
        "text": "size"
      },
      {
        "id": "B",
        "text": "value"
      },
      {
        "id": "C",
        "text": "multiple"
      },
      {
        "id": "D",
        "text": "disabled"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 534,
    "text": "534. Jak nazywa się metoda dołączania arkusza stylów do dokumentu HTML użyta w przedstawionym kodzie?",
    "image": "e14/534.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Styl zewnętrzny."
      },
      {
        "id": "B",
        "text": "Styl wewnętrzny."
      },
      {
        "id": "C",
        "text": "Styl wpisany, lokalny."
      },
      {
        "id": "D",
        "text": "Styl alternatywny, zewnętrzny."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 535,
    "text": "535. Tekst paragrafu, wyśrodkowany w pionie, opisuje w CSS reguła",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "vertical-align: middle"
      },
      {
        "id": "B",
        "text": "vertical-align: center"
      },
      {
        "id": "C",
        "text": "text-align: center"
      },
      {
        "id": "D",
        "text": "align: middle"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 536,
    "text": "536. Dla akapitu zdefiniowano styl CSS. Które właściwości stylu CSS poprawnie opisują dla akapitu krój czcionki: Arial; rozmiar czcionki: 16 pt; styl czcionki: pochylenie?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "p{font-style: Arial; size: 16px; font-weight: normal;}"
      },
      {
        "id": "B",
        "text": "p{font-family: Arial; font-size: 16pt; font-style: italic;}"
      },
      {
        "id": "C",
        "text": "p{font-style: Arial; font-size: 16pt; font-variant: normal;}"
      },
      {
        "id": "D",
        "text": "p{font-family: Arial; font-size: 16px; font-variant: normal;}"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 537,
    "text": "537. W stylach CSS, aby ustalić styl linii obramowania jako linię kreskową, należy zastosować wartość",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "solid"
      },
      {
        "id": "B",
        "text": "dotted"
      },
      {
        "id": "C",
        "text": "dashed"
      },
      {
        "id": "D",
        "text": "groove"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 538,
    "text": "538. W CSS symbolem jednostki miary, wyrażonej w punktach edytorskich, jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "em"
      },
      {
        "id": "B",
        "text": "px"
      },
      {
        "id": "C",
        "text": "pt"
      },
      {
        "id": "D",
        "text": "in"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 539,
    "text": "539. Transformację w stylach CSS, polegającą na zamianie tylko pierwszych liter wszystkich wyrazów na wielkie, otrzymamy stosując polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "underline"
      },
      {
        "id": "B",
        "text": "capitalize"
      },
      {
        "id": "C",
        "text": "uppercase"
      },
      {
        "id": "D",
        "text": "lowercase"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 540,
    "text": "540. Podany styl tworzy obramowanie pojedyncze, o następujących cechach:",
    "image": "e14/540.jpg",
    "answers": [
      {
        "id": "A",
        "text": "krawędź górna jest koloru czerwonego, krawędź prawa koloru niebieskiego, krawędź dolna koloru zielonego, krawędź lewa koloru żółtego."
      },
      {
        "id": "B",
        "text": "krawędź prawa jest koloru czerwonego, krawędź dolna koloru niebieskiego, krawędź lewa koloru zielonego, krawędź górna koloru żółtego."
      },
      {
        "id": "C",
        "text": "krawędź górna jest koloru czerwonego, krawędź lewa koloru niebieskiego, krawędź dolna koloru zielonego, krawędź prawa koloru żółtego."
      },
      {
        "id": "D",
        "text": "krawędź lewa jest koloru czerwonego, krawędź dolna koloru niebieskiego, krawędź prawa koloru zielonego, krawędź górna koloru żółtego."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 541,
    "text": "541. Która z operacji nie wpłynie na rozmiar / wielkość zajmowanej pamięci pliku graficznego?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Skalowanie obrazu za pomocą atrybutów HTML."
      },
      {
        "id": "B",
        "text": "Zmiana rozdzielczości obrazu."
      },
      {
        "id": "C",
        "text": "Interpolacja."
      },
      {
        "id": "D",
        "text": "Kompresja."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 542,
    "text": "542. Bitmapa jest obrazem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "rastrowym."
      },
      {
        "id": "B",
        "text": "analogowym."
      },
      {
        "id": "C",
        "text": "wektorowym."
      },
      {
        "id": "D",
        "text": "interakcyjnym."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 543,
    "text": "543. Jednostka ppi (pixels per inch)",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "określa rozdzielczość obrazów rastrowych."
      },
      {
        "id": "B",
        "text": "określa rozdzielczości obrazów generowanych przez drukarki i plotery."
      },
      {
        "id": "C",
        "text": "jest parametrem określającym rozdzielczość cyfrowych urządzeń wykonujących pomiary."
      },
      {
        "id": "D",
        "text": "jest jednostką rozdzielczości skanerów określająca częstość wykonywanych próbkowań obrazu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 544,
    "text": "544. Jaką funkcję pełni kwerenda krzyżowa w bazie MS Access?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Modyfikuje istniejące dane w tabeli"
      },
      {
        "id": "B",
        "text": "Usuwa rekordy tabel według podanych kryteriów."
      },
      {
        "id": "C",
        "text": "Dołącza do wybranej tabeli rekordy z innej tabeli."
      },
      {
        "id": "D",
        "text": "Prezentuje zliczone wartości z pola i przyporządkowuje je w wiersze i kolumny."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 545,
    "text": "545. Funkcja CONCAT() w języku SQL odpowiada za",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "usunięcie wskazanego tekstu."
      },
      {
        "id": "B",
        "text": "łączenie wyświetlanego tekstu."
      },
      {
        "id": "C",
        "text": "przycięcie wyświetlanego tekstu."
      },
      {
        "id": "D",
        "text": "wyznaczenie z wejściowego tekstu podłańcucha znaków."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 546,
    "text": "546. Na podstawie tabeli Towar wykonano następujące zapytanie SQL: Jaki będzie wynik tej operacji?",
    "image": "e14/546.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Zeszyt A5 w linie, Zeszyt A5, Kredki 24 kolory, Papier ksero A4"
      },
      {
        "id": "B",
        "text": "Zeszyt A5, Zeszyt A5 w linie, Kredki 24 kolory, Papier ksero A4"
      },
      {
        "id": "C",
        "text": "Papier ksero A4, Kredki 24 kolory, Zeszyt A5, Zeszyt A5 w linie"
      },
      {
        "id": "D",
        "text": "Papier ksero A4, Kredki 24 kolory, Zeszyt A5, Zeszyt A5 w linie\nPapier ksero A4, Kredki 24 kolory, Zeszyt A5 w linie, Zeszyt A5"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 547,
    "text": "547. W tabeli produkt znajdują się przedmioty wyprodukowane po 2000 roku, z polami nazwa i rok_produkcji. Klauzula SQL wyświetli listę przedmiotów wyprodukowanych",
    "image": "e14/547.jpg",
    "answers": [
      {
        "id": "A",
        "text": "w roku 2017."
      },
      {
        "id": "B",
        "text": "po roku 2017."
      },
      {
        "id": "C",
        "text": "przed rokiem 2017."
      },
      {
        "id": "D",
        "text": "w latach innych niż 2017."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 548,
    "text": "548. Struktura prostych baz danych, w których wszystkie dane są przechowywane w jednej tabeli, nazywana jest modelem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "sieciowym"
      },
      {
        "id": "B",
        "text": "relacyjnym."
      },
      {
        "id": "C",
        "text": "jednorodnym."
      },
      {
        "id": "D",
        "text": "hierarchicznym."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 549,
    "text": "549. W przedstawionym diagramie bazy danych biblioteka, elementy: czytelnik, wypozyczenie i ksiazka są",
    "image": "e14/549.jpg",
    "answers": [
      {
        "id": "A",
        "text": "atrybutami."
      },
      {
        "id": "B",
        "text": "krotkami."
      },
      {
        "id": "C",
        "text": "encjami."
      },
      {
        "id": "D",
        "text": "polami."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 550,
    "text": "550. W języku zapytań SQL, aby dodać do tabeli Towar kolumnę rozmiar typu znakowego o maksymalnej długości 20 znaków, należy wykonać polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ALTER TABLE Towar ADD rozmiar varchar(20);"
      },
      {
        "id": "B",
        "text": "ALTER TABLE Towar DROP COLUMN rozmiar varchar(20);"
      },
      {
        "id": "C",
        "text": "ALTER TABLE Towar ALTER COLUMN rozmiar varchar(20);"
      },
      {
        "id": "D",
        "text": "ALTER TABLE Towar CREATE COLUMN rozmiar varchar(20);"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 551,
    "text": "551. Liczba 0x142, zapisana w kodzie skryptu JavaScript, ma postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "dziesiętną."
      },
      {
        "id": "B",
        "text": "dwójkową."
      },
      {
        "id": "C",
        "text": "ósemkową."
      },
      {
        "id": "D",
        "text": "szesnastkową."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 552,
    "text": "552. W aplikacjach internetowych tablice asocjacyjne to tablice, w których",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "indeks jest łańcuchem tekstowym."
      },
      {
        "id": "B",
        "text": "istnieją przynajmniej dwa wymiary."
      },
      {
        "id": "C",
        "text": "elementy tablicy są zawsze indeksowane od 0."
      },
      {
        "id": "D",
        "text": "w każdej komórce tablicy przechowywana jest inna tablica."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 553,
    "text": "553. Odwołaniem do imienia Agata, zawartym w przedstawionej tablicy JavaScript, jest element",
    "image": "e14/553.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Imiona[4];"
      },
      {
        "id": "B",
        "text": "Imiona[3];"
      },
      {
        "id": "C",
        "text": "Imiona[Agata];"
      },
      {
        "id": "D",
        "text": "Imiona['Agata'];"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 554,
    "text": "554. Specjalna metoda danej klasy stosowana w programowaniu obiektowym, wywoływana automatycznie podczas tworzenia obiektu,której podstawowym zadaniem jest zwykle zainicjowanie pól, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "obiekt."
      },
      {
        "id": "B",
        "text": "destruktor."
      },
      {
        "id": "C",
        "text": "konstruktor."
      },
      {
        "id": "D",
        "text": "specyfikator dostępu."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 555,
    "text": "555. Wskaż poprawny zapis instrukcji zapisanej w języku JavaScript.",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "document.write(\"Liczba π z dokładnością do 2 miejsc po przecinku ≈ \" + 3.14 );"
      },
      {
        "id": "B",
        "text": "document.write(\"Liczba π z dokładnością do 2 miejsc po przecinku ≈ \" ; 3.14 );"
      },
      {
        "id": "C",
        "text": "document.write(\"Liczba π z dokładnością do 2 miejsc po przecinku ≈ \" . 3.14 );"
      },
      {
        "id": "D",
        "text": "document.write(\"Liczba π z dokładnością do 2 miejsc po przecinku ≈ \" 3.14 );"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 556,
    "text": "556. W języku skryptowym JavaScript operatory: ||, && należą do grupy operatorów",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "bitowych."
      },
      {
        "id": "B",
        "text": "logicznych."
      },
      {
        "id": "C",
        "text": "przypisania."
      },
      {
        "id": "D",
        "text": "arytmetycznych."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 557,
    "text": "557. Wskaż pętlę, która w języku JavaScript wyświetli sześć kolejnych liczb parzystych.",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "for(i=2;i<12;i+=2) {document.write(i);}"
      },
      {
        "id": "B",
        "text": "for(i=2;i<=12;i+=2) {document.write(i);}"
      },
      {
        "id": "C",
        "text": "for(i=2;i<12;i++) {i++; document.write(i);}"
      },
      {
        "id": "D",
        "text": "for(i=2;i<=12;i++) {i=i+2; document.write(i);}"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 558,
    "text": "558. Wybierz poprawną definicję funkcji w języku JavaScript.",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "nazwa_funkcji(argumenty) {instrukcje;}"
      },
      {
        "id": "B",
        "text": "new nazwa_funkcji(argumenty) {instrukcje;}"
      },
      {
        "id": "C",
        "text": "function nazwa_funkcji(argumenty) {instrukcje;}"
      },
      {
        "id": "D",
        "text": "typ_funkcji nazwa_funkcji(argumenty) {instrukcje;}"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 559,
    "text": "559. W języku PHP zapisywanie danych do pliku realizuje funkcja?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "fgets()"
      },
      {
        "id": "B",
        "text": "fputs()"
      },
      {
        "id": "C",
        "text": "fopen()"
      },
      {
        "id": "D",
        "text": "freadfile()"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 560,
    "text": "560. Plikiem konfiguracyjnym, który pozwala na zdefiniowanie ustawień PHP dla całego serwera, jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "my.ini"
      },
      {
        "id": "B",
        "text": "php.ini"
      },
      {
        "id": "C",
        "text": "httpd.conf"
      },
      {
        "id": "D",
        "text": "config.inc.php"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 561,
    "text": "561. Efektem wykonania przedstawionego kodu PHP jest wyświetlenie komunikatu",
    "image": "e14/561.jpg",
    "answers": [
      {
        "id": "A",
        "text": "warunek1"
      },
      {
        "id": "B",
        "text": "warunek2"
      },
      {
        "id": "C",
        "text": "warunek3"
      },
      {
        "id": "D",
        "text": "warunek4"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 562,
    "text": "562. Ile razy zostanie wykonana pętla zapisana w przedstawionym skrypcie PHP?",
    "image": "e14/562.jpg",
    "answers": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 563,
    "text": "563. Jaką wartość zwróci funkcja empty($a); zapisana w języku PHP, gdy zmienna $a przyjmie wartość liczbową równą 0?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "TRUE"
      },
      {
        "id": "C",
        "text": "NULL"
      },
      {
        "id": "D",
        "text": "FALSE"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 564,
    "text": "564. W języku JavaScript, funkcja matematyczna Math.pow() służy do wyznaczenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "potęgi liczby."
      },
      {
        "id": "B",
        "text": "wartości przybliżonej liczby."
      },
      {
        "id": "C",
        "text": "wartości bezwzględnej liczby."
      },
      {
        "id": "D",
        "text": "pierwiastka kwadratowego liczby."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 565,
    "text": "565. Jakie wartości muszą przyjmować zmienne w funkcji biblioteki mysqli, aby połączyć się z serwerem i bazą danych?",
    "image": "e14/565.jpg",
    "answers": [
      {
        "id": "A",
        "text": "adres serwera - $a, nazwa bazy danych - $b, login - $c, hasło - $d"
      },
      {
        "id": "B",
        "text": "adres serwera - $c, nazwa bazy danych - $d, login - $a, hasło - $b"
      },
      {
        "id": "C",
        "text": "adres serwera - $c, nazwa bazy danych - $d, login - $b, hasło - $a"
      },
      {
        "id": "D",
        "text": "adres serwera - $a, nazwa bazy danych - $d, login - $b, hasło - $c"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 566,
    "text": "566. W którym z bloków należy umieścić warunek pętli?",
    "image": "e14/566.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 567,
    "text": "567. Ile razy należy zapisać instrukcję warunkową, aby zaimplementować w języku programowania przedstawiony algorytm?",
    "image": "e14/567.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Jeden raz."
      },
      {
        "id": "B",
        "text": "Dwa razy."
      },
      {
        "id": "C",
        "text": "Trzy razy."
      },
      {
        "id": "D",
        "text": "Cztery razy."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 568,
    "text": "568. W języku C, aby zadeklarować stałą, należy użyć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "const"
      },
      {
        "id": "B",
        "text": "static"
      },
      {
        "id": "C",
        "text": "#CONST"
      },
      {
        "id": "D",
        "text": "#INCLUDE"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 569,
    "text": "569. Które z wyrażeń logicznych zapisanych w języku C sprawdza, czy zmienna o nazwie zm1 należy do przedziału (6, 203> ?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "(zm1 > 6) || (zm1 <= 203)"
      },
      {
        "id": "B",
        "text": "(zm1 > 6) || (zm1 != 203)"
      },
      {
        "id": "C",
        "text": "(zm1 > 6) && (zm1 <= 203)"
      },
      {
        "id": "D",
        "text": "(zm1 > 6) && (zm1 != 203)"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 570,
    "text": "570. Kwalifikatory dostępu: private, protected i public definiują mechanizm",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "przeładowania."
      },
      {
        "id": "B",
        "text": "polimorfizmu."
      },
      {
        "id": "C",
        "text": "hermetyzacji."
      },
      {
        "id": "D",
        "text": "rekurencji."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 571,
    "text": "571. bool gotowe=true;\ncout << gotowe;\nCo zostanie wypisane w wyniku wykonania przedstawionych instrukcji?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "1"
      },
      {
        "id": "C",
        "text": "tak"
      },
      {
        "id": "D",
        "text": "nie"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 572,
    "text": "572. Za pomocą którego słowa kluczowego deklaruje się zmienną w języku JavaScript?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "var"
      },
      {
        "id": "B",
        "text": "new"
      },
      {
        "id": "C",
        "text": "variable"
      },
      {
        "id": "D",
        "text": "instanceof"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 573,
    "text": "573. Zadaniem przedstawionej pętli jest",
    "image": "e14/573.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wypełnienie tabeli Ksiazka danymi."
      },
      {
        "id": "B",
        "text": "wypisanie na ekranie danych tabeli Ksiazka."
      },
      {
        "id": "C",
        "text": "utworzenie dziesięciu obiektów typu Ksiazka."
      },
      {
        "id": "D",
        "text": "utworzenie jednego obiektu typu mojeKsiazki."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 574,
    "text": "574. Która z deklaracji funkcji w języku C++ ma parametr wejściowy typu rzeczywistego, a zwraca wartość całkowitą?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "void fun1(int a);"
      },
      {
        "id": "B",
        "text": "int fun1(float a);"
      },
      {
        "id": "C",
        "text": "float fun1(int a);"
      },
      {
        "id": "D",
        "text": "float fun1(void a);"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 575,
    "text": "575. Jednym z wariantów testów jednostkowych jest analiza ścieżek, która polega na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "testowaniu wartości brzegowych zbioru danych."
      },
      {
        "id": "B",
        "text": "testowaniu obiektów pod względem inicjacji i zwolnienia zarezerwowanej pamięci."
      },
      {
        "id": "C",
        "text": "określeniu punktu początkowego i końcowego oraz badaniu możliwych dróg pomiędzy tymi\npunktami."
      },
      {
        "id": "D",
        "text": "utworzeniu kilku zbiorów danych o podobnym sposobie przetwarzania i użyciu ich do\nprzeprowadzenia testu."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 576,
    "text": "576. Który sposób komentowania w języku PHP pozwala na zapis bloku komentarza w kilku liniach?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#"
      },
      {
        "id": "B",
        "text": "/ /"
      },
      {
        "id": "C",
        "text": "/*   */"
      },
      {
        "id": "D",
        "text": "<!--  -->"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 577,
    "text": "577. Pole lub zbiór pól jednoznacznie identyfikujący każdy pojedynczy wiersz w tabeli w bazie danych to klucz",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "inkrementacyjny."
      },
      {
        "id": "B",
        "text": "podstawowy."
      },
      {
        "id": "C",
        "text": "przestawny."
      },
      {
        "id": "D",
        "text": "obcy."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 578,
    "text": "578. W języku SQL, aby zmienić strukturę tabeli, np. poprzez dodanie lub usunięcie kolumny, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UPDATE"
      },
      {
        "id": "B",
        "text": "TRUNCATE"
      },
      {
        "id": "C",
        "text": "DROP TABLE"
      },
      {
        "id": "D",
        "text": "ALTER TABLE"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 579,
    "text": "579. Atrybut kolumny NOT NULL jest wymagany w przypadku",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "klucza podstawowego."
      },
      {
        "id": "B",
        "text": "użycia atrybutu DEFAULT."
      },
      {
        "id": "C",
        "text": "definicji wszystkich pól tabeli."
      },
      {
        "id": "D",
        "text": "definicji wszystkich pól typu numerycznego."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 580,
    "text": "580. Aby za pomocą polecenia SELECT wyświetlić nazwiska osób mieszkających na osiedlu tak, aby te nazwiska nie powtarzały się, należy zapisać zapytanie w postaci",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwisko FROM mieszkancy ORDER BY nazwisko;"
      },
      {
        "id": "B",
        "text": "SELECT DISTINCT nazwisko FROM mieszkancy;"
      },
      {
        "id": "C",
        "text": "SELECT TOP 10 nazwisko FROM mieszkancy;"
      },
      {
        "id": "D",
        "text": "SELECT AVG(nazwisko) FROM mieszkancy;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 581,
    "text": "581. Baza danych zawiera dane multimedialne, co wiąże się z przechowywaniem dużych ilości danych binarnych. Do takich danych należy zastosować typ",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "BLOB"
      },
      {
        "id": "B",
        "text": "ENUM"
      },
      {
        "id": "C",
        "text": "DOUBLE"
      },
      {
        "id": "D",
        "text": "LONGTEXT"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 582,
    "text": "582. W tabeli Recepta pola Imie i Nazwisko dotyczą pacjenta, na którego recepta jest wydana. Którą kwerendę należy zastosować, aby dla wszystkich recept uzyskać datę wystawienia recepty oraz imię i nazwisko lekarza wystawiającego?",
    "image": "e14/582.jpg",
    "answers": [
      {
        "id": "A",
        "text": "SELECT Imie, Nazwisko, DataWystawienia FROM Recepta;"
      },
      {
        "id": "B",
        "text": "SELECT Lekarz.Imie, Lekarz.Nazwisko, DataWystawienia FROM Recepta;"
      },
      {
        "id": "C",
        "text": "SELECT Imie, DataWystawienia FROM Recepta JOIN Lekarz ON Recepta.Lekarz_id = Lekarz.id;"
      },
      {
        "id": "D",
        "text": "SELECT Lekarz.Imie, Lekarz.Nazwisko, DataWystawienia FROM Recepta JOIN Lekarz ON Recepta.Lekarz_id = Lekarz.id;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 583,
    "text": "583. W bazach danych do prezentacji danych spełniających określone warunki należy utworzyć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "raport."
      },
      {
        "id": "B",
        "text": "relację."
      },
      {
        "id": "C",
        "text": "formularz."
      },
      {
        "id": "D",
        "text": "makropolecenie."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 584,
    "text": "584. Które polecenie służy do zmiany wartości o jeden w polu RokStudiów w tabeli Studenci dla studentów, którzy studiują na roku 1÷4?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UPDATE Studenci, RokStudiow+1 WHERE RokStudiow < 5;"
      },
      {
        "id": "B",
        "text": "UPDATE Studenci SET RokStudiow WHERE RokStudiow < 5;"
      },
      {
        "id": "C",
        "text": "UPDATE RokStudiow SET RokStudiow++ WHERE RokStudiow < 5;"
      },
      {
        "id": "D",
        "text": "UPDATE Studenci SET RokStudiow = RokStudiow+1 WHERE RokStudiow\n< 5;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 585,
    "text": "585. Wskaż różnicę pomiędzy poleceniami DROP TABLE i TRUNCATE TABLE.",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DROP TABLE usuwa tabelę, a TRUNCATE TABLE modyfikuje w niej dane spełniające\nwarunek."
      },
      {
        "id": "B",
        "text": "DROP TABLE usuwa tabelę, a TRUNCATE TABLE usuwa wszystkie dane, pozostawiając\npustą tabelę."
      },
      {
        "id": "C",
        "text": "Obydwa polecenia usuwają jedynie zawartość tabeli, ale tylko polecenie DROP TABLE może\nbyć cofnięte."
      },
      {
        "id": "D",
        "text": "Obydwa polecenia usuwają tabelę wraz zawartością, ale tylko polecenie TRUNCATE TABLE może być cofnięte."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 586,
    "text": "586. Aby nadać użytkownikowi uprawnienia do tabel w bazie danych, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "GRANT"
      },
      {
        "id": "B",
        "text": "SELECT"
      },
      {
        "id": "C",
        "text": "CREATE"
      },
      {
        "id": "D",
        "text": "REVOKE"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 587,
    "text": "587. Aby przesłać dane za pomocą funkcji mysqli_query() w skrypcie PHP, który wstawia do bazy danych dane pobrane z formularza ze strony internetowej, jako jednego z parametrów należy użyć kwerendy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "INSERT INTO"
      },
      {
        "id": "B",
        "text": "UPDATE"
      },
      {
        "id": "C",
        "text": "SELECT"
      },
      {
        "id": "D",
        "text": "ALTER"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 588,
    "text": "588. Przedstawiony fragment kodu PHP działa poprawnie i ma za zadanie wyświetlić na stronie internetowej dane pobrane kwerendą z bazy danych. Z ilu pól zostaną wyświetlone dane?",
    "image": "e14/588.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Z jednego pola."
      },
      {
        "id": "B",
        "text": "Z dwóch pól."
      },
      {
        "id": "C",
        "text": "Z trzech pól."
      },
      {
        "id": "D",
        "text": "Z czterech pól."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 589,
    "text": "589. Na rysunku przedstawiono strukturę bloków strony internetowej. Który z fragmentów formatowania strony pasuje do takiego układu? (Dla uproszczenia pominięto właściwości koloru tła, wysokości i czcionki)",
    "image": "e14/589.jpg",
    "answers": [
      {
        "id": "A",
        "text": "#pierwszy {float:left; width:30%; } \n#drugi {clear:both; width:70%; } \n#trzeci {float:left; width:70%; } \n#czwarty {clear:both; }"
      },
      {
        "id": "B",
        "text": "#pierwszy {float:left; width:30%;} \n#drugi {float:left; width:70%;} \n#trzeci {float:left; width:70%;} \n#czwarty {clear:both; }"
      },
      {
        "id": "C",
        "text": "#pierwszy { width: 30%; } \n#drugi { width: 70%; } \n#trzeci { width: 70%; } \n#czwarty { width: 100%; }"
      },
      {
        "id": "D",
        "text": "#pierwszy{float:left; width:30%;} \n#drugi {clear:both; width:70%;} \n#trzeci {clear:both; width:70%;} \n#czwarty {float:left; width:100%;}"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 590,
    "text": "590. Wskaż nazwę Systemu Zarządzania Treścią, którego logo zostało przedstawione na rysunku.",
    "image": "e14/590.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Drupal"
      },
      {
        "id": "B",
        "text": "Joomla!"
      },
      {
        "id": "C",
        "text": "WordPress"
      },
      {
        "id": "D",
        "text": "MediaWiki"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 591,
    "text": "591. Który kod języka HTML da efekt formatowania jak na przedstawionym rysunku?",
    "image": "e14/591.jpg",
    "answers": [
      {
        "id": "A",
        "text": "<p> W tym <i> paragrafie zobaczysz sposoby formatowania </i> tekstu w HTML </p>"
      },
      {
        "id": "B",
        "text": "<p> W tym <b> paragrafie <i> zobaczysz </i> sposoby formatowania </b> tekstu w HTML </p>"
      },
      {
        "id": "C",
        "text": "<p> W tym <i> paragrafie <b> zobaczysz </b> sposoby formatowania </i> tekstu w HTML </p>"
      },
      {
        "id": "D",
        "text": "<p> W tym <i> paragrafie </i> <b> zobaczysz </b> <i> sposoby formatowania </i> tekstu w HTML </p>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 592,
    "text": "592. Który znacznik należy do znaczników definiujących listy w języku HTML?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<tr>"
      },
      {
        "id": "B",
        "text": "<th>"
      },
      {
        "id": "C",
        "text": "<td>"
      },
      {
        "id": "D",
        "text": "<ul>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 593,
    "text": "593. Który z kodów HTML opisuje przedstawioną tabelę? (Dla uproszczenia pominięto zapis stylu obramowania tabeli i komórek)",
    "image": "e14/593.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 594,
    "text": "594. Przedstawione w języku CSS formatowanie czcionki będzie obowiązywać dla",
    "image": "e14/594.jpg",
    "answers": [
      {
        "id": "A",
        "text": "znaczników o id równym *."
      },
      {
        "id": "B",
        "text": "znaczników z przypisaną klasą równą *."
      },
      {
        "id": "C",
        "text": "całego kodu HTML, niezależnie od późniejszych ustawień CSS."
      },
      {
        "id": "D",
        "text": "całego kodu HTML, jako formatowanie domyślne dla wszystkich elementów strony."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 595,
    "text": "595. Której właściwości CSS należy użyć, aby zdefiniować marginesy wewnętrzne dla elementu?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "hight"
      },
      {
        "id": "B",
        "text": "width"
      },
      {
        "id": "C",
        "text": "margin"
      },
      {
        "id": "D",
        "text": "padding"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 596,
    "text": "596. W kodzie CSS zastosowano formatowanie elementu listy, przy czym żadne inne formatowanie CSS nie zostało zdefiniowane. Zastosowane formatowanie sprawi, że",
    "image": "e14/596.jpg",
    "answers": [
      {
        "id": "A",
        "text": "tekst wszystkich elementów, którym przypisano id „hover” będzie w kolorze Maroon."
      },
      {
        "id": "B",
        "text": "po najechaniu kursorem na element listy, zmieni się kolor tekstu na Maroon."
      },
      {
        "id": "C",
        "text": "tekst wszystkich elementów listy będzie w kolorze Maroon."
      },
      {
        "id": "D",
        "text": "kolor Maroon będzie obejmował co drugi element listy."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 597,
    "text": "597. Wartości: static, relative, fixed, absolute oraz sticky można przypisać do właściwości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "display"
      },
      {
        "id": "B",
        "text": "position"
      },
      {
        "id": "C",
        "text": "list-style-type"
      },
      {
        "id": "D",
        "text": "text-transform"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 598,
    "text": "598. Aby dostosować stronę internetową dla niewidomych, należy nadać wyświetlanym za pomocą znacznika img obrazom atrybut",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "alt"
      },
      {
        "id": "B",
        "text": "src"
      },
      {
        "id": "C",
        "text": "text"
      },
      {
        "id": "D",
        "text": "style"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 599,
    "text": "599. Którą czynność należy wykonać podczas obróbki zdjęcia w edytorze grafiki, aby białe tło zamienić na przezroczystość?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Dodać kanał alfa."
      },
      {
        "id": "B",
        "text": "Skadrować obraz."
      },
      {
        "id": "C",
        "text": "Zmienić saturację obrazu."
      },
      {
        "id": "D",
        "text": "Maksymalnie zmniejszyć jasność."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 600,
    "text": "600. Aby zwiększyć szybkość działania strony zawierającej grafikę o wymiarach 2000 px na 760 px, należy zmniejszyć rozmiary grafiki",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "w programie graficznym."
      },
      {
        "id": "B",
        "text": "za pomocą atrybutów HTML."
      },
      {
        "id": "C",
        "text": "za pomocą właściwości CSS, podając rozmiar w pikselach."
      },
      {
        "id": "D",
        "text": "za pomocą właściwości CSS, podając rozmiar w procentach."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 601,
    "text": "601. Przedstawiona linia kodu została zapisana w języku",
    "image": "e14/601.jpg",
    "answers": [
      {
        "id": "A",
        "text": "C#"
      },
      {
        "id": "B",
        "text": "PHP"
      },
      {
        "id": "C",
        "text": "Python"
      },
      {
        "id": "D",
        "text": "JavaScript"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 602,
    "text": "602. Na stronie internetowej znajduje się formularz, do którego należy zaprogramować następujące funkcje: \n- walidacja: w trakcie wypełniania formularza w czasie rzeczywistym jest sprawdzana poprawność danych \n- przesyłanie danych: po wypełnieniu formularza i jego zatwierdzeniu dane są przesyłane do bazy danych\nna serwerze \nAby zaimplementować tę funkcjonalność w możliwie najprostszy sposób, należy zapisać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "walidację i przesyłanie danych w języku PHP."
      },
      {
        "id": "B",
        "text": "walidację i przesyłanie danych w języku JavaScript."
      },
      {
        "id": "C",
        "text": "walidację w skrypcie PHP, a przesyłanie danych w JavaScript."
      },
      {
        "id": "D",
        "text": "walidację w języku JavaScript, a przesyłanie danych w skrypcie PHP."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 603,
    "text": "603. Globalne tablice do przechowywania danych o ciastkach i sesjach: $ _ COOKIE oraz $ _ SESSION są częścią\njęzyka",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "C#"
      },
      {
        "id": "B",
        "text": "Perl"
      },
      {
        "id": "C",
        "text": "PHP"
      },
      {
        "id": "D",
        "text": "JavaScript"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 604,
    "text": "604. Podczas walidacji dokumentu HTML5 pojawił się komunikat o treści: „Error: Element head is missing a required instance of child element title”. Oznacza to, że w dokumencie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "element <title> nie jest wymagany."
      },
      {
        "id": "B",
        "text": "element <title> nie został zamknięty przez </title>."
      },
      {
        "id": "C",
        "text": "nie zdefiniowano elementu <title> w części <head> dokumentu."
      },
      {
        "id": "D",
        "text": "nie zdefiniowano obowiązkowego atrybutu title w znaczniku <img>."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 605,
    "text": "605. Którego protokołu należy użyć, aby przesłać pliki strony internetowej na serwer hostingowy?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "FTP"
      },
      {
        "id": "B",
        "text": "IRC"
      },
      {
        "id": "C",
        "text": "HTTP"
      },
      {
        "id": "D",
        "text": "SMTP"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 606,
    "text": "606. Przedstawiony blok reprezentuje czynność",
    "image": "e14/606.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zastosowania gotowej procedury lub funkcji."
      },
      {
        "id": "B",
        "text": "wczytania lub wyświetlenia danych."
      },
      {
        "id": "C",
        "text": "wykonania zadania w pętli."
      },
      {
        "id": "D",
        "text": "podjęcia decyzji."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 607,
    "text": "607. Aby zadeklarować pole klasy, do którego mają dostęp jedynie metody tej klasy i pole to nie jest dostępne dla klas pochodnych, należy użyć kwalifikatora dostępu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "public."
      },
      {
        "id": "B",
        "text": "private."
      },
      {
        "id": "C",
        "text": "protected."
      },
      {
        "id": "D",
        "text": "published."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 608,
    "text": "608. Pętla while powinna być wykonywana tak długo, jak długo zmienna x będzie przyjmowała wartości z przedziału obustronnie otwartego (-2, 5). Zapis tego warunku w nagłówku pętli za pomocą języka PHP ma postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "($x > -2) && ($x < 5)"
      },
      {
        "id": "B",
        "text": "($x == -2) && ($x < 5)"
      },
      {
        "id": "C",
        "text": "($x < -2) || ($x > 5)"
      },
      {
        "id": "D",
        "text": "($x > -2) || ($x > 5)"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 609,
    "text": "609. Po wykonaniu się przedstawionego fragmentu kodu języka C/C++ zmiennej o nazwie zmienna2 zostanie",
    "image": "e14/609.jpg",
    "answers": [
      {
        "id": "A",
        "text": "przypisany adres zmiennej o nazwie zmienna1."
      },
      {
        "id": "B",
        "text": "przypisana ta sama wartość, co przechowywana w zmienna1."
      },
      {
        "id": "C",
        "text": "przypisana zamieniona na łańcuch wartość przechowywana w zmienna1."
      },
      {
        "id": "D",
        "text": "przypisana liczba w kodzie binarnym odpowiadająca wartości przechowywanej w zmienna1."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 610,
    "text": "610. W języku PHP float reprezentuje typ",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "logiczny."
      },
      {
        "id": "B",
        "text": "całkowity."
      },
      {
        "id": "C",
        "text": "łańcuchowy."
      },
      {
        "id": "D",
        "text": "zmiennoprzecinkowy."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 611,
    "text": "611. Którym słowem kluczowym, w języku z rodziny C należy posłużyć się, aby przypisać alternatywną nazwę dla istniejącego typu danych?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "enum"
      },
      {
        "id": "B",
        "text": "union"
      },
      {
        "id": "C",
        "text": "switch"
      },
      {
        "id": "D",
        "text": "typedef"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 612,
    "text": "612. Instrukcja for może być zastąpiona instrukcją",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "case"
      },
      {
        "id": "B",
        "text": "while"
      },
      {
        "id": "C",
        "text": "switch"
      },
      {
        "id": "D",
        "text": "continue"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 613,
    "text": "613. Przedstawiony kod źródłowy, zapisany w języku C++, ma za zadanie dla wprowadzanych dowolnych całkowitych liczb różnych od zera wypisać",
    "image": "e14/613.jpg",
    "answers": [
      {
        "id": "A",
        "text": "liczby pierwsze"
      },
      {
        "id": "B",
        "text": "wszystkie liczby"
      },
      {
        "id": "C",
        "text": "tylko liczby parzyste"
      },
      {
        "id": "D",
        "text": "tylko liczby nieparzyste"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 614,
    "text": "614. DOM dostarcza metod i własności, które w języku JavaScript pozwalają na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "manipulowanie zadeklarowanymi w kodzie łańcuchami"
      },
      {
        "id": "B",
        "text": "wysyłanie danych formularza bezpośrednio do bazy danych"
      },
      {
        "id": "C",
        "text": "wykonywanie operacji na zmiennych przechowujących liczby"
      },
      {
        "id": "D",
        "text": "pobieranie i modyfikowanie elementów strony wyświetlonej przez przeglądarkę"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 615,
    "text": "615. Testy dotyczące skalowalności oprogramowania mają za zadanie sprawdzić, czy aplikacja",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ma odpowiednią funkcjonalność."
      },
      {
        "id": "B",
        "text": "jest odpowiednio udokumentowana."
      },
      {
        "id": "C",
        "text": "potrafi działać przy zakładanym i większym obciążeniu."
      },
      {
        "id": "D",
        "text": "jest zabezpieczona przed niedozwolonymi operacjami, np. dzielenie przez zero."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 616,
    "text": "616. Który z komentarzy opisuje zadanie zdefiniowanej w języku PHP funkcji?",
    "image": "e14/616.jpg",
    "answers": [
      {
        "id": "A",
        "text": "/*Funkcja zwraca wartość wyższą z dwóch podanych, gdy są równe zwraca wartość -1 */"
      },
      {
        "id": "B",
        "text": "/* Funkcja zwraca wartość niższą z dwóch podanych, gdy są równe zwraca wartość -1 */"
      },
      {
        "id": "C",
        "text": "/* Funkcja zwraca wartość wyższą z dwóch podanych, gdy są równe zwraca wartość $a */"
      },
      {
        "id": "D",
        "text": "/*Funkcja zwraca wartość niższą z dwóch podanych, gdy są równe zwraca wartość $a */"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 617,
    "text": "617. W relacyjnych bazach danych, jeżeli dwie tabele są połączone za pomocą ich kluczy głównych, mamy do czynienia z relacją",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "1..1"
      },
      {
        "id": "B",
        "text": "1..n"
      },
      {
        "id": "C",
        "text": "n..1"
      },
      {
        "id": "D",
        "text": "n..n"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 618,
    "text": "618. Normalizacja tabel jest procesem, który ma na celu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "dodanie rekordów do bazy."
      },
      {
        "id": "B",
        "text": "przedstawienie graficzne bazy."
      },
      {
        "id": "C",
        "text": "jedynie utworzenie tabel i relacji w bazie."
      },
      {
        "id": "D",
        "text": "sprawdzenie i optymalizację bazy danych."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 619,
    "text": "619. Wbudowanym w pakiet XAMPP narzędziem służącym do zarządzania bazą danych jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "MySQL Workbench"
      },
      {
        "id": "B",
        "text": "phpMyAdmin"
      },
      {
        "id": "C",
        "text": "pgAdmin"
      },
      {
        "id": "D",
        "text": "SQLite"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 620,
    "text": "620. Wskaż zapytanie, w którym dane zostały posortowane.",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT DISTINCT produkt, cena FROM artykuly;"
      },
      {
        "id": "B",
        "text": "SELECT AVG(ocena) FROM uczniowie WHERE klasa = 2;"
      },
      {
        "id": "C",
        "text": "SELECT nazwisko FROM firma WHERE pensja > 2000 LIMIT 10;"
      },
      {
        "id": "D",
        "text": "SELECT imie, nazwisko FROM mieszkancy WHERE wiek > 18 ORDER BY wiek;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 621,
    "text": "621. Funkcją agregującą zwracającą liczbę rekordów jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SUM"
      },
      {
        "id": "B",
        "text": "AVG"
      },
      {
        "id": "C",
        "text": "COUNT"
      },
      {
        "id": "D",
        "text": "NUMBER"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 622,
    "text": "622. Dana jest tabela zwierzeta z polami nazwa, gatunek, gromada, cechy, dlugosc_zycia. Dla dowolnego zestawu danych, aby wyświetlić nazwy tych zwierząt, które żyją przynajmniej 20 lat oraz są ssakami, należy wydać zapytanie:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwa FROM zwierzeta WHERE gromada = ‘ssak‘;"
      },
      {
        "id": "B",
        "text": "SELECT nazwa FROM zwierzeta WHERE dlugosc_zycia >=20;"
      },
      {
        "id": "C",
        "text": "SELECT nazwa FROM zwierzeta WHERE dlugosc_zycia >=20 AND gromada = ‘ssak‘;"
      },
      {
        "id": "D",
        "text": "SELECT nazwa FROM zwierzeta WHERE dlugosc_zycia >=20 OR gromada = ‘ssak‘;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 623,
    "text": "623. W tabeli personel znajdują się pola: imie, nazwisko, pensja, staz. Aby otrzymać średnią pensję pracowników, dla których staż wynosi od 10 do 20 lat pracy włącznie, należy wykonać kwerendę:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT COUNT (pensja) FROM personel WHERE staz >= 10 AND staz <= 20;"
      },
      {
        "id": "B",
        "text": "SELECT AVG(pensja) FROM personel WHERE staz >= 10 AND staz <= 20;"
      },
      {
        "id": "C",
        "text": "SELECT COUNT(*) FROM personel WHERE staz >= 10 AND staz <= 20;"
      },
      {
        "id": "D",
        "text": "SELECT AVG (*) FROM personel WHERE staz >= 10 AND staz <= 20;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 624,
    "text": "624. Zapytanie z klauzulą JOIN stosuje się, aby",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wywołać funkcję agregującą."
      },
      {
        "id": "B",
        "text": "zdefiniować klucz obcy dla tabeli."
      },
      {
        "id": "C",
        "text": "otrzymać wynik jedynie z jednej tabeli."
      },
      {
        "id": "D",
        "text": "uzyskać wyniki z dwóch tabel pozostających ze sobą w relacji."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 625,
    "text": "625. Aby usunąć tabelę należy zastosować kwerendę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DELETE"
      },
      {
        "id": "B",
        "text": "UNIQUE"
      },
      {
        "id": "C",
        "text": "DROP TABLE"
      },
      {
        "id": "D",
        "text": "TRUNCATE TABLE"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 626,
    "text": "626. Za pomocą przedstawionego zapytania w tabeli zostanie",
    "image": "e14/626.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zmieniona nazwa kolumny z nazwa1 na nazwa2."
      },
      {
        "id": "B",
        "text": "zmieniona wartość kolumny nazwa2 na DOUBLE."
      },
      {
        "id": "C",
        "text": "dodana kolumna nazwa2 typu zmiennoprzecinkowego."
      },
      {
        "id": "D",
        "text": "dodana kolumna nazwa2 przyjmująca wartość domyślną DOUBLE."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 627,
    "text": "627. Które tabele zostaną sprawdzone za pomocą przedstawionego polecenia?",
    "image": "e14/627.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Tabele, które zmieniły się od ostatniej kontroli lub nie zostały poprawnie zamknięte."
      },
      {
        "id": "B",
        "text": "Jedynie tabele, które nie zostały poprawnie zamknięte."
      },
      {
        "id": "C",
        "text": "Tabele, które zmieniły się w aktualnej sesji."
      },
      {
        "id": "D",
        "text": "Jedynie tabele referujące do innych."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 628,
    "text": "628. Jakie uprawnienia będzie miał użytkownik jan po wykonaniu na bazie danych przedstawionych poleceń?",
    "image": "e14/628.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Będzie mógł zmienić strukturę tabeli klienci."
      },
      {
        "id": "B",
        "text": "Będzie mógł usuwać rekordy z tabeli klienci."
      },
      {
        "id": "C",
        "text": "Będzie mógł wyszukiwać dane w tabeli klienci."
      },
      {
        "id": "D",
        "text": "Będzie mógł wstawiać rekordy do tabeli klienci."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 629,
    "text": "629. Witryna internetowa wysyła dane poufne za pomocą formularza do kodu PHP. Która metoda wysłania jest najbardziej bezpieczna?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Metoda GET, za pomocą protokołu HTTP"
      },
      {
        "id": "B",
        "text": "Metoda POST, za pomocą protokołu HTTP"
      },
      {
        "id": "C",
        "text": "Metoda GET, za pomocą protokołu HTTPS"
      },
      {
        "id": "D",
        "text": "Metoda POST, za pomocą protokołu HTTPS"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 630,
    "text": "630. Przedstawiony fragment kodu PHP ma za zadanie umieścić dane znajdujące się w zmiennych $a, $b, $c w bazie danych, w tabeli dane. Tabela dane zawiera cztery pola, z czego pierwsze to autoinkrementowany klucz główny. Które z poleceń powinno być przypisane do zmiennej $zapytanie?",
    "image": "e14/630.jpg",
    "answers": [
      {
        "id": "A",
        "text": "SELECT '$a', '$b', '$c' FROM dane;"
      },
      {
        "id": "B",
        "text": "SELECT NULL, '$a', '$b', '$c' FROM dane;"
      },
      {
        "id": "C",
        "text": "INSERT INTO dane VALUES ('$a', '$b', '$c');"
      },
      {
        "id": "D",
        "text": "INSERT INTO dane VALUES (NULL, '$a', '$b', '$c');"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 631,
    "text": "631. Witryna internetowa ma mieć przedstawioną strukturę bloków. Aby uzyskać ten układ, należy znacznikom sekcji przypisać właściwości w następujący sposób:",
    "image": "e14/631.jpg",
    "answers": [
      {
        "id": "A",
        "text": "float tylko dla bloku 5; clear dla bloku 2"
      },
      {
        "id": "B",
        "text": "float tylko dla bloków: 3, 4; clear dla bloku 5"
      },
      {
        "id": "C",
        "text": "float tylko dla bloku 2; clear dla bloków: 3, 4"
      },
      {
        "id": "D",
        "text": "float tylko dla bloków: 2, 3, 4; clear dla bloku 5"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 632,
    "text": "632. Podstawowym zadaniem systemu CMS jest oddzielenie treści serwisu informacyjnego od jego wyglądu. Efekt ten jest uzyskany poprzez generowanie zawartości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "z bazy danych oraz wyglądu ze zdefiniowanego szablonu."
      },
      {
        "id": "B",
        "text": "z bazy danych oraz wyglądu za pomocą atrybutów HTML."
      },
      {
        "id": "C",
        "text": "ze statycznych plików HTML oraz wyglądu ze zdefiniowanego szablonu."
      },
      {
        "id": "D",
        "text": "ze statycznych plików HTML oraz wyglądu za pomocą technologii FLASH."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 633,
    "text": "633. W języku HTML znacznik < i > nadaje znakom taki sam wizualny efekt jak znacznik",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<u>"
      },
      {
        "id": "B",
        "text": "<em>"
      },
      {
        "id": "C",
        "text": "<pre>"
      },
      {
        "id": "D",
        "text": "<strong>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 634,
    "text": "634. Przedstawiono tabelę zdefiniowaną kodem HTML, bez formatowania CSS. Który z fragmentów kodu HTML odpowiada pierwszemu wierszowi tabeli?",
    "image": "e14/634.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 635,
    "text": "635. Aby obraz wstawiony kodem HTML mógł być interpretowany przez programy wspomagające osoby niewidzące, należy zdefiniować atrybut",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "alt"
      },
      {
        "id": "B",
        "text": "src"
      },
      {
        "id": "C",
        "text": "sizes"
      },
      {
        "id": "D",
        "text": "border"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 636,
    "text": "636. Na obrazie przedstawiono efekt formatowania stylami CSS oraz kod HTML generujący ten przykład. Zakładając, że marginesy wewnętrzne wynoszą 50 px, a zewnętrzne wynoszą 20 px, styl CSS dla obrazu ma postać",
    "image": "e14/636.jpg",
    "answers": [
      {
        "id": "A",
        "text": "img { \n    background-color: Teal;  \n    border: 4px dotted Teal; \n    padding: 50px; \n    margin: 20px; \n}"
      },
      {
        "id": "B",
        "text": "img { \n    background-color: Teal; \n    border: 4px solid black; \n    margin: 50px; \n    padding: 20px; \n}"
      },
      {
        "id": "C",
        "text": "img { \n    background-color: Teal; \n    border: 4px solid black; \n    padding: 50px; \n    margin: 20px; \n}"
      },
      {
        "id": "D",
        "text": "img { \n    background-color: Teal; \n    border: 4px dotted Teal; \n    margin: 50px; \n    padding: 20px; \n}"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 637,
    "text": "637. W kodzie CSS zdefiniowano cztery klasy formatowania, których następnie użyto do formatowania paragrafów. Efekt widoczny na rysunku powstał po zastosowaniu klasy o nazwie",
    "image": "e14/637.jpg",
    "answers": [
      {
        "id": "A",
        "text": "format1"
      },
      {
        "id": "B",
        "text": "format2"
      },
      {
        "id": "C",
        "text": "format3"
      },
      {
        "id": "D",
        "text": "format4"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 638,
    "text": "638. W jakim formacie należy zapisać obraz, aby mógł być wyświetlony na stronie internetowej z zachowaniem przezroczystości?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "JPG"
      },
      {
        "id": "B",
        "text": "BMP"
      },
      {
        "id": "C",
        "text": "PNG"
      },
      {
        "id": "D",
        "text": "CDR"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 639,
    "text": "639. Na potrzeby strony internetowej przygotowano grafikę rysunek.jpg o rozmiarze: szerokość 200 px, wysokość 100 px. Aby wyświetlić tę grafikę jako miniaturę – pomniejszoną z zachowaniem proporcji, można zastosować znacznik",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<img src = \"rysunek.png\">"
      },
      {
        "id": "B",
        "text": "<img src = \"rysunek.png\" style = \"width: 50px\">"
      },
      {
        "id": "C",
        "text": "<img src = \"rysunek.png\" style = \"width: 25px; height: 50px\">"
      },
      {
        "id": "D",
        "text": "<img src = \"rysunek.png\" style = \"width: 25px; height: 25px\">"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 640,
    "text": "640. Której funkcji edytora grafiki rastrowej należy użyć, aby przygotować rysunek do wyświetlenia na stronie w ten sposób, żeby było widoczne tylko to, co znajduje się w ramce?",
    "image": "e14/640.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Odbicie"
      },
      {
        "id": "B",
        "text": "Skalowanie"
      },
      {
        "id": "C",
        "text": "Kadrowanie"
      },
      {
        "id": "D",
        "text": "Perspektywa"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 641,
    "text": "641. Przedstawiony fragment dokumentu HTML z kodem JavaScript spowoduje, że po wciśnięciu przycisku",
    "image": "e14/641.jpg",
    "answers": [
      {
        "id": "A",
        "text": "obraz1.png zostanie ukryty."
      },
      {
        "id": "B",
        "text": "obraz2.png zostanie ukryty."
      },
      {
        "id": "C",
        "text": "obraz2.png zostanie zastąpiony przez obraz1.png"
      },
      {
        "id": "D",
        "text": "obraz1.png zostanie zastąpiony przez obraz2.png"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 642,
    "text": "642. Co spowoduje fragment skryptu w języku JavaScript?",
    "image": "e14/642.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Przypisze zmienną n do zmiennej s."
      },
      {
        "id": "B",
        "text": "Wyświetli długość napisu ze zmiennej n."
      },
      {
        "id": "C",
        "text": "Przypisze zmiennej s wartość odpowiadającą długości napisu ze zmiennej n."
      },
      {
        "id": "D",
        "text": "Przypisze zmiennej s fragment napisu ze zmiennej n, o określonej przez zmienną length długości."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 643,
    "text": "643. Przedstawiony kod PHP nawiązuje połączenie z serwerem bazy danych. Jakiego typu operacje powinny się znaleźć w instrukcji warunkowej w miejscu trzech kropek?",
    "image": "e14/643.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Zamknięcie bazy danych."
      },
      {
        "id": "B",
        "text": "Obsługa błędu połączenia."
      },
      {
        "id": "C",
        "text": "Obsługa danych pobranych z bazy."
      },
      {
        "id": "D",
        "text": "Komunikat o pomyślnym połączeniu z bazą."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 644,
    "text": "644. Który znacznik należący do sekcji head dokumentu HTML w wersji 5 jest wymagany przez walidator języka HTML, a jego brak jest zgłaszany jako błąd (error)?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "title"
      },
      {
        "id": "B",
        "text": "link"
      },
      {
        "id": "C",
        "text": "metą"
      },
      {
        "id": "D",
        "text": "style"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 645,
    "text": "645. Za pomocą którego protokołu można opublikować stronę internetową na serwerze?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "FTP"
      },
      {
        "id": "B",
        "text": "ICMP"
      },
      {
        "id": "C",
        "text": "SMTP"
      },
      {
        "id": "D",
        "text": "NNTP"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 646,
    "text": "646. W przedstawionym fragmencie algorytmu zastosowano",
    "image": "e14/646.jpg",
    "answers": [
      {
        "id": "A",
        "text": "dwie pętle"
      },
      {
        "id": "B",
        "text": "jedną pętlę."
      },
      {
        "id": "C",
        "text": "jeden blok decyzyjny."
      },
      {
        "id": "D",
        "text": "trzy bloki operacyjne (procesy)."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 647,
    "text": "647. Do optymalnej realizacji algorytmu szukającego największej z trzech podanych liczb a, b i c, wystarczy\nzastosować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "jedną pętlę."
      },
      {
        "id": "B",
        "text": "dwie tablice."
      },
      {
        "id": "C",
        "text": "dwa warunki."
      },
      {
        "id": "D",
        "text": "pięć zmiennych."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 648,
    "text": "648. Które wyrażenie logiczne w języku PHP sprawdza, czy zmienna1 należy do przedziału jednostronnie\ndomkniętego <-5, 10)?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "$zmienna1 >= -5 || $zmienna1 < 10"
      },
      {
        "id": "B",
        "text": "$zmienna1 <= -5 || $zmienna1 < 10"
      },
      {
        "id": "C",
        "text": "$zmienna1 >= -5 && $zmienna1 < 10"
      },
      {
        "id": "D",
        "text": "$zmienna1 <= -5 && $zmienna1 < 10"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 649,
    "text": "649. Przedstawiona w języku C++ definicja typu wyliczeniowego sprawi, że enumerator CZWARTEK będzie\nrówny",
    "image": "e14/649.jpg",
    "answers": [
      {
        "id": "A",
        "text": "napisowi \"CZWARTEK\""
      },
      {
        "id": "B",
        "text": "napisowi 'CZWARTEK'"
      },
      {
        "id": "C",
        "text": "liczbie 1"
      },
      {
        "id": "D",
        "text": "liczbie 4"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 650,
    "text": "650. Tablica tab[] jest wypełniona dowolnymi liczbami całkowitymi. Jaka wartość znajdzie się w zmiennej zm2\npo wykonaniu prezentowanego fragmentu kodu?",
    "image": "e14/650.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Suma liczb z tablicy."
      },
      {
        "id": "B",
        "text": "Suma liczb od 1 do 10."
      },
      {
        "id": "C",
        "text": "Średnia arytmetyczna liczb z tablicy."
      },
      {
        "id": "D",
        "text": "Średnia geometryczna liczb od 0 do 9."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 651,
    "text": "651. W języku JavaScript metoda getElementById odwołuje się do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zmiennej liczbowej."
      },
      {
        "id": "B",
        "text": "klasy zdefiniowanej w CSS."
      },
      {
        "id": "C",
        "text": "znacznika HTML o podanym id."
      },
      {
        "id": "D",
        "text": "znacznika HTML o podanej nazwie klasy."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 652,
    "text": "652. W języku C++ funkcja zwracająca wynik potęgowania, działająca na dwóch parametrach wejściowych:\nliczbie x i wykładniku w, ma deklarację",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "int potega(int x);"
      },
      {
        "id": "B",
        "text": "int potega(int x, int w);"
      },
      {
        "id": "C",
        "text": "void potega(int x, int w);"
      },
      {
        "id": "D",
        "text": "void potega(int x, int w, int wynik);"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 653,
    "text": "653. Aby skorzystać ze skryptu zapisanego w pliku przyklad.js, należy połączyć go ze stroną za pomocą kodu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<script> przyklad.js </script>"
      },
      {
        "id": "B",
        "text": "<script src=\"przyklad.js\"> </script>"
      },
      {
        "id": "C",
        "text": "<script link=\"przyklad.js\"> </script>"
      },
      {
        "id": "D",
        "text": "<link rel=\"script\" href=\"przyklad.js\">"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 654,
    "text": "654. Programista napisał w języku C++ pętlę, która miała obliczyć wynik działania 5! (5! = 1 * 2 * 3 * 4 * 5).\nPopełnił jednak błąd logiczny polegający na tym, że",
    "image": "e14/654.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zmienna a powinna być inicjowana wartością 0 zamiast 1."
      },
      {
        "id": "B",
        "text": "parametr i pętli powinien być inicjowany wartością 0 zamiast 1."
      },
      {
        "id": "C",
        "text": "parametr i pętli powinien być dekrementowany zamiast inkrementowany."
      },
      {
        "id": "D",
        "text": "w drugim parametrze pętli powinno być porównanie i < 6 zamiast i < 5."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 655,
    "text": "655. Który ze sposobów komentowania kodu nie jest stosowany w kodzie PHP?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "# komentarz"
      },
      {
        "id": "B",
        "text": "// komentarz"
      },
      {
        "id": "C",
        "text": "/* komentarz */"
      },
      {
        "id": "D",
        "text": "< !-- komentarz -- >"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 656,
    "text": "656. Klucz obcy w tabeli jest tworzony po to, aby",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "łączyć go z innymi kluczami obcymi tabeli."
      },
      {
        "id": "B",
        "text": "stworzyć formularz wpisujący dane do tabeli."
      },
      {
        "id": "C",
        "text": "umożliwić jednoznaczną identyfikację rekordu w tabeli."
      },
      {
        "id": "D",
        "text": "zdefiniować relację 1..n wiążącą go z kluczem głównym innej tabeli."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 657,
    "text": "657. Które ze stwierdzeń dotyczących klucza podstawowego jest prawdziwe?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Jest unikalny w obrębie tabeli."
      },
      {
        "id": "B",
        "text": "Składa się tylko z jednego pola."
      },
      {
        "id": "C",
        "text": "Może przyjmować tylko wartości liczbowe."
      },
      {
        "id": "D",
        "text": "Dla tabeli z danymi osobowymi może być to pole nazwisko."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 658,
    "text": "658. W języku SQL aby zmodyfikować dane w tabeli, należy posłużyć się poleceniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "CREATE"
      },
      {
        "id": "B",
        "text": "UPDATE"
      },
      {
        "id": "C",
        "text": "SELECT"
      },
      {
        "id": "D",
        "text": "JOIN"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 659,
    "text": "659. Które zapytanie SQL posłuży do wyszukania z przedstawionej tabeli wyłącznie wszystkich imion i nazwisk\npacjentów urodzonych przed rokiem 2002?",
    "image": "e14/659.jpg",
    "answers": [
      {
        "id": "A",
        "text": "SELECT * FROM Pacjenci WHERE rok_urodzenia <= 2002;"
      },
      {
        "id": "B",
        "text": "SELECT * FROM Pacjenci WHERE rok_urodzenia LIKE 2002;"
      },
      {
        "id": "C",
        "text": "SELECT imie, nazwisko FROM Pacjenci WHERE rok_urodzenia < 2002;"
      },
      {
        "id": "D",
        "text": "SELECT imie, nazwisko FROM Pacjenci WHERE data_ostatniej_wizyty < 2002;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 660,
    "text": "660. Aby utworzyć tabelę, należy się posłużyć poleceniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "INSERT INTO"
      },
      {
        "id": "B",
        "text": "ALTER TABLE"
      },
      {
        "id": "C",
        "text": "CREATE TABLE"
      },
      {
        "id": "D",
        "text": "CREATE DATABASE"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 661,
    "text": "661. Wynikiem uruchomienia zapytania SQL jest",
    "image": "e14/661.jpg",
    "answers": [
      {
        "id": "A",
        "text": "liczba wszystkich uczniów."
      },
      {
        "id": "B",
        "text": "średnia ocen wszystkich uczniów."
      },
      {
        "id": "C",
        "text": "liczba uczniów, których średnia ocen wynosi 5."
      },
      {
        "id": "D",
        "text": "suma ocen uczniów, których średnia ocen wynosi 5."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 662,
    "text": "662. Aby wyświetlić jedynie imię, nazwisko i ulicę wszystkich mieszkańców, należy zastosować zapytanie",
    "image": "e14/662.jpg",
    "answers": [
      {
        "id": "A",
        "text": "SELECT * FROM Mieszkancy, Adresy ON Mieszkancy.id = Adresy.id;"
      },
      {
        "id": "B",
        "text": "SELECT * FROM Mieszkancy JOIN Adresy ON Adresy.id = Mieszkancy.Adresy.id;"
      },
      {
        "id": "C",
        "text": "SELECT imie, nazwisko, ulica FROM Mieszkancy, Adresy ON Mieszkancy.Adresy_id\n= Adresy.id;"
      },
      {
        "id": "D",
        "text": "SELECT imie, nazwisko, ulica FROM Mieszkancy JOIN Adresy ON\nMieszkancy.Adresy_id = Adresy.id;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 663,
    "text": "663. Przedstawiona baza danych zawiera trzy tabele i dwie relacje. Aby wyświetlić dane wszystkich lekarzy\nprzypisanych do konkretnego pacjenta, należy przyrównać klucze",
    "image": "e14/663.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Lekarze.id = Recepty.id"
      },
      {
        "id": "B",
        "text": "Lekarze.id = Pacjenci.id"
      },
      {
        "id": "C",
        "text": "Lekarze.id = Pacjenci.Lekarze_id"
      },
      {
        "id": "D",
        "text": "Lekarze.id = Pacjenci.Recepty_id"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 664,
    "text": "664. W wyniku połączenia relacją kluczy głównych dwóch tabel otrzymuje się relację typu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wiele do wielu."
      },
      {
        "id": "B",
        "text": "jeden do wielu."
      },
      {
        "id": "C",
        "text": "jeden do jednego."
      },
      {
        "id": "D",
        "text": "wiele do jednego."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 665,
    "text": "665. Obiektem służącym w bazie danych do podsumowywania, wyświetlania i wydruków danych jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "raport."
      },
      {
        "id": "B",
        "text": "zapytanie."
      },
      {
        "id": "C",
        "text": "formularz."
      },
      {
        "id": "D",
        "text": "zestawienie."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 666,
    "text": "666. Za pomocą polecenia ALTER TABLE można",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "usuwać tabelę."
      },
      {
        "id": "B",
        "text": "tworzyć tabelę."
      },
      {
        "id": "C",
        "text": "modyfikować strukturę tabeli."
      },
      {
        "id": "D",
        "text": "modyfikować wartości zapisane w rekordach tabeli."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 667,
    "text": "667. W bazie danych zdefiniowano tabelę Mieszkancy wypełnioną danymi. Aby usunąć tę tabelę wraz\nz zawartością, należy posłużyć się poleceniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DROP TABLE Mieszkancy;"
      },
      {
        "id": "B",
        "text": "DELETE FROM Mieszkancy;"
      },
      {
        "id": "C",
        "text": "ALTER TABLE Mieszkancy;"
      },
      {
        "id": "D",
        "text": "TRUNCATE TABLE Mieszkancy;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 668,
    "text": "668. Aby odebrać uprawnienia użytkownikowi, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DELETE"
      },
      {
        "id": "B",
        "text": "REVOKE"
      },
      {
        "id": "C",
        "text": "DELETE PRIVILEGES"
      },
      {
        "id": "D",
        "text": "GRANT NO PRIVILEGES"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 669,
    "text": "669. Aby aplikacja PHP mogła komunikować się z bazą danych, niezbędne jest w pierwszej kolejności wywołanie\nfunkcji o nazwie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "mysqli_close"
      },
      {
        "id": "B",
        "text": "mysqli_connect"
      },
      {
        "id": "C",
        "text": "mysql_select_db"
      },
      {
        "id": "D",
        "text": "mysql_create_db"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 670,
    "text": "670. Który z wymienionych znaczników języka HTML może posłużyć do budowy struktury strony internetowej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<em>"
      },
      {
        "id": "B",
        "text": "<aside>"
      },
      {
        "id": "C",
        "text": "<input>"
      },
      {
        "id": "D",
        "text": "<mark>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 671,
    "text": "671. Logo systemu CMS o nazwie Joomla! to",
    "image": "e14/671.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 672,
    "text": "672. Język HTML dysponuje nagłówkami do budowania hierarchii treści. Nagłówki te występują jedynie\nw zakresie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "h1 – h4"
      },
      {
        "id": "B",
        "text": "h1 – h6"
      },
      {
        "id": "C",
        "text": "h1 – h8"
      },
      {
        "id": "D",
        "text": "h1 – h10"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 673,
    "text": "673. W języku HTML zdefiniowano odnośnik do strony internetowej. Aby strona otwierała się w nowym oknie\nlub zakładce przeglądarki, należy dopisać do definicji odnośnika atrybut",
    "image": "e14/673.jpg",
    "answers": [
      {
        "id": "A",
        "text": "rel = \"next\""
      },
      {
        "id": "B",
        "text": "rel = \"external\""
      },
      {
        "id": "C",
        "text": "target = \"_blank\""
      },
      {
        "id": "D",
        "text": "target = \"_parent\""
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 674,
    "text": "674. Która lista jest interpretacją przedstawionego kodu?",
    "image": "e14/674.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 675,
    "text": "675. Na potrzeby strony internetowej zdefiniowano styl. Styl będzie przypisany tylko do niektórych znaczników\n(np. niektórych nagłówków, kilku akapitów). W takim wypadku, aby przypisać styl do kilku konkretnych\nznaczników, najlepiej jest zastosować",
    "image": "e14/675.jpg",
    "answers": [
      {
        "id": "A",
        "text": "klasę."
      },
      {
        "id": "B",
        "text": "pseudoklasę."
      },
      {
        "id": "C",
        "text": "identyfikator."
      },
      {
        "id": "D",
        "text": "selektor akapitu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 676,
    "text": "676. Aby zdefiniować krój czcionki w stylu CSS, należy użyć właściwości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "text-style"
      },
      {
        "id": "B",
        "text": "font-style"
      },
      {
        "id": "C",
        "text": "text-family"
      },
      {
        "id": "D",
        "text": "font-family"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 677,
    "text": "677. Który z obrazów został sformatowany za pomocą przedstawionego stylu CSS?",
    "image": "e14/677.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 678,
    "text": "678. Aby na stronie internetowej wyświetlić logo, którego tło jest przezroczyste, należy zastosować format",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "JPG"
      },
      {
        "id": "B",
        "text": "CDR"
      },
      {
        "id": "C",
        "text": "PNG"
      },
      {
        "id": "D",
        "text": "BMP"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 679,
    "text": "679. Aby obraz umieszczony na stronie internetowej automatycznie skalował się do rozmiaru ekranu, na którym\njest wyświetlana strona, należy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "oba jego wymiary ustawić w pikselach."
      },
      {
        "id": "B",
        "text": "jeden z jego wymiarów ustawić w pikselach."
      },
      {
        "id": "C",
        "text": "nie modyfikować obu jego wymiarów stylami CSS."
      },
      {
        "id": "D",
        "text": "jego szerokość ustawić w wartościach procentowych."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 680,
    "text": "680. W procesie przygotowywania grafiki na stronę internetową należy wyciąć jedynie jej fragment. Taka\noperacja to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "skalowanie."
      },
      {
        "id": "B",
        "text": "kadrowanie."
      },
      {
        "id": "C",
        "text": "odbicie obrazu"
      },
      {
        "id": "D",
        "text": "łączenie warstw."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 681,
    "text": "681. W aplikacji internetowej komunikat powinien pojawiać się tylko wtedy, gdy dany użytkownik jest na stronie\npo raz pierwszy. Którą funkcję PHP należy w tym celu zastosować?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "define"
      },
      {
        "id": "B",
        "text": "setcookie"
      },
      {
        "id": "C",
        "text": "session_destroy"
      },
      {
        "id": "D",
        "text": "mysqli_change_user"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 682,
    "text": "682. Przedstawiona definicja formularza została zastosowana na stronie internetowej, która wysyła dane do pliku\nzapisanego w języku PHP. W której tablicy będą dostępne dane z formularza?",
    "image": "e14/682.jpg",
    "answers": [
      {
        "id": "A",
        "text": "$ _ GET"
      },
      {
        "id": "B",
        "text": "$ _ POST"
      },
      {
        "id": "C",
        "text": "$ _ COOKIE"
      },
      {
        "id": "D",
        "text": "$ _ ACTION"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 683,
    "text": "683. W skrypcie JavaScript zastosowano metodę DOM getElementsByClassName('akapit'). Metoda ta\nodwoła się do akapitu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<p> akapit </p>"
      },
      {
        "id": "B",
        "text": "<p id=\"akapit\"> akapit2 </p>"
      },
      {
        "id": "C",
        "text": "<p href=\"akapit\"> akapit3 </p>"
      },
      {
        "id": "D",
        "text": "<p class=\"akapit\"> akapit4 </p>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 684,
    "text": "684. Dla przedstawionego fragmentu kodu walidator HTML zwróci błąd, ponieważ",
    "image": "e14/684.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zastosowano błędny znacznik do wyświetlenia obrazu."
      },
      {
        "id": "B",
        "text": "zastosowano nieznany atrybut alt."
      },
      {
        "id": "C",
        "text": "nie znaleziono obrazu kwiat.jpg."
      },
      {
        "id": "D",
        "text": "nie domknięto cudzysłowu."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 685,
    "text": "685. Program FileZilla może posłużyć do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "kompilacji skryptu na stronie."
      },
      {
        "id": "B",
        "text": "walidacji strony internetowej."
      },
      {
        "id": "C",
        "text": "publikacji strony internetowej."
      },
      {
        "id": "D",
        "text": "debugowania skryptu na stronie."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 686,
    "text": "686. Która wartość zostanie wypisana przez algorytm?",
    "image": "e14/686.jpg",
    "answers": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 687,
    "text": "687. Wskaż złożoność obliczeniową algorytmu naiwnego (zwykłego) wyszukiwania minimum w zbiorze liczb?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "O(n)"
      },
      {
        "id": "B",
        "text": "O(n2)"
      },
      {
        "id": "C",
        "text": "O(n3)"
      },
      {
        "id": "D",
        "text": "O(n!)"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 688,
    "text": "688. Do którego pola klasy Dane możliwy będzie dostęp z zewnątrz poprzez nazwę obiektu utworzonego jako instancja tej klasy?",
    "image": "e14/688.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Do wszystkich pól."
      },
      {
        "id": "B",
        "text": "Do pola $a."
      },
      {
        "id": "C",
        "text": "Do pola $b."
      },
      {
        "id": "D",
        "text": "Do pola $c."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 689,
    "text": "689. W języku JavaScript utworzono obiekt. Aby pobrać wartość własności w można zapisać",
    "image": "e14/689.jpg",
    "answers": [
      {
        "id": "A",
        "text": "obiekt:w"
      },
      {
        "id": "B",
        "text": "obiekt.w"
      },
      {
        "id": "C",
        "text": "obiekt::w"
      },
      {
        "id": "D",
        "text": "obiekt->w"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 690,
    "text": "690. W języku PHP zainicjowano zmienną $a wartością 1. Porównanie $a === $b przyjmuje wartość true, w przypadku, gdy zmienna $b jest zainicjowana wartością",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "*1"
      },
      {
        "id": "B",
        "text": "'1'"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "\"1\" lub '1'"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 691,
    "text": "691. Która pętla w języku PHP pozwala wykonać operacje na wszystkich elementach tablicy z automatycznym indeksowaniem jej elementów?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "for"
      },
      {
        "id": "B",
        "text": "while"
      },
      {
        "id": "C",
        "text": "foreach"
      },
      {
        "id": "D",
        "text": "do...while"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 692,
    "text": "692. Wskaż wynik wykonania przedstawionego kodu PHP, jeżeli zmienna tab jest tablicą.",
    "image": "e14/692.jpg",
    "answers": [
      {
        "id": "A",
        "text": "jelenie sarny"
      },
      {
        "id": "B",
        "text": "lisy borsuki"
      },
      {
        "id": "C",
        "text": "sarny dziki"
      },
      {
        "id": "D",
        "text": "dziki lisy"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 693,
    "text": "693. Zapisaną językiem PHP funkcję o nazwie policz wywołano z argumentem $Z = 1. Jaki wynik zostanie zwrócony?",
    "image": "e14/693.jpg",
    "answers": [
      {
        "id": "A",
        "text": "13"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 694,
    "text": "694. Wskaż funkcję JavaScript, za pomocą której można obliczyć połowę kwadratu liczby przekazanej jako argument.",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "function wynik(a) { return a/2+a/2; }"
      },
      {
        "id": "B",
        "text": "function wynik(a) { return a*2/2; }"
      },
      {
        "id": "C",
        "text": "function wynik(a) { return a*a/2; }"
      },
      {
        "id": "D",
        "text": "function wynik(a) { return 2*a/a; }"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 695,
    "text": "695. Która z przedstawionych funkcji języka PHP zamieni słowo \"kota\" na słowo \"mysz\" w napisie \"ala ma kota\"?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "replace (\"ala ma kota\", \"kota\", \"mysz\");"
      },
      {
        "id": "B",
        "text": "replace (\"kota\", \"mysz\", \"ala ma kota\");"
      },
      {
        "id": "C",
        "text": "str_replace(\"ala ma kota\", \"kota\", \"mysz\");"
      },
      {
        "id": "D",
        "text": "str_replace(\"kota\", \"mysz\", \"ala ma kota\");"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 696,
    "text": "696. Która z przedstawionych metod pozwoli wypisać w języku JavaScript komunikat w konsoli przeglądarki internetowej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "console.write(\"test\");"
      },
      {
        "id": "B",
        "text": "console.print(\"test\");"
      },
      {
        "id": "C",
        "text": "console.echo(\"test\");"
      },
      {
        "id": "D",
        "text": "console.log(\"test\");"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 697,
    "text": "697. Polecenie wysyłane do serwera bazy danych, polegające na zbieraniu, poszukiwaniu lub modyfikowaniu danych w bazie jest nazywane",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "formularzem."
      },
      {
        "id": "B",
        "text": "kwerendą."
      },
      {
        "id": "C",
        "text": "kolumną."
      },
      {
        "id": "D",
        "text": "kopią."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 698,
    "text": "698. Kolumna pełniąca rolę klucza głównego w tabeli musi",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zawierać ciągłą numerację."
      },
      {
        "id": "B",
        "text": "zawierać unikalne wartości."
      },
      {
        "id": "C",
        "text": "zawierać wartości liczbowe."
      },
      {
        "id": "D",
        "text": "być innego typu niż pozostałe kolumny."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 699,
    "text": "699. Która z wbudowanych funkcji agregujących języka SQL oblicza średnią wartości we wskazanej kolumnie?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "MIN"
      },
      {
        "id": "B",
        "text": "AVG"
      },
      {
        "id": "C",
        "text": "SUM"
      },
      {
        "id": "D",
        "text": "COUNT"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 700,
    "text": "700. Aby w wyniku zapytania wyeliminować powtarzające się wiersze, należy użyć klauzuli",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "LIMIT"
      },
      {
        "id": "B",
        "text": "UNIQUE"
      },
      {
        "id": "C",
        "text": "DISTINCT"
      },
      {
        "id": "D",
        "text": "ORDER BY"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 701,
    "text": "701. Za pomocą, którego polecenia SQL można usunąć z tabeli artykuły wiersze zawierające słowo \"sto\" znajdujące się w dowolnym miejscu pola tresc?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DELETE FROM artykuly WHERE tresc = \"%sto%\";"
      },
      {
        "id": "B",
        "text": "DELETE * FROM artykuly WHERE tresc = \"%sto%\";"
      },
      {
        "id": "C",
        "text": "DELETE FROM artykuly WHERE tresc LIKE \"%sto%\";"
      },
      {
        "id": "D",
        "text": "DELETE * FROM artykuly WHERE tresc LIKE \"%sto%\";"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 702,
    "text": "702. W bazie danych sklepu istnieją dwie tabele powiązane relacją: produkty oraz ceny. Tabela oceny zawiera dowolną liczbę ocen klientów dla danego produktu opisaną polami: id, ocena (pole numeryczne), produktID (klucz obcy). Aby wskazać maksymalną ocenę dla produktu o ID równym 10, należy posłużyć się zapytaniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "MAX SELECT ocena FROM oceny WHERE produktID = 10;"
      },
      {
        "id": "B",
        "text": "SELECT MAX(ocena) FROM oceny WHERE produktID = 10;"
      },
      {
        "id": "C",
        "text": "COUNT MAX SELECT ocena FROM oceny WHERE produktID = 10;"
      },
      {
        "id": "D",
        "text": "SELECT MAX COUNT(ocena) FROM oceny WHERE produktID = 10;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 703,
    "text": "703. Aby zmodyfikować strukturę tabeli w bazie MySQL należy wykonać polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ALTER TABLE"
      },
      {
        "id": "B",
        "text": "INSERT INTO"
      },
      {
        "id": "C",
        "text": "UPDATE"
      },
      {
        "id": "D",
        "text": "GRANT"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 704,
    "text": "704. Za pomocą, którego zapytania Administrator odbierze prawo przeglądania oraz aktualizacji danych w bazie gazeta, dla użytkownika redaktor?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "REVOKE SELECT, UPDATE ON gazeta.* FROM 'redaktor'@'localhost';"
      },
      {
        "id": "B",
        "text": "REVOKE SELECT, ALTER ON gazeta.* FROM 'redaktor'@'localhost';"
      },
      {
        "id": "C",
        "text": "GRANT SELECT, UPDATE ON gazeta.* TO 'redaktor'@'localhost';"
      },
      {
        "id": "D",
        "text": "GRANT SELECT, ALTER ON gazeta.* TO 'redaktor'@'localhost';"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 705,
    "text": "705. Za pomocą, której funkcji języka PHP można ustanowaić połączenie z bazą danych o nazwie zwierzaki?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "$polacz = db_connect('localhost', 'root', '', 'zwierzaki');"
      },
      {
        "id": "B",
        "text": "$polacz = sql_connect('localhost', 'root', '', 'zwierzaki');"
      },
      {
        "id": "C",
        "text": "$polacz = server_connect('localhost', 'root', '', 'zwierzaki');"
      },
      {
        "id": "D",
        "text": "$polacz = mysqli_connect('localhost', 'root', '', 'zwierzaki');"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 706,
    "text": "706. Po uszkodzeniu serwera bazy danych, aby możliwe najsprawniej przywrócić działanie kompletnej bazy należy użyć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "najnowszej wersji instalacyjnej serwera."
      },
      {
        "id": "B",
        "text": "pełnej listy użytkowników serwera."
      },
      {
        "id": "C",
        "text": "aktualnej wersji kopii zapasowej."
      },
      {
        "id": "D",
        "text": "opisu struktur danych w tabelach."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 707,
    "text": "707. Która z przedstawionych grup znaczników HTML zawiera znaczniki służące do grupowania elementów i tworzenia struktur dokumentu?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "br, img, hr"
      },
      {
        "id": "B",
        "text": "table, tr, td"
      },
      {
        "id": "C",
        "text": "span, strong, em"
      },
      {
        "id": "D",
        "text": "div, article, header"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 708,
    "text": "708. Który zapis w języku HTML jest deklaracją kodowania znaków w dokumencie?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<charset=\"UTF-8\">"
      },
      {
        "id": "B",
        "text": "<encoding=\"UTF-8\">"
      },
      {
        "id": "C",
        "text": "<meta charset=\"UTF-8\">"
      },
      {
        "id": "D",
        "text": "<meta encoding=\"UTF-8\">"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 709,
    "text": "709. Który zapis w dokumencie HTML pozwala na połączenie z zewnętrznym arkuszem stylów o nazwie style.css?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<link rel=\"stylesheet\" href=\"style.css\">"
      },
      {
        "id": "B",
        "text": "<link rel=\"stylesheet' src=\"style.css\">"
      },
      {
        "id": "C",
        "text": "<a href=\"style.css\">"
      },
      {
        "id": "D",
        "text": "<a src=\"style.css\">"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 710,
    "text": "710. Który znacznik HTML jest elementem blokowym?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "p"
      },
      {
        "id": "B",
        "text": "img"
      },
      {
        "id": "C",
        "text": "span"
      },
      {
        "id": "D",
        "text": "strong"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 711,
    "text": "711. Ile maksymalnie należy użyć znaczników < td > w tabeli o trzech kolumnach i trzech wierszach niezawierającej złączeń komórek i wiersza nagłówkowego?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 712,
    "text": "712. Atrybutem określającym lokalizację pliku graficznego dla znacznika < img > jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "alt"
      },
      {
        "id": "B",
        "text": "src"
      },
      {
        "id": "C",
        "text": "href"
      },
      {
        "id": "D",
        "text": "link"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 713,
    "text": "713. Formatowanie CSS akapitu określa styl szarej ramki o cechach:",
    "image": "e14/713.jpg",
    "answers": [
      {
        "id": "A",
        "text": "linia kropkowa; grubość 2 px; marginesy pomiędzy tekstem a ramką 15 px."
      },
      {
        "id": "B",
        "text": "linia ciągła; grubość 2 px; marginesy pomiędzy tekstem a ramką 15 px."
      },
      {
        "id": "C",
        "text": "linia kreskowa; grubość 2 px; marginesy poza ramką 15 px."
      },
      {
        "id": "D",
        "text": "linia ciągła; grubość 2 px; marginesy poza ramką 15 px."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 714,
    "text": "714. Który selektor formatuje akapity tekstu o klasie tekst oraz element blokowy o ID obrazki?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "p.tekst, div#obrazki"
      },
      {
        "id": "B",
        "text": "p#tekst, div.obrazki"
      },
      {
        "id": "C",
        "text": "p.tekst + div#obrazki"
      },
      {
        "id": "D",
        "text": "p#tekst + div.obrazki"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 715,
    "text": "715. Pogrubienie tekstu za pomocą znacznika < b > można uzyskać także przy wykorzystaniu właściwości CSS",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "text-weight"
      },
      {
        "id": "B",
        "text": "font-weight"
      },
      {
        "id": "C",
        "text": "font-size"
      },
      {
        "id": "D",
        "text": "text-size"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 716,
    "text": "716. Aby w języku CSS ustawić czerwony kolor dla tekstu można użyć stylu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "color: rgb(255,0,0);"
      },
      {
        "id": "B",
        "text": "color: rgb(#FF0000);"
      },
      {
        "id": "C",
        "text": "text-color: rgb(255,0,0);"
      },
      {
        "id": "D",
        "text": "text-color: rgb(#FF0000);"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 717,
    "text": "717. Za pomocą, którego zapisu zostanie utworzony w dokumencie HTML element wyświetlający obraz kotek.jpg z tekstem alternatywnym \"obrazek kotka\"?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<img href=\"kotek.jpg\" title=\"obrazek kotka\">"
      },
      {
        "id": "B",
        "text": "<img src=\"kotek.jpg\" title=\"obrazek kotka\">"
      },
      {
        "id": "C",
        "text": "<img href=\"kotek.jpg\" alt=\"obrazek kotka\">"
      },
      {
        "id": "D",
        "text": "<img src=\"kotek.jpg\" alt=\"obrazek kotka\">"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 718,
    "text": "718. Wskaż poprawne stwierdzenie dotyczące przedstawionego kodu HTML.",
    "image": "e14/718.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Plik animacja.mp4 musi mieć rozdzielczość 640x480 pikseli, aby mógł być uruchomiony."
      },
      {
        "id": "B",
        "text": "Użytkownik nie będzie miał możliwości sterowania odtwarzaniem animacji."
      },
      {
        "id": "C",
        "text": "Kod może nie działać w przeglądarce, jeśli nie obsługuje ona HTML5."
      },
      {
        "id": "D",
        "text": "Lokalizacja pliku jest niepoprawna, nie zawiera ścieżki bezwzględnej."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 719,
    "text": "719. Które zdarzenie pozwala wykonać kod w języku JavaScript w chwili wysyłania formularza HTML i zablokować lub pozwolić na jego wysłanie?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "onClick"
      },
      {
        "id": "B",
        "text": "onEnter"
      },
      {
        "id": "C",
        "text": "onSubmit"
      },
      {
        "id": "D",
        "text": "onChange"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 720,
    "text": "720. W kodzie JavaScript pobrano element za pomocą metody getElementById. Aby zmodyfikować zawartość (treść) elementu można użyć właściwości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Body"
      },
      {
        "id": "B",
        "text": "HTML"
      },
      {
        "id": "C",
        "text": "innerBody"
      },
      {
        "id": "D",
        "text": "innerHTML"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 721,
    "text": "721. Przedstawiona linia kodu zapisana językiem PHP ma za zadanie",
    "image": "e14/721.jpg",
    "answers": [
      {
        "id": "A",
        "text": "porównać dwa napisy."
      },
      {
        "id": "B",
        "text": "przypisać dwie wartości do tablicy."
      },
      {
        "id": "C",
        "text": "zdefiniować stałą o nazwie OSOBA."
      },
      {
        "id": "D",
        "text": "zdefiniować wartość dla zmiennej $OSOBA."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 722,
    "text": "722. Walidacja pól formularzy polega na sprawdzeniu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "czy użytkownik jest zalogowany."
      },
      {
        "id": "B",
        "text": "który użytkownik wprowadził dane."
      },
      {
        "id": "C",
        "text": "czy istnieje plik PHP, który odbierze dane."
      },
      {
        "id": "D",
        "text": "czy wprowadzone dane spełniają określone reguły."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 723,
    "text": "723. Zgodnie z regułami walidacji HTML5, poprawnym zapisem znacznika hr jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<hr>"
      },
      {
        "id": "B",
        "text": "</hr>"
      },
      {
        "id": "C",
        "text": "</hr?>"
      },
      {
        "id": "D",
        "text": "</hr/>"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 724,
    "text": "724. Użytkownik wprowadził adres nieistniejącego zasobu na serwerze. Próba połączenia wygeneruje błąd",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "400"
      },
      {
        "id": "B",
        "text": "404"
      },
      {
        "id": "C",
        "text": "500"
      },
      {
        "id": "D",
        "text": "503"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 725,
    "text": "725. Program o nazwie FileZilla pozwala na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "uruchomienie testów aplikacji."
      },
      {
        "id": "B",
        "text": "walidację plików HTML i CSS."
      },
      {
        "id": "C",
        "text": "załadowanie baz danych do strony CMS Jommla!"
      },
      {
        "id": "D",
        "text": "publikację strony internetowej na odległym serwerze."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 726,
    "text": "726. Który odnośnik jest prawidłowo zdefiniowany?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<a src=\"www.strona.pl\">strona</a>"
      },
      {
        "id": "B",
        "text": "<a href=http://strona.pl>strona</a>"
      },
      {
        "id": "C",
        "text": "<a href=\"http::/strona.pl>strona</a>"
      },
      {
        "id": "D",
        "text": "< a href=\"http://strona.pl\">strona"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 727,
    "text": "727. W którym standardzie języka hipertekstowego zostały wprowadzone do składni znaczniki sekcji <footer>, <header>, <nav>?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "HTML4"
      },
      {
        "id": "B",
        "text": "HTML5"
      },
      {
        "id": "C",
        "text": "XHTML1.0"
      },
      {
        "id": "D",
        "text": "XHTML2.0"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 728,
    "text": "728. Selektor klasy w kaskadowych arkuszach stylów należy zdefiniować za pomocą symbolu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": ". (kropka)"
      },
      {
        "id": "B",
        "text": ": (dwukropek)"
      },
      {
        "id": "C",
        "text": "#"
      },
      {
        "id": "D",
        "text": "*"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 729,
    "text": "729. W języku CSS, aby uzyskać efekt pochylenia tekstu, należy użyć właściwości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "font-size"
      },
      {
        "id": "B",
        "text": "font-style"
      },
      {
        "id": "C",
        "text": "font-family"
      },
      {
        "id": "D",
        "text": "font-variant"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 730,
    "text": "730. Dla którego akapitu zastosowano przedstawioną właściwość stylu CSS?\nborder-radius: 20%;",
    "image": "e14/730.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 731,
    "text": "731. Aby za pomocą CSS zdefiniować przedstawione opływanie obrazu tekstem należy w stylu obrazu wprowadzić zapis",
    "image": "e14/731.jpg",
    "answers": [
      {
        "id": "A",
        "text": "float: left;"
      },
      {
        "id": "B",
        "text": "table: left;"
      },
      {
        "id": "C",
        "text": "clear: both;"
      },
      {
        "id": "D",
        "text": "float: right;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 732,
    "text": "732. Pojęcie \"front-end\" stosowane w kontekście tworzenia stron WWW odnosi się do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "organizowania informacji na serwerze WWW."
      },
      {
        "id": "B",
        "text": "bazy danych z informacjami publikowanymi na stronie."
      },
      {
        "id": "C",
        "text": "działania skryptów i programów wykonywanych po stronie serwera WWW."
      },
      {
        "id": "D",
        "text": "interfejsu strony internetowej związanego z technologiami działającymi po stronie przeglądarki internetowej."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 733,
    "text": "733. Który zestaw pojęć definiuje interfejs użytkownika strony internetowej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Wysyłanie kwerend do bazy, skrypty PHP."
      },
      {
        "id": "B",
        "text": "Przyciski, menu, interakcja użytkownika z aplikacją."
      },
      {
        "id": "C",
        "text": "Szkic strony, diagram witryny, diagram przepływu informacji."
      },
      {
        "id": "D",
        "text": "Przetwarzanie informacji, system zarządzania treścią, projektowanie informacji."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 734,
    "text": "734. Na rysunku pokazano schemat rozmieszczenia bloków na stronie WWW, w której jego części umieszcza się zwykle stopkę strony?",
    "image": "e14/734.jpg",
    "answers": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 735,
    "text": "735. Aby zweryfikować poprawność składni kodu CSS można użyć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "debbugera"
      },
      {
        "id": "B",
        "text": "walidatora"
      },
      {
        "id": "C",
        "text": "konsolidatora"
      },
      {
        "id": "D",
        "text": "optymalizatora"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 736,
    "text": "736. Który z poniższych przykładów kodu HTML5 zostanie zakwalifikowany przez walidator HTML jako błędny?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<p class= \"stl\">tekst</p>"
      },
      {
        "id": "B",
        "text": "<p class= \"stl\" id= \"a\">tekst</p>"
      },
      {
        "id": "C",
        "text": "<p class= \"stl\" style = \"color: #F00 \">tekst</p>"
      },
      {
        "id": "D",
        "text": "<p class= \"stl\"><style>.a{color:#F00}</style>tekst</p>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 737,
    "text": "737. Aby bezpiecznie przesłać pliki strony internetowej na serwer WWW można użyć protokołu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "POP3"
      },
      {
        "id": "B",
        "text": "SFTP"
      },
      {
        "id": "C",
        "text": "TELNET"
      },
      {
        "id": "D",
        "text": "IMAP"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 738,
    "text": "738. Kolor zielony, w notacji szesnastkowej skróconej, można zapisać w CSS sekwencją",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#F00"
      },
      {
        "id": "B",
        "text": "#0F0"
      },
      {
        "id": "C",
        "text": "#00F"
      },
      {
        "id": "D",
        "text": "#FFF"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 739,
    "text": "739. Składowymi modelu barw CMYK są kolory:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "czerwony, zielony i niebieski."
      },
      {
        "id": "B",
        "text": "cyjan, magenta, żółty i czarny."
      },
      {
        "id": "C",
        "text": "cyjan, magenta, żółty i karmazyn."
      },
      {
        "id": "D",
        "text": "czerwony, zielony, niebieski i kanał alfa."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 740,
    "text": "740. Powstające podczas zapisu pliku graficznego prostokątne zniekształcenia obrazu są charakterystyczne dla formatu",
    "image": "e14/740.jpg",
    "answers": [
      {
        "id": "A",
        "text": "BMP bez kompresji"
      },
      {
        "id": "B",
        "text": "GIF z kompresją bezstratną LZW."
      },
      {
        "id": "C",
        "text": "PNG z kompresją bezstratną LZ77."
      },
      {
        "id": "D",
        "text": "JPEG z dużym stopniem kompresji stratnej."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 741,
    "text": "741. Który rastrowy format graficzny jest obsługiwany przez przeglądarki internetowe?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "PCX"
      },
      {
        "id": "B",
        "text": "TGA"
      },
      {
        "id": "C",
        "text": "PNG"
      },
      {
        "id": "D",
        "text": "FLIF"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 742,
    "text": "742. Proporcje obrazu 16:9 (przy założeniu, że piksel ma kształt kwadratu) można uzyskać przy rozdzielczości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "320 na 240 pikseli."
      },
      {
        "id": "B",
        "text": "800 na 480 pikseli."
      },
      {
        "id": "C",
        "text": "1366 na 768 pikseli."
      },
      {
        "id": "D",
        "text": "2560 na 2048 pikseli."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 743,
    "text": "743. Który z wymienionych formatów umożliwia zapis dźwięku i obrazu?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "MP3"
      },
      {
        "id": "B",
        "text": "MP4"
      },
      {
        "id": "C",
        "text": "PNG"
      },
      {
        "id": "D",
        "text": "WAV"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 744,
    "text": "744. Podczas strumieniowego przesyłania cyfrowego materiału wideo parametrem wpływającym na jakość obrazu i dźwięku jest przepływność. Wielkość ta opisuje liczbę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "próbek dźwięku w jednostce czasu."
      },
      {
        "id": "B",
        "text": "pikseli obrazu wyświetlanych na ekranie."
      },
      {
        "id": "C",
        "text": "bitów transmitowanych w jednostce czasu."
      },
      {
        "id": "D",
        "text": "pikseli wyświetlanego obrazu wyrażoną ilorazem jego długości do wysokości."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 745,
    "text": "745. Funkcja COUNT języka SQL realizuje",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zliczanie znaków w polu tekstowym."
      },
      {
        "id": "B",
        "text": "zliczanie rekordów wybranych kwerendą."
      },
      {
        "id": "C",
        "text": "obliczenie średniej wartości w wybranej kolumnie."
      },
      {
        "id": "D",
        "text": "obliczenie wartości bezwzględnej w polu liczbowym."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 746,
    "text": "746. Ustalenie relacji pomiędzy tabelami w systemie bazodanowym MySQL umożliwia klauzula",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "INDEX"
      },
      {
        "id": "B",
        "text": "ORDER BY"
      },
      {
        "id": "C",
        "text": "REFERENCES"
      },
      {
        "id": "D",
        "text": "PRIMARY KEY"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 747,
    "text": "747. Aby wyświetlić rekordy z tabeli pracownicy tylko dla pracowników, którzy skończyli 26 lat należy użyć zapytania",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT * FROM pracownicy OR wiek > 25;"
      },
      {
        "id": "B",
        "text": "SELECT * FROM pracownicy AND wiek > 25;"
      },
      {
        "id": "C",
        "text": "SELECT * FROM wiek WHERE pracownicy > 25;"
      },
      {
        "id": "D",
        "text": "SELECT * FROM pracownicy WHERE wiek > 25;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 748,
    "text": "748. W bazach danych relacja wiele-do-wielu pomiędzy tabelami występuje, gdy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wielu wierszom tabeli A przypada wiele wierszy tabeli B."
      },
      {
        "id": "B",
        "text": "wielu wierszom z tabeli A przypada tylko jeden wiersz tabeli B."
      },
      {
        "id": "C",
        "text": "jednemu wierszowi z tabeli A może odpowiadać wiele wierszy w tabeli B."
      },
      {
        "id": "D",
        "text": "jednemu wierszowi z tabeli A może odpowiadać wyłącznie jeden wiersz wtabeli B."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 749,
    "text": "749. Aby zaimportować plik z danymi SQL do bazy danych MySQL można użyć narzędzia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "FileZilla"
      },
      {
        "id": "B",
        "text": "Symfony 3."
      },
      {
        "id": "C",
        "text": "phpMyAdmin."
      },
      {
        "id": "D",
        "text": "TotalCommander."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 750,
    "text": "750. Aby w systemie MySQL nadać użytkownikowi prawo do nadawania i zmiany uprawnień innym użytkownikom należy zastosować klauzulę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "TRGGER"
      },
      {
        "id": "B",
        "text": "GRANT OPTION"
      },
      {
        "id": "C",
        "text": "ALL PRIVILEGES"
      },
      {
        "id": "D",
        "text": "FLUSH PRIVILEGES"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 751,
    "text": "751. Aby wykonać kopię zapasową bazy danych MySQL można posłużyć się",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "importem bazy."
      },
      {
        "id": "B",
        "text": "eksportem bazy."
      },
      {
        "id": "C",
        "text": "agregacją danych."
      },
      {
        "id": "D",
        "text": "modyfikacją danych."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 752,
    "text": "752. Którą integralność opisuje cytowana definicja?  \"... polega na wprowadzeniu i utrzymaniu powiązań pomiędzy tabelami. Związki te tworzy się przez umieszczenie kolumny pełniącej rolę klucza głównego tabeli w innej tabeli, co nadaje kolumnie funkcję klucza obcego.\"",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Encji."
      },
      {
        "id": "B",
        "text": "Statyczną."
      },
      {
        "id": "C",
        "text": "Referencyjną."
      },
      {
        "id": "D",
        "text": "Semantyczną."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 753,
    "text": "753. Czynnością zalecaną przed wykonaniem kopii bezpieczeństwa danych w bazie MySQL jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "sprawdzenie czy baza jest dostatecznie wydajna."
      },
      {
        "id": "B",
        "text": "zdefiniowanie systemu kodowania znaków w bazie."
      },
      {
        "id": "C",
        "text": "nadanie uprawnień do przeglądania bazy dla Administratora."
      },
      {
        "id": "D",
        "text": "sprawdzenie integralności bazy i ewentualnie jej naprawa."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 754,
    "text": "754. Zmienna typu integer lub int może przechowywać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "znak."
      },
      {
        "id": "B",
        "text": "ciąg znaków."
      },
      {
        "id": "C",
        "text": "liczbę całkowitą."
      },
      {
        "id": "D",
        "text": "liczbę rzeczywistą."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 755,
    "text": "755. Wskaż typ złożony",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "char"
      },
      {
        "id": "B",
        "text": "bool"
      },
      {
        "id": "C",
        "text": "float"
      },
      {
        "id": "D",
        "text": "class"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 756,
    "text": "756. Wskaż instrukcję iteracyjną",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "for"
      },
      {
        "id": "B",
        "text": "else"
      },
      {
        "id": "C",
        "text": "throw"
      },
      {
        "id": "D",
        "text": "switch"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 757,
    "text": "757. Debugger to oprogramowanie, którego zadaniem jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "instalowanie środowiska programistycznego."
      },
      {
        "id": "B",
        "text": "wykrywanie błędów składniowych języka programowania w kodzie źródłowym."
      },
      {
        "id": "C",
        "text": "łączenie plików bibliotek i wstępnie przetworzonego kodu źródłowego w plik wykonywalny."
      },
      {
        "id": "D",
        "text": "dynamiczna analiza uruchomionego programu w celu wykrycia przyczyn nieprawidłowego działania."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 758,
    "text": "758. Którą wartość będzie przechowywała zmienna a po wykonaniu przedstawionej sekwencji instrukcji języka PHP?",
    "image": "e14/758.jpg",
    "answers": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "11"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 759,
    "text": "759. Który framework został opracowany dla skryptowego języka PHP?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Spring."
      },
      {
        "id": "B",
        "text": "Angular."
      },
      {
        "id": "C",
        "text": "Symfony."
      },
      {
        "id": "D",
        "text": "ASP.NET"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 760,
    "text": "760. Formularz, którego fragment przedstawiono, został obsłużony w skrypcie PHP. Wskaż prawidłowo zapisane pobranie wartości wprowadzonej do pola edycyjnego",
    "image": "e14/760.jpg",
    "answers": [
      {
        "id": "A",
        "text": "name = GET['imie'];"
      },
      {
        "id": "B",
        "text": "name = $ _ GET[imie];"
      },
      {
        "id": "C",
        "text": "$name = $POST['Imię'];"
      },
      {
        "id": "D",
        "text": "$name = $ _ POST['imie'];"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 761,
    "text": "761. Aby przetestować poprawność działania kodu JavaScript należy użyć",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "interpretera PHP."
      },
      {
        "id": "B",
        "text": "kompilatora C++."
      },
      {
        "id": "C",
        "text": "interpretera PERL."
      },
      {
        "id": "D",
        "text": "konsoli w przeglądarce internetowej."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 762,
    "text": "762. Wskaż komentarz wieloliniowy w języku PHP",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#"
      },
      {
        "id": "B",
        "text": "/ /"
      },
      {
        "id": "C",
        "text": "/* */"
      },
      {
        "id": "D",
        "text": "<!-- -->"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 763,
    "text": "763. CAPTCHA to technika zabezpieczeń na stronach WWW pozwalająca",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "przyspieszyć proces logowania do aplikacji internetowej."
      },
      {
        "id": "B",
        "text": "pominąć proces uwierzytelniania do aplikacji internetowej."
      },
      {
        "id": "C",
        "text": "potwierdzić, że dane z formularza są wysyłane przez człowieka."
      },
      {
        "id": "D",
        "text": "automatycznie wypełnić formularz logowania danymi użytkownika."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 764,
    "text": "764. Wskaż znacznik HTML pozwalający na zapisanie tekstu nieprawidłowego lub nieodpowiedniego w sposób \nprzekreślony.",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "< s > < /s >"
      },
      {
        "id": "B",
        "text": "< b > < /b >"
      },
      {
        "id": "C",
        "text": "< em > < /em >"
      },
      {
        "id": "D",
        "text": "< sub > < /sub >"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 765,
    "text": "765. Element < meta charset=\"utf-8\" > jest stosowany do określenia metadanych strony internetowej dotyczących",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "opisu strony"
      },
      {
        "id": "B",
        "text": "języka strony"
      },
      {
        "id": "C",
        "text": "słów kluczowych"
      },
      {
        "id": "D",
        "text": "kodowania znaków"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 766,
    "text": "766. W języku HTML zdefiniowano listę, która",
    "image": "e14/766.jpg",
    "answers": [
      {
        "id": "A",
        "text": "jest punktowana z zagłębioną listą numerowaną"
      },
      {
        "id": "B",
        "text": "jest numerowana z zagłębioną listą punktową"
      },
      {
        "id": "C",
        "text": "nie ma zagłębień i jest punktowana, wyświetla 5 punktów"
      },
      {
        "id": "D",
        "text": "nie ma zagłębień i jest numerowana, słowo \"niebieski\" ma przyporządkowany numer 5"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 767,
    "text": "767. Jaką szerokość strony pozostawiono na jej treść, na podstawie przedstawionej definicji CSS?",
    "image": "e14/767.jpg",
    "answers": [
      {
        "id": "A",
        "text": "2 px"
      },
      {
        "id": "B",
        "text": "560 px"
      },
      {
        "id": "C",
        "text": "600 px"
      },
      {
        "id": "D",
        "text": "640 px"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 768,
    "text": "768. Algorytm sortowania tablicy polegający na n-krotnym porównywaniu ze sobą dwóch sąsiadujących \nelementów tablicy i zamianie miejscami w przypadku spełnienia warunku jest nazywany sortowaniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "szybkim"
      },
      {
        "id": "B",
        "text": "przez wybór"
      },
      {
        "id": "C",
        "text": "bąbelkowym"
      },
      {
        "id": "D",
        "text": "przez scalanie"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 769,
    "text": "769. W sklepie z farbami jest ustalony schemat wyliczania ceny farby: za kolor niebieski i zielony przy pojemności\n2 litry cena farby jest równa cenie bazowej + 20%. Wyrażenie logiczne zapisane w języku JavaScript \nsprawdzające tę regułę ma postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "kolor = 'niebieski' || kolor = 'zielony' && pojemnosc = 2"
      },
      {
        "id": "B",
        "text": "(kolor = 'niebieski' || kolor = 'zielony') || pojemnosc = 2"
      },
      {
        "id": "C",
        "text": "kolor == 'niebieski' && kolor == 'zielony' && pojemnosc == 2"
      },
      {
        "id": "D",
        "text": "(kolor == 'niebieski' || kolor == 'zielony') && pojemnosc == 2"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 770,
    "text": "770. Instrukcją równoważną funkcjonalnie do przedstawionej instrukcji JavaScript jest",
    "image": "e14/770.jpg",
    "answers": [
      {
        "id": "A",
        "text": "kod 1"
      },
      {
        "id": "B",
        "text": "kod 2"
      },
      {
        "id": "C",
        "text": "kod 3"
      },
      {
        "id": "D",
        "text": "kod 4"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 771,
    "text": "771. Zmienna typu double może przyjąć wartości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "\"Ala\"; 'd'"
      },
      {
        "id": "B",
        "text": "1,44; 2,55"
      },
      {
        "id": "C",
        "text": "2.4; 4; 3.2"
      },
      {
        "id": "D",
        "text": "1979-12-05; 12:33"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 772,
    "text": "772. W języku JavaScript metoda Math.random() ma za zadanie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "porównać dwa napisy"
      },
      {
        "id": "B",
        "text": "zwrócić zaokrągloną liczbę"
      },
      {
        "id": "C",
        "text": "zwrócić liczbę pseudolosową"
      },
      {
        "id": "D",
        "text": "zaokrąglić liczbę do najbliższej większej całkowitej"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 773,
    "text": "773. Jaki będzie efekt wykonania przedstawionych instrukcji JavaScript?",
    "image": "e14/773.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Tylko dla elementu o id równym styl1 zostanie przypisany styl pogrubienia tekstu na bolder"
      },
      {
        "id": "B",
        "text": "Dla wszystkich elementów na stronie zostanie przypisany styl pogrubienia tekstu na bolder"
      },
      {
        "id": "C",
        "text": "Dla wszystkich elementów przypisanych do klasy styl1 zostanie nadany styl pogrubienia tekstu bolder"
      },
      {
        "id": "D",
        "text": "Tylko dla pierwszego elementu przypisanego do klasy styl1 zostanie nadany styl pogrubienia tekstu\nbolder"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 774,
    "text": "774. Po wykonaniu przedstawionego kodu JavaScript działającego na wcześniej zainicjalizowanej tablicy liczby\nw zmiennej wynik jest przechowywana suma",
    "image": "e14/774.jpg",
    "answers": [
      {
        "id": "A",
        "text": "dodatnich elementów tablicy"
      },
      {
        "id": "B",
        "text": "wszystkich elementów tablicy"
      },
      {
        "id": "C",
        "text": "parzystych elementów tablicy"
      },
      {
        "id": "D",
        "text": "nieparzystych elementów tablicy"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 775,
    "text": "775. Ile iteracji zrealizuje przedstawiona pętla zapisana w języku PHP?",
    "image": "e14/775.jpg",
    "answers": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "25"
      },
      {
        "id": "D",
        "text": "26"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 776,
    "text": "776. Przedstawiona funkcja zapisana w języku PHP",
    "image": "e14/776.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zwraca wartość"
      },
      {
        "id": "B",
        "text": "nie zwraca wartości"
      },
      {
        "id": "C",
        "text": "pobiera dwa parametry z domyślną wartością"
      },
      {
        "id": "D",
        "text": "jest zdefiniowana z dwoma parametrami rzeczywistymi"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 777,
    "text": "777. Po wykonaniu przedstawionego kodu PHP w zmiennej $napis jest przechowywany ciąg znaków",
    "image": "e14/777.jpg",
    "answers": [
      {
        "id": "A",
        "text": "gr"
      },
      {
        "id": "B",
        "text": "og"
      },
      {
        "id": "C",
        "text": "gramo"
      },
      {
        "id": "D",
        "text": "ogram"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 778,
    "text": "778. Przedstawiony błąd, wygenerowany podczas interpretacji kodu PHP, może być spowodowany",
    "image": "e14/778.jpg",
    "answers": [
      {
        "id": "A",
        "text": "odwołaniem się do niezadeklarowanej zmiennej"
      },
      {
        "id": "B",
        "text": "niepowodzeniem wydania kwerendy na bazie danych"
      },
      {
        "id": "C",
        "text": "próbą odwołania się do nieistniejącego elementu tablicy"
      },
      {
        "id": "D",
        "text": "brakiem bazy danych o nazwie wskazanej w funkcji mysqli_connect"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 779,
    "text": "779. Wskaż wszystkie znaki umożliwiające komentowanie kodu języku PHP",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "jedynie /* */"
      },
      {
        "id": "B",
        "text": "< ?php ? > oraz / /"
      },
      {
        "id": "C",
        "text": "/* */ oraz < !-- -- >"
      },
      {
        "id": "D",
        "text": "/* */ oraz / / oraz #"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 780,
    "text": "780. W relacyjnych bazach danych encja jest reprezentowana przez",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "tabelę"
      },
      {
        "id": "B",
        "text": "rekord"
      },
      {
        "id": "C",
        "text": "relację"
      },
      {
        "id": "D",
        "text": "kwerendę"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 781,
    "text": "781. Wybrany minimalny zestaw atrybutów relacji, jednoznacznie identyfikujący każdy rekord tej relacji, \nprzyjmujący wartości niepowtarzalne i niepuste, nazywamy kluczem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "obcym"
      },
      {
        "id": "B",
        "text": "głównym"
      },
      {
        "id": "C",
        "text": "złożonym"
      },
      {
        "id": "D",
        "text": "kandydującym"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 782,
    "text": "782. W tabeli mieszkancy z polami id, imie, nazwisko, ulica, numer, czynsz (wartość całkowita) należy wybrać \ndane osób mieszkających na ulicy Mickiewicza pod numerami 71, 72, 80, których czynsz jest niższy niż \n1000 zł. Klauzula WHERE do zapytania będzie miała postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "WHERE ulica = 'Mickiewicza' OR numer IN (71, 72, 80) OR czynsz < 1000"
      },
      {
        "id": "B",
        "text": "WHERE ulica = 'Mickiewicza' AND numer IN (71, 72, 80) OR czynsz < 1000"
      },
      {
        "id": "C",
        "text": "WHERE ulica = 'Mickiewicza' AND numer IN (71, 72, 80) AND czynsz < 1000"
      },
      {
        "id": "D",
        "text": "WHERE ulica = 'Mickiewicza' AND numer > 70 AND numer < 81 OR czynsz < 1000"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 783,
    "text": "783. Wskaż kwerendę, która z tabeli klienci wybierze jedynie nazwiska trzech najlepszych klientów, czyli takich, \nktórzy na swoim koncie mają najwięcej punktów (pole całkowite punkty)",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwisko FROM klienci LIMIT 3;"
      },
      {
        "id": "B",
        "text": "SELECT nazwisko FROM klienci ORDER BY punkty DESC LIMIT 3;"
      },
      {
        "id": "C",
        "text": "SELECT nazwisko FROM klienci ORDER BY nazwisko DESC LIMIT 3;"
      },
      {
        "id": "D",
        "text": "SELECT LIMIT 3 nazwisko FROM klienci ORDER BY nazwisko DESC;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 784,
    "text": "784. Z tabeli mieszkancy należy wybrać niepowtarzające się nazwy miast, w tym celu należy skorzystać \nz wyrażenia SQL zawierającego klauzulę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "CHECK"
      },
      {
        "id": "B",
        "text": "HAVING"
      },
      {
        "id": "C",
        "text": "UNIQUE"
      },
      {
        "id": "D",
        "text": "DISTINCT"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 785,
    "text": "785. Tabela gory, której fragment przedstawiono, zawiera polskie pasma górskie wraz z ich szczytami. Wskaż kwerendę licząca dla każdego pasma górskiego średnią wysokość jego szczytów.",
    "image": "e14/785.jpg",
    "answers": [
      {
        "id": "A",
        "text": "SELECT pasmo, AVG(wysokosc) FROM gory LIMIT pasmo;"
      },
      {
        "id": "B",
        "text": "SELECT pasmo, AVG(wysokosc) FROM gory GROUP BY pasmo;"
      },
      {
        "id": "C",
        "text": "SELECT pasmo, SUM(wysokosc) FROM gory GROUP BY pasmo;"
      },
      {
        "id": "D",
        "text": "SELECT pasmo, COUNT(wysokosc) FROM gory ORDER BY pasmo;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 786,
    "text": "786. Które dane zostaną wybrane w wyniku działania kwerendy na przedstawionych rekordach? \nSELECT id FROM samochody WHERE rocznik LIKE \"2%4\";",
    "image": "e14/786.jpg",
    "answers": [
      {
        "id": "A",
        "text": "puste dane"
      },
      {
        "id": "B",
        "text": "wszystkie id"
      },
      {
        "id": "C",
        "text": "jedynie id równe 8"
      },
      {
        "id": "D",
        "text": "pole id równe 7 oraz 8"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 787,
    "text": "787. Z przedstawionych tabel Artykuly i Autorzy należy wybrać jedynie nazwiska autorów i tytuły ich artykułów, \nktóre zostały ocenione na 5. Kwerenda wybierająca te dane ma postać",
    "image": "e14/787.jpg",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwisko, tytul FROM autorzy, artykuly WHERE ocena == 5;"
      },
      {
        "id": "B",
        "text": "SELECT nazwisko, tytul FROM autorzy JOIN artykuly ON autorzy.id = autorzy_id;"
      },
      {
        "id": "C",
        "text": "SELECT nazwisko, tytul FROM autorzy JOIN artykuly ON autorzy.id = \nartykuly.id;"
      },
      {
        "id": "D",
        "text": "SELECT nazwisko, tytul FROM autorzy JOIN artykuly ON autorzy.id = autorzy_id \nWHERE ocena = 5;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 788,
    "text": "788. Podczas tworzenia tabeli produkty należy utworzyć pole cena będące reprezentacją ceny produktu. \nOdpowiedni typ dla tego pola, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DECIMAL(10,2)"
      },
      {
        "id": "B",
        "text": "INTEGER(11)"
      },
      {
        "id": "C",
        "text": "TINYTEXT"
      },
      {
        "id": "D",
        "text": "ENUM"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 789,
    "text": "789. Tworząc tabelę, do pola które będzie przyjmowało kolejne liczby całkowite nadawane automatycznie, należy \ndodać własność",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "NULL"
      },
      {
        "id": "B",
        "text": "NOT NULL"
      },
      {
        "id": "C",
        "text": "PRIMARY KEY"
      },
      {
        "id": "D",
        "text": "AUTO_INCREMENT"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 790,
    "text": "790. Aby użyć zewnętrznego skryptu JavaScript o nazwie skrypt.js, należy zapisać w kodzie HTML",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<link rel=\"script\" href=\"skrypt.js\" />"
      },
      {
        "id": "B",
        "text": "<script src=\"skrypt.js\"></script>"
      },
      {
        "id": "C",
        "text": "<link rel=\"JavaScript\" type=\"js\" href=\"skrypt.js\" />"
      },
      {
        "id": "D",
        "text": "<script> skrypt.js </script>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 791,
    "text": "791. Sklep internetowy korzysta z tabeli faktury. Podczas tworzenia faktury nie zawsze pole dataPlatnosci jest \nwypełniane. Aby to naprawić, na koniec dnia należy wpisać aktualną datę do wierszy, w których to pole jest \npuste (niewypełnione). Można w tym celu posłużyć się kwerendą",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UPDATE faktury SET dataPlatnosci=CURTIME() WHERE id = 3;"
      },
      {
        "id": "B",
        "text": "UPDATE faktury SET dataPlatnosci=CURDATE() WHERE dataPlatnosci IS NULL;"
      },
      {
        "id": "C",
        "text": "UPDATE faktury SET dataPlatnosci=CURTIME() WHERE dataPlatnosci IS NOT NULL;"
      },
      {
        "id": "D",
        "text": "UPDATE faktury SET dataPlatnosci=CURDATE() WHERE dataplatnosci = '0000-00-\n00 ';"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 792,
    "text": "792. Po wydaniu polecenia SQL prezentowanego w ramce użytkownik Ela będzie mógł",
    "image": "e14/792.jpg",
    "answers": [
      {
        "id": "A",
        "text": "jedynie dodawać i modyfikować dane"
      },
      {
        "id": "B",
        "text": "wykonywać wszystkie akcje na danych"
      },
      {
        "id": "C",
        "text": "jedynie tworzyć i modyfikować strukturę tabel"
      },
      {
        "id": "D",
        "text": "wykonywać wszystkie operacje na strukturze danych"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 793,
    "text": "793. Polecenie służące do sprawdzenia i optymalizacji bazy danych to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "mysqlshow"
      },
      {
        "id": "B",
        "text": "mysqldump"
      },
      {
        "id": "C",
        "text": "mysqlcheck"
      },
      {
        "id": "D",
        "text": "mysqlimport"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 794,
    "text": "794. W języku HTML 5 atrybut action stosowany jest w znaczniku",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "< head >"
      },
      {
        "id": "B",
        "text": "< body >"
      },
      {
        "id": "C",
        "text": "< code >"
      },
      {
        "id": "D",
        "text": "< form >"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 795,
    "text": "795. Który wykaz znaczników definiujących przedstawiony projekt witryny w sposób semantyczny (znaczeniowy)\njest zgodny ze standardem HTML 5?",
    "image": "e14/795.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wykaz 1"
      },
      {
        "id": "B",
        "text": "wykaz 2"
      },
      {
        "id": "C",
        "text": "wykaz 3"
      },
      {
        "id": "D",
        "text": "wykaz 4"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 796,
    "text": "796. O czym informuje przeglądarkę internetową zapis < !DOCTYPE html >?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Dokument został zapisany w języku HTML 4"
      },
      {
        "id": "B",
        "text": "Dokument został zapisany w języku HTML 5"
      },
      {
        "id": "C",
        "text": "W dokumencie wszystkie znaczniki są zapisywane wielkimi literami"
      },
      {
        "id": "D",
        "text": "W dokumencie jest wymagane zamknięcie dla każdego znacznika, również samozamykającego"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 797,
    "text": "797. W stylu CSS przedstawionym w ramce zdefiniowano klasę uzytkownik. Czcionką koloru niebieskiego na \nstronie będą zapisane",
    "image": "e14/797.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wszystkie paragrafy"
      },
      {
        "id": "B",
        "text": "tylko znaczniki tekstowe typu < p >, < h1 >"
      },
      {
        "id": "C",
        "text": "paragrafy, do których została przypisana klasa uzytkownik"
      },
      {
        "id": "D",
        "text": "dowolne znaczniki w sekcji < body > z przypisaną klasą uzytkownik"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 798,
    "text": "798. Wskaż paragraf sformatowany przedstawionym stylem CSS.",
    "image": "e14/798.jpg",
    "answers": [
      {
        "id": "A",
        "text": "paragraf 1"
      },
      {
        "id": "B",
        "text": "paragraf 2"
      },
      {
        "id": "C",
        "text": "paragraf 3"
      },
      {
        "id": "D",
        "text": "paragraf 4"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 799,
    "text": "799. W arkuszu CSS zapisano przedstawione style. Jeżeli hiperłącze zostanie wybrane, to po powrocie na stronę \nto hiperłącze będzie w kolorze",
    "image": "e14/799.jpg",
    "answers": [
      {
        "id": "A",
        "text": "żółtym"
      },
      {
        "id": "B",
        "text": "zielonym"
      },
      {
        "id": "C",
        "text": "brązowym"
      },
      {
        "id": "D",
        "text": "czerwonym"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 800,
    "text": "800. Kolor zielony ma w notacji szesnastkowej wartość #008000. Wartość ta zapisana w notacji RGB to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "rgb(0, 80, 0)"
      },
      {
        "id": "B",
        "text": "rgb(0, 100, 0)"
      },
      {
        "id": "C",
        "text": "rgb(0, 128, 0)"
      },
      {
        "id": "D",
        "text": "rgb(0, 160, 0)"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 801,
    "text": "801. Dla uzyskania przedstawionego efektu w edytorze grafiki rastrowej zastosowano",
    "image": "e14/801.jpg",
    "answers": [
      {
        "id": "A",
        "text": "kanał alpha"
      },
      {
        "id": "B",
        "text": "gradient liniowy"
      },
      {
        "id": "C",
        "text": "gradient kołowy"
      },
      {
        "id": "D",
        "text": "zmianę nasycenia"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 802,
    "text": "802. Przedstawiona ikona funkcji edytora grafiki rastrowej o nazwie „różdżka” umożliwia",
    "image": "e14/802.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zaznaczenie obszaru na podstawie koloru"
      },
      {
        "id": "B",
        "text": "wybiórcze rozsmarowywanie koloru za pomocą pędzla"
      },
      {
        "id": "C",
        "text": "pobranie wskazanego koloru i ustawienie go jako aktywny"
      },
      {
        "id": "D",
        "text": "odręczne zaznaczanie obszarów przez przeciąganie po nich kursora"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 803,
    "text": "803. Testując skrypt JavaScript można wyświetlać w konsoli aktualnie przechowywane wartości zmiennych \nza pomocą funkcji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "console.log()"
      },
      {
        "id": "B",
        "text": "console.warn()"
      },
      {
        "id": "C",
        "text": "console.error()"
      },
      {
        "id": "D",
        "text": "console.count()"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 804,
    "text": "804. Aby za pomocą skryptu JavaScript zmienić wartość cechy elementu opisanej językiem CSS, należy posłużyć \nsię szablonem zapisu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "document.getElementById(id).innerHTML = < nowa wartość >;"
      },
      {
        "id": "B",
        "text": "document.getElementById(id).< nazwa-atrybutu > = < nowa wartość >;"
      },
      {
        "id": "C",
        "text": "document.getElementById(id).< nazwa właściwości > = < nowa wartość >;"
      },
      {
        "id": "D",
        "text": "document.getElementById(id).style.< nazwa właściwości > = < nowa wartość >;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 805,
    "text": "805. W której tablicy superglobalnej w środowisku PHP powinno się przechowywać dane związane z logowaniem \nużytkownika w sposób zapewniający ich bezpieczeństwo?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "$ _ SESSION"
      },
      {
        "id": "B",
        "text": "$ _ SERVER"
      },
      {
        "id": "C",
        "text": "$ _ COOKIE"
      },
      {
        "id": "D",
        "text": "$ _ FILES"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 806,
    "text": "806. W wyniku walidacji dokumentu HTML został wygenerowany błąd przedstawiony na zrzucie. Aby go \nwyeliminować należy",
    "image": "e14/806.jpg",
    "answers": [
      {
        "id": "A",
        "text": "dodać atrybut alt do obrazu"
      },
      {
        "id": "B",
        "text": "zamienić zapis < /h1 > na < h1 >"
      },
      {
        "id": "C",
        "text": "w znaczniku img zamienić nazwę atrybutu src na alt"
      },
      {
        "id": "D",
        "text": "w znaczniku img zamienić nazwę atrybutu src na href"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 807,
    "text": "807. Program FileZilla może zostać wykorzystany do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "walidacji strony internetowej"
      },
      {
        "id": "B",
        "text": "publikacji strony internetowej na serwerze"
      },
      {
        "id": "C",
        "text": "zarządzania bazami danych strony internetowej"
      },
      {
        "id": "D",
        "text": "zmiany domyślnych ustawień hostingu dla strony internetowej"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 808,
    "text": "808. Które z poleceń algorytmu odpowiada graficznej reprezentacji bloku przedstawionego na obrazie?",
    "image": "e14/808.jpg",
    "answers": [
      {
        "id": "A",
        "text": "n > 70"
      },
      {
        "id": "B",
        "text": "n ← n - 3"
      },
      {
        "id": "C",
        "text": "wypisz w konsoli zmienną n"
      },
      {
        "id": "D",
        "text": "wykonaj podprogram sortowania tablicy t"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 809,
    "text": "809. Metoda projektowania algorytmów, polegająca na podziale problemu na dwa lub więcej mniejszych \npodproblemów, tak długo aż fragmenty staną się wystarczająco proste do bezpośredniego rozwiązania, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "dziel i zwyciężaj"
      },
      {
        "id": "B",
        "text": "sito Eratostenesa"
      },
      {
        "id": "C",
        "text": "słowa Fibonacciego"
      },
      {
        "id": "D",
        "text": "sortowanie przez wybór"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 810,
    "text": "810. Program zapisany w języku C++ ma za zadanie wczytać zmienną całkowitą liczba i wyświetlić ją wtedy, gdy \nprzyjmuje trzycyfrowe wartości parzyste. Instrukcja warunkowa sprawdzająca ten warunek powinna zawierać \nwyrażenie logiczne",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "liczba % 2 == 0 || liczba > 99 || liczba < 999"
      },
      {
        "id": "B",
        "text": "liczba % 2 == 0 && liczba > 99 && liczba < 999"
      },
      {
        "id": "C",
        "text": "liczba % 2 == 0 || (liczba > 99 && liczba < 999)"
      },
      {
        "id": "D",
        "text": "liczba % 2 == 0 && (liczba > 99 || liczba < 999)"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 811,
    "text": "811. Wskaż instrukcję równoważną funkcjonalnie do instrukcji while zapisanej w języku PHP.",
    "image": "e14/811.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Instrukcja 1"
      },
      {
        "id": "B",
        "text": "Instrukcja 2"
      },
      {
        "id": "C",
        "text": "Instrukcja 3"
      },
      {
        "id": "D",
        "text": "Instrukcja 4"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 812,
    "text": "812. Co będzie wynikiem po wywołaniu przedstawionego skryptu?",
    "image": "e14/812.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Nie wyświetli się żaden napis"
      },
      {
        "id": "B",
        "text": "Wyświetli się tylko napis „test1”"
      },
      {
        "id": "C",
        "text": "Wyświetli się tylko napis „test2”"
      },
      {
        "id": "D",
        "text": "Wyświetlą się oba napisy: „test1” i „test2”"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 813,
    "text": "813. W języku C++ zdefiniowano zmienną char zm1[10];\nZmienna ta jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "liczbą"
      },
      {
        "id": "B",
        "text": "znakiem"
      },
      {
        "id": "C",
        "text": "tablicą znaków"
      },
      {
        "id": "D",
        "text": "tablicą łańcuchów"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 814,
    "text": "814. Która definicja tablicy asocjacyjnej w języku PHP jest poprawna składniowo?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "$wiek = array(\"Anna\"=35, \"Ewa\"=37, \"Oliwia\"=43);"
      },
      {
        "id": "B",
        "text": "$wiek = array([Anna, 35], [Ewa, 37], [Oliwia, 43]);"
      },
      {
        "id": "C",
        "text": "$wiek = array(\"Anna\"=>\"35\", \"Ewa\"=>\"37\", \"Oliwia\"=>\"43\");"
      },
      {
        "id": "D",
        "text": "$wiek = array({\"Anna\", \"35\"}, {\"Ewa\", \"37\"}, {\"Oliwia\", \"43\"});"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 815,
    "text": "815. W języku JavaScript, aby sprawdzić jednym poleceniem czy dany napis zawiera w sobie inny napis, można \nskorzystać z metody",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "repeat()"
      },
      {
        "id": "B",
        "text": "substr()"
      },
      {
        "id": "C",
        "text": "valueOf()"
      },
      {
        "id": "D",
        "text": "includes()"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 816,
    "text": "816. W jaki sposób w języku PHP należy ustawić zmienną sesji o nazwie wyborID na wartość 4?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "session.wyborID = 4;"
      },
      {
        "id": "B",
        "text": "session.wyborID = {4};"
      },
      {
        "id": "C",
        "text": "$ _SESSION[4] = wyborID;"
      },
      {
        "id": "D",
        "text": "$ _SESSION[\"wyborID\"] = 4;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 817,
    "text": "817. W języku PHP zmienna $ _SERVER przechowuje między innymi informacje o",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "danych dotyczących sesji"
      },
      {
        "id": "B",
        "text": "adresie IP serwera, nazwie protokołu"
      },
      {
        "id": "C",
        "text": "danych formularza przetwarzanego na serwerze."
      },
      {
        "id": "D",
        "text": "nazwie ciasteczek zapisanych na serwerze i danych z nimi związanych"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 818,
    "text": "818. Którą wartość zwróci funkcja zapisana w języku C++, jeżeli jej parametrami są a = 4 oraz b = 3?",
    "image": "e14/818.jpg",
    "answers": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "64"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 819,
    "text": "819. Program PHP wyświetla aktualny czas w postaci godzina:minuta:sekunda, np. 15:38:20. Czas sformatowany \nw ten sposób zostanie zwrócony przez funkcję",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "date(\"H:i:s\");"
      },
      {
        "id": "B",
        "text": "date(\"G:m:s\");"
      },
      {
        "id": "C",
        "text": "time(\"H:i:s\");"
      },
      {
        "id": "D",
        "text": "time(\"G:m:s\");"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 820,
    "text": "820. Które wyrażenie należy wstawić w miejsce ??? w pętli zapisanej w języku C++, aby zostały wyświetlone \njedynie elementy tablicy tab",
    "image": "e14/820.jpg",
    "answers": [
      {
        "id": "A",
        "text": "i > = 6"
      },
      {
        "id": "B",
        "text": "i < - 6"
      },
      {
        "id": "C",
        "text": "i < 6"
      },
      {
        "id": "D",
        "text": "i > 6"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 821,
    "text": "821. Który zapis definiuje w języku JavaScript komentarz jednoliniowy?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#"
      },
      {
        "id": "B",
        "text": "?"
      },
      {
        "id": "C",
        "text": "/ /"
      },
      {
        "id": "D",
        "text": "/*"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 822,
    "text": "822. Z relacji przedstawionej na obrazie można wyczytać, że jest ona relacją",
    "image": "e14/822.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wiele do wielu pomiędzy kluczami głównymi obu tabel"
      },
      {
        "id": "B",
        "text": "jeden do wielu, gdzie kluczem obcym jest pole w tabeli uslugi"
      },
      {
        "id": "C",
        "text": "jeden do wielu, gdzie kluczem obcym jest pole w tabeli kadra"
      },
      {
        "id": "D",
        "text": "Jeden do jednego, gdzie obie tabele mają zdefiniowane klucze obce"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 823,
    "text": "823. Które z mechanizmów są niezbędne dla Systemu Zarządzania Bazą Danych?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Wielodostępność danych"
      },
      {
        "id": "B",
        "text": "Pakiety do tworzenia statystyk"
      },
      {
        "id": "C",
        "text": "System zarządzania wersjami bazy"
      },
      {
        "id": "D",
        "text": "Przystawka do wizualizacji diagramów encji"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 824,
    "text": "824. Za pomocą której kwerendy w bazie MariaDB można wybrać artykuły, których ceny zawierają się \nw przedziale obustronnie domkniętym < 10, 20 >?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT * FROM Artykuly WHERE Cena IN (10, 20);"
      },
      {
        "id": "B",
        "text": "SELECT * FROM Artykuly WHERE Cena LIKE 1%, 2%;"
      },
      {
        "id": "C",
        "text": "SELECT * FROM Artykuly WHERE Cena BETWEEN 10 AND 20;"
      },
      {
        "id": "D",
        "text": "SELECT * FROM Artykuly WHERE Cena > 10 AND Cena < 20;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 825,
    "text": "825. Z bazy danych należy zwrócić zapytaniem SQL nazwiska pracowników, którzy są kierownikami, a ich pensja \nznajduje się w przedziale jednostronnie domkniętym (3000, 4000 >. Która z klauzul bada ten warunek?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "WHERE kierownik = true OR pensja > 3000 OR pensja <= 4000;"
      },
      {
        "id": "B",
        "text": "WHERE kierownik = true AND pensja => 3000 OR pensja < 4000;"
      },
      {
        "id": "C",
        "text": "WHERE kierownik = true AND pensja > 3000 AND pensja <= 4000;"
      },
      {
        "id": "D",
        "text": "WHERE kierownik = true AND pensja => 3000 AND pensja <= 4000;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 826,
    "text": "826. Tabela odloty zawiera rekordy przedstawione na obrazie. Zastosowanie zapytania SQL spowoduje \nzwrócenie danych:",
    "image": "e14/826.jpg",
    "answers": [
      {
        "id": "A",
        "text": "5; 8"
      },
      {
        "id": "B",
        "text": "3; 5; 8"
      },
      {
        "id": "C",
        "text": "4; 5; 6; 7; 8"
      },
      {
        "id": "D",
        "text": "zbiór pusty"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 827,
    "text": "827. W bazie MySQL zdefiniowano podczas tworzenia tabeli pole id. Wpis AUTO_INCREMENT oznacza, że",
    "image": "e14/827.jpg",
    "answers": [
      {
        "id": "A",
        "text": "dozwolone jest dodawanie rekordu z dowolną wartością pola id"
      },
      {
        "id": "B",
        "text": "pole id będzie mogło przyjmować wartości: NULL, 1, 2, 3, 4 i tak dalej"
      },
      {
        "id": "C",
        "text": "wartości pola będą automatycznie generowane podczas dodawania nowego rekordu do bazy"
      },
      {
        "id": "D",
        "text": "wartość pola id zostanie automatycznie nadana przez bazę i będzie to wygenerowana losowo liczba \ncałkowita"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 828,
    "text": "828. Tabele: Firmy i Zamowienia są powiązane relacją jeden do wielu. Aby wybrać jedynie id zamówienia wraz \nz odpowiadającą mu nazwą firmy dla firm, których poziom jest równy 4, należy zastosować polecenie",
    "image": "e14/828.jpg",
    "answers": [
      {
        "id": "A",
        "text": "SELECT Zamowienia.id, nazwa FROM Zamowienia JOIN Firmy WHERE poziom = 4;"
      },
      {
        "id": "B",
        "text": "SELECT id, nazwa FROM Zamowienia JOIN Firmy ON Zamowienia.Firmy_id = \nFirmy.id WHERE poziom = 4;"
      },
      {
        "id": "C",
        "text": "SELECT Zamowienia.id, nazwa FROM Zamowienia JOIN Firmy ON Zamowienia.id = \nFirmy.id WHERE poziom = 4;"
      },
      {
        "id": "D",
        "text": "SELECT Zamowienia.id, nazwa FROM Zamowienia JOIN Firmy ON \nZamowienia.Firmy_id = Firmy.id WHERE poziom = 4;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 829,
    "text": "829. Typowym narzędziem SZBD służącym do generowania zestawień danych w celu ich wydrukowania jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "raport"
      },
      {
        "id": "B",
        "text": "makro"
      },
      {
        "id": "C",
        "text": "formularz"
      },
      {
        "id": "D",
        "text": "kwerenda UPDATE"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 830,
    "text": "830. W języku SQL usunięcie wszystkich danych z tabeli bez usuwania samej tabeli możliwe jest za pomocą \npolecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "DROP"
      },
      {
        "id": "B",
        "text": "ALTER"
      },
      {
        "id": "C",
        "text": "UPDATE"
      },
      {
        "id": "D",
        "text": "TRUNCATE"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 831,
    "text": "831. Pole autor w tabeli ksiazka jest",
    "image": "e14/831.jpg",
    "answers": [
      {
        "id": "A",
        "text": "kluczem głównym tabeli ksiazka"
      },
      {
        "id": "B",
        "text": "kluczem obcym związanym z tabelą autorzy"
      },
      {
        "id": "C",
        "text": "polem wykorzystanym przy relacji z tabelą dane"
      },
      {
        "id": "D",
        "text": "polem typu napisowego zawierającym dane o autorze"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 832,
    "text": "832. W bazie danych MySQL, aby wyświetlić wszystkie prawa nadane użytkownikowi anna, można posłużyć się \npoleceniem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "GRANT * TO anna;"
      },
      {
        "id": "B",
        "text": "SHOW GRANTS FOR anna;"
      },
      {
        "id": "C",
        "text": "SELECT GRANTS FOR anna;"
      },
      {
        "id": "D",
        "text": "REVOKE GRANTS FROM anna;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 833,
    "text": "833. Aby wstawić dane do bazy za pomocą polecenia PHP w jego parametrach należy przekazać",
    "image": "e14/833.jpg",
    "answers": [
      {
        "id": "A",
        "text": "id wiersza w $zm1 i zapytanie INSERT INTO w $zm2"
      },
      {
        "id": "B",
        "text": "identyfikator połączenia z bazą danych w $zm1 i zapytanie SELECT w $zm2"
      },
      {
        "id": "C",
        "text": "NULL w $zm1, aby baza zapisała tam kod błędu i zapytanie SELECT w $zm2"
      },
      {
        "id": "D",
        "text": "identyfikator połączenia z bazą danych w $zm1 i zapytanie INSERT INTO w $zm2"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 834,
    "text": "834. W aplikacji PHP obsługującej bazę danych, aby po wykonaniu dowolnej operacji otrzymać numer błędu oraz \njego opis, należy zastosować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "tylko funkcję mysqli_error"
      },
      {
        "id": "B",
        "text": "funkcje mysqli_error i mysqli_errno"
      },
      {
        "id": "C",
        "text": "funkcje mysqli_error i mysqli_error_number"
      },
      {
        "id": "D",
        "text": "funkcje mysqli_error i mysqli_connect_errno"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 835,
    "text": "835. Na obrazie przedstawiono projekt układu bloków witryny internetowej. Zakładając, że bloki są realizowane \nza pomocą znaczników sekcji, a szerokość została zdefiniowana jedynie dla bloków 2, 3 i 4, ich formatowanie, \npowinno zawierać właściwość",
    "image": "e14/835.jpg",
    "answers": [
      {
        "id": "A",
        "text": "float: left dla wszystkich bloków."
      },
      {
        "id": "B",
        "text": "clear: both dla wszystkich bloków."
      },
      {
        "id": "C",
        "text": "float: left jedynie dla bloków 3 i 4 i clear: both dla bloku 2"
      },
      {
        "id": "D",
        "text": "clear: both dla bloku 5 i float: left jedynie dla bloków 2, 3 i 4"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 836,
    "text": "836. Na obrazie przedstawiono tabelę ze scalonymi komórkami. Które atrybuty scalania zastosowano, aby \nuzyskać ten efekt?",
    "image": "e14/836.jpg",
    "answers": [
      {
        "id": "A",
        "text": "rowspan w drugim wierszu i pierwszej komórce oraz colspan w trzecim \nwierszu, trzeciej komórce"
      },
      {
        "id": "B",
        "text": "colspan w drugim wierszu i pierwszej komórce oraz rowspan w trzecim \nwierszu, trzeciej komórce"
      },
      {
        "id": "C",
        "text": "colspan w drugim wierszu we wszystkich trzech komórkach oraz \nrowspan w trzecim wierszu ostatniej komórce"
      },
      {
        "id": "D",
        "text": "colspan w drugim wierszu i pierwszej komórce oraz rowspan w trzecim \nwierszu i czwartym wierszu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 837,
    "text": "837. Formularz wysyła dane do skryptu skrypt.php po wciśnięciu przycisku o treści „WYŚLIJ”. Wskaż poprawną \ndefinicję formularza.",
    "image": "e14/837.jpg",
    "answers": [
      {
        "id": "A",
        "text": "skrypt 1"
      },
      {
        "id": "B",
        "text": "skrypt 2"
      },
      {
        "id": "C",
        "text": "skrypt 3"
      },
      {
        "id": "D",
        "text": "skrypt 4"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 838,
    "text": "838. Które formatowanie obramowania odpowiada stylowi border-style: dotted solid;?",
    "image": "e14/838.jpg",
    "answers": [
      {
        "id": "A",
        "text": "formatowanie 1"
      },
      {
        "id": "B",
        "text": "formatowanie 2"
      },
      {
        "id": "C",
        "text": "formatowanie 3"
      },
      {
        "id": "D",
        "text": "formatowanie 4"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 839,
    "text": "839. Które pole edycyjne zostało sformatowane przedstawionym stylem zakładając, że pozostałe własności pola \nprzyjmują wartości domyślne, a użytkownik wpisał imię Krzysztof w przeglądarce?",
    "image": "e14/839.jpg",
    "answers": [
      {
        "id": "A",
        "text": "pole 1"
      },
      {
        "id": "B",
        "text": "pole 2"
      },
      {
        "id": "C",
        "text": "pole 3"
      },
      {
        "id": "D",
        "text": "pole 4"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 840,
    "text": "840. Które zdanie dotyczące antyaliasingu jest prawdziwe?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Antyaliasing to jeden z filtrów wyostrzających obraz"
      },
      {
        "id": "B",
        "text": "Antyaliasing stosuje się na obrazach, w celu dodania przezroczystości"
      },
      {
        "id": "C",
        "text": "Za pomocą antyaliasingu można pozbyć się tak zwanego schodkowania obrazu"
      },
      {
        "id": "D",
        "text": "Zastosowanie antyaliasingu odnosi się do krzywych Beziera w grafice wektorowej"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 841,
    "text": "841. Przedstawiona transformacja obrazu rastrowego jest możliwa dzięki funkcji",
    "image": "e14/841.jpg",
    "answers": [
      {
        "id": "A",
        "text": "barwienie"
      },
      {
        "id": "B",
        "text": "desaturacja"
      },
      {
        "id": "C",
        "text": "jasność i kontrast"
      },
      {
        "id": "D",
        "text": "redukcja kolorów"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 842,
    "text": "842. Który ze skryptów wyświetla aktualną datę oraz czas, w formacie przedstawionym na obrazie?",
    "image": "e14/842.jpg",
    "answers": [
      {
        "id": "A",
        "text": "< ?php date(\"Y-m-d”) + time(\"G:i:s\"); ? >"
      },
      {
        "id": "B",
        "text": "< ?php echo date(\"Y-m-d G:i:s\"); ? >"
      },
      {
        "id": "C",
        "text": "< ?php echo date(\"Ymd Gis\"); ? >"
      },
      {
        "id": "D",
        "text": "< ?php date(\"Y-m-d G:i:s\"); ? >"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 843,
    "text": "843. Efektem wielokrotnego wykonania kodu PHP jest",
    "image": "e14/843.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zliczanie liczby odwiedzin strony"
      },
      {
        "id": "B",
        "text": "wyświetlenie ciasteczka z zapisaną zmienną"
      },
      {
        "id": "C",
        "text": "zapisanie do ciasteczka wartości 1 za każdym odświeżeniem witryny"
      },
      {
        "id": "D",
        "text": "zapisanie danych do ciasteczka jedynie przy pierwszym uruchomieniu strony"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 844,
    "text": "844. Aby za pomocą JavaScript w witrynie internetowej wyświetlić aktualną datę i czas można posłużyć się \ninstrukcją",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "echo Date();"
      },
      {
        "id": "B",
        "text": "innerHTML = Date();"
      },
      {
        "id": "C",
        "text": "echo Date() + Time();"
      },
      {
        "id": "D",
        "text": "document.write(Date());"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 845,
    "text": "845. Brak którego elementu języka HTML wygeneruje błąd walidatora HTML5?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "< body >"
      },
      {
        "id": "B",
        "text": "przynajmniej jednego < h1 >"
      },
      {
        "id": "C",
        "text": "prologu < !DOCTYPE html >"
      },
      {
        "id": "D",
        "text": "< meta name=\"author\" content=\"....\" >"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 846,
    "text": "846. Program FileZilla może posłużyć do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "interpretacji kodu PHP"
      },
      {
        "id": "B",
        "text": "walidacji strony internetowej"
      },
      {
        "id": "C",
        "text": "publikowania strony internetowej"
      },
      {
        "id": "D",
        "text": "testowania prędkości wczytywania strony"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 847,
    "text": "847. Która lista zostanie wyświetlona w przeglądarce po wykonaniu kodu HTML>",
    "image": "e14/847.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Lista 4"
      },
      {
        "id": "B",
        "text": "Lista 1"
      },
      {
        "id": "C",
        "text": "Lista 2"
      },
      {
        "id": "D",
        "text": "Lista 3"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 848,
    "text": "848. Który rodzaj komunikatu jest zawsze przekazywany tylko pionowo w dół, czyli od przełożonego do podwładnego?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Powierzenie zadania"
      },
      {
        "id": "B",
        "text": "Poszukiwanie rozwiązań"
      },
      {
        "id": "C",
        "text": "Uwagi o polityce organizacji"
      },
      {
        "id": "D",
        "text": "Raportowanie"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 849,
    "text": "849. Tabela programy zawiera pola: nazwa_programu, nazwa_producenta, rok_wydania. Aby kwerenda SELECT wybrała wszystkie nazwy producentó tak, by nazwy te nie powtarzały się, należy zapisać:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwa_producenta FROM programy WHERE nazwa_producenta NOT DUPLICATE;"
      },
      {
        "id": "B",
        "text": "SELECT DISTINCT nazwa_producenta FROM programy;"
      },
      {
        "id": "C",
        "text": "SELECT UNIQUE nazwa_producenta FROM programy;"
      },
      {
        "id": "D",
        "text": "SELECT nazwa_producenta FROM programy WHERE UNIQUE;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 850,
    "text": "850. Za pomocą przedstawionego polecenia można",
    "image": "e14/850.jpg",
    "answers": [
      {
        "id": "A",
        "text": "utworzyć kopię zapasową tabeli sklep"
      },
      {
        "id": "B",
        "text": "sprawdzić spójność bazy danych sklep"
      },
      {
        "id": "C",
        "text": "naprawić błędy w tabeli sklep"
      },
      {
        "id": "D",
        "text": "utworzyć kopię zapasową bazy danych sklep"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 851,
    "text": "851. Prześladowanie, uporczywe nękanie i zastraszanie, stosowanie przemocy psychicznej wobec podwładnego lub współpracownika w miejscu pracy, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "dyskryminacja"
      },
      {
        "id": "B",
        "text": "manipulacja"
      },
      {
        "id": "C",
        "text": "mobbing"
      },
      {
        "id": "D",
        "text": "perswazja"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 852,
    "text": "852. Który znak ostrzegawczy określa strefę ochronną w otoczeniu źródła pola elektromagnetycznego?",
    "image": "e14/852.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Znak 1"
      },
      {
        "id": "B",
        "text": "Znak 2"
      },
      {
        "id": "C",
        "text": "Znak 3"
      },
      {
        "id": "D",
        "text": "Znak 4"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 853,
    "text": "853. Na stronie WWW zdefiniowano rysunek, następnie akapit. Aby rysunek został umieszczony przez przeglądarkę w tej samej linii co akapit, po lewej stronie akapitu, należy w stylu CSS dla rysunku zapisać własność:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "float: left;"
      },
      {
        "id": "B",
        "text": "style: left;"
      },
      {
        "id": "C",
        "text": "align: left;"
      },
      {
        "id": "D",
        "text": "alt: left;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 854,
    "text": "854. W ramce przedstawiono zapisane w języku CSS formatowanie selektora. Zakładając, że żadne inne formatowanie nie jest dodane, wskaż sposób formatowania znaczniki h1",
    "image": "e14/854.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Efekt 1"
      },
      {
        "id": "B",
        "text": "Efekt 2"
      },
      {
        "id": "C",
        "text": "Efekt 3"
      },
      {
        "id": "D",
        "text": "Efekt 4"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 855,
    "text": "855. Który z podanych formatów można zapisać materiał wideo wraz ze ścieżką dźwiękową?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "MP4"
      },
      {
        "id": "B",
        "text": "AAC"
      },
      {
        "id": "C",
        "text": "WMA"
      },
      {
        "id": "D",
        "text": "WAV"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 856,
    "text": "856. Wskaż wynik wykonania skryptu PHP",
    "image": "e14/856.jpg",
    "answers": [
      {
        "id": "A",
        "text": "czarny, zielony, niebieski, biały,"
      },
      {
        "id": "B",
        "text": "zielony, niebieski, czarny, biały,"
      },
      {
        "id": "C",
        "text": "biały, niebieski, zielony, czarny,"
      },
      {
        "id": "D",
        "text": "biały, czarny, niebieski, zielony,"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 857,
    "text": "857. Który z wymienionych poniżej języków jest typowo front-endowy (wykonywany po stronie klienta)?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Perl"
      },
      {
        "id": "B",
        "text": "PHP"
      },
      {
        "id": "C",
        "text": "CSS"
      },
      {
        "id": "D",
        "text": "Node.js"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 858,
    "text": "858. O zmiennej predefiniowanej $ _POST z języka PHP można powiedzieć, że",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zawiera dane przesłane do skryptu z formularza"
      },
      {
        "id": "B",
        "text": "jest kopią tablicy $ _COOKIE"
      },
      {
        "id": "C",
        "text": "jest rozszerzoną wersją tablicy $ _SESSION"
      },
      {
        "id": "D",
        "text": "zawiera dane bezpośrednio przesłane do skryptu z ciasteczka"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 859,
    "text": "859. Dana jest tabela uczniowie, do której wpisano rekordy jak na rysunku. Co będzie wynikiem działania przedstawionego zapytania SQL?",
    "image": "e14/859.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Suma ocen równa 14"
      },
      {
        "id": "B",
        "text": "Wartość 3.5"
      },
      {
        "id": "C",
        "text": "Liczba wierszy równa 4"
      },
      {
        "id": "D",
        "text": "Dane 4, 3, 4, 3"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 860,
    "text": "860. Wynikiem wykonania przedstawionego kodu PHP jest wypisanie wartości",
    "image": "e14/860.jpg",
    "answers": [
      {
        "id": "A",
        "text": "147"
      },
      {
        "id": "B",
        "text": "47"
      },
      {
        "id": "C",
        "text": "136"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 861,
    "text": "861. W języku CSS przypisano regułę: float:left; dla bloku. Reguła ta zostanie wykorzystana do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wyrównania tekstu do lewej strony"
      },
      {
        "id": "B",
        "text": "ustawienia bloków jeden pod drugim"
      },
      {
        "id": "C",
        "text": "ustawienia bloku na lewo względem innych"
      },
      {
        "id": "D",
        "text": "wyrównanie elementów tabeli do lewej strony"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 862,
    "text": "862. Dokonując konwersji obrazu z 8 bitową głębią kolorów na obraz z 4 bitową głębią, liczba kolorów zmniejszy się o",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "256"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "240"
      },
      {
        "id": "D",
        "text": "16"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 863,
    "text": "863. Jaką wartość przyjmie zmienna x po wykonaniu kodu PHP przedstawionego w ramce?",
    "image": "e14/863.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Liczby wierszy dodanych do tabeli produkty"
      },
      {
        "id": "B",
        "text": "Liczby wierszy przetworzonych zapytaniem DELETE FROM"
      },
      {
        "id": "C",
        "text": "Liczby wierszy tabeli produkty, dla których pole status jest większe od zera"
      },
      {
        "id": "D",
        "text": "Liczby wierszy znajdujących się w bazie danych"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 864,
    "text": "864. W języku PHP przekierowanie użytkownika na inną stronę WWW jest możliwe za pomocą funkcji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "require();"
      },
      {
        "id": "B",
        "text": "include();"
      },
      {
        "id": "C",
        "text": "upload();"
      },
      {
        "id": "D",
        "text": "header();"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 865,
    "text": "865. W języku HTML, aby scalić w poziomie dwie sąsiednie komórki w wierszu tabeli należy zastosować atrybut",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "cellpadding"
      },
      {
        "id": "B",
        "text": "cellspacing"
      },
      {
        "id": "C",
        "text": "colspan"
      },
      {
        "id": "D",
        "text": "rowspan"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 866,
    "text": "866. Które z formatowań NIE JEST wyrażone w języku CSS?",
    "image": "e14/866.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 867,
    "text": "867. Kod JavaScript wywołany zdarzeniem kliknięcia przycisku ma za zadanie",
    "image": "e14/867.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zamienić obraz1.gif na obraz2.gif"
      },
      {
        "id": "B",
        "text": "wyświetlić obraz2.gif obok obraz1.gif"
      },
      {
        "id": "C",
        "text": "zmienić styl obrazu o id równym i1"
      },
      {
        "id": "D",
        "text": "ukryć obraz2.gif"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 868,
    "text": "868. Podane polecenie SQL ma za zadanie",
    "image": "e14/868.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Ustawić na 1 wartość pola Uczen"
      },
      {
        "id": "B",
        "text": "zwiększyć o jeden wartość kolumny id_klasy dla wszystkich rekordów tabeli Uczen"
      },
      {
        "id": "C",
        "text": "ustawić wartość kolumny id_klasy na 1 dla wszystkich rekordów w tabeli Uczen"
      },
      {
        "id": "D",
        "text": "zwiększyć o jeden wartość pola Uczen"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 869,
    "text": "869. Która z wymienionych zasad NIE WPŁYNIE korzystnie na zwiększenie czytelności kodu?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "W każdej linii kodu powinna występować tylko jedna instrukcja"
      },
      {
        "id": "B",
        "text": "Kod powinien być napisany bez wcięć i zbędnych enterów"
      },
      {
        "id": "C",
        "text": "Należy wprowadzać komentarze w trudniejszych częściach kodu"
      },
      {
        "id": "D",
        "text": "Nazwy zmiennych powinny odzwierciedlać ich zadanie"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 870,
    "text": "870. W języku PHP należy zapisać warunek, który będzie spełniony, gdy zmienna $a będzie dowolną liczbą całkowitą mniejszą od -10 lub gdy zmienna $b będzie dowolną liczbą z przedziału (25, 75). Wyrażenie logiczne użyte w tym warunku ma postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "($a < -10) and (($b > 25) or ($b < 75))"
      },
      {
        "id": "B",
        "text": "($a < -10) or (($b > 25) or ($b < 75))"
      },
      {
        "id": "C",
        "text": "($a < -10) or (($b > 25) and ($b < 75))"
      },
      {
        "id": "D",
        "text": "($a < -10) and (($b > 25) and ($b < 75))"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 871,
    "text": "871. Baza danych zawiera tabele artykuły z polami: nazwa, typ, producent, cena. Aby wyświetlić wszystkie nazwy artykułów wyłącznie typu pralka, dla których cena jest z przedziału 1000 PLN i 1500 PLN, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" OR cena BETWEEN 1000 AND 1500;"
      },
      {
        "id": "B",
        "text": "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" AND cena FROM 1000 TO 1500;"
      },
      {
        "id": "C",
        "text": "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" AND cena BETWEEN 1000 AND 1500;"
      },
      {
        "id": "D",
        "text": "SELECT nazwa FROM artykuly WHERE typ=\"pralka\" OR cena BETWEEN 1000 OR 1500;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 872,
    "text": "872. W języku SQL, aby zaktualizować dane w wierszach tabeli, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "UPDATE"
      },
      {
        "id": "B",
        "text": "SELECT"
      },
      {
        "id": "C",
        "text": "ALTER TABLE"
      },
      {
        "id": "D",
        "text": "INSERT INTO"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 873,
    "text": "873. Kodowanie polskich znaków można zdefiniować w języku HTML za pomocą",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "atrybutu znacznika <p>"
      },
      {
        "id": "B",
        "text": "znacznika <charset>"
      },
      {
        "id": "C",
        "text": "atrybutu znacznika <meta>"
      },
      {
        "id": "D",
        "text": "znacznika <title>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 874,
    "text": "874. Poprawny zapis znacznika <img>, za pomocą którego można umieścić na stronie internetowej obraz rys.jpg przeskalowany do szerokości 120 px i wysokości 80 px z tekstem alternatywnym \"krajobraz\" to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<img href=\"rys.jpg\" height=\"120px\" width=\"80px\" info=\"krajobraz\"/>"
      },
      {
        "id": "B",
        "text": "<img src=\"rys.jpg\" height=\"120px\" width=\"80px\" info=\"krajobraz\"/>"
      },
      {
        "id": "C",
        "text": "<img src=\"rys.jpg\" width=\"120px\" height=\"80px\" alt=\"krajobraz\"/>"
      },
      {
        "id": "D",
        "text": "<img image=\"rys.jpg\" width=\"120px\" height=\"80px\" alt=\"krajobraz\"/>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 875,
    "text": "875. Które z podanych par znaczników HTML mają wizualnie to samo działanie na stronie internetowej, jeżeli żadne style CSS NIE ZOSTAŁY zdefiniowane",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<p> i <h2>"
      },
      {
        "id": "B",
        "text": "<meta> i <title>"
      },
      {
        "id": "C",
        "text": "<b> i <big>"
      },
      {
        "id": "D",
        "text": "<b> i <strong>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 876,
    "text": "876. Aby edytować dane w bazie danych można posłużyć się",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "filtrowaniem"
      },
      {
        "id": "B",
        "text": "kwerendą SELECT"
      },
      {
        "id": "C",
        "text": "formularzem"
      },
      {
        "id": "D",
        "text": "raportem"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 877,
    "text": "877. Kwerenda ma za zadanie w tabeli artykuly",
    "image": "e14/877.jpg",
    "answers": [
      {
        "id": "A",
        "text": "usunąć kolumnę cena typu float"
      },
      {
        "id": "B",
        "text": "dodać kolumnę cena o typie float, jeśli nie istnieje"
      },
      {
        "id": "C",
        "text": "zmienić typ na float dla kolumny cena"
      },
      {
        "id": "D",
        "text": "zmienić nazwę kolumny z cena na float"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 878,
    "text": "878. W tabeli pracownicy zdefiniowano klucz główny typu INTEGER z atrybutami NOT NULL oraz AUTO_INCREMENT. Ponadto zdefiniowano pola imie oraz nazwisko. W przypadku zastosowania przedstawionej kwerendy SQL wprowadzającej dane, w której zostało pominięte pole klucza, w bazie danych MySQL nastąpi",
    "image": "e14/878.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zignorowanie polecenia, tabela pozostanie bez zmian"
      },
      {
        "id": "B",
        "text": "wpisanie rekordu do tabeli, dla klucza głównego zostanie przydzielona wartość NULL"
      },
      {
        "id": "C",
        "text": "błąd nieprawidłowej liczby pól"
      },
      {
        "id": "D",
        "text": "wpisanie rekordu do tabeli, dla klucza głównego zostanie przydzielona kolejna wartość naturalna"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 879,
    "text": "879. Aby obsłużyć połączenie z bazą MySQL podczas tworzenia aplikacji internetowej, można wykorzystać język",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "HTML"
      },
      {
        "id": "B",
        "text": "PHP"
      },
      {
        "id": "C",
        "text": "XHTML"
      },
      {
        "id": "D",
        "text": "CSS"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 880,
    "text": "880. Tabele Osoby i Adresy są połączone relacją jeden do wielu. Jakie zapytanie SQL należy zapisać, aby korzystając z tej relacji, prawidłowo wyświetlić nazwiska oraz przyporządkowane im miasta?",
    "image": "e14/880.jpg",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwisko, Miasto FROM Osoby JOIN Adresy ON Osoby.Adresy_id=Adresy.id;"
      },
      {
        "id": "B",
        "text": "SELECT nazwisko, Miasto FROM Osoby.Adresy_id=Adresy.id FROM Osoby, Adresy;"
      },
      {
        "id": "C",
        "text": "SELECT nazwisko, Miasto FROM Osoby, Adresy;"
      },
      {
        "id": "D",
        "text": "SELECT nazwisko, Miasto FROM Osoby, Adresy WHERE Osoby.id=Adresy.id;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 881,
    "text": "881. W stylu CSS aby zadeklarować krój czcionki, należy użyć właściwości",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "font-face"
      },
      {
        "id": "B",
        "text": "font-style"
      },
      {
        "id": "C",
        "text": "font-size"
      },
      {
        "id": "D",
        "text": "font-family"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 882,
    "text": "882. Która informacja dotycząca przedstawionego kodu jest prawdziwa?",
    "image": "e14/882.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Zostanie wypisany komunikat \"OlaAla\""
      },
      {
        "id": "B",
        "text": "W zmiennej $a wartość \"Ala\" zostanie zamieniona na wartość \"Ola\""
      },
      {
        "id": "C",
        "text": "Znak \"=\" jest operatorem porównania dwóch zmiennych"
      },
      {
        "id": "D",
        "text": "Znak kropki \".\" jest operatorem konkatenacji"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 883,
    "text": "883. Dana jest tabela uczniowie o polach id, imie, nazwisko, data_ur (format rrrr-mm-dd). Które zapytanie w języku SQL wyświetli tylko imiona i nazwiska uczniów urodzonych w 2001 roku?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT imie, nazwisko FROM uczniowie WHERE data_ur like \"2001-%-%\""
      },
      {
        "id": "B",
        "text": "SELECT * FROM uczniowie WHERE data_ur like \"2001\""
      },
      {
        "id": "C",
        "text": "SELECT id, imie, nazwisko, data_ur FROM uczniowie WHERE data_ur like \"2001-*-*\""
      },
      {
        "id": "D",
        "text": "SELECT * FROM uczniowie WHERE data_ur == 2001-%-%"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 884,
    "text": "884. Fragment kodu SQL oznacza, że klucz obcy",
    "image": "e14/884.jpg",
    "answers": [
      {
        "id": "A",
        "text": "jest referencją do samego siebie"
      },
      {
        "id": "B",
        "text": "ustawiony jest na kolumnie obiekty"
      },
      {
        "id": "C",
        "text": "znajduje się w tabeli obiekty"
      },
      {
        "id": "D",
        "text": "łączy się z kolumną imiona"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 885,
    "text": "885. Który znacznik służy budowaniu hierarchii tekstu w języku HTML?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<u>"
      },
      {
        "id": "B",
        "text": "<style>"
      },
      {
        "id": "C",
        "text": "<head>"
      },
      {
        "id": "D",
        "text": "&lth6>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 886,
    "text": "886. Która z definicji CSS określa formatowanie nagłówka h1: tekst nadkreślony, z odstępami między wyrazami 10 px i czerwonym kolorem tekstu?",
    "image": "e14/886.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 887,
    "text": "887. W języku CSS, należy zdefiniować tło dokumentu jako obraz rys.png. Obraz ma powtarzać się jedynie w poziomie. Którą definicję należy przypisać selektorowi body?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "{background-image: url(\"rys.png\"); background-repeat: repeat-x;}"
      },
      {
        "id": "B",
        "text": "{background-image: url(\"rys.png\"); background-repeat: round;}"
      },
      {
        "id": "C",
        "text": "{background-image: url(\"rys.png\"); background-repeat: repeat-y;}"
      },
      {
        "id": "D",
        "text": "{background-image: url(\"rys.png\"); background-repeat: repeat;}"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 888,
    "text": "888. Za pomocą którego zapisu zostanie utworzony w dokumencie HTML element wyświetlający obraz kotek.jpg z tekstem alternatywnym \"obrazek kotka\"",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<img src=\"kotek.jpg\" alt=\"obrazek kotka\">"
      },
      {
        "id": "B",
        "text": "<img href=\"kotek.jpg\" title=\"obrazek kotka\">"
      },
      {
        "id": "C",
        "text": "<img src=\"kotek.jpg\" title=\"obrazek kotka\">"
      },
      {
        "id": "D",
        "text": "<img href=\"kotek.jpg\" alt=\"obrazek kotka\">"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 889,
    "text": "889. Przedstawione formatowanie CSS, przy założeniu, że żadne inne formatowanie nie jest zdefiniowane, sprawi, że",
    "image": "e14/889.jpg",
    "answers": [
      {
        "id": "A",
        "text": "marginesy wewnętrzne wszystkich komórek będą wynosiły 10 px"
      },
      {
        "id": "B",
        "text": "margines wewnętrzny komórki z napisem Anna będzie miał 30 px, a z napisem Ewa – 10 px"
      },
      {
        "id": "C",
        "text": "marginesy wewnętrzne wszystkich komórek będą wynosiły 30 px"
      },
      {
        "id": "D",
        "text": "margines wewnętrzny komórki z napisem Anna będzie miał 10 px, a z napisem Ewa – 30 px"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 890,
    "text": "890. W języku JavaScript podany w ramce fragment funkcji ma za zadanie",
    "image": "e14/890.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wyświetlić wszystkie elementy tablicy"
      },
      {
        "id": "B",
        "text": "wprowadzić do każdego elementu tablicy aktualną wartość zmiennej i"
      },
      {
        "id": "C",
        "text": "policzyć sumę wszystkich elementów tablicy"
      },
      {
        "id": "D",
        "text": "dodać do każdego elementu tablicy stałą wartość"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 891,
    "text": "891. W języku SQL, aby wstawić wiersz danych do bazy, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "CREATE INTO"
      },
      {
        "id": "B",
        "text": "CREATE ROW"
      },
      {
        "id": "C",
        "text": "INSERT INTO"
      },
      {
        "id": "D",
        "text": "SELECT ROW"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 892,
    "text": "892. Wskaż kod CSS odpowiadający układowi bloków 2 - 5, zakładając, że są one zbudowane w oparciu o przedstawiony kod HTML",
    "image": "e14/892.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 893,
    "text": "893. Rozproszonym systemem kontroli wersji projektu programistycznego jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "GIT"
      },
      {
        "id": "B",
        "text": "FileZilla"
      },
      {
        "id": "C",
        "text": "TotalCommander"
      },
      {
        "id": "D",
        "text": "Eclipse"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 894,
    "text": "894. Jak zdefiniować w języku CSS takie formatowanie tabeli, żeby wiersz, na którym aktualnie znajduje się kursor myszy, zmieniał kolor tła na szary",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "tr:active { color: gray; }"
      },
      {
        "id": "B",
        "text": "tr:active { background-color: gray; }"
      },
      {
        "id": "C",
        "text": "tr:hover { background-color: gray; }"
      },
      {
        "id": "D",
        "text": "tr:hover { color: gray; }"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 895,
    "text": "895. Formatami Video obsługiwanymi w standardzie HTML5 są",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Ogg, QuickTime"
      },
      {
        "id": "B",
        "text": "Ogg, AVI, MPEG"
      },
      {
        "id": "C",
        "text": "MP4, Ogg, WebM"
      },
      {
        "id": "D",
        "text": "MP4, AVI"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 896,
    "text": "896. Który z typów relacji wymaga utworzenia tabeli pośredniej łączącej klucze główne obu tabel?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "1..n"
      },
      {
        "id": "B",
        "text": "n..m"
      },
      {
        "id": "C",
        "text": "n..1"
      },
      {
        "id": "D",
        "text": "1..1"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 897,
    "text": "897. W kodzie HTML przypisano pewne znaczniki do klasy o nazwie „nomargin”. Aby wykonać za pomocą języka JavaScript operacje na tych znacznikach, można posłużyć się funkcją",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "getElement(\"nomargin\")"
      },
      {
        "id": "B",
        "text": "getElementById(\"nomargin\")"
      },
      {
        "id": "C",
        "text": "getElementsByTagName(\"nomargin\")"
      },
      {
        "id": "D",
        "text": "getElementsByClassName(\"nomargin\")"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 898,
    "text": "898. Kompresja bezstratna pliku graficznego gwarantuje",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "lepszą jakość"
      },
      {
        "id": "B",
        "text": "mniejszą liczbę warstw"
      },
      {
        "id": "C",
        "text": "rozmiar większy niż grafika oryginalna"
      },
      {
        "id": "D",
        "text": "pierwotną jakość grafiki"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 899,
    "text": "899. Wskaż poprawny składniowo warunek zapisany w języku PHP i sprawdzający brak połączenia z bazą MySQL",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "if {mysql_connect_errno()}{}"
      },
      {
        "id": "B",
        "text": "if {mysqli_connect_error()}{}"
      },
      {
        "id": "C",
        "text": "if (mysqli_connect_errno()){}"
      },
      {
        "id": "D",
        "text": "if (mysql_connect_error())()"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 900,
    "text": "900. Tabele Osoby i Zainteresowania są połączone relacją jeden do wielu. Które zapytanie SQL należy zapisać, aby korzystając z tej relacji, prawidłowo wyświetlić imiona oraz odpowiadające im hobby?",
    "image": "e14/900.jpg",
    "answers": [
      {
        "id": "A",
        "text": "SELECT imie, hobby FROM Osoby.Zainteresowania_id = Zainteresowania.id FROM Osoby, Zainteresowania;"
      },
      {
        "id": "B",
        "text": "SELECT imie, hobby FROM Osoby, Zainteresowania;"
      },
      {
        "id": "C",
        "text": "SELECT imie, hobby FROM Osoby JOIN Zainteresowania ON Osoby.Zainteresowania_id = Zainteresowania.id;"
      },
      {
        "id": "D",
        "text": "SELECT imie, hobby FROM Osoby, Zainteresowania WHERE Osoby.id = Zainteresowania.id;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 901,
    "text": "901. W języku HTML, aby wstawić na stronę obraz zapisany w formacie JPG, należy zastosować znacznik",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<src>"
      },
      {
        "id": "B",
        "text": "<img>"
      },
      {
        "id": "C",
        "text": "<jpg>"
      },
      {
        "id": "D",
        "text": "<table>"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 902,
    "text": "902. Za pomocą, którego znacznika można wstawić listę numerowaną (uporządkowaną) w dokumencie HTML?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<li>"
      },
      {
        "id": "B",
        "text": "<ul>"
      },
      {
        "id": "C",
        "text": "<ol>"
      },
      {
        "id": "D",
        "text": "<dl>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 903,
    "text": "903. W języku CSS zapis selektora p > i { color: red; } oznacza, że kolorem czerwonym zostanie sformatowany",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "jedynie ten tekst w znaczniku <i>, który jest umieszczony bezpośrednio wewnątrz znacznika <p>"
      },
      {
        "id": "B",
        "text": "jedynie ten tekst znacznika <p>, do którego jest przypisana klasa o nazwie i"
      },
      {
        "id": "C",
        "text": "każdy tekst w znaczniku <p> lub każdy tekst w znaczniku <i>"
      },
      {
        "id": "D",
        "text": "każdy tekst w znaczniku <p> za wyjątkiem tych w znaczniku <i>"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 904,
    "text": "904. Język PHP posiada obsługę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "sesji i ciastek"
      },
      {
        "id": "B",
        "text": "zdarzeń myszy"
      },
      {
        "id": "C",
        "text": "zdarzeń klawiatury"
      },
      {
        "id": "D",
        "text": "obiektów przeglądarki"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 905,
    "text": "905. Tworząc tabelę w języku SQL zdefiniowano pole, którego wartości nie mogą się powtarzać. Do jego definicji należy zastosować atrybut",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "IDENTITY"
      },
      {
        "id": "B",
        "text": "UNIQUE"
      },
      {
        "id": "C",
        "text": "DEFAULT"
      },
      {
        "id": "D",
        "text": "NOT NULL"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 906,
    "text": "906. Aby wskazać błędy składniowe w kodzie HTML, należy zastosować",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "kompilator"
      },
      {
        "id": "B",
        "text": "debugger"
      },
      {
        "id": "C",
        "text": "interpreter"
      },
      {
        "id": "D",
        "text": "walidator"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 907,
    "text": "907. Projektując stronę internetową, umieszczono kod definiujący jej styl. Jaką szerokość pozostawiono na treść strony?",
    "image": "e14/907.jpg",
    "answers": [
      {
        "id": "A",
        "text": "600 px"
      },
      {
        "id": "B",
        "text": "640 px"
      },
      {
        "id": "C",
        "text": "560 px"
      },
      {
        "id": "D",
        "text": "2 px"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 908,
    "text": "908. Instrukcją pętli, która jest przeznaczona do wykonania określonej liczby operacji na pewnym obiekcie lub zmiennej niebędącej tablicą, jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "foreach"
      },
      {
        "id": "B",
        "text": "if"
      },
      {
        "id": "C",
        "text": "switch"
      },
      {
        "id": "D",
        "text": "for"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 909,
    "text": "909. Przedstawiona funkcja, zapisana językiem JavaScript, ma za zadanie",
    "image": "e14/909.jpg",
    "answers": [
      {
        "id": "A",
        "text": "umożliwić przejście do wskazanej lokalizacji hosta"
      },
      {
        "id": "B",
        "text": "wyświetlić w elemencie o id = \"info\" adres hosta wskazany pierwszym odnośnikiem"
      },
      {
        "id": "C",
        "text": "wyświetlić na przycisku lokalizację hosta, a po jego wciśnięciu umożliwić przejście do wskazanej lokalizacji"
      },
      {
        "id": "D",
        "text": "wyświetlić w elemencie o id = \"info\" nazwę hosta, z którego pochodzi wyświetlona strona"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 910,
    "text": "910. Która cecha grafiki wektorowej jest prawdziwa?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Raz utworzoną nie można edytować"
      },
      {
        "id": "B",
        "text": "Grafika wektorowa jest niezależna od rozdzielczości"
      },
      {
        "id": "C",
        "text": "Grafika wektorowa jest nieskalowalna"
      },
      {
        "id": "D",
        "text": "Nie można przetworzyć ją na grafikę rastrową"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 911,
    "text": "911. W języku PHP operatorem reszty z dzielenia jest:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "&"
      },
      {
        "id": "B",
        "text": "@"
      },
      {
        "id": "C",
        "text": "%"
      },
      {
        "id": "D",
        "text": "#"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 912,
    "text": "912. W formularzu HTML zastosowano znacznik <input>. Wyświetlone pole będzie służyło do wprowadzania maksymalnie",
    "image": "e14/912.jpg",
    "answers": [
      {
        "id": "A",
        "text": "20 znaków, które są widoczne podczas wprowadzania"
      },
      {
        "id": "B",
        "text": "20 znaków, które nie są widoczne w polu tekstowym"
      },
      {
        "id": "C",
        "text": "30 znaków, które nie są widoczne w polu tekstowym"
      },
      {
        "id": "D",
        "text": "30 znaków, które są widoczne podczas wprowadzania"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 913,
    "text": "913. Wśród czterech podstawowych kolorów modelu barw CMYK jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "brązowy"
      },
      {
        "id": "B",
        "text": "pomarańczowy"
      },
      {
        "id": "C",
        "text": "zielony"
      },
      {
        "id": "D",
        "text": "czarny"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 914,
    "text": "914. Które z poleceń nadaje najniższy poziom uprawnień użytkownikowi uczen pod względem modyfikacji danych i struktury tabel?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "GRANT ALTER, SELECT ON szkola.przedmioty TO uczen;"
      },
      {
        "id": "B",
        "text": "GRANT SELECT ON szkola.przedmioty TO uczen;"
      },
      {
        "id": "C",
        "text": "GRANT INSERT, DROP ON szkola.przedmioty TO uczen;"
      },
      {
        "id": "D",
        "text": "GRANT DROP ON szkola.przedmioty TO uczen;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 915,
    "text": "915. W języku PHP, aby połączyć się z bazą danych MySQL przy pomocy biblioteki mysqli, stosując zamieszczony zapis, w miejscu litery 'c' należy zapisać",
    "image": "e14/915.jpg",
    "answers": [
      {
        "id": "A",
        "text": "nazwę bazy danych"
      },
      {
        "id": "B",
        "text": "nazwę użytkownika"
      },
      {
        "id": "C",
        "text": "lokalizację serwera bazy danych"
      },
      {
        "id": "D",
        "text": "hasło użytkownika"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 916,
    "text": "916. Aby w JavaScript wykonać wymienione kroki, należy w znaczniku <script> umieścić kod",
    "image": "e14/916.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A = prompt(\"Podaj kwalifikację: \"); document.write(\"Kwalifikacja: \".A);"
      },
      {
        "id": "B",
        "text": "A << prompt(\"Podaj kwalifikację: \"); document.write(\"Kwalifikacja: \" + A);"
      },
      {
        "id": "C",
        "text": "A = prompt(\"Podaj kwalifikację: \"); document.write(\"Kwalifikacja: \" + A);"
      },
      {
        "id": "D",
        "text": "A = alert(\"Podaj kwalifikację: \"); document.write(\"Kwalifikacja: \" + A);"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 917,
    "text": "917. Funkcja agregująca AVG użyta w zapytaniu ma za zadanie",
    "image": "e14/917.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zsumować koszt wszystkich usług"
      },
      {
        "id": "B",
        "text": "obliczyć średnią arytmetyczną cen wszystkich usług"
      },
      {
        "id": "C",
        "text": "wskazać najwyższą cenę za usługi"
      },
      {
        "id": "D",
        "text": "policzyć ile jest usług dostępnych w tabeli"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 918,
    "text": "918. Kolorem o barwie niebieskiej jest kolor",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#00EE00"
      },
      {
        "id": "B",
        "text": "#EE0000"
      },
      {
        "id": "C",
        "text": "#EE00EE"
      },
      {
        "id": "D",
        "text": "#0000EE"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 919,
    "text": "919. Zestaw komponentów i podprogramów służący pisaniu aplikacji, który ponadto narzuca szkielet wyglądu aplikacji, jej strukturę, a czasem nawet wzorzec według którego ma powstać aplikacja, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "komponent"
      },
      {
        "id": "B",
        "text": "middleware"
      },
      {
        "id": "C",
        "text": "biblioteka"
      },
      {
        "id": "D",
        "text": "framework"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 920,
    "text": "920. Rozwinięcie słowne akronimu ACID w SQL to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "atomic, constaint, isolated, dependable"
      },
      {
        "id": "B",
        "text": "atomic, consistent, isolated, durable"
      },
      {
        "id": "C",
        "text": "atomic, consistent, iss, dependable"
      },
      {
        "id": "D",
        "text": "atomic, comming, is, do"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 921,
    "text": "921. Które dane z 8 rekordów wpisanych do tabeli zwierzeta zostaną wyświetlone w wyniku podanego zapytania SQL?",
    "image": "e14/921.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Anna Kowalska, Jan Nowak"
      },
      {
        "id": "B",
        "text": "Dika, Fuks"
      },
      {
        "id": "C",
        "text": "Figaro, Dika, Fuks"
      },
      {
        "id": "D",
        "text": "Fafik, Brutus, Dika, Fuks"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 922,
    "text": "922. W języku JavaScript instrukcję a++; można inaczej zapisać jako",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "a&1"
      },
      {
        "id": "B",
        "text": "1+=a"
      },
      {
        "id": "C",
        "text": "a<<1"
      },
      {
        "id": "D",
        "text": "a=a+1"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 923,
    "text": "923. Z którym ze słów kluczowych programowania obiektowego w języku JavaScript wiąże się dostęp do pól i metod tylko z poziomu klasy, w której są zdefiniowane",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "static"
      },
      {
        "id": "B",
        "text": "public"
      },
      {
        "id": "C",
        "text": "private"
      },
      {
        "id": "D",
        "text": "Żadne z powyższych, w JavaScript należy użyć #"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 924,
    "text": "924. Przedstawiony na rysunku kolor zapisany w modelu RGB, w systemie szesnastkowym będzie zdefiniowany następująco",
    "image": "e14/924.jpg",
    "answers": [
      {
        "id": "A",
        "text": "77A0C1"
      },
      {
        "id": "B",
        "text": "76A3C1"
      },
      {
        "id": "C",
        "text": "71A0B2"
      },
      {
        "id": "D",
        "text": "77A1C1"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 925,
    "text": "925. Za pomocą której funkcji języka PHP można ustanowić połączenie z bazą danych o nazwie zwierzaki?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "$polacz = server_connect('localhost', 'root','','zwierzaki');"
      },
      {
        "id": "B",
        "text": "$polacz = mysqli_connect('localhost', 'root','','zwierzaki');"
      },
      {
        "id": "C",
        "text": "$polacz = sql_connect('localhost', 'root','','zwierzaki');"
      },
      {
        "id": "D",
        "text": "$polacz = db_connect('localhost', 'root','','zwierzaki');"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 926,
    "text": "926. Aby zmienić maksymalną długość pola imie w tabeli klienci na 30 znaków, należy użyć w języku SQL następującego kodu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "CHANGE TABLE klienci MODIFY imie CHAR(30);"
      },
      {
        "id": "B",
        "text": "CHANGE TABLE klienci TO COLUMN imie SET CHAR(30);"
      },
      {
        "id": "C",
        "text": "ALTER TABLE klienci MODIFY COLUMN imie VARCHAR(30);"
      },
      {
        "id": "D",
        "text": "ALTER TABLE klienci CHANGE imie TEXT;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 927,
    "text": "927. Jeśli zmienna $x przechowuje dowolną liczbę naturalną dodatnią, przedstawiony kod źródłowy PHP ma za zadanie wyświetlić",
    "image": "e14/927.jpg",
    "answers": [
      {
        "id": "A",
        "text": "kolejne liczby od x do 0"
      },
      {
        "id": "B",
        "text": "liczby wczytywane z klawiatury, tak długo aż zostanie wczytana wartość x"
      },
      {
        "id": "C",
        "text": "losowe liczby z przedziału (0, x)"
      },
      {
        "id": "D",
        "text": "kolejne liczby od 0 do x-1"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 928,
    "text": "928. W języku JavaScript zdefiniowano obiekt. Aby dalej w kodzie modyfikować wartość właściwości x obiektu, należy zapisać",
    "image": "e14/928.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wsp.x = …"
      },
      {
        "id": "B",
        "text": "x = …"
      },
      {
        "id": "C",
        "text": "obiekt1::x = …"
      },
      {
        "id": "D",
        "text": "obiekt1.x = …"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 929,
    "text": "929. Odpowiednia kolejność procesów przetwarzania analogowo-cyfrowego dźwięku to:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "kwantyzacja, kodowanie, próbkowanie"
      },
      {
        "id": "B",
        "text": "kwantyzacja, próbkowanie, kodowanie"
      },
      {
        "id": "C",
        "text": "próbkowanie, kodowanie, kwantyzacja"
      },
      {
        "id": "D",
        "text": "próbkowanie, kwantyzacja, kodowanie"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 930,
    "text": "930. Na obrazie przedstawiono wybór formatu pliku importującego bazę danych. Którego formatu należy użyć, jeżeli dane są wyeksportowane z programu Excel i zapisane tekstowo z zastosowaniem przecinka do rozdzielenia wartości pól?",
    "image": "e14/930.jpg",
    "answers": [
      {
        "id": "A",
        "text": "XML"
      },
      {
        "id": "B",
        "text": "SQL"
      },
      {
        "id": "C",
        "text": "ESRI"
      },
      {
        "id": "D",
        "text": "CSV"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 931,
    "text": "931. Baza danych zawiera tabelę ksiazki o polach: tytul, id_autora, data_wypoz, id_czytelnika. Każdego dnia generowany jest raport książek wypożyczonych danego dnia. Wyświetlane są jedynie tytuły książek. Która z kwerend SQL posłuży do stworzenia tego raportu?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT tytul, data_wypoz FROM ksiazki WHERE data_wypoz = CURRDATENT_E();"
      },
      {
        "id": "B",
        "text": "SELECT * FROM ksiazki;"
      },
      {
        "id": "C",
        "text": "SELECT tytul FROM ksiazki WHERE data_wypoz = CURRENT_DATE();"
      },
      {
        "id": "D",
        "text": "SELECT tytul FROM ksiazki;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 932,
    "text": "932. W języku CSS zdefiniowano formatowanie dla pola edycyjnego. Tak formatowane pole edycyjne będzie miało jasnozielone tło",
    "image": "e14/932.jpg",
    "answers": [
      {
        "id": "A",
        "text": "jeśli jest to pierwsze wystąpienie tego znacznika w dokumencie"
      },
      {
        "id": "B",
        "text": "po kliknięciu myszą w celu zapisania w nim tekstu"
      },
      {
        "id": "C",
        "text": "gdy zostanie wskazane kursorem myszy bez kliknięcia"
      },
      {
        "id": "D",
        "text": "w każdym przypadku"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 933,
    "text": "933. W języku CSS zapisano wspólne formatowanie dla pewnej grupy znaczników. Formatowanie takich znaczników w kodzie HTML nastąpi przez atrybut",
    "image": "e14/933.jpg",
    "answers": [
      {
        "id": "A",
        "text": "style = \"format1\""
      },
      {
        "id": "B",
        "text": "id = \"format1\""
      },
      {
        "id": "C",
        "text": "div = \"format1\""
      },
      {
        "id": "D",
        "text": "class = \"format1\""
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 934,
    "text": "934. Formatem o najwyższej rozpiętości tonalnej wśród wymienionych jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "JPEG"
      },
      {
        "id": "B",
        "text": "PNG"
      },
      {
        "id": "C",
        "text": "RAW"
      },
      {
        "id": "D",
        "text": "BMP"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 935,
    "text": "935. Które z zadań programistycznych może być wykonane tylko po stronie klienta przeglądarki?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Bezpieczne wyświetlenie personalizowanej zawartości strony ze względu na prawa użytkownika aplikacji"
      },
      {
        "id": "B",
        "text": "Zapisanie danych pobranych z formularza w bazie danych powiązanej z aplikacją internetową"
      },
      {
        "id": "C",
        "text": "Sprawdzanie danych wpisywanych do pola tekstowego w czasie rzeczywistym"
      },
      {
        "id": "D",
        "text": "Sprawdzenie hasła użytkownika w bazie danych powiązanej z aplikacją internetową"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 936,
    "text": "936. Która instrukcja algorytmu odpowiada graficznej reprezentacji bloku przedstawionego na rysunku?",
    "image": "e14/936.jpg",
    "answers": [
      {
        "id": "A",
        "text": "n > 20"
      },
      {
        "id": "B",
        "text": "Wypisz n"
      },
      {
        "id": "C",
        "text": "n ← n + 5"
      },
      {
        "id": "D",
        "text": "Wykonaj podprogram sortowania tablicy t"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 937,
    "text": "937. Która z instrukcji języka JavaScript dokona zmiany koloru tekstu na niebieski w akapicie zdefiniowanym w dokumencie HTML?",
    "image": "e14/937.jpg",
    "answers": [
      {
        "id": "A",
        "text": "document.getElementById(\"jeden\").style.color = \"blue\";"
      },
      {
        "id": "B",
        "text": "document.getElementById(\"jeden\").style.background-color = \"blue\";"
      },
      {
        "id": "C",
        "text": "document.getElementById(\"jeden\").color = \"blue\";"
      },
      {
        "id": "D",
        "text": "document.getElementById(\"jeden\").background-color = \"blue\";"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 938,
    "text": "938. W języku SQL, po wykonaniu przedstawionych poleceń GRANT, prawo do zmiany struktury tabeli oraz jej usuwania zostanie przypisane",
    "image": "e14/938.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Adamowi i Annie"
      },
      {
        "id": "B",
        "text": "Tomaszowi i Annie"
      },
      {
        "id": "C",
        "text": "tylko Annie"
      },
      {
        "id": "D",
        "text": "Tomaszowi i Adamowi"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 939,
    "text": "939. Dla których imion zastosowana w zapytaniu klauzula LIKE jest prawdziwa?",
    "image": "e14/939.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Arleta, Krzysztof, Krystyna, Tristan"
      },
      {
        "id": "B",
        "text": "Gerald, Jarosław, Marek, Tamara"
      },
      {
        "id": "C",
        "text": "Rafał, Rebeka, Renata, Roksana"
      },
      {
        "id": "D",
        "text": "Krzysztof, Krystyna, Romuald"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 940,
    "text": "940. Grafik chce przekształcić bez utraty jakości obraz JPG w format PNG w ten sposób, żeby wszędzie tam, gdzie w pierwotnym obrazie jest kolor biały, w obrazie docelowym była przezroczystość. Aby to zrobić, powinien",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "przekształcić obraz w odcienie szarości"
      },
      {
        "id": "B",
        "text": "zmniejszyć rozdzielczość obrazu"
      },
      {
        "id": "C",
        "text": "dodać kanał alfa"
      },
      {
        "id": "D",
        "text": "zaimportować obraz do edytora grafiki wektorowej"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 941,
    "text": "941. Wskaż zapytanie SQL tworzące użytkownika sekretarka na localhost z hasłem zaq123",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "CREATE USER 'sekretarka'@'localhost' IDENTIFIED `zaq123`;"
      },
      {
        "id": "B",
        "text": "CREATE USER `sekretarka`@`localhost` IDENTIFY BY `zaq123`;"
      },
      {
        "id": "C",
        "text": "CREATE USER `sekretarka`@`localhost` IDENTIFY \"zaq123\";"
      },
      {
        "id": "D",
        "text": "CREATE USER `sekretarka`@`localhost` IDENTIFIED BY 'zaq123';"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 942,
    "text": "942. Która z funkcji SQL NIE pobiera argumentów?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "upper"
      },
      {
        "id": "B",
        "text": "now"
      },
      {
        "id": "C",
        "text": "len"
      },
      {
        "id": "D",
        "text": "year"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 943,
    "text": "943. W którym z przypadków walidacja fragmentu kodu CSS przebiegnie pomyślnie?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<p style=\"font-size:bold;\">"
      },
      {
        "id": "B",
        "text": "p { font-weight:bold; }"
      },
      {
        "id": "C",
        "text": "<p style=\"font-style:bold;\">"
      },
      {
        "id": "D",
        "text": "p { text-size:bold; }"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 944,
    "text": "944. W języku JavaScript zadeklarowana zmienna i, która ma przechowywać wynik dzielenia wynoszący 1, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "var i = parseInt(3/2);"
      },
      {
        "id": "B",
        "text": "var i = 3/2;"
      },
      {
        "id": "C",
        "text": "var i = Number(3/2);"
      },
      {
        "id": "D",
        "text": "var i = parseFloat(3/2);"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 945,
    "text": "945. W języku HTML zapisano definicję tabeli. Który rysunek obrazuje efekt jej działania?",
    "image": "e14/945.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Rysunek 1"
      },
      {
        "id": "B",
        "text": "Rysunek 2"
      },
      {
        "id": "C",
        "text": "Rysunek 3"
      },
      {
        "id": "D",
        "text": "Rysunek 4"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 946,
    "text": "946. W programie MS Access we właściwościach pola klasa należy ustawić maskę wprowadzania danych. Którą maskę należy podać, aby wprowadzone dane były złożone z trzech znaków w formacie: obowiązkowa cyfra, po niej obowiązkowe dwie litery?",
    "image": "e14/946.jpg",
    "answers": [
      {
        "id": "A",
        "text": "000"
      },
      {
        "id": "B",
        "text": "0CC"
      },
      {
        "id": "C",
        "text": "CLL"
      },
      {
        "id": "D",
        "text": "0LL"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 947,
    "text": "947. Który zapis definiuje w języku PHP komentarz wieloliniowy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "#"
      },
      {
        "id": "B",
        "text": "//"
      },
      {
        "id": "C",
        "text": "<!-- -->"
      },
      {
        "id": "D",
        "text": "/* */"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 948,
    "text": "948. W programie do obróbki grafiki rastrowej zmodyfikowano krzywe kolorów tak, jak zaznaczono ramką na przedstawionym obrazie. Ma to na celu",
    "image": "e14/948.jpg",
    "answers": [
      {
        "id": "A",
        "text": "rozjaśnienie całości obrazu"
      },
      {
        "id": "B",
        "text": "wygładzenie krawędzi na obrazie"
      },
      {
        "id": "C",
        "text": "modyfikację najjaśniejszych i najciemniejszych kolorów obrazu"
      },
      {
        "id": "D",
        "text": "przyciemnienie całości obrazu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 949,
    "text": "949. Pole insert_id zdefiniowane w bibliotece MySQLi języka PHP może być wykorzystane do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "otrzymania id ostatnio wstawionego wiersza"
      },
      {
        "id": "B",
        "text": "otrzymania kodu błędu, gdy proces wstawiania wiersza się nie powiódł"
      },
      {
        "id": "C",
        "text": "pobrania pierwszego wolnego indeksu bazy, tak, aby można było pod nim wstawić nowe dane"
      },
      {
        "id": "D",
        "text": "pobrania najwyższego indeksu bazy, aby po jego inkrementacji wstawić pod niego dane"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 950,
    "text": "950. W języku HTML, aby utworzyć pole edycyjne do wpisywania hasła, w którym wpisywany tekst jest maskowany (zastępowany kropkami), należy użyć znacznika",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<form=\"password\" type=\"password\" />"
      },
      {
        "id": "B",
        "text": "<input type=\"password\" />"
      },
      {
        "id": "C",
        "text": "<input name=\"password\" />"
      },
      {
        "id": "D",
        "text": "<form input type=\"password\" />"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 951,
    "text": "951. Które metody odnoszą się do predefiniowanego obiektu Date w języku JavaScript?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "concat() oraz pop()"
      },
      {
        "id": "B",
        "text": "row()"
      },
      {
        "id": "C",
        "text": "getMonth() oraz getDay()"
      },
      {
        "id": "D",
        "text": "fromCodePoint()"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 952,
    "text": "952. Którego typu danych w bazie MySQL należy użyć, aby przechować w jednym polu datę i czas?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "BOOLEAN"
      },
      {
        "id": "B",
        "text": "TIMESTAMP"
      },
      {
        "id": "C",
        "text": "DATE"
      },
      {
        "id": "D",
        "text": "YEAR"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 953,
    "text": "953. Dana jest tabela oceny o polach id, nazwisko, imie, ocena. Przedstawione zapytanie jest przykładem",
    "image": "e14/953.jpg",
    "answers": [
      {
        "id": "A",
        "text": "łączenia"
      },
      {
        "id": "B",
        "text": "selekcji"
      },
      {
        "id": "C",
        "text": "sumy"
      },
      {
        "id": "D",
        "text": "rekurencji"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 954,
    "text": "954. W przedstawionym fragmencie formularza HTML zdefiniowano pole input, o którym można powiedzieć, że",
    "image": "e14/954.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wyświetla wprowadzone do niego znaki"
      },
      {
        "id": "B",
        "text": "ma wpisany domyślny tekst „pole”"
      },
      {
        "id": "C",
        "text": "umożliwia wpisywanie tylko wartości liczbowych"
      },
      {
        "id": "D",
        "text": "ukrywa wprowadzone do niego znaki"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 955,
    "text": "955. Znacznik <pre> </pre> jest stosowany w celu wyświetlenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "treści czcionką o stałej szerokości"
      },
      {
        "id": "B",
        "text": "znaku wielokropka"
      },
      {
        "id": "C",
        "text": "znaku przekreślenia"
      },
      {
        "id": "D",
        "text": "treści polską czcionką"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 956,
    "text": "956. W języku PHP zastosowano funkcję is_float(). Które z podanych wywołań tej funkcji zwróci wartość true",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "is_float(NULL)"
      },
      {
        "id": "B",
        "text": "is_float(3.34)"
      },
      {
        "id": "C",
        "text": "is_float('3,34')"
      },
      {
        "id": "D",
        "text": "is_float(334)"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 957,
    "text": "957. Aby dołączyć kaskadowy arkusz stylów zapisany w zewnętrznym pliku, należy użyć następującego fragmentu kodu HTML",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<meta charset=\"styl.css\" />"
      },
      {
        "id": "B",
        "text": "<div id=\"styl.css\" relation=\"css\" />"
      },
      {
        "id": "C",
        "text": "<link rel=\"stylesheet\" type=\"text/css\" href=\"styl.css\" />"
      },
      {
        "id": "D",
        "text": "<optionvalue=\"styl.css\" type=\"text/css\" />"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 958,
    "text": "958. Tabela Pacjenci ma pola: imie, nazwisko, wiek, lekarz_id. Aby zestawić raport zawierający wyłącznie imiona i nazwiska pacjentów poniżej 18 roku życia, którzy zapisani są do lekarza o id równym 6, można posłużyć się kwerendą SQL",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT imie, nazwisko FROM Pacjenci WHERE wiek<18 AND lekarz_id=6;"
      },
      {
        "id": "B",
        "text": "SELECT imie, nazwisko WHERE wiek<18 AND lekarz_id=6;"
      },
      {
        "id": "C",
        "text": "SELECT imie, nazwisko WHERE wiek<18 OR lekarz_id=6;"
      },
      {
        "id": "D",
        "text": "SELECT imie, nazwisko FROM Pacjenci WHERE wiek<18 OR lekarz_id=6;"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 959,
    "text": "959. W języku SQL ustawienie klucza podstawowego na polu id w tabeli uczniowie możliwe jest za pomocą polecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "INSERT TABLE uczniowie PRIMARY KEY (id);"
      },
      {
        "id": "B",
        "text": "INSERT TABLE uczniowie ADD PRIMARY KEY (id);"
      },
      {
        "id": "C",
        "text": "ALTER TABLE uczniowie ADD PRIMARY KEY (id);"
      },
      {
        "id": "D",
        "text": "ADD TABLE uczniowie PRIMARY KEY (id);"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 960,
    "text": "960. Które z tych rozszerzeń nie jest rozszerzeniem pliku video?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "GIF"
      },
      {
        "id": "B",
        "text": "MOV"
      },
      {
        "id": "C",
        "text": "AVI"
      },
      {
        "id": "D",
        "text": "MP4"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 961,
    "text": "961. W języku PHP, aby prawidłowo obsłużyć połączenie z bazą danych MySQL, ostatnią operacją, powinno być zastosowanie polecenia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "exit"
      },
      {
        "id": "B",
        "text": "mysqli_close"
      },
      {
        "id": "C",
        "text": "mysql_exit"
      },
      {
        "id": "D",
        "text": "die"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 962,
    "text": "962. Który z paragrafów został sformatowany przedstawionym stylem zakładając, że pozostałe własności paragrafu przyjmują wartości domyślne?",
    "image": "e14/962.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 963,
    "text": "963. Dana jest tabela pracownicy, do której wpisano rekordy przedstawione obok. Po uruchomieniu podanej w ramce kwerendy SQL zostanie wyświetlona wartość",
    "image": "e14/963.jpg",
    "answers": [
      {
        "id": "A",
        "text": "5400"
      },
      {
        "id": "B",
        "text": "1300"
      },
      {
        "id": "C",
        "text": "2200"
      },
      {
        "id": "D",
        "text": "2600"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 964,
    "text": "964. W bazie danych MySQL polecenie CREATE USER umożliwia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "utworzenie użytkownika i nadanie mu praw do bazy"
      },
      {
        "id": "B",
        "text": "wyświetlenie informacji o istniejącym użytkowniku"
      },
      {
        "id": "C",
        "text": "utworzenie użytkownika"
      },
      {
        "id": "D",
        "text": "zmodyfikowanie hasła istniejącego użytkownika"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 965,
    "text": "965. Poziom izolacji transakcji Repeatable Read (tryb powtarzalnego odczytu) stosowany przez MS SQL wiąże się z problemem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "utraty aktualizacji"
      },
      {
        "id": "B",
        "text": "niepowtarzalnych odczytów"
      },
      {
        "id": "C",
        "text": "brudnych odczytów"
      },
      {
        "id": "D",
        "text": "odczytów widm"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 966,
    "text": "966. Relacja opisana w sposób: \"Rekordowi z tabeli A odpowiada dowolna liczba rekordów z tabeli B. Jednemu rekordowi z tabeli B odpowiada dokładnie jeden rekord z tabeli A\" jest relacją",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "nieoznaczoną"
      },
      {
        "id": "B",
        "text": "jeden do jednego"
      },
      {
        "id": "C",
        "text": "jeden do wielu"
      },
      {
        "id": "D",
        "text": "wiele do wielu"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 967,
    "text": "967. Dla przedstawionego fragmentu dokumentu HTML zdefiniowano formatowanie CSS selektora klasy \"menu\" tak, aby kolor tła bloku był zielony. Która definicja stylu CSS odpowiada temu formatowaniu?",
    "image": "e14/967.jpg",
    "answers": [
      {
        "id": "A",
        "text": "#menu { background-color: rgb(0,255,0); }"
      },
      {
        "id": "B",
        "text": "div:menu { color: green; }"
      },
      {
        "id": "C",
        "text": "div.menu { background-color: green; }"
      },
      {
        "id": "D",
        "text": "menu { background-color: rgb(0,255,0); }"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 968,
    "text": "968. Jak nazywa się metoda sortowania polegająca na podziale na n przedziałów jednakowej długości, w których następuje sortowanie, po czym posortowane zawartości przedziałów są poddawane analizie i prezentacji?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Sortowanie szybkie"
      },
      {
        "id": "B",
        "text": "Sortowanie bąbelkowe"
      },
      {
        "id": "C",
        "text": "Sortowanie kubełkowe"
      },
      {
        "id": "D",
        "text": "Sortowanie przez wybór"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 969,
    "text": "969. Stronę internetową zapisano w języku XHTML. Który z kodów stanowi implementację przedstawionego fragmentu strony, jeżeli żadne style CSS nie zostały zdefiniowane?",
    "image": "e14/969.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 970,
    "text": "970. W przedstawionej klasie zdefiniowano",
    "image": "e14/970.jpg",
    "answers": [
      {
        "id": "A",
        "text": "jedną właściwość"
      },
      {
        "id": "B",
        "text": "dwie metody"
      },
      {
        "id": "C",
        "text": "dwie właściwości"
      },
      {
        "id": "D",
        "text": "dwa obiekty"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 971,
    "text": "971. Aby zamieścić na stronie internetowej film, należy użyć znacznika",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<video>"
      },
      {
        "id": "B",
        "text": "<media>"
      },
      {
        "id": "C",
        "text": "<movie>"
      },
      {
        "id": "D",
        "text": "<audio>"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 972,
    "text": "972. Wskaż poprawną definicję stylu CSS dla przycisku typu submit o właściwościach: czarny kolor tła, brak obramowania, marginesy wewnętrzne 5px.",
    "image": "e14/972.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 973,
    "text": "973. Przedstawiony fragment kodu napisano w języku JavaScript. Aby program przypisywał wartość równą 1 co trzeciemu elementowi w tablicy, to w miejscu kropek należy wpisać",
    "image": "e14/973.jpg",
    "answers": [
      {
        "id": "A",
        "text": "i = 3"
      },
      {
        "id": "B",
        "text": "i += 3"
      },
      {
        "id": "C",
        "text": "i ++ 3"
      },
      {
        "id": "D",
        "text": "i =+ 3"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 974,
    "text": "974. W zapytaniu SQL umieszczonym poniżej, znak gwiazdki oznacza, że w wyniku tego zapytania",
    "image": "e14/974.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zostaną wyświetlone wszystkie rekordy tabeli mieszkancy"
      },
      {
        "id": "B",
        "text": "zostanie zignorowany warunek sprawdzający imię"
      },
      {
        "id": "C",
        "text": "zostaną wyświetlone wszystkie kolumny tabeli mieszkancy"
      },
      {
        "id": "D",
        "text": "zostanie wyświetlone pole o nazwie \"*\" (gwiazdka)"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 975,
    "text": "975. Znacznik języka HTML, który służy do dynamicznego tworzenia grafiki na stronie internetowej bez osadzania dodatkowych plików, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<embed>"
      },
      {
        "id": "B",
        "text": "<img>"
      },
      {
        "id": "C",
        "text": "<canvas>"
      },
      {
        "id": "D",
        "text": "<object>"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 976,
    "text": "976. Po wykonaniu kodu PHP zostanie wyświetlona aktualna data zawierająca jedynie",
    "image": "e14/976.jpg",
    "answers": [
      {
        "id": "A",
        "text": "dzień i miesiąc"
      },
      {
        "id": "B",
        "text": "miesiąc i rok"
      },
      {
        "id": "C",
        "text": "rok"
      },
      {
        "id": "D",
        "text": "dzień"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 977,
    "text": "977. Proces organizowania danych w bazie obejmujący tworzenie tabel, ustanawianie relacji między nimi i polegający na wyeliminowaniu z bazy nadmiarowych danych oraz niespójnych zależności nazywa się",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "weryfikacją spójności danych"
      },
      {
        "id": "B",
        "text": "normalizacją"
      },
      {
        "id": "C",
        "text": "weryfikacją integralności referencyjnej"
      },
      {
        "id": "D",
        "text": "redundancją"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 978,
    "text": "978. W jaki sposób, stosując język PHP, zapisać w ciasteczku napis znajdujący się w zmiennej dane na czas jednego dnia?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "setcookie(\"dane\", $dane, time() + (3600*24));"
      },
      {
        "id": "B",
        "text": "setcookie(\"dane\", $dane, 0);"
      },
      {
        "id": "C",
        "text": "setcookie(\"dane\", \"dane\", 0);"
      },
      {
        "id": "D",
        "text": "setcookie(\"dane\", $dane, time());"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 979,
    "text": "979. Które stwierdzenie najlepiej opisuje klasę Owoc zdefiniowaną w języku PHP i przedstawioną na listingu?",
    "image": "e14/979.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Ma jedno pole i dwie metody, z czego jedna metoda ma zakres prywatny."
      },
      {
        "id": "B",
        "text": "Ma dwa pola i jedną metodę, pole nazwa ma zakres widzialności ograniczony tylko do metod klasy."
      },
      {
        "id": "C",
        "text": "Ma dwa pola i jeden konstruktor, oba pola mają zakres widzialności ograniczony tylko do metod klasy."
      },
      {
        "id": "D",
        "text": "Ma dwa pola i jedną metodę, pole kolor ma zakres widzialności ograniczony tylko do metod klasy."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 980,
    "text": "980. Aby stworzyć różnicową kopię bazy danych na serwerze MSSQL, należy zastosować klauzulę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "FULL"
      },
      {
        "id": "B",
        "text": "RESTORE"
      },
      {
        "id": "C",
        "text": "WITH FORMAT"
      },
      {
        "id": "D",
        "text": "DIFFERENTIAL"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 981,
    "text": "981. W języku PHP wykonano operację przedstawioną w ramce. Aby wyświetlić wszystkie wyniki tego zapytania należy",
    "image": "e14/981.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wyświetlić zmienną $db"
      },
      {
        "id": "B",
        "text": "zaindeksować zmienną tab, tab[0] to pierwsze imię"
      },
      {
        "id": "C",
        "text": "zastosować pętlę z poleceniem mysqli_fetch_row"
      },
      {
        "id": "D",
        "text": "zastosować polecenie mysql_fetch"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 982,
    "text": "982. Kwerendę SELECT DISTINCT należy zastosować w przypadku, gdy potrzeba wybrać rekordy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "posortowane malejąco lub rosnąco"
      },
      {
        "id": "B",
        "text": "pogrupowane"
      },
      {
        "id": "C",
        "text": "występujące w bazie tylko raz"
      },
      {
        "id": "D",
        "text": "tak, aby w podanej kolumnie nie powtarzały się wartości"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 983,
    "text": "983. Grafik wykonał logo strony internetowej. To czarny znaczek na przezroczystym tle. Aby zachować wszystkie atrybuty obrazu i umieścić go na stronie internetowej, grafik powinien zapisać obraz w formacie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "PNG"
      },
      {
        "id": "B",
        "text": "CDR"
      },
      {
        "id": "C",
        "text": "JPG"
      },
      {
        "id": "D",
        "text": "BMP"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 984,
    "text": "984. W języku PHP funkcja, która może służyć do sprawdzenia, czy dany ciąg jest fragmentem innego ciągu, to",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "trim();"
      },
      {
        "id": "B",
        "text": "strtok();"
      },
      {
        "id": "C",
        "text": "strlen();"
      },
      {
        "id": "D",
        "text": "strstr();"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 985,
    "text": "985. Wykonanie przedstawionego polecenia PHP umożliwi",
    "image": "e14/984.jpg",
    "answers": [
      {
        "id": "A",
        "text": "odczyt danych z bazy"
      },
      {
        "id": "B",
        "text": "modyfikację struktury bazy"
      },
      {
        "id": "C",
        "text": "modyfikację danych w bazie"
      },
      {
        "id": "D",
        "text": "zapis nowych danych do bazy"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 986,
    "text": "986. Funkcja mysqli_num_rows() języka PHP może być wywołana po uprzednim zastosowaniu kwerendy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "INSERT"
      },
      {
        "id": "B",
        "text": "UPDATE"
      },
      {
        "id": "C",
        "text": "DELETE"
      },
      {
        "id": "D",
        "text": "SELECT"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 987,
    "text": "987. Które wyrażenie logiczne należy zastosować w języku JavaScript, aby wykonać operacje tylko dla dowolnych liczb ujemnych z przedziału jednostronnie domkniętego <-200,-100)?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "(liczba <=-200) || (liczba>-100)"
      },
      {
        "id": "B",
        "text": "(liczba <=-200) && (liczba<-100)"
      },
      {
        "id": "C",
        "text": "(liczba >=-200) || (liczba>-100)"
      },
      {
        "id": "D",
        "text": "(liczba >=-200) && (liczba<-100)"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 988,
    "text": "988. Wskaż instrukcję równoważną do instrukcji switch zapisanej językiem PHP",
    "image": "e14/988.jpg",
    "answers": [
      {
        "id": "A",
        "text": "A"
      },
      {
        "id": "B",
        "text": "B"
      },
      {
        "id": "C",
        "text": "C"
      },
      {
        "id": "D",
        "text": "D"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 989,
    "text": "989. Podane polecenie SQL nadaje prawo SELECT",
    "image": "e14/989.jpg",
    "answers": [
      {
        "id": "A",
        "text": "dla użytkownika root na serwerze sprzedawca"
      },
      {
        "id": "B",
        "text": "do wszystkich tabel w bazie hurtownia"
      },
      {
        "id": "C",
        "text": "dla użytkownika root na serwerze localhost"
      },
      {
        "id": "D",
        "text": "do wszystkich pól w tabeli hurtownia"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 990,
    "text": "990. Integralność encji w bazie danych zostanie zachowana, jeżeli między innymi",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "każdej kolumnie zostanie przypisany typ danych"
      },
      {
        "id": "B",
        "text": "klucz główny będzie zawsze liczbą całkowitą"
      },
      {
        "id": "C",
        "text": "każdy klucz główny będzie miał odpowiadający mu klucz obcy w innej tabeli"
      },
      {
        "id": "D",
        "text": "dla każdej tabeli zostanie utworzony klucz główny"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 991,
    "text": "991. W języku JavaScript stworzono funkcję o nazwie licz_pitagoras, która oblicza długość przeciwprostokątnej trójkąta prostokątnego, zgodnie z twierdzeniem Pitagorasa. Funkcja pobiera dwa parametry wejściowe i zwraca wartość. Prawidłowe wywołanie takiej funkcji, wraz z pobraniem zwróconego wyniku, będzie miało postać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "c = licz_pitagoras(a, b);"
      },
      {
        "id": "B",
        "text": "licz_pitagoras(a, b) = c;"
      },
      {
        "id": "C",
        "text": "licz_pitagoras(a, b);"
      },
      {
        "id": "D",
        "text": "licz_pitagoras(a, b, c);"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 992,
    "text": "992. Który z typów wspieranych przez język PHP służy do obsługi zmiennych logicznych?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Boolean"
      },
      {
        "id": "B",
        "text": "String"
      },
      {
        "id": "C",
        "text": "Float"
      },
      {
        "id": "D",
        "text": "Integer"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 993,
    "text": "993. W edytorze grafiki rastrowej, aby pracować tylko na części obrazu, nie naruszając innych jego elementów, można wykorzystać",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "warstwy"
      },
      {
        "id": "B",
        "text": "skalowanie"
      },
      {
        "id": "C",
        "text": "kadrowanie"
      },
      {
        "id": "D",
        "text": "inwersję"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 994,
    "text": "994. Wielkość grafiki JPEG umieszczonej na stronie internetowej może mieć wpływ na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "błędy składniowe języka HTML"
      },
      {
        "id": "B",
        "text": "długość czasu ładowania strony"
      },
      {
        "id": "C",
        "text": "kompatybilność z systemem Windows"
      },
      {
        "id": "D",
        "text": "szybszą weryfikację odnośników"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 995,
    "text": "995. Algorytm przedstawiony na rysunku można zapisać w języku JavaScript za pomocą instrukcji",
    "image": "e14/995.jpg",
    "answers": [
      {
        "id": "A",
        "text": "for(i = 0; i > 10; i++)"
      },
      {
        "id": "B",
        "text": "var i = 0; do i++; while(i > 10);"
      },
      {
        "id": "C",
        "text": "var i = 0; while(i <= 10) i += 2;"
      },
      {
        "id": "D",
        "text": "var i = 0; do i = i + 2; while(i < 10);"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 996,
    "text": "996. W kodzie HTML zdefiniowano formularz, który wysyła dane do pliku formularz.php. Po wciśnięciu przycisku typu submit przeglądarka przechodzi do przedstawionego adresu. Na podstawie podanego adresu można powiedzieć, że dane do pliku formularz.php zostały przesłane metodą",
    "image": "e14/996.jpg",
    "answers": [
      {
        "id": "A",
        "text": "COOKIE"
      },
      {
        "id": "B",
        "text": "POST"
      },
      {
        "id": "C",
        "text": "GET"
      },
      {
        "id": "D",
        "text": "SESSION"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 997,
    "text": "997. Wskaż funkcję PHP, za pomocą której odczytana zawartość pliku jest zapisywana do zmiennej reprezentującej ciąg znaków",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "get_file();"
      },
      {
        "id": "B",
        "text": "file_get_contents();"
      },
      {
        "id": "C",
        "text": "eof();"
      },
      {
        "id": "D",
        "text": "fwrite();"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 998,
    "text": "998. W której części dokumentu HTML należy umieścić wewnętrzny arkusz stylów?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Wewnątrz znacznika, którego styl dotyczy"
      },
      {
        "id": "B",
        "text": "W ciele strony"
      },
      {
        "id": "C",
        "text": "W części nagłówkowej strony"
      },
      {
        "id": "D",
        "text": "W skrypcie dołączonym do strony"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 999,
    "text": "999. W języku CSS zdefiniowano formatowanie paragrafu, które przypisze mu następujące cechy:",
    "image": "e14/999.jpg",
    "answers": [
      {
        "id": "A",
        "text": "tło czerwone, kolor tekstu niebieski, marginesy wewnętrzne ustawione na wartość 40px"
      },
      {
        "id": "B",
        "text": "tło niebieskie, kolor tekstu czerwony, marginesy zewnętrzne ustawione na wartość 40px"
      },
      {
        "id": "C",
        "text": "tło czerwone, kolor tekstu niebieski, marginesy zewnętrzne ustawione na wartość 40px"
      },
      {
        "id": "D",
        "text": "tło niebieskie, kolor tekstu czerwony, marginesy wewnętrzne ustawione na wartość 40px"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1000,
    "text": "1000. W znaczniku meta w miejsce kropek należy wpisać",
    "image": "e14/1000.jpg",
    "answers": [
      {
        "id": "A",
        "text": "informację o dostosowaniu do urządzeń mobilnych"
      },
      {
        "id": "B",
        "text": "streszczenie treści strony"
      },
      {
        "id": "C",
        "text": "nazwę edytora"
      },
      {
        "id": "D",
        "text": "język dokumentu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1001,
    "text": "1001. W języku PHP zmiennej a przypisano tekst, w którym kilkukrotnie występuje słowo Kowalski. Aby jednym pleceniem zmienić w zmiennej a wszystkie wystąpienia słowa Kowalski na słowo Nowak, należy zastosować polecenie",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "$a = str_replace('Nowak', 'Kowalski');"
      },
      {
        "id": "B",
        "text": "$a = str_replace('Kowalski', 'Nowak', $a);"
      },
      {
        "id": "C",
        "text": "$a = str_replace('Nowak', 'Kowalski', $a);"
      },
      {
        "id": "D",
        "text": "$a = str_rep('Kowalski', 'Nowak', $a);"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1002,
    "text": "1002. W bazie danych samochodów pole kolor z tabeli samochody przyjmuje wartości kolorów jedynie ze słownika lakier. Aby połączyć tabele samochody i lakier relacją należy, zastosować kwerendę",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ALTER TABLE samochody ADD FOREIGN KEY (kolor) REFERENCES lakier(lakierId);"
      },
      {
        "id": "B",
        "text": "ALTER TABLE samochody ADD FOREIGN KEY kolor REFERENCES lakier;"
      },
      {
        "id": "C",
        "text": "ALTER TABLE samochody ADD FOREIGN KEY barwa REFERENCES samochody.lakier;"
      },
      {
        "id": "D",
        "text": "ALTER TABLE lakier ADD FOREIGN KEY (barwa) REFERENCES samochody(kolor);"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1003,
    "text": "1003. W języku C++ zdefiniowano zmienną: char zm1;. W jaki sposób można do niej przypisać wartość zgodnie ze składnią języka?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zm1 == 0x35;"
      },
      {
        "id": "B",
        "text": "zm1[2] = 32;"
      },
      {
        "id": "C",
        "text": "zm1 = \"wiadro\";"
      },
      {
        "id": "D",
        "text": "zm1 = 'w';"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1004,
    "text": "1004. Znaczniki HTML <strong> oraz <em> służące do podkreślenia ważności tekstu, pod względem formatowania są odpowiednikami znaczników",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<b> oraz <u>"
      },
      {
        "id": "B",
        "text": "<u> oraz <sup>"
      },
      {
        "id": "C",
        "text": "<i> oraz <mark>"
      },
      {
        "id": "D",
        "text": "<b> oraz <i>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1005,
    "text": "1005. Obraz przedstawia formatowanie CSS paragrafu. Aby otrzymać czerwony kolor poza obramowaniem, tak jak przedstawiono na obrazie, należy zdefiniować własność:",
    "image": "e14/1005.jpg",
    "answers": [
      {
        "id": "A",
        "text": "border"
      },
      {
        "id": "B",
        "text": "outline"
      },
      {
        "id": "C",
        "text": "padding"
      },
      {
        "id": "D",
        "text": "background"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1006,
    "text": "1006. Klauzuli DROP COLUMN można użyć podczas wydawania kwerendy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ALTER TABLE"
      },
      {
        "id": "B",
        "text": "DROP TABLE"
      },
      {
        "id": "C",
        "text": "CREATE TABLE"
      },
      {
        "id": "D",
        "text": "ALTER COLUMN"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1007,
    "text": "1007. Który zapis tworzący tablicę w JavaScript jest niepoprawny składniowo?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "var liczby = new Array(1, 2, 3);"
      },
      {
        "id": "B",
        "text": "var liczby = [3];"
      },
      {
        "id": "C",
        "text": "var liczby = [1, 2, 3];"
      },
      {
        "id": "D",
        "text": "var liczby = new Array[1, 2, 3];"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1008,
    "text": "1008. W języku HTML zapisano formularz. Który z efektów działania kodu będzie wyświetlony przez przeglądarkę zakładając, że w pierwsze pole użytkownik przeglądarki wpisał wartość \"Przykładowy text\"?",
    "image": "e14/1008.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Efekt 1"
      },
      {
        "id": "B",
        "text": "Efekt 2"
      },
      {
        "id": "C",
        "text": "Efekt 3"
      },
      {
        "id": "D",
        "text": "Efekt 4"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1009,
    "text": "1009. Który kod PHP sprawi, że zostanie wyświetlona sformatowana data oraz czas ostatnich odwiedzin użytkownika witryny, natomiast podczas pierwszej wizyty nic się nie wyświetli?",
    "image": "e14/1009.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Kod 1"
      },
      {
        "id": "B",
        "text": "Kod 2"
      },
      {
        "id": "C",
        "text": "Kod 3"
      },
      {
        "id": "D",
        "text": "Kod 4"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1010,
    "text": "1010. Zapis selektora input[type=number] { background-color: Brown; } oznacza, że tło będzie brązowe dla",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "pól edycyjnych, które są typu numerycznego"
      },
      {
        "id": "B",
        "text": "wszystkich tekstów na stronie"
      },
      {
        "id": "C",
        "text": "wszystkich pól edycyjnych"
      },
      {
        "id": "D",
        "text": "pól edycyjnych, gdy użytkownik wpisze do nich dowolną cyfrę"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1011,
    "text": "1011. W dokumencie HTML zdefiniowano listę oraz dodano do niej formatowanie CSS. Który z efektów odpowiada tej definicji",
    "image": "e14/1011.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Efekt 1"
      },
      {
        "id": "B",
        "text": "Efekt 2"
      },
      {
        "id": "C",
        "text": "Efekt 3"
      },
      {
        "id": "D",
        "text": "Efekt 4"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1012,
    "text": "1012. Co można powiedzieć o wyświetlonym przez witrynę tekście \"test kolorów\"?",
    "image": "e14/1012.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Wciskanie przycisku test sprawia, że kolor tekstu jest na przemian niebieski i czerwony."
      },
      {
        "id": "B",
        "text": "Zaraz po załadowaniu witryny kolor tekstu jest czerwony."
      },
      {
        "id": "C",
        "text": "Po wciśnięciu przycisku test kolor tekstu jest czerwony."
      },
      {
        "id": "D",
        "text": "Po wciśnięciu przycisku test kolor tekstu jest niebieski."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1013,
    "text": "1013. Efekt przedstawiony na obrazie, wykonany za pomocą edytora grafiki rastrowej, to:",
    "image": "e14/1013.jpg",
    "answers": [
      {
        "id": "A",
        "text": "pikselizacja"
      },
      {
        "id": "B",
        "text": "szum RGB"
      },
      {
        "id": "C",
        "text": "grawerowanie"
      },
      {
        "id": "D",
        "text": "rozmycie Gaussa"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1014,
    "text": "1014. W formularzu zdefiniowano kontrolki do wpisania imienia i nazwiska. Który atrybut reprezentuje podpowiedź umiejscowioną w polu kontrolki, znikającą w momencie, gdy użytkownik rozpocznie wpisywanie wartości?",
    "image": "e14/1014.jpg",
    "answers": [
      {
        "id": "A",
        "text": "value"
      },
      {
        "id": "B",
        "text": "placeholder"
      },
      {
        "id": "C",
        "text": "title"
      },
      {
        "id": "D",
        "text": "name"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1015,
    "text": "1015. Metoda zachłanna konstruowania algorytmów polega na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "podziale problemu na podproblemy w celu uzyskania problemów łatwych do rozwiązania"
      },
      {
        "id": "B",
        "text": "wybieraniu rozwiązań, które w danym kroku wydają się najkorzystniejsze"
      },
      {
        "id": "C",
        "text": "odwołaniu się funkcji lub definicji do samej siebie"
      },
      {
        "id": "D",
        "text": "przeszukiwaniu zbioru danych aż do momentu znalezienia rozwiązania"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1016,
    "text": "1016. W bibliotece mysqli języka PHP, aby uzyskać ostatni komunikat o błędzie można zastosować funkcję:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "mysqli_error()"
      },
      {
        "id": "B",
        "text": "mysqli_use_result()"
      },
      {
        "id": "C",
        "text": "mysqli_errno()"
      },
      {
        "id": "D",
        "text": "mysqli_error_list()"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1017,
    "text": "1017. Funkcja PHP var_dump() wyświetla informację na temat zmiennej: jej typ i wartość. Wynikiem dla przedstawionego fragmentu kodu jest",
    "image": "e14/1017.jpg",
    "answers": [
      {
        "id": "A",
        "text": "array(2) {[0] => int(59) [1] => int(85)}"
      },
      {
        "id": "B",
        "text": "int(59)"
      },
      {
        "id": "C",
        "text": "string(\"59.85\")"
      },
      {
        "id": "D",
        "text": "float(59.85)"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1018,
    "text": "1018. Które polecenie jest poprawne pod względem walidacji HTML5?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<img src = mojPiesek.jpg alt = pies>"
      },
      {
        "id": "B",
        "text": "<img src = \"mojPiesek.jpg\" alt = \"pies\">"
      },
      {
        "id": "C",
        "text": "<img src = mojPiesek.jpg\" alt = \"pies>"
      },
      {
        "id": "D",
        "text": "<img src = \"mojPiesek.jpg\" >"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1019,
    "text": "1019. Lokalny System Zarządzania Bazą Danych (SZBD) udostępnia bazę danych",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "jako serwer w sieci"
      },
      {
        "id": "B",
        "text": "w chmurze komputerowej"
      },
      {
        "id": "C",
        "text": "tylko na jednym, określonym komputerze"
      },
      {
        "id": "D",
        "text": "jako usługę sieciową serwera"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1020,
    "text": "1020. Dla których imion klauzula LIKE jest prawdziwa?",
    "image": "e14/1020.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Oksana, Oktawia, Olga"
      },
      {
        "id": "B",
        "text": "Oksana, Ola, Olga"
      },
      {
        "id": "C",
        "text": "Oktawia, Oktawian, Olga"
      },
      {
        "id": "D",
        "text": "Oda, Oksana, Oktawia"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1021,
    "text": "1021. Tabela samochody zawiera rekordy przedstawione na obrazie. Jakie dane zostaną zwrócone wykonując zapytanie SQL:",
    "image": "e14/1021.jpg",
    "answers": [
      {
        "id": "A",
        "text": "opel zafira"
      },
      {
        "id": "B",
        "text": "zafira"
      },
      {
        "id": "C",
        "text": "opel zafira; opel insignia"
      },
      {
        "id": "D",
        "text": "zafira; insignia"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1022,
    "text": "1022. Tabele Studenci, Zapisy, Zajecia są powiązane relacją. Aby wybrać jedynie nazwiska studentów oraz odpowiadające im idZajecia dla studentów z grupy 15, należy wydać kwerendę",
    "image": "e14/1022.jpg",
    "answers": [
      {
        "id": "A",
        "text": "SELECT nazwisko, idZajecia FROM Studenci INNER JOIN Zapisy WHERE grupa = 15;"
      },
      {
        "id": "B",
        "text": "SELECT nazwisko, idZajecia FROM Studenci JOIN Zapisy ON Studenci.id = Zapisy.idZajecia;"
      },
      {
        "id": "C",
        "text": "SELECT nazwisko, idZajecia FROM Studenci INNER JOIN Zapisy ON Studenci.id = Zapisy.idStudenta;"
      },
      {
        "id": "D",
        "text": "SELECT nazwisko, idZajecia FROM Studenci JOIN Zapisy ON Studenci.id = Zapisy.idZajecia WHERE grupa = 15;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1023,
    "text": "1023. W grafice funkcja desaturacja ma na celu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "przekształcenie barw do odcieni szarości"
      },
      {
        "id": "B",
        "text": "zwiększenie jaskrawości barw"
      },
      {
        "id": "C",
        "text": "rozjaśnienie obrazu"
      },
      {
        "id": "D",
        "text": "zwiększenie liczby kolorów wykorzystywanych w obrazie"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1024,
    "text": "1024. Walidator W3C wygenerował błąd walidacji: End tag p seen, but there were open elements. Którego fragmentu kodu on dotyczy?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<p>Ala ma <b>kota</b></p>"
      },
      {
        "id": "B",
        "text": "<p>Ala ma kota"
      },
      {
        "id": "C",
        "text": "<p>Ala ma kota</p>"
      },
      {
        "id": "D",
        "text": "<p>Ala ma <b>kota</p></b>"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1025,
    "text": "1025. Które typy danych w języku C++ reprezentują liczby rzeczywiste?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "float i long"
      },
      {
        "id": "B",
        "text": "double i bool"
      },
      {
        "id": "C",
        "text": "float i double"
      },
      {
        "id": "D",
        "text": "double i short"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1026,
    "text": "1026. W języku SQL wydano kwerendę, niestety jej wykonanie nie powiodło się i wystąpił błąd: #1396 - Operation CREATE USER failed for 'anna'@'localhost'. Powodem takiego zachowania bazy danych może być:",
    "image": "e14/1026.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zbyt słabe hasło dla konta anna"
      },
      {
        "id": "B",
        "text": "nieznane polecenie CREATE USER"
      },
      {
        "id": "C",
        "text": "istnienie użytkownika anna w bazie"
      },
      {
        "id": "D",
        "text": "nieprawidłowa składnia polecenia CREATE USER"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1027,
    "text": "1027. Na listingu kodu JavaScript w wykropkowanej części definicji obiektu osoba należy wpisać kod, który prawidłowo obsłuży instrukcję osoba.j = \"PL\"; Który to będzie kod?",
    "image": "e14/1027.jpg",
    "answers": [
      {
        "id": "A",
        "text": "return this.j;"
      },
      {
        "id": "B",
        "text": "this.jezyk = nazwa;"
      },
      {
        "id": "C",
        "text": "this.j = nazwa;"
      },
      {
        "id": "D",
        "text": "return this.jezyk;"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1028,
    "text": "1028. Funkcji session_start() języka PHP należy użyć przy implementacji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "obsługi formularza"
      },
      {
        "id": "B",
        "text": "dowolnej witryny, która obsługuje ciasteczka"
      },
      {
        "id": "C",
        "text": "wczytywania danych z plików zewnętrznych"
      },
      {
        "id": "D",
        "text": "wielostronicowej witryny, która wymaga dostępu do danych przy przechodzeniu pomiędzy stronami"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1029,
    "text": "1029. Zapis CSS margin: auto; oznacza, że marginesy są",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wyliczane przez przeglądarkę tak, aby element został wyśrodkowany w poziomie"
      },
      {
        "id": "B",
        "text": "równe domyślnym wartościom marginesów elementu, do którego są przypisane"
      },
      {
        "id": "C",
        "text": "stałe dla danej przeglądarki, niezależnie od rozmiaru jej okna"
      },
      {
        "id": "D",
        "text": "odziedziczone po elemencie rodzica dla danego elementu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1030,
    "text": "1030. W systemie barw i oznaczeń znaków bezpieczeństwa kolor czerwony zastrzeżony jest dla",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "znaków zakazu"
      },
      {
        "id": "B",
        "text": "znaków nakazu"
      },
      {
        "id": "C",
        "text": "dróg ewakuacyjnych"
      },
      {
        "id": "D",
        "text": "znaków informacyjnych"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1031,
    "text": "1031. Kompetencje związane z osobowością dotyczą",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "stanu zdrowia i predyspozycji do wykonywania określonych zadań"
      },
      {
        "id": "B",
        "text": "wartości i wierzeń, które pozwalają na określenie motywów działania"
      },
      {
        "id": "C",
        "text": "zadań w konkretnym zawodzie i wiedzy specjalistyczno-technicznej"
      },
      {
        "id": "D",
        "text": "indywidualnego radzenia sobie z otoczeniem"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1032,
    "text": "1032. Organem społecznym, którego zadaniem jest sprawowanie nadzoru społeczno-ekonomicznego nad warunkami pracy, jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Straż Pożarna"
      },
      {
        "id": "B",
        "text": "związek zawodowy"
      },
      {
        "id": "C",
        "text": "komisja BHP"
      },
      {
        "id": "D",
        "text": "kierownik zakładu"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1033,
    "text": "1033. Co można powiedzieć o błędach interpretacji kodu PHP?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "są ignorowane przez przeglądarkę oraz interpreter kodu PHP"
      },
      {
        "id": "B",
        "text": "są zapisywane w podglądzie zdarzeń systemu Windows"
      },
      {
        "id": "C",
        "text": "są zapisywane w logu pod warunkiem ustawienia odpowiedniego parametru w pliku php.ini"
      },
      {
        "id": "D",
        "text": "są wyświetlane w oknie edytora kodu PHP po wybraniu przycisku kompiluj"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1034,
    "text": "1034. Przedstawione w tabeli cechy dotyczą",
    "image": "e14/1034.jpg",
    "answers": [
      {
        "id": "A",
        "text": "umowy zlecenia"
      },
      {
        "id": "B",
        "text": "umowy agencyjnej"
      },
      {
        "id": "C",
        "text": "umowy o pracę"
      },
      {
        "id": "D",
        "text": "umowy o dzieło"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1035,
    "text": "1035. Który format pliku jest formatem rastrowym?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SWF"
      },
      {
        "id": "B",
        "text": "TIFF"
      },
      {
        "id": "C",
        "text": "SVG"
      },
      {
        "id": "D",
        "text": "CDR"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1036,
    "text": "1036. Przedstawiony znak ochrony przeciwpożarowej jest stosowany w przypadku",
    "image": "e14/1036.jpg",
    "answers": [
      {
        "id": "A",
        "text": "zakazu używania otwartego ognia"
      },
      {
        "id": "B",
        "text": "niebezpieczeństwa pożaru spowodowanego materiałami utleniającymi"
      },
      {
        "id": "C",
        "text": "niebezpieczeństwa pożaru spowodowanego materiałami łatwo zapalnymi"
      },
      {
        "id": "D",
        "text": "zakazu gaszenia wodą"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1037,
    "text": "1037. W przedstawionym programie napisanym w języku PHP zmienna $i przechowuje",
    "image": "e14/1037.jpg",
    "answers": [
      {
        "id": "A",
        "text": "wartość flagi"
      },
      {
        "id": "B",
        "text": "zbiór liczb parzystych podzielonych bez reszty przez 59"
      },
      {
        "id": "C",
        "text": "losową liczbę z zaokrągleniem do 100 miejsc po przecinku"
      },
      {
        "id": "D",
        "text": "liczbę wykonanych losowań"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1038,
    "text": "1038. W języku PHP operator ++ przed zmienną (np. ++$i) oznacza",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "predekrementację"
      },
      {
        "id": "B",
        "text": "postinkrementację"
      },
      {
        "id": "C",
        "text": "postdekrementację"
      },
      {
        "id": "D",
        "text": "preinkrementację"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1039,
    "text": "1039. Która operacja, na dwóch obiektach, została zastosowana w programie do obróbki grafiki wektorowej?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "różnica"
      },
      {
        "id": "B",
        "text": "wykluczenie"
      },
      {
        "id": "C",
        "text": "suma"
      },
      {
        "id": "D",
        "text": "podział"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1040,
    "text": "1040. Która własności języka CSS umożliwia zmianę domyślnego koloru czcionki?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "color"
      },
      {
        "id": "B",
        "text": "text-decoration"
      },
      {
        "id": "C",
        "text": "transform"
      },
      {
        "id": "D",
        "text": "font-style"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1041,
    "text": "1041. Dana jest tabela oceny o polach id, nazwisko, imie, ocena. Przedstawione zapytanie jest przykładem",
    "image": "e14/1041.jpg",
    "answers": [
      {
        "id": "A",
        "text": "sumy"
      },
      {
        "id": "B",
        "text": "agregacji"
      },
      {
        "id": "C",
        "text": "selekcji"
      },
      {
        "id": "D",
        "text": "złączenia"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1042,
    "text": "1042. Użyty w kodzie HTML znacznik <pre> umozliwia umieszczenie na stronie WWW",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "tekstu z zachowaniem jego oryginalnego formatowania"
      },
      {
        "id": "B",
        "text": "edytowalnego pola tekstowego"
      },
      {
        "id": "C",
        "text": "tekstu zapisanego w indeksie dolnym"
      },
      {
        "id": "D",
        "text": "odwołania do innego fragmentu tekstu"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1043,
    "text": "1043. W tabeli uczniowie, aby zmienić wszystkie wartości znajdujące się w kolumnie wiek na wartość 10, należy użyć zapytania",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SET uczniowie UPDATE wiek=10;"
      },
      {
        "id": "B",
        "text": "UPDATE uczniowie SET wiek 10 WHERE wiek ALL;"
      },
      {
        "id": "C",
        "text": "UPDATE uczniowie SET wiek=10;"
      },
      {
        "id": "D",
        "text": "SET uczniowie UPDATE wiek 10 WHERE wiek ALL;"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1044,
    "text": "1044. Wskaż prawidłową kolejność etapów planowania pracy zespołu",
    "image": "e14/1044.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Kolejność 2"
      },
      {
        "id": "B",
        "text": "Kolejność 1"
      },
      {
        "id": "C",
        "text": "Kolejność 3"
      },
      {
        "id": "D",
        "text": "Kolejność 4"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1045,
    "text": "1045. W języku PHP instrukcją, która jest przeznaczona do wykonania określonej liczby iteracji jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "switch"
      },
      {
        "id": "B",
        "text": "for"
      },
      {
        "id": "C",
        "text": "if"
      },
      {
        "id": "D",
        "text": "continue"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1046,
    "text": "1046. O przedstawionej definicji pola input można powiedzieć, że",
    "image": "e14/1046.jpg",
    "answers": [
      {
        "id": "A",
        "text": "umożliwia wpisywanie tylko wartości liczbowych"
      },
      {
        "id": "B",
        "text": "ukrywa wprowadzone do niego znaki"
      },
      {
        "id": "C",
        "text": "wyświetla wprowadzone do niego znaki"
      },
      {
        "id": "D",
        "text": "ma wpisany domyślny tekst \"pole\""
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1047,
    "text": "1047. Który typ danych w bazie MySQL jest przeznaczony do przechowywania liczb",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ENUM"
      },
      {
        "id": "B",
        "text": "BIGINT"
      },
      {
        "id": "C",
        "text": "VARCHAR"
      },
      {
        "id": "D",
        "text": "DOUBLE"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1048,
    "text": "1048. Przykładem etycznego zachowania informatyka jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "kopiowanie oprogramowania i przekazywanie kopii rodzinie"
      },
      {
        "id": "B",
        "text": "podejmowanie prac jednocześnie u kliku zleceniodawców, których interesy są ze sobą sprzeczne"
      },
      {
        "id": "C",
        "text": "przedstawianie swojemu klientowi prawdy o przewidywanych kosztach oraz przypuszczalnym czasie trwania analizowanych prac"
      },
      {
        "id": "D",
        "text": "naruszanie integralności systemów informatycznych podmiotów, które są konkurencyjne dla jego zleceniodawcy"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1049,
    "text": "1049. Aby prawidłowo utworzyć relację typu m..n nienarażoną na redundancję danych, należy",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "posortować przynajmniej jedną z tabel"
      },
      {
        "id": "B",
        "text": "połączyć bezpośrednio klucze podstawowe obu tabel"
      },
      {
        "id": "C",
        "text": "połączyć bezpośrednio klucze obce obu tabel"
      },
      {
        "id": "D",
        "text": "utworzyć tabelę pomocniczą"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1050,
    "text": "1050. Językami działającymi jedynie po stronie serwera są:",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "Java, C#, Python, Ruby, PHP"
      },
      {
        "id": "B",
        "text": "Java, C#, TypeScript, Ruby, PHP"
      },
      {
        "id": "C",
        "text": "C#, Python, Ruby, PHP, JavaScript"
      },
      {
        "id": "D",
        "text": "Java, C#, Python, ActionScript, PHP"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1051,
    "text": "1051. W relacyjnej bazie danych jednoznacznemu identyfikatorowi rekordu odpowiada",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "indeks tabeli"
      },
      {
        "id": "B",
        "text": "klucz główny"
      },
      {
        "id": "C",
        "text": "krotka"
      },
      {
        "id": "D",
        "text": "klucz obcy"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1052,
    "text": "1052. W języku PHP, aby wyświetlić n razy znak „@”, należy użyć funkcji",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "function znaki($znak, $n){\n  for($i=0; $i<$n; $i++)\n    print($znak);\n}\nznaki(@, $n);"
      },
      {
        "id": "B",
        "text": "function znaki($znak, $n){\n  for($i=0; $i<$n; $i++)\n    print($znak);\n}\nznaki($n);"
      },
      {
        "id": "C",
        "text": "function znaki($znak, $n){\n  for($i=0; $i<$n; $i++)\n    print($znak);\n}\nznaki(\"@\", $n);"
      },
      {
        "id": "D",
        "text": "function znaki($i){\n  for($i=0; $i<$n; $i++)\n    print(\"@\");\n}\nznaki($i);"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1053,
    "text": "1053. W stylu CSS właściwość float pozwala na umieszczenie elementu",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "po lewej lub prawej stronie innego elementu"
      },
      {
        "id": "B",
        "text": "wyłącznie po prawej stronie innego elementu"
      },
      {
        "id": "C",
        "text": "wyłącznie nad innym elementem"
      },
      {
        "id": "D",
        "text": "nad lub pod innym elementem"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1054,
    "text": "1054. Który etap nie jest częścią procesu kompilacji?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "analiza składniowa kodu źródłowego"
      },
      {
        "id": "B",
        "text": "optymalizacja kodu wynikowego"
      },
      {
        "id": "C",
        "text": "generowanie kodu wynikowego"
      },
      {
        "id": "D",
        "text": "formatowanie kodu źródłowego"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1055,
    "text": "1055. Wskaż środki gaśnicze, które mogą zostać wykorzystane podczas pożaru urządzeń elektrycznych będących pod napięciem",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "proszek gaśniczy, dwutlenek węgla i halon"
      },
      {
        "id": "B",
        "text": "piana gaśnicza, dwutlenek węgla i woda"
      },
      {
        "id": "C",
        "text": "proszek gaśniczy, dwutlenek węgla i woda"
      },
      {
        "id": "D",
        "text": "piana gaśnicza, dwutlenek węgla i halon"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1056,
    "text": "1056. Podany wpis w dokumencie HTML oznacza, że",
    "image": "e14/1056.jpg",
    "answers": [
      {
        "id": "A",
        "text": "kod HTML zapisano w wersji 5 języka"
      },
      {
        "id": "B",
        "text": "znaczniki zamykające w kodzie HTML są zawsze obowiązkowe"
      },
      {
        "id": "C",
        "text": "znaczniki w kodzie HTML mogą być zapisane jedynie małymi literami"
      },
      {
        "id": "D",
        "text": "kod HTML zapisano w wersji 4 języka"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1057,
    "text": "1057. Która z poniższych praktyk jest przykładem wzorca prawidłowej współpracy w zespole?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "ignorowanie opinii członków zespołu"
      },
      {
        "id": "B",
        "text": "regularne spotkania \"feedbackowe\""
      },
      {
        "id": "C",
        "text": "unikanie odpowiedzialności za zadania"
      },
      {
        "id": "D",
        "text": "omawianie indywidualnych błędów na forum publicznym"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1058,
    "text": "1058. Ograniczanie dostępu do pól lub metod klasy nazywane jest",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "iteracją"
      },
      {
        "id": "B",
        "text": "rekurencją"
      },
      {
        "id": "C",
        "text": "dziedziczeniem"
      },
      {
        "id": "D",
        "text": "hermetyzacją"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1059,
    "text": "1059. Dana jest tabela uczniowie o polach id, nazwisko, imie, klasa. Które zapytanie SQL wyświetli liczbę osób w poszczególnych klasach oraz nazwę klasy?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "SELECT SUM(id), klasa FROM uczniowie ORDER BY klasa;"
      },
      {
        "id": "B",
        "text": "SELECT COUNT(id), klasa FROM uczniowie ORDER BY klasa;"
      },
      {
        "id": "C",
        "text": "SELECT SUM(id), klasa FROM uczniowie GROUP BY klasa;"
      },
      {
        "id": "D",
        "text": "SELECT COUNT(id), klasa FROM uczniowie GROUP BY klasa;"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1060,
    "text": "1060. Ile poziomów znaczników nagłówka zdefiniowano w języku HTML5?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "8 poziomów"
      },
      {
        "id": "B",
        "text": "6 poziomów"
      },
      {
        "id": "C",
        "text": "4 poziomy"
      },
      {
        "id": "D",
        "text": "2 poziomy"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1061,
    "text": "1061. Funkcja języka PHP settype(mixed &$var, string $type) służy do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wyświetlenia typu zmiennej"
      },
      {
        "id": "B",
        "text": "przekształcenia zmiennej w stałą"
      },
      {
        "id": "C",
        "text": "wykonania operacji dodawania zmiennych"
      },
      {
        "id": "D",
        "text": "konwertowania zmiennej do wskazanego typu"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1062,
    "text": "1062. Instrukcja DROP TABLE pozwala na",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "utworzenie struktury tabeli"
      },
      {
        "id": "B",
        "text": "modyfikację struktury tabeli"
      },
      {
        "id": "C",
        "text": "usunięcie zawartości tabeli i pozostawienie jej struktury"
      },
      {
        "id": "D",
        "text": "usunięcie tabeli wraz z jej zawartością"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1063,
    "text": "1063. Instrukcja GRANT w języku SQL służy do",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "odbierania użytkownikom praw do obiektów"
      },
      {
        "id": "B",
        "text": "aktualizacji istniejących danych w bazie"
      },
      {
        "id": "C",
        "text": "nadawania użytkownikom praw do obiektów"
      },
      {
        "id": "D",
        "text": "umieszczania nowych danych w bazie"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1064,
    "text": "1064. Który styl CSS pozwoli na ustawienie rozmiaru prawego marginesu zewnętrznego dla elementu <div> na 200px?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "div { margin: 100px 200px 150px 80px; }"
      },
      {
        "id": "B",
        "text": "div {padding: 200px 150px 100px 80px; }"
      },
      {
        "id": "C",
        "text": "div {margin: 100px 80px 200px 250px; }"
      },
      {
        "id": "D",
        "text": "div { padding: 80px 200px 150px 100px; }"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1065,
    "text": "1065. Którą wartość właściwości position przypisano do obrazu z napisem Lorem Ipsum na przedstawionym filmie?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "absolute"
      },
      {
        "id": "B",
        "text": "static"
      },
      {
        "id": "C",
        "text": "fixed"
      },
      {
        "id": "D",
        "text": "relative"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1066,
    "text": "1066. Który znacznik pozwala na wewnętrzne dodawanie stylów CSS w kodzie HTML?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "<style>"
      },
      {
        "id": "B",
        "text": "<type>"
      },
      {
        "id": "C",
        "text": "<css>"
      },
      {
        "id": "D",
        "text": "<script>"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1067,
    "text": "1067. W języku SQL, aby sprawdzić czy wartość znajduje się w danym przedziale, należy użyć klauzuli",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "LIKE"
      },
      {
        "id": "B",
        "text": "BETWEEN"
      },
      {
        "id": "C",
        "text": "SET"
      },
      {
        "id": "D",
        "text": "ORDER BY"
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 1068,
    "text": "1068. Zgodnie z właściwościami ACID dotyczącymi wykonywania transakcji wymaganie izolacji (ang. isolation) oznacza, że",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "pod pewnymi warunkami dane zmieniane przez transakcję mogą zostać wycofane"
      },
      {
        "id": "B",
        "text": "w przypadku konfliktu z inną transakcją, obie modyfikują te same dane w tym samym czasie"
      },
      {
        "id": "C",
        "text": "po wykonaniu transakcji system bazy danych będzie spójny"
      },
      {
        "id": "D",
        "text": "jeżeli dwie transakcje wykonują się współbieżnie, to zwykle nie widzą wprowadzanych przez siebie zmian"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1069,
    "text": "1069. W języku SQL za pomocą kwerendy ALTER można",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "wprowadzić dane do tabeli"
      },
      {
        "id": "B",
        "text": "usunąć tabelę"
      },
      {
        "id": "C",
        "text": "utworzyć tabelę"
      },
      {
        "id": "D",
        "text": "zmienić strukturę tabeli"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1070,
    "text": "1070. Z ilu podstawowych kolorów składa się model przestrzeni barw CMYK?",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "4 kolorów"
      },
      {
        "id": "B",
        "text": "2 kolorów"
      },
      {
        "id": "C",
        "text": "5 kolorów"
      },
      {
        "id": "D",
        "text": "3 kolorów"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1071,
    "text": "1071. Który fragment kodu HTML umożliwi wyświetlenie na stronie WWW przedstawionego tekstu, jeśli żadne formatowanie CSS nie zostało zdefiniowane?",
    "image": "e14/1071.jpg",
    "answers": [
      {
        "id": "A",
        "text": "Zapraszamy <del>do odwiedzin</del><cite> do zakupów </cite> w naszym sklepie internetowym"
      },
      {
        "id": "B",
        "text": "Zapraszamy <del>do odwiedzin</del><cite> do zakupów </cite>w naszym sklepie internetowym"
      },
      {
        "id": "C",
        "text": "Zapraszamy <del>do odwiedzin</del><seb> do zakupów </sub>w naszym sklepie internetowym"
      },
      {
        "id": "D",
        "text": "Zapraszamy <del>do odwiedzin</del><dfn> do zakupów </dfn>w naszym sklepie internetowym"
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 1072,
    "text": "1072. Którą wartość zwróci funkcja zlicz napisana w języku JavaScript, jeżeli zostanie wywołana w następujący sposób: zlicz(1, 5, 3, 10);?",
    "image": "e14/1072.jpg",
    "answers": [
      {
        "id": "A",
        "text": "1"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 1073,
    "text": "1073. W edytorze grafiki rastrowej funkcja \"dodaj kanał alfa\" umożliwia",
    "image": "./placeholder.png",
    "answers": [
      {
        "id": "A",
        "text": "zwiększenie głębi ostrości obrazu"
      },
      {
        "id": "B",
        "text": "określenie poprawnego balansu bieli"
      },
      {
        "id": "C",
        "text": "wyostrzenie krawędzi obrazu"
      },
      {
        "id": "D",
        "text": "dodanie warstwy z przezroczystością"
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 1074,
    "text": "1074. Wskaż instrukcję, która została opisana w ramce",
    "image": "e14/1074.jpg",
    "answers": [
      {
        "id": "A",
        "text": "for"
      },
      {
        "id": "B",
        "text": "foreach"
      },
      {
        "id": "C",
        "text": "next"
      },
      {
        "id": "D",
        "text": "while"
      }
    ],
    "correctAnswer": "B"
  }
]