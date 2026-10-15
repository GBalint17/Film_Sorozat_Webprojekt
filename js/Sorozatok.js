class Sorozatok {
    #cim;
    #mufaj;
    #megjelenésiEV;
    #evadSzam;
    #kep;
    #ertekeles;
    #status;

    constructor(cim, mufaj, megjelenésiEV, evadSzam, kep) {
        this.setCim(cim);
        this.setMufaj(mufaj);
        this.setMegjelenésiEv(megjelenésiEV);
        this.setEvadSzam(evadSzam);
        this.setKep(kep);
        this.setErtekeles(10);
        this.setStatus("Látni akarom");
    }
    setCim(cim) {
        if(cim == "" || cim == " "){
            this.#cim = "Ismeretlen cím";
        }else{
            this.#cim = cim;
        }
    }
    setMufaj(mufaj) {
        this.#mufaj = mufaj;
    }
    setMegjelenésiEv(megjelenesiEv) {
        if (megjelenesiEv < 0) {
            this.#megjelenésiEV = 0;
        } else {
            this.#megjelenésiEV = megjelenesiEv;
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

    setKep(kep){
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
    getMegjelenésiEv() {
        return this.#megjelenésiEV;
    }
    getEvadSzam() {
        return this.#evadSzam;
    }
    getKep(){
        return this.#kep;
    }
    getErtekeles() {
        return this.#ertekeles;
    }
    getStatus() {
        return this.#status;
    }

    toString() {
        return "{" + this.getCim() + ";" + this.getMufaj() + ";" + this.getMegjelenésiEv() + ";" + this.getEvadSzam() + ";" + this.getErtekeles() + ";" + this.getStatus() + "}";
    }
}
