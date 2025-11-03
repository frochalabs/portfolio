'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const beforeItems = [
  'Processos lentos e repetitivos',
  'Erros humanos constantes',
  'Equipe sobrecarregada',
  'Noites acordado apagando incêndios',
  'Decisões baseadas em dados desatualizados',
]

const afterItems = [
  'Fluxos automáticos e inteligentes',
  'Precisão e consistência',
  'Equipe focada em crescimento',
  'Tempo livre para estratégia',
  'Decisões em tempo real com IA',
]

const services = [
  {
    category: 'Automação de Marketing e Atendimento',
    items: [
      'Bots de resposta automática a leads (WhatsApp, Instagram, chat)',
      'Follow-up inteligente e sequências automáticas',
      'Agendamento e integração com CRM e Google Calendar',
    ],
  },
  {
    category: 'Inteligência e Relatórios',
    items: [
      'Relatórios automáticos de campanhas e performance',
      'Análise de concorrência e insights via IA',
      'Dashboard simples de resultados via N8N ou APIs',
    ],
  },
  {
    category: 'Integração de Sistemas e Fluxos',
    items: [
      'Conexão entre diferentes plataformas sem código ou low-code',
      'Fluxos automáticos para replicação de conteúdo, faturamento ou notificações',
      'Automatização de processos internos que antes consumiam tempo da equipe',
    ],
  },
]

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before')

  return (
    <motion.section
      id="transformation"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          A Transformação: Do Lento ao Inteligente
        </motion.h2>

        {/* Slider Antes/Depois */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveTab('before')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'before'
                  ? 'bg-red-500/20 text-red-400 border-2 border-red-500'
                  : 'bg-gray-800 text-gray-400 border-2 border-gray-700'
              }`}
            >
              ANTES (O Caos)
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                activeTab === 'after'
                  ? 'bg-green-500/20 text-green-400 border-2 border-green-500'
                  : 'bg-gray-800 text-gray-400 border-2 border-gray-700'
              }`}
            >
              DEPOIS (A Ordem)
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'before' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-black/60 to-black/40 border border-gray-800 rounded-xl p-8"
          >
            <ul className="space-y-4">
              {(activeTab === 'before' ? beforeItems : afterItems).map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: activeTab === 'before' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3 text-lg ${
                    activeTab === 'before' ? 'text-red-300' : 'text-green-300'
                  }`}
                >
                  <span className="text-2xl">{activeTab === 'before' ? '❌' : '✅'}</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Serviços */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="card-variable text-center mb-12">Como eu faço isso acontecer:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-black/60 via-black/50 to-black/60 border border-gray-800 rounded-xl p-6 hover:border-white/30 transition-all shadow-xl hover:shadow-white/10"
              >
                <h4 className="card-variable text-lg mb-4">{service.category}</h4>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-white mr-2">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

