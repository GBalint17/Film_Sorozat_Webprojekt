var sorozat1 = new Sorozatok("Breaking Bad", "Dráma, Akció", 2008, 5, "img/breakingbad.webp");

console.log(sorozat1.toString())

console.assert(sorozat1.toString() == "{Breaking Bad;Dráma, Akció;2008;5;10;Látni akarom;img/breakingbad.webp}", "Hiba a konstruktor adatbeállításában!")

sorozat1.setErtekeles(-1)
console.log(sorozat1.toString())

console.assert(sorozat1.toString() == "{Breaking Bad;Dráma, Akció;2008;5;1;Látni akarom;img/breakingbad.webp}", "Hiba a setErtekeles() metódusban! Nem állítja 1-re a minuszértékű értékeléseket.")

sorozat1.setErtekeles(11)
console.log(sorozat1.toString())

console.assert(sorozat1.toString() == "{Breaking Bad;Dráma, Akció;2008;5;10;Látni akarom;img/breakingbad.webp}", "Hiba a setErtekeles() metódusban! Nem állítja 10-re a 10-nél nagyobbi értékeléseket.")

sorozat1.setCim(" ")
console.log(sorozat1.toString())

console.assert(sorozat1.toString() == "{Ismeretlen cím;Dráma, Akció;2008;5;10;Látni akarom;img/breakingbad.webp}", "Hiba a setCim() metódusban! Nem állítja Ismeretlen cím-re az üres értéket.")
