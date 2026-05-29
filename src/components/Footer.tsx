import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

// Easter egg: Binary Rain
function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      // Adjust resolution for sharpness and scaling
      canvas.width = window.innerWidth;
      // We only need the canvas to cover the footer height which is small, but let's make it fixed size relative to container
      canvas.height = 300;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = '01';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    // Check if current theme is light or dark (rough guess based on document body data attribute)
    // We'll just define the color using CSS variables inside the draw function if possible, but 
    // canvas doesn't auto-update CSS vars dynamically easily without getComputedStyle.
    // Instead, we'll draw with a fixed very low opacity color that works on both, or query the element.

    const draw = () => {
      // Create a slight trailing effect
      ctx.fillStyle = 'rgba(bg-primary-fallback, 0.05)'; // We'll just clear it completely to be safe with themes
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      // Get computing style for accent color
      const computedStyle = getComputedStyle(document.documentElement);
      const accent1 = computedStyle.getPropertyValue('--accent-1').trim() || '#00d4ff';

      ctx.fillStyle = accent1;
      ctx.globalAlpha = 0.05; // Very subtle

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[var(--bg-secondary)] text-[var(--text-main)] transition-colors duration-400 border-t border-[var(--card-bg)] py-12 overflow-hidden flex flex-col items-center justify-center">
      <BinaryRain />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto px-6 text-center gap-4">
        <h3 className="text-xl md:text-2xl font-[family-name:--font-display] font-bold tracking-tight">
          Designed & Built by Shivam Singh &copy; 2026
        </h3>

        <p className="font-mono text-sm text-[var(--accent-1)] tracking-widest uppercase">
          IIT Patna — CS & Data Analytics
        </p>
      </div>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-[var(--card-bg)] border border-[var(--accent-1)] rounded-xl shadow-[0_0_15px_rgba(var(--accent-1),0.3)] hover:shadow-[0_0_25px_var(--accent-1)] text-[var(--accent-1)] backdrop-blur-md transition-shadow group flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

