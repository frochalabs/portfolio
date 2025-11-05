'use client'

import { motion, useMotionValue } from 'framer-motion'
import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface PhysicsObject {
  id: number
  type: 'circle' | 'square' | 'triangle' | 'hexagon' | 'tech'
  size: string
  x: number // em porcentagem
  y: number // em porcentagem
  vx: number // velocidade x
  vy: number // velocidade y
  mass: number
  rotation: number
  angularVelocity: number
  width: number
  height: number
  phrase: string
  tech?: string
  icon?: string
  isDragging?: boolean
}

export default function InteractiveLab() {
  return (
    <motion.section
      id="lab"
      className="bg-[#000000] py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <PhysicsSandbox />
      </div>
    </motion.section>
  )
}

// Componente: Sandbox Físico
const PhysicsSandbox = () => {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const objectRefs = useRef<Record<number, HTMLDivElement | null>>({})
  const animationFrameRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  
  const phrases = [
    'Automação inteligente',
    'Integração de sistemas',
    'Processos escaláveis',
    'Eficiência em tempo real',
    'IA generativa',
    'Fluxos automatizados',
  ]

  // Parâmetros físicos
  const gravity = 0 // Desabilitado por padrão (mantém visual atual)
  const friction = 0.98 // Atrito (0.98 = pouco atrito)
  const elasticity = 0.7 // Elasticidade das colisões (0.7 = semi-elástico)

  // Estado inicial dos objetos com física
  const [objects, setObjects] = useState<PhysicsObject[]>([
    { 
      id: 1, 
      type: 'circle',
      size: 'w-32 h-32 md:w-36 md:h-36',
      x: 15,
      y: 15,
      vx: 0,
      vy: 0,
      mass: 3,
      rotation: 0,
      angularVelocity: 0,
      phrase: phrases[0],
      width: 128,
      height: 128,
      isDragging: false
    },
    { 
      id: 2, 
      type: 'square',
      size: 'w-28 h-28 md:w-32 md:h-32',
      x: 55,
      y: 20,
      vx: 0,
      vy: 0,
      mass: 2.5,
      rotation: 0,
      angularVelocity: 0,
      phrase: phrases[1],
      width: 112,
      height: 112,
      isDragging: false
    },
    { 
      id: 3, 
      type: 'triangle',
      size: 'w-36 h-36 md:w-40 md:h-40',
      x: 35,
      y: 45,
      vx: 0,
      vy: 0,
      mass: 2,
      rotation: 0,
      angularVelocity: 0,
      phrase: phrases[2],
      width: 144,
      height: 144,
      isDragging: false
    },
    { 
      id: 4, 
      type: 'hexagon',
      size: 'w-24 h-24 md:w-28 md:h-28',
      x: 70,
      y: 55,
      vx: 0,
      vy: 0,
      mass: 1.5,
      rotation: 0,
      angularVelocity: 0,
      phrase: phrases[3],
      width: 96,
      height: 96,
      isDragging: false
    },
    { 
      id: 5, 
      type: 'tech',
      tech: 'N8N',
      icon: '/n8n.svg',
      size: 'w-20 h-20 md:w-24 md:h-24',
      x: 25,
      y: 65,
      vx: 0,
      vy: 0,
      mass: 1,
      rotation: 0,
      angularVelocity: 0,
      phrase: phrases[4],
      width: 80,
      height: 80,
      isDragging: false
    },
    { 
      id: 6, 
      type: 'tech',
      tech: 'Python',
      icon: '/python.svg',
      size: 'w-20 h-20 md:w-24 md:h-24',
      x: 75,
      y: 25,
      vx: 0,
      vy: 0,
      mass: 1,
      rotation: 0,
      angularVelocity: 0,
      phrase: phrases[5],
      width: 80,
      height: 80,
      isDragging: false
    },
    { 
      id: 7, 
      type: 'tech',
      tech: 'TypeScript',
      icon: '/tsnode.svg',
      size: 'w-20 h-20 md:w-24 md:h-24',
      x: 10,
      y: 50,
      vx: 0,
      vy: 0,
      mass: 1,
      rotation: 0,
      angularVelocity: 0,
      phrase: 'Interfaces modernas',
      width: 80,
      height: 80,
      isDragging: false
    },
    { 
      id: 8, 
      type: 'tech',
      tech: 'Node',
      icon: '/nodedotjs.svg',
      size: 'w-20 h-20 md:w-24 md:h-24',
      x: 85,
      y: 70,
      vx: 0,
      vy: 0,
      mass: 1,
      rotation: 0,
      angularVelocity: 0,
      phrase: 'Backend robusto',
      width: 80,
      height: 80,
      isDragging: false
    },
    { 
      id: 9, 
      type: 'tech',
      tech: 'Docker',
      icon: '/docker.svg',
      size: 'w-20 h-20 md:w-24 md:h-24',
      x: 45,
      y: 75,
      vx: 0,
      vy: 0,
      mass: 1,
      rotation: 0,
      angularVelocity: 0,
      phrase: 'Containerização',
      width: 80,
      height: 80,
      isDragging: false
    },
  ])

  // Converter porcentagem para pixels
  const percentToPixels = useCallback((percent: number, dimension: 'width' | 'height'): number => {
    if (!constraintsRef.current) return 0
    const containerRect = constraintsRef.current.getBoundingClientRect()
    return (percent / 100) * (dimension === 'width' ? containerRect.width : containerRect.height)
  }, [])

  // Converter pixels para porcentagem
  const pixelsToPercent = useCallback((pixels: number, dimension: 'width' | 'height'): number => {
    if (!constraintsRef.current) return 0
    const containerRect = constraintsRef.current.getBoundingClientRect()
    return (pixels / (dimension === 'width' ? containerRect.width : containerRect.height)) * 100
  }, [])

  // Detectar colisão entre dois objetos (usando centro e raio aproximado)
  const checkCollision = useCallback((obj1: PhysicsObject, obj2: PhysicsObject): boolean => {
    if (!constraintsRef.current) return false
    
    const containerRect = constraintsRef.current.getBoundingClientRect()
    
    // Converter posições para pixels
    const x1 = percentToPixels(obj1.x, 'width') + obj1.width / 2
    const y1 = percentToPixels(obj1.y, 'height') + obj1.height / 2
    const x2 = percentToPixels(obj2.x, 'width') + obj2.width / 2
    const y2 = percentToPixels(obj2.y, 'height') + obj2.height / 2
    
    // Distância entre centros
    const dx = x2 - x1
    const dy = y2 - y1
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    // Raio aproximado (metade da diagonal)
    const radius1 = Math.sqrt(obj1.width * obj1.width + obj1.height * obj1.height) / 2
    const radius2 = Math.sqrt(obj2.width * obj2.width + obj2.height * obj2.height) / 2
    
    return distance < (radius1 + radius2) * 0.9
  }, [percentToPixels])

  // Resolver colisão com física realista (momentum conservation)
  const resolveCollision = useCallback((obj1: PhysicsObject, obj2: PhysicsObject): { vx1: number; vy1: number; vx2: number; vy2: number; rot1: number; rot2: number } => {
    if (!constraintsRef.current) return { vx1: 0, vy1: 0, vx2: 0, vy2: 0, rot1: 0, rot2: 0 }
    
    const containerRect = constraintsRef.current.getBoundingClientRect()
    
    // Posições em pixels
    const x1 = percentToPixels(obj1.x, 'width') + obj1.width / 2
    const y1 = percentToPixels(obj1.y, 'height') + obj1.height / 2
    const x2 = percentToPixels(obj2.x, 'width') + obj2.width / 2
    const y2 = percentToPixels(obj2.y, 'height') + obj2.height / 2
    
    // Vetor de colisão (normalizado)
    const dx = x2 - x1
    const dy = y2 - y1
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance === 0) return { vx1: 0, vy1: 0, vx2: 0, vy2: 0, rot1: 0, rot2: 0 }
    
    const nx = dx / distance
    const ny = dy / distance
    
    // Velocidade relativa
    const dvx = obj2.vx - obj1.vx
    const dvy = obj2.vy - obj1.vy
    
    // Velocidade ao longo do vetor normal
    const velocityAlongNormal = dvx * nx + dvy * ny
    
    // Não resolver se os objetos estão se afastando
    if (velocityAlongNormal > 0) return { vx1: obj1.vx, vy1: obj1.vy, vx2: obj2.vx, vy2: obj2.vy, rot1: 0, rot2: 0 }
    
    // Coeficiente de restituição (elasticidade)
    const e = elasticity
    
    // Impulso escalar (conservação de momentum)
    const j = -(1 + e) * velocityAlongNormal
    const jFinal = j / (obj1.mass + obj2.mass)
    
    // Aplicar impulso (transferência de momentum)
    const newVx1 = obj1.vx - (jFinal * obj2.mass * nx)
    const newVy1 = obj1.vy - (jFinal * obj2.mass * ny)
    const newVx2 = obj2.vx + (jFinal * obj1.mass * nx)
    const newVy2 = obj2.vy + (jFinal * obj1.mass * ny)
    
    // Calcular rotação baseada na colisão (velocidade angular)
    const rot1 = (obj1.vy * nx - obj1.vx * ny) * 0.15
    const rot2 = (obj2.vy * nx - obj2.vx * ny) * 0.15
    
    return { vx1: newVx1, vy1: newVy1, vx2: newVx2, vy2: newVy2, rot1, rot2 }
  }, [elasticity, percentToPixels])

  // Loop de física principal
  const updatePhysics = useCallback((deltaTime: number) => {
    if (!constraintsRef.current) return
    
    const containerRect = constraintsRef.current.getBoundingClientRect()
    const containerWidth = containerRect.width
    const containerHeight = containerRect.height
    
    setObjects(prev => {
      const updated = prev.map(obj => {
        // Ignorar física se estiver sendo arrastado
        if (obj.isDragging) return obj
        
        // Aplicar atrito
        let newVx = obj.vx * friction
        let newVy = obj.vy * friction
        
        // Aplicar gravidade (se habilitada)
        if (gravity > 0) {
          newVy += gravity
        }
        
        // Calcular nova posição em pixels
        const currentXPx = percentToPixels(obj.x, 'width')
        const currentYPx = percentToPixels(obj.y, 'height')
        
        let newXPx = currentXPx + newVx * (deltaTime * 0.01)
        let newYPx = currentYPx + newVy * (deltaTime * 0.01)
        
        // Atualizar rotação baseada na velocidade angular
        let newRotation = obj.rotation + obj.angularVelocity * (deltaTime * 0.01)
        let newAngularVelocity = obj.angularVelocity * 0.95 // Atrito angular
        
        // Verificar colisões com as bordas
        if (newXPx < 0) {
          newXPx = 0
          newVx = -newVx * elasticity
          newAngularVelocity += Math.abs(newVy) * 0.1
        } else if (newXPx > containerWidth - obj.width) {
          newXPx = containerWidth - obj.width
          newVx = -newVx * elasticity
          newAngularVelocity += Math.abs(newVy) * 0.1
        }
        
        if (newYPx < 0) {
          newYPx = 0
          newVy = -newVy * elasticity
          newAngularVelocity += Math.abs(newVx) * 0.1
        } else if (newYPx > containerHeight - obj.height) {
          newYPx = containerHeight - obj.height
          newVy = -newVy * elasticity
          newAngularVelocity += Math.abs(newVx) * 0.1
        }
        
        // Converter de volta para porcentagem
        const newX = pixelsToPercent(newXPx, 'width')
        const newY = pixelsToPercent(newYPx, 'height')
        
        return {
          ...obj,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
          rotation: newRotation,
          angularVelocity: newAngularVelocity
        }
      })
      
      // Detectar e resolver colisões entre objetos
      for (let i = 0; i < updated.length; i++) {
        for (let j = i + 1; j < updated.length; j++) {
          const obj1 = updated[i]
          const obj2 = updated[j]
          
          // Ignorar se algum estiver sendo arrastado
          if (obj1.isDragging || obj2.isDragging) continue
          
          if (checkCollision(obj1, obj2)) {
            const result = resolveCollision(obj1, obj2)
            
            // Aplicar novas velocidades
            updated[i].vx = result.vx1
            updated[i].vy = result.vy1
            updated[i].angularVelocity += result.rot1
            
            updated[j].vx = result.vx2
            updated[j].vy = result.vy2
            updated[j].angularVelocity += result.rot2
            
            // Correção de sobreposição (empurrão)
            const containerRect = constraintsRef.current?.getBoundingClientRect()
            if (containerRect) {
              const x1 = percentToPixels(obj1.x, 'width') + obj1.width / 2
              const y1 = percentToPixels(obj1.y, 'height') + obj1.height / 2
              const x2 = percentToPixels(obj2.x, 'width') + obj2.width / 2
              const y2 = percentToPixels(obj2.y, 'height') + obj2.height / 2
              
              const dx = x2 - x1
              const dy = y2 - y1
              const distance = Math.sqrt(dx * dx + dy * dy)
              
              const radius1 = Math.sqrt(obj1.width * obj1.width + obj1.height * obj1.height) / 2
              const radius2 = Math.sqrt(obj2.width * obj2.width + obj2.height * obj2.height) / 2
              const overlap = (radius1 + radius2) - distance
              
              if (overlap > 0 && distance > 0) {
                const nx = dx / distance
                const ny = dy / distance
                const percent = 0.8
                const correction = overlap * percent / (obj1.mass + obj2.mass)
                
                const correctionX1 = pixelsToPercent(-correction * obj2.mass * nx, 'width')
                const correctionY1 = pixelsToPercent(-correction * obj2.mass * ny, 'height')
                const correctionX2 = pixelsToPercent(correction * obj1.mass * nx, 'width')
                const correctionY2 = pixelsToPercent(correction * obj1.mass * ny, 'height')
                
                updated[i].x += correctionX1
                updated[i].y += correctionY1
                updated[j].x += correctionX2
                updated[j].y += correctionY2
              }
            }
          }
        }
      }
      
      return updated
    })
  }, [friction, gravity, elasticity, checkCollision, resolveCollision, percentToPixels, pixelsToPercent])

  // Loop de animação com requestAnimationFrame
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current) {
        const deltaTime = time - lastTimeRef.current
        updatePhysics(deltaTime)
      }
      lastTimeRef.current = time
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    animationFrameRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [updatePhysics])

  return (
    <div 
      ref={constraintsRef} 
      className="relative w-full h-[250px] md:h-[300px] bg-[#000000] border border-[#888888] overflow-hidden"
    >
      {/* Frases flutuantes no fundo */}
      {phrases.map((phrase, index) => (
        <motion.div
          key={`phrase-${index}`}
          className="absolute text-[#888888] text-[10px] md:text-xs font-mono opacity-20"
          style={{
            left: `${10 + (index % 3) * 30}%`,
            top: `${15 + Math.floor(index / 3) * 35}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            delay: index * 1.2,
          }}
        >
          {phrase}
        </motion.div>
      ))}

      {objects.map((obj) => (
        <PhysicsObjectComponent
          key={obj.id}
          obj={obj}
          constraintsRef={constraintsRef}
          objectRefs={objectRefs}
          setObjects={setObjects}
        />
      ))}
    </div>
  )
}

// Componente separado para cada objeto físico (permite uso de hooks)
function PhysicsObjectComponent({
  obj,
  constraintsRef,
  objectRefs,
  setObjects,
}: {
  obj: PhysicsObject
  constraintsRef: React.RefObject<HTMLDivElement>
  objectRefs: React.MutableRefObject<Record<number, HTMLDivElement | null>>
  setObjects: React.Dispatch<React.SetStateAction<PhysicsObject[]>>
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const dragStartPos = useRef<{ x: number; y: number } | null>(null)
  
  return (
    <motion.div
      ref={(el) => {
        objectRefs.current[obj.id] = el
      }}
      className={`absolute ${obj.size} cursor-grab active:cursor-grabbing`}
      style={{
        left: `${obj.x}%`,
        top: `${obj.y}%`,
        x,
        y,
        rotate: obj.rotation,
      }}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0}
      dragMomentum={false}
      onDragStart={() => {
        // Marcar como sendo arrastado e salvar posição inicial
        setObjects(prev => prev.map(o => 
          o.id === obj.id 
            ? { ...o, isDragging: true, vx: 0, vy: 0, angularVelocity: 0 }
            : o
        ))
        
        if (constraintsRef.current && objectRefs.current[obj.id]) {
          const containerRect = constraintsRef.current.getBoundingClientRect()
          const element = objectRefs.current[obj.id]
          if (element) {
            const elementRect = element.getBoundingClientRect()
            dragStartPos.current = {
              x: (elementRect.left - containerRect.left) / containerRect.width * 100,
              y: (elementRect.top - containerRect.top) / containerRect.height * 100
            }
          }
        }
      }}
      onDrag={(event, info) => {
        // Atualizar posição durante o drag
        if (constraintsRef.current) {
          const containerRect = constraintsRef.current.getBoundingClientRect()
          const newX = ((info.point.x - containerRect.left) / containerRect.width) * 100
          const newY = ((info.point.y - containerRect.top) / containerRect.height) * 100
          
          setObjects(prev => prev.map(o => 
            o.id === obj.id ? { ...o, x: newX, y: newY } : o
          ))
        }
      }}
      onDragEnd={(event, info) => {
        // Aplicar velocidade baseada no gesto de drag
        // Escalar velocidade para valores físicos apropriados
        const velocityX = info.velocity.x * 0.015
        const velocityY = info.velocity.y * 0.015
        
        // Calcular velocidade angular baseada na velocidade linear
        const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY)
        const angularVelocity = speed * 0.08
        
        setObjects(prev => prev.map(o => 
          o.id === obj.id 
            ? { 
                ...o, 
                vx: velocityX,
                vy: velocityY,
                isDragging: false,
                angularVelocity: angularVelocity
              }
            : o
        ))
        
        x.set(0)
        y.set(0)
      }}
      whileHover={{ 
        scale: 1.1,
        borderColor: '#00FEFC',
      }}
      whileTap={{ scale: 0.95 }}
    >
      {obj.type === 'circle' && (
        <div className="w-full h-full border border-[#888888] rounded-full bg-[#111111] flex flex-col items-center justify-center p-2 group">
          <div className="w-2 h-2 bg-[#00FEFC] rounded-full mb-1" />
          <span className="text-[6px] md:text-[7px] text-[#888888] font-mono text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {obj.phrase}
          </span>
        </div>
      )}
      {obj.type === 'square' && (
        <div className="w-full h-full border border-[#888888] bg-[#111111] flex flex-col items-center justify-center p-2 group">
          <div className="w-3 h-3 border border-[#00FEFC] mb-1" />
          <span className="text-[6px] md:text-[7px] text-[#888888] font-mono text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {obj.phrase}
          </span>
        </div>
      )}
      {obj.type === 'triangle' && (
        <div className="w-full h-full relative group">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <polygon
              points="50,10 90,85 10,85"
              fill="#111111"
              stroke="#888888"
              strokeWidth="1"
            />
            <circle cx="50" cy="55" r="2" fill="#00FEFC" />
          </svg>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[6px] md:text-[7px] text-[#888888] font-mono text-center whitespace-nowrap">
              {obj.phrase}
            </span>
          </div>
        </div>
      )}
      {obj.type === 'hexagon' && (
        <div className="w-full h-full relative group">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="#111111"
              stroke="#888888"
              strokeWidth="1"
            />
            <circle cx="50" cy="50" r="2" fill="#00FEFC" />
          </svg>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-[6px] md:text-[7px] text-[#888888] font-mono text-center whitespace-nowrap">
              {obj.phrase}
            </span>
          </div>
        </div>
      )}
      {obj.type === 'tech' && (
        <div className="w-full h-full border border-[#888888] bg-[#111111] flex flex-col items-center justify-center p-2 group relative">
          <div className="relative w-10 h-10 md:w-12 md:h-12 mb-1">
            <Image
              src={obj.icon!}
              alt={obj.tech!}
              fill
              className="object-contain transition-all duration-300"
              style={{
                filter: 'brightness(0) saturate(100%) invert(100%)',
              }}
            />
          </div>
          <span className="text-[6px] md:text-[7px] text-[#888888] font-mono text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {obj.phrase}
          </span>
          <div className="absolute inset-0 border border-[#00FEFC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-[#00FEFC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
    </motion.div>
  )
}

