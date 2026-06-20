var nama = "Budi";

console.log("Pesan biasa");
console.log(`nama ${nama}`);
console.log(`User: ${nama}`, { nama: "Budi", umur: 25 });

console.error("Terjadi kesalahan!");

const users = [
  { nama: "Budi", umur: 25 },
  { nama: "Ani", umur: 23 },
  { nama: "ali", umur: 23.5 },
  { nama: "ali", umur: 32, meja: 23.5 },
];
console.table(users);

console.group("User Detail");
console.log("Nama: Budi");
console.log("Umur: 25");
console.groupEnd();

console.time("Loop");
for (let i = 0; i < 10; i++) {
  // proses
}
console.timeEnd("Loop");

// function hitungTotal(harga, jumlah) {
//   console.log("Input:", { harga, jumlah });

//   const total = harga * jumlah;
//   console.log("Total:", total);

//   if (total > 1000000) {
//     console.warn("Transaksi besar terdeteksi");
//   } else console.log("miskin");

//   return total;
// }

// hitungTotal(10000, 3);

// console.log(typeof "Budi"); // "string"
// console.log(typeof 25); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (ini adalah bug/quirk JavaScript)
// console.log(typeof []); // "object"
// console.log(typeof {}); // "object"
// console.log(typeof function () {}); // "function"

let produk = {
  nama: "Laptop", // string
  harga: 15000000, // number
  stok: 10, // number
  spesifikasi: ["i7", "16GB RAM"], // array
  tersedia: true, // boolean
  getInfo: function () {
    // function
    return `${this.nama} - Rp${this.harga}`;
  },
};

// Menggunakan berbagai tipe data
if (produk.stok > 0 && produk.stok < 10 && produk.tersedia) {
  console.log(produk.getInfo());
  console.log("Spesifikasi:", produk.spesifikasi.join(", "));
} else if (produk.stok >= 10 && produk.tersedia) {
  console.log(" barangnya masih banyyak, beli banyak biar dapat discount");
} else {
  console.log("Tidak ada Barang");
}

let teks = "Hello World";

// // Mengakses karakter dengan index
// console.log(teks[0]); // "H"
// console.log(teks[6]); // "W"
// console.log(teks[10]); // "d"

// // Mencoba mengubah karakter (tidak akan berhasil karena immutable)
// teks[0] = "J"; // Tidak akan mengubah string
// console.log(teks); // Tetap "Hello World"
let counter = 1;

// Increment (menambah 1)
counter++; // counter = counter + 1
console.log(counter); // 6

// Decrement (mengurangi 1)
counter--; // counter = counter - 1
console.log(counter); // 5

if (counter < 10) {
  while (counter < 10) {
    counter++;
    console.log("iterasi ke ", counter);
    console.log("harus di tambahkan 1");
  }
  counter++;
  console.log(counter);
} else if (counter > 10) {
  while (counter > 10) {
    counter--;
  }
  console.log(counter);
}
