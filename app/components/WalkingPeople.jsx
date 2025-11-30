"use client"

import { useEffect, useRef } from "react"

const IMG_SRC = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
const ROWS = 7
const COLS = 15

class Peep {
  constructor({ stage, img, rect }) {
    this.img = img
    this.stage = stage
    this.setRect(rect)
    this.x = 0
    this.y = 0
    this.anchorY = 0
    this.scaleX = 1
    // Randomize walk signature
    this.walkOffset = Math.random() * 10
    this.bobSpeed = 0.1 + Math.random() * 0.1
    this.reset()
  }

  setRect(rect) {
    this.rect = rect
    this.width = rect[2]
    this.height = rect[3]
    // Select ONE random person from the grid to be this Peep
    // We pick this once and never change it
    this.spriteCol = Math.floor(Math.random() * COLS)
    this.spriteRow = Math.floor(Math.random() * ROWS)
  }

  reset() {
    this.direction = Math.random() > 0.5 ? 1 : -1
    
    // Bottom 30% of screen is the "sidewalk"
    const trackHeight = this.stage.height * 0.3
    this.y = (this.stage.height - this.height) - (Math.random() * trackHeight)
    
    // Scale based on depth (closer = bigger)
    const scaleMin = 0.6
    const scaleMax = 1.0
    const percentY = (this.y - (this.stage.height - this.height - trackHeight)) / trackHeight
    const clampedPercent = Math.max(0, Math.min(1, percentY))
    this.scale = scaleMin + (clampedPercent * (scaleMax - scaleMin))

    this.anchorY = this.y + (this.height * this.scale)

    // Start off-screen
    const buffer = 100
    this.x = this.direction === 1 ? -this.width - buffer : this.stage.width + buffer
    
    // Slow walking speed
    this.speed = (0.5 + Math.random()) * this.direction
  }

  update() {
    this.x += this.speed
    // Basic wrap logic
    const buffer = 200
    if ((this.direction === 1 && this.x > this.stage.width + buffer) || 
        (this.direction === -1 && this.x < -this.width - buffer)) {
      this.reset()
    }
  }

  draw(ctx, frameCount) {
    ctx.save()
    
    // 1. Calculate "Bobbing" (The fake walk animation)
    // We use frameCount to create a sine wave for the Y position
    const bob = Math.sin((frameCount * this.bobSpeed) + this.walkOffset) * 5 // 5px bounce range
    
    // 2. Position
    ctx.translate(this.x, this.y + bob)
    ctx.scale(this.direction * this.scale, this.scale)
    
    // 3. Flip correction
    if (this.direction === -1) {
        ctx.translate(-this.width, 0)
    }

    // 4. Draw STATIC Sprite (No frame cycling)
    ctx.drawImage(
      this.img,
      this.spriteCol * this.width, // Fixed X based on chosen character
      this.spriteRow * this.height, // Fixed Y based on chosen character
      this.width, 
      this.height, 
      0, 0, 
      this.width, 
      this.height
    )
    
    ctx.restore()
  }
}

export const WalkingPeople = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const img = new Image()
    img.src = IMG_SRC

    let peeps = []
    let animationFrameId
    let frameCount = 0
    let config = { naturalWidth: 0, naturalHeight: 0 }

    const initCrowd = () => {
        const frameW = Math.floor(config.naturalWidth / COLS)
        const frameH = Math.floor(config.naturalHeight / ROWS)
        
        // INCREASED CROWD SIZE: 50 peeps for a busier look
        peeps = Array.from({ length: 50 }).map(() => {
            return new Peep({
                img,
                stage: { width: canvas.width, height: canvas.height },
                rect: [0, 0, frameW, frameH] // Rect is mostly for width/height now
            })
        })
    }

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth
        canvas.height = canvas.parentElement.clientHeight
      } else {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      
      if (peeps.length > 0) {
          peeps.forEach(p => p.stage = { width: canvas.width, height: canvas.height })
      }
    }

    const render = () => {
      frameCount++

      // Dark Mode & Scroll Checks
      if (document.documentElement.classList.contains("dark")) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        animationFrameId = requestAnimationFrame(render)
        return
      }
      if (window.scrollY > window.innerHeight) {
         animationFrameId = requestAnimationFrame(render)
         return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Sort by depth
      peeps.sort((a, b) => a.anchorY - b.anchorY)
      
      peeps.forEach(p => {
        p.update()
        p.draw(ctx, frameCount)
      })

      animationFrameId = requestAnimationFrame(render)
    }

    img.onload = () => {
      config.naturalWidth = img.naturalWidth
      config.naturalHeight = img.naturalHeight
      resize()
      initCrowd()
      render()
    }

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0, 
        mixBlendMode: "multiply", 
        opacity: 0.9,
        display: 'block'
      }}
    />
  )
}