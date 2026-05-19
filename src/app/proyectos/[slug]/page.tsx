import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjects, getProjectBySlug } from '@/data/projects'
import { ArrowLeft, Calendar, Clock, Package } from 'lucide-react'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const revalidate = 3600 // ISR: revalidar cada hora

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    }
  }

  return {
    title: `${project.title} - Carpintería Los Artesanos`,
    description: project.description,
    keywords: [project.category, ...project.materials, 'carpintería', 'artesanal'],
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

async function RelatedProjects({ projectSlug, category }: { projectSlug: string; category: string }) {
  const projects = await getProjects()
  const related = projects
    .filter(p => p.slug !== projectSlug && p.category === category)
    .slice(0, 3)

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {related.map((relatedProject) => (
        <Link
          key={relatedProject.slug}
          href={`/proyectos/${relatedProject.slug}`}
          className="group block"
        >
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-amber-100">
            <img
              src={relatedProject.image}
              alt={relatedProject.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
            {relatedProject.title}
          </h3>
          <p className="text-sm text-gray-600">{relatedProject.category}</p>
        </Link>
      ))}
    </div>
  )
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-amber-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-600">
                  {project.description}
                </p>
              </div>

              <div className="text-gray-600 space-y-4">
                <p>{project.fullDescription}</p>
              </div>

              {/* Image Gallery */}
              {project.images.length > 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Galería</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-amber-100">
                        <img
                          src={image}
                          alt={`${project.title} - Imagen ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Detalles del Proyecto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Año</p>
                      <p className="font-medium text-gray-900">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Duración</p>
                      <p className="font-medium text-gray-900">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Categoría</p>
                      <p className="font-medium text-gray-900">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold mb-4 text-gray-900">Materiales</h3>
                <ul className="space-y-2">
                  {project.materials.map((material, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-amber-600 rounded-full" />
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contacto"
                className="block w-full bg-amber-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-center"
              >
                Solicitar Proyecto Similar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects with Suspense */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Proyectos Relacionados
          </h2>
          <Suspense fallback={<div className="text-center text-gray-600">Cargando proyectos relacionados...</div>}>
            <RelatedProjects projectSlug={project.slug} category={project.category} />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
