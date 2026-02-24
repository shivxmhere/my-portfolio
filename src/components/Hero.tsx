import { motion } from 'motion/react';
import MagicText from './MagicText';

export default function Hero() {
  const heading = "Hi, I'm Shivam Singh. I build intelligent systems and data-driven solutions at IIT Patna.";
  const words = heading.split(" ");

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
            href="#resume"
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
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative w-72 h-96 md:w-80 md:h-[30rem] overflow-hidden rounded-sm"
        >
          <motion.img
            src="https://github.com/shivxmhere.png"
            alt="Shivam Singh"
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
