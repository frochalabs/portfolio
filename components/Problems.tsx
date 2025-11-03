'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

// Componentes de Ícones SVG
const FireIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7 1.832 1.832 3 5.5 3 7.5 2 0 4-1 4-3 2.5 1.5 3.5 4.5 3.5 6.5a8 8 0 01-2.343 5.657z" />
  </svg>
)

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
  </svg>
)

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const PlugIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const MobileIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 01-2 2h-4a2 2 0 01-2-2V3a2 2 0 012-2h4a2 2 0 012 2v18z" />
  </svg>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function Problems() {
  const { t } = useLanguage()
  
  const problems = [
    {
      icon: FireIcon,
      titleKey: 'problems.1.title',
      descKey: 'problems.1.desc',
    },
    {
      icon: ClockIcon,
      titleKey: 'problems.2.title',
      descKey: 'problems.2.desc',
    },
    {
      icon: ChartIcon,
      titleKey: 'problems.3.title',
      descKey: 'problems.3.desc',
    },
    {
      icon: PlugIcon,
      titleKey: 'problems.4.title',
      descKey: 'problems.4.desc',
    },
    {
      icon: MobileIcon,
      titleKey: 'problems.5.title',
      descKey: 'problems.5.desc',
    },
  ]

  return (
    <motion.section
      id="problems"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-8 lg:px-16 py-20 bg-[#000000] relative background-grid"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-function mb-4 leading-tight">
            {t('problems.title.part1')}{' '}
            <span>{t('problems.title.part2')}</span>
          </h2>
          <p className="text-xs text-[#888888] font-mono uppercase tracking-wider">
            {t('problems.subtitle')}
          </p>
        </motion.div>
        
        {/* Linha de Conexão Visual */}
        <div className="relative mb-16">
          <div 
            className="absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#333333] to-transparent"
            style={{ opacity: 0.3 }}
          />
        </div>

        {/* Cards Container com Stagger Aprimorado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem, index) => {
            const IconComponent = problem.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="cursor-interactive border border-[#888888] rounded-lg p-6 flex flex-col h-full relative overflow-hidden transition-all duration-400 group"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: '#444444',
                  transition: {
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                }}
              >
                {/* Linha Ciano no Hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#00FEFC]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />
                
                <motion.div
                  className="mb-4 text-[#FFFFFF] transition-all duration-300"
                  whileHover={{
                    scale: 1.2,
                    filter: 'drop-shadow(0 0 6px rgba(0, 254, 252, 0.6))',
                  }}
                >
                  <IconComponent className="w-8 h-8" />
                </motion.div>
                <h3 className="card-variable mb-3">{t(problem.titleKey)}</h3>
                <p className="text-sm text-[#888888] font-normal leading-relaxed flex-grow">{t(problem.descKey)}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
