class Mahasiswa {
    constructor(nama, nim, nilai) {
        this.nama = nama;  // Atribut publik
        this.nim = nim;    // Atribut publik
        let _nilai = nilai; // Atribut private menggunakan closure

        // Getter untuk mengakses nilai
        this.getNilai = function() {
            return _nilai;
        };

        // Setter untuk mengubah nilai dengan validasi
        this.setNilai = function(nilaiBaru) {
            if (nilaiBaru >= 0 && nilaiBaru <= 100) {
                _nilai = nilaiBaru;
            } else {
                console.log("Nilai harus antara 0 dan 100");
            }
        };
    }
}

class MahasiswaView {
    render(mahasiswa) {
        return `
            <div class="mahasiswa-card">
                <h2>${mahasiswa.nama}</h2>
                <p>NIM: ${mahasiswa.nim}</p>
                <p>Nilai: ${mahasiswa.getNilai()}</p>
            </div>
        `;
    }
}

class MahasiswaController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.mahasiswa = null;
    }

    tampilkanMahasiswa() {
        this.mahasiswa = new this.model("Budi", "123456", 85);
        //document.getElementById("output").innerHTML = this.view.render(this.mahasiswa);
    }

    ubahNilai(nilaiBaru) {
        if (this.mahasiswa) {
            this.mahasiswa.setNilai(nilaiBaru);
            console.log(`${this.mahasiswa.nama} memiliki nilai baru: ${this.mahasiswa.getNilai()}`);
            //document.getElementById("output").innerHTML = this.view.render(this.mahasiswa); // Re-render the updated value
        } else {
            console.log("Mahasiswa instance does not exist");
        }
    }
}

// Inisialisasi dan Penggunaan
const mahasiswa = new Mahasiswa("Budi", "123456", 85);
const mahasiswaView = new MahasiswaView();
const mahasiswaController = new MahasiswaController(Mahasiswa, mahasiswaView);

mahasiswaController.tampilkanMahasiswa();
mahasiswaController.ubahNilai(95);