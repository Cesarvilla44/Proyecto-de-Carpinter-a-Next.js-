# Características Implementadas - Next.js 14 Showcase

## 📋 Resumen Ejecutivo

Este proyecto demuestra la implementación completa de las características más avanzadas de **Next.js 14**, incluyendo:

1. ✅ **Shadcn UI** - Componentes reutilizables
2. ✅ **Server Actions** - Manejo de formularios en servidor
3. ✅ **Rutas Dinámicas con Metadatos Dinámicos** - SEO optimizado
4. ✅ **ISR** - Regeneración estática incremental
5. ✅ **Streaming con Suspense** - Carga progresiva

---

## 1. 🎨 Shadcn UI

### Descripción
Shadcn UI proporciona componentes reutilizables y personalizables construidos sobre Radix UI y Tailwind CSS.

### Implementación
**Ubicación**: `/src/components/ui/`

#### Componentes Creados:

**Button** (`button.tsx`)
```tsx
import { Button } from "@/components/ui/button"

// Variantes disponibles
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamaños
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

**Card** (`card.tsx`)
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descripción</CardDescription>
  </CardHeader>
  <CardContent>Contenido principal</CardContent>
  <CardFooter>Pie de tarjeta</CardFooter>
</Card>
```

### Utilidades
**Ubicación**: `/src/lib/utils.ts`
```tsx
import { cn } from "@/lib/utils"

// Combina clases de Tailwind de forma segura
const className = cn(
  "px-4 py-2",
  isActive && "bg-blue-500",
  "text-white"
)
```

### Dependencias Instaladas
- `shadcn-ui`
- `@radix-ui/react-slot`
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`

---

## 2. ⚙️ Server Actions

### Descripción
Server Actions permiten ejecutar código en el servidor directamente desde componentes cliente, sin necesidad de API routes.

### Implementación
**Ubicación**: `/src/app/actions/contact.ts`

```tsx
"use server"

import { revalidatePath } from "next/cache"

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  projectType: string
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactResponse> {
  try {
    // Validación
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "Por favor completa todos los campos requeridos",
      }
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: "Por favor ingresa un email válido",
      }
    }

    // Procesamiento en servidor
    console.log("Formulario recibido:", formData)

    // Revalidar caché
    revalidatePath("/contacto")

    return {
      success: true,
      message: "¡Gracias por tu mensaje!",
      data: formData,
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al procesar la solicitud",
    }
  }
}
```

### Uso en Componente Cliente
**Ubicación**: `/src/app/contacto/ContactForm.tsx`

```tsx
'use client'

import { submitContactForm } from '@/app/actions/contact'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      projectType: formData.get('projectType') as string,
    }

    const result = await submitContactForm(data)
    // Manejar resultado
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

### Ventajas
- ✅ Validación en servidor
- ✅ Seguridad mejorada
- ✅ Sin API routes necesarias
- ✅ Type-safe con TypeScript
- ✅ Revalidación automática de caché

---

## 3. 🔗 Rutas Dinámicas con Metadatos Dinámicos

### Descripción
Las rutas dinámicas permiten crear páginas basadas en parámetros, con metadatos SEO generados dinámicamente.

### Implementación
**Ubicación**: `/src/app/proyectos/[slug]/page.tsx`

#### Generación de Parámetros Estáticos
```tsx
export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
```

#### Metadatos Dinámicos
```tsx
import { Metadata } from 'next'

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    }
  }

  return {
    title: `${project.title} - Carpintería Los Artesanos`,
    description: project.description,
    keywords: [project.category, ...project.materials, 'carpintería'],
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}
```

### Ventajas
- ✅ SEO optimizado
- ✅ Metadatos específicos por página
- ✅ Open Graph para redes sociales
- ✅ Generación estática en build time
- ✅ Mejor experiencia de usuario

---

## 4. ⏱️ ISR (Incremental Static Regeneration)

### Descripción
ISR permite regenerar páginas estáticas de forma incremental sin necesidad de rebuild completo.

### Implementación

**Página de Proyectos** (`/src/app/proyectos/page.tsx`)
```tsx
export const revalidate = 3600 // Revalidar cada hora
```

**Página Individual de Proyecto** (`/src/app/proyectos/[slug]/page.tsx`)
```tsx
export const revalidate = 3600 // Revalidar cada hora
```

**Página de Contacto** (`/src/app/contacto/page.tsx`)
```tsx
export const revalidate = 3600 // Revalidar cada hora
```

### Cómo Funciona
1. Primera solicitud: Genera la página estática
2. Solicitudes siguientes (dentro de 1 hora): Sirve la página en caché
3. Después de 1 hora: Regenera la página en background
4. Nuevas solicitudes: Sirven la página regenerada

### Ventajas
- ✅ Rendimiento de contenido estático
- ✅ Actualizaciones sin rebuild
- ✅ Escalabilidad mejorada
- ✅ Mejor experiencia de usuario
- ✅ Reducción de carga del servidor

---

## 5. 🌊 Streaming con Suspense

### Descripción
Suspense permite renderizar componentes asincronos con fallback UI mientras se carga el contenido.

### Implementación

**Página de Proyectos** (`/src/app/proyectos/page.tsx`)

```tsx
import { Suspense } from 'react'

async function ProjectsGrid() {
  const projects = await getProjects()
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        // Renderizar proyectos
      ))}
    </div>
  )
}

function ProjectsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white border rounded-xl overflow-hidden">
          <div className="aspect-[16/10] bg-gray-200 animate-pulse" />
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <section className="py-20 px-4">
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsGrid />
      </Suspense>
    </section>
  )
}
```

**Página Individual de Proyecto** (`/src/app/proyectos/[slug]/page.tsx`)

```tsx
async function RelatedProjects({ 
  projectSlug, 
  category 
}: { 
  projectSlug: string
  category: string 
}) {
  const projects = await getProjects()
  const related = projects
    .filter(p => p.slug !== projectSlug && p.category === category)
    .slice(0, 3)

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {related.map((project) => (
        // Renderizar proyectos relacionados
      ))}
    </div>
  )
}

export default async function ProjectPage({ params }) {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-8">Proyectos Relacionados</h2>
      <Suspense fallback={<div>Cargando proyectos...</div>}>
        <RelatedProjects projectSlug={slug} category={category} />
      </Suspense>
    </section>
  )
}
```

### Ventajas
- ✅ Carga progresiva de contenido
- ✅ Mejor experiencia de usuario
- ✅ Fallback UI personalizado
- ✅ Componentes asincronos
- ✅ Streaming de HTML

---

## 📊 Resumen de Características

| Característica | Ubicación | Estado | Descripción |
|---|---|---|---|
| **Shadcn UI** | `/src/components/ui/` | ✅ | Button, Card, utilidades |
| **Server Actions** | `/src/app/actions/contact.ts` | ✅ | Formulario de contacto |
| **Metadatos Dinámicos** | `/src/app/proyectos/[slug]/page.tsx` | ✅ | SEO por proyecto |
| **ISR** | Múltiples páginas | ✅ | Revalidación cada hora |
| **Suspense** | Galería y proyectos relacionados | ✅ | Carga progresiva |

---

## 🚀 Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm run start
```

---

## 📚 Referencias

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Server Components](https://react.dev/reference/rsc/server-components)

---

**Proyecto de demostración para prácticas de Next.js 14**
