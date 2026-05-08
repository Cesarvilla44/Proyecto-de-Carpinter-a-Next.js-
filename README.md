# Carpintería Los Artesanos

Sitio web corporativo de carpintería artesanal construido con Next.js 14, TypeScript, Tailwind CSS y Server Actions.

## 🚀 Características

- **Next.js 14 App Router**: Arquitectura moderna con Server Components
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Estilos utilitarios con paleta de colores personalizada
- **ISR (Incremental Static Regeneration)**: Galería de proyectos optimizada
- **Server Actions**: Formulario de contacto sin API routes
- **Rutas Dinámicas**: Páginas de detalle de proyectos con `generateStaticParams`
- **SEO Optimizado**: Metadata API dinámica para cada página
- **Middleware**: Cabeceras de seguridad personalizadas
- **Loading States**: Suspense y esqueletos de carga
- **Error Handling**: Página de error personalizada
- **Responsive Design**: Diseño adaptativo para todos los dispositivos

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── contacto/
│   │   ├── actions.ts       # Server Actions para el formulario
│   │   └── page.tsx         # Página de contacto
│   ├── nosotros/
│   │   └── page.tsx         # Página "Sobre Nosotros"
│   ├── proyectos/
│   │   ├── [slug]/
│   │   │   └── page.tsx     # Ruta dinámica de proyectos
│   │   └── page.tsx         # Galería de proyectos (ISR)
│   ├── error.tsx            # Página de error global
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout raíz
│   ├── loading.tsx          # Loading global
│   └── page.tsx             # Página de inicio
├── components/
│   ├── Footer.tsx           # Componente de pie de página
│   └── Header.tsx           # Componente de navegación
├── data/
│   └── projects.ts          # Datos de proyectos (base de datos temporal)
└── middleware.ts            # Middleware para seguridad
```

## 🎨 Tecnologías Utilizadas

- **Next.js 14**: Framework React con App Router
- **React 18**: Biblioteca UI
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework CSS
- **Lucide React**: Iconos
- **next/font**: Optimización de fuentes

## 📄 Páginas

- **/**: Página de inicio con Hero Section, servicios y proyectos recientes
- **/nosotros**: Historia del taller y proceso artesanal
- **/proyectos**: Galería de proyectos con ISR
- **/proyectos/[slug]**: Detalle de cada proyecto con metadatos dinámicos
- **/contacto**: Formulario de contacto con Server Actions

## 🔧 Arquitectura Next.js

### Server Components
La mayoría de los componentes son Server Components por defecto, lo que permite:
- Renderizado en el servidor
- Mejor rendimiento
- Menor bundle de JavaScript
- Acceso directo a datos

### ISR (Incremental Static Regeneration)
La galería de proyectos usa ISR con `revalidate: 3600` (1 hora), permitiendo:
- Contenido estático rápido
- Actualizaciones periódicas sin rebuild
- Mejor experiencia de usuario

### Server Actions
El formulario de contacto usa Server Actions:
- Sin necesidad de API routes
- Validación en el servidor
- Estados de éxito/error
- Type-safe con TypeScript

### Rutas Dinámicas
Los detalles de proyectos usan rutas dinámicas con `generateStaticParams`:
- Generación estática de todas las páginas
- Metadatos SEO dinámicos
- Build time optimizado

## 🚀 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta ESLint
```

## 📝 Notas de Desarrollo

### Imágenes
El proyecto usa el componente `Image` de Next.js con:
- `priority` en el Hero section
- `placeholder="blur"` en la galería
- `sizes` optimizados para responsive

### SEO
- Metadata API en cada página
- Metadatos dinámicos para proyectos
- Open Graph tags
- next/font para evitar CLS

### Seguridad
- Middleware con cabeceras de seguridad
- Validación de formularios en servidor
- Sanitización de inputs

## 🌐 Despliegue

Este proyecto está optimizado para desplegar en [Vercel](https://vercel.com):

1. Push el código a GitHub
2. Importar el proyecto en Vercel
3. Desplegar automáticamente

## 📸 Imágenes

Las imágenes deben colocarse en `public/images/`. Actualmente el proyecto usa placeholders que deberían reemplazarse con imágenes reales del taller.

## 🤝 Contribuir

Este es un proyecto demostrativo. Para contribuir:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de uso educativo.
