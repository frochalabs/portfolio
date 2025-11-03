import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import PageInit from '@/components/PageInit'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Meu portfólio pessoal',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="cursor-none">
        <PageInit />
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}

