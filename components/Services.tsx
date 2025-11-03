'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const serviceCategories = [
  {
    id: 'marketing',
    category: 'Automação de Marketing e Atendimento',
    services: [
      'Bots de resposta automática a leads (WhatsApp, Instagram, chat)',
      'Follow-up inteligente e sequências automáticas',
      'Agendamento e integração com CRM e Google Calendar',
    ],
  },
  {
    id: 'intelligence',
    category: 'Inteligência e Relatórios',
    services: [
      'Relatórios automáticos de campanhas e performance',
      'Análise de concorrência e insights via IA',
      'Dashboard simples de resultados via N8N ou APIs',
    ],
  },
  {
    id: 'integration',
    category: 'Integração de Sistemas e Fluxos',
    services: [
      'Conexão entre diferentes plataformas sem código ou low-code',
      'Fluxos automáticos para replicação de conteúdo, faturamento ou notificações',
      'Automatização de processos internos que antes consumiam tempo da equipe',
    ],
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('marketing')

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-8 lg:px-16 py-20 bg-[#000000]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-12 text-[#FFFFFF] leading-tight"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Meu Ecossistema de Soluções
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`cursor-interactive px-4 py-2 rounded-full text-sm font-normal transition-all ${
                activeTab === category.id
                  ? 'bg-[#FFFFFF] text-[#000000]'
                  : 'bg-[#000000] text-[#888888] border border-[#888888] hover:border-[#FFFFFF] hover:text-[#FFFFFF]'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="border border-[#888888] rounded-lg p-8"
        >
          <h3 className="text-xl font-semibold mb-6 text-[#FFFFFF]">
            {serviceCategories.find(c => c.id === activeTab)?.category}
          </h3>
          <ul className="space-y-4">
            {serviceCategories
              .find(c => c.id === activeTab)
              ?.services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-sm text-[#888888]"
                >
                  <span className="text-[#FFFFFF] mr-3">→</span>
                  <span className="leading-relaxed">{service}</span>
                </motion.li>
              ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}
