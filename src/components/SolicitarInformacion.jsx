import React from "react";

const SolicitarInformacion = () => {
  return (
    <section className="bg-gray-100 py-10 text-center">
      <h2 className="text-3xl font-semibold mb-4">Solicita Información</h2>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Nombre"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg py-2 px-4 w-full hover:bg-blue-700 transition"
        >
          Solicitar Información
        </button>
      </form>
    </section>
  );
};

export default SolicitarInformacion;
