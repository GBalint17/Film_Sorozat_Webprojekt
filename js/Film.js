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
    if (cim == "" || cim == " ") {
      this.#cim = "Ismeretlen cím";
    } else {
      this.#cim = cim;
    }
  }

  setMufaj(mufaj) {
    this.#mufaj = mufaj;
  }

  setMegjelenes(megjelenes) {
    if (megjelenes < 0) {
      this.#megjelenes = 0
    } else {
      this.#megjelenes = megjelenes;
    }
  }

  setHossz(hossz) {
    if (hossz < 1) {
      this.#hossz = 1;
    }else{
      this.#hossz = hossz;
    }
    
  }

  setKep(kep) {
    if (
      !kep.endsWith('.jpg') &&
      !kep.endsWith('.jpeg') &&
      !kep.endsWith('.png') &&
      !kep.startsWith("https://") &&
      !kep.endsWith('.webp')
    ) {
      this.#kep = "Ismeretlen kép formátum."
    } else {
      this.#kep = kep
    }
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

  toString() {
    return "{" + this.getCim() + ";" + this.getMufaj() + ";" + this.getMegjelenes() + ";" + this.getHossz() + ";" + this.getErtekeles() + ";" + this.getStatus() + ";" + this.getKep() + "}";
  }
}
