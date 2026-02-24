import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface MagicTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  delay?: number;
}

export default function MagicText({ text, className = "", tag = "div", delay = 0 }: MagicTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const Tag = tag as any;

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      scale: 1.5,
      filter: "blur(10px)",
    }
  };

  return (
    <Tag ref={ref} className={`${className}`}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-block"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block magic-char ${char === " " ? "mr-[0.25em]" : ""}`}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
