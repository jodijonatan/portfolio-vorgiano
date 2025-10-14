// src/pages/Contact.jsx
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"; // Membutuhkan react-icons

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-sky-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-sky-dark mb-4">
          Hubungi Saya
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Siap untuk proyek hebat berikutnya? Mari kita bicarakan!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Kolom Kiri: Form Kontak */}
          <div className="bg-white p-8 rounded-xl shadow-2xl border-t-8 border-sky-main">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-main focus:border-sky-main transition"
                required
              />
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-main focus:border-sky-main transition"
                required
              />
              <textarea
                placeholder="Pesan Anda"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-main focus:border-sky-main transition"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-sky-main text-white font-bold rounded-lg shadow-md hover:bg-sky-dark transition duration-300 transform hover:scale-[1.01]"
              >
                Kirim
              </button>
            </form>
          </div>

          {/* Kolom Kanan: Info Kontak */}
          <div className="space-y-6 md:mt-16">
            <h3 className="text-2xl font-bold text-gray-800">Detail Kontak</h3>

            <div className="flex items-center space-x-4">
              <FaEnvelope size={24} className="text-sky-main" />
              <p className="text-gray-700 font-medium">vorgiano@email.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone size={24} className="text-sky-main" />
              <p className="text-gray-700 font-medium">+62 8XX XXXX XXXX</p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-8">
              Sosial Media
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/[akun-anda]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sky-main transition transform hover:scale-110"
              >
                <FaLinkedin size={36} />
              </a>
              <a
                href="https://github.com/[akun-anda]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sky-dark transition transform hover:scale-110"
              >
                <FaGithub size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
