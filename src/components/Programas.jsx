import React from "react";

const Programas = () => {
  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-5">
        Conoce nuestros programas tecnicos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Imágenes de los programas */}
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="Transito.jpg"
            alt="Imagen 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="Contable.jpg"
            alt="Imagen 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="Seguridad.jpg"
            alt="Imagen 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="Infancia.jpg"
            alt="Imagen 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="Perforador.jpg"
            alt="Imagen 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="Transito.jpg"
            alt="Imagen 6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="Operador.jpg"
            alt="Imagen 7"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="Produccion.jpg"
            alt="Imagen 8"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <img
            src="Construccion.jpg"
            alt="Imagen 9"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Programas;
