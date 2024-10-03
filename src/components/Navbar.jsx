import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Instituto Líder de Colombia</h1>
        <div className="hidden md:flex space-x-4">
          <a href="#programas" className="hover:text-gray-200">
            Programas
          </a>
          <a href="#videos" className="hover:text-gray-200">
            Videos
          </a>
          <a href="#redes" className="hover:text-gray-200">
            Redes Sociales
          </a>
          <a href="#resoluciones" className="hover:text-gray-200">
            Resoluciones
          </a>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <a href="#programas" className="block px-4 py-2 hover:bg-blue-400">
            Programas
          </a>
          <a href="#videos" className="block px-4 py-2 hover:bg-blue-400">
            Videos
          </a>
          <a href="#redes" className="block px-4 py-2 hover:bg-blue-400">
            Redes Sociales
          </a>
          <a href="#resoluciones" className="block px-4 py-2 hover:bg-blue-400">
            Resoluciones
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
