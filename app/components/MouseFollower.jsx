"use client"

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MouseFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // configuration for smoother movement
  const springConfig = { damping: 25, stiffness: 700 }
  const XSpring = useSpring(mouseX, springConfig)
  const YSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
        mouseX.set(e.clientX - 16)
        mouseY.set(e.clientY - 16)
    }

    window.addEventListener("mousemove", moveCursor);

    return () => {
        window.removeEventListener("mousemove", moveCursor);
    }


  }, [mouseX, mouseY])

  return (
    <motion.div
    className="pointer-events-non fixed left-0 top-0 z--50 h-8 w-8 rounded-full border border-primary bg-primary/20 backdrop-blur-sm"
    style = {{
        translateX: XSpring,
        translateY: YSpring,
    }} 
    />
  )

}