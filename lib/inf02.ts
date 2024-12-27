
"use client";
import { Question } from '../types/quiz';

export const allQuizData: Question[] = [
  {
    "id": 1,
    "text": '1. Układy sekwencyjne zbudowane z zespołu przerzutników, najczęściej synchronicznych typu D, służące do\nprzechowywania danych, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'bramki'}, {'id': 'B', 'text': 'kodery'}, {'id': 'C', 'text': 'rejestry'}, {'id': 'D', 'text': 'dekodery'}],
    "correctAnswer": 'C'
  },
  {
    "id": 2,
    "text": '2. Transformator impulsowy w przedstawionym zasilaczu oznaczono symbolem',
    "image": 'ee08/2.jpg',
    "answers": [{'id': 'A', 'text': 'A'}, {'id': 'B', 'text': 'B'}, {'id': 'C', 'text': 'C'}, {'id': 'D', 'text': 'D'}],
    "correctAnswer": 'A'
  },
  {
    "id": 3,
    "text": '3. Na przedstawionej płycie głównej możliwy jest montaż procesora z obudową typu',
    "image": 'ee08/3.jpg',
    "answers": [{'id': 'A', 'text': 'LGA'}, {'id': 'B', 'text': 'PGA'}, {'id': 'C', 'text': 'SECC'}, {'id': 'D', 'text': 'SPGA'}],
    "correctAnswer": 'A'
  },
  {
    "id": 4,
    "text": '4. Kompatybilne podzespoły oznaczono w tabeli numerami',
    "image": 'ee08/4.jpg',
    "answers": [{'id': 'A', 'text': '1, 3, 5'}, {'id': 'B', 'text': '1, 4, 6'}, {'id': 'C', 'text': '2, 4, 5'}, {'id': 'D', 'text': '2, 4, 6'}],
    "correctAnswer": 'C'
  },
  {
    "id": 5,
    "text": '5. Przed rozpoczęciem modernizacji komputerów osobistych oraz serwerów, polegającej na dołożeniu nowych\nmodułów pamięci RAM, należy sprawdzić',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'model pamięci RAM, maksymalną pojemność i liczbę modułów obsługiwaną przez płytę\ngłówną.'}, {'id': 'B', 'text': 'pojemność i rodzaj interfejsu dysku twardego oraz rodzaj gniazda zainstalowanej pamięci\nRAM.'}, {'id': 'C', 'text': 'producenta pamięci RAM oraz interfejsy zewnętrzne zainstalowanej płyty głównej.'}, {'id': 'D', 'text': 'gniazdo interfejsu karty graficznej oraz moc zainstalowanego zasilacza.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 6,
    "text": '6. Do aktualizacji systemów Linux można wykorzystać programy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'cron i mount'}, {'id': 'B', 'text': 'defrag i YaST'}, {'id': 'C', 'text': 'apt-get i zipper'}, {'id': 'D', 'text': 'aptitude i amaro'}],
    "correctAnswer": 'C'
  },
  {
    "id": 7,
    "text": '7. Aby umożliwić komunikację urządzenia mobilnego z komputerem przez interfejs Bluetooth, należy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'skonfigurować urządzenie mobilne przez przeglądarkę.'}, {'id': 'B', 'text': 'połączyć urządzenia kablem krosowym.'}, {'id': 'C', 'text': 'utworzyć sieć WAN dla urządzeń.'}, {'id': 'D', 'text': 'wykonać parowanie urządzeń.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 8,
    "text": '8. Która licencja ma charakter grupowy oraz umożliwia instytucjom komercyjnym lub organizacjom\nedukacyjnym, państwowym, charytatywnym zakup na korzystnych warunkach większej liczby\noprogramowania firmy Microsoft?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'MPL'}, {'id': 'B', 'text': 'OEM'}, {'id': 'C', 'text': 'APSL'}, {'id': 'D', 'text': 'MOLP'}],
    "correctAnswer": 'D'
  },
  {
    "id": 9,
    "text": '9. Topologia fizyczna sieci, w której jako medium transmisyjne stosuje się fale radiowe, jest nazywana\ntopologią',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ad-hoc'}, {'id': 'B', 'text': 'magistrali'}, {'id': 'C', 'text': 'pierścienia'}, {'id': 'D', 'text': 'CSMA/CD'}],
    "correctAnswer": 'A'
  },
  {
    "id": 10,
    "text": '10. Który ze standardów Gigabit Ethernet umożliwia budowę segmentów sieci o długości 550 m/5000 m\nz prędkością transmisji 1 Gb/s?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '1000Base-T'}, {'id': 'B', 'text': '1000Base-FX'}, {'id': 'C', 'text': '1000Base-LX'}, {'id': 'D', 'text': '1000Base-SX'}],
    "correctAnswer": 'C'
  },
  {
    "id": 11,
    "text": '11. Protokołem kontrolnym rodziny TCP/IP, którego rolą jest między innymi wykrywanie awarii urządzeń\nsieciowych, jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'FDDI'}, {'id': 'B', 'text': 'ICMP'}, {'id': 'C', 'text': 'IMAP'}, {'id': 'D', 'text': 'SMTP'}],
    "correctAnswer": 'B'
  },
  {
    "id": 12,
    "text": '12. Aby można było wykorzystać aparat telefoniczny PSTN do wykonywania połączeń za pomocą sieci\nkomputerowej, należy go podłączyć do',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'modemu analogowego'}, {'id': 'B', 'text': 'mostka sieciowego'}, {'id': 'C', 'text': 'repetera sygnału'}, {'id': 'D', 'text': 'bramki VoIP'}],
    "correctAnswer": 'D'
  },
  {
    "id": 13,
    "text": '13. Wskaż narzędzie służące do mocowania pojedynczych żył kabla miedzianego w złączach.',
    "image": 'ee08/13.jpg',
    "answers": [{'id': 'A', 'text': 'A'}, {'id': 'B', 'text': 'B'}, {'id': 'C', 'text': 'C'}, {'id': 'D', 'text': 'D'}],
    "correctAnswer": 'B'
  },
  {
    "id": 14,
    "text": '14. Za pomocą programu Acrylic Wi-Fi Home wykonano test, którego wyniki przedstawiono na zrzucie. Na ich\npodstawie można stwierdzić, że dostępna sieć bezprzewodowa',
    "image": 'ee08/14.jpg',
    "answers": [{'id': 'A', 'text': 'jest nieszyfrowana.'}, {'id': 'B', 'text': 'korzysta z kanałów 10 ÷ 12.'}, {'id': 'C', 'text': 'ma bardzo dobrą jakość sygnału.'}, {'id': 'D', 'text': 'osiąga maksymalną szybkość transferu 72 Mbps.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 15,
    "text": '15. Który adres IP należy do klasy A?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '239.0.255.15'}, {'id': 'B', 'text': '217.12.45.1'}, {'id': 'C', 'text': '129.10.0.17'}, {'id': 'D', 'text': '125.11.0.7'}],
    "correctAnswer": 'D'
  },
  {
    "id": 16,
    "text": '16. Wskaż adres rozgłoszeniowy sieci, do której należy host o adresie 88.89.90.91/6?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '91.255.255.255'}, {'id': 'B', 'text': '88.255.255.255'}, {'id': 'C', 'text': '91.89.255.255'}, {'id': 'D', 'text': '88.89.255.255'}],
    "correctAnswer": 'A'
  },
  {
    "id": 17,
    "text": '17. Aby w systemie Windows wykonać śledzenie trasy pakietów do serwera strony internetowej, należy\nwykorzystać polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ping'}, {'id': 'B', 'text': 'tracert'}, {'id': 'C', 'text': 'netstat'}, {'id': 'D', 'text': 'iproute'}],
    "correctAnswer": 'B'
  },
  {
    "id": 18,
    "text": '18. Na schemacie obrazującym zasadę działania monitora plazmowego numerem 6 oznaczono',
    "image": 'ee08/18.jpg',
    "answers": [{'id': 'A', 'text': 'warstwę fosforową.'}, {'id': 'B', 'text': 'warstwę dielektryka.'}, {'id': 'C', 'text': 'elektrody adresujące.'}, {'id': 'D', 'text': 'elektrody wyświetlacza.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 19,
    "text": '19. Na ilustracji zaznaczono strzałkami funkcję przycisków znajdujących się na obudowie projektora\nmultimedialnego. Za pomocą tych przycisków można',
    "image": 'ee08/19.jpg',
    "answers": [{'id': 'A', 'text': 'przełączać sygnały wejściowe'}, {'id': 'B', 'text': 'regulować zniekształcony obraz.'}, {'id': 'C', 'text': 'zmieniać poziom jasności obrazu.'}, {'id': 'D', 'text': 'regulować odwzorowanie przestrzeni kolorów'}],
    "correctAnswer": 'B'
  },
  {
    "id": 20,
    "text": '20. Pierwszą czynnością niezbędną do zabezpieczenia rutera przed dostępem do jego panelu konfiguracyjnego\nprzez osoby niepowołane jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'włączenie filtrowania adresów MAC.'}, {'id': 'B', 'text': 'włączenie szyfrowania kluczem WEP'}, {'id': 'C', 'text': 'zmiana domyślnej nazwy sieci (SSID) na unikatową'}, {'id': 'D', 'text': 'zmiana nazwy login i hasła wbudowanego konta administratora.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 21,
    "text": '21. Aby wyczyścić z kurzu wnętrze obudowy drukarki fotograficznej, należy użyć',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'sprężonego powietrza w pojemniku z wydłużoną rurką.'}, {'id': 'B', 'text': 'szczotki z twardym włosiem'}, {'id': 'C', 'text': 'opaski antystatycznej.'}, {'id': 'D', 'text': 'środka smarującego.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 22,
    "text": '22. Na podstawie zrzutu ekranu przedstawiającego konfigurację przełącznika można stwierdzić, że',
    "image": 'ee08/22.jpg',
    "answers": [{'id': 'A', 'text': 'czas między wysyłaniem kolejnych komunikatów o poprawnej pracy urządzenia wynosi\n3 sekundy.'}, {'id': 'B', 'text': 'maksymalny czas krążenia w sieci komunikatów protokołu BPDU wynosi 20 sekund.'}, {'id': 'C', 'text': 'minimalny czas krążenia w sieci komunikatów protokołu BPDU wynosi 25 sekund.'}, {'id': 'D', 'text': 'maksymalny czas pomiędzy zmianami statusu łącza wynosi 5 sekund.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 23,
    "text": '23. Przedstawione polecenia, uruchomione w interfejsie CLI rutera firmy CISCO, spowodują',
    "image": 'ee08/23.jpg',
    "answers": [{'id': 'A', 'text': 'dopuszczenie ruchu pochodzącego z sieci o adresie 10.0.0.1'}, {'id': 'B', 'text': 'określenie puli adresów wewnętrznych 10.0.0.1 ÷ 255.255.255.0'}, {'id': 'C', 'text': 'ustawienie interfejsu zewnętrznego o adresie 10.0.0.1/24 dla technologii NAT'}, {'id': 'D', 'text': 'ustawienie interfejsu wewnętrznego o adresie 10.0.0.1/24 dla technologii NAT'}],
    "correctAnswer": 'D'
  },
  {
    "id": 24,
    "text": '24. Schemat przedstawia zasadę działania sieci VPN o nazwie',
    "image": 'ee08/24.jpg',
    "answers": [{'id': 'A', 'text': 'Client - to -Site'}, {'id': 'B', 'text': 'Site - to - Site'}, {'id': 'C', 'text': 'Gateway'}, {'id': 'D', 'text': 'L2TP'}],
    "correctAnswer": 'B'
  },
  {
    "id": 25,
    "text": '25. Przedstawione narzędzie może być wykorzystane do',
    "image": 'ee08/25.jpg',
    "answers": [{'id': 'A', 'text': 'podgrzania i zamontowania elementu elektronicznego.'}, {'id': 'B', 'text': 'sprawdzenia długości badanego kabla sieciowego.'}, {'id': 'C', 'text': 'pomiaru wartości napięcia w zasilaczu'}, {'id': 'D', 'text': 'utrzymania drukarki w czystości.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 26,
    "text": '26. Wskaż program systemu Linux, służący do kompresji danych.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'arj'}, {'id': 'B', 'text': 'tar'}, {'id': 'C', 'text': 'gzip'}, {'id': 'D', 'text': 'shar'}],
    "correctAnswer": 'C'
  },
  {
    "id": 27,
    "text": '27. Wskaż sygnał oznaczający błąd karty graficznej komputera wyposażonego w BIOS POST firmy AWARD.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '1 długi, 1 krótki.'}, {'id': 'B', 'text': '1 długi, 2 krótkie.'}, {'id': 'C', 'text': '1 długi, 5 krótkich.'}, {'id': 'D', 'text': '1 długi, 9 krótkich.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 28,
    "text": '28. Po sprawdzeniu komputera programem diagnostycznym wykryto, że temperatura pracy karty graficznej\nposiadającej wyjścia HDMI i D-SUB, osadzonej w gnieździe PCI Express komputera stacjonarnego, wynosi\n87°C. W takim przypadku serwisant powinien',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zamienić kabel sygnałowy D-SUB na HDMI.'}, {'id': 'B', 'text': 'sprawdzić, czy wentylator jest sprawny i czy nie jest zakurzony.'}, {'id': 'C', 'text': 'zainstalować dodatkowy moduł pamięci RAM, aby odciążyć kartę.'}, {'id': 'D', 'text': 'wymienić dysk twardy na nowy, o podobnej wielkości i prędkości obrotowej.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 29,
    "text": '29. SuperPi to program wykorzystywany do sprawdzenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wydajności dysków twardych.'}, {'id': 'B', 'text': 'obciążenia i wydajności kart graficznych.'}, {'id': 'C', 'text': 'ilości niewykorzystanej pamięci operacyjnej RAM.'}, {'id': 'D', 'text': 'wydajności procesorów o zwiększonej częstotliwości.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 30,
    "text": '30. Odzyskanie listy kontaktów w telefonie komórkowym z zainstalowanym systemem Android jest możliwe,\ngdy użytkownik wcześniej wykonał synchronizację danych urządzenia z Google Drive za pomocą',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'konta Yahoo'}, {'id': 'B', 'text': 'konta Google'}, {'id': 'C', 'text': 'konta Microsoft'}, {'id': 'D', 'text': 'dowolnego konta pocztowego z portalu Onet'}],
    "correctAnswer": 'B'
  },
  {
    "id": 31,
    "text": '31. Aby wyeliminować podstawowe zagrożenia związane z bezpieczeństwem pracy na komputerze podłączonym\ndo sieci Internet, w pierwszej kolejności należy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'odsunąć komputer od źródła ciepła, nie przygniatać przewodów zasilających komputera\ni urządzeń peryferyjnych.'}, {'id': 'B', 'text': 'zainstalować program antywirusowy, zaktualizować bazy wirusów, włączyć firewall\ni wykonać aktualizację systemu.'}, {'id': 'C', 'text': 'wyczyścić wnętrze jednostki centralnej, nie jeść i nie pić przy komputerze oraz nie podawać\nswojego hasła innym użytkownikom'}, {'id': 'D', 'text': 'sprawdzić temperaturę podzespołów, podłączyć komputer do zasilacza UPS oraz nie wchodzić\nna podejrzane strony internetowe.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 32,
    "text": '32. Serwisant wykonał w ramach zlecenia czynności wymienione w tabeli. Koszt zlecenia obejmuje cenę usług\nzawartych w tabeli oraz koszt pracy serwisanta, którego stawka godzinowa wynosi 60,00 zł netto. Ustal\ncałkowity koszt zlecenia brutto. Stawka podatku VAT na usługi wynosi 23%.',
    "image": 'ee08/32.jpg',
    "answers": [{'id': 'A', 'text': '492,00 zł'}, {'id': 'B', 'text': '455,20 zł'}, {'id': 'C', 'text': '436,80 zł'}, {'id': 'D', 'text': '400,00 zł'}],
    "correctAnswer": 'A'
  },
  {
    "id": 33,
    "text": '33. Aby w systemie Windows zmienić parametry konfiguracyjne Menu Start i paska zadań należy wykorzystać\nprzystawkę',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dcpol.msc'}, {'id': 'B', 'text': 'azman.msc'}, {'id': 'C', 'text': 'gpedit.msc'}, {'id': 'D', 'text': 'fsmgmt.msc'}],
    "correctAnswer": 'C'
  },
  {
    "id": 34,
    "text": '34. Konfigurację interfejsu sieciowego w systemie Linux można wykonać, edytując plik',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '/ etc / hosts'}, {'id': 'B', 'text': '/ etc / host.conf'}, {'id': 'C', 'text': '/ etc / resolv.conf'}, {'id': 'D', 'text': '/ etc / network / interfaces'}],
    "correctAnswer": 'D'
  },
  {
    "id": 35,
    "text": '35. W systemie Linux polecenie touch służy do',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'utworzenia pliku lub zmiany daty modyfikacji lub daty ostatniego dostępu.'}, {'id': 'B', 'text': 'obliczenia liczby wierszy, słów i znaków w pliku.'}, {'id': 'C', 'text': 'wyszukania podanego wzorca w tekście pliku.'}, {'id': 'D', 'text': 'przeniesienia lub zmiany nazwy pliku.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 36,
    "text": '36. Aby w systemie Windows Server wykonać rezerwację adresów IP na podstawie adresów fizycznych MAC\nurządzeń, należy skonfigurować usługę',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'DNS'}, {'id': 'B', 'text': 'NAT'}, {'id': 'C', 'text': 'RRAS'}, {'id': 'D', 'text': 'DHCP'}],
    "correctAnswer": 'D'
  },
  {
    "id": 37,
    "text": '37. Po wydaniu przedstawionego polecenia systemu Windows, wartość 11 zostanie ustawiona dla',
    "image": 'ee08/37.jpg',
    "answers": [{'id': 'A', 'text': 'maksymalnej liczby dni ważności konta.'}, {'id': 'B', 'text': 'minimalnej liczby znaków w hasłach użytkowników.'}, {'id': 'C', 'text': 'maksymalnej liczby dni między zmianami haseł użytkowników.'}, {'id': 'D', 'text': 'minimalnej liczby minut, przez które użytkownik może być zalogowany.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 38,
    "text": '38. Protokół RDP jest wykorzystywany w usłudze',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'SCP w systemie Windows.'}, {'id': 'B', 'text': 'terminalowej w systemie Linux.'}, {'id': 'C', 'text': 'pulpitu zdalnego w systemie Windows.'}, {'id': 'D', 'text': 'poczty elektronicznej w systemie Linux'}],
    "correctAnswer": 'C'
  },
  {
    "id": 39,
    "text": '39. Narzędziem systemu Windows służącym do sprawdzenia prób logowania do systemu jest dziennik',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Setup'}, {'id': 'B', 'text': 'System'}, {'id': 'C', 'text': 'aplikacji'}, {'id': 'D', 'text': 'zabezpieczeń'}],
    "correctAnswer": 'D'
  },
  {
    "id": 40,
    "text": '40. Program fsck jest wykorzystywany w systemie Linux do',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wykrycia struktury sieci i diagnostyki przepustowości sieci lokalnej.'}, {'id': 'B', 'text': 'monitorowania parametrów pracy i wydajności podzespołów komputera.'}, {'id': 'C', 'text': 'dokonania oceny stanu systemu plików i wykrycia uszkodzonych sektorów.'}, {'id': 'D', 'text': 'przeprowadzenia testów wydajnościowych serwera WWW poprzez wysłanie dużej liczby\nżądań.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 41,
    "text": '41. Który zapis w systemie binarnym odpowiada liczbie 91 zapisanej w systemie szesnastkowym?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '10010001'}, {'id': 'B', 'text': '10001001'}, {'id': 'C', 'text': '10001011'}, {'id': 'D', 'text': '10011001'}],
    "correctAnswer": 'A'
  },
  {
    "id": 42,
    "text": '42. Którą bramkę logiczną opisuje wyrażenie',
    "image": 'ee08/42.jpg',
    "answers": [{'id': 'A', 'text': 'A'}, {'id': 'B', 'text': 'B'}, {'id': 'C', 'text': 'C'}, {'id': 'D', 'text': 'D'}],
    "correctAnswer": 'B'
  },
  {
    "id": 43,
    "text": '43. Na rysunku przedstawiona jest karta',
    "image": 'ee08/43.jpg',
    "answers": [{'id': 'A', 'text': 'kontrolera RAID'}, {'id': 'B', 'text': 'kontrolera SCSII'}, {'id': 'C', 'text': 'sieciowa Token Ring'}, {'id': 'D', 'text': 'sieciowa Fibre Channel'}],
    "correctAnswer": 'D'
  },
  {
    "id": 44,
    "text": '44. Na rysunku przedstawiono schemat blokowy karty',
    "image": 'ee08/44.jpg',
    "answers": [{'id': 'A', 'text': 'sieciowej.'}, {'id': 'B', 'text': 'graficznej.'}, {'id': 'C', 'text': 'dźwiękowej.'}, {'id': 'D', 'text': 'telewizyjnej.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 45,
    "text": '45. Na rysunku przedstawiono fragment dokumentacji technicznej płyty głównej GA-K8NF-9-RH rev. 2.x.\nWynika z niej, że maksymalna liczba możliwych do zamontowania kart rozszerzeń (pomijając interfejs USB)\nwynosi',
    "image": 'ee08/45.jpg',
    "answers": [{'id': 'A', 'text': '6'}, {'id': 'B', 'text': '5'}, {'id': 'C', 'text': '3'}, {'id': 'D', 'text': '2'}],
    "correctAnswer": 'A'
  },
  {
    "id": 46,
    "text": '46. Na rysunku przedstawiono tylny panel stacji roboczej. Strzałką oznaczono port',
    "image": 'ee08/46.jpg',
    "answers": [{'id': 'A', 'text': 'HDMI'}, {'id': 'B', 'text': 'eSATA'}, {'id': 'C', 'text': 'USB 3.0'}, {'id': 'D', 'text': 'DisplayPort'}],
    "correctAnswer": 'D'
  },
  {
    "id": 47,
    "text": '47. Na rysunku przedstawiono komunikat systemowy. Jakie działanie powinien wykonać użytkownik, aby\nusunąć błąd?',
    "image": 'ee08/47.jpg',
    "answers": [{'id': 'A', 'text': 'Podłączyć monitor do złącza HDMI.'}, {'id': 'B', 'text': 'Odświeżyć okno Menedżer urządzeń.'}, {'id': 'C', 'text': 'Zainstalować sterownik do karty graficznej.'}, {'id': 'D', 'text': 'Zainstalować sterownik do Karty HD Graphics.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 48,
    "text": '48. Shareware to rodzaj licencji polegającej na',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'używaniu programu bezpłatnie, bez żadnych ograniczeń.'}, {'id': 'B', 'text': 'bezpłatnym rozprowadzaniu aplikacji bez ujawniania kodu źródłowego.'}, {'id': 'C', 'text': 'bezpłatnym rozpowszechnianiu programu na czas testów przed zakupem.'}, {'id': 'D', 'text': 'korzystaniu z programu przez określony czas, po którym program przestaje działać.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 49,
    "text": '49. Ataki na systemy komputerowe polegające na podstępnym wyłudzaniu od użytkownika jego osobistych\ndanych, przy wykorzystaniu zazwyczaj formy fałszywych powiadomień z instytucji czy od dostawców\nsystemów e-płatności i innych ogólnie znanych organizacji, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'DDoS'}, {'id': 'B', 'text': 'phishing'}, {'id': 'C', 'text': 'brute force'}, {'id': 'D', 'text': 'SYN flooding'}],
    "correctAnswer": 'B'
  },
  {
    "id": 50,
    "text": '50. Który z symboli oznacza zastrzeżenie praw autorskich?',
    "image": 'ee08/50.jpg',
    "answers": [{'id': 'A', 'text': 'A'}, {'id': 'B', 'text': 'B'}, {'id': 'C', 'text': 'C'}, {'id': 'D', 'text': 'D'}],
    "correctAnswer": 'A'
  },
  {
    "id": 51,
    "text": '51. Który typ fizycznej topologii sieci komputerowej przedstawiono na rysunku?',
    "image": 'ee08/51.jpg',
    "answers": [{'id': 'A', 'text': 'Siatki.'}, {'id': 'B', 'text': 'Gwiazdy.'}, {'id': 'C', 'text': 'Magistrali.'}, {'id': 'D', 'text': 'Podwójnego pierścienia.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 52,
    "text": '52. Ile domen kolizyjnych i rozgłoszeniowych jest widocznych na schemacie?',
    "image": 'ee08/52.jpg',
    "answers": [{'id': 'A', 'text': '9 domen kolizyjnych i 1 domena\nrozgłoszeniowa'}, {'id': 'B', 'text': '9 domen kolizyjnych i 4 domeny\nrozgłoszeniowe.'}, {'id': 'C', 'text': '1 domena kolizyjna i 9 domen\nrozgłoszeniowych.'}, {'id': 'D', 'text': '4 domeny kolizyjne i 9 domen\nrozgłoszeniowych.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 53,
    "text": '53. Zasady budowy systemu okablowania strukturalnego, specyfikacja parametrów kabli oraz procedury\ntestowania obowiązujące w Polsce zostały zawarte w normach',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'EN 50167'}, {'id': 'B', 'text': 'EN 50169'}, {'id': 'C', 'text': 'PN-EN 50173'}, {'id': 'D', 'text': 'PN-EN 50310'}],
    "correctAnswer": 'C'
  },
  {
    "id": 54,
    "text": '54. Który adres IPv6 jest prawidłowy?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '1234:9ABC::123::DEF4'}, {'id': 'B', 'text': '1234:9ABC::123:DEF4'}, {'id': 'C', 'text': '1234-9ABC-123-DEF4'}, {'id': 'D', 'text': '1234.9ABC.123.DEF4'}],
    "correctAnswer": 'B'
  },
  {
    "id": 55,
    "text": '55. Który z protokołów w systemach operacyjnych Linux wykorzystywany jest w sieciach LAN?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IP'}, {'id': 'B', 'text': 'IPX'}, {'id': 'C', 'text': 'NetBEUI'}, {'id': 'D', 'text': 'AppleTalk'}],
    "correctAnswer": 'A'
  },
  {
    "id": 56,
    "text": '56. Przedstawione na rysunku urządzenie',
    "image": 'ee08/56.jpg',
    "answers": [{'id': 'A', 'text': 'służy do przechwytywania i nagrywania pakietów danych w sieciach komputerowych.'}, {'id': 'B', 'text': 'odpowiada za przekazywanie ramki między segmentami sieci z doborem portu, na który jest\nprzekazywana.'}, {'id': 'C', 'text': 'umożliwia zamianę sygnału pochodzącego z okablowania miedzianego na okablowanie\nświatłowodowe.'}, {'id': 'D', 'text': 'odpowiada za wytworzenie na wyjściu sygnału analogowego, będącego wzmocnionym\nsygnałem wejściowym, kosztem zużycia energii pobieranej ze źródła prądu.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 57,
    "text": '57. Które urządzenie zastosowane w sieci komputerowej nie zmienia liczby domen kolizyjnych?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Ruter.'}, {'id': 'B', 'text': 'Serwer.'}, {'id': 'C', 'text': 'Przełącznik.'}, {'id': 'D', 'text': 'Koncetrator.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 58,
    "text": '58. Na rysunku przedstawiono zakończenie kabla',
    "image": 'ee08/58.jpg',
    "answers": [{'id': 'A', 'text': 'typu skrętka.'}, {'id': 'B', 'text': 'telefonicznego.'}, {'id': 'C', 'text': 'koncentrycznego.'}, {'id': 'D', 'text': 'światłowodowego.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 59,
    "text": '59. Przedstawione na rysunku urządzenie wraz ze specyfikacją techniczną można wykorzystać do pomiarów\nokablowania',
    "image": 'ee08/59.jpg',
    "answers": [{'id': 'A', 'text': 'telefonicznego.'}, {'id': 'B', 'text': 'skrętki cat. 5e / 6.'}, {'id': 'C', 'text': 'koncentrycznego.'}, {'id': 'D', 'text': 'światłowodowego.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 60,
    "text": '60. Który tryb pracy Access Pointa jest stosowany dla zapewnienia urządzeniom bezprzewodowym dostępu do\nprzewodowej sieci LAN?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Most bezprzewodowy.'}, {'id': 'B', 'text': 'Punkt dostępowy.'}, {'id': 'C', 'text': 'Tryb klienta.'}, {'id': 'D', 'text': 'Repeater.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 61,
    "text": '61. Jeżeli adres IP stacji roboczej ma postać 176.16.50.10/26 to adres rozgłoszeniowy oraz maksymalna liczba\nhostów w sieci wynoszą odpowiednio',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '176.16.50.1; 26 hostów.'}, {'id': 'B', 'text': '176.16.50.36; 6 hostów.'}, {'id': 'C', 'text': '176.16.50.63; 62 hosty.'}, {'id': 'D', 'text': '176.16.50.62; 63 hosty.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 62,
    "text": '62. Sieć, w której pracuje stacja robocza o adresie IP 192.168.100.50/28, podzielono na 4 podsieci. Prawidłowa\nlista podsieci to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '192.168.100.48/30; 192.168.100.52/30; 192.168.100.56/30; 192.168.100.60/30'}, {'id': 'B', 'text': '192.168.100.48/29; 192.168.100.54/29; 192.168.100.56/29; 192.168.100.58/29'}, {'id': 'C', 'text': '192.168.100.50/28; 192.168.100.52/28; 192.168.100.56/28; 192.168.100.60/28'}, {'id': 'D', 'text': '192.168.100.48/27; 192.168.100.52/27; 192.168.100.56/27; 192.168.100.58/27'}],
    "correctAnswer": 'A'
  },
  {
    "id": 63,
    "text": '63. Na rysunku przedstawiono wynik testu okablowania. Zinterpretuj wynik pomiaru.',
    "image": 'ee08/63.jpg',
    "answers": [{'id': 'A', 'text': 'Błąd zwarcia.'}, {'id': 'B', 'text': 'Błąd rozwarcia.'}, {'id': 'C', 'text': 'Odwrócenie pary.'}, {'id': 'D', 'text': 'Rozdzielenie pary.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 64,
    "text": '64. Na rysunku przedstawiono fragment wyniku działania programu do testowania sieci. Wskazuje to na\nzastosowanie sieciowego polecenia testującego',
    "image": 'ee08/64.jpg',
    "answers": [{'id': 'A', 'text': 'arp'}, {'id': 'B', 'text': 'route'}, {'id': 'C', 'text': 'tracert'}, {'id': 'D', 'text': 'netstat'}],
    "correctAnswer": 'D'
  },
  {
    "id": 65,
    "text": '65. Które z protokołów przekazują okresowe kopie tablic rutingu do sąsiedniego rutera i nie mają pełnej\ninformacji o odległych ruterach?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'RIP, IGRP'}, {'id': 'B', 'text': 'EGP, BGP'}, {'id': 'C', 'text': 'OSPF, RIP'}, {'id': 'D', 'text': 'EIGPR, OSPF'}],
    "correctAnswer": 'D'
  },
  {
    "id": 66,
    "text": '66. Rozdzielczość optyczna to jeden z parametrów',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'skanera.'}, {'id': 'B', 'text': 'drukarki.'}, {'id': 'C', 'text': 'modemu.'}, {'id': 'D', 'text': 'monitora.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 67,
    "text": '67. Na rysunku przedstawiono interfejs w komputerze przeznaczony do podłączenia',
    "image": 'ee08/67.jpg',
    "answers": [{'id': 'A', 'text': 'monitora LCD.'}, {'id': 'B', 'text': 'plotera tnącego.'}, {'id': 'C', 'text': 'drukarki laserowej.'}, {'id': 'D', 'text': 'skanera lustrzanego.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 68,
    "text": '68. Które oprogramowanie należy zainstalować, aby umożliwić zeskanowanie tekstu z wydrukowanego\ndokumentu do edytora tekstu?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Program ERP'}, {'id': 'B', 'text': 'Program CAD'}, {'id': 'C', 'text': 'Program OCR'}, {'id': 'D', 'text': 'Program COM +'}],
    "correctAnswer": 'C'
  },
  {
    "id": 69,
    "text": '69. Użytkownicy z grupy Pracownicy nie mogą drukować dokumentów przy użyciu serwera wydruku na\nsystemie operacyjnym Windows Server. Mają oni przydzielone uprawnienia tylko „Zarządzanie\ndokumentami”. Co należy zrobić, aby rozwiązać opisany problem?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Dla grupy Pracownicy należy nadać uprawnienia „Drukuj”'}, {'id': 'B', 'text': 'Dla grupy Administratorzy należy usunąć uprawnienia „Drukuj”'}, {'id': 'C', 'text': 'Dla grupy Pracownicy należy usunąć uprawnienia „Zarządzanie dokumentami”'}, {'id': 'D', 'text': 'Dla grupy Administratorzy należy usunąć uprawnienia „Zarządzanie dokumentami”'}],
    "correctAnswer": 'A'
  },
  {
    "id": 70,
    "text": '70. Na rysunku przedstawiającym budowę drukarki, w której nierównomiernie podawany jest toner na bęben,\nnależy wymienić wałek magnetyczny, który jest oznaczony numerem',
    "image": 'ee08/70.jpg',
    "answers": [{'id': 'A', 'text': '1'}, {'id': 'B', 'text': '2'}, {'id': 'C', 'text': '3'}, {'id': 'D', 'text': '4'}],
    "correctAnswer": 'B'
  },
  {
    "id": 71,
    "text": '71. Który protokół działa w warstwie aplikacji modelu ISO/OSI umożliwiając wymianę informacji kontrolnych\npomiędzy urządzeniami sieciowymi?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'DNS'}, {'id': 'B', 'text': 'POP3'}, {'id': 'C', 'text': 'SNMP'}, {'id': 'D', 'text': 'SMTP'}],
    "correctAnswer": 'C'
  },
  {
    "id": 72,
    "text": '72. Na rysunku przedstawiono konfigurację urządzenia. Do których portów należy podłączyć serwer o adresie IP\n192.168.20.254/24 oraz stację roboczą o adresie IP 192.168.20.10/24, aby zapewnić komunikację tych\nurządzeń w sieci?',
    "image": 'ee08/72.jpg',
    "answers": [{'id': 'A', 'text': 'Do portów 1 i 2'}, {'id': 'B', 'text': 'Do portów 2 i 3'}, {'id': 'C', 'text': 'Do portów 1 i 3'}, {'id': 'D', 'text': 'Do portów 3 i 4'}],
    "correctAnswer": 'C'
  },
  {
    "id": 73,
    "text": '73. Na rysunku przedstawiono konfigurację urządzenia, z której wynika, że',
    "image": 'ee08/73.jpg',
    "answers": [{'id': 'A', 'text': 'utworzono dwa nowe VLAN-y: ID13, ID48'}, {'id': 'B', 'text': 'do VLAN z ID48 przypisano wszystkie porty.'}, {'id': 'C', 'text': 'utworzono trzy nowe VLAN-y: ID1, ID13, ID48'}, {'id': 'D', 'text': 'VLAN z ID48 jest skonfigurowany jako zarządzalny.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 74,
    "text": '74. Na rysunku przedstawiono okno konfiguracyjne rutera. Ustawione parametry świadczą o tym, że',
    "image": 'ee08/74.jpg',
    "answers": [{'id': 'A', 'text': 'na komputerze o adresie MAC 44-8A-5B-5A-56-D0 ustawiono adres IP 192.168.17.30\nza pomocą Panelu Sterowania.'}, {'id': 'B', 'text': 'komputer o adresie MAC 44-8A-5B-5A-56-D0 i adresie IP 192.168.17.30 nie będzie mógł\npołączyć się z urządzeniami tej sieci.'}, {'id': 'C', 'text': 'komputer o adresie MAC 44-8A-5B-5A-56-D0 i adresie IP 192.168.17.30 został wykluczony\nz sieci.'}, {'id': 'D', 'text': 'komputerowi o adresie MAC 44-8A-5B-5A-56-D0 usługa DHCP rutera przydzieli adres\nIP 192.168.17.30'}],
    "correctAnswer": 'D'
  },
  {
    "id": 75,
    "text": '75. Który typ zabezpieczeń w sieci WiFi posiada najlepszy poziom zabezpieczeń?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'WEP'}, {'id': 'B', 'text': 'WPA'}, {'id': 'C', 'text': 'WPA2'}, {'id': 'D', 'text': 'NTFS'}],
    "correctAnswer": 'C'
  },
  {
    "id": 76,
    "text": '76. Jeżeli przy uruchamianiu komputera procedura POST zasygnalizuje błąd odczytu/zapisu pamięci CMOS, to\nnależy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'przywrócić ustawienia fabryczne BIOS Setup.'}, {'id': 'B', 'text': 'zaprogramować pamięć EEPROM płyty głównej.'}, {'id': 'C', 'text': 'wymienić baterię układu lub wymienić płytę główną.'}, {'id': 'D', 'text': 'wymontować moduł pamięci RAM, oczyścić styki modułu pamięci i zamontować pamięć\nponownie.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 77,
    "text": '77. Które polecenie powinien zastosować root w systemie Ubuntu Linux, aby zaktualizować wszystkie pakiety\n(cały system) do nowej wersji wraz z nowym jądrem?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'apt-get update'}, {'id': 'B', 'text': 'apt-get upgrade'}, {'id': 'C', 'text': 'apt-get dist-upgrade'}, {'id': 'D', 'text': 'apt-get install nazwa_pakietu'}],
    "correctAnswer": 'C'
  },
  {
    "id": 78,
    "text": '78. Które polecenie w systemie Linux nada uprawnienia do pisania dla wszystkich obiektów w /usr/share dla\nwszystkich użytkowników, nie zmieniając pozostałych uprawnień?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'chmod a-w /usr/share'}, {'id': 'B', 'text': 'chmod ugo+rw /usr/share'}, {'id': 'C', 'text': 'chmod -R a+w /usr/share'}, {'id': 'D', 'text': 'chmod -R o+r /usr/share'}],
    "correctAnswer": 'C'
  },
  {
    "id": 79,
    "text": '79. Udostępniono w sieci lokalnej jako udział specjalny folder o nazwie egzamin znajdujący się na komputerze\no nazwie SERWER_2 w katalogu głównym dysku C:\\. Jak powinna wyglądać ścieżka dostępu do katalogu\negzamin, w którym przechowywany jest folder macierzysty dla konta użytkownika o określonym loginie?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '\\\\SERWER_2\\$egzamin\\%USERNAME%'}, {'id': 'B', 'text': '\\\\SERWER_2\\$egzamin$\\%USERNAME%'}, {'id': 'C', 'text': '\\\\SERWER_2\\egzamin$\\%$USERNAME%'}, {'id': 'D', 'text': '\\\\SERWER_2\\egzamin$\\%USERNAME%'}],
    "correctAnswer": 'D'
  },
  {
    "id": 80,
    "text": '80. Aby profil stał się obowiązkowym, należy zmienić rozszerzenie pliku ntuser.dat na',
    "image": 'ee08/80.jpg',
    "answers": [{'id': 'A', 'text': 'ntuser.sys'}, {'id': 'B', 'text': 'ntuser.man'}, {'id': 'C', 'text': '$ntuser.bat'}, {'id': 'D', 'text': '$ntuser.exe'}],
    "correctAnswer": 'B'
  },
  {
    "id": 81,
    "text": '81. Przedstawiony na rysunku element elektroniczny to',
    "image": 'ee08/81.jpg',
    "answers": [{'id': 'A', 'text': 'cewka.'}, {'id': 'B', 'text': 'rezystor.'}, {'id': 'C', 'text': 'tranzystor.'}, {'id': 'D', 'text': 'kondensator.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 82,
    "text": '82. W dokumentacji technicznej efektywność głośnika podłączonego do komputera zapisuje się w jednostce',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'J'}, {'id': 'B', 'text': 'W'}, {'id': 'C', 'text': 'dB'}, {'id': 'D', 'text': 'kHz'}],
    "correctAnswer": 'C'
  },
  {
    "id": 83,
    "text": '83. Na urządzeniu zasilanym prądem stałym znajduje się przedstawione oznaczenie. Wynika z niego, że\nurządzenie pobiera moc około',
    "image": 'ee08/83.jpg',
    "answers": [{'id': 'A', 'text': '2,5 W'}, {'id': 'B', 'text': '7,5 W'}, {'id': 'C', 'text': '11,0 W'}, {'id': 'D', 'text': '18,75 W'}],
    "correctAnswer": 'D'
  },
  {
    "id": 84,
    "text": '84. Gniazdo LGA znajdujące się na płycie głównej komputera stacjonarnego umożliwia zainstalowanie\nprocesora',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Intel Core i5'}, {'id': 'B', 'text': 'Athlon 64 X2'}, {'id': 'C', 'text': 'AMD Sempron'}, {'id': 'D', 'text': 'Intel Pentium II Xeon'}],
    "correctAnswer": 'A'
  },
  {
    "id": 85,
    "text": '85. Aby serwer umożliwiał transmisję danych w pasmach częstotliwości 2,4 GHz oraz 5 GHz, należy\nzainstalować w nim kartę sieciową pracującą w standardzie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '802.11a'}, {'id': 'B', 'text': '802.11b'}, {'id': 'C', 'text': '802.11g'}, {'id': 'D', 'text': '802.11n'}],
    "correctAnswer": 'D'
  },
  {
    "id": 86,
    "text": '86. Do instalacji oraz deinstalacji oprogramowania w systemie Ubuntu służy menadżer',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ls'}, {'id': 'B', 'text': 'tar'}, {'id': 'C', 'text': 'apt'}, {'id': 'D', 'text': 'kast'}],
    "correctAnswer": 'C'
  },
  {
    "id": 87,
    "text": '87. Wydając w wierszu poleceń systemu Windows Server polecenie convert, można przeprowadzić',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'defragmentację dysku.'}, {'id': 'B', 'text': 'zmianę systemu plików.'}, {'id': 'C', 'text': 'naprawę systemu plików.'}, {'id': 'D', 'text': 'naprawę logicznej struktury dysku.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 88,
    "text": '88. Aby zaktualizować zmiany w konfiguracji systemu operacyjnego Windows wykonane za pomocą edytora\nzasad grup, można posłużyć się poleceniem',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'restore'}, {'id': 'B', 'text': 'dompol'}, {'id': 'C', 'text': 'services'}, {'id': 'D', 'text': 'gpupdate'}],
    "correctAnswer": 'D'
  },
  {
    "id": 89,
    "text": '89. Przedstawiona na rysunku topologia sieci to',
    "image": 'ee08/89.jpg',
    "answers": [{'id': 'A', 'text': 'bus'}, {'id': 'B', 'text': 'star'}, {'id': 'C', 'text': 'ring'}, {'id': 'D', 'text': 'mesh'}],
    "correctAnswer": 'D'
  },
  {
    "id": 90,
    "text": '90. Łącze światłowodowe wykorzystywane do transmisji danych w standardzie 10GBASE-SR może mieć\ndługość wynoszącą maksymalnie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '2 km'}, {'id': 'B', 'text': '4 km'}, {'id': 'C', 'text': '200 m'}, {'id': 'D', 'text': '400 m'}],
    "correctAnswer": 'D'
  },
  {
    "id": 91,
    "text": '91. Który protokół jest wykorzystywany do transmisji danych w warstwie transportowej modelu ISO/OSI?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ARP'}, {'id': 'B', 'text': 'TCP'}, {'id': 'C', 'text': 'HTTP'}, {'id': 'D', 'text': 'LDAP'}],
    "correctAnswer": 'B'
  },
  {
    "id": 92,
    "text": '92. Pomiar tłumienia w kablowym torze transmisyjnym pozwala określić',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'czas opóźnienia propagacji.'}, {'id': 'B', 'text': 'błędy instalacyjne typu zamiana pary.'}, {'id': 'C', 'text': 'różnice miedzy przesłuchami zdalnymi.'}, {'id': 'D', 'text': 'spadek mocy sygnału w danej parze przewodu.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 93,
    "text": '93. Odpowiednikiem adresu pętli zwrotnej jest w IPv6 adres',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '0:0/32'}, {'id': 'B', 'text': '::fff/64'}, {'id': 'C', 'text': '::1/128'}, {'id': 'D', 'text': ':1:1:1/96'}],
    "correctAnswer": 'C'
  },
  {
    "id": 94,
    "text": '94. Który zapis adresu IPv4 wraz z maską jest błędny?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '16.1.1.1/5'}, {'id': 'B', 'text': '100.0.0.0/8'}, {'id': 'C', 'text': '18.4.0.0, maska 255.0.0.0'}, {'id': 'D', 'text': '192.168.0.1, maska 255.250.255.0'}],
    "correctAnswer": 'D'
  },
  {
    "id": 95,
    "text": '95. Dana jest sieć o adresie 172.16.0.0/16. Które z adresów sieci 172.16.0.0/16 są prawidłowe, jeśli zostaną\nwydzielone cztery podsieci o masce 18 bitowej?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '172.16.0.0, 172.16.64.0, 172.16.128.0, 172.16.192.0'}, {'id': 'B', 'text': '172.16.0.0, 172.16.0.64, 172.16.0.128, 172.16.0.192'}, {'id': 'C', 'text': '172.16.64.0, 172.16.0.128, 172.16.192.0, 172.16.0.255'}, {'id': 'D', 'text': '172.16.64.0, 172.16.64.64, 172.16.64.128, 172.16.64.192'}],
    "correctAnswer": 'A'
  },
  {
    "id": 96,
    "text": '96. Administrator sieci LAN zauważył przejście w tryb awaryjny urządzenia typu UPS. Świadczy to o awarii\nsystemu',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zasilania.'}, {'id': 'B', 'text': 'okablowania.'}, {'id': 'C', 'text': 'urządzeń aktywnych.'}, {'id': 'D', 'text': 'chłodzenia i wentylacji.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 97,
    "text": '97. Szerokopasmowy dostęp do Internetu przy różnej prędkości pobierania i wysyłania danych zapewnia\ntechnologia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'MSK'}, {'id': 'B', 'text': 'ISDN'}, {'id': 'C', 'text': 'QAM'}, {'id': 'D', 'text': 'ADSL'}],
    "correctAnswer": 'D'
  },
  {
    "id": 98,
    "text": '98. Wewnętrzny protokół trasowania, którego metryką jest wektor odległości, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'RIP'}, {'id': 'B', 'text': 'EGP'}, {'id': 'C', 'text': 'IS-IS'}, {'id': 'D', 'text': 'OSPF'}],
    "correctAnswer": 'A'
  },
  {
    "id": 99,
    "text": '99. Jaką nazwę nosi indentyfikator, który musi być identyczny, by urządzenia sieciowe mogły pracować w danej\nsieci bezprzewodowej?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IP'}, {'id': 'B', 'text': 'URL'}, {'id': 'C', 'text': 'SSID'}, {'id': 'D', 'text': 'MAC'}],
    "correctAnswer": 'C'
  },
  {
    "id": 100,
    "text": '100. Materiałem eksploatacyjnym plotera solwentowego jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'głowica tnąca.'}, {'id': 'B', 'text': 'atrament żelowy.'}, {'id': 'C', 'text': 'zestaw metalowych rylców.'}, {'id': 'D', 'text': 'farba na bazie rozpuszczalników.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 101,
    "text": '101. Za pomocą polecenia ipconfig /flushdns można wykonać konserwację urządzenia sieciowego\npolegającą na',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'odnowieniu dzierżawy adresu IP.'}, {'id': 'B', 'text': 'zwolnieniu dzierżawy adresu uzyskanego z DHCP.'}, {'id': 'C', 'text': 'aktualizacji ustawień nazw interfejsów sieciowych.'}, {'id': 'D', 'text': 'wyczyszczeniu bufora systemu nazw domenowych.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 102,
    "text": '102. Który protokół jest wykorzystywany przez polecenie ping?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IPX'}, {'id': 'B', 'text': 'FTP'}, {'id': 'C', 'text': 'SMTP'}, {'id': 'D', 'text': 'ICMP'}],
    "correctAnswer": 'D'
  },
  {
    "id": 103,
    "text": '103. Programem nasłuchowym służącym do przechwytywania i nagrywania różnych pakietów sieciowych oraz\nich dekodowania jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'finder.'}, {'id': 'B', 'text': 'tracker.'}, {'id': 'C', 'text': 'konqueror.'}, {'id': 'D', 'text': 'whireshark.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 104,
    "text": '104. Przedstawiony listing zawiera polecenia umożliwiające',
    "image": 'ee08/104.jpg',
    "answers": [{'id': 'A', 'text': 'usunięcie portów 0 i 1 przełącznika z sieci vlan.'}, {'id': 'B', 'text': 'zmianę ustawienia prędkości dla portu 0/1 na fastethernet.'}, {'id': 'C', 'text': 'konfigurację wirtualnej sieci lokalnej o nazwie vlan 10 w przełączniku.'}, {'id': 'D', 'text': 'ustawienie nazwy fastEthernet dla pierwszych dziesięciu portów przełącznika.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 105,
    "text": '105. Przedstawiony fragment konfiguracji zapory sieciowej zezwala na ruch sieciowy z wykorzystaniem\nprotokołów',
    "image": 'ee08/105.jpg',
    "answers": [{'id': 'A', 'text': 'FTP, SSH'}, {'id': 'B', 'text': 'POP3, TFTP'}, {'id': 'C', 'text': 'HTTP, SMPT'}, {'id': 'D', 'text': 'HTTPS, IMAP'}],
    "correctAnswer": 'D'
  },
  {
    "id": 106,
    "text": '106. Przedstawione na rysunku narzędzie służy do testowania',
    "image": 'ee08/106.jpg',
    "answers": [{'id': 'A', 'text': 'zasilacza.'}, {'id': 'B', 'text': 'płyty głównej.'}, {'id': 'C', 'text': 'karty sieciowej.'}, {'id': 'D', 'text': 'okablowania LAN.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 107,
    "text": '107. Kopię danych w systemie Linux można wykonać za pomocą polecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dd'}, {'id': 'B', 'text': 'tac'}, {'id': 'C', 'text': 'split'}, {'id': 'D', 'text': 'restore'}],
    "correctAnswer": 'A'
  },
  {
    "id": 108,
    "text": '108. W systemie Linux odpowiednikiem programu Windows o nazwie chkdsk jest program',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'fsck'}, {'id': 'B', 'text': 'icacls'}, {'id': 'C', 'text': 'totem'}, {'id': 'D', 'text': 'synaptic'}],
    "correctAnswer": 'A'
  },
  {
    "id": 109,
    "text": '109. Za pomocą polecenia dxdiag wywołanego z wiersza poleceń systemu Windows można',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'sprawdzić parametry karty graficznej.'}, {'id': 'B', 'text': 'wykonać pełną diagnostykę karty sieciowej.'}, {'id': 'C', 'text': 'przeskanować dysk twardy w poszukiwaniu błędów.'}, {'id': 'D', 'text': 'zweryfikować prędkość zapisu oraz odczytu napędów DV'}],
    "correctAnswer": 'A'
  },
  {
    "id": 110,
    "text": '110. Które narzędzie jest stosowane do weryfikacji sterowników w systemie Windows?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'sfc'}, {'id': 'B', 'text': 'debug'}, {'id': 'C', 'text': 'verifier'}, {'id': 'D', 'text': 'replace'}],
    "correctAnswer": 'C'
  },
  {
    "id": 111,
    "text": '111. Wskaż efekt działania przedstawionego polecenia.',
    "image": 'ee08/111.jpg',
    "answers": [{'id': 'A', 'text': 'Ustawiony czas aktywacji konta Test.'}, {'id': 'B', 'text': 'Ustawiona data wygaśnięcia konta Test.'}, {'id': 'C', 'text': 'Sprawdzona data ostatniego logowania na konto Test.'}, {'id': 'D', 'text': 'Wymuszona zmiana hasła na koncie Test w podanym terminie.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 112,
    "text": '112. Użytkownik systemu operacyjnego Linux chce przypisać adres IP 152.168.1.200 255.255.0.0 interfejsowi\nsieciowemu. Które polecenie powinien wydać, mając uprawnienia root?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ip addr add 152.168.1.200/16 dev eth1'}, {'id': 'B', 'text': 'netsh interface IP 152.168.1.200/16 /add'}, {'id': 'C', 'text': 'ip addr add 152.168.1.200 255.255.0.0 dev eth1'}, {'id': 'D', 'text': 'netsh interface IP 152.168.1.200 255.255.0.0 /add'}],
    "correctAnswer": 'A'
  },
  {
    "id": 113,
    "text": '113. W wyniku użycia polecenia route ustawiono',
    "image": 'ee08/113.jpg',
    "answers": [{'id': 'A', 'text': 'koszt metryki na 0 przeskoków'}, {'id': 'B', 'text': 'adres docelowej sieci na 192.168.35.0'}, {'id': 'C', 'text': '25 bitową maskę dla adresu docelowego'}, {'id': 'D', 'text': 'maskę 255.255.255.0 dla adresu IP bramy 192.168.0.2'}],
    "correctAnswer": 'B'
  },
  {
    "id": 114,
    "text": '114. Sprawdzenie minimalnego okresu ważności hasła w systemie Windows umożliwia polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'net user'}, {'id': 'B', 'text': 'net time'}, {'id': 'C', 'text': 'net group'}, {'id': 'D', 'text': 'net accounts'}],
    "correctAnswer": 'D'
  },
  {
    "id": 115,
    "text": '115. W systemie Linux polecenie chmod umożliwia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zmianę właściciela pliku.'}, {'id': 'B', 'text': 'naprawę systemu plików.'}, {'id': 'C', 'text': 'ustawienie praw dostępu do pliku.'}, {'id': 'D', 'text': 'wyświetlenie informacji o ostatniej aktualizacji pliku.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 116,
    "text": '116. Aby uzupełnić prawidłową składnię prezentowanego polecenia, które udostępnia folder Dane pod nazwą test,\nw miejscu kropek należy wpisać słowo',
    "image": 'ee08/116.jpg',
    "answers": [{'id': 'A', 'text': 'use'}, {'id': 'B', 'text': 'view'}, {'id': 'C', 'text': 'share'}, {'id': 'D', 'text': 'connect'}],
    "correctAnswer": 'C'
  },
  {
    "id": 117,
    "text": '117. Które ze zdań jest prawdziwe dla przedstawionej konfiguracji usługi DHCP w systemie Linux?',
    "image": 'ee08/117.jpg',
    "answers": [{'id': 'A', 'text': 'System zamieni adres IP 192.168.221.102 na nazwę main'}, {'id': 'B', 'text': 'Komputery otrzymają adres IP z zakresu 176.16.20.251 ÷ 255.255.255.0'}, {'id': 'C', 'text': 'Karcie sieciowej komputera main przypisany zostanie adres IP 39:12:86:07:55:00'}, {'id': 'D', 'text': 'Komputery pracujące w sieci otrzymają adres IP z zakresu 176.16.20.50 ÷ 176.16.20.250'}],
    "correctAnswer": 'D'
  },
  {
    "id": 118,
    "text": '118. Dla danego użytkownika w systemie Linux polecenie usermod -s pozwala na',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zablokowanie jego konta.'}, {'id': 'B', 'text': 'przypisanie go do nowej grupy.'}, {'id': 'C', 'text': 'zmianę jego katalogu domowego.'}, {'id': 'D', 'text': 'zmianę jego powłoki systemowej.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 119,
    "text": '119. Który protokół nie funkcjonuje w warstwie aplikacji modelu ISO/OSI?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IP'}, {'id': 'B', 'text': 'FTP'}, {'id': 'C', 'text': 'DNS'}, {'id': 'D', 'text': 'HTTP'}],
    "correctAnswer": 'A'
  },
  {
    "id": 120,
    "text": '120. Protokół umożliwiający hostom uzyskanie od serwera danych konfiguracyjnych, np. adresu IP bramy\nsieciowej, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'RTP'}, {'id': 'B', 'text': 'NFS'}, {'id': 'C', 'text': 'DHCP'}, {'id': 'D', 'text': 'HTTPS'}],
    "correctAnswer": 'C'
  },
  {
    "id": 121,
    "text": '121. W układzie SI jednostką miary napięcia jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wat.'}, {'id': 'B', 'text': 'herc.'}, {'id': 'C', 'text': 'wolt.'}, {'id': 'D', 'text': 'amper.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 122,
    "text": '122. Wskaż rysunek przedstawiający kondensator stały',
    "image": 'ee08/122.jpg',
    "answers": [{'id': 'A', 'text': 'A'}, {'id': 'B', 'text': 'B'}, {'id': 'C', 'text': 'C'}, {'id': 'D', 'text': 'D'}],
    "correctAnswer": 'D'
  },
  {
    "id": 123,
    "text": '123. Na rysunku został przedstawiony schemat budowy logicznej',
    "image": 'ee08/123.jpg',
    "answers": [{'id': 'A', 'text': 'procesora.'}, {'id': 'B', 'text': 'klawiatury.'}, {'id': 'C', 'text': 'karty graficznej.'}, {'id': 'D', 'text': 'myszy komputerowej.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 124,
    "text": '124. Oznaczenie przedstawionego procesora informuje o',
    "image": 'ee08/124.jpg\n',
    "answers": [{'id': 'A', 'text': 'jego małej obudowie.'}, {'id': 'B', 'text': 'wersji mobilnej procesora.'}, {'id': 'C', 'text': 'braku blokady mnożnika (unlocked).'}, {'id': 'D', 'text': 'bardzo niskim zużyciu energii przez procesor.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 125,
    "text": '125. Wskaż podzespół niekompatybilny z płytą główną o przedstawionych w tabeli parametrach.',
    "image": 'ee08/125.jpg',
    "answers": [{'id': 'A', 'text': 'Monitor: Dell, 34”, 1x DisplayPort, 1x miniDP, 2x USB 3.0 Upstream, 4x USB 3.0\nDownstream'}, {'id': 'B', 'text': 'Karta graficzna: Gigabyte GeForce GTX 1050 OC, 2GB, GDDR5, 128 bit, PCI-Express 3.0\nx16'}, {'id': 'C', 'text': 'Procesor: INTEL CORE i3-4350, 3.60 GHz, x2/4, 4 MB, 54W, HD 4600, BOX, s-1150'}, {'id': 'D', 'text': 'Pamięć RAM: Corsair Vengeance LPX, DDR4, 2x16GB, 3000MHz, CL15 Black'}],
    "correctAnswer": 'C'
  },
  {
    "id": 126,
    "text": '126. W zestawie komputerowym o parametrach przedstawionych w tabeli należy wymienić kartę graficzną na\nkartę \nGeForce GTX 1070 Ti Titanium 8G DDR5, PCI EX-x16 3.0, 256b, 1683 MHz/1607 MHz, Power\nconsumption 180W, 3x DP, 2x HDMI, recommended power supply 500W, DirectX 12, OpenGL 4.5 \nW związku z tym modernizacja tego komputera wymaga również wymiany',
    "image": 'ee08/126.jpg',
    "answers": [{'id': 'A', 'text': 'karty sieciowej.'}, {'id': 'B', 'text': 'płyty głównej.'}, {'id': 'C', 'text': 'procesora.'}, {'id': 'D', 'text': 'zasilacza.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 127,
    "text": '127. Do aktualizacji systemów Linux można wykorzystać programy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'cron i mount'}, {'id': 'B', 'text': 'defrag i YaST'}, {'id': 'C', 'text': 'apt-get i zypper'}, {'id': 'D', 'text': 'aptitude i amarok'}],
    "correctAnswer": 'C'
  },
  {
    "id": 128,
    "text": '128. Autor zamieszczonego oprogramowania zezwala na jego bezpłatne używanie jedynie w przypadku',
    "image": 'ee08/128.jpg',
    "answers": [{'id': 'A', 'text': 'zaakceptowania ograniczenia czasowego podczas instalacji.'}, {'id': 'B', 'text': 'uiszczenia dobrowolnej opłaty na cele charytatywne.'}, {'id': 'C', 'text': 'wysłania tradycyjnej kartki pocztowej do autora.'}, {'id': 'D', 'text': 'przesłania przelewu z kwotą 1$ na konto autora.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 129,
    "text": '129. Który ze standardów Gigabit Ethernet umożliwia budowę segmentów sieci o długości 550 m/5000 m\nz prędkością transmisji 1 Gb/s?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '1000Base-T'}, {'id': 'B', 'text': '1000Base-FX'}, {'id': 'C', 'text': '1000Base-LX'}, {'id': 'D', 'text': '1000Base-SX'}],
    "correctAnswer": 'C'
  },
  {
    "id": 130,
    "text": '130. W dwóch przyległych pomieszczeniach pewnej firmy występują bardzo silne zakłócenia elektromagnetyczne.\nAby zapewnić możliwie największą przepustowość podczas pracy istniejącej sieci LAN, jako medium\ntransmisyjne należy zastosować',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'kabel telefoniczny.'}, {'id': 'B', 'text': 'kabel światłowodowy.'}, {'id': 'C', 'text': 'skrętkę nieekranowaną.'}, {'id': 'D', 'text': 'fale elektromagnetyczne w zakresie podczerwieni.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 131,
    "text": '131. Narzędziem służącym do połączenia pigtaila z włóknami kabla światłowodowego jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'przedłużacz kategorii 5e z zestawem pasywnych kabli o prędkości połączenia 100 Mb/s.'}, {'id': 'B', 'text': 'narzędzie zaciskowe do wtyków RJ45, wyposażone w odpowiednie dla kabla gniazdo.'}, {'id': 'C', 'text': 'spawarka światłowodowa, spajająca włókna za pomocą łuku elektrycznego.'}, {'id': 'D', 'text': 'stacja lutownicza, wykorzystująca mikroprocesor do regulacji temperatury.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 132,
    "text": '132. Aby zabezpieczyć sieć bezprzewodową przed nieautoryzowanym dostępem, należy między innymi',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wyłączyć szyfrowanie danych.'}, {'id': 'B', 'text': 'włączyć filtrowanie adresów MAC.'}, {'id': 'C', 'text': 'korzystać wyłącznie z kanałów używanych przez inne sieci WiFi.'}, {'id': 'D', 'text': 'zastosować nazwę identyfikatora sieci SSID o długości min. 16 znaków.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 133,
    "text": '133. Wskaż adres sieci, do której należy host o adresie 172.16.0.123/27',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '172.16.0.16'}, {'id': 'B', 'text': '172.16.0.96'}, {'id': 'C', 'text': '172.16.0.112'}, {'id': 'D', 'text': '172.16.0.224'}],
    "correctAnswer": 'B'
  },
  {
    "id": 134,
    "text": '134. Ile bitów należy wyodrębnić z części hosta, aby z sieci o adresie IPv4 170.16.0.0/16 wydzielić 24 podsieci?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '3 bity'}, {'id': 'B', 'text': '4 bity'}, {'id': 'C', 'text': '5 bitów'}, {'id': 'D', 'text': '6 bitów'}],
    "correctAnswer": 'C'
  },
  {
    "id": 135,
    "text": '135. Programem służącym do wyświetlenia listy aktywnych urządzeń pracujących w sieci LAN jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Advanced IP Scaner'}, {'id': 'B', 'text': 'Ultimate Boot'}, {'id': 'C', 'text': 'Ace Utilities'}, {'id': 'D', 'text': 'Netstat'}],
    "correctAnswer": 'A'
  },
  {
    "id": 136,
    "text": '136. Wskaż technologię wykorzystywaną do udostępniania Internetu wraz z usługą telewizji kablowej, w której\njako medium transmisyjne jest wykorzystywany światłowód oraz kabel koncentryczny.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'PLC'}, {'id': 'B', 'text': 'HFC'}, {'id': 'C', 'text': 'xDSL'}, {'id': 'D', 'text': 'GPRS'}],
    "correctAnswer": 'B'
  },
  {
    "id": 137,
    "text": '137. Aby w systemie Windows zmienić port zainstalowanej drukarki, należy wykorzystać funkcję',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Menedżer zadań.'}, {'id': 'B', 'text': 'Właściwości drukarki.'}, {'id': 'C', 'text': 'Preferencje drukowania.'}, {'id': 'D', 'text': 'Ostatnia znana dobra konfiguracja.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 138,
    "text": '138. W sieci LAN do zabezpieczenia urządzeń sieciowych przed przepięciami oraz różnicami potencjałów, które\nmogą wystąpić podczas burzy lub innych wyładowań atmosferycznych, należy wykorzystać',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ruter.'}, {'id': 'B', 'text': 'przełącznik.'}, {'id': 'C', 'text': 'sprzętową zaporę sieciową.'}, {'id': 'D', 'text': 'urządzenie typu NetProtector.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 139,
    "text": '139. Do sprawdzenia indeksu stabilności systemu Windows Server należy wykorzystać narzędzie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Monitor niezawodności.'}, {'id': 'B', 'text': 'Dziennik zdarzeń.'}, {'id': 'C', 'text': 'Menedżer zadań.'}, {'id': 'D', 'text': 'Zasady grupy.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 140,
    "text": '140. Wskaż nazwę usługi przełącznika, która umożliwi ustawienie wyższego priorytetu dla transmisji VoIP.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'SNMP'}, {'id': 'B', 'text': 'VNC'}, {'id': 'C', 'text': 'QoS'}, {'id': 'D', 'text': 'STP'}],
    "correctAnswer": 'C'
  },
  {
    "id": 141,
    "text": '141. Na podstawie zrzutu ekranu przedstawiającego konfigurację przełącznika można stwierdzić, że',
    "image": 'ee08/141.jpg',
    "answers": [{'id': 'A', 'text': 'czas między wysyłaniem kolejnych komunikatów o poprawnej pracy urządzenia wynosi\n3 sekundy.'}, {'id': 'B', 'text': 'maksymalny czas krążenia w sieci komunikatów protokołu BPDU wynosi 20 sekund.'}, {'id': 'C', 'text': 'minimalny czas krążenia w sieci komunikatów protokołu BPDU wynosi 25 sekund.'}, {'id': 'D', 'text': 'maksymalny czas pomiędzy zmianami statusu łącza wynosi 5 sekund.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 142,
    "text": '142. Połączenie VPN obsługiwane przez system Windows Server, w którym uwierzytelnienie użytkowników\nnastępuje przez niezabezpieczone połączenia, a dopiero po wymianie uwierzytelnień rozpoczyna się\nszyfrowanie połączenia, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'SSTP'}, {'id': 'B', 'text': 'PPTP'}, {'id': 'C', 'text': 'L2TP'}, {'id': 'D', 'text': 'IPSEC'}],
    "correctAnswer": 'B'
  },
  {
    "id": 143,
    "text": '143. Do sprawdzenia prawidłowych przebiegów i wartości napięć układu urządzenia elektronicznego można użyć',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'watomierza.'}, {'id': 'B', 'text': 'testera płyt głównych.'}, {'id': 'C', 'text': 'oscyloskopu cyfrowego.'}, {'id': 'D', 'text': 'miernika uniwersalnego.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 144,
    "text": '144. Użycie polecenia tar –xf dane.tar w systemie Linux spowoduje',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'skopiowanie pliku dane.tar do katalogu /home'}, {'id': 'B', 'text': 'wyświetlenie informacji o zawartości pliku dane.tar'}, {'id': 'C', 'text': 'wyodrębnienie danych z archiwum o nazwie dane.tar'}, {'id': 'D', 'text': 'utworzenie archiwum dane.tar zawierające kopię katalogu /home'}],
    "correctAnswer": 'C'
  },
  {
    "id": 145,
    "text": '145. Komunikat tekstowy BIOS POST firmy Award o treści „Display switch is set incorrectly” wskazuje na',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'usterkę pamięci operacyjnej.'}, {'id': 'B', 'text': 'brak urządzenia rozruchowego.'}, {'id': 'C', 'text': 'błąd inicjalizacji dysku twardego.'}, {'id': 'D', 'text': 'nieprawidłowy tryb wyświetlania obrazu.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 146,
    "text": '146. Do wykonania monitoringu stanu dysków twardych w serwerach, komputerach stacjonarnych i laptopach\nmożna wykorzystać program',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Super Pi'}, {'id': 'B', 'text': 'Packet Tracer'}, {'id': 'C', 'text': 'Acronis Drive Monitor'}, {'id': 'D', 'text': 'PRTG Network Monitor'}],
    "correctAnswer": 'C'
  },
  {
    "id": 147,
    "text": '147. Aby w systemie Windows wykonać śledzenie trasy pakietów do serwera strony internetowej, należy\nwykorzystać polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ping'}, {'id': 'B', 'text': 'tracert'}, {'id': 'C', 'text': 'netstat'}, {'id': 'D', 'text': 'iproute'}],
    "correctAnswer": 'B'
  },
  {
    "id": 148,
    "text": '148. Serwisant dojechał do klienta oddalonego od siedziby firmy o 11 km oraz wykonał u niego czynności\nnaprawcze zawarte w tabeli. Wskaż całkowity koszt brutto jego pracy, jeśli dojazd do klienta kosztuje\n1,20 zł/km brutto i jest on liczony w obie strony. Stawka podatku VAT na usługi wynosi 23%.',
    "image": 'ee08/148.jpg',
    "answers": [{'id': 'A', 'text': '153,20 zł'}, {'id': 'B', 'text': '166,40 zł'}, {'id': 'C', 'text': '195,40 zł'}, {'id': 'D', 'text': '198,60 zł'}],
    "correctAnswer": 'D'
  },
  {
    "id": 149,
    "text": '149. Aby ikony widoczne na przedstawionym obrazie pojawiły się na Pasku zadań, należy w systemie Windows\nskonfigurować',
    "image": 'ee08/149.jpg',
    "answers": [{'id': 'A', 'text': 'funkcję Snap i Peek.'}, {'id': 'B', 'text': 'funkcję Pokaż pulpit.'}, {'id': 'C', 'text': 'obszar powiadomień.'}, {'id': 'D', 'text': 'obszar Action Center.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 150,
    "text": '150. Po analizie zamieszczonych wyników konfiguracji kart sieciowych zainstalowanych na komputerze można\nstwierdzić, że',
    "image": 'ee08/150.jpg',
    "answers": [{'id': 'A', 'text': 'karta bezprzewodowa ma nazwę Net11'}, {'id': 'B', 'text': 'wszystkie karty mogą uzyskać adres IP automatycznie.'}, {'id': 'C', 'text': 'karta przewodowa ma adres MAC 8C-70-5A-F3-75-BC'}, {'id': 'D', 'text': 'interfejs Bluetooth ma przydzielony adres IPv4 192.168.0.102'}],
    "correctAnswer": 'B'
  },
  {
    "id": 151,
    "text": '151. W systemie Windows przeprowadzenie analizy wpływu uruchamianych programów na wydajność komputera\njest między innymi możliwe po użyciu polecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dfrgui.exe'}, {'id': 'B', 'text': 'iscsicpl.exe'}, {'id': 'C', 'text': 'perfmon.msc'}, {'id': 'D', 'text': 'taskschd.msc'}],
    "correctAnswer": 'C'
  },
  {
    "id": 152,
    "text": '152. W systemie Linux polecenie cd ~ służy do',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'utworzenia katalogu /~.'}, {'id': 'B', 'text': 'przejścia do katalogu głównego.'}, {'id': 'C', 'text': 'wyszukania znaku ~ w zapisanych danych.'}, {'id': 'D', 'text': 'przejścia do katalogu domowego użytkownika.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 153,
    "text": '153. W systemie Windows Server udostępnienie folderu jako zasobu sieciowego, widocznego na stacji roboczej\nw postaci dysku oznaczonego literą, jest możliwe dzięki wykonaniu operacji',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zerowania.'}, {'id': 'B', 'text': 'mapowania.'}, {'id': 'C', 'text': 'oczyszczania.'}, {'id': 'D', 'text': 'defragmentacji.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 154,
    "text": '154. Serwer Samba umożliwia współdzielenie plików i drukarek w sieci za pomocą demona',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'grep'}, {'id': 'B', 'text': 'mkfs'}, {'id': 'C', 'text': 'smbd'}, {'id': 'D', 'text': 'quota'}],
    "correctAnswer": 'C'
  },
  {
    "id": 155,
    "text": '155. Który z rekordów DNS należy dodać w strefie wyszukiwania do przodu, aby zmapować nazwę domeny DNS\nna adres IP?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'MX lub PTR'}, {'id': 'B', 'text': 'A lub AAAA'}, {'id': 'C', 'text': 'SRV lub TXT'}, {'id': 'D', 'text': 'NS lub CNAME'}],
    "correctAnswer": 'B'
  },
  {
    "id": 156,
    "text": '156. Polecenie net accounts zastosowane w Wierszu poleceń systemu Windows, powodujące ustawienie\nmaksymalnej liczby dni ważności hasła, wymaga użycia opcji',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '/TIMES'}, {'id': 'B', 'text': '/EXPIRES'}, {'id': 'C', 'text': '/MAXPWAGE'}, {'id': 'D', 'text': '/FORCELOGOFF'}],
    "correctAnswer": 'C'
  },
  {
    "id": 157,
    "text": '157. W systemie Windows Server narzędziem umożliwiającym zarządzanie zasadami grupy jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Panel sterowania.'}, {'id': 'B', 'text': 'Menedżer zadań.'}, {'id': 'C', 'text': 'Konsola GPM'}, {'id': 'D', 'text': 'Serwer DNS.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 158,
    "text": '158. Narzędziem umożliwiającym zdalną kontrolę użytkownika sieci lokalnej poprzez śledzenie jego działań lub\nprzejęcie całkowitej kontroli nad zdalną maszyną jest program',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'RealVNC'}, {'id': 'B', 'text': 'Nslookup'}, {'id': 'C', 'text': 'Recuva'}, {'id': 'D', 'text': 'CPU-Z'}],
    "correctAnswer": 'A'
  },
  {
    "id": 159,
    "text": '159. Na komputerze z zainstalowanymi dwoma systemami – Windows i Linux, po wykonaniu reinstalacji systemu\nWindows nie uruchamia się drugi system. Aby przywrócić możliwość uruchamiania się systemu Linux oraz\naby nie stracić danych i ustawień w nim zapisanych, należy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wykonać reinstalację systemu Linux.'}, {'id': 'B', 'text': 'ponownie zainstalować bootloadera GRU'}, {'id': 'C', 'text': 'wykonać kolejny raz instalację systemu Windows.'}, {'id': 'D', 'text': 'przeprowadzić skanowanie dysku programem antywirusowym.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 160,
    "text": '160. Zamieszczony komunikat widoczny po uruchomieniu narzędzia do naprawy systemu Windows może\nświadczyć o',
    "image": 'ee08/160.jpg',
    "answers": [{'id': 'A', 'text': 'uszkodzeniu sterowników.'}, {'id': 'B', 'text': 'wykryciu nieprawidłowej adresacji IP.'}, {'id': 'C', 'text': 'uszkodzeniu plików startowych systemu.'}, {'id': 'D', 'text': 'konieczności wykonania kopii zapasowej systemu.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 161,
    "text": '161. Symbolem literowym P oznacza się',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'moc.'}, {'id': 'B', 'text': 'rezystancję.'}, {'id': 'C', 'text': 'częstotliwość.'}, {'id': 'D', 'text': 'indukcyjność.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 162,
    "text": '162. Wskaż poprawny zapis liczby -1210metodą znak-moduł do postaci ośmiobitowej liczby dwójkowej.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '10001100zm'}, {'id': 'B', 'text': '00001100zm'}, {'id': 'C', 'text': '+1.11000zm'}, {'id': 'D', 'text': '–1.11000zm'}],
    "correctAnswer": 'A'
  },
  {
    "id": 163,
    "text": '163. Elementem elektronicznym zdolnym do gromadzenia ładunku elektrycznego jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dioda.'}, {'id': 'B', 'text': 'rezystor.'}, {'id': 'C', 'text': 'tranzystor.'}, {'id': 'D', 'text': 'kondensator.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 164,
    "text": '164. Elementem odpowiedzialnym za wymianę danych między procesorem a magistralą PCI-E jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'chipset.'}, {'id': 'B', 'text': 'pamięć RAM.'}, {'id': 'C', 'text': 'cache procesora.'}, {'id': 'D', 'text': 'układ Super I/O.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 165,
    "text": '165. Przedstawiony symbol, stosowany w dokumentacji technicznej, oznacza',
    "image": 'ee08/165.jpg',
    "answers": [{'id': 'A', 'text': 'wymóg selektywnej zbiórki sprzętu elektronicznego.'}, {'id': 'B', 'text': 'konieczność utylizacji wszystkich elementów elektrycznych.'}, {'id': 'C', 'text': 'brak możliwości składowania odpadów aluminiowych oraz innych tworzyw metalicznych.'}, {'id': 'D', 'text': 'zielony punkt upoważniający do wniesienia opłaty pieniężnej na rzecz organizacji odzysku\nopakowań.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 166,
    "text": '166. Moc zasilacza wynosi 450 W, czyli',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '0,045 hW'}, {'id': 'B', 'text': '0,45 kW'}, {'id': 'C', 'text': '4,5 MW'}, {'id': 'D', 'text': '45 GW'}],
    "correctAnswer": 'B'
  },
  {
    "id": 167,
    "text": '167. Aby złożyć komputer z podzespołów, wykorzystując obudowę SFF, należy wybrać płytę główną\nw standardzie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'BTX'}, {'id': 'B', 'text': 'WTX'}, {'id': 'C', 'text': 'E-ATX'}, {'id': 'D', 'text': 'mini ITX'}],
    "correctAnswer": 'D'
  },
  {
    "id": 168,
    "text": '168. Aby zwiększyć wydajność procesora rodziny Intel poprzez jego „podkręcenie” (ang. overclocking) można\nzastosować procesor oznaczony',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'literą B'}, {'id': 'B', 'text': 'literą K'}, {'id': 'C', 'text': 'literą U'}, {'id': 'D', 'text': 'literą Y'}],
    "correctAnswer": 'B'
  },
  {
    "id": 169,
    "text": '169. Do usuwania plików lub katalogów w systemie Linux służy polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'cat'}, {'id': 'B', 'text': 'tar'}, {'id': 'C', 'text': 'rm'}, {'id': 'D', 'text': 'ls'}],
    "correctAnswer": 'C'
  },
  {
    "id": 170,
    "text": '170. Aktualizację do wyższej wersji systemu Ubuntu Linux umożliwia polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'install source update'}, {'id': 'B', 'text': 'apt-get sudo su update'}, {'id': 'C', 'text': 'upgrade install dist high'}, {'id': 'D', 'text': 'sudo apt-get dist-upgrade'}],
    "correctAnswer": 'D'
  },
  {
    "id": 171,
    "text": '171. Aby włączyć lub wyłączyć usługi w zainstalowanym systemie operacyjnym Windows, można posłużyć się\nprzystawką',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dcpol.msc'}, {'id': 'B', 'text': 'dfsgui.msc'}, {'id': 'C', 'text': 'lusrmgr.msc'}, {'id': 'D', 'text': 'services.msc'}],
    "correctAnswer": 'D'
  },
  {
    "id": 172,
    "text": '172. Na którym rysunku przedstawiono topologię sieci typu magistrala?',
    "image": 'ee08/172.jpg',
    "answers": [{'id': 'A', 'text': 'A'}, {'id': 'B', 'text': 'B'}, {'id': 'C', 'text': 'C'}, {'id': 'D', 'text': 'D'}],
    "correctAnswer": 'B'
  },
  {
    "id": 173,
    "text": '173. Technika przekazywania żetonu (ang. token) jest stosowana w topologii',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'kraty.'}, {'id': 'B', 'text': 'gwiazdy.'}, {'id': 'C', 'text': 'magistrali.'}, {'id': 'D', 'text': 'pierścienia.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 174,
    "text": '174. Które z protokołów przekazują okresowe kopie tablic rutingu do sąsiedniego rutera i nie mają pełnej\ninformacji o odległych ruterach?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'RIP, IGRP'}, {'id': 'B', 'text': 'EGP, BGP'}, {'id': 'C', 'text': 'OSPF, RIP'}, {'id': 'D', 'text': 'EIGPR, OSPF'}],
    "correctAnswer": 'D'
  },
  {
    "id": 175,
    "text": '175. Ile domen kolizyjnych i rozgłoszeniowych jest widocznych na schemacie?',
    "image": 'ee08/175.jpg',
    "answers": [{'id': 'A', 'text': '9 domen kolizyjnych i 1 domena rozgłoszeniowa.'}, {'id': 'B', 'text': '9 domen kolizyjnych i 4 domeny rozgłoszeniowe.'}, {'id': 'C', 'text': '1 domena kolizyjna i 9 domen rozgłoszeniowych.'}, {'id': 'D', 'text': '4 domeny kolizyjne i 9 domen rozgłoszeniowych.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 176,
    "text": '176. Zasady budowy systemu okablowania strukturalnego, specyfikacja parametrów kabli oraz procedury\ntestowania obowiązujące w Polsce zostały zawarte w normach',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'EN 50167'}, {'id': 'B', 'text': 'EN 50169'}, {'id': 'C', 'text': 'PN-EN 50173'}, {'id': 'D', 'text': 'PN-EN 50310'}],
    "correctAnswer": 'C'
  },
  {
    "id": 177,
    "text": '177. Która pula adresów umożliwia komunikację typu multicast w sieci wykorzystującej adresację IPv6?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '::/96'}, {'id': 'B', 'text': 'ff00::/8'}, {'id': 'C', 'text': '3ffe::/16'}, {'id': 'D', 'text': '2002::/24'}],
    "correctAnswer": 'B'
  },
  {
    "id": 178,
    "text": '178. Dana jest sieć o adresie 192.168.100.0/24. Ile podsieci można z niej wydzielić, stosując maskę\n255.255.255.224?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '4 podsieci.'}, {'id': 'B', 'text': '6 podsieci.'}, {'id': 'C', 'text': '8 podsieci.'}, {'id': 'D', 'text': '12 podsieci.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 179,
    "text": '179. Przedstawione na rysunku narzędzie służy do testowania',
    "image": 'ee08/179.jpg',
    "answers": [{'id': 'A', 'text': 'zasilacza.'}, {'id': 'B', 'text': 'płyty głównej.'}, {'id': 'C', 'text': 'karty sieciowej.'}, {'id': 'D', 'text': 'okablowania LAN.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 180,
    "text": '180. Która technologia umożliwia dostęp do Internetu oraz odbiór cyfrowych kanałów telewizyjnych?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'QoS'}, {'id': 'B', 'text': 'VPN'}, {'id': 'C', 'text': 'CLIP'}, {'id': 'D', 'text': 'ADSL2+'}],
    "correctAnswer": 'D'
  },
  {
    "id": 181,
    "text": '181. Wewnętrzny protokół trasowania, oparty na analizie stanu łącza, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'RIP'}, {'id': 'B', 'text': 'EGP'}, {'id': 'C', 'text': 'BGP'}, {'id': 'D', 'text': 'OSPF'}],
    "correctAnswer": 'D'
  },
  {
    "id": 182,
    "text": '182. Aby w sieci komputerowej była możliwa praca w wydzielonych logicznie mniejszych podsieciach, należy\nskonfigurować w przełączniku',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'WLAN'}, {'id': 'B', 'text': 'VLAN'}, {'id': 'C', 'text': 'WAN'}, {'id': 'D', 'text': 'VPN'}],
    "correctAnswer": 'B'
  },
  {
    "id": 183,
    "text": '183. Który materiał eksploatacyjny nie jest wykorzystywany w ploterach?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Tusz.'}, {'id': 'B', 'text': 'Pisak.'}, {'id': 'C', 'text': 'Filament.'}, {'id': 'D', 'text': 'Atrament.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 184,
    "text": '184. Aby w systemie Windows wyczyścić bufor nazw domenowych, należy zastosować polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ipconfig /renew'}, {'id': 'B', 'text': 'ipconfig /release'}, {'id': 'C', 'text': 'ipconfig /flushdns'}, {'id': 'D', 'text': 'ipconfig /setclassid'}],
    "correctAnswer": 'C'
  },
  {
    "id": 185,
    "text": '185. Poleceniem służącym do wyświetlania i modyfikacji tabel translacji adresów IP na adresy fizyczne jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'EXPAND'}, {'id': 'B', 'text': 'PATH'}, {'id': 'C', 'text': 'MMC'}, {'id': 'D', 'text': 'ARP'}],
    "correctAnswer": 'D'
  },
  {
    "id": 186,
    "text": '186. Który program nie umożliwia testowania sieci komputerowej w celu identyfikacji usterek?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'traceroute'}, {'id': 'B', 'text': 'nslookup'}, {'id': 'C', 'text': 'getfacl'}, {'id': 'D', 'text': 'ping'}],
    "correctAnswer": 'C'
  },
  {
    "id": 187,
    "text": '187. Przedstawione na rysunku urządzenie wraz ze specyfikacją techniczną można wykorzystać do pomiarów\nokablowania',
    "image": 'ee08/187.jpg',
    "answers": [{'id': 'A', 'text': 'telefonicznego.'}, {'id': 'B', 'text': 'skrętki cat. 5e/6.'}, {'id': 'C', 'text': 'koncentrycznego.'}, {'id': 'D', 'text': 'światłowodowego.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 188,
    "text": '188. Wskaż efekt działania przedstawionego polecenia.',
    "image": 'ee08/188.jpg',
    "answers": [{'id': 'A', 'text': 'Otwarcie portu 53 dla protokołu TCP.'}, {'id': 'B', 'text': 'Usunięcie z zapory sieciowej reguły o nazwie Open.'}, {'id': 'C', 'text': 'Import ustawienia zapory sieciowej z katalogu in action.'}, {'id': 'D', 'text': 'Blokowanie działania usługi DNS opartej na w protokole TCP.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 189,
    "text": '189. Które z poleceń systemu Linux nie umożliwia przeprowadzenia diagnostyki sprzętu komputerowego?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ls'}, {'id': 'B', 'text': 'top'}, {'id': 'C', 'text': 'fsck'}, {'id': 'D', 'text': 'lspci'}],
    "correctAnswer": 'A'
  },
  {
    "id": 190,
    "text": '190. W systemie Windows parametry karty graficznej można sprawdzić za pomocą polecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'color'}, {'id': 'B', 'text': 'dxdiag'}, {'id': 'C', 'text': 'graphics'}, {'id': 'D', 'text': 'cliconfg'}],
    "correctAnswer": 'B'
  },
  {
    "id": 191,
    "text": '191. Które narzędzie w systemie Linux wyświetla zapisane w BIOS informacje o sprzęcie?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'cron'}, {'id': 'B', 'text': 'watch'}, {'id': 'C', 'text': 'debug'}, {'id': 'D', 'text': 'dmidecode'}],
    "correctAnswer": 'D'
  },
  {
    "id": 192,
    "text": '192. Istniejące konto użytkownika jest modyfikowane poleceniem net user. Aby wymusić zmianę hasła po\nponownym zalogowaniu użytkownika, należy dodać do polecenia parametr',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'passwordreq'}, {'id': 'B', 'text': 'passwordchg'}, {'id': 'C', 'text': 'expirespassword'}, {'id': 'D', 'text': 'logonpasswordchg'}],
    "correctAnswer": 'D'
  },
  {
    "id": 193,
    "text": '193. Przedstawione polecenie zostało wydane przez Administratora systemu operacyjnego podczas ręcznej\nkonfiguracji interfejsu sieciowego. Efektem działania tego polecenia jest',
    "image": 'ee08/193.jpg',
    "answers": [{'id': 'A', 'text': 'włączenie dynamicznego przypisywania adresów IP.'}, {'id': 'B', 'text': 'ustawienie adresu 151.10.0.1 jako bramy domyślnej.'}, {'id': 'C', 'text': 'ustawienie 24 bitowej maski.'}, {'id': 'D', 'text': 'wyłączenie interfejsu.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 194,
    "text": '194. Aby ustawić routing statyczny do sieci 192.168.10.0, należy wydać polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'route ADD 192.168.10.0 MASK 255.255.255.0 192.168.10.1 5'}, {'id': 'B', 'text': 'route 192.168.10.1 MASK 255.255.255.0 192.168.10.0 5 ADD'}, {'id': 'C', 'text': 'static route 92.168.10.1 MASK 255.255.255.0 192.168.10.0 5'}, {'id': 'D', 'text': 'static 192.168.10.0 MASK 255.255.255.0 192.168.10.1 5 route'}],
    "correctAnswer": 'A'
  },
  {
    "id": 195,
    "text": '195. Aktualizację systemu Windows umożliwia polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wuauclt'}, {'id': 'B', 'text': 'winmine'}, {'id': 'C', 'text': 'verifier'}, {'id': 'D', 'text': 'vssadmin'}],
    "correctAnswer": 'A'
  },
  {
    "id": 196,
    "text": '196. W systemie Linux polecenie tty umożliwia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wyświetlenie nazwy terminala.'}, {'id': 'B', 'text': 'wysłanie sygnału zakończenia procesu.'}, {'id': 'C', 'text': 'zmianę bieżącego katalogu na katalog domowy użytkownika'}, {'id': 'D', 'text': 'uruchomienie programu listującego zawartość pamięci operacyjnej.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 197,
    "text": '197. Aby w systemie Linux zmapować katalog udostępniony w sieci komputerowej, należy posłużyć się\npoleceniem',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'join'}, {'id': 'B', 'text': 'view'}, {'id': 'C', 'text': 'mount'}, {'id': 'D', 'text': 'connect'}],
    "correctAnswer": 'C'
  },
  {
    "id": 198,
    "text": '198. W systemie Linux, aby zmienić nowo tworzonym użytkownikom domyślny katalog domowy na katalog\n/ users / home / new, należy użyć polecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'useradd -D -b / users / home / new'}, {'id': 'B', 'text': 'useradd / users / home / new -D -f'}, {'id': 'C', 'text': '/ users / home / new -n -D useradd'}, {'id': 'D', 'text': '/ users / home / new useradd -s -D'}],
    "correctAnswer": 'A'
  },
  {
    "id": 199,
    "text": '199. Protokołem funkcjonującym w warstwie aplikacji modelu TCP/IP jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'FTP'}, {'id': 'B', 'text': 'ARP'}, {'id': 'C', 'text': 'UDP'}, {'id': 'D', 'text': 'SPX'}],
    "correctAnswer": 'A'
  },
  {
    "id": 200,
    "text": '200. Działający w systemie Linux program iftop służy do',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'monitorowania połączeń sieciowych.'}, {'id': 'B', 'text': 'konfigurowania ustawień interfejsu graficznego.'}, {'id': 'C', 'text': 'wyświetlania chwilowej prędkości zapisu do pamięci operacyjnej.'}, {'id': 'D', 'text': 'wyłączania procesu zużywającego najwięcej mocy obliczeniowej procesora.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 201,
    "text": '201. Wskaż rysunek przedstawiający symbol bramki logicznej NOT.',
    "image": 'ee08/201.jpg',
    "answers": [{'id': 'A', 'text': 'A'}, {'id': 'B', 'text': 'B'}, {'id': 'C', 'text': 'C'}, {'id': 'D', 'text': 'D'}],
    "correctAnswer": 'C'
  },
  {
    "id": 202,
    "text": '202. Obraz przedstawia oznaczenie sygnalizacji świetlnej w dokumentacji technicznej laptopa. Wskaż numer \noznaczający kontrolkę zapalającą się podczas ładowania baterii.',
    "image": 'ee08/202.jpg',
    "answers": [{'id': 'A', 'text': '2'}, {'id': 'B', 'text': '3'}, {'id': 'C', 'text': '4'}, {'id': 'D', 'text': '5'}],
    "correctAnswer": 'C'
  },
  {
    "id": 203,
    "text": '203. Wskaż poprawną kolejność czynności prowadzących do zamontowania procesora w gnieździe LGA na nowej \npłycie głównej, odłączonej od źródła zasilania.',
    "image": 'ee08/203.jpg',
    "answers": [{'id': 'A', 'text': '5, 2, 3, 4, 1, 6, 7'}, {'id': 'B', 'text': '5, 6, 1, 7, 2, 3, 4'}, {'id': 'C', 'text': '5, 7, 6, 1, 4, 3, 2'}, {'id': 'D', 'text': '5, 1, 7, 3, 6, 2, 4'}],
    "correctAnswer": 'D'
  },
  {
    "id": 204,
    "text": '204. W trybie graficznym systemów Ubuntu lub SuSE Linux, do zainstalowania aktualizacji oprogramowania \nsystemu można użyć programów',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Shutter lub J-Pilot'}, {'id': 'B', 'text': 'Pocket lub Dolphin'}, {'id': 'C', 'text': 'Synaptic lub YaST'}, {'id': 'D', 'text': 'Chromium lub XyGrib'}],
    "correctAnswer": 'C'
  },
  {
    "id": 205,
    "text": '205. Do wykonania nienadzorowanej instalacji w systemie Windows należy przygotować plik odpowiedzi o nazwie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'modprobe.conf'}, {'id': 'B', 'text': 'unattend.txt'}, {'id': 'C', 'text': 'pagefile.sys'}, {'id': 'D', 'text': 'boot.ini'}],
    "correctAnswer": 'B'
  },
  {
    "id": 206,
    "text": '206. Po zainstalowaniu systemu Linux użytkownik chce przeprowadzić konfigurację karty sieciowej poprzez \nwpisanie ustawień konfiguracyjnych sieci. Jest to możliwe przez edycję pliku',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '/ etc / profile'}, {'id': 'B', 'text': '/ etc / shadow'}, {'id': 'C', 'text': '/ etc /network / interfaces'}, {'id': 'D', 'text': '/ etc / resolv.configuration'}],
    "correctAnswer": 'C'
  },
  {
    "id": 207,
    "text": '207. Licencja programu komputerowego rozpowszechnianego za darmo z ograniczoną przez producenta \nfunkcjonalnością w stosunku do pełnej, płatnej wersji, gdzie po okresie 30 dni pojawiają się reklamy oraz \nprzypomnienia o konieczności zarejestrowania się, nosi nazwę',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'OEM'}, {'id': 'B', 'text': 'adware'}, {'id': 'C', 'text': 'liteware'}, {'id': 'D', 'text': 'GNU-GPL'}],
    "correctAnswer": 'C'
  },
  {
    "id": 208,
    "text": '208. Cechy której topologii fizycznej sieci zostały opisane w ramce?',
    "image": 'ee08/208.jpg',
    "answers": [{'id': 'A', 'text': 'Rozgłaszania.'}, {'id': 'B', 'text': 'Magistrali.'}, {'id': 'C', 'text': 'Gwiazdy.'}, {'id': 'D', 'text': 'Siatki.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 209,
    "text": '209. Widoczny na schemacie symbol okablowania oznacza kabel',
    "image": 'ee08/209.jpg',
    "answers": [{'id': 'A', 'text': 'szeregowy'}, {'id': 'B', 'text': 'światłowodowy'}, {'id': 'C', 'text': 'ethernetowy prosty.'}, {'id': 'D', 'text': 'ethernetowy krosowany.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 210,
    "text": '210. Zastosowanie skrętki kategorii 6 (CAT 6) o długości 20 metrów w sieci LAN wskazuje na jej maksymalną \nprzepustowość równą',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '10 Gb/s'}, {'id': 'B', 'text': '10 Mb/s'}, {'id': 'C', 'text': '100 Gb/s'}, {'id': 'D', 'text': '100 Mb/s'}],
    "correctAnswer": 'A'
  },
  {
    "id": 211,
    "text": '211. Wskaż protokół warstwy aplikacji służący do odbierania poczty elektronicznej, który w pierwszej fazie pobiera \nnagłówki wiadomości, a pobranie ich treści oraz załączników następuje dopiero po otwarciu maila.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IMAP'}, {'id': 'B', 'text': 'SNMP'}, {'id': 'C', 'text': 'MIME'}, {'id': 'D', 'text': 'FTAM'}],
    "correctAnswer": 'A'
  },
  {
    "id": 212,
    "text": '212. Do podłączenia (zaszycia) kabla w module Keystone należy wykorzystać',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'praskę ręczną.'}, {'id': 'B', 'text': 'bit imbusowy.'}, {'id': 'C', 'text': 'wkrętak typu Torx.'}, {'id': 'D', 'text': 'narzędzie uderzeniowe.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 213,
    "text": '213. Adresem rozgłoszeniowym w podsieci o adresie IPv4 192.168.160.0/21 jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '192.168.7.255'}, {'id': 'B', 'text': '192.168.160.254'}, {'id': 'C', 'text': '192.168.167.255'}, {'id': 'D', 'text': '192.168.255.254'}],
    "correctAnswer": 'C'
  },
  {
    "id": 214,
    "text": '214. W adresacji IPv6 zastosowanie podwójnego dwukropka jest wykorzystywane do',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'jednorazowego zastąpienia jednego bloku jedynek.'}, {'id': 'B', 'text': 'wielokrotnego zastąpienia dowolnych bloków jedynek.'}, {'id': 'C', 'text': 'wielokrotnego zastąpienia dowolnych bloków zer odseparowanych blokiem jedynek.'}, {'id': 'D', 'text': 'jednorazowego zastąpienia jednego lub kolejno ułożonych po sobie bloków złożonych wyłącznie \nz zer.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 215,
    "text": '215. Co należy wpisać w miejscu kropek, aby w systemie Linux zwiększyć domyślny odstęp czasowy między \nkolejnymi transmisjami pakietów przy użyciu polecenia ping?',
    "image": 'ee08/215.jpg',
    "answers": [{'id': 'A', 'text': '-i 3'}, {'id': 'B', 'text': '-c 9'}, {'id': 'C', 'text': '-a 81'}, {'id': 'D', 'text': '-s 75'}],
    "correctAnswer": 'A'
  },
  {
    "id": 216,
    "text": '216. Drukarką przeznaczoną do druku etykiet i kodów kreskowych, która drukuje poprzez roztapianie pokrycia\nspecjalnej taśmy, w wyniku czego barwnik z niej zostaje przyklejony do materiału, na którym następuje \ndrukowanie jest drukarka',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'igłowa'}, {'id': 'B', 'text': 'laserowa'}, {'id': 'C', 'text': 'atramentowa'}, {'id': 'D', 'text': 'termotransferowa'}],
    "correctAnswer": 'D'
  },
  {
    "id": 217,
    "text": '217. Aby podłączyć do komputera drukarkę igłową o przedstawionych parametrach, należy kabel dołączony do \ndrukarki zamocować w porcie',
    "image": 'ee08/217.jpg',
    "answers": [{'id': 'A', 'text': 'USB'}, {'id': 'B', 'text': 'Ethernet'}, {'id': 'C', 'text': 'FireWire'}, {'id': 'D', 'text': 'Centronics'}],
    "correctAnswer": 'D'
  },
  {
    "id": 218,
    "text": '218. W systemie Windows Professional do konfiguracji czasu dostępności drukarki należy wykorzystać zakładkę',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Zaawansowane we Właściwościach drukarki.'}, {'id': 'B', 'text': 'Zabezpieczenia we Właściwościach drukarki.'}, {'id': 'C', 'text': 'Konfiguracja w Preferencjach drukowania.'}, {'id': 'D', 'text': 'Ustawienia w Preferencjach drukowania.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 219,
    "text": '219. Podstawową czynnością eksploatacyjną drukarki igłowej jest wymiana pojemnika',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'z atramentem'}, {'id': 'B', 'text': 'z tonerem'}, {'id': 'C', 'text': 'z fluidem'}, {'id': 'D', 'text': 'z taśmą'}],
    "correctAnswer": 'D'
  },
  {
    "id": 220,
    "text": '220. W systemie Linux do monitorowania pracy sieci, urządzeń sieciowych oraz serwerów można wykorzystać \nprogram',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Nagios'}, {'id': 'B', 'text': 'Brasero'}, {'id': 'C', 'text': 'Dolphin'}, {'id': 'D', 'text': 'Shotwell'}],
    "correctAnswer": 'A'
  },
  {
    "id": 221,
    "text": '221. Która z czynności jest możliwa do wykonania podczas konfiguracji przełącznika CISCO w interfejsie CLI, bez przechodzenia w tryb uprzywilejowany, na poziomie dostępu widocznym w ramce?',
    "image": 'ee08/221.jpg',
    "answers": [{'id': 'A', 'text': 'Zmiana nazwy systemowej.'}, {'id': 'B', 'text': 'Wyświetlenie tablicy ARP.'}, {'id': 'C', 'text': 'Określanie haseł dostępu.'}, {'id': 'D', 'text': 'Tworzenie sieci VLAN'}],
    "correctAnswer": 'B'
  },
  {
    "id": 222,
    "text": '222. Aby ukryć identyfikator sieci bezprzewodowej, należy w ruterze zmienić jego konfigurację w polu oznaczonym \nnumerem',
    "image": 'ee08/222.jpg',
    "answers": [{'id': 'A', 'text': '1'}, {'id': 'B', 'text': '2'}, {'id': 'C', 'text': '3'}, {'id': 'D', 'text': '4'}],
    "correctAnswer": 'B'
  },
  {
    "id": 223,
    "text": '223. Konfiguracja rutingu statycznego na ruterze polega na',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zdefiniowaniu adresu IP serwera DNS przekazywanego przez serwer DHCP.'}, {'id': 'B', 'text': 'przesyłaniu kopii danych z wybranych portów rutera na wskazany port docelowy.'}, {'id': 'C', 'text': 'przesyłaniu kopii danych z wybranych portów rutera na wskazany port docelowy.'}, {'id': 'D', 'text': 'wskazaniu adresu sieci docelowej wraz z jej maską oraz podaniu adresu lub interfejsu do przesłania \ndanych do zadanej sieci.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 224,
    "text": '224. Wskaż zestaw służący do diagnostyki logicznych układów elektronicznych znajdujących się na płycie głównej \nkomputera, który nie reaguje na próby włączenia zasilania.',
    "image": 'ee08/224.jpg',
    "answers": [{'id': 'A', 'text': 'A'}, {'id': 'B', 'text': 'B'}, {'id': 'C', 'text': 'C'}, {'id': 'D', 'text': 'D'}],
    "correctAnswer": 'A'
  },
  {
    "id": 225,
    "text": '225. Do naprawy zasilacza laptopa polegającej na wymianie kondensatorów należy zastosować',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'chwytak próżniowy.'}, {'id': 'B', 'text': 'tester płyt głównych.'}, {'id': 'C', 'text': 'lutownicę z cyną i kalafonią.'}, {'id': 'D', 'text': 'tester okablowania sieciowego.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 226,
    "text": '226. Aby wyodrębnić dane zawarte w archiwum o nazwie dane.tar, użytkownik pracujący w systemie Linux \npowinien użyć polecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'gzip –r dane.tar'}, {'id': 'B', 'text': 'tar –cvf dane.tar'}, {'id': 'C', 'text': 'tar –xvf dane.tar'}, {'id': 'D', 'text': 'gunzip –r dane.tar'}],
    "correctAnswer": 'C'
  },
  {
    "id": 227,
    "text": '227. Na wydrukach drukarki laserowej można zaobserwować podłużne pasma oraz powtarzające się artefakty. \nMożliwą przyczyną złej jakości wydruku jest usterka',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'taśmy barwiącej.'}, {'id': 'B', 'text': 'układu zliczającego.'}, {'id': 'C', 'text': 'głowicy drukującej.'}, {'id': 'D', 'text': 'bębna światłoczułego.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 228,
    "text": '228. Przedstawiony wynik działania polecenia systemu Linux służy do diagnostyki',
    "image": 'ee08/228.jpg',
    "answers": [{'id': 'A', 'text': 'karty graficznej.'}, {'id': 'B', 'text': 'dysku twardego'}, {'id': 'C', 'text': 'karty sieciowe'}, {'id': 'D', 'text': 'pamięci RAM.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 229,
    "text": '229. System operacyjny został zaatakowany przez oprogramowanie szpiegujące. Po usunięciu usterek, aby \nuniknąć kolejnego ataku, zaleca się',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wykonanie defragmentacji dysku'}, {'id': 'B', 'text': 'ustawienie czyszczenia pamięci podręcznej.'}, {'id': 'C', 'text': 'zainstalowanie oprogramowania antyspyware'}, {'id': 'D', 'text': 'utworzenie dwóch partycji na dysku twardym'}],
    "correctAnswer": 'C'
  },
  {
    "id": 230,
    "text": '230. Wskaż należność brutto za wykonanie wymienionych w tabeli czynności serwisowych, jeśli koszt jednej \nroboczogodziny wynosi 120,00 zł netto, a stawka podatku VAT wynosi 23%.',
    "image": 'ee08/230.jpg',
    "answers": [{'id': 'A', 'text': '231,00 zł'}, {'id': 'B', 'text': '300,00 zł'}, {'id': 'C', 'text': '369,00 zł'}, {'id': 'D', 'text': '480,00 zł'}],
    "correctAnswer": 'C'
  },
  {
    "id": 231,
    "text": '231. Aby po uruchomieniu systemu Windows automatycznie włączał się program Kalkulator, należy wykonać \nkonfigurację',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'pliku wymiany.'}, {'id': 'B', 'text': 'funkcji Snap i Peak.'}, {'id': 'C', 'text': 'pulpitu systemowego.'}, {'id': 'D', 'text': 'harmonogramu zadań.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 232,
    "text": '232. Do sprawdzenia przedstawionej konfiguracji interfejsów sieciowych w systemie Linux użyto polecenia',
    "image": 'ee08/232.jpg',
    "answers": [{'id': 'A', 'text': 'ping'}, {'id': 'B', 'text': 'ip route'}, {'id': 'C', 'text': 'ifconfig'}, {'id': 'D', 'text': 'ip addr down'}],
    "correctAnswer": 'C'
  },
  {
    "id": 233,
    "text": '233. Wskaż polecenie systemu Linux służące do sprawdzenia, w którym katalogu znajduje się użytkownik.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'cls'}, {'id': 'B', 'text': 'pwd'}, {'id': 'C', 'text': 'path'}, {'id': 'D', 'text': 'mkdir'}],
    "correctAnswer": 'B'
  },
  {
    "id": 234,
    "text": '234. W systemach z rodziny Windows system EFS służy do zabezpieczenia danych poprzez ich',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'archiwizowanie.'}, {'id': 'B', 'text': 'przenoszenie.'}, {'id': 'C', 'text': 'szyfrowanie.'}, {'id': 'D', 'text': 'kopiowanie.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 235,
    "text": '235. Usługa systemu Windows Server, służąca do zdalnej instalacji systemów operacyjnych na komputerach \nzarządzanych przez serwer, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'FTP'}, {'id': 'B', 'text': 'DFS'}, {'id': 'C', 'text': 'GPO'}, {'id': 'D', 'text': 'WDS'}],
    "correctAnswer": 'D'
  },
  {
    "id": 236,
    "text": '236. Którą rolę serwera należy dodać w systemach z rodziny Windows Server, aby możliwe było utworzenie nowej \nwitryny FTP?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IIS'}, {'id': 'B', 'text': 'SSH'}, {'id': 'C', 'text': 'RRAS'}, {'id': 'D', 'text': 'DHCP'}],
    "correctAnswer": 'A'
  },
  {
    "id": 237,
    "text": '237. W systemie Linux do zablokowania hasła użytkownika egzamin należy użyć polecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'passwd –p egzamin'}, {'id': 'B', 'text': 'userdel –r egzamin'}, {'id': 'C', 'text': 'usermod –L egzamin'}, {'id': 'D', 'text': 'useradd –d egzamin'}],
    "correctAnswer": 'C'
  },
  {
    "id": 238,
    "text": '238. Wskaż polecenie systemu Windows Server służące do usunięcia jednostki organizacyjnej z katalogu.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dsrm'}, {'id': 'B', 'text': 'dsadd'}, {'id': 'C', 'text': 'adprep'}, {'id': 'D', 'text': 'redircmp'}],
    "correctAnswer": 'A'
  },
  {
    "id": 239,
    "text": '239. W systemie Linux do zarządzania tablicami partycji można wykorzystać polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'free'}, {'id': 'B', 'text': 'lspci'}, {'id': 'C', 'text': 'fdisk'}, {'id': 'D', 'text': 'iostat'}],
    "correctAnswer": 'C'
  },
  {
    "id": 240,
    "text": '240. Aby w systemie Windows Server zarejestrować udane i nieudane próby logowania użytkowników oraz \noperacje na zasobach dyskowych, należy skonfigurować dziennik',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'systemu.'}, {'id': 'B', 'text': 'ustawień.'}, {'id': 'C', 'text': 'zabezpieczeń.'}, {'id': 'D', 'text': 'aplikacji i usług.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 241,
    "text": '241. Materiałem eksploatacyjnym dla kolorowej drukarki laserowej jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'pamięć wydruku'}, {'id': 'B', 'text': 'podajnik papieru'}, {'id': 'C', 'text': 'kartridż z tonerem'}, {'id': 'D', 'text': 'przetwornik CMOS'}],
    "correctAnswer": 'C'
  },
  {
    "id": 242,
    "text": '242. Którego oprogramowania należy użyć, aby umożliwić przeniesienie zeskanowanego dokumentu do edytora tekstu?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Programu ERP'}, {'id': 'B', 'text': 'Programu CAD'}, {'id': 'C', 'text': 'Programu OCR'}, {'id': 'D', 'text': 'Programu COM+'}],
    "correctAnswer": 'C'
  },
  {
    "id": 243,
    "text": '243. W systemie Windows do zarządzania programami i usługami uruchamianymi wraz ze startem systemu operacyjnego można wykorzystać program',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'config.sys'}, {'id': 'B', 'text': 'autorun.inf'}, {'id': 'C', 'text': 'autoexec.bat'}, {'id': 'D', 'text': 'msconfig.exe'}],
    "correctAnswer": 'D'
  },
  {
    "id": 244,
    "text": '244. Który z adresów IP jest adresem prywatnym?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '192.168.0.1'}, {'id': 'B', 'text': '190.5.7.126'}, {'id': 'C', 'text': '131.107.5.65'}, {'id': 'D', 'text': '38.176.55.44'}],
    "correctAnswer": 'A'
  },
  {
    "id": 245,
    "text": '245. Na rysunku jest przedstawiona karta',
    "image": 'ee08/245.jpg',
    "answers": [{'id': 'A', 'text': 'kontrolera RAID'}, {'id': 'B', 'text': 'kontrolera SCSII'}, {'id': 'C', 'text': 'sieciowa Token Ring'}, {'id': 'D', 'text': 'sieciowa Fibre Channel'}],
    "correctAnswer": 'D'
  },
  {
    "id": 246,
    "text": '246. Za pomocą programu Acrylic Wi-Fi Home wykonano test, którego wyniki przedstawiono na zrzucie. Co można stwierdzić na jego podstawie o dostępnej sieci bezprzewodowej?',
    "image": 'ee08/246.jpg',
    "answers": [{'id': 'A', 'text': 'Sieć bezprzewodowa jest nieszyfrowana.'}, {'id': 'B', 'text': 'Sieć bezprzewodowa korzysta z kanałów 10 ÷ 12.'}, {'id': 'C', 'text': 'Sieć bezprzewodowa ma bardzo dobrą jakość sygnału.'}, {'id': 'D', 'text': 'Sieć bezprzewodowa osiąga maksymalną szybkość transferu 72 Mbps.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 247,
    "text": '247. Wskaż poprawną postać maski podsieci.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '255.255.255.64'}, {'id': 'B', 'text': '255.255.255.96'}, {'id': 'C', 'text': '255.255.255.192'}, {'id': 'D', 'text': '255.255.255.228'}],
    "correctAnswer": 'C'
  },
  {
    "id": 248,
    "text": '248. Który port jest domyślny dla protokołu HTTPS?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '80'}, {'id': 'B', 'text': '143'}, {'id': 'C', 'text': '443'}, {'id': 'D', 'text': '8080'}],
    "correctAnswer": 'C'
  },
  {
    "id": 249,
    "text": '249. Który protokół komunikacyjny służy do transferu plików w architekturze klient-serwer oraz może działać w dwóch trybach: aktywnym i pasywnym?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IP'}, {'id': 'B', 'text': 'FTP'}, {'id': 'C', 'text': 'DNS'}, {'id': 'D', 'text': 'EI-SI'}],
    "correctAnswer": 'B'
  },
  {
    "id": 250,
    "text": '250. Obowiązująca w Polsce norma, która zawiera zasady budowy systemu okablowania strukturalnego, specyfikację parametrów kabli oraz procedury testowania, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'EN 50167'}, {'id': 'B', 'text': 'EN 50169'}, {'id': 'C', 'text': 'PN-EN 50173'}, {'id': 'D', 'text': 'PN-EN 50310'}],
    "correctAnswer": 'C'
  },
  {
    "id": 251,
    "text": '251. Wskaż ostatni możliwy do wykorzystania adres IP przeznaczony do adresacji hosta w podsieci 196.10.20.0/26.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '196.10.20.0'}, {'id': 'B', 'text': '196.10.20.1'}, {'id': 'C', 'text': '196.10.20.62'}, {'id': 'D', 'text': '196.10.20.63'}],
    "correctAnswer": 'C'
  },
  {
    "id": 252,
    "text": '252. Na komputerze SERWER_2 istnieje folder o nazwie C:\\egzamin, w którym przechowywane są foldery macierzyste kont użytkowników o określonym loginie. Folder egzamin udostępniono jako udział ukryty. Która ścieżka dostępu do folderu macierzystego jest poprawna?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '\\\\SERWER_2\\\\(egzamin\\)\\%USERNAME%'}, {'id': 'B', 'text': '\\\\SERWER_2\\egzamin\\(\\%\\)USERNAME%'}, {'id': 'C', 'text': '\\\\SERWER_2\\$egzamin\\%USERNAME%'}, {'id': 'D', 'text': '\\\\SERWER_2\\egzamin$\\%USERNAME%'}],
    "correctAnswer": 'D'
  },
  {
    "id": 253,
    "text": '253. Kopię danych w systemie Linux można wykonać za pomocą polecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dd'}, {'id': 'B', 'text': 'tac'}, {'id': 'C', 'text': 'split'}, {'id': 'D', 'text': 'restore'}],
    "correctAnswer": 'A'
  },
  {
    "id": 254,
    "text": '254. Zastosowanie którego urządzenia w sieci komputerowej nie zmieni liczby domen kolizyjnych?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Mostu (ang. Bridge)'}, {'id': 'B', 'text': 'Rutera (ang. Router)'}, {'id': 'C', 'text': 'Przełącznika (ang. Switch)'}, {'id': 'D', 'text': 'Koncentratora (ang. Hub)'}],
    "correctAnswer": 'D'
  },
  {
    "id": 255,
    "text": '255. Przed rozpoczęciem modernizacji komputera osobistego, polegającej na dodaniu nowych modułów pamięci RAM, należy sprawdzić',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'model pamięci RAM, maksymalną pojemność i liczbę modułów obsługiwanych przez płytę główną'}, {'id': 'B', 'text': 'pojemność i rodzaj interfejsu dysku twardego oraz rodzaj gniazda zainstalowanej pamięci RAM'}, {'id': 'C', 'text': 'producenta pamięci RAM oraz interfejsy zewnętrzne zainstalowanej płyty głównej'}, {'id': 'D', 'text': 'gniazdo interfejsu karty graficznej oraz moc zainstalowanego zasilacza'}],
    "correctAnswer": 'A'
  },
  {
    "id": 256,
    "text": '256. Do aktualizacji systemów Linux można wykorzystać programy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'cron i mount'}, {'id': 'B', 'text': 'defrag i YaST'}, {'id': 'C', 'text': 'apt-get i zypper'}, {'id': 'D', 'text': 'superPI i chmod'}],
    "correctAnswer": 'C'
  },
  {
    "id": 257,
    "text": '257. W przedstawionej tabeli kompatybilne podzespoły są oznaczone numerami',
    "image": 'ee08/257.jpg',
    "answers": [{'id': 'A', 'text': '1, 3 i 5'}, {'id': 'B', 'text': '1, 4 i 6'}, {'id': 'C', 'text': '2, 4 i 5'}, {'id': 'D', 'text': '2, 4 i 6'}],
    "correctAnswer": 'C'
  },
  {
    "id": 258,
    "text": '258. Interfejsem umożliwiającym przesyłanie danych pomiędzy płytą główną, a urządzeniem zewnętrznym, bez równoczesnego zasilenia urządzenia poprzez ten interfejs, jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'PCI'}, {'id': 'B', 'text': 'USB'}, {'id': 'C', 'text': 'PCIe'}, {'id': 'D', 'text': 'SATA'}],
    "correctAnswer": 'D'
  },
  {
    "id": 259,
    "text": '259. Zachowaniem asertywnym jest między innymi',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zaniżanie własnej samooceny.'}, {'id': 'B', 'text': 'duża podatność na naciski i manipulacje.'}, {'id': 'C', 'text': 'brak umiejętności kontrolowania własnych emocji.'}, {'id': 'D', 'text': 'umiejętność odmawiania innym w kulturalny sposób'}],
    "correctAnswer": 'D'
  },
  {
    "id": 260,
    "text": '260. Na podstawie tabeli wskaż prawidłową kolejność etapów wykonania szkolnej sieci komputerowej.',
    "image": 'ee08/260.jpg',
    "answers": [{'id': 'A', 'text': '1, 2, 4, 5, 3, 6'}, {'id': 'B', 'text': '1, 3, 2, 4, 5, 6'}, {'id': 'C', 'text': '1, 5, 4, 2, 3, 6'}, {'id': 'D', 'text': '1, 5, 2, 3, 4, 6'}],
    "correctAnswer": 'C'
  },
  {
    "id": 261,
    "text": '261. W przypadku, gdy ruter jest urządzeniem brzegowym dwóch domen kolizyjnych, jego rolą jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'tłumaczenie nazw mnemonicznych na adresy MAC.'}, {'id': 'B', 'text': 'całkowite wyeliminowanie kolizji w każdej z domen.'}, {'id': 'C', 'text': 'przekazywanie pakietów TCP/IP z sieci źródłowej do docelowej.'}, {'id': 'D', 'text': 'przetwarzanie przesyłanych danych między domenami do ich postaci kanonicznej.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 262,
    "text": '262. Którą czynność należy wykonać, aby zamienić profil mobilny na profil obowiązkowy użytkownika?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Usunąć plik NTUSER.DAT'}, {'id': 'B', 'text': 'Usunąć plik NTUSER.MAN'}, {'id': 'C', 'text': 'Zmienić rozszerzenie pliku NTUSER z MAN na DAT'}, {'id': 'D', 'text': 'Zmienić rozszerzenie pliku NTUSER z DAT na MAN'}],
    "correctAnswer": 'D'
  },
  {
    "id": 263,
    "text": '263. Które ze zdań jest prawdziwe dla przedstawionej konfiguracji usługi DHCP w systemie Linux?',
    "image": 'ee08/263.jpg',
    "answers": [{'id': 'A', 'text': 'Adres IP 176.16.20.0 jest zamieniany na nazwę main.'}, {'id': 'B', 'text': 'Karcie sieciowej komputera main przypisany jest adres IP 39:12:86:07:55:00.'}, {'id': 'C', 'text': 'Komputerom są przydzielane adresy IP z zakresu 176.16.20.50 ÷ 176.16.20.250.'}, {'id': 'D', 'text': 'Komputerom są przydzielane adresy IP z zakresu 176.16.20.251 ÷ 255.255.255.0.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 264,
    "text": '264. Kontrolne badanie profilaktyczne, przeprowadzane na podstawie skierowania od pracodawcy, dotyczy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'osoby przyjmowanej do pracy'}, {'id': 'B', 'text': 'każdego pracownika, co 3 lata, niezależnie od rodzaju wykonywanej pracy'}, {'id': 'C', 'text': 'pracownika, którego niezdolność do pracy z powodu choroby trwała ponad 30 dn'}, {'id': 'D', 'text': 'pracownika młodocianego kierowanego na praktyki zawodowe i zajęcia praktyczne'}],
    "correctAnswer": 'C'
  },
  {
    "id": 265,
    "text": '265. Zgodnie z tabelą z dokumentacji technicznej gry komputerowej wymagana wielkość pliku wymiany wynosi',
    "image": 'ee08/265.jpg',
    "answers": [{'id': 'A', 'text': '1 GB'}, {'id': 'B', 'text': '2 GB'}, {'id': 'C', 'text': '8 GB'}, {'id': 'D', 'text': '256 MB'}],
    "correctAnswer": 'A'
  },
  {
    "id": 266,
    "text": '266. Po wydaniu przedstawionego polecenia systemu Windows, wartość 11 zostanie ustawiona dla',
    "image": 'ee08/266.jpg',
    "answers": [{'id': 'A', 'text': 'maksymalnej liczby dni ważności konta.'}, {'id': 'B', 'text': 'minimalnej liczby znaków w hasłach użytkowników.'}, {'id': 'C', 'text': 'maksymalnej liczby dni między zmianami haseł użytkowników.'}, {'id': 'D', 'text': 'minimalnej liczby minut, przez które użytkownik może być zalogowany.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 267,
    "text": '267. Który protokół jest wykorzystywany przez polecenie ping?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IPX'}, {'id': 'B', 'text': 'FTP'}, {'id': 'C', 'text': 'ICMP'}, {'id': 'D', 'text': 'SMTP'}],
    "correctAnswer": 'C'
  },
  {
    "id": 268,
    "text": '268. Na rysunku przedstawiono konfigurację urządzenia, z której wynika, że',
    "image": 'ee08/268.jpg',
    "answers": [{'id': 'A', 'text': 'utworzono dwa nowe VLANy: ID13, ID48'}, {'id': 'B', 'text': 'do VLANu z ID48 przypisano wszystkie porty'}, {'id': 'C', 'text': 'utworzono trzy nowe VLANy: ID1, ID13, ID48'}, {'id': 'D', 'text': 'VLAN z ID48 jest skonfigurowany jako zarządzalny'}],
    "correctAnswer": 'A'
  },
  {
    "id": 269,
    "text": '269. Ataki polegające na podstępnym wyłudzaniu od użytkownika jego poufnych danych osobowych lub informacji, poprzez podszywanie się pod inną osobę lub instytucję, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'DDoS'}, {'id': 'B', 'text': 'phishing'}, {'id': 'C', 'text': 'brute force'}, {'id': 'D', 'text': 'SYN flooding'}],
    "correctAnswer": 'B'
  },
  {
    "id": 270,
    "text": '270. Na rysunku przedstawiono zakończenie kabla',
    "image": 'ee08/270.jpg',
    "answers": [{'id': 'A', 'text': 'typu skrętka.'}, {'id': 'B', 'text': 'telefonicznego'}, {'id': 'C', 'text': 'koncentrycznego'}, {'id': 'D', 'text': 'światłowodowego'}],
    "correctAnswer": 'D'
  },
  {
    "id": 271,
    "text": '271. Drukarka, której schemat przedstawiono na rysunku, ma nierównomiernie podawany toner na bęben. W tym przypadku należy wymienić wałek magnetyczny, oznaczony cyfrą',
    "image": 'ee08/271.jpg',
    "answers": [{'id': 'A', 'text': '1'}, {'id': 'B', 'text': '2'}, {'id': 'C', 'text': '3'}, {'id': 'D', 'text': '4'}],
    "correctAnswer": 'B'
  },
  {
    "id": 272,
    "text": '272. Licencja wolnego i otwartego oprogramowania to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Trial'}, {'id': 'B', 'text': 'OEM'}, {'id': 'C', 'text': 'Adware'}, {'id': 'D', 'text': 'GNU GPL'}],
    "correctAnswer": 'D'
  },
  {
    "id": 273,
    "text": '273. Złącze uniwersalne: 2,5 mm / 125 mm\nDługość fali: 850 kalibrowane, 1300, 1310, 1490, 1550 nm\nWyświetlacz 4-cyfrowy umożliwia precyzyjne pomiary w dBm, dB, i UW\nIntuicyjna obsługa 2-przyciskowa\nZakres pomiarowy: od +5 do -60 dBm\nDokładność: +/- 0,15 dB\nRozdzielczość: 0,01 dBm\nLiniowość: +/- 0,20 dB\nUrządzenie przedstawione na rysunku wraz ze specyfikacją techniczną można wykorzystać do pomiarów okablowania',
    "image": 'ee08/273.jpg',
    "answers": [{'id': 'A', 'text': 'telefonicznego.'}, {'id': 'B', 'text': 'skrętki kat. 5e/6.'}, {'id': 'C', 'text': 'koncentrycznego.'}, {'id': 'D', 'text': 'światłowodowego.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 274,
    "text": '274. Jeżeli przy uruchamianiu komputera procedura POST zasygnalizuje błąd odczytu/zapisu pamięci CMOS, to należy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'przywrócić ustawienia fabryczne BIOS Setup.'}, {'id': 'B', 'text': 'zaprogramować pamięć PROM płyty głównej.'}, {'id': 'C', 'text': 'wymienić baterię układu na płycie głównej.'}, {'id': 'D', 'text': 'oczyścić styki modułu pamięci RAM.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 275,
    "text": '275. SuperPi to program wykorzystywany do sprawdzenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wydajności procesorów.'}, {'id': 'B', 'text': 'wydajności dysków twardych.'}, {'id': 'C', 'text': 'obciążenia i wydajności kart graficznych.'}, {'id': 'D', 'text': 'ilości niewykorzystanej pamięci operacyjnej RAM.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 276,
    "text": '276. Rysunek przedstawia panel konfiguracyjny bezprzewodowego urządzenia dostępowego, który umożliwia',
    "image": 'ee08/276.jpg',
    "answers": [{'id': 'A', 'text': 'nadanie nazwy hosta.'}, {'id': 'B', 'text': 'przypisanie maski podsieci.'}, {'id': 'C', 'text': 'konfigurację serwera DHCP.'}, {'id': 'D', 'text': 'przypisanie adresów MAC kart sieciowych.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 277,
    "text": '277. Wydane na filmie polecenia wykonane w systemie Windows spowodują',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'usunięcie pliku tekstowego test.txt z katalogu C:\\egzamin'}, {'id': 'B', 'text': 'zmianę uprawnień konta administrator do katalogu C:\\egzamin na r-x'}, {'id': 'C', 'text': 'utworzenie i ukrycie pliku tekstowego zawierającego listę plików z katalogu C:\\egzamin'}, {'id': 'D', 'text': 'ustawienie atrybutu zabezpieczającego przed przypadkowym usunięciem katalogu C:\\egzamin'}],
    "correctAnswer": 'C'
  },
  {
    "id": 278,
    "text": '278. Przedstawione na rysunku urządzenie służy do',
    "image": 'ee08/278.jpg',
    "answers": [{'id': 'A', 'text': 'przechwytywania i nagrywania pakietów danych w sieciach komputerowych.'}, {'id': 'B', 'text': 'zamiany sygnału pochodzącego z okablowania miedzianego na sygnał optyczny.'}, {'id': 'C', 'text': 'przekazywania ramki między segmentami sieci z doborem portu, na który jest przekazywana.'}, {'id': 'D', 'text': 'wytworzenia sygnału dla kabla koncentrycznego, wykorzystując wzmocniony sygnał ze skrętki.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 279,
    "text": '279. W systemie operacyjnym Ubuntu konto użytkownika student można usunąć za pomocą polecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'userdel student'}, {'id': 'B', 'text': 'del user student'}, {'id': 'C', 'text': 'net user student /del'}, {'id': 'D', 'text': 'user net student /del'}],
    "correctAnswer": 'A'
  },
  {
    "id": 280,
    "text": '280. Który typ fizycznej topologii sieci komputerowej przedstawiono na rysunku?',
    "image": 'ee08/280.jpg',
    "answers": [{'id': 'A', 'text': 'Siatki.'}, {'id': 'B', 'text': 'Gwiazdy.'}, {'id': 'C', 'text': 'Magistrali.'}, {'id': 'D', 'text': 'Pierścienia.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 281,
    "text": '281. Serwer Windows z zainstalowaną i skonfigurowaną usługą Active Directory, kontrolujący uwierzytelnianie i autoryzację użytkowników domenowych nosi nazwę',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'serwera DHCP.'}, {'id': 'B', 'text': 'serwera WWW.'}, {'id': 'C', 'text': 'kontrolera portów.'}, {'id': 'D', 'text': 'kontrolera domeny.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 282,
    "text": '282. Wykonanie polecenia net localgroup w systemie Windows spowoduje',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'defragmentację plików.'}, {'id': 'B', 'text': 'skompresowanie wszystkich plików.'}, {'id': 'C', 'text': 'utworzenie dowolnej grupy użytkowników.'}, {'id': 'D', 'text': 'wyświetlenie lokalnych grup użytkowników.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 283,
    "text": '283. Aby w sieci komputerowej była możliwa praca w wydzielonych logicznie mniejszych podsieciach, należy w przełączniku dokonać konfiguracji sieci',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'WLAN'}, {'id': 'B', 'text': 'VLAN'}, {'id': 'C', 'text': 'WAN'}, {'id': 'D', 'text': 'VPN'}],
    "correctAnswer": 'B'
  },
  {
    "id": 284,
    "text": '284. Na podstawie przedstawionej na ilustracji konfiguracji kart sieciowych można stwierdzić, że',
    "image": 'ee08/284.jpg',
    "answers": [{'id': 'A', 'text': 'karta bezprzewodowa ma nazwę Net11'}, {'id': 'B', 'text': 'karta przewodowa ma adres MAC 8C-70-5A-F3-75-BC'}, {'id': 'C', 'text': 'wszystkie karty uzyskują adresy poprzez protokół DHCP'}, {'id': 'D', 'text': 'interfejs Bluetooth ma przydzielony adres IPv4 192.168.0.102'}],
    "correctAnswer": 'C'
  },
  {
    "id": 285,
    "text": '285. Które zmiany w funkcjonowaniu organizmu w płaszczyźnie fizjologicznej może powodować stres?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Rozdrażnienie.'}, {'id': 'B', 'text': 'Odczuwanie lęku.'}, {'id': 'C', 'text': 'Przyśpieszony puls.'}, {'id': 'D', 'text': 'Poczucie osamotnienia.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 286,
    "text": '286. Ile par przewodów skrętki miedzianej kategorii 5e wykorzystuje się do transmisji danych w standardzie sieci Ethernet 100Base-TX?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '1'}, {'id': 'B', 'text': '2'}, {'id': 'C', 'text': '3'}, {'id': 'D', 'text': '4'}],
    "correctAnswer": 'B'
  },
  {
    "id": 287,
    "text": '287. Przedstawiony schemat obrazuje zasadę działania skanera',
    "image": 'ee08/287.jpg',
    "answers": [{'id': 'A', 'text': '2D'}, {'id': 'B', 'text': '3D'}, {'id': 'C', 'text': 'ręcznego'}, {'id': 'D', 'text': 'płaskiego'}],
    "correctAnswer": 'B'
  },
  {
    "id": 288,
    "text": '288. Poleceniem służącym do wyświetlania i modyfikacji tabel translacji adresów IP na adresy fizyczne jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'expand'}, {'id': 'B', 'text': 'path'}, {'id': 'C', 'text': 'mmc'}, {'id': 'D', 'text': 'arp'}],
    "correctAnswer": 'D'
  },
  {
    "id": 289,
    "text": '289. Do serwisu komputerowego dostarczono laptop z matrycą bardzo słabo wyświetlającą obraz. Ponadto obraz jest bardzo ciemny i widoczny tylko z bliska. Przyczyną usterki jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'pęknięta matryca.'}, {'id': 'B', 'text': 'uszkodzony inwerter.'}, {'id': 'C', 'text': 'uszkodzone gniazdo HDMI.'}, {'id': 'D', 'text': 'zerwane łącze między płytą główną a matrycą.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 290,
    "text": '290. Aby uzyskać maksymalną wydajność obliczeniową komputera, którego płyta główna jest przedstawiona na ilustracji, zaleca się',
    "image": 'ee08/290.jpg',
    "answers": [{'id': 'A', 'text': 'zastosowanie dysku SAS.'}, {'id': 'B', 'text': 'zastosowanie kontrolera RAID.'}, {'id': 'C', 'text': 'zainstalowanie dwóch procesorów.'}, {'id': 'D', 'text': 'zainstalowanie pamięci RAM we wszystkich gniazdach.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 291,
    "text": '291. Który port na przedstawionej płycie głównej umożliwia podłączenie zewnętrznego dysku poprzez interfejs e-SATA?',
    "image": 'ee08/291.jpg',
    "answers": [{'id': 'A', 'text': '1'}, {'id': 'B', 'text': '2'}, {'id': 'C', 'text': '3'}, {'id': 'D', 'text': '4'}],
    "correctAnswer": 'B'
  },
  {
    "id": 292,
    "text": '292. Do usuwania plików lub katalogów w systemie Linux służy polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'cat'}, {'id': 'B', 'text': 'tar'}, {'id': 'C', 'text': 'rm'}, {'id': 'D', 'text': 'ls'}],
    "correctAnswer": 'C'
  },
  {
    "id": 293,
    "text": '293. Na podstawie instrukcji przełącznika wskaż, która z opcji menu przywraca ustawienia fabryczne.',
    "image": 'ee08/293.jpg',
    "answers": [{'id': 'A', 'text': 'Reset System'}, {'id': 'B', 'text': 'Reboot Device'}, {'id': 'C', 'text': 'Firmware Upgrade'}, {'id': 'D', 'text': 'Save Configuration'}],
    "correctAnswer": 'A'
  },
  {
    "id": 294,
    "text": '294. Do podłączenia dysku wyposażonego w interfejs SAS należy zastosować',
    "image": 'ee08/294.jpg',
    "answers": [{'id': 'A', 'text': 'złącze 1'}, {'id': 'B', 'text': 'złącze 2'}, {'id': 'C', 'text': 'złącze 3'}, {'id': 'D', 'text': 'złącze 4'}],
    "correctAnswer": 'D'
  },
  {
    "id": 295,
    "text": '295. Przedstawione na ilustracji urządzenie można wykorzystać do pomiarów okablowania',
    "image": 'ee08/295.jpg',
    "answers": [{'id': 'A', 'text': 'koncentrycznego'}, {'id': 'B', 'text': 'światłowodowego'}, {'id': 'C', 'text': 'skrętki kategorii 5e/6'}, {'id': 'D', 'text': 'telefonicznego kategorii 3'}],
    "correctAnswer": 'B'
  },
  {
    "id": 296,
    "text": '296. Toner jest stosowany w drukarkach',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'igłowych'}, {'id': 'B', 'text': 'laserowych'}, {'id': 'C', 'text': 'sublimacyjnych'}, {'id': 'D', 'text': 'atramentowych'}],
    "correctAnswer": 'B'
  },
  {
    "id": 297,
    "text": '297. Odpowiednikiem maski 255.255.252.0 jest prefiks',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '/22'}, {'id': 'B', 'text': '/23'}, {'id': 'C', 'text': '/24'}, {'id': 'D', 'text': '/25'}],
    "correctAnswer": 'A'
  },
  {
    "id": 298,
    "text": '298. Parametrem opóźnienia określającym czas potrzebny do odczytania danych przez kontroler pamięci od \nmomentu wysłania żądania jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'CAS Latency (CL)'}, {'id': 'B', 'text': 'RAS Precharge (RP)'}, {'id': 'C', 'text': 'Command Rate (CR)'}, {'id': 'D', 'text': 'Serial presence detect (SPD)'}],
    "correctAnswer": 'A'
  },
  {
    "id": 299,
    "text": '299. Jedną z przyczyn pokazanego na ilustracji problemu z wydrukiem z drukarki laserowej może być',
    "image": 'ee08/299.jpg',
    "answers": [{'id': 'A', 'text': 'brak tonera w kasecie'}, {'id': 'B', 'text': 'uszkodzony podajnik papieru'}, {'id': 'C', 'text': 'uszkodzony bęben światłoczuły'}, {'id': 'D', 'text': 'zaschnięty tusz na głowicy drukującej'}],
    "correctAnswer": 'C'
  },
  {
    "id": 300,
    "text": '300. Przedstawiony opis dotyczy',
    "image": 'ee08/300.jpg',
    "answers": [{'id': 'A', 'text': 'podłączenia zasilacza awaryjnego'}, {'id': 'B', 'text': 'montażu procesora na płycie głównej'}, {'id': 'C', 'text': 'podłączania zasilania do płyty głównej'}, {'id': 'D', 'text': 'procedury wymiany radiatora z wentylatorem'}],
    "correctAnswer": 'C'
  },
  {
    "id": 301,
    "text": '301. Na którym rysunku przedstawiono topologię sieci typu rozszerzona gwiazda?',
    "image": 'ee08/301.jpg',
    "answers": [{'id': 'A', 'text': 'Na rysunku 1'}, {'id': 'B', 'text': 'Na rysunku 2'}, {'id': 'C', 'text': 'Na rysunku 3'}, {'id': 'D', 'text': 'Na rysunku 4'}],
    "correctAnswer": 'D'
  },
  {
    "id": 302,
    "text": '302. W systemie Windows profil użytkownika tworzony podczas pierwszego logowania do komputera i przechowywany na lokalnym dysku twardym komputera, charakteryzujący się tym, że każda jego modyfikacja dotyczy jedynie komputera, na którym została ona wprowadzona, to profil',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'lokalny'}, {'id': 'B', 'text': 'mobilny'}, {'id': 'C', 'text': 'tymczasowy'}, {'id': 'D', 'text': 'obowiązkowy'}],
    "correctAnswer": 'A'
  },
  {
    "id": 303,
    "text": '303. Symbolem literowym P oznaczana jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'moc'}, {'id': 'B', 'text': 'rezystancja'}, {'id': 'C', 'text': 'indukcyjność'}, {'id': 'D', 'text': 'częstotliwość'}],
    "correctAnswer": 'A'
  },
  {
    "id": 304,
    "text": '304. Co stanie się w wyniku wykonania przedstawionego skryptu?',
    "image": 'ee08/304.jpg',
    "answers": [{'id': 'A', 'text': 'Zostanie wpisany tekst "ola.txt" do pliku ala.txt'}, {'id': 'B', 'text': 'Zostanie wpisany tekst "ala.txt" do pliku ola.txt'}, {'id': 'C', 'text': 'Zawartość pliku ola.txt zostanie skopiowana do pliku ala.txt'}, {'id': 'D', 'text': 'Zawartość pliku ala.txt zostanie skopiowana do pliku ola.txt'}],
    "correctAnswer": 'A'
  },
  {
    "id": 305,
    "text": '305. W filmie przedstawiono adapter',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'DisplayPort – HDMI'}, {'id': 'B', 'text': 'DisplayPort – DVI'}, {'id': 'C', 'text': 'HDMI – FireWire'}, {'id': 'D', 'text': 'HDMI – D-Sub'}],
    "correctAnswer": 'A'
  },
  {
    "id": 306,
    "text": '306. Aby, za pomocą polecenia ping, było możliwe sprawdzenie poprawności komunikacji z innymi urządzeniami pracującymi w sieci, należy w zaporze Windows skonfigurować reguły dotyczące protokołu',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'UDP'}, {'id': 'B', 'text': 'TCP'}, {'id': 'C', 'text': 'ICMP'}, {'id': 'D', 'text': 'IGMP'}],
    "correctAnswer": 'C'
  },
  {
    "id": 307,
    "text": '307. Które urządzenie jest przedstawione na ilustracji?',
    "image": 'ee08/307.jpg',
    "answers": [{'id': 'A', 'text': 'przełącznik'}, {'id': 'B', 'text': 'koncentrator'}, {'id': 'C', 'text': 'zasilacz PoE'}, {'id': 'D', 'text': 'punkt dostępowy'}],
    "correctAnswer": 'D'
  },
  {
    "id": 308,
    "text": '308. Centralny punkt infrastruktury sieciowej, z którego rozprowadzane jest okablowanie szkieletowe, to punkt',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'pośredni'}, {'id': 'B', 'text': 'abonencki'}, {'id': 'C', 'text': 'dostępowy'}, {'id': 'D', 'text': 'dystrybucyjny'}],
    "correctAnswer": 'D'
  },
  {
    "id": 309,
    "text": '309. Używanie na platformie do zarządzania projektem informatycznym komunikatów pisemnych w celu porozumiewania się szefa ze współpracownikami spowoduje',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'brak odpowiedzialności za realizowane zadania'}, {'id': 'B', 'text': 'trudności w komunikacji z dużą grupą pracowników'}, {'id': 'C', 'text': 'lepszy przepływ informacji niż tradycyjna komunikacja ustna'}, {'id': 'D', 'text': 'opóźnienie terminu realizacji projektu z powodu niewiedzy pracowników'}],
    "correctAnswer": 'C'
  },
  {
    "id": 310,
    "text": '310. Którego polecenia, z odpowiednimi parametrami należy użyć, aby ustawić w systemach operacyjnych rodziny Windows właściwość pliku na tylko do odczytu?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'set'}, {'id': 'B', 'text': 'attrib'}, {'id': 'C', 'text': 'ftype'}, {'id': 'D', 'text': 'chmod'}],
    "correctAnswer": 'B'
  },
  {
    "id": 311,
    "text": '311. Zgodnie z Kodeksem pracy do obowiązków pracownika w zakresie bezpieczeństwa i higieny pracy należy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'odpowiedzialność za stan BHP w zakładzie pracy'}, {'id': 'B', 'text': 'dbanie o właściwy stan maszyn, urządzeń, narzędzi i sprzętu'}, {'id': 'C', 'text': 'prowadzenie spójnej polityki zapobiegania wypadkom przy pracy'}, {'id': 'D', 'text': 'zapewnianie wykonywania zaleceń społecznego inspektora pracy'}],
    "correctAnswer": 'B'
  },
  {
    "id": 312,
    "text": '312. Którym poleceniem w systemie Linux można przypisać adres IP i maskę podsieci dla interfejsu eth0?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ipconfig eth0 172.16.31.1 mask 255.255.0.0'}, {'id': 'B', 'text': 'ifconfig eth0 172.16.31.1 mask 255.255.0.0'}, {'id': 'C', 'text': 'ifconfig eth0 172.16.31.1 netmask 255.255.0.0'}, {'id': 'D', 'text': 'ipconfig eth0 172.16.31.1 netmask 255.255.0.0'}],
    "correctAnswer": 'C'
  },
  {
    "id": 313,
    "text": '313. Który z wymienionych mechanizmów zapewni najwyższy poziom bezpieczeństwa sieci bezprzewodowych standardu 802.11n?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'WPS (Wi-Fi Protected Setup)'}, {'id': 'B', 'text': 'WPA (Wi-Fi Protected Access)'}, {'id': 'C', 'text': 'WEP (Wired Equivalent Privacy)'}, {'id': 'D', 'text': 'WPA2 (Wi-Fi Protected Access II)'}],
    "correctAnswer": 'D'
  },
  {
    "id": 314,
    "text": '314. Elementem elektronicznym zdolnym do gromadzenia ładunku elektrycznego jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dioda'}, {'id': 'B', 'text': 'rezystor'}, {'id': 'C', 'text': 'tranzystor'}, {'id': 'D', 'text': 'kondensator'}],
    "correctAnswer": 'D'
  },
  {
    "id": 315,
    "text": '315. Która topologia fizyczna charakteryzuje się nadmiarowymi połączeniami pomiędzy urządzeniami sieci?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'siatki'}, {'id': 'B', 'text': 'gwiazdy'}, {'id': 'C', 'text': 'magistrali'}, {'id': 'D', 'text': 'pierścienia'}],
    "correctAnswer": 'A'
  },
  {
    "id": 316,
    "text": '316. Programem umożliwiającym wydzielenie logicznych części dysku twardego w systemie GNU/Linux jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'fdisk'}, {'id': 'B', 'text': 'format'}, {'id': 'C', 'text': 'convert'}, {'id': 'D', 'text': 'truncate'}],
    "correctAnswer": 'A'
  },
  {
    "id": 317,
    "text": '317. Ile bitów przeznaczonych jest na adresację hostów w sieci z maską 255.255.255.224?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '3 bity'}, {'id': 'B', 'text': '4 bity'}, {'id': 'C', 'text': '5 bitów'}, {'id': 'D', 'text': '6 bitów'}],
    "correctAnswer": 'C'
  },
  {
    "id": 318,
    "text": '318. Wskaż technologię wykorzystywaną do udostępniania Internetu wraz z usługą telewizji kablowej, w której jako medium transmisyjne jest wykorzystywany światłowód oraz kabel koncentryczny.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'PLC'}, {'id': 'B', 'text': 'HFC'}, {'id': 'C', 'text': 'xDSL'}, {'id': 'D', 'text': 'GPRS'}],
    "correctAnswer": 'B'
  },
  {
    "id": 319,
    "text": '319. Protokołem aplikacyjnym używanym przez WWW jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'SFTP'}, {'id': 'B', 'text': 'LAGP'}, {'id': 'C', 'text': 'IPSec'}, {'id': 'D', 'text': 'HTTPS'}],
    "correctAnswer": 'D'
  },
  {
    "id": 320,
    "text": '320. W systemie operacyjnym Windows, aby włączyć lub wyłączyć usługi, można posłużyć się przystawką',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dcpol.msc'}, {'id': 'B', 'text': 'dfsgui.msc'}, {'id': 'C', 'text': 'usrmgr.msc'}, {'id': 'D', 'text': 'services.msc'}],
    "correctAnswer": 'D'
  },
  {
    "id": 321,
    "text": '321. Który symbol oznacza przełącznik?',
    "image": 'ee08/321.jpg',
    "answers": [{'id': 'A', 'text': 'symbol 1'}, {'id': 'B', 'text': 'symbol 2'}, {'id': 'C', 'text': 'symbol 3'}, {'id': 'D', 'text': 'symbol 4'}],
    "correctAnswer": 'D'
  },
  {
    "id": 322,
    "text": '322. Konfigurację interfejsu sieciowego w systemie Linux można wykonać wykorzystując plik',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '/etc/hosts'}, {'id': 'B', 'text': '/etc/host.conf'}, {'id': 'C', 'text': '/etc/resolv.conf'}, {'id': 'D', 'text': '/etc/network/interfaces'}],
    "correctAnswer": 'D'
  },
  {
    "id": 323,
    "text": '323. Wskaż polecenie, którego wynik przedstawiono na rysunku.',
    "image": 'ee08/323.jpg',
    "answers": [{'id': 'A', 'text': 'arp'}, {'id': 'B', 'text': 'route'}, {'id': 'C', 'text': 'tracert'}, {'id': 'D', 'text': 'netstat'}],
    "correctAnswer": 'D'
  },
  {
    "id": 324,
    "text": '324. Wskaż materiał eksploatacyjny typowy dla drukarek żelowych.',
    "image": 'ee08/324.jpg',
    "answers": [{'id': 'A', 'text': 'materiał 1'}, {'id': 'B', 'text': 'materiał 2'}, {'id': 'C', 'text': 'materiał 3'}, {'id': 'D', 'text': 'materiał 4'}],
    "correctAnswer": 'C'
  },
  {
    "id": 325,
    "text": '325. Poleceniem służącym do śledzenia trasy pakietów przesyłanych z komputera do punktu docelowego w sieci\nkomputerowej jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ping'}, {'id': 'B', 'text': 'route'}, {'id': 'C', 'text': 'tracert'}, {'id': 'D', 'text': 'nslookup'}],
    "correctAnswer": 'C'
  },
  {
    "id": 326,
    "text": '326. Wymiana uszkodzonych kondensatorów karty graficznej możliwa jest przy pomocy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'żywicy epoksydowej'}, {'id': 'B', 'text': 'kleju cyjanoakrylowego'}, {'id': 'C', 'text': 'lutownicy z cyną i kalafonią'}, {'id': 'D', 'text': 'wkrętaka krzyżowego i opaski zaciskowej'}],
    "correctAnswer": 'C'
  },
  {
    "id": 327,
    "text": '327. Urządzeniem, które zapewnia ochronę przed atakami z sieci i może pełnić inne dodatkowe funkcje, jak np. szyfrowanie przesyłanych danych czy automatyczne powiadamianie administratora systemu o włamaniu, jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'regenerator'}, {'id': 'B', 'text': 'koncentrator'}, {'id': 'C', 'text': 'punkt dostępowy'}, {'id': 'D', 'text': 'firewall sprzętowy'}],
    "correctAnswer": 'D'
  },
  {
    "id": 328,
    "text": '328. Układy sekwencyjne zbudowane z zespołu przerzutników, najczęściej synchronicznych typu D, służące do przechowywania danych, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'bramki'}, {'id': 'B', 'text': 'kodery'}, {'id': 'C', 'text': 'rejestry'}, {'id': 'D', 'text': 'dekodery'}],
    "correctAnswer": 'C'
  },
  {
    "id": 329,
    "text": '329. Sieć o adresie 172.16.0.0/16 została podzielona na podsieci o masce 18 bitowej. Wskaż adresy tych podsieci',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '172.16.0.0, 172.16.64.0, 172.16.128.0, 172.16.192.0'}, {'id': 'B', 'text': '172.16.0.0, 172.16.0.64, 172.16.0.128, 172.16.0.192'}, {'id': 'C', 'text': '172.16.64.0, 172.16.0.128, 172.16.192.0, 172.16.0.255'}, {'id': 'D', 'text': '172.16.64.0, 172.16.64.64, 172.16.64.128, 172.16.64.192'}],
    "correctAnswer": 'A'
  },
  {
    "id": 330,
    "text": '330. Które zadanie realizuje protokół ARP (Address Resolution Protocol)?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Ustala adres MAC na podstawie adresu IP'}, {'id': 'B', 'text': 'Przesyła informacje zwrotne o problemach z siecią'}, {'id': 'C', 'text': 'Kontroluje przepływ pakietów wewnątrz systemów autonomicznych'}, {'id': 'D', 'text': 'Zarządza grupami multicastowymi w sieciach opartych na protokole IP'}],
    "correctAnswer": 'A'
  },
  {
    "id": 331,
    "text": '331. Jak nazywa się rodzaj licencji, na której program jest w pełni funkcjonalny, ale można go uruchomić jedynie\nokreśloną, niewielką liczbę razy od momentu instalacji?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Donationware'}, {'id': 'B', 'text': 'Adware'}, {'id': 'C', 'text': 'Trial'}, {'id': 'D', 'text': 'Box'}],
    "correctAnswer": 'C'
  },
  {
    "id": 332,
    "text": '332. Który parametr polecenia ipconfig w systemie Windows powoduje odnowienie konfiguracji adresów IP?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '/renew'}, {'id': 'B', 'text': '/release'}, {'id': 'C', 'text': '/flushdns'}, {'id': 'D', 'text': '/displaydns'}],
    "correctAnswer": 'A'
  },
  {
    "id": 333,
    "text": '333. Na przedstawionym schemacie blokowym element płyty głównej odpowiedzialny za wymianę danych między\nmikroprocesorem a pamięcią operacyjną RAM oraz magistralą karty graficznej jest na rysunku oznaczony\nnumerem',
    "image": 'ee08/333.jpg',
    "answers": [{'id': 'A', 'text': '6'}, {'id': 'B', 'text': '5'}, {'id': 'C', 'text': '4'}, {'id': 'D', 'text': '3'}],
    "correctAnswer": 'A'
  },
  {
    "id": 334,
    "text": '334. Protokół, który tłumaczy nazwy domenowe na adresy IP, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'DNS'}, {'id': 'B', 'text': 'ARP'}, {'id': 'C', 'text': 'ICMP'}, {'id': 'D', 'text': 'DHCP'}],
    "correctAnswer": 'A'
  },
  {
    "id": 335,
    "text": '335. Do którego rodzaju wtyków jest stosowana przedstawiona na rysunku zaciskarka?',
    "image": 'ee08/335.jpg',
    "answers": [{'id': 'A', 'text': 'BNC'}, {'id': 'B', 'text': '8P8C'}, {'id': 'C', 'text': '6P2C'}, {'id': 'D', 'text': 'SC/APC'}],
    "correctAnswer": 'A'
  },
  {
    "id": 336,
    "text": '336. Na rysunkach technicznych instalacji sieci komputerowej wraz z dedykowaną jej instalacją elektryczną\nsymbolem przedstawionym na rysunku oznacza się gniazdo',
    "image": 'ee08/336.jpg',
    "answers": [{'id': 'A', 'text': 'telefoniczne'}, {'id': 'B', 'text': 'ethernetowe'}, {'id': 'C', 'text': 'elektryczne bez styku ochronnego'}, {'id': 'D', 'text': 'elektryczne ze stykiem ochronnym'}],
    "correctAnswer": 'D'
  },
  {
    "id": 337,
    "text": '337. Wskaż typ złącza przedstawionej karty graficznej.',
    "image": 'ee08/337.jpg',
    "answers": [{'id': 'A', 'text': 'AGP x2'}, {'id': 'B', 'text': 'AGP x8'}, {'id': 'C', 'text': 'PCI-E x4'}, {'id': 'D', 'text': 'PCI-E x16'}],
    "correctAnswer": 'D'
  },
  {
    "id": 338,
    "text": '338. Która przystawka w systemie Windows umożliwia sprawdzenie stanu sprzętu, aktualizację sterowników oraz\nrozwiązanie konfliktów urządzeń?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'services.msc'}, {'id': 'B', 'text': 'eventvwr.msc'}, {'id': 'C', 'text': 'perfmon.msc'}, {'id': 'D', 'text': 'devmgmt.msc'}],
    "correctAnswer": 'D'
  },
  {
    "id": 339,
    "text": '339. Które medium transmisyjne zapewnia najmniejsze narażenie na zakłócenia elektromagnetyczne\nprzesyłanego sygnału?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Kabel światłowodowy'}, {'id': 'B', 'text': 'Czteroparowy kabel FTP'}, {'id': 'C', 'text': 'Gruby kabel koncentryczny'}, {'id': 'D', 'text': 'Cienki kabel koncentryczny'}],
    "correctAnswer": 'A'
  },
  {
    "id": 340,
    "text": '340. Programem służącym do utworzenia archiwum danych w systemie Linux jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'compact'}, {'id': 'B', 'text': 'lzma'}, {'id': 'C', 'text': 'fsck'}, {'id': 'D', 'text': 'tar'}],
    "correctAnswer": 'D'
  },
  {
    "id": 341,
    "text": '341. Analiza wyświetlonych przez program danych, pozwala stwierdzić, że',
    "image": 'ee08/341.jpg',
    "answers": [{'id': 'A', 'text': 'jeden dysk twardy został podzielony na 6 partycji podstawowych'}, {'id': 'B', 'text': 'zamontowano trzy dyski twarde oznaczone sda1, sda2 oraz sda3'}, {'id': 'C', 'text': 'partycja rozszerzona ma wielkość 24,79 GiB'}, {'id': 'D', 'text': 'partycja wymiany zajmuje 2 GiB'}],
    "correctAnswer": 'D'
  },
  {
    "id": 342,
    "text": '342. Które z przedstawionych źródeł stresu jest zaliczane do czynników fizycznych?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Wahania temperatury otoczenia'}, {'id': 'B', 'text': 'Nadmiar zadań'}, {'id': 'C', 'text': 'Pośpiech'}, {'id': 'D', 'text': 'Mobbing'}],
    "correctAnswer": 'A'
  },
  {
    "id": 343,
    "text": '343. Woda jest środkiem gaśniczym, którego należy użyć podczas gaszenia pożaru',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'gazów palnych'}, {'id': 'B', 'text': 'mebli biurowych'}, {'id': 'C', 'text': 'pracującej drukarki'}, {'id': 'D', 'text': 'instalacji elektrycznej'}],
    "correctAnswer": 'B'
  },
  {
    "id": 344,
    "text": '344. Wskaż adres rozgłoszeniowy sieci, do której należy host o adresie 88.89.90.91/8',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '91.255.255.255'}, {'id': 'B', 'text': '88.255.255.255'}, {'id': 'C', 'text': '91.89.255.255'}, {'id': 'D', 'text': '88.89.255.255'}],
    "correctAnswer": 'B'
  },
  {
    "id": 345,
    "text": '345. Które porty rutera muszą być otwarte, aby użytkownicy sieci lokalnej mogli pobierać pliki z serwera FTP\ndziałającego w trybie aktywnym na domyślnych portach?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '20 i 21'}, {'id': 'B', 'text': '22 i 25'}, {'id': 'C', 'text': '80 i 443'}, {'id': 'D', 'text': '110 i 995'}],
    "correctAnswer": 'A'
  },
  {
    "id": 346,
    "text": '346. Aby uruchomić przedstawione narzędzie systemu Windows 10, należy w interpreterze poleceń użyć',
    "image": 'ee08/346.jpg',
    "answers": [{'id': 'A', 'text': 'control userpasswords2'}, {'id': 'B', 'text': 'show userpasswords'}, {'id': 'C', 'text': 'net localgroup'}, {'id': 'D', 'text': 'net users'}],
    "correctAnswer": 'A'
  },
  {
    "id": 347,
    "text": '347. Które słowo kluczowe należy wpisać w miejsce kropek, aby udostępnić folder Dane pod nazwą test?',
    "image": 'ee08/347.jpg',
    "answers": [{'id': 'A', 'text': 'use'}, {'id': 'B', 'text': 'view'}, {'id': 'C', 'text': 'share'}, {'id': 'D', 'text': 'connect'}],
    "correctAnswer": 'C'
  },
  {
    "id": 348,
    "text": '348. Metoda dostępu do medium CSMA/CA jest stosowana w sieci o standardzie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IEEE 802.1'}, {'id': 'B', 'text': 'IEEE 802.3'}, {'id': 'C', 'text': 'IEEE 802.8'}, {'id': 'D', 'text': 'IEEE 802.11'}],
    "correctAnswer": 'D'
  },
  {
    "id": 349,
    "text": '349. Zainstalowanie serwera stron internetowych w rodzinie systemów Windows Server umożliwia rola',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'usługi plików'}, {'id': 'B', 'text': 'serwera aplikacji'}, {'id': 'C', 'text': 'serwera sieci Web'}, {'id': 'D', 'text': 'usługi pulpitu zdalnego'}],
    "correctAnswer": 'C'
  },
  {
    "id": 350,
    "text": '350. Protokół komunikacyjny używany w sieciach komputerowych do obsługi odległego terminala w architekturze\nklient-serwer, który nie zapewnia bezpieczeństwa przesyłanych informacji i pracuje wyłącznie w trybie\ntekstowym, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Telnet'}, {'id': 'B', 'text': 'Secure Shell'}, {'id': 'C', 'text': 'Internet Protocol'}, {'id': 'D', 'text': 'Remote Desktop Protocol'}],
    "correctAnswer": 'A'
  },
  {
    "id": 351,
    "text": '351. Wskaż standard interfejsu stosowanego do przewodowego połączenia dwóch urządzeń',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'WiMAX'}, {'id': 'B', 'text': '802.11ac'}, {'id': 'C', 'text': 'IEEE 1394'}, {'id': 'D', 'text': 'IEEE 802.15.1'}],
    "correctAnswer": 'C'
  },
  {
    "id": 352,
    "text": '352. Podłączając drukarkę wyposażoną w złącze równoległe do komputera, który dysponuje tylko portami USB,\nnależy zastosować adapter',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'USB na LPT'}, {'id': 'B', 'text': 'USB na PS/2'}, {'id': 'C', 'text': 'USB na COM'}, {'id': 'D', 'text': 'USB na RS-232'}],
    "correctAnswer": 'A'
  },
  {
    "id": 353,
    "text": '353. Na serwerze DNS rekordem wskazującym serwer nazw, który jest tworzony automatycznie w momencie\nkonfigurowania strefy wyszukiwania do przodu jest rekord',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'A'}, {'id': 'B', 'text': 'NS'}, {'id': 'C', 'text': 'MX'}, {'id': 'D', 'text': 'PTR'}],
    "correctAnswer": 'B'
  },
  {
    "id": 354,
    "text": '354. Na podstawie dokumentacji technicznej procesora wskaż liczbę jego wątków',
    "image": 'ee08/354.jpg',
    "answers": [{'id': 'A', 'text': '6'}, {'id': 'B', 'text': '12'}, {'id': 'C', 'text': '16'}, {'id': 'D', 'text': '24'}],
    "correctAnswer": 'D'
  },
  {
    "id": 355,
    "text": '355. Wadą metody sieciowej analizy oszacowania czasu trwania zadania jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'nieskomplikowany wzór obliczenia wartości czasu'}, {'id': 'B', 'text': 'możliwość oceny ryzyka czasowego ukończenia zadań i projektu'}, {'id': 'C', 'text': 'mała elastyczność w trakcie realizacji projektu ze względu na deterministyczny charakter sieci'}, {'id': 'D', 'text': 'możliwość szacowania prawdopodobieństwa ukończenia zadań jak i całego projektu w zadanym\nterminie'}],
    "correctAnswer": 'C'
  },
  {
    "id": 356,
    "text": '356. Równoważnym zapisem 232bajtów jest zapis',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '1 GiB'}, {'id': 'B', 'text': '2 GiB'}, {'id': 'C', 'text': '4 GiB'}, {'id': 'D', 'text': '8 GiB'}],
    "correctAnswer": 'C'
  },
  {
    "id": 357,
    "text": '357. Na rysunku przedstawiono narzędzie do',
    "image": 'ee08/357.jpg',
    "answers": [{'id': 'A', 'text': 'zaciskania złącz BNC'}, {'id': 'B', 'text': 'zaciskania złącz 8P8C'}, {'id': 'C', 'text': 'zdejmowania izolacji z kabli'}, {'id': 'D', 'text': 'montażu okablowania w gnieździe sieciowym'}],
    "correctAnswer": 'C'
  },
  {
    "id": 358,
    "text": '358. Aby zaktualizować zmiany w konfiguracji systemu operacyjnego Windows wykonane za pomocą edytora\nzasad grup, należy zastosować polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dompol'}, {'id': 'B', 'text': 'restore'}, {'id': 'C', 'text': 'services'}, {'id': 'D', 'text': 'gpupdate'}],
    "correctAnswer": 'D'
  },
  {
    "id": 359,
    "text": '359. Miarą podawaną w decybelach, będącą różnicą mocy sygnału przesyłanego w parze zakłócającej i sygnału\nwytworzonego w parze zakłócanej jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'rezystancja pętli'}, {'id': 'B', 'text': 'przesłuch zbliżny'}, {'id': 'C', 'text': 'opóźnienie propagacji'}, {'id': 'D', 'text': 'poziom mocy wyjściowej'}],
    "correctAnswer": 'B'
  },
  {
    "id": 360,
    "text": '360. Na obrazie przedstawiono konfigurację urządzenia. Do których portów należy podłączyć serwer o adresie\nIP 192.168.20.254/24 oraz stację roboczą o adresie IP 192.168.20.10/24, aby zapewnić komunikację tych\nurządzeń w sieci?',
    "image": 'ee08/360.jpg',
    "answers": [{'id': 'A', 'text': 'Do portów 1 i 2'}, {'id': 'B', 'text': 'Do portów 2 i 3'}, {'id': 'C', 'text': 'Do portów 1 i 3'}, {'id': 'D', 'text': 'Do portów 3 i 4'}],
    "correctAnswer": 'C'
  },
  {
    "id": 361,
    "text": '361. Przedstawione polecenia, uruchomione w interfejsie CLI rutera CISCO, spowodują',
    "image": 'ee08/361.jpg',
    "answers": [{'id': 'A', 'text': 'dopuszczenie ruchu pochodzącego z sieci o adresie 10.0.0.1'}, {'id': 'B', 'text': 'określenie puli adresów wewnętrznych 10.0.0.1 ÷ 255.255.255.0'}, {'id': 'C', 'text': 'ustawienie interfejsu zewnętrznego o adresie 10.0.0.1/24 dla technologii NAT'}, {'id': 'D', 'text': 'ustawienie interfejsu wewnętrznego o adresie 10.0.0.1/24 dla technologii NAT'}],
    "correctAnswer": 'D'
  },
  {
    "id": 362,
    "text": '362. Który zapis w systemie binarnym odpowiada liczbie 111 zapisanej w systemie dziesiętnym?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '1101111'}, {'id': 'B', 'text': '1110111'}, {'id': 'C', 'text': '1111110'}, {'id': 'D', 'text': '1111111'}],
    "correctAnswer": 'A'
  },
  {
    "id": 363,
    "text": '363. Aby zabezpieczyć nowo zainstalowany system operacyjny przed działaniem szkodliwego oprogramowania,\nprogram antywirusowy należy zainstalować',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'po zainstalowaniu programów narzędziowych z Internetu'}, {'id': 'B', 'text': 'zaraz po pobraniu poprawek systemowych z sieci'}, {'id': 'C', 'text': 'zaraz po zainstalowaniu systemu operacyjnego'}, {'id': 'D', 'text': 'przed zainstalowaniem systemu operacyjnego'}],
    "correctAnswer": 'C'
  },
  {
    "id": 364,
    "text": '364. Miarą podawaną w decybelach, będącą różnicą mocy sygnału przesyłanego w parze zakłócającej i sygnału\nwytworzonego w parze zakłócanej jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'rezystancja pętli'}, {'id': 'B', 'text': 'przesłuch zbliżny'}, {'id': 'C', 'text': 'opóźnienie propagacji'}, {'id': 'D', 'text': 'poziom mocy wyjściowej'}],
    "correctAnswer": 'B'
  },
  {
    "id": 365,
    "text": '365. Wskaż cechę struktury chirurgicznej zespołu.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Brak jest przywódcy, a decyzje podejmuje się poprzez powszechną zgodę członków zespołu'}, {'id': 'B', 'text': 'Kierownik pilnuje, aby wszystkie części projektu złożyły się na logiczny i harmonijny produkt końcowy'}, {'id': 'C', 'text': 'Kierownik musi panować nad całym projektem, jednocześnie nie mając optymalnej kontroli nad\nzasobami, które są pozyskane na pewien okres czasu'}, {'id': 'D', 'text': 'Szef wydaje polecenia i prowadzi wszystkie działania, jednak dzięki asystentom nie musi zajmować\nsię działaniami administracyjnymi czy technicznymi'}],
    "correctAnswer": 'D'
  },
  {
    "id": 366,
    "text": '366. Przykładem komunikacji werbalnej jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zadanie pytania'}, {'id': 'B', 'text': 'szybkie uniesienie brwi'}, {'id': 'C', 'text': 'zdjęcie nakrycia głowy podczas powitania'}, {'id': 'D', 'text': 'utrzymywanie kontaktu wzrokowego z rozmówcą'}],
    "correctAnswer": 'A'
  },
  {
    "id": 367,
    "text": '367. W który standard transmisji powinien być wyposażony ruter, aby w modernizowanej, bezprzewodowej sieci\nkomputerowej mogła być uzyskana jak najszybsza transmisja danych?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '802.11a'}, {'id': 'B', 'text': '802.11b'}, {'id': 'C', 'text': '802.11g'}, {'id': 'D', 'text': '802.11ac'}],
    "correctAnswer": 'D'
  },
  {
    "id": 368,
    "text": '368. Konfigurację interfejsu sieciowego w systemie Linux można wykonać, wykorzystując plik',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '/etc/hosts'}, {'id': 'B', 'text': '/etc/host.conf'}, {'id': 'C', 'text': '/etc/resolv.conf'}, {'id': 'D', 'text': '/etc/network/interfaces'}],
    "correctAnswer": 'D'
  },
  {
    "id": 369,
    "text": '369. Odpowiednikiem programu chkdsk dla systemu Linux jest program',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'fsck'}, {'id': 'B', 'text': 'totem'}, {'id': 'C', 'text': 'icacls'}, {'id': 'D', 'text': 'synaptic'}],
    "correctAnswer": 'A'
  },
  {
    "id": 370,
    "text": '370. Wewnętrzny protokół trasowania, którego metryką jest wektor odległości, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'RIP'}, {'id': 'B', 'text': 'EGP'}, {'id': 'C', 'text': 'IS-IS'}, {'id': 'D', 'text': 'OSPF'}],
    "correctAnswer": 'A'
  },
  {
    "id": 371,
    "text": '371. Aby umożliwić komunikację urządzenia mobilnego z komputerem przez interfejs Bluetooth, należy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'skonfigurować urządzenie mobilne przez przeglądarkę'}, {'id': 'B', 'text': 'połączyć urządzenia kablem krosowym'}, {'id': 'C', 'text': 'utworzyć sieć WAN dla urządzeń'}, {'id': 'D', 'text': 'wykonać parowanie urządzeń'}],
    "correctAnswer": 'D'
  },
  {
    "id": 372,
    "text": '372. Które słowo kluczowe należy wpisać w miejsce kropek, aby udostępnić folder Dane pod nazwą test?',
    "image": 'ee08/373.jpg',
    "answers": [{'id': 'A', 'text': 'use'}, {'id': 'B', 'text': 'view'}, {'id': 'C', 'text': 'share'}, {'id': 'D', 'text': 'connect'}],
    "correctAnswer": 'C'
  },
  {
    "id": 373,
    "text": '373. Który tryb pracy Access Point-a jest stosowany dla zapewnienia urządzeniom bezprzewodowym dostępu do\nprzewodowej sieci LAN?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Most bezprzewodowy'}, {'id': 'B', 'text': 'Punkt dostępowy'}, {'id': 'C', 'text': 'Tryb klienta'}, {'id': 'D', 'text': 'Repeater'}],
    "correctAnswer": 'B'
  },
  {
    "id": 374,
    "text": '374. Podstawową funkcją serwera FTP jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'monitoring sieci'}, {'id': 'B', 'text': 'synchronizacja czasu'}, {'id': 'C', 'text': 'udostępnianie plików'}, {'id': 'D', 'text': 'zarządzanie kontami poczty'}],
    "correctAnswer": 'C'
  },
  {
    "id": 375,
    "text": '375. Na fotografii przedstawiono',
    "image": 'ee08/375.jpg',
    "answers": [{'id': 'A', 'text': 'tusz'}, {'id': 'B', 'text': 'toner'}, {'id': 'C', 'text': 'kartridż'}, {'id': 'D', 'text': 'taśmę barwiącą'}],
    "correctAnswer": 'D'
  },
  {
    "id": 376,
    "text": '376. Wskaż adres sieci',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '16.1.0.0/8'}, {'id': 'B', 'text': '100.0.0.0/16'}, {'id': 'C', 'text': '18.4.0.0, maska 255.0.0.0'}, {'id': 'D', 'text': '192.168.0.63, maska 255.255.255.0'}],
    "correctAnswer": 'B'
  },
  {
    "id": 377,
    "text": '377. Którego protokołu należy użyć do odbioru poczty elektronicznej ze swojego serwera?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'FTP'}, {'id': 'B', 'text': 'POP3'}, {'id': 'C', 'text': 'SMTP'}, {'id': 'D', 'text': 'SNMP'}],
    "correctAnswer": 'B'
  },
  {
    "id": 378,
    "text": '378. Wskaż polecenie, którego wynik przedstawiono na rysunku',
    "image": 'ee08/378.jpg',
    "answers": [{'id': 'A', 'text': 'arp'}, {'id': 'B', 'text': 'route'}, {'id': 'C', 'text': 'tracert'}, {'id': 'D', 'text': 'netstat'}],
    "correctAnswer": 'D'
  },
  {
    "id": 379,
    "text": '379. Jakie zadanie realizuje protokół ARP (Address Resolution Protocol)?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Ustala adres MAC na podstawie adresu IP'}, {'id': 'B', 'text': 'Przesyła informacje zwrotne o problemach z siecią'}, {'id': 'C', 'text': 'Kontroluje przepływ pakietów wewnątrz systemów autonomicznych'}, {'id': 'D', 'text': 'Zarządza grupami multicastowymi w sieciach opartych na protokole IP'}],
    "correctAnswer": 'A'
  },
  {
    "id": 380,
    "text": '380. Na rysunku przedstawiono przekrój kabla',
    "image": 'ee08/380.jpg',
    "answers": [{'id': 'A', 'text': 'S/UTP'}, {'id': 'B', 'text': 'U/UTP'}, {'id': 'C', 'text': 'optycznego'}, {'id': 'D', 'text': 'koncentrycznego'}],
    "correctAnswer": 'D'
  },
  {
    "id": 381,
    "text": '381. Sieć o adresie 172.16.0.0/16 została podzielona na podsieci o masce 18 bitowej. Wskaż adresy tych\npodsieci.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '172.16.0.0, 172.16.64.0, 172.16.128.0, 172.16.192.0'}, {'id': 'B', 'text': '172.16.0.0, 172.16.0.64, 172.16.0.128, 172.16.0.192'}, {'id': 'C', 'text': '172.16.64.0, 172.16.0.128, 172.16.192.0, 172.16.0.255'}, {'id': 'D', 'text': '172.16.64.0, 172.16.64.64, 172.16.64.128, 172.16.64.192'}],
    "correctAnswer": 'A'
  },
  {
    "id": 382,
    "text": '382. Na obrazie przedstawiono tylny panel stacji roboczej. Strzałką oznaczono port',
    "image": 'ee08/382.jpg',
    "answers": [{'id': 'A', 'text': 'HDMI'}, {'id': 'B', 'text': 'eSATA'}, {'id': 'C', 'text': 'USB 3.0'}, {'id': 'D', 'text': 'DisplayPort'}],
    "correctAnswer": 'D'
  },
  {
    "id": 383,
    "text": '383. Na fotografii przedstawiono',
    "image": 'ee08/383.jpg',
    "answers": [{'id': 'A', 'text': 'reflektometr'}, {'id': 'B', 'text': 'tester sieciowy'}, {'id': 'C', 'text': 'zaciskarkę do tulejek'}, {'id': 'D', 'text': 'zaciskarkę wtyków 8P8C'}],
    "correctAnswer": 'D'
  },
  {
    "id": 384,
    "text": '384. Przedstawiony fragment konfiguracji zapory sieciowej zezwala na ruch sieciowy z wykorzystaniem\ndomyślnych portów protokołów',
    "image": 'ee08/384.jpg',
    "answers": [{'id': 'A', 'text': 'FTP, SSH'}, {'id': 'B', 'text': 'POP3, TFTP'}, {'id': 'C', 'text': 'HTTP, SMPT'}, {'id': 'D', 'text': 'HTTPS, IMAP'}],
    "correctAnswer": 'D'
  },
  {
    "id": 385,
    "text": '385. Wskaż domyślny port do przekazywania poleceń (command) serwera usługi FTP',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '20'}, {'id': 'B', 'text': '21'}, {'id': 'C', 'text': '67'}, {'id': 'D', 'text': '68'}],
    "correctAnswer": 'B'
  },
  {
    "id": 386,
    "text": '386. Aby dokonać aktualizacji zainstalowanego systemu operacyjnego Linux Ubuntu, należy użyć między innymi\npolecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'yum upgrade'}, {'id': 'B', 'text': 'kernel update'}, {'id': 'C', 'text': 'system update'}, {'id': 'D', 'text': 'apt-get upgrade'}],
    "correctAnswer": 'D'
  },
  {
    "id": 387,
    "text": '387. Na schemacie przedstawiono topologię sieci',
    "image": 'ee08/387.jpg',
    "answers": [{'id': 'A', 'text': 'bus'}, {'id': 'B', 'text': 'star'}, {'id': 'C', 'text': 'ring'}, {'id': 'D', 'text': 'mesh'}],
    "correctAnswer": 'D'
  },
  {
    "id": 388,
    "text": '388. Które oznaczenie kabla typu skrętka określa, że jej cały przewód jest nieekranowany?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'U'}, {'id': 'B', 'text': 'F'}, {'id': 'C', 'text': 'S'}, {'id': 'D', 'text': 'SF'}],
    "correctAnswer": 'A'
  },
  {
    "id": 389,
    "text": '389. Jaki jest koszt wymiany karty graficznej w komputerze, jeśli karta kosztuje 250 zł, jej wymiana zajmie\npracownikowi serwisu 80 minut, a każda rozpoczęta roboczogodzina kosztuje 50 zł?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '250 zł'}, {'id': 'B', 'text': '300 zł'}, {'id': 'C', 'text': '350 zł'}, {'id': 'D', 'text': '400 zł'}],
    "correctAnswer": 'C'
  },
  {
    "id": 390,
    "text": '390. W systemie Windows Server użytkownicy z grupy Pracownicy nie mogą drukować dokumentów przy użyciu\nserwera wydruku. Mają oni przydzielone tylko uprawnienia „Zarządzanie dokumentami”. Co należy zrobić,\naby rozwiązać opisany problem?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Nadać uprawnienia „Drukuj” dla grupy Pracownicy'}, {'id': 'B', 'text': 'Usunąć uprawnienia „Drukuj” dla grupy Administratorzy'}, {'id': 'C', 'text': 'Usunąć uprawnienia „Zarządzanie dokumentami” dla grupy Pracownicy'}, {'id': 'D', 'text': 'Nadać uprawnienia „Zarządzanie dokumentami” dodatkowo dla grupy Administratorzy'}],
    "correctAnswer": 'A'
  },
  {
    "id": 391,
    "text": '391. Pracownik doznał urazu. Pierwszą czynnością podczas udzielania pomocy jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wezwanie karetki pogotowia'}, {'id': 'B', 'text': 'udzielenie pierwszej pomocy poszkodowanemu'}, {'id': 'C', 'text': 'ocena zdarzenia i zabezpieczenie miejsca wypadku'}, {'id': 'D', 'text': 'zapewnienie poszkodowanemu komfortu psychicznego'}],
    "correctAnswer": 'C'
  },
  {
    "id": 392,
    "text": '392. Który standard należy wybrać, konfigurując punkt dostępowy dla częstotliwości 5 GHz?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '802.11b/g'}, {'id': 'B', 'text': '802.11ac'}, {'id': 'C', 'text': '802.11g'}, {'id': 'D', 'text': '802.11d'}],
    "correctAnswer": 'B'
  },
  {
    "id": 393,
    "text": '393. Na podstawie dokumentacji technicznej procesora wskaż liczbę jego wątków',
    "image": 'ee08/393.jpg',
    "answers": [{'id': 'A', 'text': '6'}, {'id': 'B', 'text': '12'}, {'id': 'C', 'text': '16'}, {'id': 'D', 'text': '24'}],
    "correctAnswer": 'D'
  },
  {
    "id": 394,
    "text": '394. W systemie Linux polecenie touch służy do',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'utworzenia pliku albo zmiany daty modyfikacji lub ostatniego dostępu'}, {'id': 'B', 'text': 'obliczenia liczby wierszy, słów i znaków w pliku'}, {'id': 'C', 'text': 'wyszukania podanego wzorca w tekście pliku'}, {'id': 'D', 'text': 'przeniesienia lub zmiany nazwy pliku'}],
    "correctAnswer": 'A'
  },
  {
    "id": 395,
    "text": '395. Urządzenie, które łączy segmenty sieci komputerowej przekazując ramki między tymi segmentami\nz doborem portu urządzenia, do którego są one przekazywane, to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'rejestrator'}, {'id': 'B', 'text': 'przełącznik'}, {'id': 'C', 'text': 'koncentrator'}, {'id': 'D', 'text': 'zasilacz awaryjny'}],
    "correctAnswer": 'B'
  },
  {
    "id": 396,
    "text": '396. Rozdzielczość optyczna to jeden z parametrów',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'skanera.'}, {'id': 'B', 'text': 'drukarki.'}, {'id': 'C', 'text': 'modemu.'}, {'id': 'D', 'text': 'monitora.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 397,
    "text": '397. Którego kodu numerycznego należy użyć w poleceniu zmiany praw do pliku w systemie Linux, aby jego \nwłaściciel miał prawa zapisu i odczytu, grupa miała prawa odczytu i wykonania, a pozostali użytkownicy tylko \nprawo odczytu?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '765'}, {'id': 'B', 'text': '751'}, {'id': 'C', 'text': '654'}, {'id': 'D', 'text': '123'}],
    "correctAnswer": 'C'
  },
  {
    "id": 398,
    "text": '398. Wynik działania polecenia ls -l użytego w systemie Linux jest przedstawiony na',
    "image": 'ee08/398.jpg',
    "answers": [{'id': 'A', 'text': 'wyniku 1.'}, {'id': 'B', 'text': 'wyniku 2.'}, {'id': 'C', 'text': 'wyniku 3.'}, {'id': 'D', 'text': 'wyniku 4.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 399,
    "text": '399. Wskaż, zgodną z obowiązującymi normami, maksymalną odległość pomiędzy urządzeniami sieciowymi, \npołączonymi bezpośrednio skrętką kategorii 5e?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '10 m'}, {'id': 'B', 'text': '100 m'}, {'id': 'C', 'text': '500 m'}, {'id': 'D', 'text': '1000 m'}],
    "correctAnswer": 'B'
  },
  {
    "id": 400,
    "text": '400. Oprogramowanie sprzętowe zainstalowane na stałe w urządzeniu, które umożliwia jego obsługę to w języku \nangielskim',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'firmware'}, {'id': 'B', 'text': 'stealware'}, {'id': 'C', 'text': 'shareware'}, {'id': 'D', 'text': 'ransomware'}],
    "correctAnswer": 'A'
  },
  {
    "id": 401,
    "text": '401. Transmisja za pomocą fal radiowych korzystających z pasma ISM jest realizowana w interfejsie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Bluetooth'}, {'id': 'B', 'text': 'FireWire'}, {'id': 'C', 'text': 'HDMI'}, {'id': 'D', 'text': 'IrDA'}],
    "correctAnswer": 'A'
  },
  {
    "id": 402,
    "text": '402. Na ilustracji jest przedstawione okno konfiguracji urządzenia dostępu do lokalnej sieci bezprzewodowej. Aby\nzmienić identyfikator sieci wykorzystywany podczas próby nawiązywania połączenia z punktem dostępowym,\nnależy użyć pole oznaczone numerem',
    "image": 'ee08/402.jpg',
    "answers": [{'id': 'A', 'text': '1'}, {'id': 'B', 'text': '2'}, {'id': 'C', 'text': '3'}, {'id': 'D', 'text': '4'}],
    "correctAnswer": 'A'
  },
  {
    "id": 403,
    "text": '403. Na podstawie ilustracji przedstawiającej okno konfiguracji przełącznika można stwierdzić, że',
    "image": 'ee08/403.jpg',
    "answers": [{'id': 'A', 'text': 'czas między wysyłaniem kolejnych komunikatów o poprawnej pracy urządzenia wynosi 3 sekundy'}, {'id': 'B', 'text': 'maksymalny czas krążenia w sieci komunikatów protokołu BPDU wynosi 20 sekund'}, {'id': 'C', 'text': 'minimalny czas krążenia w sieci komunikatów protokołu BPDU wynosi 25 sekund'}, {'id': 'D', 'text': 'maksymalny czas pomiędzy zmianami statusu łącza wynosi 5 sekund'}],
    "correctAnswer": 'A'
  },
  {
    "id": 404,
    "text": '404. Nadzorem i kontrolą w zakresie przestrzegania zasad bezpieczeństwa i higieny pracy oraz przepisów \nzwiązanych z zatrudnieniem w Polsce zajmuje się',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Państwowa Inspekcja Pracy'}, {'id': 'B', 'text': 'Rządowe Centrum Legislacji'}, {'id': 'C', 'text': 'Zakład Ubezpieczeń Społecznych'}, {'id': 'D', 'text': 'Biuro Bezpieczeństwa Narodowego'}],
    "correctAnswer": 'A'
  },
  {
    "id": 405,
    "text": '405. Parametrem określającym o ile zmniejszy się moc sygnału w danej parze przewodów po przejściu przez cały \ntor kablowy, jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'długość'}, {'id': 'B', 'text': 'tłumienie'}, {'id': 'C', 'text': 'przesłuch zdalny'}, {'id': 'D', 'text': 'przesłuch zbliżny'}],
    "correctAnswer": 'B'
  },
  {
    "id": 406,
    "text": '406. W systemie Windows Server zdalny dostęp do sieci organizacji zapewnia usługa',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IIS'}, {'id': 'B', 'text': 'FTP'}, {'id': 'C', 'text': 'SMB'}, {'id': 'D', 'text': 'RRAS'}],
    "correctAnswer": 'D'
  },
  {
    "id": 407,
    "text": '407. Adresem rozgłoszeniowym sieci, w której pracuje host o adresie IP 195.120.252.32 i masce podsieci \n255.255.255.192 jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '195.120.252.0'}, {'id': 'B', 'text': '195.120.252.63'}, {'id': 'C', 'text': '195.120.252.255'}, {'id': 'D', 'text': '195.120.255.255'}],
    "correctAnswer": 'B'
  },
  {
    "id": 408,
    "text": '408. Aby przeprowadzić aktualizację do wyższej wersji systemu Ubuntu Linux należy użyć między innymi\npolecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'install source update'}, {'id': 'B', 'text': 'apt-get sudo su update'}, {'id': 'C', 'text': 'upgrade install dist high'}, {'id': 'D', 'text': 'sudo apt-get dist-upgrade'}],
    "correctAnswer": 'D'
  },
  {
    "id": 409,
    "text": '409. Co jest charakterystyczne dla architektury sieci lokalnych typu klient – serwer?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Żaden z komputerów nie pełni roli nadrzędnej w stosunku do pozostałych'}, {'id': 'B', 'text': 'Wszystkie komputery klienckie mają dostęp do zasobów pozostałych komputerów'}, {'id': 'C', 'text': 'Każdy komputer zarówno udostępnia pewne zasoby, jak i korzysta z zasobów innych komputerów'}, {'id': 'D', 'text': 'Wyróżnione komputery pełnią rolę serwerów udostępniających zasoby, a pozostałe komputery z tych \nzasobów korzystają'}],
    "correctAnswer": 'D'
  },
  {
    "id": 410,
    "text": '410. Użycie przedstawionego w ramce polecenia w systemie Linux spowoduje',
    "image": 'ee08/410.jpg',
    "answers": [{'id': 'A', 'text': 'skopiowanie pliku dane.tar do katalogu /home'}, {'id': 'B', 'text': 'wyświetlenie informacji o zawartości pliku dane.tar'}, {'id': 'C', 'text': 'wyodrębnienie danych z archiwum o nazwie dane.tar'}, {'id': 'D', 'text': 'utworzenie archiwum dane.tar zawierające kopię katalogu /home'}],
    "correctAnswer": 'C'
  },
  {
    "id": 411,
    "text": '411. Na ilustracji jest przedstawiony',
    "image": 'ee08/411.jpg',
    "answers": [{'id': 'A', 'text': 'ruter.'}, {'id': 'B', 'text': 'przełącznik.'}, {'id': 'C', 'text': 'koncentrator.'}, {'id': 'D', 'text': 'panel krosowy.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 412,
    "text": '412. Zgodnie z zasadami etykiety związanymi ze spotkaniami służbowymi należy pamiętać, aby',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wchodząc do miejsc publicznych pukać przed wejściem, z wyjątkiem pokoju szefa urzędu.'}, {'id': 'B', 'text': 'unikać nadmiernej gestykulacji oraz piskliwego i wysokiego tonu głosu.'}, {'id': 'C', 'text': 'nie przedstawiać się i bez pytania usiąść na wolnym krześle.'}, {'id': 'D', 'text': 'mężczyźni całowali wszystkie kobiety w rękę.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 413,
    "text": '413. Oznaczenie przedstawionego procesora informuje o',
    "image": 'ee08/413.jpg',
    "answers": [{'id': 'A', 'text': 'jego małej obudowie.'}, {'id': 'B', 'text': 'wersji mobilnej procesora.'}, {'id': 'C', 'text': 'braku blokady mnożnika (unlocked).'}, {'id': 'D', 'text': 'bardzo niskim zużyciu energii przez procesor.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 414,
    "text": '414. Na ilustracji przedstawiono',
    "image": 'ee08/414.jpg',
    "answers": [{'id': 'A', 'text': 'impulsator.'}, {'id': 'B', 'text': 'sondę logiczną.'}, {'id': 'C', 'text': 'czujnik temperatury.'}, {'id': 'D', 'text': 'tester płyt głównych.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 415,
    "text": '415. Podczas podłączenia sprawnego monitora do innego komputera jest wyświetlany komunikat przedstawiony \nna ilustracji. Pojawienie się komunikatu jest spowodowane',
    "image": 'ee08/415.jpg',
    "answers": [{'id': 'A', 'text': 'wyłączeniem komputera.'}, {'id': 'B', 'text': 'zbyt wysoko ustawioną ostrością obrazu.'}, {'id': 'C', 'text': 'uszkodzeniem monitora podczas podłączania.'}, {'id': 'D', 'text': 'zbyt wysoką lub zbyt niską częstotliwością sygnału.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 416,
    "text": '416. Ile maksymalnie komputerów może być zaadresowanych w podsieci o adresie 192.168.1.0/25?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '62'}, {'id': 'B', 'text': '126'}, {'id': 'C', 'text': '254'}, {'id': 'D', 'text': '510'}],
    "correctAnswer": 'B'
  },
  {
    "id": 417,
    "text": '417. Urządzeniem stosowanym do połączenia 6 komputerów w sieć lokalną jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'most'}, {'id': 'B', 'text': 'wzmacniak'}, {'id': 'C', 'text': 'transceiver'}, {'id': 'D', 'text': 'przełącznik'}],
    "correctAnswer": 'D'
  },
  {
    "id": 418,
    "text": '418. Do sprawdzenia prawidłowości przebiegów i wartości napięć układu urządzenia elektronicznego można użyć',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'watomierza'}, {'id': 'B', 'text': 'testera płyt głównych'}, {'id': 'C', 'text': 'oscyloskopu cyfrowego'}, {'id': 'D', 'text': 'miernika uniwersalnego'}],
    "correctAnswer": 'C'
  },
  {
    "id": 419,
    "text": '419. W tabeli przedstawiono parametry zestawu komputerowego. Ponieważ jego karta graficzna uległa \nuszkodzeniu, należy ją wymienić na kartę graficzną o parametrach przedstawionych w ramce. W związku \nz tym modernizacja tego komputera wymaga również wymiany',
    "image": 'ee08/419.jpg',
    "answers": [{'id': 'A', 'text': 'karty sieciowej'}, {'id': 'B', 'text': 'płyty głównej'}, {'id': 'C', 'text': 'procesora'}, {'id': 'D', 'text': 'zasilacza'}],
    "correctAnswer": 'D'
  },
  {
    "id": 420,
    "text": '420. Aby zmienić właściciela pliku w systemie Linux, należy użyć polecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ps'}, {'id': 'B', 'text': 'pwd'}, {'id': 'C', 'text': 'chown'}, {'id': 'D', 'text': 'chmod'}],
    "correctAnswer": 'C'
  },
  {
    "id": 421,
    "text": '421. Na ilustracji jest przedstawiona konfiguracja',
    "image": 'ee08/421.jpg',
    "answers": [{'id': 'A', 'text': 'wirtualnych sieci.'}, {'id': 'B', 'text': 'sieci bezprzewodowej.'}, {'id': 'C', 'text': 'przekierowania portów.'}, {'id': 'D', 'text': 'rezerwacji adresów MAC.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 422,
    "text": '422. Przed wykonaniem prac serwisowych związanych z modyfikacją rejestru systemu Windows należy wykonać',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'kopię rejestru za pomocą programu regedit'}, {'id': 'B', 'text': 'defragmentację dysku za pomocą programu defrag'}, {'id': 'C', 'text': 'oczyszczanie dysku za pomocą programu cleanmgr'}, {'id': 'D', 'text': 'czyszczenie rejestru za pomocą programu defraggler'}],
    "correctAnswer": 'A'
  },
  {
    "id": 423,
    "text": '423. Aby była możliwa komunikacja między różnymi sieciami VLAN, należy zastosować',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ruter.'}, {'id': 'B', 'text': 'modem.'}, {'id': 'C', 'text': 'regenerator.'}, {'id': 'D', 'text': 'koncentrator.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 424,
    "text": '424. Na ilustracji jest przedstawiony symbol graficzny',
    "image": 'ee08/424.jpg',
    "answers": [{'id': 'A', 'text': 'rutera.'}, {'id': 'B', 'text': 'mostu.'}, {'id': 'C', 'text': 'przełącznika.'}, {'id': 'D', 'text': 'punktu dostępowego.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 425,
    "text": '425. W Wierszu polecenia wydano komendę: wykonaj.bat przyklad.txt \nWykonanie skryptu spowoduje',
    "image": 'ee08/425.jpg',
    "answers": [{'id': 'A', 'text': 'zabezpieczenie pliku przykład.txt hasłem hsr'}, {'id': 'B', 'text': 'dopisanie ciągu znaków „hsr” do zawartości pliku wykonaj.bat'}, {'id': 'C', 'text': 'nadanie dla pliku wykonaj.bat atrybutów ukryty, systemowy, tylko do odczytu'}, {'id': 'D', 'text': 'nadanie dla pliku przykład.txt atrybutów ukryty, skompresowany, tylko do odczytu'}],
    "correctAnswer": 'C'
  },
  {
    "id": 426,
    "text": '426. Aby udrożnić zatkane dysze kartridża drukarki atramentowej, należy oczyścić dysze',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'środkiem smarującym.'}, {'id': 'B', 'text': 'alkoholem izopropylowym.'}, {'id': 'C', 'text': 'drobnym papierem ściernym.'}, {'id': 'D', 'text': 'za pomocą drucianego zmywaka.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 427,
    "text": '427. Zespoły doraźne powoływane są',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'na potrzeby realizacji nieprzewidzianych zadań lub rozwiązywania niespodziewanych problemów'}, {'id': 'B', 'text': 'do wykonania zaplanowanego i określonego projektu lub zadania'}, {'id': 'C', 'text': 'na stałe i są trwale umiejscowione w strukturze organizacji'}, {'id': 'D', 'text': 'do realizacji zadań powtarzalnych i przewidywalnych'}],
    "correctAnswer": 'A'
  },
  {
    "id": 428,
    "text": '428. Podczas konfiguracji rutera, przedstawionej w filmie, wykorzystano funkcję służącą do',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zablokowania podanego adresu fizycznego urządzenia sieciowego w zakresie sieci LAN.'}, {'id': 'B', 'text': 'klonowania adresu fizycznego rutera z puli testowej i zachowania go pod nazwą Stacja002.'}, {'id': 'C', 'text': 'rezerwacji adresu IP z puli adresów określonych przez serwer DHCP dla komputera o podanym\nadresie MA'}, {'id': 'D', 'text': 'utworzenia polisy dla komputera o nazwie Stacja002, aby mógł łączyć się do rutera łączem\nprzewodowym.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 429,
    "text": '429. Wskaż zakres grupy, który jest ustawiany domyślnie dla nowo utworzonej grupy w kontrolerze domeny \nsystemu Windows Serwer?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Lokalny.'}, {'id': 'B', 'text': 'Globalny.'}, {'id': 'C', 'text': 'Uniwersalny.'}, {'id': 'D', 'text': 'Dystrybucyjny.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 430,
    "text": '430. Aby zagwarantować użytkownikom Active Directory możliwość zalogowania do domeny na wypadek awarii \nkontrolera domeny, należy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'promować drugi kontroler domeny.'}, {'id': 'B', 'text': 'udostępnić użytkownikom numer do Help Desk.'}, {'id': 'C', 'text': 'dodać wszystkich użytkowników do grupy Administratorzy.'}, {'id': 'D', 'text': 'przekopiować wszystkie zasoby sieci na każdy komputer w domenie.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 431,
    "text": '431. Wynikiem dodawania liczb 33(8)oraz 71(8)jest liczba',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '1010101(2)'}, {'id': 'B', 'text': '1100101(2)'}, {'id': 'C', 'text': '1001100(2)'}, {'id': 'D', 'text': '1010100(2)'}],
    "correctAnswer": 'D'
  },
  {
    "id": 432,
    "text": '432. W tabeli jest przedstawiony fragment procesu komunikacji serwera ze stacją roboczą przechwycony przez \nprogram Wireshark. Której usługi dotyczy ta komunikacja?',
    "image": 'ee08/432.jpg',
    "answers": [{'id': 'A', 'text': 'FTP'}, {'id': 'B', 'text': 'DNS'}, {'id': 'C', 'text': 'DHCP'}, {'id': 'D', 'text': 'WWW'}],
    "correctAnswer": 'C'
  },
  {
    "id": 433,
    "text": '433. Protokół DNS odpowiada za',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'odwzorowanie nazw domenowych na adresy IP.'}, {'id': 'B', 'text': 'odwzorowanie adresów fizycznych MAC na adresy IP.'}, {'id': 'C', 'text': 'statyczne przydzielanie adresacji urządzeniom sieciowym.'}, {'id': 'D', 'text': 'automatyczne przydzielanie adresacji urządzeniom sieciowym.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 434,
    "text": '434. Który ze sposobów radzenia sobie ze stresem jest szkodliwy dla organizmu?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Sen.'}, {'id': 'B', 'text': 'Hobby.'}, {'id': 'C', 'text': 'Używki.'}, {'id': 'D', 'text': 'Aktywność fizyczna.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 435,
    "text": '435. W systemach Windows Server polecenie dsadd umożliwia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zmianę właściwości obiektów w katalogu.'}, {'id': 'B', 'text': 'przenoszenie obiektów w obrębie jednej domeny.'}, {'id': 'C', 'text': 'usuwanie użytkowników, grup, komputerów, kontaktów i jednostek organizacyjnych z usługi Active Directory.'}, {'id': 'D', 'text': 'dodawanie użytkowników, grup, komputerów, kontaktów i jednostek organizacyjnych do usługi Active Directory.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 436,
    "text": '436. Wewnętrzny dysk twardy IDE jest zasilany poprzez złącze',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'MOLEX'}, {'id': 'B', 'text': 'ATX20'}, {'id': 'C', 'text': 'SATA'}, {'id': 'D', 'text': 'PCIe'}],
    "correctAnswer": 'A'
  },
  {
    "id": 437,
    "text": '437. W systemie Linux plik ma ustawione prawa na wartość 541. Właściciel tego pliku ma możliwość',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'tylko wykonania.'}, {'id': 'B', 'text': 'tylko modyfikacji.'}, {'id': 'C', 'text': 'odczytu i wykonania.'}, {'id': 'D', 'text': 'odczytu, zapisu i wykonania.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 438,
    "text": '438. W przedstawionym zasilaczu transformator oznaczono znakiem',
    "image": 'ee08/438.jpg',
    "answers": [{'id': 'A', 'text': '1'}, {'id': 'B', 'text': '2'}, {'id': 'C', 'text': '3'}, {'id': 'D', 'text': '4'}],
    "correctAnswer": 'B'
  },
  {
    "id": 439,
    "text": '439. W systemach operacyjnych Windows natywnym systemem plików, który umożliwia ograniczenie użytkownikom dostępu do poszczególnych katalogów, plików lub dysków jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Ext2'}, {'id': 'B', 'text': 'NTFS'}, {'id': 'C', 'text': 'FAT16'}, {'id': 'D', 'text': 'FAT32'}],
    "correctAnswer": 'B'
  },
  {
    "id": 440,
    "text": '440. Które zdanie odnoszące się do urządzenia sieciowego most (ang. bridge) jest prawdziwe?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Analizuje ramki pod kątem adresu IP.'}, {'id': 'B', 'text': 'Pracuje w piątej warstwie modelu OSI.'}, {'id': 'C', 'text': 'Jest urządzeniem typu store and forward.'}, {'id': 'D', 'text': 'Pracuje w siódmej warstwie modelu OSI.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 441,
    "text": '441. Na rysunku przedstawiono symbol graficzny',
    "image": 'ee08/441.jpg',
    "answers": [{'id': 'A', 'text': 'rutera.'}, {'id': 'B', 'text': 'mostu.'}, {'id': 'C', 'text': 'regeneratora.'}, {'id': 'D', 'text': 'koncentratora.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 442,
    "text": '442. Plik ma rozmiar 2 KiB. W przeliczeniu na bity jest to',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '2000 bitów.'}, {'id': 'B', 'text': '2048 bitów.'}, {'id': 'C', 'text': '16000 bitów.'}, {'id': 'D', 'text': '16384 bitów.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 443,
    "text": '443. Do wyświetlenia zawartości katalogu w systemie Linux służy polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ls'}, {'id': 'B', 'text': 'cd'}, {'id': 'C', 'text': 'rpm'}, {'id': 'D', 'text': 'pwd'}],
    "correctAnswer": 'A'
  },
  {
    "id": 444,
    "text": '444. Na filmie zostal pokazany montaz',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'karty graficznej.'}, {'id': 'B', 'text': 'pamięci RAM.'}, {'id': 'C', 'text': 'procesora.'}, {'id': 'D', 'text': 'radiatora.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 445,
    "text": '445. Narzędziem blokującym ataki hakerskie z zewnątrz jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'protokół SSH.'}, {'id': 'B', 'text': 'serwer DHCP.'}, {'id': 'C', 'text': 'zapora sieciowa.'}, {'id': 'D', 'text': 'menadżer połączeń.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 446,
    "text": '446. Który protokół umożliwia hostom uzyskanie z serwera danych konfiguracyjnych interfejsu sieciowego, takich jak np. adres IP, brama domyślna?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'RTP'}, {'id': 'B', 'text': 'NFS'}, {'id': 'C', 'text': 'DHCP'}, {'id': 'D', 'text': 'HTTPS'}],
    "correctAnswer": 'C'
  },
  {
    "id": 447,
    "text": '447. Przy rozbudowie sieci Ethernet działającej w oparciu o standard 1000BaseT jest wymagane stosowanie skrętki, w kategorii co najmniej',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '3'}, {'id': 'B', 'text': '6'}, {'id': 'C', 'text': '5e'}, {'id': 'D', 'text': '6a'}],
    "correctAnswer": 'C'
  },
  {
    "id": 448,
    "text": '448. Sieć o adresie 192.168.1.128/29 pozwala na zaadresowanie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '6 hostów.'}, {'id': 'B', 'text': '8 hostów.'}, {'id': 'C', 'text': '12 hostów.'}, {'id': 'D', 'text': '16 hostów.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 449,
    "text": '449. Ktory typ złącza na płycie głównej umożliwia zamontowanie przedstawionej karty graficznej?',
    "image": 'ee08/449.jpg',
    "answers": [{'id': 'A', 'text': 'PCI'}, {'id': 'B', 'text': 'AGP'}, {'id': 'C', 'text': 'PCIe x1'}, {'id': 'D', 'text': 'PCIe x16'}],
    "correctAnswer": 'D'
  },
  {
    "id": 450,
    "text": '450. Przedstawiony opis usterki i procedura jej rozwiązania zawarta w dokumentacji technicznej dotyczy problemu związanego',
    "image": 'ee08/450.jpg',
    "answers": [{'id': 'A', 'text': 'z podłączeniem skanera bębnowego.'}, {'id': 'B', 'text': 'z niepoprawnym wydrukiem z drukarki laserowej.'}, {'id': 'C', 'text': 'z konfiguracją skanera bębnowego do pracy sieciowej.'}, {'id': 'D', 'text': 'z niepoprawnym wydrukiem z drukarki termosublimacyjnej.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 451,
    "text": '451. Zgodnie z przepisami BHP oraz zasadami ergonomii stanowiska pracy, maksymalna odległość ekranu monitora komputerowego od oczu pracownika wynosi',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '55 cm'}, {'id': 'B', 'text': '60cm'}, {'id': 'C', 'text': '75 cm'}, {'id': 'D', 'text': '80 cm'}],
    "correctAnswer": 'C'
  },
  {
    "id": 452,
    "text": '452. Protokół RDP jest wykorzystywany w usłudze',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'SCP systemu Windows.'}, {'id': 'B', 'text': 'terminalowej systemu Linux.'}, {'id': 'C', 'text': 'pulpitu zdalnego systemu Windows.'}, {'id': 'D', 'text': 'poczty elektronicznej systemu Linux.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 453,
    "text": '453. Zachowaniem sprzyjającym organizacji pracy małego zespołu programistów jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ignorowanie innych członków zespołu.'}, {'id': 'B', 'text': 'przypisywanie sobie dominującej roli w dyskusji.'}, {'id': 'C', 'text': 'nieustanna dezaprobata dla pomysłów innych osób.'}, {'id': 'D', 'text': 'proponowanie nowych rozwiązań przez wszystkich członków zespołu.'}],
    "correctAnswer": 'D'
  },
  {
    "id": 454,
    "text": '454. Stosunek ładunku zgromadzonego na przewodniku do potencjału tego przewodnika określa jego',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'moc'}, {'id': 'B', 'text': 'rezystancję'}, {'id': 'C', 'text': 'indukcyjność'}, {'id': 'D', 'text': 'pojemność elektryczną'}],
    "correctAnswer": 'D'
  },
  {
    "id": 455,
    "text": '455. Czynnym elementem elektronicznym jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'cewka'}, {'id': 'B', 'text': 'rezystor'}, {'id': 'C', 'text': 'tranzystor'}, {'id': 'D', 'text': 'kondensator'}],
    "correctAnswer": 'C'
  },
  {
    "id": 456,
    "text": '456. Wskaż element, który dopasowuje poziom napięcia z sieci energetycznej przy użyciu transformatora \nprzenoszącego energię z jednego obwodu elektrycznego do drugiego z wykorzystaniem zjawiska indukcji \nmagnetycznej.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Rejestr szeregowy'}, {'id': 'B', 'text': 'Rezonator kwarcowy'}, {'id': 'C', 'text': 'Przerzutnik synchroniczny'}, {'id': 'D', 'text': 'Zasilacz transformatorowy'}],
    "correctAnswer": 'D'
  },
  {
    "id": 457,
    "text": '457. Na schemacie płyty głównej, znajdującym się w dokumentacji laptopa, numerami 8 i 9 oznaczono złącza',
    "image": 'ee08/457.jpg',
    "answers": [{'id': 'A', 'text': 'M.2'}, {'id': 'B', 'text': 'USB 3.0'}, {'id': 'C', 'text': 'Serial ATA'}, {'id': 'D', 'text': 'cyfrowe audio'}],
    "correctAnswer": 'C'
  },
  {
    "id": 458,
    "text": '458. Przedstawiona karta przechwytująca wideo będzie współpracowała z płytą główną wyposażoną w port',
    "image": 'ee08/458.jpg',
    "answers": [{'id': 'A', 'text': 'AGP'}, {'id': 'B', 'text': 'PCI-e'}, {'id': 'C', 'text': '1-Wire'}, {'id': 'D', 'text': 'eSATA'}],
    "correctAnswer": 'B'
  },
  {
    "id": 459,
    "text": '459. Podczas instalacji systemu Windows, tuż po uruchomieniu instalatora w trybie graficznym, możliwe jest \nuruchomienie Wiersza poleceń (konsoli) za pomocą kombinacji przycisków',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ALT + F4'}, {'id': 'B', 'text': 'CTRL + Z'}, {'id': 'C', 'text': 'SHIFT + F10'}, {'id': 'D', 'text': 'CTRL + SHIFT'}],
    "correctAnswer": 'C'
  },
  {
    "id": 460,
    "text": '460. Po zainstalowaniu systemu Windows 10, aby skonfigurować połączenie internetowe z limitem danych, \nw ustawieniach sieci i Internetu należy ustawić połączenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'taryfowe.'}, {'id': 'B', 'text': 'przewodowe.'}, {'id': 'C', 'text': 'przewodowe.'}, {'id': 'D', 'text': 'szerokopasmowe.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 461,
    "text": '461. Licencja dostępowa w systemie Windows Server, umożliwiająca użytkownikom stacji roboczych korzystanie \nz usług serwera to licencja',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'BOX'}, {'id': 'B', 'text': 'CAL'}, {'id': 'C', 'text': 'OEM'}, {'id': 'D', 'text': 'MOLP'}],
    "correctAnswer": 'B'
  },
  {
    "id": 462,
    "text": '462. Cechą charakterystyczną topologii gwiazdy jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'małe zużycie kabla'}, {'id': 'B', 'text': 'centralne zarządzanie siecią'}, {'id': 'C', 'text': 'trudna lokalizacja uszkodzeń'}, {'id': 'D', 'text': 'blokada sieci w wyniku awarii terminala'}],
    "correctAnswer": 'B'
  },
  {
    "id": 463,
    "text": '463. Na przedstawionym schemacie logicznym sieci ujęto',
    "image": 'ee08/463.jpg',
    "answers": [{'id': 'A', 'text': '7 budynkowych punktów dystrybucyjnych'}, {'id': 'B', 'text': '2 kampusowe punkty dystrybucyjne'}, {'id': 'C', 'text': '4 kondygnacyjne punkty dostępowe'}, {'id': 'D', 'text': '9 gniazd telekomunikacyjnych'}],
    "correctAnswer": 'D'
  },
  {
    "id": 464,
    "text": '464. Co można powiedzieć o budowie skrętki S/FTP?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Każda para przewodów jest foliowana i dodatkowo całość w ekranie z siatki'}, {'id': 'B', 'text': 'Każda para przewodów jest w osobnym ekranie z folii, całość jest nieekranowana'}, {'id': 'C', 'text': 'Każda para przewodów jest foliowana i dodatkowo całość w ekranie z folii i siatki'}, {'id': 'D', 'text': 'Każda para przewodów jest w osobnym ekranie z folii i dodatkowo całość w ekranie z folii.'}],
    "correctAnswer": 'A'
  },
  {
    "id": 465,
    "text": '465. Przedstawione narzędzie jest stosowane do',
    "image": 'ee08/465.jpg',
    "answers": [{'id': 'A', 'text': 'lokalizacji uszkodzeń włókien światłowodowych'}, {'id': 'B', 'text': 'spawania przewodów światłowodowych'}, {'id': 'C', 'text': 'zdejmowania izolacji okablowania'}, {'id': 'D', 'text': 'zdejmowania izolacji okablowania'}],
    "correctAnswer": 'A'
  },
  {
    "id": 466,
    "text": '466. Testowanie okablowania strukturalnego światłowodowego można wykonać za pomocą',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'sondy logicznej'}, {'id': 'B', 'text': 'stacji lutowniczej'}, {'id': 'C', 'text': 'odsysacza próżniowego'}, {'id': 'D', 'text': 'reflektometru optycznego'}],
    "correctAnswer": 'D'
  },
  {
    "id": 467,
    "text": '467. Adresem rozgłoszeniowym w podsieci o adresie IPv4 192.168.0.0/20 jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '192.168.255.255'}, {'id': 'B', 'text': '192.168.255.254'}, {'id': 'C', 'text': '192.168.15.255'}, {'id': 'D', 'text': '192.168.15.254'}],
    "correctAnswer": 'C'
  },
  {
    "id": 468,
    "text": '468. W adresacji IPv6 adres ff00::/8 określa',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'adres nieokreślony'}, {'id': 'B', 'text': 'pulę adresów testowej sieci 6bone'}, {'id': 'C', 'text': 'adres wskazujący na lokalnego hosta'}, {'id': 'D', 'text': 'pulę adresów używanych do komunikacji multicast'}],
    "correctAnswer": 'D'
  },
  {
    "id": 469,
    "text": '469. Wskaż maksymalną liczbę adresów hostów, którą można użyć w każdej z 8 równych podsieci, wydzielonych \nz sieci komputerowej o adresie 10.10.10.0/24',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '14'}, {'id': 'B', 'text': '16'}, {'id': 'C', 'text': '30'}, {'id': 'D', 'text': '62'}],
    "correctAnswer": 'C'
  },
  {
    "id": 470,
    "text": '470. Informacje przedstawione na wydruku zostały wyświetlone w wyniku wywołania',
    "image": 'ee08/470.jpg',
    "answers": [{'id': 'A', 'text': 'netstat -r'}, {'id': 'B', 'text': 'route change'}, {'id': 'C', 'text': 'ipconfig /all'}, {'id': 'D', 'text': 'traceroute -src'}],
    "correctAnswer": 'A'
  },
  {
    "id": 471,
    "text": '471. Urządzeniem sieciowym pracującym w drugiej warstwie modelu OSI, w którym sygnał na podstawie analizy \nadresu MAC nadawcy i odbiorcy jest przesyłany do portu połączonego z urządzeniem odbierającym dane, \njest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'modem'}, {'id': 'B', 'text': 'terminator'}, {'id': 'C', 'text': 'przełącznik'}, {'id': 'D', 'text': 'wzmacniak'}],
    "correctAnswer": 'C'
  },
  {
    "id": 472,
    "text": '472. Gniazdo tablicy interaktywnej jest oznaczone za pomocą przedstawionego symbolu. Którego złącza należy \nużyć do podłączenia tablicy do komputera?',
    "image": 'ee08/472.jpg',
    "answers": [{'id': 'A', 'text': 'HDMI'}, {'id': 'B', 'text': 'USB A-A'}, {'id': 'C', 'text': 'FireWire'}, {'id': 'D', 'text': 'D-SUB VGA'}],
    "correctAnswer": 'D'
  },
  {
    "id": 473,
    "text": '473. Aby w systemie Windows zmienić port zainstalowanej drukarki, należy wykorzystać funkcję',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Menedżer zadań'}, {'id': 'B', 'text': 'Właściwości drukarki'}, {'id': 'C', 'text': 'Preferencje drukowania'}, {'id': 'D', 'text': 'Ostatnia znana dobra konfiguracja'}],
    "correctAnswer": 'B'
  },
  {
    "id": 474,
    "text": '474. Wskaż czynność konserwacyjną, którą należy wykonać, jeśli na wydruku drukarki atramentowej widoczne \nsą smugi, kolory wydruku są niewłaściwe lub brakuje niektórych kolorów',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Wymiana taśmy barwiącej'}, {'id': 'B', 'text': 'Kalibrowanie przesuwu papieru'}, {'id': 'C', 'text': 'Czyszczenie głowicy drukującej'}, {'id': 'D', 'text': 'Aktualizacja oprogramowania drukarki'}],
    "correctAnswer": 'C'
  },
  {
    "id": 475,
    "text": '475. Przedstawione narzędzie służące do monitorowania sieci LAN to',
    "image": 'ee08/475.jpg',
    "answers": [{'id': 'A', 'text': 'konfigurator IP'}, {'id': 'B', 'text': 'skaner portów'}, {'id': 'C', 'text': 'zapora sieciowa'}, {'id': 'D', 'text': 'konfigurator sieci'}],
    "correctAnswer": 'B'
  },
  {
    "id": 476,
    "text": '476. Do sprawdzenia stanu podłączonego kabla i zdiagnozowania odległości od miejsca awarii sieci należy \nwykorzystać funkcję przełącznika oznaczoną numerem',
    "image": 'ee08/476.jpg',
    "answers": [{'id': 'A', 'text': '1'}, {'id': 'B', 'text': '2'}, {'id': 'C', 'text': '3'}, {'id': 'D', 'text': '4'}],
    "correctAnswer": 'C'
  },
  {
    "id": 477,
    "text": '477. Podczas konfiguracji rutera, aby wprowadzić parametry połączenia dostarczone przez dostawcę \ninternetowego należy wybrać obszar oznaczony numerem',
    "image": 'ee08/477.jpg',
    "answers": [{'id': 'A', 'text': '4'}, {'id': 'B', 'text': '3'}, {'id': 'C', 'text': '2'}, {'id': 'D', 'text': '1'}],
    "correctAnswer": 'B'
  },
  {
    "id": 478,
    "text": '478. Do czyszczenia układów optycznych w sprzęcie komputerowym należy użyć',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'smaru'}, {'id': 'B', 'text': 'żywicy'}, {'id': 'C', 'text': 'izopropanolu'}, {'id': 'D', 'text': 'oleju wazelinowego'}],
    "correctAnswer": 'C'
  },
  {
    "id": 479,
    "text": '479. Matę antystatyczną i opaskę stosuje się podczas montażu podzespołu w celu',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ułatwienia jego naprawy'}, {'id': 'B', 'text': 'poprawy higieny serwisanta'}, {'id': 'C', 'text': 'oczyszczenia jego zabrudzeń'}, {'id': 'D', 'text': 'neutralizacji ładunków elektrostatycznych'}],
    "correctAnswer": 'D'
  },
  {
    "id": 480,
    "text": '480. W systemie Windows Server udostępnienie folderu jako zasobu sieciowego, widocznego na stacji roboczej \nw postaci dysku oznaczonego literą, jest możliwe dzięki wykonaniu operacji',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zerowania'}, {'id': 'B', 'text': 'mapowania'}, {'id': 'C', 'text': 'oczyszczania'}, {'id': 'D', 'text': 'defragmentacji'}],
    "correctAnswer": 'B'
  },
  {
    "id": 481,
    "text": '481. Przedstawiony wynik działania polecenia systemu Linux służy do diagnostyki',
    "image": 'ee08/481.jpg',
    "answers": [{'id': 'A', 'text': 'karty graficznej.'}, {'id': 'B', 'text': 'dysku twardego.'}, {'id': 'C', 'text': 'karty sieciowej.'}, {'id': 'D', 'text': 'pamięci RAM.'}],
    "correctAnswer": 'B'
  },
  {
    "id": 482,
    "text": '482. Do identyfikacji rozmiaru wolnej i zajętej pamięci fizycznej w systemie Linux można użyć polecenia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'cat /proc/meminfo'}, {'id': 'B', 'text': 'lspci | grep -i raid'}, {'id': 'C', 'text': 'dmidecode –t baseboard'}, {'id': 'D', 'text': 'tail –n 10 /var/log/messages'}],
    "correctAnswer": 'A'
  },
  {
    "id": 483,
    "text": '483. Wskaż koszt brutto wykonanych przez serwisanta usług, jeśli do rachunku doliczony jest również koszt \ndojazdu w wysokości 55,00 zł netto.',
    "image": 'ee08/483.jpg',
    "answers": [{'id': 'A', 'text': '160,00 zł'}, {'id': 'B', 'text': '196,80 zł'}, {'id': 'C', 'text': '215,00 zł'}, {'id': 'D', 'text': '264,45 zł'}],
    "correctAnswer": 'D'
  },
  {
    "id": 484,
    "text": '484. System Linux Ubuntu zainstalowano na dysku obok systemu Windows. Aby skonfigurować kolejność \nuruchamianych systemów operacyjnych, należy zmodyfikować zawartość',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '/etc/grub.d'}, {'id': 'B', 'text': '/etc/inittab'}, {'id': 'C', 'text': 'boot.ini'}, {'id': 'D', 'text': 'bcdedit'}],
    "correctAnswer": 'A'
  },
  {
    "id": 485,
    "text": '485. Użycie polecenia ipconfig /renew podczas konfiguracji interfejsów sieciowych spowoduje',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wyświetlenie identyfikatora klasy DHCP dla kart sieciowych'}, {'id': 'B', 'text': 'wyczyszczenie bufora programu rozpoznającego DNS'}, {'id': 'C', 'text': 'odnowienie wszystkich dzierżaw adresów IP z DHCP'}, {'id': 'D', 'text': 'zwolnienie wszystkich dzierżaw adresów IP z DHCP'}],
    "correctAnswer": 'C'
  },
  {
    "id": 486,
    "text": '486. Do harmonogramowania zadań w systemie Linux służy polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'top'}, {'id': 'B', 'text': 'cron'}, {'id': 'C', 'text': 'shred'}, {'id': 'D', 'text': 'taskschd'}],
    "correctAnswer": 'B'
  },
  {
    "id": 487,
    "text": '487. Wykonanie polecenia dxdiag w systemie Windows umożliwi',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wykonanie konfiguracji klawiatury, aby spełniała wymagania języka polskiego'}, {'id': 'B', 'text': 'uruchomienie maszyny wirtualnej z zainstalowanym systemem Windows 10'}, {'id': 'C', 'text': 'wykonanie kompresji wskazanych na dysku twardym danych'}, {'id': 'D', 'text': 'uruchomienie narzędzia diagnostycznego DirectX'}],
    "correctAnswer": 'D'
  },
  {
    "id": 488,
    "text": '488. AppLocker to narzędzie w systemach Windows Server służące do',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'szyfrowania partycji systemowej, z wyjątkiem partycji rozruchowej.'}, {'id': 'B', 'text': 'nadawania uprawnień do plików i katalogów zawierających dane użytkownika.'}, {'id': 'C', 'text': 'tworzenia reguł kontrolujących uruchamianie aplikacji dla użytkowników lub grup.'}, {'id': 'D', 'text': 'zarządzania partycjami dysków twardych przy użyciu interpretera poleceń PowerShell.'}],
    "correctAnswer": 'C'
  },
  {
    "id": 489,
    "text": '489. W systemie serwerowym Windows widoczny jest zakres adresów IPv4. Wskazana ikona znajdująca się przy \njego nazwie oznacza, że',
    "image": 'ee08/489.jpg',
    "answers": [{'id': 'A', 'text': 'zakres ten jest aktywny'}, {'id': 'B', 'text': 'zakres ten jest nieaktywny'}, {'id': 'C', 'text': 'pula adresów w tym zakresie jest wyczerpana w 100%'}, {'id': 'D', 'text': 'pula adresów w tym zakresie jest wyczerpana na poziomie bliskim 100%'}],
    "correctAnswer": 'B'
  },
  {
    "id": 490,
    "text": '490. Wskaż polecenie systemu Linux służące do wyświetlenia numeru identyfikacyjnego użytkownika.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'whoami'}, {'id': 'B', 'text': 'users'}, {'id': 'C', 'text': 'who'}, {'id': 'D', 'text': 'id'}],
    "correctAnswer": 'D'
  },
  {
    "id": 491,
    "text": '491. Za pomocą którego polecenia systemu Linux możliwa jest zmiana domyślnej powłoki użytkownika egzamin\nna sh',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'usermod –s /bin/sh egzamin'}, {'id': 'B', 'text': 'vi /etc/passwd –sh egzamin'}, {'id': 'C', 'text': 'chmod egzamin /etc/shadow sh'}, {'id': 'D', 'text': 'groupmod /users/egzamin /bin/sh'}],
    "correctAnswer": 'A'
  },
  {
    "id": 492,
    "text": '492. Narzędziem usług katalogowych w systemach z rodziny Windows Server, służącym do przekierowania \nkomputerów do jednostki organizacyjnej określonej przez administratora, jest polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dsrm'}, {'id': 'B', 'text': 'dcdiag'}, {'id': 'C', 'text': 'redircmp'}, {'id': 'D', 'text': 'redirusr'}],
    "correctAnswer": 'C'
  },
  {
    "id": 493,
    "text": '493. Po zainstalowaniu programu VNC, wykorzystywanego do podglądu pulpitu wybranego komputera, oprócz \nnumeru portu należy podać jego',
    "image": 'ee08/493.jpg',
    "answers": [{'id': 'A', 'text': 'adres rozgłoszeniowy'}, {'id': 'B', 'text': 'bramę domyślną'}, {'id': 'C', 'text': 'adres MAC'}, {'id': 'D', 'text': 'adres IP'}],
    "correctAnswer": 'D'
  },
  {
    "id": 494,
    "text": '494. Higiena pracy to:',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Utrzymanie porządku na stanowisku pracy'}, {'id': 'B', 'text': 'Nauka o metodach utrzymywania czystości w pomieszczeniach przemysłowych'}, {'id': 'C', 'text': 'Działania zmierzające do uruchomienia pracownika od utraty zdrowia, która może nastąpić w wyniku oddziaływania różnych czynników związanych z pracą'}, {'id': 'D', 'text': 'Stosowanie diety odpowiedniej do tryby życia'}],
    "correctAnswer": 'C'
  },
  {
    "id": 495,
    "text": '495. Pracownik rozlał w pracy substancję żrącą, wskutek czego uszkodził stojący na stole mikroskop i swoją odzież. Zdarzenie to jest:',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Zdarzeniem traktowanym na równi z wypadkiem przy pracy'}, {'id': 'B', 'text': 'Wypadkiem przy pracy'}, {'id': 'C', 'text': 'Wypadkiem zbiorowym'}, {'id': 'D', 'text': 'Zdarzeniem potencjalnie wypadkowym'}],
    "correctAnswer": 'B'
  },
  {
    "id": 496,
    "text": '496. Wypadek śmiertelny przy pracy to wypadek, w którego wyniku nastąpiła śmierć poszkodowanego pracownika',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'W okresie nieprzekraczającym miesiąca od wypadku'}, {'id': 'B', 'text': 'Na miejscu zdarzenia'}, {'id': 'C', 'text': 'W okresie nieprzekraczającym 6 miesięcy od wypadku'}, {'id': 'D', 'text': 'Na miejscu zdarzenia lub w trakcie leczenia w szpitalu, do którego został przewieziony bezpośrednio po wypadku'}],
    "correctAnswer": 'D'
  },
  {
    "id": 497,
    "text": '497. Chorobą zawodową najczęściej występującą wśród pracowników kuźni jest/są',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Przewlekła choroba narządu głosu'}, {'id': 'B', 'text': 'Uszkodzenia słuchu'}, {'id': 'C', 'text': 'Pylica płuc'}, {'id': 'D', 'text': 'Choroby zakaźne'}],
    "correctAnswer": 'B'
  },
  {
    "id": 498,
    "text": '498. Zapobieganie chorobom zawodowym nie polega na',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Badaniach lekarskich pracowników'}, {'id': 'B', 'text': 'Wykrywaniu i usuwaniu zagrożeń chorobowych w środowisku pracy'}, {'id': 'C', 'text': 'Wykrywaniu i usuwaniu zagrożeń chorobowych w środowisku pracy oraz na badaniach lekarskich pracowników'}, {'id': 'D', 'text': 'Odpowiedniej diecie stosowanej przez pracowników'}],
    "correctAnswer": 'D'
  },
  {
    "id": 499,
    "text": '499. Na filmie przedstawiono wadliwe działanie drukarki laserowej. Podzespołem, który najprawdopodobniej uległ uszkodzeniu, jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'napęd karetki'}, {'id': 'B', 'text': 'filtr dichroiczny'}, {'id': 'C', 'text': 'głowica termiczna'}, {'id': 'D', 'text': 'grzałka utrwalająca'}],
    "correctAnswer": 'D'
  },
  {
    "id": 500,
    "text": '500. Adresem pętli zwrotnej w protokole IPv6 jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '0:0/32'}, {'id': 'B', 'text': '::fff/64'}, {'id': 'C', 'text': '::1/128'}, {'id': 'D', 'text': ':1:1:1/96'}],
    "correctAnswer": 'C'
  },
  {
    "id": 501,
    "text": '501. W systemie Linux do monitorowania bieżących procesów służy polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'free'}, {'id': 'B', 'text': 'ps'}, {'id': 'C', 'text': 'test'}, {'id': 'D', 'text': 'pd'}],
    "correctAnswer": 'B'
  },
  {
    "id": 502,
    "text": '502. W modelu hierarchicznym sieci komputery użytkowników są elementami warstwy',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dostępu'}, {'id': 'B', 'text': 'szkieletowej'}, {'id': 'C', 'text': 'dystrybucji'}, {'id': 'D', 'text': 'rdzenia'}],
    "correctAnswer": 'A'
  },
  {
    "id": 503,
    "text": '503. Profil użytkownika systemu Windows wykorzystywany do logowania na dowolnym komputerze w sieci, który jest przechowywany na serwerze i może być modyfikowany przez użytkownika, to profil',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'lokalny'}, {'id': 'B', 'text': 'obowiązkowy'}, {'id': 'C', 'text': 'mobilny'}, {'id': 'D', 'text': 'tymczasowy'}],
    "correctAnswer": 'C'
  },
  {
    "id": 504,
    "text": '504. Elementem zestawu komputerowego przetwarzającym zarówno dane wejściowe, jak i wyjściowe, jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'modem'}, {'id': 'B', 'text': 'ploter'}, {'id': 'C', 'text': 'drukarka'}, {'id': 'D', 'text': 'skaner'}],
    "correctAnswer": 'A'
  },
  {
    "id": 505,
    "text": '505. Na ilustracji przedstawione jest oprogramowanie monitorujące technologię',
    "image": 'ee08/505.jpg',
    "answers": [{'id': 'A', 'text': 'NCQ'}, {'id': 'B', 'text': 'IRDA'}, {'id': 'C', 'text': 'SAS'}, {'id': 'D', 'text': 'S.M.A.R.T'}],
    "correctAnswer": 'D'
  },
  {
    "id": 506,
    "text": '506. Udostępnienie linuksowych usług drukowania oraz serwera plików stacjom roboczym Windows, OS X, Linux umożliwia serwer',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'SAMBA'}, {'id': 'B', 'text': 'POSTFIX'}, {'id': 'C', 'text': 'APACHE'}, {'id': 'D', 'text': 'SQUID'}],
    "correctAnswer": 'A'
  },
  {
    "id": 507,
    "text": '507. Który z typów rekordów DNS definiuje alias (alternatywną nazwę) rekordu A dla kanonicznej (rzeczywistej) nazwy hosta?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'CNAME'}, {'id': 'B', 'text': 'NS'}, {'id': 'C', 'text': 'AAAA'}, {'id': 'D', 'text': 'PTR'}],
    "correctAnswer": 'A'
  },
  {
    "id": 508,
    "text": '508. Liczby 1001 oraz 100 w wierszu pliku /etc/passwd znaczają',
    "image": 'ee08/508.jpg',
    "answers": [{'id': 'A', 'text': 'liczbę udanych i nieudanych prób logowania'}, {'id': 'B', 'text': 'numer koloru czcionki i numer koloru tła w terminalu'}, {'id': 'C', 'text': 'identyfikatory użytkownika i grupy w systemie'}, {'id': 'D', 'text': 'liczbę dni do ostatniej zmiany hasła i liczbę dni do wygaśnięcia hasła'}],
    "correctAnswer": 'C'
  },
  {
    "id": 509,
    "text": '509. Zgodnie z przedstawioną instrukcją montażu płyty głównej należy',
    "image": 'ee08/509.jpg',
    "answers": [{'id': 'A', 'text': 'w przypadku braku opaski ESD, przed dotknięciem elementów elektronicznych, najpierw dotknąć metalowy przedmiot'}, {'id': 'B', 'text': 'unikat wyłączania zasilania sieciowego przed demontażem płyty głównej'}, {'id': 'C', 'text': 'umieścić podzespół w dowolnym miejscu i dowolnym opakowaniu przed jego zainstalowaniem'}, {'id': 'D', 'text': 'dotykać w dowolny sposób i w dowolnej kolejności metalowe przewody lub złącza'}],
    "correctAnswer": 'A'
  },
  {
    "id": 510,
    "text": '510. Psychicznym skutkiem przewlekłego stresu może być',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'nawracająca infekcja'}, {'id': 'B', 'text': 'depresja'}, {'id': 'C', 'text': 'atopowe zapalenie skóry i chroniczne zapalenie oczu'}, {'id': 'D', 'text': 'choroba układu krążenia'}],
    "correctAnswer": 'B'
  },
  {
    "id": 511,
    "text": '511. Które polecenie należy wydać w systemie Windows, aby sprawdzić tabelę translacji adresów IP na adresy fizyczne?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'ipconfig'}, {'id': 'B', 'text': 'route print'}, {'id': 'C', 'text': 'netstat -r'}, {'id': 'D', 'text': 'arp -a'}],
    "correctAnswer": 'D'
  },
  {
    "id": 512,
    "text": '512. Na ilustracji została przedstawiona topologia',
    "image": 'ee08/512.jpg',
    "answers": [{'id': 'A', 'text': 'pierścienia'}, {'id': 'B', 'text': 'magistrali'}, {'id': 'C', 'text': 'gwiazdy rozszerzonej'}, {'id': 'D', 'text': 'pełnej siatki'}],
    "correctAnswer": 'C'
  },
  {
    "id": 513,
    "text": '513. Wskaż domyślną maskę szesnastobitowego adresu IPv4',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '255.255.0.0'}, {'id': 'B', 'text': '255.0.0.0'}, {'id': 'C', 'text': '255.255.255.0'}, {'id': 'D', 'text': '255.255.255.255'}],
    "correctAnswer": 'A'
  },
  {
    "id": 514,
    "text": '514. Głównym zadaniem usługi DNS jest',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'sprawdzanie poprawności adresów domenowych'}, {'id': 'B', 'text': 'sprawdzanie poprawności adresów IP'}, {'id': 'C', 'text': 'rozwiązywanie nazw domenowych na adresy IP'}, {'id': 'D', 'text': 'rozwiązywanie nazw domenowych na adresy fizyczne'}],
    "correctAnswer": 'C'
  },
  {
    "id": 515,
    "text": '515. Do pomiaru wartości mocy czynnej metodą bezpośrednią należy użyć',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'watomierza'}, {'id': 'B', 'text': 'woltomierza'}, {'id': 'C', 'text': 'omomierza'}, {'id': 'D', 'text': 'amperomierza'}],
    "correctAnswer": 'A'
  },
  {
    "id": 516,
    "text": '516. Konfiguracja zasad zabezpieczeń lokalnych spowoduje, że system',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wymusi na użytkowniku zmianę hasła po 10 dniach'}, {'id': 'B', 'text': 'wymusi utworzenie hasła zawierającego nie mniej niż 12 znaków'}, {'id': 'C', 'text': 'będzie rejestrował zdarzenia, jeśli hasło będzie krótsze niż 8 znaków'}, {'id': 'D', 'text': 'pozwoli zmienić hasło na takie samo po 4 dniach'}],
    "correctAnswer": 'A'
  },
  {
    "id": 517,
    "text": '517. Serwerowa płyta główna do poprawnego działania wymaga pamięci z rejestrem, Który z wymienionych modułów pamięci będzie kompatybilny z taką płytą?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'Kingston 4GB 1600MHz DDR3 ECC CL11 DIMM 1,5V'}, {'id': 'B', 'text': 'Kingston 4GB 1333MHz DDR3 Non-ECC CL9 DIMM'}, {'id': 'C', 'text': 'Kingston 8GB 1333MHz DDR3 ECC REG CL9 DIMM 2Rx8'}, {'id': 'D', 'text': 'Kingston Hynix B 8GB 1600MHz DRR3L CL11 ECC SODIMM 1,35V'}],
    "correctAnswer": 'C'
  },
  {
    "id": 518,
    "text": '518. Program tar umożliwia',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'zarządzanie pakietami'}, {'id': 'B', 'text': 'archiwizowanie plików'}, {'id': 'C', 'text': 'konfigurowanie karty sieciowej'}, {'id': 'D', 'text': 'wyświetlanie listy aktywnych procesów'}],
    "correctAnswer": 'B'
  },
  {
    "id": 519,
    "text": '519. Przedstawiony na ilustracji wtyk 8P8C (złącze męskie modularne) jest stosowany jako zakończenia kabla',
    "image": 'ee08/519.jpg',
    "answers": [{'id': 'A', 'text': 'koncetrycznego'}, {'id': 'B', 'text': 'światłowodowego'}, {'id': 'C', 'text': 'YTDY'}, {'id': 'D', 'text': 'F/UTP'}],
    "correctAnswer": 'D'
  },
  {
    "id": 520,
    "text": '520. Które porty należy odblokować w zaporze sieciowej komputera, aby można było korzystać z zainstalowanej usługi FTP w trybie aktywnym na standardowych portach?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '25 i 110'}, {'id': 'B', 'text': '53 i 137'}, {'id': 'C', 'text': '80 i 443'}, {'id': 'D', 'text': '20 i 21'}],
    "correctAnswer": 'D'
  },
  {
    "id": 521,
    "text": '521. IMAP jest protokołem obsługującym',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wysyłanie poczty elektronicznej'}, {'id': 'B', 'text': 'odbiór poczty elektronicznej'}, {'id': 'C', 'text': 'monitorowanie urządzeń sieciowych'}, {'id': 'D', 'text': 'synchronizację czasu z serwerami'}],
    "correctAnswer": 'B'
  },
  {
    "id": 522,
    "text": '522. Która technologia umożliwia dostęp do Internetu?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'CLIP'}, {'id': 'B', 'text': 'xDSL'}, {'id': 'C', 'text': 'OCR'}, {'id': 'D', 'text': 'SLI'}],
    "correctAnswer": 'B'
  },
  {
    "id": 523,
    "text": '523. Który styl zarządzania grupą, odbywający się w trybie rozkazów, jest skierowany na wykonywanie zadania bez względu na interesy pracowników?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'wspierający'}, {'id': 'B', 'text': 'dyrektywny'}, {'id': 'C', 'text': 'delegujący'}, {'id': 'D', 'text': 'trenerski'}],
    "correctAnswer": 'B'
  },
  {
    "id": 524,
    "text": '524. Który mechanizm musi być uruchomiony na ruterze, aby ruter mógł zmieniać źródłowe i docelowe adresy IP przy przekazywaniu pakietów pomiędzy sieciami?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'UDP'}, {'id': 'B', 'text': 'FTP'}, {'id': 'C', 'text': 'TCP'}, {'id': 'D', 'text': 'NAT'}],
    "correctAnswer": 'D'
  },
  {
    "id": 525,
    "text": '525. W systemie Windows, aby ustawić routing statyczny do sieci 192.168.10.0, należy wydać polecenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'static route 92.168.10.1 MASK 255.255.255.0 192.168.10.0 5'}, {'id': 'B', 'text': 'route ADD 192.168.10.0 MASK 255.255.255.0 192.168.10.15'}, {'id': 'C', 'text': 'static 192.168.10.0 MASK 255.255.255.0 192.168.10.1 5 route'}, {'id': 'D', 'text': 'route 192.168.10.1 MASK 255.255.255.0 192.168.10.0 5 ADD'}],
    "correctAnswer": 'B'
  },
  {
    "id": 526,
    "text": '526. Przedstawiony na ilustracji symbol, stosowany w dokumentacji technicznej, oznacza',
    "image": 'ee08/526.jpg',
    "answers": [{'id': 'A', 'text': 'zielony punkt upoważniający do wniesienia opłaty pieniężnej na rzecz organizacji odzysku opakowań'}, {'id': 'B', 'text': 'wymóg selektywnej zbiórki sprzętu elektronicznego'}, {'id': 'C', 'text': 'konieczność zastosowania koszy w kolorze żółtym i niebieskim'}, {'id': 'D', 'text': 'brak możliwości składowania odpadów aluminiowych oraz innych tworzyw metalicznych'}],
    "correctAnswer": 'B'
  },
  {
    "id": 527,
    "text": '527. Menedżer usług IIS (Internet Information Services) systemu Windows służy do konfiguracji serwera',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'terminali'}, {'id': 'B', 'text': 'WWW'}, {'id': 'C', 'text': 'DNS'}, {'id': 'D', 'text': 'wydruku'}],
    "correctAnswer": 'B'
  },
  {
    "id": 528,
    "text": '528. Użytkownikom pracującym poza biurem uzyskanie zdalnego dostępu do serwera w sieci prywatnej przy wykorzystywaniu infrastruktury sieci publicznej, takiej jak Internet, umożliwia połączenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'IMAP'}, {'id': 'B', 'text': 'VPN'}, {'id': 'C', 'text': 'SMTP'}, {'id': 'D', 'text': 'FTP'}],
    "correctAnswer": 'B'
  },
  {
    "id": 529,
    "text": '529. Wskaż zapis liczby -1210metodą znak-moduł w postaci ośmiobitowej liczby dwójkowej.',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '+1.11000zm'}, {'id': 'B', 'text': '00001100zm'}, {'id': 'C', 'text': '–1.11000zm'}, {'id': 'D', 'text': '10001100zm'}],
    "correctAnswer": 'D'
  },
  {
    "id": 530,
    "text": '530. Które urządzenie należy zainstalować w serwerze, by można było automatycznie archiwizować dane na taśmach magnetycznych?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'dysk SSD'}, {'id': 'B', 'text': 'streamer'}, {'id': 'C', 'text': 'Blu-Ray'}, {'id': 'D', 'text': 'napęd DVD'}],
    "correctAnswer": 'B'
  },
  {
    "id": 531,
    "text": '531. Program df działający w systemach rodziny Linux umożliwia wyświetlenie',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'nazwy bieżącego katalogu'}, {'id': 'B', 'text': 'tekstu pasującego do wzorca'}, {'id': 'C', 'text': 'zawartości ukrytego katalogu'}, {'id': 'D', 'text': 'informacji o wolnej przestrzeni dyskowej'}],
    "correctAnswer": 'D'
  },
  {
    "id": 532,
    "text": '532. Adresem IPv6 hosta skonfigurowanym na karcie sieciowej enp0s25 jest',
    "image": 'ee08/532.jpg',
    "answers": [{'id': 'A', 'text': 'fe80::3d6:e6d2:1c93:56e2'}, {'id': 'B', 'text': '172.16.21.255'}, {'id': 'C', 'text': 'a0:b3:cc:28:8f:37'}, {'id': 'D', 'text': '172.16.21.100'}],
    "correctAnswer": 'A'
  },
  {
    "id": 533,
    "text": '533. Jeśli pracownik przebywał na zwolnieniu lekarskim dłużej niż 30 dni, to przed powrotem do pracy musi przejść badania',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'kontrolne'}, {'id': 'B', 'text': 'okresowe'}, {'id': 'C', 'text': 'tymczasowe'}, {'id': 'D', 'text': 'wstępne'}],
    "correctAnswer": 'A'
  },
  {
    "id": 534,
    "text": '534. Przypisanie licencji oprogramowania wyłączenie do jednego komputera lub jego podzespołów jest cechą licencji',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'TRIAL'}, {'id': 'B', 'text': 'OEM'}, {'id': 'C', 'text': 'AGPL'}, {'id': 'D', 'text': 'BOX'}],
    "correctAnswer": 'B'
  },
  {
    "id": 535,
    "text": '535. Przedstawione na ilustracji urządzenie peryferyjne jest wyposażone w interfejs',
    "image": 'ee08/535.jpg',
    "answers": [{'id': 'A', 'text': 'PS/2'}, {'id': 'B', 'text': 'IEEE 1284'}, {'id': 'C', 'text': 'DVI-D'}, {'id': 'D', 'text': 'mini USB'}],
    "correctAnswer": 'D'
  },
  {
    "id": 536,
    "text": '536. Przed rozpoczęciem czynności instalacyjnych wykonano przygotowanie dysku twardego. widoczne na ilustracji wydane polecenia prowadzą do',
    "image": 'ee08/536.jpg',
    "answers": [{'id': 'A', 'text': 'ustawienia systemu plików NTFS dla dysków nr 1 i nr 2'}, {'id': 'B', 'text': 'oczyszczenia dysków nr 0 i nr 2'}, {'id': 'C', 'text': 'konwersji partycji GPT na MBR na dysku nr 1'}, {'id': 'D', 'text': 'formatowania i utraty danych na dysku nr 0'}],
    "correctAnswer": 'C'
  },
  {
    "id": 537,
    "text": '537. Na której ilustracji zostało przedstawione narzędzie używane w symulatorze Cisco Packet Tracer, umożliwiające zastosowanie światłowodu jako medium transmisyjnego w projektowaniu sieci? (Ilustracje pochodzą z programu w wersji 8.0.0.0212)',
    "image": 'ee08/537.jpg',
    "answers": [{'id': 'A', 'text': 'na ilustracji 3'}, {'id': 'B', 'text': 'na ilustracji 1'}, {'id': 'C', 'text': 'na ilustracji 4'}, {'id': 'D', 'text': 'na ilustracji 2'}],
    "correctAnswer": 'A'
  },
  {
    "id": 538,
    "text": '538. Przedstawiony panel tylny płyty głównej jest wyposażony w interfejsy',
    "image": 'ee08/538.jpg',
    "answers": [{'id': 'A', 'text': '2 x PS2; 1 xRJ45; 6 x USB 2.0, 1.1'}, {'id': 'B', 'text': '2 x USB 3.0; 2 x USB 2.0, 1.1; 2 x DP, 1 x DVI'}, {'id': 'C', 'text': '2 x USB 3.0; 4 x USB 2.0, 1.1; 1 x D-SUB'}, {'id': 'D', 'text': '2 x HDMI, 1 x D-SUB, 1 x RJ11, 6 x USB 2.0'}],
    "correctAnswer": 'C'
  },
  {
    "id": 539,
    "text": '539. Urządzenie przedstawione na rysunku jest stosowane do',
    "image": 'ee08/539.jpg',
    "answers": [{'id': 'A', 'text': 'zabezpieczenia przed niepożądanym dostępem z sieci'}, {'id': 'B', 'text': 'wzmocnienia sygnału'}, {'id': 'C', 'text': 'zamiany transmisji sygnału kablem światłowodowym na skrętkę'}, {'id': 'D', 'text': 'rozdzielenia sygnału'}],
    "correctAnswer": 'C'
  },
  {
    "id": 540,
    "text": '540. Sieć o adresie 172.16.0.0/16 została podzielona na podsieci o masce 18 bitowej. Wskaż adresy tych podsieci',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': '172.16.64.0, 172.16.0.128, 172.16.192.0, 172.16.0.255'}, {'id': 'B', 'text': '172.16.0.0, 172.16.64.0, 172.16.128.0, 172.16.192.0'}, {'id': 'C', 'text': '172.16.0.0, 172.16.0.64, 172.16.0.128, 172.16.0.192'}, {'id': 'D', 'text': '172.16.64.0, 172.16.64.64, 172.16.64.128, 172.16.64.192'}],
    "correctAnswer": 'B'
  },
  {
    "id": 541,
    "text": '541. w której topologii logicznej sieci komputerowej urządzenia wysyłające dane używają znacznika nazywanego tokenem?',
    "image": './placeholder.png',
    "answers": [{'id': 'A', 'text': 'punkt-punkt'}, {'id': 'B', 'text': 'przekazywania żetonu'}, {'id': 'C', 'text': 'hierarchicznej'}, {'id': 'D', 'text': 'siatki'}],
    "correctAnswer": 'B'
  }
];