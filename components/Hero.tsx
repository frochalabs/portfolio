'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll()
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  
  const heroText = t('hero.headline')
  
  // Fade out do Hero baseado no scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0], { clamp: true })
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50], { clamp: true })
  
  // Parallax para a headline (move mais devagar que o resto)
  const headlineY = useTransform(scrollYProgress, [0, 0.3], [0, -30], { clamp: true })

  // Efeito máquina de escrever
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0
      const charactersPerSecond = 30
      const delayMs = 1000 / charactersPerSecond
      
      const typingInterval = setInterval(() => {
        if (currentIndex < heroText.length) {
          setDisplayedText(heroText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          setIsTyping(false)
          clearInterval(typingInterval)
        }
      }, delayMs)

      return () => clearInterval(typingInterval)
    }, 1000)

    return () => clearTimeout(delay)
  }, [heroText])

  const techLogos = ['N8N', 'OpenAI', 'WhatsApp', 'Sheets']

  return (
    <motion.section
      id="hero"
      style={{ opacity: heroOpacity, y: heroY }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden"
    >
      {/* Background Terminal Simulation */}
      <div 
        className="absolute inset-0 z-0 hero-terminal"
      />

      {/* Logos das Tecnologias Flutuantes - Topo Direito */}
      <div className="absolute top-24 right-4 md:right-8 flex items-center gap-2 md:gap-4 flex-wrap justify-end z-10">
        {techLogos.map((logo, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.7,
              y: [0, -8, 0],
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.1 + index * 0.1 },
              y: {
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
                ease: 'easeInOut',
              },
            }}
            className="text-[#888888] text-xs font-mono cursor-interactive transition-all duration-300 code-hover"
            whileHover={{
              opacity: 1,
              scale: 1.1,
              filter: 'drop-shadow(0 0 8px rgba(0, 254, 252, 0.6))',
            }}
          >
            {logo}
          </motion.span>
        ))}
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Foto + Texto de Apoio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-8 rounded-full bg-[#888888] border border-[#888888] overflow-hidden">
            <div className="w-full h-full bg-[#333333] flex items-center justify-center">
              <span className="text-[#888888] text-xs">R</span>
            </div>
          </div>
          <span className="text-[#888888] text-xs uppercase tracking-wider font-mono">
            {'//'} {t('hero.message')}
          </span>
        </motion.div>

        {/* Headline Principal com Efeito Máquina de Escrever */}
        <motion.h1
          style={{ 
            y: headlineY
          }}
          className="main-command mb-12 leading-tight"
        >
          {displayedText}
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-1 h-12 bg-[#FFFFFF] ml-2"
            />
          )}
        </motion.h1>

        {/* CTA Ghost Button com Glow Interativo */}
        <motion.a
          href="#problems"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="cursor-interactive relative inline-flex items-center gap-2 border border-[#888888] text-[#FFFFFF] rounded-full px-4 py-2 text-sm font-normal transition-all duration-400 overflow-hidden group"
          whileHover={{
            borderColor: '#00FEFC',
            boxShadow: '0 0 20px rgba(0, 254, 252, 0.4)',
          }}
        >
          {/* Efeito de brilho deslizante */}
          <motion.div
            className="absolute inset-0"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 254, 252, 0.2), transparent)',
            }}
          />
          <span className="relative z-10">{t('hero.cta.diagnosis')}</span>
          <motion.svg
            className="relative z-10 cta-arrow-icon w-4 h-4 text-[#00FEFC]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              filter: 'drop-shadow(0 0 4px rgba(0, 254, 252, 0.8))',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </motion.a>
      </div>

    </motion.section>
  )
}
