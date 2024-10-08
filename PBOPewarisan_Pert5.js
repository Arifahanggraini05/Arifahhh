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

// Penggunaan kelas turunan
const mahasiswa1 = new Mahasiswa("Arifah", "Jl. Merdeka Barat No 45", "00010030");
mahasiswa1.tampilkanInformasi();
