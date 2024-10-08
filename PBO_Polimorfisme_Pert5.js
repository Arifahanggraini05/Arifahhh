// Definisi kelas induk
class People {
    tampilkanProfession() {
        console.log("Peran: Orang biasa");
    }
}

// Definisi kelas turunan
class DBE extends People {
    tampilkanProfession() {
        console.log("Peran: Database Engineer");
    }
}

class Programmer extends People {
    tampilkanProfession() {
        console.log("Peran: Programmer");
    }
}

class DataAnalyst extends People {
    tampilkanProfession() {
        console.log("Peran: Data Analis");
    }
}

// Menggunakan polimorfisme
const orang1 = new People();
const mahasiswa1 = new DBE();
const dosen1 = new Programmer();
const DA1 = new DataAnalyst();

orang1.tampilkanProfession();    // Output: Peran: Orang biasa
mahasiswa1.tampilkanProfession(); // Output: Peran: Database Engineer
dosen1.tampilkanProfession();     // Output: Peran: Programmer
DA1.tampilkanProfession(); // Output : Peran : Data Analis
