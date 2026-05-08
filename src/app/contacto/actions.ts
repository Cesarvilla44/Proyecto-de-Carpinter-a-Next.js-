'use server'

import { revalidatePath } from 'next/cache'

export interface ContactFormState {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
  }
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // Validación
  const errors: ContactFormState['errors'] = {}

  if (!name || name.trim().length < 2) {
    errors.name = ['El nombre debe tener al menos 2 caracteres']
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ['Por favor, introduce un email válido']
  }

  if (!message || message.trim().length < 10) {
    errors.message = ['El mensaje debe tener al menos 10 caracteres']
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Por favor, corrige los errores del formulario',
      errors,
    }
  }

  // Simular envío del formulario
  // En producción, aquí enviarías el email o guardarías en base de datos
  await new Promise(resolve => setTimeout(resolve, 1000))

  console.log('Formulario de contacto recibido:', { name, email, message })

  // Revalidar la página si es necesario
  // revalidatePath('/contacto')

  return {
    success: true,
    message: '¡Mensaje enviado correctamente! Te contactaremos pronto.',
  }
}
