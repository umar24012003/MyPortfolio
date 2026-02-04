"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  User,
  Activity,
  Cpu,
  Layers,
  Database,
  Zap,
  Terminal,
  MousePointer2,
  Fingerprint,
  Radio,
  Globe,
  Plus
} from "lucide-react";

const AboutMe = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]" />
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(100px)',
            maskImage: 'linear-gradient(to bottom, transparent, black)'
          }}
        />
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-400/10 blur-[150px] rounded-full" 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl space-y-4">
        
        <div className="flex justify-between items-center border-b border-blue-500/20 pb-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-500/10 border border-blue-400/30 rounded-lg">
              <Fingerprint className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-blue-400/60 uppercase tracking-tighter">Identity Verified</p>
              <p className="text-xs font-bold tracking-widest text-white">UMAR_NADEEM.CORE</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-mono text-blue-300/50 uppercase">
            <div className="flex items-center gap-2"><Globe size={14} className="text-blue-400"/> Node: Global</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          <motion.div 
            style={{ y: y1 }}
            className="lg:col-span-7 group relative p-10 rounded-[2.5rem] bg-blue-950/20 border border-blue-400/20 backdrop-blur-3xl overflow-hidden"
          >
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full border border-blue-400/30 bg-blue-900/30 text-[10px] font-mono text-blue-300 mb-6 uppercase">Architect // Deploy_Active</span>
              <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[0.9]">
                CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-white">DIGITAL</span><br/>IRONCLAD APPS.
              </h2>
              <p className="text-blue-100/60 text-lg md:text-xl max-w-xl leading-relaxed">
                Full-stack engineer specialized in high-velocity MERN systems. I turn 
                <span className="text-white italic font-serif"> concept-grade ideas </span> into 
                <span className="text-blue-400 font-mono font-bold uppercase tracking-tight"> enterprise-level </span> realities.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {/* GPA Card */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="p-8 rounded-[2rem] bg-blue-600 border border-blue-400 flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="relative z-10">
                <p className="text-blue-100 font-mono text-xs uppercase tracking-[0.2em] mb-2">Academic Index</p>
                <h3 className="text-6xl font-black text-white italic">3.65</h3>
                <p className="text-blue-100/80 text-sm font-medium">Cumulative GPA Stability</p>
              </div>
              <Activity className="absolute right-[-20px] bottom-[-20px] opacity-10 text-white group-hover:rotate-12 transition-transform duration-500" size={200} />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
               <div className="relative p-6 rounded-[2rem] bg-blue-400/5 border border-blue-400/20 backdrop-blur-md overflow-hidden group">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Live Uptime</p>
                    <div className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
                  </div>
                  <p className="text-4xl font-black text-white">99.9<span className="text-blue-500 text-xl">%</span></p>
                  
                  {/* Heartbeat Visualization Animationss */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end opacity-30 px-2 gap-[2px]">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [10, 40, 10, 20, 10] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                        className="w-full bg-blue-400 rounded-t-sm"
                      />
                    ))}
                  </div>
               </div>

               <div className="relative p-6 rounded-[2rem] bg-blue-400/5 border border-blue-400/20 backdrop-blur-md overflow-hidden flex flex-col justify-center items-center group">
                  <div className="absolute top-4 left-4">
                    <p className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Shipments</p>
                  </div>
                  
                  {/* Orbit Spinner Animation */}
                  <div className="relative h-16 w-16 mb-2 mt-4">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-blue-400/30 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Plus size={20} className="text-blue-400 group-hover:scale-125 transition-transform" />
                    </div>
                  </div>
                  
                  <p className="text-4xl font-black text-white">17<span className="text-blue-500 text-xl">+</span></p>
                  <p className="text-[9px] font-mono text-blue-300/40 uppercase">Verified Projects</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Frontend", tech: "React / Next.js", icon: <Layers size={20}/> },
              { label: "Backend", tech: "Node / Express", icon: <Cpu size={20}/> },
              { label: "Storage", tech: "Mongo / SQL", icon: <Database size={20}/> },
            ].map((box, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, borderColor: "rgba(96, 165, 250, 0.4)" }}
                className="p-8 rounded-[2rem] bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 flex items-center justify-between group"
              >
                <div>
                  <div className="text-blue-400 mb-2">{box.icon}</div>
                  <p className="text-xs font-mono text-blue-400/60 uppercase tracking-widest">{box.label}</p>
                  <p className="text-lg font-bold text-white tracking-tight">{box.tech}</p>
                </div>
                <div className="h-10 w-10 rounded-full border border-blue-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <MousePointer2 size={16} className="text-blue-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="lg:col-span-12 relative rounded-[2rem] bg-[#010409] border border-blue-500/10 overflow-hidden">
            <div className="flex items-center px-6 py-4 bg-blue-950/40 border-b border-blue-500/10 justify-between">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-900 border border-blue-400/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-blue-900 border border-blue-400/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400/40" />
              </div>
              <div className="text-[10px] font-mono text-blue-400/50 uppercase tracking-widest">Architect_Logic.sys</div>
              <Terminal size={14} className="text-blue-800" />
            </div>
            <div className="p-8 font-mono text-sm md:text-base leading-relaxed">
               <p className="flex gap-4"><span className="text-blue-900 italic">01</span><span><span className="text-blue-400">class</span> <span className="text-white">Professional</span> <span className="text-blue-200">{'{'}</span></span></p>
               <p className="flex gap-4"><span className="text-blue-900 italic">02</span><span className="pl-6 text-blue-100/40 italic">{"// Specialist in high-performance architecture"}</span></p>
               <p className="flex gap-4"><span className="text-blue-900 italic">03</span><span className="pl-6">status = <span className="text-blue-400">"STABLE"</span>;</span></p>
               <p className="flex gap-4"><span className="text-blue-900 italic">04</span><span className="pl-6">location = <span className="text-blue-400">"GLOBAL"</span>;</span></p>
               <p className="flex gap-4"><span className="text-blue-900 italic">05</span><span><span className="text-blue-200">{'}'}</span></span></p>
               <div className="mt-6 flex items-center gap-2 text-blue-400 text-xs animate-pulse font-bold tracking-widest uppercase">
                  <span>{">"} System initialized.</span>
               </div>
            </div>
          </motion.div>

        </div>

        <div className="relative pt-20 flex flex-col items-center">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-blue-950 font-black uppercase tracking-[0.4em] text-xs rounded-full relative z-10 transition-shadow overflow-hidden group"
          >
            <span className="relative z-10">Initialize Port</span>
            <div className="absolute inset-0 bg-blue-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </motion.button>
          <div className="mt-8 flex gap-4">
             <div className="w-1 h-1 rounded-full bg-blue-400 animate-ping" />
             <div className="w-1 h-1 rounded-full bg-blue-400/50" />
             <div className="w-1 h-1 rounded-full bg-blue-400/20" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;