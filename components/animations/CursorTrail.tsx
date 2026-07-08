'use client'

import { useState, useEffect } from 'react'

export function CursorTrail() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="hidden lg:block fixed w-4 h-4 bg-primary border-2 border-border pointer-events-none z-50 animate-trail-follow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}
