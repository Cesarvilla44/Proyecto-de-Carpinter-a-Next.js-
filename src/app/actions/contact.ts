"use server"

import { revalidatePath } from "next/cache"

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
  projectType: string
}

export interface ContactResponse {
  success: boolean
  message: string
  data?: ContactFormData
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactResponse> {
  try {
    // Validar datos
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: "Por favor completa todos los campos requeridos",
      }
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: "Por favor ingresa un email válido",
      }
    }

    // Aquí iría la lógica para enviar el email
    // Por ahora, solo simulamos el envío
    console.log("Formulario de contacto recibido:", formData)

    // Revalidar la página de contacto
    revalidatePath("/contacto")

    return {
      success: true,
      message: "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.",
      data: formData,
    }
  } catch (error) {
    console.error("Error al procesar el formulario:", error)
    return {
      success: false,
      message: "Hubo un error al procesar tu solicitud. Intenta de nuevo.",
    }
  }
}
