# Definisi kelas Student_Collague
class Student_Collague:
    # Konstruktor kelas untuk inisialisasi objek
    def __init__(self, nama, nim, jurusan):
        self.nama = nama
        self.nim = nim
        self.jurusan = jurusan

    # Metode untuk menampilkan aktivitas belajar
    def study(self):
        print(f"{self.nama} sedang membaca buku di perpustakaan.")

# Implementasi penggunaan kelas Mahasiswa
Student1 = Student_Collague("Arifah", "202301110030", "Informatika")
Student2 = Student_Collague("Anggraini", "202201110078", "Sistem Informasi")

# Menggunakan metode objek
Student1.study()  # Output: Budi sedang membaca buku di perpustakaan.
Student2.study()  # Output: Ani sedang membaca buku di perpustakaan.
