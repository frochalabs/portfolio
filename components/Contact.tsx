'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-8 lg:px-16 py-20 bg-[#000000] relative overflow-hidden contact-section"
    >
      <div className="max-w-2xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-6 text-[#FFFFFF] leading-tight"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          Sua vez de responder.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-[#888888] mb-12 text-xs font-mono uppercase tracking-wider"
        >
          Vamos iniciar uma conversa sobre automação?
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00FEFC] flex items-center justify-center"
            >
              <span className="text-[#000000] text-2xl font-bold">✓</span>
            </motion.div>
            <h3 className="text-xl font-semibold mb-4 text-[#FFFFFF] status-message status-success">
              Mensagem enviada!
            </h3>
            <p className="text-sm text-[#888888] font-mono">
              Recebi sua mensagem. Vou analisar seu cenário e entrar em contato em breve.
            </p>
          </motion.div>
        ) : (
          <>
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative"
              >
                <label htmlFor="name" className="block mb-2 text-[#888888] text-xs font-mono uppercase tracking-wider">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="cursor-interactive w-full px-4 py-3 bg-[#000000] border border-[#888888] rounded-lg focus:outline-none focus:border-[#00FEFC] text-[#FFFFFF] text-sm font-mono transition-all code-hover"
                  style={{
                    boxShadow: formData.name ? '0 0 0 2px rgba(0, 254, 252, 0.1)' : 'none',
                  }}
                  placeholder="Seu nome completo"
                />
                {formData.name && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-4 top-[42px] text-[#00FEFC] text-xs"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <label htmlFor="email" className="block mb-2 text-[#888888] text-xs font-mono uppercase tracking-wider">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`cursor-interactive w-full px-4 py-3 bg-[#000000] border rounded-lg focus:outline-none text-[#FFFFFF] text-sm font-mono transition-all code-hover ${
                    formData.email && isValidEmail(formData.email)
                      ? 'border-[#00FEFC] focus:border-[#00FEFC]'
                      : formData.email
                      ? 'border-[#FF4444] focus:border-[#FF4444]'
                      : 'border-[#888888] focus:border-[#00FEFC]'
                  }`}
                  style={{
                    boxShadow: formData.email && isValidEmail(formData.email) ? '0 0 0 2px rgba(0, 254, 252, 0.1)' : 'none',
                  }}
                  placeholder="seu@email.com"
                />
                {formData.email && isValidEmail(formData.email) && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute right-4 top-[42px] text-[#00FEFC] text-xs"
                  >
                    ✓
                  </motion.span>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative"
              >
                <label htmlFor="message" className="block mb-2 text-[#888888] text-xs font-mono uppercase tracking-wider">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="cursor-interactive w-full px-4 py-3 bg-[#000000] border border-[#888888] rounded-lg focus:outline-none focus:border-[#00FEFC] text-[#FFFFFF] text-sm font-mono resize-none transition-all code-hover"
                  style={{
                    boxShadow: formData.message ? '0 0 0 2px rgba(0, 254, 252, 0.1)' : 'none',
                  }}
                  placeholder="Meu maior gargalo hoje é..."
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-interactive w-full py-4 bg-[#000000] border border-[#888888] text-[#FFFFFF] font-mono font-semibold rounded-lg transition-all text-sm hover:border-[#00FEFC] code-hover"
              >
                Enviar E-mail
              </motion.button>
            </motion.form>
          </>
        )}
      </div>

    </motion.section>
  )
}
