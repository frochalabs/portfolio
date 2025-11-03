'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function SocialProof() {
  const { t } = useLanguage()
  
  const testimonials = [
    {
      quoteKey: 'socialproof.testimonial.1',
    },
    {
      quoteKey: 'socialproof.testimonial.2',
    },
  ]

  return (
    <motion.section
      id="social-proof"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="px-4 md:px-8 lg:px-16 py-20 bg-[#000000]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-12 text-[#FFFFFF] leading-tight"
          style={{ fontFamily: '"DM Serif Display", serif' }}
        >
          {t('socialproof.title')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="cursor-interactive border border-[#888888] rounded-lg p-6"
            >
              <p className="text-[#888888] mb-4 text-sm italic font-normal leading-relaxed">&quot;{t(testimonial.quoteKey)}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
