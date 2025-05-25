"use client"

import { useEffect, useRef } from "react"

export default function CursorTracker() {
  const rafRef = useRef<number>()
  const currentX = useRef(0)
  const currentY = useRef(0)
  const targetX = useRef(0)
  const targetY = useRef(0)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      targetX.current = e.clientX
      targetY.current = e.clientY
    }

    const animate = () => {
      // Interpolation pour un mouvement plus fluide
      currentX.current += (targetX.current - currentX.current) * 0.3
      currentY.current += (targetY.current - currentY.current) * 0.3

      document.documentElement.style.setProperty("--mouse-x", `${currentX.current}px`)
      document.documentElement.style.setProperty("--mouse-y", `${currentY.current}px`)

      rafRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener("mousemove", updateCursor)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return null
}
