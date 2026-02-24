import { motion } from 'motion/react';

const skills = [
  "Python", "SQL", "Generative AI", "Machine Learning", "Figma", "Data Visualization", "React", "Next.js", "FastAPI", "PostgreSQL", "AWS"
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-[#0A0909] text-[#FDFDFD] overflow-hidden">
      <div className="px-6 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 md:mb-0">Resume & Skills</h2>
        <a
          href="/Shivam_Singh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Shivam_Singh_Resume.pdf"
          className="px-8 py-4 bg-[#FDFDFD] text-[#0A0909] rounded-full text-sm uppercase tracking-widest hover:bg-[#CEB3A6] transition-colors duration-300"
        >
          Download PDF
        </a>
      </div>

      {/* Infinite Ticker */}
      <div className="relative flex overflow-x-hidden border-y border-[#333] py-8 bg-[#111]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <span key={index} className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[#333] mx-8 hover:text-[#FDFDFD] transition-colors duration-300 cursor-default">
              {skill} <span className="text-[#9C6455] mx-4">•</span>
            </span>
          ))}
        </motion.div>
        <motion.div
          className="flex whitespace-nowrap absolute top-0 py-8"
          animate={{ x: [1000, 0] }} // Duplicate for seamless loop if needed, but simple translate is easier
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Simplified loop above */}
        </motion.div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-[#707070] text-sm uppercase tracking-widest mb-6">Summary</h3>
          <p className="text-xl leading-relaxed text-[#CEB3A6]">
            I am Shivam Singh, currently pursuing Computer Science and Data Analytics (CSDA) at IIT Patna.
            Passionate about technology, well-versed in English, and thrive on creative challenges.
            My ability to learn quickly helps me adapt to new situations and master emerging technologies with ease.
          </p>
        </div>
        <div>
          <h3 className="text-[#707070] text-sm uppercase tracking-widest mb-6">Education</h3>
          <ul className="space-y-4">
            <li className="flex justify-between border-b border-[#333] pb-4">
              <span>IIT Patna</span>
              <span className="text-[#707070]">2025 - 2029</span>
            </li>
            <li className="flex justify-between border-b border-[#333] pb-4">
              <span>Hansraj College</span>
              <span className="text-[#707070]">2026 - 2029</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
