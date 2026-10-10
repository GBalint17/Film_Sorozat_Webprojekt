const filmek = [
    new Film("Csillagok között", "Sci-fi, dráma", 2014, 169),
    new Film("Dűne: Második rész", "Sci-fi, kaland", 2024, 166),
    new Film("A sötét lovag", "Akció, dráma", 2008, 152),
    new Film("Eredet", "Sci-fi, akció", 2010, 148),
];

const sorozatok = [
    new Sorozatok("The Boys", "Akció, Sci-fi", 2019, 5),
];

sorozatok[0].setErtekeles(8)

filmek[0].setErtekeles(8.7);
filmek[0].setStatus("Megnéztem");

filmek[1].setErtekeles(8.5);

filmek[2].setErtekeles(9);
filmek[2].setStatus("Jelenleg nézem");

filmek[3].setErtekeles(8.8);
filmek[3].setStatus("Megnéztem");

var filmT = false;
var torlendo = -1;

function filmKiir() {
    var lista = document.querySelector("#FilmLista");
    lista.innerHTML = "";

    for (let i = 0; i < filmek.length; i++) {
        lista.innerHTML += `
        <div class="col" >
            <article class="card h-100 shadow-sm">
                <div class="card-header bg-white d-flex align-items-center gap-1 p-1">
                    <div class="dropdown flex-grow-1" style="min-width: 0;">
                        <button class="btn btn-light btn-sm dropdown-toggle w-100 text-truncate py-1 px-2" type="button"
                            data-bs-toggle="dropdown" title="${filmek[i].getStatus()}">
                            ${filmek[i].getStatus()}
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">Látni akarom</button></li>
                            <li><button class="dropdown-item" type="button">Jelenleg nézem</button></li>
                            <li><button class="dropdown-item" type="button">Megnéztem</button></li>
                        </ul>
                    </div>

                    <div class="d-flex align-items-center gap-1 flex-shrink-0">
                        <span class="badge bg-light text-dark border p-1">
                            ${filmek[i].getErtekeles()} <i class="bi bi-star-fill text-warning" aria-hidden="true"></i>
                        </span>

                        <div class="dropdown">
                            <button class="btn btn-light btn-sm border py-1 px-2" type="button" data-bs-toggle="dropdown"
                                aria-label="Kártya műveletek">
                                <i class="bi bi-three-dots-vertical" aria-hidden="true"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <button class="dropdown-item" type="button">
                                        <i class="bi bi-pencil-square me-2" aria-hidden="true"></i>Szerkesztés
                                    </button>
                                </li>
                                <li><hr class="dropdown-divider"></li>
                                <li>
                                    <button class="dropdown-item text-danger" type="button" onclick="torolFilm(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i class="bi bi-trash3 me-2" aria-hidden="true"></i>Törlés
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="ratio ratio-1x1 bg-light border-top border-bottom">
                    <div class="d-flex align-items-center justify-content-center">
                        <i class="bi bi-film display-1 text-secondary" aria-hidden="true"></i>
                    </div>
                </div>

                <div class="card-body p-2">
                    <h2 class="card-title h6 fw-bold mb-1" title="${filmek[i].getCim()}">
                        ${filmek[i].getCim()}
                    </h2>
                    <p class="card-text text-secondary small mb-0">${filmek[i].getMufaj()}</p>
                </div>

                <div class="card-footer bg-white border-0 text-end text-secondary small p-2 pt-0">
                    ${filmek[i].getHossz()} perc
                </div>
            </article>
        </div>
        `;
    }
}
function sorozatokKiir() {
    var lista = document.querySelector("#SorozatokLista");
    lista.innerHTML = "";

    for (let i = 0; i < sorozatok.length; i++) {
        lista.innerHTML += `
        <div class="col sorozatokDiv">
            <article class="card h-100 shadow-sm">
                <div class="card-header bg-white d-flex align-items-center gap-1 p-1">
                    <div class="dropdown flex-grow-1" style="min-width: 0;">
                        <button class="btn btn-light btn-sm dropdown-toggle w-100 text-truncate py-1 px-2" type="button"
                            data-bs-toggle="dropdown" title="${sorozatok[i].getStatus()}">
                            ${sorozatok[i].getStatus()}
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">Látni akarom</button></li>
                            <li><button class="dropdown-item" type="button">Jelenleg nézem</button></li>
                            <li><button class="dropdown-item" type="button">Megnéztem</button></li>
                        </ul>
                    </div>

                    <div class="d-flex align-items-center gap-1 flex-shrink-0">
                        <span class="badge bg-light text-dark border p-1">
                            ${sorozatok[i].getErtekeles()} <i class="bi bi-star-fill text-warning" aria-hidden="true"></i>
                        </span>

                        <div class="dropdown">
                            <button class="btn btn-light btn-sm border py-1 px-2" type="button" data-bs-toggle="dropdown"
                                aria-label="Kártya műveletek">
                                <i class="bi bi-three-dots-vertical" aria-hidden="true"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <button class="dropdown-item" type="button">
                                        <i class="bi bi-pencil-square me-2" aria-hidden="true"></i>Szerkesztés
                                    </button>
                                </li>
                                <li><hr class="dropdown-divider"></li>
                                <li>
                                    <button class="dropdown-item text-danger" type="button"onclick="torolSorozat(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i class="bi bi-trash3 me-2" aria-hidden="true"></i>Törlés
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="ratio ratio-1x1 bg-light border-top border-bottom">
                    <div class="d-flex align-items-center justify-content-center">
                        <i class="bi bi-tv display-1 text-secondary" aria-hidden="true"></i>
                    </div>
                </div>

                <div class="card-body p-2">
                    <h2 class="card-title h6 fw-bold mb-1" title="${sorozatok[i].getCim()}">
                        ${sorozatok[i].getCim()}
                    </h2>
                    <p class="card-text text-secondary small mb-0">${sorozatok[i].getMufaj()}</p>
                </div>

                <div class="card-footer bg-white border-0 text-end text-secondary small p-2 pt-0">
                    ${sorozatok[i].getEvadSzam()} évad
                </div>
            </article>
        </div>
        `;
    }
};


sorozatokKiir();
filmKiir();

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        document
            .querySelectorAll(".nav-link")
            .forEach((elem) => elem.classList.remove("active"));
        link.classList.add("active");
    });
});

document.querySelector("#sorozatokMegjelenes").addEventListener('click', () => {
    document.querySelector("#FilmLista").classList.add("d-none");
    document.querySelector("#SorozatokLista").classList.remove("d-none");
});
document.querySelector("#filmekMegjelenes").addEventListener('click', () => {
    document.querySelector("#FilmLista").classList.remove("d-none");
    document.querySelector("#SorozatokLista").classList.add("d-none");
});
document.querySelector("#mindenMegjelen").addEventListener('click', () => {
    document.querySelector("#FilmLista").classList.remove("d-none");
    document.querySelector("#SorozatokLista").classList.remove("d-none");
});

document.querySelector(".torlesAlatamasz").addEventListener('click', () => {
    if (filmT == true) {
        filmek.splice(torlendo, 1);
        filmKiir();
    } else {
        sorozatok.splice(torlendo, 1);
        sorozatokKiir();
    }
    torlendo = -1;
    filmT = false;

});


function torolFilm(index) {
    torlendo = index;
    filmT = true;
    document.querySelector("#exampleModal .modal-title").innerHTML = "Biztosan törli a filmet?";

};
function torolSorozat(index) {
    torlendo = index;
    document.querySelector("#exampleModal .modal-title").innerHTML = "Biztosan törli a sorozatot?";

};
