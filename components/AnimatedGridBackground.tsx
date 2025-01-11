'use client'

import React, { useEffect, useRef } from 'react'

export const AnimatedGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const drawGrid = (offset: number) => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.01)'
      ctx.lineWidth = 1

      const cellSize = 50
      const rows = Math.ceil(canvas.height / cellSize) + 1
      const cols = Math.ceil(canvas.width / cellSize) + 1

      // Draw vertical lines
      for (let i = 0; i < cols; i++) {
        ctx.beginPath()
        ctx.moveTo(i * cellSize, 0)
        ctx.lineTo(i * cellSize, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines with offset
      for (let i = 0; i < rows; i++) {
        ctx.beginPath()
        ctx.moveTo(0, i * cellSize + offset)
        ctx.lineTo(canvas.width, i * cellSize + offset)
        ctx.stroke()
      }
    }

    let offset = 0
    const animate = () => {
      offset = (offset + 1) % 50
      drawGrid(offset)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

