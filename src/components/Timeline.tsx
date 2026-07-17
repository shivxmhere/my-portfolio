import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  icon: string;
}

const experiences: Experience[] = [
  {
    role: "Research Intern – Multimodal Content Safety & AI-Assisted Generation",
    company: "IIT Indore",
    period: "May 2026 – August 2026",
    description: "Supervisor: Dr. Nagendra Kumar, IIT Indore (publishes at AAAI)",
    bullets: [
      "Built a fully automated pipeline to synthesize multimodal hateful content using diffusion-generated backgrounds, indirect LLM prompting for captions, and Python/PIL overlay.",
      "Curated a novel dataset of 200+ synthetic memes across six Indian-centric hate categories (caste, gender, religion, politics, region, other), with paired neutral samples and auto-annotations.",
      "Led a vulnerability study testing 12 indirect prompt strategies on 6 major LLMs (GPT‑4o, Gemini, Claude, LLaMA 3, Mistral, Mixtral), measuring bypass rates and exposing safety filter weaknesses.",
      "Collaborated with a PhD student and final-year BTech to integrate the dataset into a multimodal detection model combining vision-language fusion and adaptive reasoning.",
      "Outcome: Research paper submitted to a top-tier AI conference; first comprehensive synthetic resource for Indian multimodal hate speech."
    ],
    tags: ["LLM Safety/Red-Teaming", "Dataset Engineering", "Diffusion Models", "LoRA", "LN‑Tuning", "Contrastive Learning", "Ethical AI"],
    icon: "🔬"
  },
  {
    role: "Microsoft Learn Student Ambassador",
    company: "Microsoft",
    period: "March 2026 – Present",
    description: "Selected as Microsoft Learn Student Ambassador representing Microsoft at IIT Patna. Contributor ID: studentamb_508115. Organizing AI/ML workshops and tech events for the IIT Patna student community. Part of a global network of 10,000+ student ambassadors. Working on Azure AI, GitHub, and Microsoft Learn content creation.",
    icon: "🌟"
  },
  {
    role: "Hybrid Programs Coordinator",
    company: "Student Technical Council, IIT Patna",
    period: "January 2026 – Present",
    description: "Optimizing hybrid infrastructure for the Student Technical Council using advanced collaboration tools. Developing workflows for digital content delivery and real-time technical support. Analyzing program metrics to improve engagement and scale technical outreach.",
    icon: "⚙️"
  },
  {
    role: "Creative Team",
    company: "Google Developer Group IIT Patna",
    period: "Dec 2025 – Jan 2026",
    description: "Contributed to creative and tech initiatives for GDG events and tech community engagement at IIT Patna.",
    icon: "🎨"
  },
  {
    role: "Data Analytics Intern",
    company: "InAmigos Foundation",
    period: "Sep 2025 – Oct 2025",
    description: "Developed Python-based automation workflows for social media content generation. Created digital content strategy reaching 10,000+ audience. Led cross-functional projects between design and tech teams. Resolved critical platform issues improving deployment reliability by 40%.",
    icon: "💼"
  },
  {
    role: "B.S. (Bachelor of Science) Computer Science & Data Analytics",
    company: "IIT Patna",
    period: "2025 – 2029",
    description: "Focus on Data Structures, Algorithms, Machine Learning, and Statistical Analysis. National Hackathon Winner and active participant in technical clubs.",
    icon: "🎓"
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="journey" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-secondary)] text-[var(--text-main)] overflow-hidden transition-colors duration-400">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-24 text-center md:text-left">
          <span className="text-[var(--accent-1)] font-mono text-[13px] tracking-widest">// 05. journey</span>
          <h2 className="text-4xl md:text-[48px] font-bold tracking-tighter mt-2 font-[family-name:--font-display]">Education & Timeline</h2>
        </div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto flex flex-col items-center">

          {/* Animated Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[var(--card-border)] -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ scaleY, transformOrigin: 'top' }}
              className="absolute top-0 left-0 w-full h-full bg-[var(--accent-1)] z-0 shadow-[0_0_15px_var(--accent-1)]"
            />
          </div>

          <div className="w-full flex flex-col gap-16 md:gap-32">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">

                  {/* Heartbeat pulse dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center"
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--bg-primary)] border-4 border-[var(--accent-1)] shadow-[0_0_15px_var(--accent-1)] animate-pulse" />
                  </motion.div>

                  {/* Left Column (Empty for odd, Content for even) */}
                  <div className="w-full md:w-1/2 flex justify-end md:pr-16 mb-8 md:mb-0">
                    {isEven && (
                      <TimelineCard exp={exp} side="right" />
                    )}
                  </div>

                  {/* Right Column (Content for odd, Empty for even) */}
                  <div className="w-full md:w-1/2 flex justify-start md:pl-16">
                    {!isEven && (
                      <TimelineCard exp={exp} side="left" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ exp, side }: { exp: Experience, side: 'left' | 'right' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring" }}
      className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 backdrop-blur-md shadow-lg hover:border-[var(--accent-1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300 relative"
    >
      <div className="absolute top-8 right-8 text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
        {exp.icon}
      </div>

      <span className="inline-block px-4 py-1 rounded-full bg-[var(--accent-1)]/10 text-[var(--accent-1)] font-mono text-sm border border-[var(--accent-1)]/20 shadow-[0_0_10px_var(--accent-1)] mb-6">
        {exp.period}
      </span>

      <h3 className="text-2xl font-bold font-[family-name:--font-display] text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-1)] transition-colors">
        {exp.company}
      </h3>
      <h4 className="text-xl font-[family-name:--font-display] text-[var(--accent-2)] mb-4">
        {exp.role}
      </h4>

      <p className="text-[var(--text-muted)] font-[family-name:--font-sans] leading-relaxed">
        {exp.description}
      </p>

      {exp.bullets && exp.bullets.length > 0 && (
        <ul className="mt-4 space-y-3">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-[var(--text-muted)] font-[family-name:--font-sans] text-[14px] leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-1)] flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {exp.tags && exp.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {exp.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 text-[11px] font-mono rounded-full bg-[var(--accent-1)]/5 text-[var(--accent-1)] border border-[var(--accent-1)]/15">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
