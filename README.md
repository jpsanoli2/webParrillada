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

## Configuración

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Instalación

1. Clona el repositorio (o navega al directorio del proyecto)

2. Instala las dependencias:

```bash
npm install
```

3. Configura la API Key de Google Maps:

   - Crea un archivo `.env.local` en la raíz del proyecto
   - Obtén una API Key de Google Maps en [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
   - Agrega la siguiente línea al archivo `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
```

**Nota:** Puedes usar `.env.local.example` como referencia.

### Obteniendo una API Key de Google Maps

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la **Maps JavaScript API**
4. Ve a "Credenciales" y crea una nueva API Key
5. (Recomendado) Restringe la API Key a tu dominio en producción

## Ejecutar el Proyecto

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

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

## Personalización

### Cambiar la Ubicación

Edita las coordenadas en `src/components/Location.tsx`:

```typescript
const lat = -34.9089;  // Tu latitud
const lng = -56.1592;  // Tu longitud
const address = 'Tu dirección aquí';
```

### Modificar el Menú

Edita el array `menuItems` en `src/components/Menu.tsx`:

```typescript
const menuItems: MenuItem[] = [
  {
    name: 'Nombre del Plato',
    description: 'Descripción del plato',
    price: '$1,000',
  },
  // ...
];
```

### Cambiar Colores y Estilos

Los estilos están definidos usando Tailwind CSS. Puedes modificar los colores en los componentes usando las clases de Tailwind. El color principal del sitio es `orange-600`.

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint

## Licencia

Este proyecto es privado.

## Contacto

Para más información sobre el restaurante, visita el sitio web o contacta directamente.
