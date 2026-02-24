import { motion } from 'motion/react';

const achievements = [
  "3rd Place - Innovathon 1.0 (National Level Hackathon)",
  "IIT Patna Admission (CSDA)",
  "National Hackathon Winner",
  "Data Analytics Intern @ InAmigos",
  "French Diploma @ Hansraj College"
];

export default function Achievements() {
  return (
    <section className="py-24 bg-[#CEB3A6] text-[#0A0909] overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 px-6 md:px-12 lg:px-24">Honors & Awards</h2>
      
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {[...achievements, ...achievements, ...achievements].map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-5xl md:text-8xl font-bold uppercase tracking-tighter opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                {item}
              </span>
              <span className="text-4xl mx-8">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
