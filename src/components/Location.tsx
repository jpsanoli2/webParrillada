import GoogleMapComponent from './GoogleMap';

export default function Location() {
  // Coordenadas de Montevideo, Uruguay (ejemplo: Pocitos)
  const lat = -34.9089;
  const lng = -56.1592;
  const address = 'Av. 18 de Julio 1234, Montevideo, Uruguay';

  return (
    <section id="ubicacion" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Nuestra Ubicación
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-red-900 to-amber-600"></div>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 rounded-2xl bg-gradient-to-br from-red-50 to-amber-50/30 p-8 text-center shadow-lg">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              La Parrilla Uruguaya
            </h3>
            <p className="mb-1 text-lg font-medium text-gray-700">{address}</p>
            <p className="text-gray-600">Montevideo, Uruguay</p>
          </div>
          <div className="mb-8 overflow-hidden rounded-2xl shadow-xl">
            <GoogleMapComponent lat={lat} lng={lng} address={address} />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-red-100 p-3">
                  <svg className="h-6 w-6 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Horarios</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span className="font-medium">Lunes - Viernes</span>
                  <span>12:00 - 15:00 / 19:00 - 23:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sábados</span>
                  <span>12:00 - 16:00 / 19:00 - 00:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Domingos</span>
                  <span>12:00 - 16:00 / 19:00 - 22:00</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-red-100 p-3">
                  <svg className="h-6 w-6 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Cómo Llegar</h4>
              </div>
              <p className="leading-relaxed text-gray-700">
                Estamos ubicados en el corazón de Montevideo, a pocos minutos del
                centro. Fácil acceso en transporte público y con estacionamiento
                disponible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
