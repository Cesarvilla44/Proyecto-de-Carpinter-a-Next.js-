import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - Carpintería Los Artesanos',
  description: 'Contacta con Carpintería Los Artesanos. Presupuestos para muebles a medida, restauración y carpintería estructural.',
}

export const revalidate = 3600 // ISR: revalidar cada hora

import ContactForm from './ContactForm'

export default function ContactPage() {
  return <ContactForm />
}
