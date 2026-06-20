console.log("\n================soal nomor 1==================");
console.log("LOOPING PERTAMA");
let maju = 1;
while (maju <= 5) {
  console.log(`${maju} - I love coding`);
  maju++;
}

console.log("LOOPING KEDUA");
let mundur = 10;
while (mundur >= 1) {
  console.log(`${mundur} - I will become a mobile developer`);
  mundur--;
}

console.log("\n================soal nomor 2==================");

console.log("LOOPING PERTAMA");
for (let i = 1; i <= 5; i++) {
  console.log(`${i} - menghitung maju`);
}

console.log("LOOPING KEDUA");
for (let j = 5; j >= 1; j--) {
  console.log(`${j} - menghitung mundur`);
}

console.log("\n================soal nomor 3==================");
for (let counter = 1; counter <= 100; counter++) {
  if (counter % 2 === 0) {
    console.log(`${counter} - GENAP`);
  } else {
    console.log(`${counter} - GANJIL`);
  }
}

console.log("\n================soal nomor 4==================");

console.log("--- Increment 2 (KELIPATAN 3) ---");
for (let i = 1; i <= 100; i += 2) {
  if (i % 3 === 0) {
    console.log(`${i} kelipatan 3`);
  }
}

// Perulangan 2: Pertambahan 5, cek kelipatan 6
console.log("--- Increment 5 (KELIPATAN 6) ---");
for (let j = 1; j <= 100; j += 5) {
  if (j % 6 === 0) {
    console.log(`${j} kelipatan 6`);
  }
}

// Perulangan 3: Pertambahan 9, cek kelipatan 10
console.log("--- Increment 9 (KELIPATAN 10) ---");
for (let k = 1; k <= 100; k += 9) {
  if (k % 10 === 0) {
    console.log(`${k} kelipatan 10`);
  }
}

console.log("\n================soal nomor 5==================");

let input = 5;

for (let i = 1; i <= input; i++) {
  let stringBintang = "";
  for (let j = 1; j <= i; j++) {
    stringBintang += "*";
  }
  console.log(stringBintang);
}
