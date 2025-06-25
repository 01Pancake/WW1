document.addEventListener("DOMContentLoaded", function () {
    const selectButton = document.getElementById("selectButton");
    const newProjectButton = document.getElementById("newProjectButton");

    const projectSelection = document.getElementById("projectSelection");
    const newProjectForm = document.getElementById("newProjectForm");

    // Beim Klick auf "Projektauswahl"
    selectButton.addEventListener("click", () => {
        projectSelection.style.display = "block";
        newProjectForm.style.display = "none";
    });

    // Beim Klick auf "Neues Projekt erstellen"
    newProjectButton.addEventListener("click", () => {
        projectSelection.style.display = "none";
        newProjectForm.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("existingProject");
    const newProjectForm = document.getElementById("newProjectForm");
    const projectNameInput = document.getElementById("projectName");

    // Projekte aus localStorage laden
    function loadProjects() {
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        // Dropdown leeren
        select.innerHTML = "";
        // Platzhalter einfügen
        const placeholder = document.createElement("option");
        placeholder.textContent = "-";
        placeholder.value = "";
        select.appendChild(placeholder);

        projects.forEach((project) => {
            const option = document.createElement("option");
            option.value = project;
            option.textContent = project;
            select.appendChild(option);
        });
    }

    // Neues Projekt anlegen
    newProjectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const projectName = projectNameInput.value.trim();
        if (!projectName) return;

        let projects = JSON.parse(localStorage.getItem("projects")) || [];
        if (!projects.includes(projectName)) {
            projects.push(projectName);
            localStorage.setItem("projects", JSON.stringify(projects));
            loadProjects(); // Dropdown aktualisieren
        }

        projectNameInput.value = "";
        alert(`Projekt "${projectName}" wurde gespeichert.`);

        document.getElementById("newProjectForm").style.display = "none";
        document.getElementById("projectSelection").style.display = "block";
    });

    loadProjects(); // Beim Laden direkt aktualisieren
});

/* SPEICHERORT UND DIE OPTIONEN UEBERARBEITEN*/

