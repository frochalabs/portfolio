'use client'

import { useEffect } from 'react'

export default function CursorManager() {
  useEffect(() => {
    // Detectar se é dispositivo touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    
    // Detectar se tem hover (desktop)
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    
    // Aplicar classe cursor-none apenas em dispositivos não-touch com hover
    if (!isTouchDevice && hasHover) {
      document.body.classList.add('cursor-none')
    } else {
      document.body.classList.remove('cursor-none')
    }
    
    // Listener para mudanças de media query (caso o dispositivo mude)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (!isTouchDevice && e.matches) {
        document.body.classList.add('cursor-none')
      } else {
        document.body.classList.remove('cursor-none')
      }
    }
    
    mediaQuery.addEventListener('change', handleMediaChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  return null
}

