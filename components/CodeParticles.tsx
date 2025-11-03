'use client'

import { useEffect, useRef } from 'react'

const codeCharacters = ["{", "}", "<", ">", ";", "(", ")", "[", "]"]

interface Particle {
  char: string
  x: number
  y: number
  opacity: number
  speed: number
}

export default function CodeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const density = 20

    // Criar partículas
    for (let i = 0; i < density; i++) {
      particles.push({
        char: codeCharacters[Math.floor(Math.random() * codeCharacters.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: Math.random() * 0.1,
        speed: 0.5 + Math.random() * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle) => {
        particle.y += particle.speed
        
        if (particle.y > canvas.height) {
          particle.y = 0
          particle.x = Math.random() * canvas.width
        }

        ctx.fillStyle = `rgba(0, 254, 252, ${particle.opacity})`
        ctx.font = '12px JetBrains Mono'
        ctx.fillText(particle.char, particle.x, particle.y)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.1, zIndex: 0 }}
    />
  )
}

