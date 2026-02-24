import React, { useState } from 'react';
import { motion } from 'motion/react';
import MagicText from './MagicText';

function Sparkle({ style }: { key?: React.Key; style: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180]
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={style}
      className="absolute pointer-events-none z-30"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="#CEB3A6" />
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  const heading = "Hi, I'm Shivam Singh. I build intelligent systems and data-driven solutions at IIT Patna.";
  const words = heading.split(" ");
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (Math.random() > 0.6) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now() + Math.random();
      setSparkles(prev => [...prev.slice(-8), { id, x, y }]);
      setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== id)), 800);
    }
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    // Keep it lit for a moment after touch ends
    setTimeout(() => setIsHovered(false), 1500);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (Math.random() > 0.5) {
      const rect = e.currentTarget.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      const id = Date.now() + Math.random();
      setSparkles(prev => [...prev.slice(-8), { id, x, y }]);
      setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== id)), 800);
    }
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 pt-32 pb-16 bg-[#FDFDFD] text-[#0A0909]">
      <div className="md:w-3/5 z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#707070] text-sm md:text-base uppercase tracking-widest mb-8 font-medium"
        >
          Data Analyst & AI Developer
        </motion.p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-12">
          {words.map((word, i) => (
            <span key={i} className="inline-block mr-3 md:mr-6">
              <MagicText text={word} tag="span" delay={i * 0.1} />
            </span>
          ))}
        </h1>

        <div className="flex gap-6 mt-12">
          <motion.a
            href="#work"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="px-8 py-4 bg-[#0A0909] text-[#FDFDFD] rounded-full text-sm uppercase tracking-widest hover:bg-[#9C6455] transition-colors duration-300"
          >
            View Work
          </motion.a>
          <motion.a
            href="/Shivam_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="px-8 py-4 border border-[#0A0909] text-[#0A0909] rounded-full text-sm uppercase tracking-widest hover:bg-[#FDFDFD] hover:text-[#9C6455] hover:border-[#9C6455] transition-colors duration-300"
          >
            Get Resume
          </motion.a>
        </div>
      </div>

      <div className="md:w-2/5 mt-16 md:mt-0 flex justify-center md:justify-end">
        {/* Glow ring behind image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-[22rem] h-[38rem] md:w-[26rem] md:h-[40rem] rounded-2xl blur-2xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(156,100,85,0.25) 0%, transparent 70%)' }}
        />

        <motion.div
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative w-80 h-[28rem] md:w-96 md:h-[36rem] overflow-visible rounded-lg cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {/* Sparkle particles on hover */}
          {sparkles.map(sparkle => (
            <Sparkle
              key={sparkle.id}
              style={{ left: sparkle.x - 8, top: sparkle.y - 8 }}
            />
          ))}

          {/* Subtle border glow on hover */}
          <motion.div
            animate={{
              boxShadow: isHovered
                ? '0 0 40px rgba(156,100,85,0.3), 0 0 80px rgba(156,100,85,0.1), inset 0 0 30px rgba(156,100,85,0.05)'
                : '0 0 0px rgba(156,100,85,0), 0 0 0px rgba(156,100,85,0)'
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 rounded-lg pointer-events-none z-20"
          />

          <motion.img
            src="/profile-sticker.png"
            alt="Shivam Singh"
            initial={{ scale: 1.3, opacity: 0, filter: 'grayscale(1)' }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: isHovered ? 'grayscale(0)' : 'grayscale(1)'
            }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.03 }}
            className="w-full h-full object-cover object-top transition-all duration-700 rounded-lg relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
