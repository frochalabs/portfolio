'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

// Componentes de Ícones SVG
const DocumentIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const GearIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default function Dilemma() {
  const { t } = useLanguage()
  
  const easyPath = [
    { key: 'dilemma.easy.1' },
    { key: 'dilemma.easy.2' },
    { key: 'dilemma.easy.3' },
  ]

  const strategicPath = [
    { key: 'dilemma.strategic.1' },
    { key: 'dilemma.strategic.2' },
    { key: 'dilemma.strategic.3' },
  ]

  return (
    <motion.section
      id="dilemma"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-8 lg:px-16 py-20 bg-[#000000] min-h-screen flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Título Unificado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-function mb-4 leading-tight tracking-tight">
            {t('dilemma.title.part1')}{' '}
            <span>{t('dilemma.title.part2')}</span>
          </h2>
          <p className="text-xs md:text-sm text-[#888888] max-w-2xl mx-auto leading-relaxed font-mono uppercase tracking-wider">
            {t('dilemma.subtitle')}
          </p>
        </motion.div>

        {/* Grid Assimétrico Ousado */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 lg:gap-8">
          {/* Card Esquerdo - O "Caminho Fácil" com Desfoque */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              y: -4,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="relative bg-[#111111] border border-[#333333] rounded-lg p-8 transition-all duration-300 overflow-hidden"
            style={{
              background: 'rgba(17, 17, 17, 0.7)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            {/* Overlay de gradiente */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(136, 136, 136, 0.1) 0%, transparent 50%)',
              }}
            />

            <div className="relative z-10">
              {/* Ícone Ilustrativo - Template */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 text-[#888888]"
              >
                <DocumentIcon className="w-10 h-10" />
              </motion.div>

              {/* Headline */}
              <motion.h3
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base lg:text-lg font-normal mb-3 text-[#888888] leading-tight"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {t('dilemma.easy.title')}
              </motion.h3>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-xs font-mono text-[#888888] mb-8 uppercase tracking-wider"
              >
                {t('dilemma.easy.subtitle')}
              </motion.p>

              {/* Lista - Entrada Sequencial */}
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
                className="space-y-4"
              >
                {easyPath.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -20,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: 'spring',
                          stiffness: 100,
                        },
                      },
                    }}
                    className="flex items-start gap-3 text-sm text-[#888888]"
                  >
                    <span className="text-xs font-mono text-[#888888]">{'//'}</span>
                    <span className="leading-relaxed">{t(item.key)}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Card Direito - A "Arquitetura Estratégica" com Bordas Animadas */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              y: -4,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="relative bg-[#000000] border border-transparent rounded-lg p-8 lg:p-12 transition-all duration-300 overflow-hidden group"
            style={{
              backgroundClip: 'padding-box',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Background Ciano Permanente */}
            <div
              className="absolute inset-0 rounded-lg opacity-100"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 254, 252, 0.15) 0%, rgba(0, 254, 252, 0.08) 50%, rgba(0, 0, 0, 0.9) 100%)',
              }}
            />
            
            {/* Camada Animada no Hover */}
            <motion.div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
              initial={{ scale: 1, x: 0, y: 0 }}
              whileHover={{
                scale: [1, 1.1, 1],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 254, 252, 0.2) 0%, transparent 70%)',
              }}
            />
            
            {/* Borda animada com gradiente */}
            <motion.div
              className="absolute -inset-[1px] rounded-lg -z-10"
              style={{
                background: 'linear-gradient(45deg, #00FEFC, transparent, #00FEFC)',
              }}
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <div className="relative z-10">
              {/* Ícone Ilustrativo - Engrenagem Giratória */}
              <motion.div
                initial={{ opacity: 0, rotate: -180, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                className="mb-6 text-[#FFFFFF]"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  transformOrigin: 'center',
                }}
              >
                <GearIcon className="w-10 h-10" />
              </motion.div>

              {/* Headline - Line Mask Reveal */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="section-function mb-4 leading-tight overflow-hidden"
              >
                <motion.span
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                  className="block"
                >
                  {t('dilemma.strategic.title')}
                </motion.span>
              </motion.h3>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="text-base md:text-lg font-normal text-white/90 mb-10 leading-relaxed"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {t('dilemma.strategic.subtitle')}
              </motion.p>

              {/* Lista - Ícones com Pulsação, Cascata */}
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="space-y-5"
              >
                {strategicPath.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: 'easeOut',
                        },
                      },
                    }}
                    className="flex items-start gap-3 text-sm text-[#FFFFFF]"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: 'easeInOut',
                      }}
                      className="text-[#00FEFC] mt-0.5 flex-shrink-0"
                    >
                      <CheckIcon className="w-5 h-5" />
                    </motion.div>
                    <span className="leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif' }}>{t(item.key)}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
