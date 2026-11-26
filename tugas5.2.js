// Fungsi non-void untuk menghitung luas persegi panjang
function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

// Fungsi non-void untuk menghitung keliling persegi panjang
function kelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}

// Menentukan nilai panjang dan lebar
let panjang = 10;
let lebar = 4;

// Memanggil fungsi dan menyimpan hasilnya ke dalam variabel
let hasilLuas = luasPersegiPanjang(panjang, lebar);
let hasilKeliling = kelilingPersegiPanjang(panjang, lebar);

// Menampilkan hasil ke Console dengan kalimat yang jelas
console.log("Luas = " + hasilLuas);
console.log("Keliling = " + hasilKeliling);