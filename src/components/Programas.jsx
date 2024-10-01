import React from "react";

const Programas = () => {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-semibold mb-4">Nuestros Programas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Programación</h3>
          <p>
            Aprende a programar desde cero con nuestros cursos interactivos.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Diseño Gráfico</h3>
          <p>
            Desarrolla tus habilidades creativas con nuestros cursos de diseño.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Marketing Digital</h3>
          <p>
            Conviértete en un experto en marketing con nuestras estrategias
            efectivas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programas;
