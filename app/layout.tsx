import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import PageInit from '@/components/PageInit'
import CustomCursor from '@/components/CustomCursor'
import CursorManager from '@/components/CursorManager'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'RochaLabs',
  description: 'Automation that transforms your daily operations into a competitive advantage',
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
    <html lang="en">
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

