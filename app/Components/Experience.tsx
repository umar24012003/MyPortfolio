"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Sparkles, Zap } from "lucide-react";


const data = [
  {
    role: "Full Stack Developer Internship",
    company: "Techoo Software House",
    time: "2024 - 2024", 
    desc: "Developed immersive UI systems with complex animations, focusing on performance optimization and responsive design systems.",
    skills: ["React"],
  },
  {
    role: "MERN Stack Developer",
    company: "AbccdMedia",
    time: "2025 - 2026",
    desc: "Engineered scalable full-stack systems, interactive dashboards, and high-performance API architectures using modern tech stacks.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion", "Next.js"],
  },
  {
    role: "Full Stack Developer",
    company: "Techoo Software House",
    time: "2025 - Present",
    desc: "Maintained legacy PHP systems while migrating core services to modern Node/Express environments for better concurrency.",
    skills: ["Mern", "Three.js", "Stripe", "Tailwind Css"],
  },
];


function Particles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function Card({ item, index }: any) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
      className={`relative w-full md:w-1/2 ${
        isLeft ? "md:pr-16 md:ml-0 md:mr-auto" : "md:pl-16 md:mr-0 md:ml-auto"
      }`}
    >
      <motion.div
        animate={{ 
          boxShadow: ["0 0 10px #3b82f6", "0 0 25px #3b82f6", "0 0 10px #3b82f6"] 
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="hidden md:block absolute top-10 w-4 h-4 rounded-full bg-blue-500 z-20 left-1/2 -translate-x-1/2 border-4 border-slate-950"
      />

      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="relative backdrop-blur-3xl bg-slate-900/40 border border-blue-500/20 rounded-[2rem] p-8 shadow-2xl hover:border-blue-500/50 transition-all duration-500 group overflow-hidden"
      >
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all" />

        <div className="flex justify-between items-start gap-4 mb-4">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.role}</h3>
                <p className="text-blue-500 font-mono text-sm font-semibold">{item.company}</p>
            </div>
            <span className="whitespace-nowrap shrink-0 text-[10px] font-bold py-1 px-3 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                {item.time}
            </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {item.desc}
        </p>

        <div className="flex gap-2 flex-wrap">
          {item.skills.map((s: string) => (
            <span
              key={s}
              className="px-3 py-1 text-[10px] font-bold rounded-lg border border-slate-800 bg-slate-950 text-slate-300 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}


export default function Experience() {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.1),transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <h2 className="text-white/[0.02] text-[18vw] font-black uppercase leading-none">
          History
        </h2>
      </div>

      <Particles />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
           <h2 className="text-blue-500 font-mono text-sm font-black tracking-[0.5em] uppercase mb-2">
            Timeline
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.3em] mb-4 uppercase">
            <Zap size={14} className="fill-blue-400" /> Professional
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
            MY <span className="text-blue-600">EXPERIENCE</span>
          </h2>
        </motion.div>

        <div className="hidden md:block absolute left-1/2 top-[350px] bottom-0 w-[1px] bg-gradient-to-b from-blue-500 via-blue-900/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

        <div className="flex flex-col gap-20 relative">
          {data.map((item, i) => (
            <Card key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}