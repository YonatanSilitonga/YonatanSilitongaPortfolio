'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Backend Developer',
  'Full Stack Developer',
  'Penggemar Ilmu Data',
  'Machine Learning Engineer',
]

export function RoleSwitcher() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inline-block min-h-[2.5rem]">
      <motion.div
        key={currentRole}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-primary"
      >
        {roles[currentRole]}
      </motion.div>
    </div>
  )
}
