'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface NavItem {
  name: string
  href: string
  key: string
}

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  
  const navItems: NavItem[] = useMemo(() => [
    { name: t('nav.home'), href: '#hero', key: 'home' },
    { name: t('nav.problems'), href: '#problems', key: 'problems' },
    { name: t('nav.dilemma'), href: '#dilemma', key: 'dilemma' },
    { name: t('nav.differential'), href: '#differential', key: 'differential' },
    { name: t('nav.about'), href: '#about', key: 'about' },
    { name: t('nav.projects'), href: '#projects', key: 'projects' },
    { name: t('nav.contact'), href: '#contact', key: 'contact' },
  ], [t])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#000000]/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xs font-mono transition-colors text-[#888888]"
          >
            @rochalabs
          </motion.div>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navItems.map((item, index) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId
                
                return (
                  <li key={index}>
                    <motion.a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`cursor-interactive relative px-2 py-1 text-xs font-normal transition-colors ${
                        isActive 
                          ? 'text-[#FFFFFF]'
                          : 'text-[#888888] hover:text-[#FFFFFF]'
                      }`}
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 0 }}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute bottom-0 left-0 right-0 h-px bg-[#00FEFC]"
                          initial={false}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          style={{
                            boxShadow: '0 0 8px rgba(0, 254, 252, 0.6)',
                          }}
                        />
                      )}
                    </motion.a>
                  </li>
                )
              })}
            </ul>

            {/* Idioma integrado */}
            <div className="flex items-center gap-0.5 ml-6 pl-6 border-l border-[#333333]">
              <motion.button
                onClick={() => setLanguage('pt')}
                className={`px-2 py-0.5 text-[0.7rem] font-mono transition-all border-none bg-transparent cursor-pointer rounded-sm uppercase ${
                  language === 'pt'
                    ? 'text-[#00FEFC] bg-[rgba(0,254,252,0.1)]'
                    : 'text-[#666666] hover:text-[#FFFFFF]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                PT
              </motion.button>
              <span className="text-[#333333] text-[0.7rem]">/</span>
              <motion.button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 text-[0.7rem] font-mono transition-all border-none bg-transparent cursor-pointer rounded-sm uppercase ${
                  language === 'en'
                    ? 'text-[#00FEFC] bg-[rgba(0,254,252,0.1)]'
                    : 'text-[#666666] hover:text-[#FFFFFF]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
            </div>
          </div>
          <div className="md:hidden">
            <MenuMobile navItems={navItems} />
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

function MenuMobile({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#888888]"
        aria-label="Menu"
      >
        <motion.div
          animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0 }}
          className="w-5 h-px mb-1.5 bg-[#888888]"
        />
        <motion.div
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-5 h-px mb-1.5 bg-[#888888]"
        />
        <motion.div
          animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0 }}
          className="w-5 h-px bg-[#888888]"
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-[#000000]/95 backdrop-blur-sm border-b border-[#888888] p-4 space-y-2 z-50"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="cursor-interactive block px-4 py-2 text-xs text-[#888888] hover:text-[#FFFFFF] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </>
  )
}
