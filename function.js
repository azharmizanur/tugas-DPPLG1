function luasPersegi(sisi){
    let luas =sisi*sisi
}

let luas1 = luasPersegi(5);
let luas2 = luasPersegi(8);

console.log('Luas persegi pertama: ' + luas1);
console.log('luas persegi kedua: ' + luas2);
console.log('Jumlah kedua luas: '+ (luas1 + lias2));


// Non-void: manghasilkan nilai
function kelilingPersegi(sisi) {
    return 4 * sisi;
}

// void: tidak menghasilkan nilai
function catakKeliling(sisi) {
    let hasil = kelilingPersegi(sisi);
    console.log('Persegi dengan sisi ' + sisi + ' memilikikeliling: ' + hasil);
}

cetakKeliling(5);
cetakKeliling(8);