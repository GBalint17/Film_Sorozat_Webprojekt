const filmek = [
  new Film("Csillagok között", "Dráma", 2014, 169, "img/csillagokkozt.jpg"),
  new Film("Dűne: Második rész", "Sci-fi", 2024, 166, "img/Dune.webp"),
  new Film("A sötét lovag", "Akció", 2008, 152, "img/sotet.jpg"),
  new Film("Eredet", "Horror", 2010, 148, "img/eredet.jpg"),
];

const sorozatok = [
  new Sorozatok("The Boys", "Akció", 2019, 5, "img/theboys.jpg"),
  new Sorozatok("Breaking Bad", "Dráma, Akció", 2008, 5, "img/breakingbad.webp"),
];

sorozatok[0].setErtekeles(8);

filmek[0].setErtekeles(8.7);
filmek[0].setStatus("Megnéztem");

filmek[1].setErtekeles(8.5);

filmek[2].setErtekeles(9);
filmek[2].setStatus("Jelenleg nézem");

filmek[3].setErtekeles(8.8);
filmek[3].setStatus("Megnéztem");

var filmT = false;
var torlendo = -1;
var aktualisNezet = "felfedezes";

function filmKiir() {
  var lista = document.querySelector("#FilmLista");
  lista.innerHTML = "";

  for (let i = 0; i < filmek.length; i++) {
    lista.innerHTML += `
        <div class="col" >
            <article class="card media-card h-100 shadow-sm">
                <div class="card-header d-flex align-items-center gap-1 p-1">
                    <div class="dropdown flex-grow-1" style="min-width: 0;">
                        <button class="btn btn-light btn-sm dropdown-toggle w-100 text-truncate py-1 px-2" type="button"
                            data-bs-toggle="dropdown" title="${filmek[i].getStatus()}">
                            ${filmek[i].getStatus()}
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button" onclick="filmStatusBeallit(${i}, 'Látni akarom')">Látni akarom</button></li>
                            <li><button class="dropdown-item" type="button" onclick="filmStatusBeallit(${i}, 'Jelenleg nézem')">Jelenleg nézem</button></li>
                            <li><button class="dropdown-item" type="button" onclick="filmStatusBeallit(${i}, 'Megnéztem')">Megnéztem</button></li>
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

                <div class="ratio film-card-image media-card-image border-top border-bottom">
                    <img src="${filmek[i].getKep()}" class="w-100 h-100 object-fit-contain" alt="${filmek[i].getCim()}">
                </div>

                <div class="card-body p-2">
                    <h2 class="card-title h6 fw-bold mb-1" title="${filmek[i].getCim()}">
                        ${filmek[i].getCim()}
                    </h2>
                    <p class="card-text text-secondary small mb-0">${filmek[i].getMufaj()}</p>
                    <p class="card-text text-secondary small mb-0">Megjelenési dátum: ${filmek[i].getMegjelenes()}</p>
                </div>

                <div class="card-footer border-0 text-end small p-2 pt-0">
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
            <article class="card media-card h-100 shadow-sm">
                <div class="card-header d-flex align-items-center gap-1 p-1">
                    <div class="dropdown flex-grow-1" style="min-width: 0;">
                        <button class="btn btn-light btn-sm dropdown-toggle w-100 text-truncate py-1 px-2" type="button"
                            data-bs-toggle="dropdown" title="${sorozatok[i].getStatus()}">
                            ${sorozatok[i].getStatus()}
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button" onclick="sorozatStatusBeallit(${i}, 'Látni akarom')">Látni akarom</button></li>
                            <li><button class="dropdown-item" type="button" onclick="sorozatStatusBeallit(${i}, 'Jelenleg nézem')">Jelenleg nézem</button></li>
                            <li><button class="dropdown-item" type="button" onclick="sorozatStatusBeallit(${i}, 'Megnéztem')">Megnéztem</button></li>
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

                <div class="ratio film-card-image media-card-image border-top border-bottom">
                    ${sorozatok[i].getKep()
        ? `<img src="${sorozatok[i].getKep()}" class="w-100 h-100 object-fit-contain" alt="${sorozatok[i].getCim()}">`
        : `<div class="d-flex align-items-center justify-content-center"><i class="bi bi-tv display-1" aria-hidden="true"></i></div>`
      }
                </div>

                <div class="card-body p-2">
                    <h2 class="card-title h6 fw-bold mb-1" title="${sorozatok[i].getCim()}">
                        ${sorozatok[i].getCim()}
                    </h2>
                    <p class="card-text text-secondary small mb-0">${sorozatok[i].getMufaj()}</p>
                    <p class="card-text text-secondary small mb-0">Megjelenési dátum: ${sorozatok[i].getMegjelenesiEv()}</p>
                </div>

                <div class="card-footer border-0 text-end small p-2 pt-0">
                    ${sorozatok[i].getEvadSzam()} évad
                </div>
            </article>
        </div>
        `;
  }
}

function konyvtarNezetFrissit(kivalasztottMufajok = []) {
  var filmTalalatok = 0;
  var sorozatTalalatok = 0;
  var konyvtariFilmDb = 0;
  var konyvtariSorozatDb = 0;
  var filmKartyak = document.querySelectorAll("#FilmLista .col");
  var sorozatKartyak = document.querySelectorAll("#SorozatokLista .col");

  for (var i = 0; i < filmek.length; i++) {
    var megnezett = ["Megnéztem", "Jelenleg nézem"].includes(
      filmek[i].getStatus(),
    );
    if (megnezett) konyvtariFilmDb++;
    var mufajMegfelel =
      kivalasztottMufajok.length === 0 ||
      kivalasztottMufajok.some((mufaj) => filmek[i].getMufaj().includes(mufaj));
    var konyvtarbanVan = megnezett && mufajMegfelel;
    filmKartyak[i].classList.toggle("d-none", !konyvtarbanVan);
    if (konyvtarbanVan) filmTalalatok++;
  }

  for (var i = 0; i < sorozatok.length; i++) {
    var megnezett = ["Megnéztem", "Jelenleg nézem"].includes(
      sorozatok[i].getStatus(),
    );
    if (megnezett) konyvtariSorozatDb++;
    var mufajMegfelel =
      kivalasztottMufajok.length === 0 ||
      kivalasztottMufajok.some((mufaj) =>
        sorozatok[i].getMufaj().includes(mufaj),
      );
    var konyvtarbanVan = megnezett && mufajMegfelel;
    sorozatKartyak[i].classList.toggle("d-none", !konyvtarbanVan);
    if (konyvtarbanVan) sorozatTalalatok++;
  }

  document
    .querySelector("#FilmLista")
    .classList.toggle("d-none", filmTalalatok === 0);
  document
    .querySelector("#SorozatokLista")
    .classList.toggle("d-none", sorozatTalalatok === 0);
  document
    .querySelector(".filmFelirat")
    .classList.toggle("d-none", filmTalalatok === 0);
  document
    .querySelector(".sorozatokFelirat")
    .classList.toggle("d-none", sorozatTalalatok === 0);
  var konyvtariElemek = konyvtariFilmDb + konyvtariSorozatDb;
  var talalatok = filmTalalatok + sorozatTalalatok;
  document
    .querySelector("#uresAllapot")
    .classList.toggle("d-none", konyvtariElemek > 0);
  document
    .querySelector(".nincsTal")
    .classList.toggle("d-none", konyvtariElemek === 0 || talalatok > 0);
  document
    .querySelector("#szuresTorlo")
    .classList.toggle("d-none", kivalasztottMufajok.length === 0);
}

function aktualisNezetFrissit() {
  var filmLista = document.querySelector("#FilmLista");
  var sorozatLista = document.querySelector("#SorozatokLista");
  var uresAllapot = document.querySelector("#uresAllapot");
  var nincsTalalat = document.querySelector(".nincsTal");

  nincsTalalat.classList.add("d-none");

  if (aktualisNezet === "konyvtaram") {
    konyvtarNezetFrissit();
    return;
  }

  var filmLathato =
    aktualisNezet === "felfedezes" || aktualisNezet === "filmek";
  var sorozatLathato =
    aktualisNezet === "felfedezes" || aktualisNezet === "sorozatok";
  filmLista.classList.toggle("d-none", !filmLathato || filmek.length === 0);
  sorozatLista.classList.toggle(
    "d-none",
    !sorozatLathato || sorozatok.length === 0,
  );
  document
    .querySelector(".filmFelirat")
    .classList.toggle("d-none", !filmLathato || filmek.length === 0);
  document
    .querySelector(".sorozatokFelirat")
    .classList.toggle("d-none", !sorozatLathato || sorozatok.length === 0);

  var lathatoElemek =
    (filmLathato ? filmek.length : 0) + (sorozatLathato ? sorozatok.length : 0);
    uresAllapot.classList.toggle("d-none", lathatoElemek > 0);
}

function tartalomUjrarajzol() {
  filmKiir();
  sorozatokKiir();
  aktualisNezetFrissit();
}

function filmStatusBeallit(index, status) {
  filmek[index].setStatus(status);
  tartalomUjrarajzol();
}

function sorozatStatusBeallit(index, status) {
  sorozatok[index].setStatus(status);
  tartalomUjrarajzol();
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-link")
      .forEach((elem) => elem.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelector("#sorozatokMegjelenes").addEventListener("click", () => {
  aktualisNezet = "sorozatok";
  tartalomUjrarajzol();
});
document.querySelector("#filmekMegjelenes").addEventListener("click", () => {
  aktualisNezet = "filmek";
  tartalomUjrarajzol();
});
document.querySelector("#mindenMegjelen").addEventListener("click", () => {
  aktualisNezet = "felfedezes";
  tartalomUjrarajzol();
});
document
  .querySelector("#konyvtaramMegjelenes")
  .addEventListener("click", () => {
    aktualisNezet = "konyvtaram";
    tartalomUjrarajzol();
  });

document.querySelector(".torlesAlatamasz").addEventListener("click", () => {
  if (filmT == true) {
    filmek.splice(torlendo, 1);
  } else {
    sorozatok.splice(torlendo, 1);
  }
  torlendo = -1;
  filmT = false;
  tartalomUjrarajzol();
});

function torolFilm(index) {
  torlendo = index;
  filmT = true;
  document.querySelector("#exampleModal .modal-title").innerHTML =
    "Biztosan törli a filmet?";
}
function torolSorozat(index) {
  torlendo = index;
  document.querySelector("#exampleModal .modal-title").innerHTML =
    "Biztosan törli a sorozatot?";
}
  
function uresAllapot() {
  if (filmek.length == 0 && sorozatok.length == 0) {
    document.querySelector("#uresAllapot").classList.remove("d-none");
    document.querySelector(".filmFelirat").classList.add("d-none");
    document.querySelector(".sorozatokFelirat").classList.add("d-none");
  } else if (sorozatok.length == 0) {
    document.querySelector("#uresAllapot").classList.add("d-none");
    document.querySelector(".sorozatokFelirat").classList.add("d-none");
  } else if (filmek.length == 0) {
    document.querySelector("#uresAllapot").classList.add("d-none");
    document.querySelector(".filmFelirat").classList.add("d-none");
  } else {
    document.querySelector("#uresAllapot").classList.add("d-none");
    document.querySelector(".filmFelirat").classList.remove("d-none");
    document.querySelector(".sorozatokFelirat").classList.remove("d-none");
  }
}
uresAllapot();

function tipusValaszto() {
  var filmTipus = document.querySelector("#filmValasz");
  var sorozatTipus = document.querySelector("#sorozatValasz");
  var hosszevadInput = document.querySelector(".hosszevadInput");
  var hosszevadErtek = document.querySelector("#hosszevadErtek");

  if (filmTipus.checked) {
    hosszevadInput.textContent = "Hossz:";
    hosszevadErtek.placeholder = "pl.: 120(Perc)";
  } else if (sorozatTipus.checked) {
    hosszevadInput.textContent = "Évad:";
    hosszevadErtek.placeholder = "pl.: 5(Évadszám)";
  }
}

function mufajEllenorzo() {
  var mufajok = document.querySelectorAll(".btn-check");
  var kivalasztott = document.querySelectorAll(".btn-check:checked");

  for (var i = 0; i < mufajok.length; i++) {
    if (kivalasztott.length >= 3 && !mufajok[i].checked) {
      mufajok[i].disabled = true;
    } else {
      mufajok[i].disabled = false;
    }
  }
}

document.querySelector("#hozzaad").addEventListener("click", () => {
  var cimErtek = document.querySelector("#cimErtek").value;
  var mufajokKivalasztott = document.querySelectorAll(".btn-check:checked");
  var ertekelesErtek = document.querySelector("#ertekelesErtek").value;
  var megjelenesErtek = document.querySelector("#megjelenesErtek").value;
  var hosszevadErtek = document.querySelector("#hosszevadErtek").value;
  var kepErtek = document.querySelector("#kepErtek").value;

  var filmTipus = document.querySelector("#filmValasz");
  var sorozatTipus = document.querySelector("#sorozatValasz");

  var mufajok = [];

  for (var i = 0; i < mufajokKivalasztott.length; i++) {
    if (mufajokKivalasztott[i].id == "btn-check-4") {
      mufajok.push("Akció");
    } else if (mufajokKivalasztott[i].id == "btn-check-5") {
      mufajok.push("Dráma");
    } else if (mufajokKivalasztott[i].id == "btn-check-6") {
      mufajok.push("Vígjáték");
    } else if (mufajokKivalasztott[i].id == "btn-check-7") {
      mufajok.push("Sci-fi");
    } else if (mufajokKivalasztott[i].id == "btn-check-8") {
      mufajok.push("Horror");
    } else if (mufajokKivalasztott[i].id == "btn-check-9") {
      mufajok.push("Romantikus");
    }
  }

  var mufajSzoveg = mufajok.join(", ");

  if (filmTipus.checked) {
    var ujfilm = new Film(
      cimErtek,
      mufajSzoveg,
      Number(megjelenesErtek),
      Number(hosszevadErtek),
      kepErtek,
    );
    ujfilm.setErtekeles(Number(ertekelesErtek));
    filmek.push(ujfilm);
    document
      .querySelectorAll(
        "#cimErtek, #ertekelesErtek, #megjelenesErtek, #hosszevadErtek, #kepErtek",
      )
      .forEach((input) => (input.value = ""));
    document
      .querySelectorAll(".btn-check")
      .forEach((input) => (input.checked = false));
    mufajEllenorzo();
  } else if (sorozatTipus.checked) {
    var ujsorozat = new Sorozatok(
      cimErtek,
      mufajSzoveg,
      Number(megjelenesErtek),
      Number(hosszevadErtek),
      kepErtek,
    );
    ujsorozat.setErtekeles(Number(ertekelesErtek));
    sorozatok.push(ujsorozat);
    document
      .querySelectorAll(
        "#cimErtek, #ertekelesErtek, #megjelenesErtek, #hosszevadErtek, #kepErtek",
      )
      .forEach((input) => (input.value = ""));
    document
      .querySelectorAll(".btn-check")
      .forEach((input) => (input.checked = false));
    mufajEllenorzo();
  }

  tartalomUjrarajzol();
});

sorozatokKiir();
filmKiir();

document.querySelector("#szuresGomb").addEventListener("click", () => {
  var torlesGomb = document.querySelector("#szuresTorlo");
  var nincsTalalat = document.querySelector(".nincsTal");

  var mufajok = document.querySelectorAll(
    ".szuresAdatok input[id^='mufaj']:checked",
  );

  filmKiir();
  sorozatokKiir();

  if (aktualisNezet === "konyvtaram") {
    konyvtarNezetFrissit(Array.from(mufajok, (mufaj) => mufaj.value));
    torlesGomb.classList.remove("d-none");
    return;
  }

  var filmKartyak = document.querySelectorAll("#FilmLista .col");
  var sorozatKartyak = document.querySelectorAll("#SorozatokLista .col");

  var filmListaLathato = !document
    .querySelector("#FilmLista")
    .classList.contains("d-none");
  var sorozatListaLathato = !document
    .querySelector("#SorozatokLista")
    .classList.contains("d-none");
  var filmTalalatok = 0;
  var sorozatTalalatok = 0;

  for (var i = 0; i < filmek.length; i++) {
    var megfelel = mufajok.length == 0;

    mufajok.forEach(function (mufaj) {
      if (filmek[i].getMufaj().includes(mufaj.value)) {
        megfelel = true;
      }
    });

    filmKartyak[i].classList.toggle("d-none", !megfelel);

    if (megfelel) filmTalalatok++;
  }

  for (var i = 0; i < sorozatok.length; i++) {
    var megfelel = mufajok.length == 0;

    mufajok.forEach(function (mufaj) {
      if (sorozatok[i].getMufaj().includes(mufaj.value)) {
        megfelel = true;
      }
    });

    sorozatKartyak[i].classList.toggle("d-none", !megfelel);

    if (megfelel) sorozatTalalatok++;
  }

  var megjelenitettTalalatok =
    (filmListaLathato ? filmTalalatok : 0) +
    (sorozatListaLathato ? sorozatTalalatok : 0);

  torlesGomb.classList.remove("d-none");

  nincsTalalat.classList.toggle("d-none", megjelenitettTalalatok > 0);

  document
    .querySelector(".filmFelirat")
    .classList.toggle("d-none", !filmListaLathato || filmTalalatok === 0);

  document
    .querySelector(".sorozatokFelirat")
    .classList.toggle("d-none", !sorozatListaLathato || sorozatTalalatok === 0);
});

document.querySelector("#szuresTorlo").addEventListener("click", () => {
  document.querySelectorAll(".szuresAdatok input").forEach((input) => {
    input.checked = false;
  });

  tartalomUjrarajzol();
});
