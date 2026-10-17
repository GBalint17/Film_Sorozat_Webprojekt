class Sorozatok {
    #cim;
    #mufaj;
    #megjelenesiEV;
    #evadSzam;
    #kep;
    #ertekeles;
    #status;

    constructor(cim, mufaj, megjelenesiEV, evadSzam, kep) {
        this.setCim(cim);
        this.setMufaj(mufaj);
        this.setMegjelenesiEv(megjelenesiEV);
        this.setEvadSzam(evadSzam);
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
    var ervenyesMufajok = [
        "Akció", "Dráma", "Vígjáték",
        "Sci-fi", "Horror", "Romantika"
    ];

    var validMufaj = [];

    var mufajDarabok = mufaj.split(", ");
    if (mufajDarabok.length == 1) {
        if (ervenyesMufajok.includes(mufaj)) {
            this.#mufaj = mufaj;
        } else {
            this.#mufaj = undefined;
        }
    } else {
        for (let i = 0; i < mufajDarabok.length; i++) {
            if (ervenyesMufajok.includes(mufajDarabok[i])) {
                validMufaj.push(mufajDarabok[i]);
            }
        }
        if (validMufaj.length != mufajDarabok.length) {
            this.#mufaj = undefined;
        } else {
            this.#mufaj = validMufaj.join(", ");
        }
    }
}
    setMegjelenesiEv(megjelenesiEv) {
        if (megjelenesiEv < 0) {
            this.#megjelenesiEV = 0;
        } else {
            this.#megjelenesiEV = megjelenesiEv;
        }
    }
    setEvadSzam(evadSzam) {
        if (evadSzam < 1) {
            this.#evadSzam = 1;
        } else {
            this.#evadSzam = evadSzam;
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

    setStatus(status) {
        this.#status = status;
    }

    getCim() {
        return this.#cim;
    }

    getMufaj() {
        return this.#mufaj;
    }

    getMegjelenesiEv() {
        return this.#megjelenesiEV;
    }

    getEvadSzam() {
        return this.#evadSzam;
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
        return "{" + this.getCim() + ";" + this.getMufaj() + ";" + this.getMegjelenesiEv() + ";" + this.getEvadSzam() + ";" + this.getErtekeles() + ";" + this.getStatus() + ";" + this.getKep() + "}";
    }
}
