"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Main cursor spring (fast & tight)
  const mainConfig = { damping: 20, stiffness: 300 };
  const mainX = useSpring(mouseX, mainConfig);
  const mainY = useSpring(mouseY, mainConfig);

  // Trailing aura spring (slow & floaty)
  const auraConfig = { damping: 30, stiffness: 80 };
  const auraX = useSpring(mouseX, auraConfig);
  const auraY = useSpring(mouseY, auraConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if hovering over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest('button') || 
        target.closest('a') || 
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [mouseX, mouseY, isVisible]);

  if (typeof window === "undefined") return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      
      {/* 1. THE TRAILING AURA (The "Floating Ghost") */}
      <motion.div
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 2.5 : 1,
        }}
        className="absolute w-12 h-12 bg-blue-500/10 rounded-full blur-xl transition-transform duration-300"
      />

      {/* 2. THE OUTER RING (Reactive) */}
      <motion.div
        style={{
          x: mainX,
          y: mainY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 1.5 : 1,
        }}
        className="absolute w-8 h-8 border border-blue-500/30 rounded-full transition-transform duration-150"
      >
        <div className={`absolute inset-0 rounded-full border border-blue-400/20 ${isHovered ? 'animate-ping' : ''}`} />
      </motion.div>

      {/* 3. THE CORE POINT */}
      <motion.div
        style={{
          x: mainX,
          y: mainY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        className="absolute flex items-center justify-center"
      >
        {/* Core Dot */}
        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isHovered ? 'bg-indigo-400 scale-[0.5]' : 'bg-blue-400'}`} />
        
        {/* Center Glow Flare */}
        <div className="absolute w-4 h-4 bg-blue-500/40 rounded-full blur-[4px]" />
      </motion.div>

      {/* 4. CROSSHAIR LINES (Optional - adds "Engineer" vibe) */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ x: mainX, y: mainY, translateX: "-50%", translateY: "-50%" }}
          className="absolute"
        >
            <div className="w-[40px] h-[1px] bg-blue-500/20 absolute -left-[20px]" />
            <div className="h-[40px] w-[1px] bg-blue-500/20 absolute -top-[20px]" />
        </motion.div>
      )}
    </div>
  );
}