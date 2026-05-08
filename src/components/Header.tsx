'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Hammer } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">César Villacañas Moreno</h1>
              <p className="text-sm text-gray-600">Carpintería Artesanal</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Sobre Mí
            </Link>
            <Link href="/proyectos" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Mis Trabajos
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Inicio
              </Link>
              <Link href="/nosotros" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Sobre Mí
              </Link>
              <Link href="/proyectos" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                Mis Trabajos
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}>
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
