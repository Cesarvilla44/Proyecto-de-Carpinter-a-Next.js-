'use client'

import { useState } from 'react'
import { submitContactForm, ContactFormState } from './actions'
import { Mail, Phone, MapPin, Clock, Hammer, Send } from 'lucide-react'

export default function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormState(null)
    
    const result = await submitContactForm(formState || { success: false, message: '' }, formData)
    
    if (result.success) {
      // Reset form on success
      const form = document.getElementById('contact-form') as HTMLFormElement
      form?.reset()
    }
  }

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
            <h1 className="text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-amber-100">Visita mi taller o contáctame para tu proyecto de carpintería</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Solicita tu Presupuesto</h2>
              <p className="text-gray-600 mb-8">
                Cuéntame sobre tu proyecto de carpintería y te prepararé un presupuesto detallado. 
                Trabajo con muebles a medida, restauración y carpintería estructural.
              </p>

              {formState?.success && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  {formState.message}
                </div>
              )}

              {formState?.errors && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                  {formState.message}
                </div>
              )}

              <form 
                id="contact-form"
                action={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                  {formState?.errors?.name && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.name[0]}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                  {formState?.errors?.email && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.email[0]}</p>
                  )}
                </div>

                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-none"
                    placeholder="Describe el mueble o trabajo de carpintería que necesitas..."
                  />
                  {formState?.errors?.message && (
                    <p className="text-red-500 text-sm mt-1">{formState.errors.message[0]}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Mi Taller</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">cesar.villacañas@email.com</p>
                    <p className="text-sm text-gray-500">Respuesta en 24-48 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+34 600 000 000</p>
                    <p className="text-sm text-gray-500">Lunes a Viernes, 8:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dirección del Taller</h3>
                    <p className="text-gray-600">Calle Artesano 123</p>
                    <p className="text-gray-600">28001 Madrid, España</p>
                    <p className="text-sm text-gray-500">Visitas con cita previa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horario del Taller</h3>
                    <p className="text-gray-600">Lunes - Viernes: 8:00 - 18:00</p>
                    <p className="text-sm text-gray-500">Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>

              {/* Workshop Visit */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Visita mi Taller</h3>
                <p className="text-gray-600 mb-4">
                  Te invito a visitar mi taller para ver mi trabajo en persona y tocar 
                  las diferentes maderas con las que trabajo. Podemos discutir tu proyecto 
                  mientras disfrutas del aroma de la madera fresca.
                </p>
                <div className="flex items-center gap-2 text-amber-600">
                  <Hammer className="w-5 h-5" />
                  <span className="font-medium">Visitas con cita previa</span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-6">
                <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Aviso Importante</h3>
                <p className="text-yellow-700 text-sm">
                  Esta es una página de demostración para prácticas. 
                  Los formularios de contacto son simulaciones para desarrollar habilidades técnicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">¿Qué tipo de trabajos realizo?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Me especializo en diversos aspectos de la carpintería artesanal. Aquí hay algunas formas en que puedo ayudarte:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Muebles a Medida</h3>
              <p className="text-gray-600">
                Diseño y fabricación de muebles personalizados para tu hogar u oficina
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Restauración</h3>
              <p className="text-gray-600">
                Recuperación y restauración de muebles antiguos con valor sentimental
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Estructuras</h3>
              <p className="text-gray-600">
                Vigas, escaleras y estructuras de madera para tu hogar o negocio
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
