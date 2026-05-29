import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Trophy, Award, Star, BookOpen, Code, Database } from 'lucide-react';

const certifications = [
  {
    title: "Generative AI Workshop",
    issuer: "IIT Delhi",
    icon: <Star className="text-[var(--bg-primary)]" size={32} />,
    date: "July 2025",
    detail: "Hands-on implementation of LLMs, prompt engineering, and generative models.",
    isPremium: true
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    icon: <Database className="text-[var(--accent-1)]" size={32} />,
    date: "Sept 2025",
    detail: "Methodologies and essential tools for comprehensive data analysis.",
    isPremium: false
  },
  {
    title: "JavaScript Bootcamp",
    issuer: "LetsUpgrade",
    icon: <Code className="text-[var(--accent-1)]" size={32} />,
    date: "Sept 2025",
    detail: "Intensive training on modern JavaScript fundamentals and advanced concepts.",
    isPremium: false
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "Simplilearn",
    icon: <BookOpen className="text-[var(--accent-1)]" size={32} />,
    date: "Sept 2025",
    detail: "Core concepts of data processing, visualization, and strategic analytics.",
    isPremium: false
  },
  {
    title: "Microsoft Learn Student Ambassador",
    issuer: "Microsoft",
    icon: <Star className="text-[var(--accent-1)]" size={32} />,
    date: "March 2026",
    detail: "Part of a global network of student ambassadors building tech communities.",
    isPremium: true
  },
  {
    title: "1st Prize",
    issuer: "TRAE Re{Vibe} Hackathon",
    icon: <Trophy className="text-[var(--accent-1)]" size={32} />,
    date: "May 2026",
    detail: "Secured 1st place in the national hackathon.",
    isPremium: false
  }
];

export default function Achievements() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FF8C00']
    });
  };

  return (
    <section id="achievements" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-primary)] text-[var(--text-main)] overflow-hidden transition-colors duration-400">
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="mb-16">
          <span className="text-[var(--accent-1)] font-mono text-[13px] tracking-widest">// 06. achievements</span>
          <h2 className="text-4xl md:text-[48px] font-bold tracking-tighter mt-2 font-[family-name:--font-display]">Certifications & Achievements</h2>
        </div>

        {/* FEATURED ACHIEVEMENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          onMouseEnter={triggerConfetti}
          className="relative w-full rounded-3xl overflow-hidden mb-24 group cursor-pointer"
        >
          {/* Cyan/Blue Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 via-[#0a66c2]/10 to-transparent z-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 border-2 border-[#00d4ff]/40 rounded-3xl z-0 group-hover:border-[#00d4ff] group-hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-500" />

          <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-16 gap-8 backdrop-blur-sm">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0a66c2] flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(0,212,255,0.5)] group-hover:scale-110 transition-transform duration-500">
              <Trophy size={64} className="text-[var(--bg-primary)]" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] font-mono text-sm border border-[#00d4ff]/30 mb-4 tracking-widest uppercase">
                Featured Achievement
              </span>
              <h3 className="text-4xl md:text-5xl font-[family-name:--font-display] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] to-[#0a66c2]">
                1st Prize — Jammu Innovathon 1.0<br />National Hackathon Winner
              </h3>
              <p className="text-xl md:text-2xl font-[family-name:--font-sans] text-[var(--text-main)] opacity-90">
                University of Jammu
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`h-64 group cursor-pointer relative ${cert.isPremium ? 'lg:col-span-2' : ''}`}
              style={{ perspective: '1000px' }}
            >
              <div
                className="w-full h-full transition-transform duration-700 relative group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side */}
                <div
                  className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-[var(--card-bg)] backdrop-blur-md border transition-colors [backface-visibility:hidden] ${cert.isPremium
                      ? "border-[#FFD700]/50 shadow-[0_0_20px_rgba(255,215,0,0.2)] bg-gradient-to-br from-[#FFD700]/10 to-transparent"
                      : "border-[var(--card-border)] hover:border-[var(--accent-1)]"
                    }`}
                >
                  <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${cert.isPremium ? "bg-gradient-to-br from-[#FFD700] to-[#FFA500] shadow-[0_0_15px_rgba(255,215,0,0.5)]" : "bg-[var(--bg-primary)] border border-[var(--accent-1)]"
                    }`}>
                    {cert.icon}
                  </div>
                  <h4 className="text-2xl font-bold font-[family-name:--font-display] text-center mb-2">{cert.issuer}</h4>
                  <p className="text-[var(--text-muted)] text-center font-mono text-sm">{cert.title}</p>

                  {cert.isPremium && (
                    <div className="absolute top-4 right-4 bg-[#FFD700] text-[var(--bg-primary)] px-3 py-1 rounded-full text-xs font-bold font-mono tracking-widest flex items-center gap-1 shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                      <Star size={12} /> PREMIUM
                    </div>
                  )}
                </div>

                {/* Back Side */}
                <div
                  className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-[var(--bg-secondary)] border transition-colors [backface-visibility:hidden] [transform:rotateY(180deg)] ${cert.isPremium
                      ? "border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                      : "border-[var(--accent-1)] shadow-[0_0_20px_rgba(var(--accent-1),0.2)]"
                    }`}
                >
                  <Award size={48} className={`mb-4 ${cert.isPremium ? "text-[#FFD700]" : "text-[var(--accent-1)]"}`} />
                  <span className={`px-4 py-1 rounded-full font-mono text-sm mb-4 ${cert.isPremium ? "bg-[#FFD700]/20 text-[#FFD700]" : "bg-[var(--accent-1)]/20 text-[var(--accent-1)]"
                    }`}>{cert.date}</span>
                  <p className="text-center font-[family-name:--font-sans] leading-relaxed opacity-90">
                    {cert.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
