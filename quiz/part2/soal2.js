//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here
console.log("================soal nomor 1==================\n");
console.log(
  word +
    " " +
    second +
    " " +
    third +
    " " +
    fourth +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh,
);

// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = "wow JavaScript is so cool";
let exampleFirstWord = word2[0] + word2[1] + word2[2];
let secondWord =
  word2[4] +
  word2[5] +
  word2[6] +
  word2[7] +
  word2[8] +
  word2[9] +
  word2[10] +
  word2[11] +
  word2[12] +
  word2[13];

console.log("================soal nomor 2==================\n");
console.log(word2);
console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);

//lanjutkan dengan struktur log diatas

// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
console.log("================soal nomor 3==================\n");
let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);
let dua = word3.substring(4, 14);
let tiga = word3.substring(15, 17);
let empat = word3.substring(18, 20);
let lima = word3.substring(21, 25);

console.log("First Word: " + exampleFirstWord3);
console.log("Second Word: " + dua);
console.log("Third Word: " + tiga);
console.log("Fourth Word: " + empat);
console.log("Fifth Word: " + lima);

// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);
let duaa = word3.substring(4, 14);
let tigaa = word3.substring(15, 17);
let empata = word3.substring(18, 20);
let limaa = word3.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let duaLength = dua.length;
let tigaLength = tiga.length;
let empatLength = empat.length;
let limaLength = lima.length;
console.log("================soal nomor 4==================\n");

console.log(
  "First Word: " + exampleFirstWord + ", with length: " + firstWordLength,
);
console.log("First Word: " + duaa + ", with length: " + dua.length);
console.log("First Word: " + tigaa + ", with length: " + tiga.length);
console.log("First Word: " + empata + ", with length: " + empat.length);
console.log("First Word: " + limaa + ", with length: " + lima.length);

// tulis code sesuai dengan keterangan soalnya dan pola example yang ada

// Selamat Mengerjakan 👨🏻‍🌾
