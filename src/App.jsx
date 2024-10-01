import React from "react";
import Hero from "./components/Hero";
import SolicitarInformacion from "./components/SolicitarInformacion";
import Programas from "./components/Programas";
import Videos from "./components/Videos";
import RedesSociales from "./components/RedesSociales";
import Resoluciones from "./components/Resoluciones";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <SolicitarInformacion />
      <Programas />
      <Videos />
      <RedesSociales />
      <Resoluciones />
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>
          &copy; 2024 Instituto de Educación. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
