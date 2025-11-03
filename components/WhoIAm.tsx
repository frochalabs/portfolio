'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/rochalabs',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/binhorochatrybe',
  },
  {
    name: 'Instagram',
    url: 'https://rochalabs.co',
  },
]

const photoTriggers = [
  {
    id: 'perfil_1.png',
    label: 'Profissional',
  },
  {
    id: 'perfil_2.png',
    label: 'Foco',
  },
  {
    id: 'perfil_3.png',
    label: 'Estratégia',
  },
  {
    id: 'perfil_4.png',
    label: 'Visão',
  },
]

export default function WhoIAm() {
  const [activePhoto, setActivePhoto] = useState('perfil_1.png')

  // Auto-rotate photos
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = photoTriggers.findIndex(t => t.id === activePhoto)
      const nextIndex = (currentIndex + 1) % photoTriggers.length
      setActivePhoto(photoTriggers[nextIndex].id)
    }, 5000)

    return () => clearInterval(interval)
  }, [activePhoto])

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col overflow-hidden bg-[#000000] min-h-screen"
    >
      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Coluna Esquerda: Foto com Hover Reveal */}
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex-1 relative w-full lg:w-1/2 h-[50vh] lg:h-auto bg-transparent flex flex-col items-center justify-center px-8 py-16"
        >
          {/* Photo Container */}
          <div className="relative w-full max-w-md">
            {/* Photo Grid */}
            <div className="relative w-full h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-transparent">
              {photoTriggers.map((trigger) => (
                <motion.div
                  key={trigger.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: activePhoto === trigger.id ? 1 : 0,
                    scale: activePhoto === trigger.id ? 1 : 1.1
                  }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`/${trigger.id}`}
                    alt={`Fabiano Rocha - ${trigger.label}`}
                    fill
                    className="object-cover"
                    priority={trigger.id === 'perfil_1.png'}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              ))}
            </div>

            {/* Minimalist Dots Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              {photoTriggers.map((trigger) => (
                <motion.button
                  key={trigger.id}
                  onMouseEnter={() => setActivePhoto(trigger.id)}
                  onClick={() => setActivePhoto(trigger.id)}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="relative group"
                >
                  {/* Dot */}
                  <motion.div
                    className={`w-1.5 h-1.5 rounded-full ${
                      activePhoto === trigger.id ? 'bg-[#00FEFC]' : 'bg-[#444444]'
                    }`}
                    whileHover={{ 
                      scale: activePhoto === trigger.id ? 1.5 : 1.3,
                      backgroundColor: '#888888'
                    }}
                    animate={{
                      scale: activePhoto === trigger.id ? 1.5 : 1
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {/* Glow effect on active */}
                    {activePhoto === trigger.id && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          boxShadow: [
                            '0 0 8px rgba(0, 254, 252, 0.6)',
                            '0 0 12px rgba(0, 254, 252, 0.4)',
                            '0 0 8px rgba(0, 254, 252, 0.6)',
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Label on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-[#333333] rounded text-[0.7rem] text-white whitespace-nowrap pointer-events-none"
                  >
                    {trigger.label}
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Coluna Direita: Manifesto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-[#000000] flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 lg:py-20"
        >
          <div className="max-w-2xl mx-auto w-full">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-[#FFFFFF] leading-tight"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Prazer, Fabiano. Engenheiro de Software.
            </motion.h2>

            {/* Sotaque Elétrico - Linha Ciano */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '25%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-[#00FEFC] mb-8"
              style={{
                boxShadow: '0 0 8px rgba(0, 254, 252, 0.6)',
              }}
            />

            {/* Corpo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6 mb-12"
            >
              <p className="text-sm md:text-base text-[#FFFFFF] font-normal leading-relaxed">
                Atualmente, desenvolvo soluções de automação em uma das maiores empresas de serviços financeiros do país, lidando diariamente com sistemas críticos e processos de larga escala.
              </p>
              <p className="text-sm md:text-base text-[#FFFFFF] font-normal leading-relaxed">
                Minha especialidade é aplicar essa mesma engenharia de nível corporativo no seu negócio. Eu não uso templates; eu mergulho no seu contexto, arquiteto a lógica e construo soluções de automação customizadas (com Python, N8N e IA) que são seguras, precisas e prontas para escalar.
              </p>
            </motion.div>

            {/* Links de Redes Sociais - Estilo "Comentário de Código" */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-wider text-[#888888]"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-interactive transition-colors hover:text-[#00FEFC]"
                  whileHover={{ x: 2 }}
                >
                  {'//'} {link.name}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
