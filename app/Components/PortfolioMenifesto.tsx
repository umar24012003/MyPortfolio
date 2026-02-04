"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Shield, Zap, Code2 } from "lucide-react";

const Manifesto = () => {
  return (
    <section className="relative py-24 bg-[#020617] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rotate-12 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group p-1 md:p-1.5 rounded-[3rem] bg-gradient-to-b from-blue-400/20 to-transparent border border-blue-500/10 backdrop-blur-3xl"
        >
          <div className="bg-[#020617]/80 rounded-[2.8rem] p-8 md:p-20 text-center relative overflow-hidden">
            
            <motion.div 
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-10 bg-blue-500/10 border border-blue-400/30 rounded-2xl flex items-center justify-center text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <Code2 size={32} />
            </motion.div>

            <h2 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-8 italic">
              "ANYONE CAN WRITE <span className="text-blue-500">CODE</span>. <br />
              I ARCHITECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500">CERTAINTY</span>."
            </h2>

            <p className="text-blue-100/40 font-mono text-xs md:text-sm uppercase tracking-[0.5em] mb-12">
              Logic is the law. Performance is the standard.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-blue-500/10 pt-12">
              <div className="flex flex-col items-center gap-3">
                <Shield className="text-blue-400" size={24} />
                <span className="text-white font-bold text-sm tracking-widest uppercase">Ironclad</span>
                <p className="text-blue-100/40 text-[10px]">Security-first systems.</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Zap className="text-blue-400" size={24} />
                <span className="text-white font-bold text-sm tracking-widest uppercase">Velocity</span>
                <p className="text-blue-100/40 text-[10px]">Latency-free delivery.</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Quote className="text-blue-400" size={24} />
                <span className="text-white font-bold text-sm tracking-widest uppercase">Scalable</span>
                <p className="text-blue-100/40 text-[10px]">Ready for tomorrow.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;