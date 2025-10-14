// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Membutuhkan react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Hobby", path: "/hobby" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link
          to="/"
          className="text-2xl font-extrabold text-sky-dark hover:text-sky-main transition duration-300"
        >
          Vorgiano
        </Link>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-semibold transition duration-300 relative group pb-1 ${
                location.pathname === item.path
                  ? "text-sky-main border-b-2 border-sky-main"
                  : "text-gray-700 hover:text-sky-main"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 hover:text-sky-main transition duration-300"
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Navigasi Mobile (Conditional) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        } bg-white`}
      >
        <nav className="flex flex-col space-y-2 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`py-2 px-4 rounded-lg text-lg font-medium transition duration-300 ${
                location.pathname === item.path
                  ? "bg-sky-main text-white"
                  : "text-gray-700 hover:bg-sky-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
