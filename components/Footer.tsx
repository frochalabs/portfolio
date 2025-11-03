'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fabianorocha-dev/',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/frochalabs',
  },
]

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-8 bg-[#000000] border-t border-[#888888]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Esquerda: Copyright */}
        <p className="text-xs text-[#888888] font-mono">
          {t('footer.copyright')}
        </p>

        {/* Direita: Links de Redes Sociais */}
        <div className="flex gap-6 font-mono text-xs uppercase tracking-wider text-[#888888]">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-interactive transition-colors hover:text-[#00FEFC]"
            >
              {'//'} {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
