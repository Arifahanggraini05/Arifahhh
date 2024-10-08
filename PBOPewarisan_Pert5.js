//pewarisan
class People {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    tampilkanInformasi() {
        console.log(`Nama: ${this.name}, Alamat: ${this.address}`);
    }
}

// Definisi kelas turunan
class Student extends People {
    constructor(name, address, nim) {
        super(name, address); // Memanggil konstruktor kelas induk
        this.nim = nim;
    }

    tampilkanInformasi() {
        super.tampilkanInformasi(); // Memanggil metode dari kelas induk
        console.log(`NIM: ${this.nim}`);
    }
}

class Tambahan extends People {
    constructor(name, address, nim, ukm) {
        super(name, address);
        this.nim = nim;
        this.ukm = ukm;
    }
    tampilkanInformasi() {
        super.tampilkanInformasi();
        console.log(`NIM: ${this.nim}`, `UKM: ${this.ukm}`)
    }
}

// Penggunaan kelas turunan
const mahasiswa1 = new Tambahan("Arifah", "Jl. Merdeka Barat No 45", "00010030", "MAPALA");
mahasiswa1.tampilkanInformasi();
