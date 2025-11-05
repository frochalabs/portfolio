'use client'

import { useEffect, useRef } from 'react'

export default function PageInit() {
  const hasLogged = useRef(false)

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

      // Mensagem divertida no console 🎉 (executa apenas uma vez)
      if (!hasLogged.current) {
        hasLogged.current = true
        
        setTimeout(() => {


          console.log(
            `%c🔍 Scanning for automation talent...`,
            `color: #888888; font-family: monospace; font-size: 12px;`
          )

          setTimeout(() => {
            console.log(
              `%c✅ FOUND: Rocha Labs Developer`,
              `color: #00FF00; font-weight: bold; font-family: monospace; font-size: 12px;`
            )
            console.log(
              `%c📍 Location: Ready to automate your business`,
              `color: #00FEFC; font-family: monospace; font-size: 11px;`
            )
            console.log(
              `%c⚡ Status: Bots loaded | AI ready | N8N connected`,
              `color: #888888; font-family: monospace; font-size: 11px;`
            )
            
            setTimeout(() => {
              console.log(
                `%c💡 Tip: Want to automate something? Check the contact form!`,
                `color: #00FEFC; font-style: italic; font-family: monospace; font-size: 11px;`
              )
            }, 500)
          }, 800)
        }, 500)
      }
    }
  }, [])

  return null
}
