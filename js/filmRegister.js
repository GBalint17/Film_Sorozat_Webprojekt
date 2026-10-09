class Film{
    #cim
    #mufaj
    #megjelenes
    #hossz
    #ertekeles
    #megtekintes

    constructor(cim, mufaj, megjelenes, hossz){
        this.setCim(cim);
        this.setMufaj(mufaj);
        this.setMegjelenes(megjelenes);
        this.setHossz(hossz);
        this.setErtekeles(10);
        this.setMegtekintes(false);
    }

    setCim(cim){
        this.#cim = cim;
    }

    setMufaj(mufaj){
        this.#mufaj = mufaj;
    }

    setMegjelenes(megjelenes){
        this.#megjelenes = megjelenes;
    }

    setHossz(hossz){
        this.#hossz = hossz;
    }

    getCim(){
        return this.#cim;
    }

    getMufaj(){
        return this.#mufaj;
    }

    getMegjelenes(){
        return this.#megjelenes
    }

    getHossz(){
        return this.#hossz;
    }

    
}