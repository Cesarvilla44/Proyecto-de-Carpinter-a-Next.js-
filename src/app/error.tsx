'use client'

import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4 font-serif">
          Algo salió mal
        </h2>
        <p className="text-muted-foreground mb-8">
          Ha ocurrido un error inesperado. Por favor, intenta de nuevo más tarde.
        </p>
        <button
          onClick={reset}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Intentar de nuevo
        </button>
        <a
          href="/"
          className="block mt-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
