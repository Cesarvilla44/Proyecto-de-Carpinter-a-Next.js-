import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/data/projects";
import { Suspense } from "react";
import {
  Hammer,
  TreePine,
  Award,
  Palette,
  ExternalLink,
  Eye,
} from "lucide-react";

export const metadata = {
  title: "Nuestros Trabajos - Carpintería Los Artesanos",
  description:
    "Explora nuestros trabajos de carpintería artesanal. Muebles a medida, restauración y carpintería estructural.",
};

export const revalidate = 3600; // ISR: revalidar cada hora

function getProjectIcon(category: string) {
  switch (category.toLowerCase()) {
    case "muebles a medida":
      return <Hammer className="w-5 h-5" />;
    case "restauración":
      return <Award className="w-5 h-5" />;
    case "carpintería estructural":
      return <TreePine className="w-5 h-5" />;
    default:
      return <Hammer className="w-5 h-5" />;
  }
}

function getCategoryColor(category: string) {
  switch (category.toLowerCase()) {
    case "muebles a medida":
      return "bg-amber-100 text-amber-700";
    case "restauración":
      return "bg-green-100 text-green-700";
    case "carpintería estructural":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

async function ProjectsGrid() {
  const projects = await getProjects();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/proyectos/${project.slug}`}
          className="group block"
        >
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative aspect-[16/10] bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDsAB//Z"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-gray-700" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}
                >
                  {getProjectIcon(project.category)}
                  {project.category}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {project.description}
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                {project.year && <span>{project.year}</span>}
                {project.materials && (
                  <>
                    <span>•</span>
                    <span>{project.materials.slice(0, 2).join(", ")}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden"
        >
          <div className="aspect-[16/10] bg-gray-200 animate-pulse" />
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 to-amber-800 text-white py-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Nuestros Trabajos</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Una selección de nuestros trabajos más recientes en carpintería
              artesanal, desde muebles a medida hasta restauraciones de piezas
              históricas
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Overview */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl border border-amber-200">
              <Hammer className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Muebles a Medida</h3>
              <p className="text-sm text-gray-600 mt-1">Diseño personalizado</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-amber-200">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Restauración</h3>
              <p className="text-sm text-gray-600 mt-1">Piezas históricas</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-amber-200">
              <TreePine className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Estructural</h3>
              <p className="text-sm text-gray-600 mt-1">Vigas y escaleras</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-amber-200">
              <Palette className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900">Acabados</h3>
              <p className="text-sm text-gray-600 mt-1">Técnicas artesanales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trabajos Recientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explora nuestros trabajos más recientes y descubre cómo hemos
              ayudado a diferentes clientes a crear piezas únicas y duraderas
              para sus espacios
            </p>
          </div>

          <Suspense fallback={<ProjectsSkeleton />}>
            <ProjectsGrid />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-yellow-400/20 border border-yellow-400 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-yellow-100 text-sm">
              <strong>⚠️ Aviso Importante:</strong> Los trabajos mostrados son
              ejemplos educativos para desarrollar habilidades técnicas.
            </p>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            ¿Tienes un proyecto de carpintería en mente?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estoy siempre buscando nuevos desafíos y oportunidades para crear
            piezas únicas. ¡Hablemos de cómo puedo ayudarte a hacer realidad tus
            ideas en madera!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Solicitar presupuesto
              <ExternalLink className="w-5 h-5" />
            </Link>
            <a
              href="tel:+34600000000"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              Visitar taller
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
