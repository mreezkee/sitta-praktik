//Database dari data.js
var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta",
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar",
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat",
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP",
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat",
  },
];

var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "img/pengantar_komunikasi.jpg",
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "img/manajemen_keuangan.jpg",
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "img/kepemimpinan.jpg",
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    cover: "img/mikrobiologi.jpg",
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    cover: "img/paud_perkembangan.jpeg",
  },
];

var dataTracking = {
  2023001234: {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan",
      },
    ],
  },
  2023005678: {
    nomorDO: "2023005678",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung",
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG",
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi",
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto",
      },
    ],
  },
};

// Deklarasi variable pada index HTML
const loginForm = document.getElementById("login-form");
const linkDaftar = document.getElementById("link-daftar");
const linkLupaPassword = document.getElementById("link-lupapassword");
const modalReset = document.getElementById("popup-reset");
const closeModal = document.getElementById("closeButton");
const resetForm = document.getElementById("reset-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    //Menelusuri dataPengguna dibaris atas
    const userValid = dataPengguna.find(function (user) {
      return user.email === emailInput && user.password === passwordInput;
    });

    //Logika dan Evaluasi hasil
    if (userValid) {
      //maka
      alert(`Login Berhasil!. Selamat Datang, ${userValid.nama}.`);
      localStorage.setItem("namaAktif", userValid.nama);
      window.location.href = "dashboard.html";
    } else {
      alert("Email/Password yang anda masukkan salah.");
    }
  });

  //Pendaftaran
  linkDaftar.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Pendaftaran berhasil, silahkan login");
  });

  //Buka dan Tutup modal
  //Open
  linkLupaPassword.addEventListener("click", function (event) {
    event.preventDefault();
    modalReset.style.display = "flex";
  });

  //close
  closeModal.addEventListener("click", function () {
    modalReset.style.display = "none";
  });

  //Submit Reset Password
  resetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    modalReset.style.display = "none";
    alert("Password berhasil direset");
    resetForm.reset();
  });
}

//Deklarasi variable dashboard HTML
const teksGreeting = document.getElementById("teks-greeting");

if (teksGreeting) {
  const btnLogout = document.getElementById("btn-logout");

  const namaUser = localStorage.getItem("namaAktif") || "Pengguna";

  //Sapaan dan Waktu
  function tampilkanSapaan() {
    const waktuSekarang = new Date();

    const jam = waktuSekarang.getHours();
    let sapaan = "";

    //Logika Penentuan Pagi/Siang/Sore/Malam
    if (jam >= 5 && jam < 11) {
      sapaan = "Selamat Pagi";
    } else if (jam >= 11 && jam < 15) {
      sapaan = "Selamat Siang";
    } else if (jam >= 15 && jam < 18) {
      sapaan = "Selamat Sore";
    } else {
      sapaan = "Selamat Malam";
    }

    teksGreeting.textContent = `${sapaan}, ${namaUser}`;
  }

  tampilkanSapaan();

  btnLogout.addEventListener("click", function () {
    const konfirmasi = confirm("Apakah Yakin Ingin Keluar?");
    if (konfirmasi) {
      window.location.href = "index.html";
    }
  });
}

//Deklarasi variable untuk Tracking HTML
const btnLacak = document.getElementById("btnLacak");

if (btnLacak) {
  btnLacak.addEventListener("click", function () {
    const inputDO = document.getElementById("inputDO").value;
    const hasilTracking = document.getElementById("hasilTracking");

    const dataPencarian = dataTracking[inputDO];

    if (dataPencarian) {
      document.getElementById("trackNama").textContent = dataPencarian.nama;
      document.getElementById("trackStatus").textContent = dataPencarian.status;
      document.getElementById("trackEkspedisi").textContent =
        dataPencarian.ekspedisi;
      document.getElementById("trackTanggal").textContent =
        dataPencarian.tanggalKirim;
      document.getElementById("trackPaket").textContent = dataPencarian.paket;
      document.getElementById("trackTotal").textContent = dataPencarian.total;

      const trackHistori = document.getElementById("trackHistori");
      trackHistori.innerHTML = "";

      dataPencarian.perjalanan.forEach(function (item) {
        const liBaru = document.createElement("li");
        liBaru.innerHTML = `
                <span class="time-text">${item.waktu}</span>
                <span class="desc-text">${item.keterangan}</span>
                `;
        trackHistori.appendChild(liBaru);
      });

      hasilTracking.style.display = "block";
    } else {
      alert("Nomor DO/Billing tidak ditemukan");
      hasilTracking.style.display = "none";
    }
  });
}

//Deklarasi variable untuk Stok HTML
const bodyStok = document.getElementById("body-stok");

if (bodyStok) {
  bodyStok.innerHTML = "";

  dataBahanAjar.forEach(function (barang) {
    let teksStatus = "";
    let classBadge = "";

    // Logika Penentuan Status
    if (barang.stok > 200) {
      teksStatus = "Tersedia";
      classBadge = "badge badge-tersedia";
    } else if (barang.stok > 50 && barang.stok <= 200) {
      teksStatus = "Stok Tipis";
      classBadge = "badge badge-tipis";
    } else {
      teksStatus = "Habis";
      classBadge = "badge badge-habis";
    }

    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td><img src="${barang.cover}" alt="Cover" class="thumb-cover"></td>
            <td><strong>${barang.kodeLokasi}</strong></td>
            <td><strong>${barang.kodeBarang}</strong></td>
            <td>${barang.namaBarang}</td>
            <td><strong>${barang.jenisBarang}</strong></td>
            <td>${barang.edisi}</td>
            <td style="font-size: 16px;"><strong>${barang.stok}</strong></td>
            <td><span class="${classBadge}">${teksStatus}</span></td>
        `;

    bodyStok.appendChild(tr);
  });
}
