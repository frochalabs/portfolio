'use client'

import { useEffect } from 'react'

export default function PageInit() {
  useEffect(() => {
    // Força o scroll para o topo imediatamente
    if (typeof window !== 'undefined') {
      // Reseta o scroll várias vezes para garantir
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      // Aguarda o próximo frame e reseta novamente
      requestAnimationFrame(() => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      })
      
      // Reseta após um pequeno delay também
      setTimeout(() => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, 0)
    }
  }, [])

  return null
}

