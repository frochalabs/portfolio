'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-black/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Não é sobre ser a próxima onda.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            É só uma questão de não ter preguiça e não desperdiçar a maior e mais óbvia janela de oportunidade de todos os tempos do mercado de tecnologia.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            A corrida para dominar o mercado de inteligência artificial já começou, e só diz que é bolha aqueles que não querem correr, ou pior, não sabem para onde correr.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">
            E é exatamente isso que vamos te mostrar, a direção que poucos sabem, mas que ninguém fala sobre o mercado de IA.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

