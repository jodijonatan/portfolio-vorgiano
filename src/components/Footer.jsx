// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-sky-dark py-8">
      <div className="container mx-auto px-6 text-center text-white">
        <p className="text-lg font-semibold mb-2">Vorgiano</p>
        <p className="text-sm text-sky-200/80">
          Dibuat dengan ❤️ menggunakan React.js dan Tailwind CSS.
        </p>
        <p className="text-xs text-sky-200/50 mt-4">
          &copy; {new Date().getFullYear()} Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
