'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const techStack = [
  {
    name: 'Python',
    iconPath: '/python.svg',
  },
  {
    name: 'Docker',
    iconPath: '/docker.svg',
  },
  {
    name: 'Node.js',
    iconPath: '/nodedotjs.svg',
  },
  {
    name: 'TypeScript',
    iconPath: '/tsnode.svg',
  },
  {
    name: 'n8n',
    iconPath: '/n8n.svg',
  },
]

export default function LogoGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div>
      <p className="text-xs text-[#888888] font-mono mb-8 uppercase tracking-wider">
        {'//'} Stacks que garantem a escalabilidade
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cursor-interactive flex flex-col items-center justify-center p-6 border border-[#888888] rounded-lg transition-all duration-300"
            animate={{
              opacity: hoveredIndex === null 
                ? 0.6 
                : hoveredIndex === index 
                  ? 1 
                  : 0.4,
              scale: hoveredIndex === null 
                ? 1 
                : hoveredIndex === index 
                  ? 1.1 
                  : 0.95,
              filter: hoveredIndex === null 
                ? 'grayscale(1) brightness(0.8)' 
                : hoveredIndex === index 
                  ? 'grayscale(0) brightness(1)' 
                  : 'grayscale(1) brightness(0.6)',
            }}
            style={{
              boxShadow: hoveredIndex === index 
                ? '0 0 15px rgba(0, 254, 252, 0.3)' 
                : 'none',
              borderColor: hoveredIndex === index ? '#00FEFC' : '#888888',
            }}
          >
            <motion.div
              className="relative w-12 h-12"
              style={{
                filter: hoveredIndex === index 
                  ? 'brightness(0) saturate(100%) invert(84%) sepia(99%) saturate(7498%) hue-rotate(141deg) brightness(102%) contrast(101%) drop-shadow(0 0 8px rgba(0, 254, 252, 0.8))'
                  : hoveredIndex === null
                    ? 'brightness(0) saturate(100%) invert(100%)'
                    : 'brightness(0) saturate(100%) invert(100%) opacity(0.6)',
              }}
            >
              <Image
                src={tech.iconPath}
                alt={tech.name}
                fill
                className="object-contain transition-all duration-300"
              />
            </motion.div>
            <motion.span
              className="mt-4 text-xs font-mono"
              animate={{
                color: hoveredIndex === index ? '#00FEFC' : '#888888',
              }}
              transition={{ duration: 0.3 }}
            >
              {tech.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
