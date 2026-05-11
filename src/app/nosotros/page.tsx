import { Hammer, Award, Target, Clock, TreePine, BookOpen, Mail, Phone, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Sobre Nosotros - Carpintería Los Artesanos',
  description: 'Conoce nuestra historia como maestros carpinteros y nuestra pasión por la carpintería artesanal.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 to-amber-800 text-white py-20">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Nuestra historia como maestros carpinteros y nuestra pasión por transformar la madera en obras de arte
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Nuestra Trayectoria Artesanal</h2>
              <p className="text-lg text-gray-600 mb-6">
                Carpintería Los Artesanos es un taller familiar donde nuestra historia con la madera comenzó 
                hace más de 15 años. Desde nuestros inicios, aprendimos a apreciar el aroma de la madera recién 
                cortada y la satisfacción de crear algo con nuestras propias manos.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                A lo largo de los años, hemos perfeccionado técnicas tradicionales transmitidas de 
                generación en generación, combinándolas con tecnología moderna para ofrecer piezas 
                que unen la calidez del pasado con las exigencias del presente.
              </p>
              <p className="text-lg text-gray-600">
                Cada pieza que sale de nuestro taller lleva nuestro sello de calidad: atención al detalle, 
                compromiso con la excelencia y un profundo respeto por la madera como material noble 
                y sostenible.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tradición Familiar</h3>
                    <p className="text-gray-600">
                      Heredamos el oficio de nuestros ancestros, transmitido de padres a hijos. 
                      Tres generaciones de maestros carpinteros al servicio de nuestros clientes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Especialización</h3>
                    <p className="text-gray-600">
                      Nos especializamos en muebles a medida y restauración, preservando 
                      la esencia de cada pieza mientras la adaptamos a las necesidades modernas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TreePine className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sostenibilidad</h3>
                    <p className="text-gray-600">
                      Trabajamos exclusivamente con maderas certificadas y sostenibles, 
                      respetando siempre el medio ambiente y los bosques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nuestras Competencias Artesanales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Técnicas y especialidades que dominamos para crear piezas únicas y duraderas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Muebles a Medida</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Diseño personalizado
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Ensamblajes tradicionales
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Acabados artesanales
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Maderas nobles
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Restauración</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Recuperación estructural
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Técnicas históricas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Reparación de daños
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  Conservación patrimonial
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Carpintería Estructural</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Vigas y estructuras
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Escaleras a medida
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Suelos de madera
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Techumbres tradicionales
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nuestra Filosofía de Trabajo</h2>
            <p className="text-xl text-gray-600">
              Los principios que guian nuestro taller y cada pieza que creamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-amber-200">
              <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                <Hammer className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Calidad Artesanal</h3>
              <p className="text-gray-600 mb-4">
                Cada pieza que creamos es única. No trabajamos en serie, sino que dedicamos 
                el tiempo necesario para asegurar que cada corte, cada unión y cada 
                acabado sea perfecto.
              </p>
              <p className="text-gray-600">
                La calidad no es negociable en nuestro taller. Cada proyecto recibe la 
                misma atención al detalle, sin importar su tamaño.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-amber-200">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Respeto por la Madera</h3>
              <p className="text-gray-600 mb-4">
                Tratamos la madera con el respeto que se merece. Conocemos cada tipo de 
                madera, sus características, su comportamiento y cómo sacar lo mejor 
                de cada una.
              </p>
              <p className="text-gray-600">
                Utilizamos solo maderas certificadas y sostenibles, asegurando que nuestro 
                trabajo no dañe los bosques para las futuras generaciones.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-amber-200">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Tradición e Innovación</h3>
              <p className="text-gray-600 mb-4">
                Respetamos las técnicas tradicionales aprendidas de nuestros ancestros, pero no 
                tememos incorporar tecnología moderna cuando mejora el resultado final 
                sin comprometer la esencia artesanal.
              </p>
              <p className="text-gray-600">
                Lo antiguo y lo moderno pueden coexistir perfectamente en nuestro taller, 
                creando piezas que son atemporales pero funcionales.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-amber-200">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Durabilidad Vitalicia</h3>
              <p className="text-gray-600 mb-4">
                Construimos para que dure generaciones. Cada pieza está diseñada para 
                resistir el paso del tiempo, convirtiéndose en parte de la historia 
                de las familias que la poseen.
              </p>
              <p className="text-gray-600">
                Ofrecemos garantía vitalicia en nuestros trabajos porque confiamos plenamente 
                en la calidad de los materiales y la solidez de nuestra técnica.
              </p>
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
            Si estás buscando una pieza única para tu espacio o necesitas restaurar 
            un mueble con valor sentimental, estaremos encantados de ayudarte. ¡Visita nuestro taller!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@carpinterialosartesanos.com"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Enviar correo
            </a>
            <a
              href="tel:+34600000000"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 px-8 py-4 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
