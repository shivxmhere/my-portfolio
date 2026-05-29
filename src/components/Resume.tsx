import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { Github, Linkedin, Code, Brain, Globe, Cloud } from 'lucide-react';

const CountUp = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Resume() {
  const stats = [
    { label: "Years Coding", value: 2, prefix: "", suffix: "+" },
    { label: "Projects Built", value: 6, prefix: "", suffix: "+" },
    { label: "Certifications", value: 8, prefix: "", suffix: "+" },
    { label: "Hackathon Win", value: 2, prefix: "", suffix: " 🏆" },
  ];

  const skillCategories = [
    {
      title: "Languages", icon: <Code size={24} />, delay: 0,
      skills: ["Python", "SQL", "JavaScript"]
    },
    {
      title: "AI / ML", icon: <Brain size={24} />, delay: 0.2,
      skills: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "Data Science", "Data Visualization", "LLMs", "Model Training", "Prompt Engineering", "Azure AI"]
    },
    {
      title: "Web & Backend", icon: <Globe size={24} />, delay: 0.4,
      skills: ["React", "Next.js", "FastAPI", "PostgreSQL"]
    },
    {
      title: "Tools & Cloud", icon: <Cloud size={24} />, delay: 0.6,
      skills: ["AWS", "Figma", "Git", "Jupyter", "VS Code", "Microsoft Azure", "Microsoft SQL Server"]
    }
  ];

  return (
    <>
      <section id="about" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-primary)] text-[var(--text-main)] overflow-hidden transition-colors duration-400">
        {/* Background shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div
            animate={{ rotate: 360, x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-80 h-80 border border-[var(--accent-1)] opacity-5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360, x: [0, -30, 0], y: [0, 50, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 right-0 w-96 h-96 border-2 border-[var(--accent-2)] opacity-[0.03] rotate-45 transform"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[var(--accent-1)] font-mono text-[13px] tracking-widest">// 02. about_me</span>
            <h2 className="text-4xl md:text-[48px] font-bold tracking-tighter mt-2 font-[family-name:--font-display]">About Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Col: Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-8 flex flex-col items-center justify-center backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_var(--card-border)] transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[var(--accent-1)] font-[family-name:--font-display] mb-2 drop-shadow-[0_0_10px_var(--accent-1)]">
                    {stat.prefix}<CountUp end={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-sm font-mono text-[var(--text-muted)] text-center">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Right Col: Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <p className="text-lg md:text-[18px] leading-relaxed text-[var(--text-muted)] font-[family-name:--font-sans] mb-8">
                "I'm a CS & Data Analytics student (B.S.) at IIT Patna who builds at the intersection of AI and real-world impact. Currently a Research Intern at IIT Indore working on LLMs and Generative AI, and a Microsoft Learn Student Ambassador. From agricultural AI platforms to generative models, I turn data into decisions and ideas into scalable products. I'm actively exploring ML, NLP, LLMs, and full-stack development — always looking to build technology that solves real problems."
              </p>

              <div className="flex gap-6">
                <a href="https://github.com/shivxmhere" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[var(--text-main)] hover:text-[var(--accent-1)] transition-colors relative overflow-hidden pb-1">
                  <Github className="group-hover:drop-shadow-[0_0_8px_var(--accent-1)] transition-all" size={24} />
                  <span className="font-mono text-sm">github.com/shivxmhere</span>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--accent-1)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </a>
                <a href="https://linkedin.com/in/shivam-singh-iit-patna/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[var(--text-main)] hover:text-[var(--accent-1)] transition-colors relative overflow-hidden pb-1">
                  <Linkedin className="group-hover:drop-shadow-[0_0_8px_var(--accent-1)] transition-all" size={24} />
                  <span className="font-mono text-sm">linkedin/shivam-singh</span>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--accent-1)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-secondary)] text-[var(--text-main)] overflow-hidden transition-colors duration-400">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[var(--accent-1)] font-mono text-[13px] tracking-widest">// 03. tech_stack</span>
            <h2 className="text-4xl md:text-[48px] font-bold tracking-tighter mt-2 font-[family-name:--font-display]">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: category.delay }}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:border-[var(--accent-1)] transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-8 text-[var(--accent-1)]">
                  {category.icon}
                  <h3 className="text-2xl font-bold font-[family-name:--font-display] text-[var(--text-main)]">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, j) => (
                    <div
                      key={j}
                      className="px-4 py-2 bg-[var(--bg-primary)] border border-[var(--card-border)] rounded-full text-sm font-mono text-[var(--text-main)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[var(--accent-1)] hover:text-[var(--accent-1)] hover:shadow-[0_0_15px_var(--card-border)] cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
