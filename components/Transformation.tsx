'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: '⚡',
    title: 'Menos retrabalho',
    description: 'Elimine tarefas repetitivas e foque no que realmente importa.',
  },
  {
    icon: '🚀',
    title: 'Mais velocidade',
    description: 'Processos que levavam horas agora acontecem em minutos.',
  },
  {
    icon: '✅',
    title: 'Entregas consistentes',
    description: 'Resultados previsíveis e qualidade sempre alta.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Transformation() {
  return (
    <motion.section
      id="transformation"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-8"
        >
          Resultados que você vai sentir desde o primeiro dia
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 text-center mb-16 leading-relaxed"
        >
          Com automação inteligente e integração de sistemas, suas tarefas rotineiras se tornam processos instantâneos.
          <br />
          <span className="text-white font-semibold">Resultado: menos retrabalho, mais velocidade e entregas consistentes.</span>
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative bg-gradient-to-br from-black/60 via-black/50 to-black/60 border border-gray-800 rounded-xl p-8 hover:border-white/30 transition-all shadow-xl hover:shadow-white/10 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

