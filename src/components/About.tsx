export default function About() {
  return (
    <section id="nosotros" className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Sobre Nosotros
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-red-900 to-amber-600"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 text-5xl font-bold text-red-900">20+</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Años de Experiencia</h3>
              <p className="text-gray-600">
                Más de dos décadas sirviendo los mejores sabores uruguayos
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 text-5xl font-bold text-amber-600">100%</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Ingredientes Locales</h3>
              <p className="text-gray-600">
                Seleccionados cuidadosamente de productores locales
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 text-5xl font-bold text-amber-600">⭐</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Tradición Familiar</h3>
              <p className="text-gray-600">
                Recetas transmitidas de generación en generación
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-red-50 to-amber-50/50 p-8 text-center md:p-12">
            <p className="mb-4 text-xl leading-relaxed text-gray-800">
              La Parrilla Uruguaya es un restaurante familiar que lleva más de 20 años
              sirviendo los auténticos sabores de Uruguay en Montevideo. Nos especializamos
              en carne asada a la parrilla y platos tradicionales uruguayos.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Te invitamos a disfrutar de una experiencia gastronómica única en un ambiente
              cálido y acogedor, donde cada plato está preparado con pasión y dedicación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
