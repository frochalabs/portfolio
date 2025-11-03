'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const codeSnippet = `{
  "nodes": [
    {
      "type": "n8n-nodes-base.whatsApp",
      "typeVersion": 1,
      "position": [840, 300],
      "parameters": {
        "text": "Olá {{ $json.body.name }}, 
vi seu interesse em automação..."
      }
    }
  ]
}`

export default function CodeBlock() {
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return

    setIsTyping(true)
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < codeSnippet.length) {
        setDisplayedCode(codeSnippet.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 30) // Velocidade de digitação

    return () => clearInterval(typingInterval)
  }, [isInView])

  // Função para syntax highlighting mais elaborado
  const highlightCode = (text: string) => {
    const parts: Array<{ text: string; type: string }> = []
    let currentPart = ''
    let inString = false
    let stringStart = -1

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      
      if (char === '"' && (i === 0 || text[i - 1] !== '\\')) {
        if (!inString) {
          if (currentPart) parts.push({ text: currentPart, type: 'normal' })
          currentPart = ''
          inString = true
          stringStart = i
        } else {
          parts.push({ text: currentPart, type: 'string' })
          parts.push({ text: '"', type: 'quote' })
          currentPart = ''
          inString = false
        }
        continue
      }

      if (inString) {
        currentPart += char
        continue
      }

      if (char === '{' || char === '}' || char === '[' || char === ']') {
        if (currentPart) parts.push({ text: currentPart, type: 'normal' })
        parts.push({ text: char, type: 'bracket' })
        currentPart = ''
        continue
      }

      if (char === ':' && currentPart.trim()) {
        parts.push({ text: currentPart.trim(), type: 'key' })
        parts.push({ text: char, type: 'normal' })
        currentPart = ''
        continue
      }

      currentPart += char
    }

    if (currentPart) parts.push({ text: currentPart, type: inString ? 'string' : 'normal' })

    return parts
  }

  const codeParts = highlightCode(displayedCode)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#111111] border border-[#888888] rounded-lg p-6 overflow-hidden relative"
    >
      {/* Cursor piscante fixo */}
      {!isTyping && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute right-6 bottom-6 text-[#00FEFC] font-bold"
          style={{
            textShadow: '0 0 8px rgba(0, 254, 252, 0.6)',
          }}
        >
          |
        </motion.span>
      )}

      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#888888]"></div>
        <div className="w-3 h-3 rounded-full bg-[#888888]"></div>
        <div className="w-3 h-3 rounded-full bg-[#888888]"></div>
        <span className="ml-4 text-xs text-[#888888] font-mono">n8n-workflow.json</span>
      </div>
      <pre className="text-xs font-mono leading-relaxed overflow-x-auto">
        <code>
          {codeParts.map((part, index) => {
            if (part.type === 'bracket') {
              return (
                <span key={index} className="text-[#00FEFC]" style={{ textShadow: '0 0 8px rgba(0, 254, 252, 0.4)' }}>
                  {part.text}
                </span>
              )
            }
            if (part.type === 'key') {
              return (
                <span key={index} className="text-[#00FEFC] font-bold">
                  {part.text}
                </span>
              )
            }
            if (part.type === 'string' || part.type === 'quote') {
              return (
                <span key={index} className="text-[#FFFFFF]">
                  {part.type === 'quote' ? '"' : `"${part.text}"`}
                </span>
              )
            }
            return (
              <span key={index} className="text-[#FFFFFF]">
                {part.text}
              </span>
            )
          })}
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-[#00FEFC] ml-1"
              style={{ boxShadow: '0 0 6px rgba(0, 254, 252, 0.8)' }}
            />
          )}
        </code>
      </pre>
    </motion.div>
  )
}
