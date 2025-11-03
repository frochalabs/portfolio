'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

interface Project {
  title: string
  description: string
  tech: string[]
  metrics?: {
    before: string
    after: string
    result: string
  }
}

const projects: Project[] = [
  {
    title: 'Bot de Atendimento WhatsApp',
    description: 'Automação completa de atendimento com integração CRM, agendamento automático e follow-up inteligente.',
    tech: ['WhatsApp API', 'N8N', 'OpenAI'],
    metrics: {
      before: '2 horas',
      after: 'Imediato',
      result: '+30% leads qualificados',
    },
  },
  {
    title: 'Dashboard de Relatórios Automáticos',
    description: 'Sistema que coleta dados de múltiplas plataformas e gera relatórios com insights via IA.',
    tech: ['N8N', 'APIs', 'Google Sheets'],
    metrics: {
      before: '10h/semana',
      after: 'Tempo real',
      result: 'Decisões 5x mais rápidas',
    },
  },
  {
    title: 'Integração Multi-Plataforma',
    description: 'Fluxo automatizado conectando Instagram, WhatsApp, CRM e Google Sheets para replicação de conteúdo e leads.',
    tech: ['N8N', 'Zapier', 'APIs'],
    metrics: {
      before: '3h/dia',
      after: 'Instantâneo',
      result: '40% mais tempo estratégia',
    },
  },
]

// Gera código de exemplo baseado no projeto
const generateCodePreview = (project: Project) => {
  const codeSnippets: { [key: string]: string[] } = {
    'Bot de Atendimento WhatsApp': [
      "import { AutomationEngine } from '@rochalabs/core'",
      "import { WhatsAppAPI } from '@integrations/whatsapp'",
      "",
      "const bot = new AutomationEngine({",
      "  platform: 'whatsapp',",
      "  aiModel: 'gpt-4',",
      "  crmIntegration: true",
      "})",
      "",
      "bot.on('message', async (msg) => {",
      "  const response = await bot.process(msg)",
      "  await WhatsAppAPI.send(msg.from, response)",
      "})",
    ],
    'Dashboard de Relatórios Automáticos': [
      "const reportGenerator = async () => {",
      "  const data = await Promise.all([",
      "    fetchFromN8N(),",
      "    fetchFromAPIs(),",
      "    fetchFromSheets()",
      "  ])",
      "",
      "  const insights = await analyzeWithAI(data)",
      "  return generateReport(insights)",
      "}",
      "",
      "// Auto-run every hour",
      "setInterval(reportGenerator, 3600000)",
    ],
    'Integração Multi-Plataforma': [
      "const workflow = new MultiPlatformFlow()",
      "",
      "workflow",
      "  .from('instagram')",
      "  .transform(content => formatContent(content))",
      "  .to('whatsapp')",
      "  .to('crm')",
      "  .to('sheets')",
      "",
      "workflow.on('complete', () => {",
      "  console.log('Content synced across platforms')",
      "})",
    ],
  }

  return codeSnippets[project.title] || [
    "const project = {",
    "  automation: true,",
    "  scalable: true,",
    "  custom: true",
    "}",
  ]
}

export default function Projects() {
  const { t } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [commandInput, setCommandInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => {
          if (prev === null) return 0
          if (prev >= projects.length - 1) return prev
          return prev + 1
        })
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => {
          if (prev === null || prev <= 0) return null
          return prev - 1
        })
      } else if (e.key === 'Enter' && selectedIndex !== null) {
        // Projeto já está "aberto" visualmente
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  // Auto-focus no input quando a seção está visível
  useEffect(() => {
    if (terminalRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && inputRef.current) {
            inputRef.current.focus()
          }
        },
        { threshold: 0.3 }
      )
      observer.observe(terminalRef.current)
      return () => observer.disconnect()
    }
  }, [])

  const handleCommand = (command: string) => {
    if (command.trim() === '') return

    setCommandHistory((prev) => [...prev, command])
    setIsTyping(true)

    // Simula processamento
    setTimeout(() => {
      const projectMatch = projects.findIndex((p) =>
        p.title.toLowerCase().includes(command.toLowerCase())
      )

      if (projectMatch !== -1) {
        setSelectedIndex(projectMatch)
      } else if (command === 'ls projects' || command === 'ls') {
        // Mostra lista de projetos
      } else if (command === 'clear') {
        setSelectedIndex(null)
        setCommandHistory([])
      }

      setIsTyping(false)
      setCommandInput('')
    }, 500)
  }

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (commandInput.trim()) {
      handleCommand(commandInput)
    }
  }

  const projectCommands = projects.map((p) => {
    const slug = p.title.toLowerCase().replace(/\s+/g, '-')
    return `cd ${slug}`
  })

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-8 lg:px-16 py-20 bg-[#000000] relative overflow-hidden"
      ref={terminalRef}
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Título Principal */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-function text-center mb-12 leading-tight"
        >
{t('projects.title')}
        </motion.h2>

        {/* Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="terminal-container"
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="dot dot-close"></div>
              <div className="dot dot-minimize"></div>
              <div className="dot dot-expand"></div>
            </div>
            <span className="terminal-title">rochalabs@projects:~/portfolio</span>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body">
            {/* Scan Lines Effect */}
            <div className="scan-lines"></div>

            {/* Comandos Disponíveis */}
            <div className="projects-list">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[#888888] font-mono text-xs mb-4"
              >
                {'//'} Available commands:
              </motion.p>
              {projectCommands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onClick={() => setSelectedIndex(index)}
                  className={`project-command cursor-interactive ${selectedIndex === index ? 'active' : ''}`}
                >
                  <span className="command-arrow">{'>>'}</span>
                  <span>{cmd}</span>
                </motion.div>
              ))}
            </div>

            {/* Prompt Interativo */}
            <form onSubmit={handleCommandSubmit} className="command-prompt">
              <span className="prompt-user">rochalabs@projects</span>
              <span className="prompt-symbol">$</span>
              <input
                ref={inputRef}
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                className="command-input"
                placeholder="Type a command..."
                autoComplete="off"
              />
              <span className="cursor-blink">|</span>
            </form>

            {/* Histórico de Comandos */}
            <AnimatePresence>
              {commandHistory.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="command-history-item"
                >
                  <span className="prompt-user">rochalabs@projects</span>
                  <span className="prompt-symbol">$</span>
                  <span className="text-[#FFFFFF] font-mono text-xs ml-2">{cmd}</span>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Preview Split-Screen */}
            <AnimatePresence mode="wait">
              {selectedIndex !== null && (
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="project-preview"
                >
                  {/* Coluna Esquerda - Código */}
                  <div className="code-preview">
                    <div className="code-preview-header">
                      <span className="code-file-name font-mono text-xs text-[#888888]">
                        {projects[selectedIndex].title.toLowerCase().replace(/\s+/g, '-')}.ts
                      </span>
                    </div>
                    <div className="code-content-wrapper">
                      {generateCodePreview(projects[selectedIndex]).map((line, index) => (
                        <div key={index} className="code-line">
                          <span className="line-number">{index + 1}</span>
                          <span
                            className={`code-content ${
                              line.includes('import') || line.includes('const') || line.includes('async')
                                ? 'code-keyword'
                                : line.includes('//')
                                ? 'code-comment'
                                : line.includes('"') || line.includes("'")
                                ? 'code-string'
                                : ''
                            }`}
                          >
                            {line || ' '}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Coluna Direita - Demo */}
                  <div className="demo-preview">
                    <div className="demo-preview-header">
                      <span className="font-mono text-xs text-[#888888]">Live Preview</span>
                    </div>
                    <div className="demo-placeholder">
                      <div className="demo-content">
                        <h3 className="font-mono text-sm text-[#FFFFFF] mb-2">
                          {projects[selectedIndex].title}
                        </h3>
                        <p className="font-mono text-xs text-[#888888] mb-4">
                          {projects[selectedIndex].description}
                        </p>
                        <div className="demo-tech">
                          {projects[selectedIndex].tech.map((tech, idx) => (
                            <span key={idx} className="tech-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Métricas Interativas */}
                    {projects[selectedIndex].metrics && (
                      <div className="metrics-bar">
                        <div className="metric-item">
                          <div className="metric-value">{projects[selectedIndex].metrics?.before}</div>
                          <div className="metric-label">Antes</div>
                        </div>
                        <div className="metric-item">
                          <div className="metric-value">{projects[selectedIndex].metrics?.after}</div>
                          <div className="metric-label">Depois</div>
                        </div>
                        <div className="metric-item highlight">
                          <div className="metric-value">{projects[selectedIndex].metrics?.result}</div>
                          <div className="metric-label">Resultado</div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Instruções */}
            {selectedIndex === null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="terminal-help"
              >
                <p className="font-mono text-xs text-[#888888]">
                  {'//'} Use arrow keys ↑↓ to navigate or type: <span className="text-[#00FEFC]">cd [project-name]</span>
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

    </motion.section>
  )
}