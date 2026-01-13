export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-amber-50/30 to-white pt-20"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-red-100/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-100/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 bg-gradient-to-r from-red-900 to-red-800 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
            La Parrilla Uruguaya
          </h1>
          <p className="mb-4 text-xl font-light text-gray-600 md:text-2xl md:mb-6">
            Auténticos sabores uruguayos en el corazón de Montevideo
          </p>
          <p className="mb-12 text-base text-gray-500 md:text-lg">
            Más de 20 años ofreciendo la mejor parrillada y gastronomía tradicional
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#menu"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-red-900 to-red-800 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-900/40"
            >
              <span className="relative z-10">Ver Menú</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-950 to-red-900 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </a>
            <a
              href="#contacto"
              className="rounded-full border-2 border-red-900 bg-white px-8 py-4 text-lg font-semibold text-red-900 transition-all duration-300 hover:bg-red-50 hover:shadow-lg"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
