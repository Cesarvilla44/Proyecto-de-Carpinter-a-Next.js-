# Carpintería Los Artesanos

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Latest-000000?style=for-the-badge)

Sitio web corporativo de carpintería artesanal construido con **Next.js 14**, demostrando características avanzadas como **Shadcn UI**, **Server Actions**, **Metadatos Dinámicos**, **ISR**, y **Streaming con Suspense**.

## 🎯 Características Principales

### ✅ Shadcn UI
- Componentes reutilizables y personalizables
- Componentes implementados: `Button`, `Card`
- Integración con Radix UI y Tailwind CSS
- Ubicación: `/src/components/ui/`

### ✅ Server Actions
- Manejo seguro de formularios en el servidor
- Validación de datos en el servidor
- Revalidación de caché con `revalidatePath`
- Archivo: `/src/app/actions/contact.ts`

### ✅ Rutas Dinámicas con Metadatos Dinámicos
- Rutas dinámicas: `/proyectos/[slug]`
- Metadatos generados por proyecto (título, descripción, keywords, Open Graph)
- Función: `generateMetadata()` en `/src/app/proyectos/[slug]/page.tsx`

### ✅ ISR (Incremental Static Regeneration)
- Revalidación automática cada hora
- Configurado en: `/proyectos`, `/proyectos/[slug]`, `/contacto`
- Permite actualizaciones sin rebuild completo

### ✅ Streaming con Suspense
- Componentes asincronos con Suspense
- Carga progresiva de contenido
- Fallback UI mientras se carga
- Implementado en: Galería de proyectos y proyectos relacionados

## 🚀 Características Adicionales

- **Next.js 14 App Router**: Arquitectura moderna con Server Components
- **TypeScript**: Tipado estático para mayor seguridad
- **Tailwind CSS**: Estilos utilitarios con paleta de colores personalizada
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
│   ├── actions/
│   │   └── contact.ts           # Server Actions
│   ├── contacto/
│   │   ├── ContactForm.tsx      # Formulario con Server Actions
│   │   └── page.tsx             # Página de contacto
│   ├── nosotros/
│   │   └── page.tsx             # Página "Sobre Nosotros"
│   ├── proyectos/
│   │   ├── [slug]/
│   │   │   └── page.tsx         # Ruta dinámica con metadatos dinámicos
│   │   └── page.tsx             # Galería con ISR y Suspense
│   ├── error.tsx                # Página de error global
│   ├── globals.css              # Estilos globales
│   ├── layout.tsx               # Layout raíz
│   ├── loading.tsx              # Loading global
│   └── page.tsx                 # Página de inicio
├── components/
│   ├── ui/
│   │   ├── button.tsx           # Shadcn Button
│   │   └── card.tsx             # Shadcn Card
│   ├── Footer.tsx               # Componente de pie de página
│   └── Header.tsx               # Componente de navegación
├── data/
│   └── projects.ts              # Datos de proyectos
├── lib/
│   └── utils.ts                 # Utilidades (cn function)
└── middleware.ts                # Middleware para seguridad
```

## 🎨 Tecnologías Utilizadas

- **Next.js 14**: Framework React con App Router
- **React 18**: Biblioteca UI
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework CSS
- **Shadcn UI**: Componentes reutilizables
- **Radix UI**: Primitivos de UI accesibles
- **Lucide React**: Iconos
- **next/font**: Optimización de fuentes

## 📄 Páginas

- **/**: Página de inicio con Hero Section, servicios y proyectos recientes
- **/nosotros**: Historia del taller y proceso artesanal
- **/proyectos**: Galería de proyectos con ISR y Suspense
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

### Suspense & Streaming
Componentes asincronos con Suspense para:
- Carga progresiva de contenido
- Mejor experiencia de usuario
- Fallback UI mientras se carga

### Shadcn UI
Componentes reutilizables y personalizables:
- Button con múltiples variantes
- Card con estructura completa
- Integración con Tailwind CSS

## 🚀 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Compila para producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta ESLint
```

## 📝 Notas de Desarrollo

### Imágenes
El proyecto usa imágenes locales en `public/images/` con:
- Optimización de tamaño
- Carga rápida
- Responsive

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

## 🤝 Contribuir

Este es un proyecto demostrativo. Para contribuir:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de uso educativo.

---

**Proyecto de demostración para prácticas de Next.js 14 con características avanzadas**
