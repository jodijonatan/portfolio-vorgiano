// src/pages/Home.jsx
import { Link } from "react-router-dom";
import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Membutuhkan react-icons
import main from "../assets/main.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-sky-light text-gray-900"
    >
      <div className="container mx-auto px-6 py-20 md:py-32 grid md:grid-cols-12 items-center gap-10">
        {/* Kolom Teks (Kiri) */}
        <div className="md:col-span-7">
          <p className="text-xl text-sky-main font-semibold mb-3 tracking-wider uppercase">
            Hello, saya
          </p>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="block">Vorgiano,</span>
            <span className="block text-sky-dark drop-shadow-md">
              Software Engineer
            </span>
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl mb-10 max-w-xl">
            Menciptakan aplikasi yang{" "}
            <span className="font-semibold">responsif</span>,{" "}
            <span className="font-semibold">modern</span>, dan{" "}
            <span className="font-semibold">intuitif</span>
            dengan fokus pada performa menggunakan{" "}
            <span className="font-semibold">React.js</span> dan{" "}
            <span className="font-semibold">Tailwind CSS</span>.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="flex items-center justify-center px-8 py-3 bg-sky-main text-white font-bold rounded-full shadow-lg hover:bg-sky-600 transition duration-300 transform hover:scale-105"
            >
              Mulai Kolaborasi <FiArrowRight className="ml-2" />
            </Link>
            <Link
              to="/skills"
              className="flex items-center justify-center px-8 py-3 border-2 border-sky-main text-sky-main font-bold rounded-full hover:bg-sky-100 transition duration-300"
            >
              Lihat Keahlian Saya
            </Link>
          </div>
        </div>

        {/* Kolom Gambar/Ilustrasi (Kanan) */}
        <div className="md:col-span-5 flex justify-center order-first md:order-last">
          {/* Ganti ini dengan gambar profil Anda yang keren */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-sky-main/50">
            <img
              src={main}
              alt="Foto Profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
