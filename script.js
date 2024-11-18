// Tombol pertama: Mulai
document.getElementById("startButton").addEventListener("click", function () {
  // Sembunyikan tombol pertama dan tampilkan pesan pertama
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("message1").classList.remove("hidden");
});

// Tombol kedua: Lanjut
document.getElementById("nextButton1").addEventListener("click", function () {
  // Sembunyikan pesan pertama dan tampilkan pesan kedua
  document.getElementById("message1").classList.add("hidden");
  document.getElementById("message2").classList.remove("hidden");

  // Tampilkan catatan kecil
  document.getElementById("note").classList.remove("hidden");

  // Tampilkan tombol "Mau" dan "Tidak"
  document.getElementById("buttonsContainer").classList.remove("hidden");
});

// Tombol "Tidak" diklik
document.getElementById("noButton").addEventListener("click", function () {
  // Menghapus animasi "lari-lari" dengan menghapus class 'running' jika ada
  const noButton = document.getElementById("noButton");
  noButton.classList.remove("running");

  // Menampilkan notifikasi di halaman
  const notification = document.getElementById("notification");
  notification.classList.remove("hidden"); // Menampilkan notifikasi

  // Menampilkan alert
  alert("Kenapa tidak mau? 😔");

  // Menyembunyikan notifikasi setelah 3 detik
  setTimeout(function () {
    notification.classList.add("hidden"); // Menyembunyikan notifikasi setelah 3 detik
  }, 3000);
});

const music = document.getElementById("backgroundMusic");
