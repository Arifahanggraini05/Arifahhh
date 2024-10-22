class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRataRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }
}

class NilaiView {
    render(rataRata) {
        return `
            <div class="nilai-card">
                <p>Rata-rata nilai: ${rataRata}</p>
            </div>
        `;
    }

    renderError(error) {
        return `
            <div class="nilai-card error">
                <p>Error: ${error}</p>
            </div>
        `;
    }
}

class NilaiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanRataRata(nilai) {
        try {
            const modelNilai = new this.model(nilai);
            const rataRata = modelNilai.hitungRataRata();
            //document.getElementById("output").innerHTML = this.view.render(rataRata);
        } catch (error) {
            //document.getElementById("output").innerHTML = this.view.renderError(error.message);
        }
    }
}

// Inisialisasi dan Penggunaan
const nilai = new Nilai();
const nilaiview = new NilaiView();
const nilaiController = new NilaiController(Nilai, nilaiview);

// Menampilkan rata-rata
nilaiController.tampilkanRataRata([80, 90, 100]); 

// Menampilkan error: Data nilai tidak valid atau kosong.
nilaiController.tampilkanRataRata([]); 

function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

// Penggunaan fungsi bagi
console.log(bagi(10, 2)); // Output: 5
console.log(bagi(10, 0)); // Output: Terjadi error: Pembagian dengan nol tidak diperbolehkan.
                           //         Operasi pembagian selesai.
                
function kali(c,d) {
    try {
        if(d === 0) {
            throw new Error("Perkalian dengan nol akan menghasilkan nol.");
        }
        return c*d;
    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        console.log("Operasi perkalian selesai");
    }
}

console.log(kali(2,6));
console.log(kali(3,0));

function kurang(e,f) {
    try {
        if(f > e) {
            throw new Error("Pengurangan akan menghasilkan nilai minus");
        }
        return e - f;
    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        console.log("Operasi pengurangan selesai");
    }
}

console.log(kurang(8,4));
console.log(kurang(5,9));
