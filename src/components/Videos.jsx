import React from "react";

const Videos = () => {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-semibold mb-4">Videos de Redes Sociales</h2>
      <div className="flex justify-center space-x-4">
        <iframe
          width="320"
          height="180"
          src="https://www.youtube.com/embed/example" // Reemplaza con un enlace real
          title="Video de Ejemplo"
          className="rounded-lg"
        ></iframe>
        <iframe
          width="320"
          height="180"
          src="https://www.youtube.com/embed/example" // Reemplaza con un enlace real
          title="Video de Ejemplo"
          className="rounded-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Videos;
