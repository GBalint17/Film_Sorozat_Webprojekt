var csillagokK = new Film("Csillagok között", "Dráma", 2014, 169, "img/csillagokkozt.jpg");

console.assert(csillagokK.toString() == "{Csillagok között;Dráma;2014;169;10;Látni akarom;img/csillagokkozt.jpg}", "Hiba a konstruktor adatbeállításában");

csillagokK.setCim("");
console.assert(csillagokK.getCim() == "Ismeretlen cím", "Hiba a setCim() metódus működésében, engedi a nem megfelelő név beállítását");

csillagokK.setMegjelenes(-1);
console.assert(csillagokK.getMegjelenes() == 0, "Hiba a setMegjelenes metódus működésében, engedi a - érték beállítását");

csillagokK.setHossz(0);
console.assert(csillagokK.getHossz() == 1, "Hiba a setHossz() metódus működésében, engedi 1-nél kisebb szám beállítását");

csillagokK.setKep("img/csillagokkozt");
console.assert(csillagokK.getKep() == "Ismeretlen kép formátum.", "Hiba a setKep() metódusban, engedi a nem megfelelő formátumú kép berakását");

csillagokK.setErtekeles(-4);
console.assert(csillagokK.getErtekeles() == 1, "Hiba a setErtekeles() metódusban, engedi az 1-nél kisebb érték beállítását");
csillagokK.setErtekeles(34);
console.assert(csillagokK.getErtekeles() == 10, "Hiba a setErtekeles() metódusban, engedi a 10-nél nagyobb érték beállítását");