"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Activity,
  Cpu,
  Code,
  Layers,
  Database,
  Zap,
  Box,
  Binary,
  Workflow
} from "lucide-react";

const AboutMe = () => {
  return (
    <section className="relative min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
      
      {/* --- HYPER-ATMOSPHERE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600 rounded-full blur-[100px] md:blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            y: [0, -50, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] right-[5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-indigo-600 rounded-full blur-[100px] md:blur-[150px]" 
        />
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* --- HEADER --- */}
      <div className="relative z-10 mb-10 md:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-4 md:mb-6">
            <Binary size={12} className="text-blue-400 animate-pulse" />
            <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-blue-400 uppercase">Protocol: Architect</span>
          </div>
        </motion.div>
        
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none mb-4">
          UMAR <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">NADEEM</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-slate-500 font-mono text-xs md:text-sm">
          <span className="flex items-center gap-1"><Workflow size={14}/> Full-Stack</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />
          <span className="flex items-center gap-1"><Box size={14}/> MERN Specialist</span>
        </div>
      </div>

      {/* --- THE BENTO INTERFACE --- */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 relative z-10">
        
        {/* CARD 1: BIO */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-12 lg:col-span-7 relative group border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 bg-slate-900/40 backdrop-blur-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-blue-400 text-[9px] md:text-[10px] font-black tracking-[0.2em] mb-6 md:mb-8">
              <User size={16} /> 01 // IDENTITY_CORE
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white leading-tight">
              Transforming <span className="italic font-serif">complexity</span> into <br className="hidden md:block" />
              <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-4 md:underline-offset-8">seamless performance.</span>
            </h3>
            <p className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-xl">
              I specialize in engineering high-traffic digital ecosystems. From <span className="text-white font-medium">robust API architectures</span> to <span className="text-white font-medium">dynamic user interfaces</span>, I build products that don't just work—they scale.
            </p>
          </div>
        </motion.div>

        {/* CARD 2: REAL-TIME METRICS */}
        <motion.div 
          className="md:col-span-12 lg:col-span-5 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 bg-gradient-to-b from-blue-600/10 to-transparent backdrop-blur-xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 text-blue-400 text-[9px] md:text-[10px] font-black tracking-[0.2em] mb-6 md:mb-0">
            <Activity size={16} /> 02 // PERFORMANCE_STATS
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8 my-6">
            <div className="space-y-1">
              <span className="text-4xl md:text-5xl font-black text-white">3.65</span>
              <p className="text-[8px] md:text-[10px] text-blue-500 font-bold uppercase tracking-widest">GPA Intensity</p>
            </div>
            <div className="space-y-1 text-right">
              <span className="text-4xl md:text-5xl font-black text-white">12+</span>
              <p className="text-[8px] md:text-[10px] text-blue-500 font-bold uppercase tracking-widest">Deploy_Cycles</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-[9px] md:text-[10px] font-mono text-slate-500 uppercase">
              <span>Efficiency</span>
              <span>98%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "98%" }}
                transition={{ duration: 1.5 }}
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-400"
              />
            </div>
          </div>
        </motion.div>

        {/* CARD 3: TERMINAL */}
        <motion.div 
          className="md:col-span-5 lg:col-span-4 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 bg-black/60 backdrop-blur-3xl font-mono text-[10px] md:text-[11px] relative overflow-hidden group min-h-[180px]"
        >
          <div className="flex items-center justify-between mb-6">
             <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
             </div>
             <span className="text-slate-600 text-[8px]">bash — 80x24</span>
          </div>
          <div className="space-y-2 text-slate-400">
            <p className="text-blue-500 italic"># Latest Deployment</p>
            <p className="flex justify-between"><span>{"->"} env.prod</span> <span className="text-green-400">[READY]</span></p>
            <p className="flex justify-between"><span>{"->"} cluster.opt()</span> <span className="text-green-400">[DONE]</span></p>
            <p className="animate-pulse text-blue-500 mt-4">_ system_stable_active</p>
          </div>
        </motion.div>

        {/* CARD 4: CAPABILITIES CIRCUIT */}
        <motion.div 
          className="md:col-span-7 lg:col-span-8 border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 bg-slate-900/20 backdrop-blur-md relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-blue-500 text-[9px] md:text-[10px] font-black tracking-[0.2em] mb-8 md:mb-10">
            <Cpu size={16} /> 03 // TECH_CIRCUITRY
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: <Code />, title: "Frontend", list: "React, Next.js, Three.js", color: "from-blue-500/20" },
              { icon: <Layers />, title: "Logic", list: "Node.js, Express", color: "from-indigo-500/20" },
              { icon: <Database />, title: "Storage", list: "MongoDB, SQL, Redis", color: "from-cyan-500/20" },
            ].map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`p-5 md:p-6 rounded-2xl bg-gradient-to-br ${skill.color} to-transparent border border-white/5 hover:border-blue-500/30 transition-all`}
              >
                <div className="p-2 md:p-3 bg-slate-950 rounded-xl w-fit mb-4 text-blue-400 border border-white/5">
                  {/* FIXED: Added specific type to allow 'size' prop */}
                  {React.cloneElement(skill.icon as React.ReactElement<{ size?: number }>, { size: 18 })}
                </div>
                <h5 className="font-bold text-white text-sm md:text-base mb-1">{skill.title}</h5>
                <p className="text-[9px] md:text-[10px] text-slate-500 font-mono">{skill.list}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* --- FLOATING CTA --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16 flex flex-col items-center gap-4 w-full"
      >
        <div className="h-12 w-px bg-gradient-to-b from-blue-500 to-transparent" />
        <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-blue-600 text-white font-black text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 group">
          Init Contact <Zap size={16} className="fill-current group-hover:animate-bounce" />
        </button>
      </motion.div>

    </section>
  );
};

export default AboutMe;