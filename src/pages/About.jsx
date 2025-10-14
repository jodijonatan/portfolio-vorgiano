// src/pages/About.jsx
const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center text-sky-dark mb-4 border-b-4 border-sky-main/50 inline-block px-4 pb-1">
          Tentang Saya
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Sedikit cerita tentang perjalanan dan filosofi kerja saya.
        </p>

        <div className="space-y-8 text-lg">
          <p className="text-gray-700">
            Saya percaya bahwa teknologi harus melayani kebutuhan manusia. Sejak
            [Tahun Mulai], fokus saya adalah menciptakan **pengalaman digital
            yang mulus dan menyenangkan** bagi pengguna. Saya bukan hanya
            menulis kode, tapi membangun solusi yang bertahan lama dan
            *scalable*.
          </p>

          <div className="grid md:grid-cols-2 gap-8 p-6 bg-sky-50 rounded-xl shadow-inner border border-sky-200">
            <div>
              <h3 className="text-2xl font-bold text-sky-main mb-2">Visi</h3>
              <p className="text-gray-700">
                Menjadi pengembang yang selalu beradaptasi dengan tren terbaru
                (terutama React Ecosystem) sambil mempertahankan kualitas kode
                yang tinggi.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-sky-main mb-2">
                Filosofi
              </h3>
              <p className="text-gray-700">
                Desain yang bersih bertemu dengan fungsionalitas yang kuat.
                Sederhana, elegan, dan performatif.
              </p>
            </div>
          </div>

          <p className="text-gray-700">
            Saya sangat antusias dengan **Utility-First CSS** seperti Tailwind,
            karena memungkinkan saya untuk berinteraksi lebih cepat dari ide ke
            implementasi, mengurangi pusing dengan penamaan kelas, dan fokus
            pada desain yang responsif.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
