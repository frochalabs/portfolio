import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import PageInit from '@/components/PageInit'
import CustomCursor from '@/components/CustomCursor'
import CursorManager from '@/components/CursorManager'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'RochaLabs',
  description: 'Automação que transforma seu dia a dia em vantagem competitiva',
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
      <body>
        <LanguageProvider>
          <CursorManager />
          <PageInit />
          <SmoothScroll />
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

