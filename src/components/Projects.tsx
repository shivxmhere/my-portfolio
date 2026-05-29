import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "MedLexica",
    description: "Production-grade clinical AI system utilizing semantic vector search, knowledge graphs, and cross-encoder re-ranking in a hybrid RAG pipeline. Powered by a QLoRA fine-tuned Phi-3 model.",
    category: "AI/ML",
    tags: ["Phi-3", "RAG", "FastAPI", "Vector Search"],
    github: "https://github.com/shivxmhere"
  },
  {
    title: "AGORA",
    description: "Production-grade AI Agent Marketplace where developers publish autonomous agents and users discover, deploy, and chain them into complex pipelines. Unified interface for agentic execution.",
    category: "AI/ML",
    tags: ["AI Agents", "Marketplace", "Pipelines"],
    github: "https://github.com/shivxmhere"
  },
  {
    title: "RAGE OS",
    description: "A comprehensive Student OS integrating tools into one ecosystem.",
    category: "Web",
    tags: ["React", "EdTech", "Analytics"],
    github: "https://github.com/shivxmhere"
  },
  {
    title: "Automated Content Gen",
    description: "Automation tools reducing manual effort by 60% for content workflows.",
    category: "Data",
    tags: ["Python", "Automation"],
    github: "https://github.com/shivxmhere"
  }
];

const FilterButton = ({ label, active, onClick }: { key?: React.Key, label: string, active: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${active
      ? "bg-[var(--accent-1)] text-[var(--bg-primary)] shadow-[0_0_15px_var(--accent-1)]"
      : "bg-[var(--card-bg)] text-[var(--text-main)] hover:text-[var(--accent-1)] border border-[var(--card-border)]"
      }`}
  >
    {label}
  </button>
);

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'AI/ML', 'Web', 'Data'];

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-primary)] text-[var(--text-main)] overflow-hidden transition-colors duration-400">
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="mb-12">
          <span className="text-[var(--accent-1)] font-mono text-[13px] tracking-widest">// 04. projects</span>
          <h2 className="text-4xl md:text-[48px] font-bold tracking-tighter mt-2 font-[family-name:--font-display]">Featured Work</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-16">
          {filters.map(f => (
            <FilterButton key={f} label={f} active={filter === f} onClick={() => setFilter(f)} />
          ))}
        </div>

        {/* Featured Project - Krishi-Net */}
        {(filter === 'All' || filter === 'AI/ML') && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-24 relative rounded-2xl overflow-hidden group p-[2px]" /* Container for gradient border */
          >
            {/* Rotating Gradient Background */}
            <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,var(--accent-1)_270deg,var(--accent-2)_360deg)] animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Inner Content */}
            <div className="relative bg-[var(--bg-secondary)] rounded-2xl z-10 flex flex-col lg:flex-row overflow-hidden backdrop-blur-md">
              <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
                <span className="text-[var(--accent-1)] font-mono text-[13px] tracking-widest mb-4">FEATURED PROJECT</span>
                <h3 className="text-[36px] font-bold font-[family-name:--font-display] mb-6 drop-shadow-[0_0_15px_var(--accent-1)]">Krishi-Net</h3>

                <p className="text-[var(--text-muted)] leading-relaxed mb-4 text-[18px] font-[family-name:--font-sans]">
                  "An AI-powered agricultural intelligence platform built to empower farmers with real-time crop disease detection, yield predictions, and market insights using Python, NLP, and Machine Learning."
                </p>

                <p className="text-[var(--accent-2)] italic opacity-90 mb-8 border-l-4 border-[var(--accent-2)] pl-4 py-1">
                  "Built to bridge the AI gap in Indian agriculture"
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {["Python", "NLP", "Machine Learning", "FastAPI"].map(tag => (
                    <span key={tag} className="text-sm font-mono text-[var(--text-main)] opacity-70 border border-[var(--text-muted)] rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="https://github.com/shivxmhere" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-transparent border border-[var(--text-main)] rounded-md font-mono text-sm hover:border-[var(--accent-1)] hover:text-[var(--accent-1)] hover:shadow-[0_0_15px_var(--accent-1)] transition-all">
                    <Github size={18} /> GitHub ↗
                  </a>
                  <a href="https://krishi-net-1-0.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[var(--accent-1)] text-[var(--bg-primary)] rounded-md font-mono text-sm font-bold shadow-[0_0_15px_transparent] hover:shadow-[0_0_20px_var(--accent-1)] transition-all">
                    <ExternalLink size={18} /> Live Demo ↗
                  </a>
                </div>
              </div>

              {/* Mockup Placeholder with Glow */}
              <div className="lg:w-1/2 bg-[var(--card-bg)] border-l border-[var(--card-border)] relative flex items-center justify-center min-h-[300px] overflow-hidden group-hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <div className="absolute inset-0 bg-[var(--accent-1)] opacity-5 blur-[100px] group-hover:opacity-20 transition-opacity duration-700" />
                <div className="relative z-10 w-3/4 h-3/4 rounded-lg bg-[var(--bg-primary)] border border-[var(--card-border)] shadow-2xl flex flex-col overflow-hidden">
                  <div className="h-8 bg-[var(--bg-secondary)] border-b border-[var(--card-border)] flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="p-4 font-mono text-xs text-[var(--accent-1)] opacity-70">
                    <p className="animate-pulse">{'>'} Starting Krishi-Net prediction engine...</p>
                    <p className="mt-2 text-[var(--accent-2)]">{'>'} Model loaded: CNN_Disease_V2.keras</p>
                    <p className="mt-2 text-[var(--text-main)]">{'>'} Awaiting image input...</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_var(--card-border)] hover:border-[var(--accent-1)]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[var(--accent-1)]"><ExternalLink size={28} /></div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-1)] transition-colors">
                    <Github size={20} />
                  </a>
                </div>

                <h3 className="text-2xl font-bold font-[family-name:--font-display] text-[var(--text-main)] group-hover:text-[var(--accent-1)] transition-colors mb-3">{project.title}</h3>
                <p className="text-[var(--text-muted)] font-[family-name:--font-sans] flex-grow leading-relaxed mb-8">{project.description}</p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-[12px] text-[var(--accent-2)]">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Coming Soon Placeholders */}
            {(filter === 'All' || filter === 'Web' || filter === 'Data') && [1, 2].map((i) => (
              <motion.div
                layout
                key={`coming-soon-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col border border-dashed border-[var(--card-border)] bg-[rgba(255,255,255,0.01)] rounded-xl p-8 transition-all duration-300 relative overflow-hidden h-full min-h-[300px]"
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--card-bg)] to-transparent -translate-x-[150%] animate-[shimmer_2.5s_infinite_linear]" />

                <div className="flex justify-center items-center h-full">
                  <span className="font-mono text-[var(--text-muted)] text-sm tracking-widest uppercase animate-pulse">Coming Soon</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
