"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "Gujrat Fans",
    tech: ["Next.js","Tailwind Css"],
    description: "Official brand website for Gujrat Fans, designed to display fan models, specifications, and company information. Optimized for speed and mobile devices.",
    // FIXED: Added https:// and removed the *
    link: "https://gf-att.vercel.app", 
    github: "https://github.com/umar24012003/GujratFans",
    color: "#3b82f6"
  },
  {
    id: "02",
    title: "Finance Management System",
    tech: ["Next.Js", "Tailwind Css", "Material Ui"],
    description: "A modern finance dashboard for tracking expenses, budgets, and financial reports in real time. Features interactive charts.",
    link: "#", // Keep as # if not deployed
    github: "https://github.com/umar24012003/finance-management",
    color: "#60a5fa"
  },
  {
    id: "03",
    title: "B2C",
    tech: ["React", "Express", "Node.js", "MongoDb", "TypeScript"],
    description: "A scalable B2C platform enabling product browsing, secure purchases, and user account management.",
    link: "https://b2cinc.com/",
    github: "#", // Added missing github property to prevent errors
    color: "#2563eb"
  },
  {
    id: "04",
    title: "Trading Landing Page",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    description: "A responsive single-page trading interface for monitoring markets and viewing live price updates with real-time data.",
    link: "https://trading-app-4xjl.vercel.app/",
    github: "#", // Added missing github property
    color: "#1d4ed8"
  }
];

export default function RecentProjects() {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section 
      ref={targetRef} 
      className={`relative ${isMobile ? 'h-auto py-20' : 'h-[300vh]'} bg-[#020617]`}
    >
      <div className={`${isMobile ? 'relative' : 'sticky top-0 h-screen'} flex items-center overflow-hidden`}>
        
        <div className="absolute top-10 left-4 md:left-10 pointer-events-none">
           <h2 className="text-white/[0.02] text-[25vw] lg:text-[20vw] font-black uppercase leading-none">
            WORK
          </h2>
        </div>

        <motion.div 
          style={{ x: isMobile ? 0 : x }} 
          className={`flex ${isMobile ? 'flex-col gap-8 px-6' : 'flex-row gap-12 px-20'} w-full transition-all`}
        >
          <div className={`flex-shrink-0 ${isMobile ? 'w-full mb-10' : 'w-[400px]'} flex flex-col justify-center`}>
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-blue-600" />
              <span className="text-blue-500 font-mono tracking-widest text-xs md:text-sm uppercase">Selected Works</span>
            </div>
            <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-8">
              Crafting <span className="text-blue-600">Digital</span> Experiences
            </h3>
          </div>

          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={isMobile ? {} : { y: -20 }}
              className={`flex-shrink-0 ${isMobile ? 'w-full h-auto' : 'w-[450px] h-[550px]'} bg-slate-900/40 border border-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-between group hover:border-blue-500/50 transition-colors duration-500 relative overflow-hidden backdrop-blur-xl`}
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700" />

              <div>
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <span className="text-4xl md:text-6xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors duration-500 font-mono">
                    {project.id}
                  </span>
                  <div className="flex gap-2 md:gap-3 relative z-50"> {/* Added z-50 to ensure links are clickable */}
                    {/* FIXED: Added target="_blank" and rel="noopener noreferrer" */}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 md:p-3 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 md:p-3 bg-blue-600 rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h4>
                
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 md:px-3 py-1 bg-slate-950 border border-slate-800 text-blue-400 text-[10px] md:text-xs font-mono rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 md:pt-8 border-t border-slate-800 flex justify-between items-center group-hover:border-blue-500/30">
                <div className="flex items-center gap-2 text-slate-500 text-[10px] md:text-xs uppercase font-bold tracking-widest">
                  <Layers size={14} />
                  <span>Architecture Verified</span>
                </div>
                <ArrowUpRight className="text-slate-700 group-hover:text-blue-500 transition-all" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}