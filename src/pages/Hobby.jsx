// src/pages/Hobby.jsx
import { FaCamera, FaBook, FaMusic, FaWalking } from "react-icons/fa"; // Membutuhkan react-icons

const HobbyCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 transition duration-500">
    <div className="text-sky-main mb-3">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Hobby = () => {
  const hobbies = [
    {
      icon: <FaCamera size={32} />,
      title: "Fotografi",
      description:
        "Menangkap momen dan keindahan di sekitar. Melatih mata untuk detail dan komposisi (berguna saat desain UI!).",
    },
    {
      icon: <FaBook size={32} />,
      title: "Membaca Buku Non-Fiksi",
      description:
        "Belajar tentang psikologi, sejarah, dan bisnis. Penting untuk memahami konteks dan kebutuhan pengguna.",
    },
    {
      icon: <FaMusic size={32} />,
      title: "Mendengarkan Musik (Indie)",
      description:
        "Musik membantu saya fokus dan menjaga kreativitas tetap mengalir saat sedang coding.",
    },
    {
      icon: <FaWalking size={32} />,
      title: "Hiking Santai",
      description:
        "Mendapatkan udara segar dan melihat langit biru langsung adalah cara terbaik untuk mereset pikiran.",
    },
  ];

  return (
    <section id="hobby" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-sky-dark mb-4">
          Hobi & Minat
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Keseimbangan hidup sangat penting. Ini yang saya lakukan saat tidak
          coding.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={index} {...hobby} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobby;
