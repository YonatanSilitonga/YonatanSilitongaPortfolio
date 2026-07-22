'use client'

import { useEffect, useRef } from 'react'

export function CursorTrail() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    let rafId: number
    let visible = false

    const handleMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX
      posRef.current.y = e.clientY
      if (!visible) {
        visible = true
        el.style.opacity = '1'
      }
    }

    const handleLeave = () => {
      visible = false
      el.style.opacity = '0'
    }

    const animate = () => {
      if (visible) {
        el.style.transform =
          `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`
      }
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="hidden lg:block fixed pointer-events-none z-50 opacity-0 transition-opacity duration-150 will-change-transform"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <div className="w-4 h-4 bg-primary border-2 border-border animate-trail-follow" />
    </div>
  )
}
