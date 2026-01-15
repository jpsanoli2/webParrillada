# La Parrilla Uruguaya - Sitio Web del Restaurante

Sitio web moderno para el restaurante "La Parrilla Uruguaya" ubicado en Montevideo, Uruguay. Construido con Next.js, Tailwind CSS y Google Maps API.

## Características

- 🍖 Página de inicio atractiva con diseño moderno
- 📋 Menú interactivo con platos tradicionales uruguayos
- 📍 Integración con Google Maps para mostrar la ubicación
- 📱 Diseño completamente responsive
- ⚡ Optimizado con Next.js 16 y React 19

## Tecnologías Utilizadas

- **Next.js 16** - Framework de React
- **React 19** - Biblioteca de UI
- **Tailwind CSS** - Framework de CSS
- **TypeScript** - Tipado estático
- **Google Maps API** - Integración de mapas
- **@react-google-maps/api** - Biblioteca para Google Maps en React

## Estructura del Proyecto
```
webrest/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx          # Página principal
│   │   └── globals.css       # Estilos globales
│   └── components/
│       ├── Header.tsx        # Header con navegación
│       ├── Hero.tsx          # Sección hero
│       ├── Menu.tsx          # Menú del restaurante
│       ├── About.tsx         # Sección "Sobre Nosotros"
│       ├── Location.tsx      # Sección de ubicación
│       ├── GoogleMap.tsx     # Componente de Google Maps
│       ├── Contact.tsx       # Sección de contacto
│       └── Footer.tsx        # Footer
├── public/                   # Archivos estáticos
└── .env.local                # Variables de entorno (no incluido en git)
```
