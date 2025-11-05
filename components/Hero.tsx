'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

type AnimationState = 
  | 'IDLE'
  | 'TYPING_1'
  | 'DELETING_1'
  | 'TYPING_2'
  | 'DELETING_2'
  | 'TYPING_3'
  | 'COMPLETE'

export default function Hero() {
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll()
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [animationState, setAnimationState] = useState<AnimationState>('IDLE')
  
  // Fade out do Hero baseado no scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0], { clamp: true })
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50], { clamp: true })
  
  // Parallax para a headline (move mais devagar que o resto)
  const headlineY = useTransform(scrollYProgress, [0, 0.3], [0, -30], { clamp: true })

  // Frases para o prompt dinâmico
  const phrases = useMemo(() => [
 "AI agents that reason about business processes.",
"Automation pipelines executed by intelligent triggers.",
"End-to-end automation with AI oversight."
  ], [])

  // Máquina de estados para animação dinâmica
  useEffect(() => {
    if (animationState === 'COMPLETE') return
    
    let typingInterval: NodeJS.Timeout | null = null
    let delayTimeout: NodeJS.Timeout | null = null
    let stateTimeout: NodeJS.Timeout | null = null
    let currentIndex = 0
    
    const typeSpeed = 30 // caracteres por segundo (digitação)
    const deleteSpeed = 100 // caracteres por segundo (apagamento - muito mais rápido)
    
    // Delay inicial - iniciar animação
    if (animationState === 'IDLE') {
      delayTimeout = setTimeout(() => {
        setAnimationState('TYPING_1')
      }, 1000)
      
      return () => {
        if (delayTimeout) clearTimeout(delayTimeout)
      }
    }
    
    // Executar animações baseadas no estado
    switch (animationState) {
      case 'TYPING_1': {
        currentIndex = 0
        setIsTyping(true)
        typingInterval = setInterval(() => {
          if (currentIndex < phrases[0].length) {
            setDisplayedText(phrases[0].slice(0, currentIndex + 1))
            currentIndex++
          } else {
            if (typingInterval) clearInterval(typingInterval)
            setIsTyping(false)
            stateTimeout = setTimeout(() => setAnimationState('DELETING_1'), 1500)
          }
        }, 1000 / typeSpeed)
        break
      }
        
      case 'DELETING_1': {
        currentIndex = phrases[0].length
        setIsTyping(true)
        typingInterval = setInterval(() => {
          if (currentIndex > 0) {
            setDisplayedText(phrases[0].slice(0, currentIndex - 1))
            currentIndex--
          } else {
            if (typingInterval) clearInterval(typingInterval)
            setDisplayedText('')
            setIsTyping(false)
            stateTimeout = setTimeout(() => setAnimationState('TYPING_2'), 500)
          }
        }, 1000 / deleteSpeed)
        break
      }
        
      case 'TYPING_2': {
        currentIndex = 0
        setIsTyping(true)
        typingInterval = setInterval(() => {
          if (currentIndex < phrases[1].length) {
            setDisplayedText(phrases[1].slice(0, currentIndex + 1))
            currentIndex++
          } else {
            if (typingInterval) clearInterval(typingInterval)
            setIsTyping(false)
            stateTimeout = setTimeout(() => setAnimationState('DELETING_2'), 1500)
          }
        }, 1000 / typeSpeed)
        break
      }
        
      case 'DELETING_2': {
        currentIndex = phrases[1].length
        setIsTyping(true)
        typingInterval = setInterval(() => {
          if (currentIndex > 0) {
            setDisplayedText(phrases[1].slice(0, currentIndex - 1))
            currentIndex--
          } else {
            if (typingInterval) clearInterval(typingInterval)
            setDisplayedText('')
            setIsTyping(false)
            stateTimeout = setTimeout(() => setAnimationState('TYPING_3'), 500)
          }
        }, 1000 / deleteSpeed)
        break
      }
        
      case 'TYPING_3': {
        currentIndex = 0
        setIsTyping(true)
        typingInterval = setInterval(() => {
          if (currentIndex < phrases[2].length) {
            setDisplayedText(phrases[2].slice(0, currentIndex + 1))
            currentIndex++
          } else {
            if (typingInterval) clearInterval(typingInterval)
            setIsTyping(false)
            setAnimationState('COMPLETE')
          }
        }, 1000 / typeSpeed)
        break
      }
    }

    return () => {
      if (typingInterval) clearInterval(typingInterval)
      if (delayTimeout) clearTimeout(delayTimeout)
      if (stateTimeout) clearTimeout(stateTimeout)
    }
  }, [animationState, phrases])

  const techLogos = ['N8N', 'OpenAI', 'WhatsApp', 'Sheets']

  return (
    <motion.section
      id="hero"
      style={{ opacity: heroOpacity, y: heroY }}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden"
    >
      {/* Background Terminal Simulation */}
      <div 
        className="absolute inset-0 z-0 hero-terminal"
      />

      {/* Data Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-cyan-500/10"
            style={{
              left: `${15 + i * 12}%`,
              top: '-20%',
            }}
            animate={{
              y: ['0%', '120%'],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Logos das Tecnologias Flutuantes - Topo Direito */}
      <div className="absolute top-24 right-6 md:right-12 z-10">
        <div className="bg-black/40 backdrop-blur-sm border border-[#888888]/30 rounded-lg p-3">
          <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-end">
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
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Mensagem @ROCHALABS - Ajuste de posicionamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-10 ml-2"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-300 overflow-hidden flex items-center justify-center">
              <span className="text-black text-xs font-bold">R</span>
            </div>
            {/* Status indicator */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black">
              <div className="w-full h-full bg-green-400 rounded-full animate-pulse" />
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
          className="main-command mb-12 leading-tight pl-2"
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

        {/* CTA Button com Gradiente e Glow Interativo */}
        <motion.a
          href="#problems"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="cursor-interactive relative inline-flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-[#888888] text-[#FFFFFF] rounded-full px-6 py-3 text-sm font-semibold transition-all duration-400 overflow-hidden group ml-2"
          whileHover={{
            borderColor: '#00FEFC',
            boxShadow: '0 0 30px rgba(0, 254, 252, 0.3)',
            scale: 1.02,
          }}
        >
          {/* Gradiente de fundo no hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
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
