'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Carpintería Los Artesanos</h3>
            <p className="text-gray-300 mb-4">
              Maestros carpinteros artesanos con más de 15 años de experiencia. 
              Especializados en muebles a medida, restauración y carpintería estructural.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@carpinterialosartesanos.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+34 600 000 000</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-gray-300 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Disclaimer */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Conecta Conmigo</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://github.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-yellow-900/30 border border-yellow-600 rounded-lg p-4">
              <p className="text-yellow-300 text-sm">
                <strong>Aviso:</strong> Este es un portafolio de demostración con fines educativos y de práctica. 
                Los proyectos mostrados son ejemplos para desarrollar habilidades técnicas.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Carpintería Los Artesanos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
