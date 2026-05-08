import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Carpintería Los Artesanos - Muebles a medida y restauración',
  description: 'Taller de carpintería artesanal especializado en muebles a medida, restauración y carpintería estructural. Calidad y tradición desde 1985.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
