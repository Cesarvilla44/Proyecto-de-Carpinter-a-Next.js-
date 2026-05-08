import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjects, getProjectBySlug } from '@/data/projects'
import { ArrowLeft, Calendar, Clock, Package } from 'lucide-react'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    }
  }

  return {
    title: `${project.title} - Carpintería Los Artesanos`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Back Button */}
      <section className="bg-background border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-wood-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>{project.fullDescription}</p>
              </div>

              {/* Image Gallery */}
              {project.images.length > 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-foreground font-serif">Galería</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-wood-100">
                        <Image
                          src={image}
                          alt={`${project.title} - Imagen ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-[hsl(var(--border))]">
                <h3 className="text-lg font-bold mb-4 text-foreground">Detalles del Proyecto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Año</p>
                      <p className="font-medium text-foreground">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duración</p>
                      <p className="font-medium text-foreground">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Categoría</p>
                      <p className="font-medium text-foreground">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border border-[hsl(var(--border))]">
                <h3 className="text-lg font-bold mb-4 text-foreground">Materiales</h3>
                <ul className="space-y-2">
                  {project.materials.map((material, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contacto"
                className="block w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                Solicitar Proyecto Similar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif text-foreground">
            Proyectos Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {(await getProjects())
              .filter(p => p.slug !== project.slug && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/proyectos/${relatedProject.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-wood-100">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{relatedProject.category}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
