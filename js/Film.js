class Film {
  #cim;
  #mufaj;
  #megjelenes;
  #hossz;
  #kep;
  #ertekeles;
  #status;

  constructor(cim, mufaj, megjelenes, hossz, kep) {
    this.setCim(cim);
    this.setMufaj(mufaj);
    this.setMegjelenes(megjelenes);
    this.setHossz(hossz);
    this.setKep(kep);
    this.setErtekeles(10);
    this.setStatus("Látni akarom");
  }

  setCim(cim) {
    this.#cim = cim;
  }

  setMufaj(mufaj) {
    this.#mufaj = mufaj;
  }

  setMegjelenes(megjelenes) {
    this.#megjelenes = megjelenes;
  }

  setHossz(hossz) {
    this.#hossz = hossz;
  }

  setKep(kep) {
    this.#kep = kep;
  }

  setErtekeles(ertekeles) {
    if (ertekeles < 1) {
      this.#ertekeles = 1;
    } else if (ertekeles > 10) {
      this.#ertekeles = 10;
    } else {
      this.#ertekeles = ertekeles;
    }
  }

  setStatus(status) {
    this.#status = status;
  }

  getCim() {
    return this.#cim;
  }

  getMufaj() {
    return this.#mufaj;
  }

  getMegjelenes() {
    return this.#megjelenes;
  }

  getHossz() {
    return this.#hossz;
  }

  getKep() {
    return this.#kep;
  }

  getErtekeles() {
    return this.#ertekeles;
  }

  getStatus() {
    return this.#status;
  }
}
