import Link from 'next/link'
import { ArrowRight, Hammer, Award, Clock, TreePine, Ruler } from 'lucide-react'

export const metadata = {
  title: 'Carpintería Los Artesanos - Muebles a Medida y Restauración',
  description: 'Carpintería Los Artesanos. Expertos en muebles a medida, restauración y carpintería estructural. Calidad artesanal y tradición en cada pieza.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 to-amber-800 text-white">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-amber-200">Carpintería Los Artesanos</span>
              </h1>
              <p className="text-xl md:text-2xl text-amber-100 mb-8">
                Maestros Carpinteros Artesanos
              </p>
              <p className="text-lg text-amber-200 mb-12 max-w-3xl mx-auto">
                Con más de 15 años de experiencia, transformamos la madera en obras de arte que duran generaciones. 
                Cada pieza que sale de nuestro taller lleva la firma de la tradición y la calidad artesanal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/proyectos"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
              >
                Ver nuestros trabajos
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contacto"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/20 inline-flex items-center justify-center"
              >
                Pedir presupuesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nuestros Servicios Artesanales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Especialidades que dominamos para crear piezas únicas y duraderas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Hammer className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Muebles a Medida</h3>
              <p className="text-gray-600 mb-4">
                Diseño y fabricación de muebles personalizados según tus necesidades y estilo.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">Mesas</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">Sillas</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">Armarios</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Restauración</h3>
              <p className="text-gray-600 mb-4">
                Devuelvo la vida a piezas antiguas con técnicas tradicionales de restauración.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Muebles</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Puertas</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Ventanas</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TreePine className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Carpintería Estructural</h3>
              <p className="text-gray-600 mb-4">
                Estructuras de madera para viviendas y edificios con garantía de durabilidad.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Vigas</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Escaleras</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Suelos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Nuestra Historia Artesanal
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Carpintería Los Artesanos es un taller familiar con más de 15 años de experiencia. 
                Nuestra pasión por la madera nació de generación en generación, aprendiendo los secretos 
                de este noble oficio desde nuestros ancestros.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Combinamos técnicas tradicionales transmitidas de generación en generación con 
                tecnología moderna para ofrecer piezas que unen la calidez del pasado con las 
                exigencias del presente.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">200+</div>
                  <div className="text-sm text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Madera Certificada</div>
                </div>
              </div>
              <Link
                href="/nosotros"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                Conocer nuestra historia
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <TreePine className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Madera Premium</h4>
                  <p className="text-sm text-gray-600 mt-2">Solo las mejores maderas</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <Ruler className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Precisión Milimétrica</h4>
                  <p className="text-sm text-gray-600 mt-2">Cortes perfectos</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <Hammer className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Técnicas Tradicionales</h4>
                  <p className="text-sm text-gray-600 mt-2">Artesanía pura</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900">Garantía Vitalicia</h4>
                  <p className="text-sm text-gray-600 mt-2">Durabilidad asegurada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-yellow-400/20 border border-yellow-400 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-yellow-100 text-sm">
              <strong>⚠️ Aviso Importante:</strong> Esta es una página de demostración para prácticas. 
              Los proyectos mostrados son ejemplos para desarrollar habilidades técnicas.
            </p>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estamos aquí para ayudarte a crear la pieza perfecta para tu espacio. 
            ¡Hablemos de tus ideas y las haremos realidad!
          </p>
          <Link
            href="/contacto"
            className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
          >
            Contactar ahora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
