// Definisikan antarmuka Kendaraan
class KendaraanInterface {
    constructor() {
        if (new.target === KendaraanInterface) {
            throw new Error("Interface cannot be instantiated.");
        }
    }

    bergerak() {
        throw new Error("Method must be implemented.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Pesawat extends KendaraanInterface {
    bergerak() {
        console.log("Pesawat terbang di udara.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Sepeda extends KendaraanInterface {
    bergerak() {
        console.log("Sepeda bergerak dengan pedal.");
    }
}

class Becak extends KendaraanInterface {
    bergerak() {
        console.log("Becak bergerak dengan cara dikayuh.");
    }
}
// Penggunaan
const pesawat = new Pesawat();
pesawat.bergerak(); // Output: Pesawat terbang di udara.

const sepeda = new Sepeda();
sepeda.bergerak(); // Output: Sepeda bergerak dengan pedal.

const becak = new Becak();
becak.bergerak(); // output : Becak bergerak dengan cara dikayuh.
