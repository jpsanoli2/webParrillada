export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-12 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8 border-b border-gray-800 pb-8">
          <div className="text-center">
            <h3 className="mb-3 text-2xl font-bold text-white">La Parrilla Uruguaya</h3>
            <p className="mb-2 text-gray-400">
              Av. 18 de Julio 1234, Montevideo, Uruguay
            </p>
            <p className="text-gray-500">
              Auténticos sabores uruguayos desde 2004
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} La Parrilla Uruguaya. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
