"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MapPin, Phone, ExternalLink, GraduationCap, Briefcase, Code2, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-blue-500/20 rounded-[2rem] shadow-2xl p-6 md:p-10 scrollbar-hide"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <header className="mb-8 border-b border-white/5 pb-8 text-center md:text-left">
              <h2 className="text-4xl font-black text-white mb-2 tracking-tighter uppercase">Umar Nadeem</h2> [cite: 1]
              <p className="text-blue-500 font-mono text-sm font-bold uppercase tracking-widest mb-4">
                Full-Stack Web Developer | MERN Stack Specialist [cite: 2, 4]
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400 text-xs font-medium">
                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-blue-500"/> Gujrat, Pakistan [cite: 2]</span>
                <span className="flex items-center gap-1.5"><Phone size={14} className="text-blue-500"/> (+92) 314 7865460 [cite: 2]</span>
                <span className="flex items-center gap-1.5"><Mail size={14} className="text-blue-500"/> umarnadeem24@icloud.com [cite: 2]</span>
              </div>
            </header>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-8">
              <div>
  <h3 className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4">
    <Code2 size={14} className="text-blue-500"/> Technical Arsenal
  </h3>
  <div className="flex flex-wrap gap-2">
    {["Next.js", "React", "Node.js", "MongoDB", "Tailwind", "REST APIs", "MERN Stack"].map(skill => (
      <span key={skill} className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold">
        {skill}
      </span>
    ))}
  </div>
</div>

                <div>
                  <h3 className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <GraduationCap size={14} className="text-blue-500"/> Education
                  </h3>
                  <p className="text-white text-xs font-bold uppercase text-wrap leading-tight">Bachelor of Science: Computer Science</p> [cite: 21]
                  <p className="text-slate-500 text-[10px] font-mono mt-1 uppercase">ARID AGRICULTURE UNIVERSITY</p> [cite: 21]
                  <p className="text-blue-500/60 text-[9px] font-bold mt-1">2022 - ONGOING</p> [cite: 20]
                </div>
              </div>

              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <Briefcase size={14} className="text-blue-500"/> Practical Experience
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="relative pl-4 border-l-2 border-blue-600/20 group">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
                      <p className="text-blue-500 font-mono text-[10px] font-black uppercase mb-1">03/2025 - Freelance</p> [cite: 7, 8]
                      <h4 className="text-white font-bold text-sm">Gujrat Fans (Deployed)</h4> [cite: 9]
                      <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                        Built a single-page e-commerce platform using Next.js to showcase products and organizational info, deployed on Vercel[cite: 9, 10].
                      </p>
                    </div>

                    <div className="relative pl-4 border-l-2 border-blue-600/20 group">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
                      <p className="text-blue-500 font-mono text-[10px] font-black uppercase mb-1">01/2025 - Freelance</p> [cite: 11, 12]
                      <h4 className="text-white font-bold text-sm">Expense Tracker & Budget Management</h4> [cite: 13]
                      <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                        Developed a dynamic SPA with React, Next.js, and MongoDB for secure financial data management[cite: 13, 14].
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <button 
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 text-white text-xs font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Download PDF Version <Download size={14}/>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}