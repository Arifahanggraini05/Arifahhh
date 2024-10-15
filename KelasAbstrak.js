// Kelas abstrak tidak dapat diinstansiasi secara langsung
class Kendaraan {
    constructor(jenis) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas Kendaraan adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Mobil extends Kendaraan {
    constructor() {
        super('Mobil');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda.`);
    }
}

class Kapal extends Kendaraan {
    constructor() {
        super('Kapal');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di atas air.`);
    }
}

class Kereta extends Kendaraan {
    constructor() {
        super('Kereta');
    }
    
    bergerak() {
        console.log(`${this.jenis} bergerak di atas rel.`);
    }
}

// Penggunaan
const mobil = new Mobil();
mobil.bergerak(); // Output: Mobil bergerak dengan roda.

const kapal = new Kapal();
kapal.bergerak(); // Output: Kapal bergerak di atas air.

const kereta = new Kereta();
kereta.bergerak(); // output : Kereta bergerak di atas rel.
// Definisi antarmuka melalui pola objek
const KendaraanInterface = {
    bergerak: function() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
};
