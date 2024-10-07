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

// Menggunakan polimorfisme
const orang1 = new People();
const mahasiswa1 = new DBE();
const dosen1 = new Programmer();

orang1.tampilkanProfession();    // Output: Peran: Orang biasa
mahasiswa1.tampilkanProfession(); // Output: Peran: Database Engineer
dosen1.tampilkanProfession();     // Output: Peran: Programmer
