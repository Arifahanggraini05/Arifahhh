// Fungsi generik menggunakan pola
function getElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    throw new Error("Indeks di luar jangkauan");
}

function tambahElement(array, element) {
    array.push(element);
    return array;
}

function ubahElement(array, index, element) {
    if(index >= 0 && index < array.length) {
        array[index] = element;
        return array;
    }
    throw new Error("Indeks di luar jangkauan");
}

function hapusElement(array, index) {
    if(index >= 0 && index < array.length) {
        array.splice(index,1);
        return array
    }
    throw new Error("Indeks di luar jangkauan");
}

let angka = [10, 20, 30];
let kata = ["satu", "dua", "tiga"];

console.log(getElementAtIndex(angka, 1)); // Output: 20
console.log(getElementAtIndex(kata, 0)); // Output: "satu"
console.log(tambahElement(angka,70));
console.log(ubahElement(kata, 0, "sepuluh"));
console.log(hapusElement(angka, 0));
