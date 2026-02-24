import { motion } from 'motion/react';
import MagicText from './MagicText';

const experiences = [
  {
    role: "Data Analytics Intern",
    company: "InAmigos Foundation",
    period: "Sep 2025 - Oct 2025",
    description: "Led cross-functional teams, automated social media workflows with Python (60% efficiency boost), and engineered technical solutions for platform reliability.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" // Corporate/Work generic
  },
  {
    role: "BS in Computer Science & Data Analytics",
    company: "IIT Patna",
    period: "2025 - 2029",
    description: "Focus on Data Structures, Algorithms, Machine Learning, and Statistical Analysis. National Hackathon Winner.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" // College generic (IIT Patna placeholder)
  },
  {
    role: "Higher National Diploma in French",
    company: "Hansraj College",
    period: "Jan 2026 - Apr 2029",
    description: "Advanced language studies alongside technical curriculum.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" // University generic
  }
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFDFD]">
      <MagicText text="Experience & Education" tag="h2" className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter" />
      
      <div className="border-t border-[#707070]">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-[#707070] hover:bg-[#FDFDFD] transition-colors duration-300 cursor-default items-center"
          >
            <div className="md:col-span-3 text-[#707070] font-mono text-sm uppercase tracking-widest group-hover:text-[#5E3A30] transition-colors">
              {exp.period}
            </div>
            
            <div className="md:col-span-4">
               <div className="flex items-center gap-4 mb-2">
                 <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E5E5E5] hidden md:block">
                   <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h3 className="font-bold text-2xl group-hover:text-[#5E3A30] transition-colors">{exp.role}</h3>
                    <span className="block text-lg font-normal text-[#707070] group-hover:text-[#9C6455]">{exp.company}</span>
                 </div>
               </div>
            </div>
            
            <div className="md:col-span-5 text-[#707070] group-hover:text-[#0A0909] transition-colors leading-relaxed">
              {exp.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
