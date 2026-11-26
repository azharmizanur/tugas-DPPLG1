// 1. Fungsi non-void untuk menghitung rata-rata tiga nilai
function hitungRatarata(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

// 2. Fungsi non-void untuk menentukan predikat berdasarkan nilai rata-rata
function tentukanPredikat(rata) {
  if (rata >= 85) {
    return 'A';
  } else if (rata >= 75) {
    return 'B';
  } else if (rata >= 60) {
    return 'C';
  } else {
    return 'D';
  }
}

// 3. Fungsi void untuk mencetak rapor dengan memanggil kedua fungsi di atas
function cetakRapor(nama, n1, n2, n3) {
  let rataRata = hitungRatarata(n1, n2, n3);
  let predikat = tentukanPredikat(rataRata);

  console.log("Nama     : " + nama);   
  console.log("Rata-rata: " + rataRata.toFixed(2));
  console.log("Predikat : " + predikat);
  console.log("----------------------------");
}

// Uji program untuk 3 siswa dengan nilai yang berbeda
cetakRapor("Budi", 85, 80, 82);
cetakRapor("Siti", 90, 95, 88);
cetakRapor("Andi", 65, 58, 70);