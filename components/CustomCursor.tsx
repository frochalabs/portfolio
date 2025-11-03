'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Spring rápido para o cursor principal (imediato)
  const cursorXSpring = useSpring(cursorX, { damping: 30, stiffness: 300 })
  const cursorYSpring = useSpring(cursorY, { damping: 30, stiffness: 300 })
  
  // Spring lento para o seguidor (lag) - segue o cursor principal
  const followerXSpring = useSpring(cursorX, { damping: 20, stiffness: 100 })
  const followerYSpring = useSpring(cursorY, { damping: 20, stiffness: 100 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Função para adicionar listeners dinamicamente
    const setupInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-interactive')
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', handleMouseEnter)
          el.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    const cleanup = setupInteractiveElements()

    // Re-setup quando o DOM muda
    const observer = new MutationObserver(() => {
      cleanup()
      setupInteractiveElements()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      cleanup()
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Cursor principal (ponto) - Ciano Elétrico */}
      {!isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 bg-[#00FEFC] rounded-full pointer-events-none z-[9999]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
            boxShadow: '0 0 10px rgba(0, 254, 252, 0.5)',
          }}
        />
      )}
      
      {/* Cursor seguidor (círculo maior com lag) - Branco com outline Ciano */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] ${
          isHovering 
            ? 'w-12 h-12 border-2 border-[#FFFFFF] bg-transparent' 
            : 'w-8 h-8 border border-[#FFFFFF]'
        }`}
        style={{
          x: followerXSpring,
          y: followerYSpring,
          opacity: isHovering ? 1 : 0.5,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: !isHovering ? '0 0 15px rgba(0, 254, 252, 0.3), inset 0 0 15px rgba(0, 254, 252, 0.1)' : 'none',
        }}
      />
    </>
  )
}
