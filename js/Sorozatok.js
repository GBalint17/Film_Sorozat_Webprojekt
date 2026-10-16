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
        this.#mufaj = mufaj;
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
        this.#kep = kep;
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
