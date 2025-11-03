'use client'

import { motion } from 'framer-motion'
import CodeBlock from './CodeBlock'
import LogoGrid from './LogoGrid'

export default function Differential() {
  return (
    <motion.section
      id="differential"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-8 lg:px-16 py-20 bg-[#000000] code-section relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 text-center text-[#FFFFFF] leading-tight"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Cada solução é construída do zero, para você. 
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-[#888888] text-center mb-12 font-mono uppercase tracking-wider"
        >
          Eu construo a arquitetura customizada que sua escala exige, linha por linha.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Coluna 1: Explicação + Código */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="border border-[#888888] rounded-lg p-8">
            <p className="text-sm text-[#888888] leading-relaxed mb-6 font-normal">
              Todo o trabalho é customizado, feito sob medida por um desenvolvedor que domina bots, IA e integração de sistemas. Isso garante soluções limpas, escaláveis e adaptáveis às suas necessidades.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#00FEFC] text-sm font-mono">[✓]</span>
                <span className="text-sm text-[#888888] font-mono">Soluções limpas e escaláveis</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00FEFC] text-sm font-mono">[✓]</span>
                <span className="text-sm text-[#888888] font-mono">100% adaptável às suas necessidades</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00FEFC] text-sm font-mono">[✓]</span>
                <span className="text-sm text-[#888888] font-mono">Feito por desenvolvedor, não templates</span>
              </div>
            </div>
            </div>

            {/* Bloco de Código Animado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CodeBlock />
            </motion.div>
          </motion.div>

          {/* Coluna 2: Grade de Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-start"
          >
            <LogoGrid />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
