// SEZIONI TABS
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        // Rimuovi la classe "active" da tutti gli elementi tabcontent
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Mostra la sezione selezionata
    document.getElementById(cityName).style.display = "block";
    // Aggiungi la classe "active" anche al tabcontent attivo
    document.getElementById(cityName).classList.add("active");
    // Aggiungi la classe "active" al tab link
    evt.currentTarget.className += " active";
}


// DROPDOWN RADIOGRAFICO
const radiografici = [
    // "Sans Ray [Non più in Uso]",
    // "XRay [Non più in Uso]",
    // "Method [Non più in Uso]",
    // "Ardet [Non più in Uso]",
    "VixWin (Gendex)",
    "GTrophy (Trophy)",
    "DBSWIN Durr (Durr)",
    "Dimaxis (Planmeca)",
    "Dexis (Faro)",
    "Easy Rider (Novaxa)",
    "Prog. Graf. Locale",
    "Sidexis (Sirona-Siemens)",
    "ContactWin (Dentalica)",
    "Digora (Soredex)",
    "CDR (Schick)",
    "Easy Rider New (Novaxa)",
    "QuickVision / ContactWin LX (Dentalica o Owandy)",
    "Trophy Ultimate 6.03 (Trophy)",
    "CliniView 6.0 (Instrumentarium Imaging)",
    "Imagex (Faro)",
    "Libra (Libra Ortodonzia)",
    "Ceph Pratic (Odonto Program)",
    "Piximage (Quaderno Elettronico s.r.l.)",
    "Imaginity (RGDental)",
    "DBSWIN Durr (Durr)",
    "Image (Anthos)",
    "Sidexis 4 / Sidexis XG (Sirona-Siemens)",
    "XGenus Digital (DeGotzen)",
    "Easy Rider Image 2 (Novaxa)",
    "CDR (Schick)",
    "Kodak Dental Imaging (Kodak)",
    // "QuickVision / ContactWin LX con PIXIMAGE (Dentalica o Owandy) [Non più in Uso]",
    "Did Vedo (Quartex)",
    "Dental Focus (Faro)",
    "Programma Eseguibile GENERICO",
    "CSN Image (Novaxa)",
    "Dent a View (Digident - Orex)",
    "Explorer di WINDOWS",
    "Romexis (Planmeca)",
    "Romexis (Planmeca)",
    "Scanora (Soredex)",
    "RayMage con PIXIMAGE (MyRay)",
    "Mediadent (Reinhold)",
    "EasyDent (Vatech)",
    "QuickVision 4.0 con Java (Owandy)",
    "Sopro Imaging (Sopro Acteon Imaging)",
    "ArchiMED (fino alla 4.60) / OrisWin Dg Suite (Fona Dental)",
    "Radis v.1.4 Build 11 o Sup. (Revello)",
    "IRYS Imaging con PIXIMAGE (MyRay) / NNT con PIXIMAGE (NewTom)",
    "Carestream Dental Imaging (Carestream)",
    "OpenCeph (Gent.le concessione Prof. Oliva)",
    "IRYS Imaging (MyRay) / NNT (NewTom)",
    "EzDent (Vatech) / Easydent4 (Vatech)",
    "RayScan/SmartDent (Ray by Samsung)",
    "DeepImage (Procom)",
    "VistaSoft (Durr)",
    "VistaSoft (Durr)",
    "Ais Software (ActeonGroup)",
    "DTX (Kavo)",
    "Romexis (Planmeca)",
    "DiagnoCAM (Kavo)",
    "Deep View (Trident)",
    "3Shape Trioss (3Shape)",
    "ArchiMED (4.61 e succ.)/NewLife (New Life Radiology)",
    "RioView (RayScan)",
    "DeltaDent/DeltaMed (Outside Format)",
    "i-Dixel (Morita)",
    "CS8 Imaging (Carestream)"
];

const dropdown = document.getElementById("programmiDropdown");

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Cerca radiografico...";
searchInput.className = "form-control mb-2 me-2";
dropdown.appendChild(searchInput);

const itemsContainer = document.createElement("div");
dropdown.appendChild(itemsContainer);

function renderItems(filter = "") {
    itemsContainer.innerHTML = "";
    radiografici.forEach(nome => {
        const lowerNome = nome.toLowerCase();
        const lowerFilter = filter.toLowerCase();

        if (lowerNome.includes(lowerFilter)) {
            const item = document.createElement("div");
            item.className = "dropdown-item";

            let highlightedText;
            if (filter !== "") {
                const startIndex = lowerNome.indexOf(lowerFilter);
                const endIndex = startIndex + filter.length;

                highlightedText = nome.substring(0, startIndex) +
                    `<span class="matching-word">` +
                    nome.substring(startIndex, endIndex) +
                    `</span>` +
                    nome.substring(endIndex);
            } else {
                highlightedText = nome;
            }

            item.innerHTML = `
                <p class="d-flex justify-content-between align-items-center mb-0">
                    <span>${highlightedText}</span>
                    <input type="checkbox" name="radiografico" value="${nome}" style="width: 17px; height: 17px;">
                </p>
            `;


            itemsContainer.appendChild(item);
        }
    });
}

renderItems();

searchInput.addEventListener("input", () => {
    renderItems(searchInput.value);
});

// DROPDOWN ADD-ON
const searchInputAddOn = document.getElementById("searchInputAddOn");
const addon_container = document.getElementById("addon_container");

const addon = [
    { id: 1, name: "Guida Paziente" },
    { id: 2, name: "Sincronizzatore Google Calendar" },
    { id: 3, name: "Sincronizzatore Google Calendar Automatico" },
    { id: 4, name: "Anamnesi su Tablet" },
    { id: 5, name: "Export Paziente" },
    { id: 6, name: "Dashboard" },
    { id: 7, name: "Chi è" },
    { id: 8, name: "Foto Manager" },
    { id: 9, name: "Lettore TS" },
    { id: 10, name: "Backup Immagini e Documenti" },
    { id: 11, name: "Sistema Documentale" },
    { id: 12, name: "Firma Elettronica" },
    { id: 13, name: "Firma Elettronica Wi-Fi" },
    { id: 14, name: "Firma Elettronica Avanzata" },
    { id: 15, name: "Conformità Elettronica" },
    { id: 16, name: "OpenCeph" },
    { id: 17, name: "Controllo Segreteria" },
    { id: 19, name: "Export Commercialista" },
    { id: 20, name: "Statistiche e Fatturato Online" },
    { id: 21, name: "Fidelity" },
    { id: 24, name: "Tracciabilità" },
    { id: 25, name: "NFC / Lettori Wireless" },
    { id: 26, name: "sQrivo" },
    { id: 27, name: "Centro Prenotazioni" },
    { id: 28, name: "Gestione Sala d'Attesa" },
    { id: 33, name: "Prescrizioni Online" }
];


function renderAddons(filter = "") {
    addon_container.innerHTML = "";

    addon.forEach(item => {
        const lowerName = item.name.toLowerCase();
        const lowerFilter = filter.toLowerCase();

        if (lowerName.includes(lowerFilter)) {
            const startIndex = lowerName.indexOf(lowerFilter);
            const endIndex = startIndex + filter.length;

            const highlightedText = filter
                ? `${item.name.substring(0, startIndex)}<span class="matching-word">${item.name.substring(startIndex, endIndex)}</span>${item.name.substring(endIndex)}`
                : item.name;

            const div = document.createElement("div");
            div.className = "dropdown-item";
            div.innerHTML = `
                <p class="d-flex justify-content-between align-items-center mb-0">
                    <span>${highlightedText}</span>
                    <input type="checkbox" name="addon" value="${item.id}" style="width: 17px; height: 17px;">
                </p>
            `;

            addon_container.appendChild(div);
        }
    });
}

// Render iniziale
renderAddons();

// Filtro in tempo reale
searchInputAddOn.addEventListener("input", () => {
    renderAddons(searchInputAddOn.value);
});


// JSON CONSOLE LOG
document.getElementById("mainform").addEventListener("submit", function (e) {
    e.preventDefault(); // Previene l'invio reale del form

    const formData = new FormData(this);
    const data = {};

    // Mappa id -> name per gli addon
    const addonMap = new Map(addon.map(a => [String(a.id), a.name]));

    for (let [key, value] of formData.entries()) {
        if (key === "addon") {
            if (!data["addon"]) data["addon"] = [];

            data["addon"].push([
                parseInt(value),
                addonMap.get(value) || "Sconosciuto"
            ]);
        } else if (data[key]) {
            if (!Array.isArray(data[key])) {
                data[key] = [data[key]];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    }

    console.log("🧾 JSON generato dal form:");
    console.log(JSON.stringify(data, null, 2));
});