import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import HeroParticles from './HeroParticles';
import Typed from 'typed.js';

function Typewriter({ words }: { words: string[] }) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: words,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      cursorChar: '_',
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, [words]);

  return (
    <span className="text-[var(--text-main)] font-mono text-xl md:text-3xl font-regular inline-block h-10">
      <span className="text-[var(--accent-1)]">{">"}</span> <span ref={el}></span>
    </span>
  );
}

export default function Hero() {
  const roles = [
    "Research Intern @ IIT Indore",
    "MLSA @ Microsoft",
    "CS & Data Analytics @ IIT Patna",
    "National Hackathon Winner",
    "Python · Generative AI · System Design"
  ];

  const floatingTags = ["Python", "React", "ML", "FastAPI", "SQL", "AWS", "NLP", "Next.js"];

  // Magnetic button component
  const MagneticButton = ({ children, className, href, outlined = false }: any) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current!.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <motion.a
        ref={ref}
        href={href}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={`px-8 py-4 rounded-md text-[13px] font-mono font-bold tracking-widest transition-all duration-300 relative group overflow-hidden ${outlined
            ? "border-2 border-[var(--accent-1)] text-[var(--accent-1)] bg-transparent hover:shadow-[0_0_20px_var(--accent-1)] hover:bg-[var(--accent-1)] hover:text-[var(--bg-primary)]"
            : "bg-[var(--accent-1)] text-[var(--bg-primary)] hover:shadow-[0_0_20px_var(--accent-1)]"
          } ${className}`}
      >
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-400">
      {/* Background Elements */}
      <HeroParticles />
      <div className="absolute inset-0 bg-white/5 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-1)_0%,transparent_50%)] opacity-[0.03] animate-pulse"></div>

      {/* Floating Tech Tags */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
        {floatingTags.map((tag, i) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 0.15,
              scale: 1,
              y: [Math.random() * 60 - 30, Math.random() * -60 - 30],
              x: Math.random() * 60 - 30,
            }}
            transition={{
              opacity: { delay: 1.1 + i * 0.1, duration: 0.5 },
              scale: { delay: 1.1 + i * 0.1, duration: 0.5 },
              y: { duration: Math.random() * 5 + 15, repeat: Infinity, repeatType: 'reverse' },
              x: { duration: Math.random() * 5 + 15, repeat: Infinity, repeatType: 'reverse' }
            }}
            className="absolute text-5xl lg:text-7xl font-mono font-bold text-[var(--accent-1)] mix-blend-screen"
            style={{
              left: `${10 + (i * 11)}%`,
              top: `${15 + Math.random() * 70}%`
            }}
          >
            {tag}
          </motion.div>
        ))}
      </div>

      <div className="z-10 flex flex-col items-center text-center mt-20 px-4 max-w-5xl">
        {/* Monospace label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--accent-1)] font-mono text-[13px] tracking-widest mb-6"
        >
          {"<< shivam_singh.exe >>"}
        </motion.div>

        {/* Giant animated name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[96px] font-[family-name:--font-display] font-bold leading-[1.1] tracking-tighter mb-6 w-full"
        >
          <span className="inline-block relative text-transparent bg-clip-text bg-[linear-gradient(135deg,var(--accent-1),var(--accent-2))] bg-[length:250%_100%] animate-shimmer">
            SHIVAM SINGH
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12 flex justify-center items-center font-mono w-full"
        >
          <Typewriter words={roles} />
        </motion.div>

        {/* Two CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-6 mt-8"
        >
          <MagneticButton href="#projects" outlined={false}>
            View My Work ↓
          </MagneticButton>
          <MagneticButton href="/Shivam_Singh_Resume.pdf" outlined={true}>
            Download Resume ↗
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[var(--accent-1)] text-2xl font-light"
        >
          ∨
        </motion.div>
      </motion.div>
    </section>
  );
}
