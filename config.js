// config.js

const CONFIG = {
  idOrkut: "OK1706015",
  pwOrkut: "@RISKIANDIKAYTSANTRINW2025",
  pinOrkut: "5737",

  apiKey: "417858617436031111706015OKCT02E03BC6FE6933233D62A78993FDD14F",
  qrisString: "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214645489496861360303UMI51440014ID.CO.QRIS.WWW0215ID20243219081450303UMI5204541153033605802ID5920RISKISTORE OK17060156006MELAWI61057967162070703A01630492B0",

  untungPersen: 10,
  waOrder: "6282213525098",

  generateWaLink(produk, harga) {
    const message = `Halo kak, saya ingin pesan:\nProduk: ${produk}\nHarga: Rp${harga}\n\nVia *RA STORE BOTZZ*`;
    return `https://wa.me/${this.waOrder}?text=${encodeURIComponent(message)}`;
  },

  apiUrl(kategori) {
    return `https://api.orkut.top/api/price-list?apikey=${this.apiKey}&category=${kategori}`;
  },

  firebaseConfig: {
    apiKey: "AIzaSyDegff4vn9y6nDl2uvsSQBGDDnLlDqUN4Y",
    authDomain: "chatgroup-f6479.firebaseapp.com",
    databaseURL: "https://chatgroup-f6479-default-rtdb.firebaseio.com",
    projectId: "chatgroup-f6479",
    storageBucket: "chatgroup-f6479.appspot.com",
    messagingSenderId: "569392095326",
    appId: "1:569392095326:web:67e67f7eaef7b7a7f354cf",
    measurementId: "G-EW98CJPLR4"
  },

  // Config tambahan jika dibutuhkan
  apiHargaUrl: "https://namadomainkamu.com/api/harga", // Ganti dengan URL API kamu
  nomorWhatsapp: "6281234567890" // Format internasional
};

export default CONFIG;
