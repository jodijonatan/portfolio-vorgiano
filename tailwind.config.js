// tailwind.config.js

/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Pastikan ini mencakup semua file komponen React Anda
  ],
  theme: {
    extend: {
      colors: {
        // Mendefinisikan warna kustom (Opsional, tapi membantu)
        "sky-light": "#F0F9FF", // bg-sky-50 (Latar Belakang)
        "sky-main": "#0EA5E9", // sky-500 (Aksen/Tombol)
        "sky-dark": "#075985", // sky-800 (Teks Aksen/Judul)
      },
    },
  },
  plugins: [],
};
