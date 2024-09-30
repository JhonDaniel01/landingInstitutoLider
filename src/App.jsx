import React from "react";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Instituto de Educación</h1>
          <p className="mt-2">Formamos líderes del mañana</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-10">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Nuestros Programas</h2>
          <p className="mb-8">
            Ofrecemos una variedad de cursos para todas las edades y niveles.
          </p>
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
                Desarrolla tus habilidades creativas con nuestros cursos de
                diseño.
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

        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Inscríbete Ahora
          </h2>
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
              Inscribirme
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2024 Instituto de Educación. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
