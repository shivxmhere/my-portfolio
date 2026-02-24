import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-8 flex justify-between items-center mix-blend-difference text-[#FDFDFD]"
    >
      <Link to="/" className="text-xl font-bold tracking-tight uppercase">
        Shivam Singh
      </Link>
      <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
        <a href="#work" className="hover:text-[#CEB3A6] transition-colors duration-300">Work</a>
        <a href="#resume" className="hover:text-[#CEB3A6] transition-colors duration-300">Resume</a>
        <a href="#contact" className="hover:text-[#CEB3A6] transition-colors duration-300">Contact</a>
      </nav>
    </motion.header>
  );
}
