document.addEventListener('DOMContentLoaded', function() {

    const tabOrder = ["login.html", "auswahl.html", "allgemein.html", "personalkosten.html", "leistungen.html", "sachkosten.html", "abschreibungen.html", "raeume.html", "zusammenfassung.html"];
    const currentPath = window.location.pathname.split("/").pop();
    const currentIndex = tabOrder.indexOf(currentPath);
    const nextPage = (currentIndex >= 0 && currentIndex < tabOrder.length -1)
        ? tabOrder[currentIndex + 1]
        : null;

    //(e) zu () machen und preventDefault entfernen wegen post (weiterleitung muss dann auch mit php gemacht werden)
    submitButton.addEventListener('click', function(e)
    {
        e.preventDefault();
        if (nextPage)
        {
            window.location.href = nextPage;
        }
        if(currentPath !== "login.html")
        {
            alert('Daten erfolgreich gespeichert!');
        }
    });

    const abmelden = document.getElementById('logoutButton');
    abmelden.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sie wurden erfolgreich abgemeldet!');
        window.location.href = 'login.html';
    });
});

const buttons = document.querySelectorAll(".newProjectButton, .selectButton, .createButton, .openButton, .weiterButton, .loginButton, .logoutButton, .weiterSelectButton, .addButton, .saveButton, .buero, .labor, .anderes");

buttons.forEach(button => {
    let timeout;

    button.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        button.classList.add('hover');
    });

    button.addEventListener('mouseleave', (e) => {
        if (!button.contains(e.relatedTarget)) {
            timeout = setTimeout(() => {
                button.classList.remove('hover');
            }, 500);
        }
    });
});
