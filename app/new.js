(function repeatProcess() {
    // Znajdź pierwszy div z aria-label="Menu"
    const menuDiv = document.querySelector('div[aria-label="Menu"]');
    if (!menuDiv) {
        console.error('Nie znaleziono divu z aria-label="Menu".');
        return;
    }

    console.log('Znaleziono div z aria-label="Menu". Klikanie...');
    menuDiv.click(); // Kliknij w div z aria-label="Menu"

    // Poczekaj na pojawienie się spana "Usuń czat"
    setTimeout(() => {
        // Znajdź span z tekstem "Usuń czat"
        const deleteChatSpan = Array.from(document.querySelectorAll('span')).find(
            (span) => span.textContent.trim() === 'Usuń czat'
        );

        if (!deleteChatSpan) {
            console.error('Nie znaleziono spana z tekstem "Usuń czat".');
            return;
        }

        console.log('Znaleziono span z tekstem "Usuń czat". Klikanie...');
        deleteChatSpan.click(); // Kliknij w span "Usuń czat"

            // Odczekaj przed powtórzeniem procesu
            setTimeout(() => {
                console.log('Proces powtarzany...');
                repeatProcess(); // Powtórz proces
            }, 3000); // Czekaj 3 sekundy przed powtórzeniem
        }, 1000);
    }, 500); // Czekaj 500 ms po kliknięciu w "Menu"
;
