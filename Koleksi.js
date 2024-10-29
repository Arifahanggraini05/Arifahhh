// Menggunakan List (Array)
let listMahasiswa = ["Budi", "Siti", "Agus", "Arifah", "Sza"];
listMahasiswa.push("Ani"); // Menambahkan elemen baru
console.log(listMahasiswa[2]); //  untuk mengakses elemen tertentu
listMahasiswa[3] = "Anggraini"; // untuk update atau mengubah elemen tertentu
listMahasiswa.pop(); // untuk menghapus elemen terakhir dalam list
listMahasiswa.splice(1,1); // untuk menghapus elemen tertentu
console.log(listMahasiswa);


// Menggunakan Set
let setMahasiswa = new Set(["Budi", "Siti", "Agus"]);
setMahasiswa.add("Ani");
setMahasiswa.add("Budi"); // Tidak akan menambahkan karena Budi sudah ada
setMahasiswa.delete("Siti"); 
console.log(setMahasiswa);

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("Budi", 90);
mapNilai.set("Siti", 85);
mapNilai.set("Agus", 95);
console.log(mapNilai.get("Budi")); // Output: 90
mapNilai.set("Agus", 90); // untuk update nilai tertentu
console.log(mapNilai.delete("Budi")); // untuk menghapus elemen tertentu
console.log(mapNilai);
