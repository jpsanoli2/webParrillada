interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Parrillada Completa',
    description: 'Asado de tira, chorizo, morcilla, molleja, chinchulín y costilla',
    price: '$2,500',
  },
  {
    name: 'Chivito al Plato',
    description: 'Carne, jamón, queso, huevo, lechuga, tomate, panceta y papas fritas',
    price: '$890',
  },
  {
    name: 'Milanesa a la Napolitana',
    description: 'Milanesa con jamón, queso, tomate y papas fritas',
    price: '$750',
  },
  {
    name: 'Bondiola a la Parrilla',
    description: 'Bondiola de cerdo a la parrilla con guarnición',
    price: '$1,200',
  },
  {
    name: 'Pesca del Día',
    description: 'Pescado fresco del día preparado a tu elección',
    price: '$1,100',
  },
  {
    name: 'Ensalada Mixta',
    description: 'Lechuga, tomate, cebolla, aceitunas y huevo duro',
    price: '$450',
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Nuestro Menú
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-red-900 to-amber-600"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Deliciosos platos tradicionales preparados con los mejores ingredientes
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-100"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-900 transition-colors">
                  {item.name}
                </h3>
                <span className="flex-shrink-0 text-lg font-bold text-red-900">
                  {item.price}
                </span>
              </div>
              <p className="leading-relaxed text-gray-600">{item.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-900 to-amber-600 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
