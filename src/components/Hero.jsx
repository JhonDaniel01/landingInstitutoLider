import React from "react";

const Hero = () => {
  return (
    <header className="bg-blue-600 text-white flex justify-center gap-8 p-8">
      <div>
        <img
          src="instituto.png"
          alt=""
          className="h-80 w-80 p-10 md:h-80 md:w-80"
        />
      </div>
      <div className="py-20 text-center">
        <h1 className="text-5xl font-bold">Instituto Líder de Colombia</h1>
        <p className="mt-4 text-lg">Formamos líderes del mañana</p>
      </div>
      <section className="bg-gray-100 py-10 text-center border-gray-600 rounded-lg gap-2 p-2 shadow-gray-200 shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">
          Solicita Información
        </h2>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Nombre"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4  text-gray-500"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4 text-gray-500"
          />
          <input
            type="number"
            placeholder="Teléfono"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4  text-gray-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg py-2 px-4 w-full hover:bg-blue-700 transition"
          >
            Solicitar Información
          </button>
        </form>
      </section>
    </header>
  );
};

export default Hero;
