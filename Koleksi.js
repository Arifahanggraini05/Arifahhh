// Menggunakan List (Array)
let listMahasiswa = ["Budi", "Siti", "Agus", "Arifah", "Sza"];
listMahasiswa.push("Ani"); // Menambahkan elemen baru
console.log(listMahasiswa); // Output: ["Budi", "Siti", "Agus", "Ani"]
console.log(listMahasiswa[2]); //  untuk mengakses elemen tertentu
listMahasiswa[5] = "Anggraini"; // untuk update atau mengubah elemen tertentu
console.log(listMahasiswa); 
listMahasiswa.pop(); // untuk menghapus elemen terakhir dalam list
console.log(listMahasiswa);


// Menggunakan Set
let setMahasiswa = new Set(["Budi", "Siti", "Agus"]);
setMahasiswa.add("Ani");
setMahasiswa.add("Budi"); // Tidak akan menambahkan karena Budi sudah ada
setMahasiswa.delete("Siti"); 
setMahasiswa[0] = "Bima";
console.log(setMahasiswa); // Output: Set(4) {"Budi", "Siti", "Agus", "Ani"}

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("Budi", 90);
mapNilai.set("Siti", 85);
mapNilai.set("Agus", 95);
console.log(mapNilai.get("Budi")); // Output: 90
console.log(mapNilai.delete("Budi"));
