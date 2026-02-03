"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- UNIQUE ELASTIC LIQUID SCROLL ANIMATION ---
  const liquidScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const target = document.querySelector(href);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    // Custom Elastic Easing (The "Unique" feel)
    const easeOutElastic = (t: number, b: number, c: number, d: number) => {
      let s = 1.70158; let p = 0; let a = c;
      if (t === 0) return b; if ((t /= d) === 1) return b + c; if (!p) p = d * 0.3;
      if (a < Math.abs(c)) { a = c; s = p / 4; }
      else s = p / (2 * Math.PI) * Math.asin(c / a);
      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeOutElastic(timeElapsed, startPosition, distance, 1200);
      window.scrollTo(0, run);
      if (timeElapsed < 1200) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    liquidScroll(e, "#home");
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  const phoneNumber = "+923147865460";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen ? "py-3 bg-[#020617]/95 backdrop-blur-xl border-b border-blue-500/10" : "py-5 bg-transparent"
      }`}
    >
      <motion.div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 origin-left z-50" style={{ scaleX }} />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <a href="#home" onClick={scrollToTop} className="flex items-center gap-3 group cursor-pointer relative z-[110]">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000" />
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 border border-blue-500/50 text-blue-500 font-black text-sm transition-transform group-hover:scale-105">
              UN
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xs sm:text-sm font-black tracking-tighter uppercase leading-none">Umar</span>
            <span className="text-[8px] sm:text-[10px] text-blue-500 font-mono font-bold tracking-widest uppercase">Developer</span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-900/50 border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => liquidScroll(e, link.href)} // Applied animation
              className="px-5 py-2 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-400 hover:bg-blue-500/5 rounded-full transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4 relative z-[110]">
          <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-4">
            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-[10px] font-bold uppercase tracking-widest"
            >
              <Phone size={14} />
              Let's Talk
            </a>
            <a href="http://linkedin.com/in/umar-nadeem-118181398" target="_blank" className="text-slate-400 hover:text-blue-500 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/umar_n24?igsh=cWdicHV6ZmUxeDNi&utm_source=qr" target="_blank" className="text-slate-400 hover:text-pink-500 transition-colors">
              <Instagram size={18} />
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-blue-500/20 text-white shadow-lg active:scale-95 transition-transform"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="fixed inset-0 z-[100] h-screen w-full bg-[#020617] p-8 md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => liquidScroll(e, link.href)} // Applied animation
                  className="text-2xl font-black uppercase tracking-tighter text-white hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="h-px w-full bg-white/5 my-4" />

              <motion.a 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                href={`tel:${phoneNumber}`} 
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
              >
                <Phone size={18} />
                Call Me Now
              </motion.a>

              <div className="flex gap-6 mt-6">
                <a href="http://linkedin.com/in/umar-nadeem-118181398" target="_blank" className="p-3 rounded-full bg-slate-900 border border-white/5 text-blue-500">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/umar_n24?igsh=cWdicHV6ZmUxeDNi&utm_source=qr" target="_blank" className="p-3 rounded-full bg-slate-900 border border-white/5 text-pink-500">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;