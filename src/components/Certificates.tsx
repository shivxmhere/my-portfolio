import { motion } from 'motion/react';
import MagicText from './MagicText';

const certificates = [
  {
    title: "Innovathon 1.0 - 3rd Position",
    issuer: "University of Jammu (SIIEDC)",
    date: "Feb 2026",
    image: "https://placehold.co/800x600/1a1a1a/ffffff?text=Innovathon+1.0+Certificate",
    description: "Secured 3rd Position in the National Level Hackathon 'Innovathon 1.0' organized by SIIEDC, University of Jammu."
  },
  {
    title: "SnowStorm Hackathon",
    issuer: "Tech4Hack",
    date: "2025",
    image: "https://placehold.co/800x600/1a1a1a/ffffff?text=SnowStorm+Hackathon",
    description: "Certificate of Participation for demonstrating technical skills and innovation in the high-intensity SnowStorm Hackathon."
  },
  {
    title: "Generative AI Workshop",
    issuer: "Techgyan @ IIT Delhi",
    date: "July 2025",
    image: "https://placehold.co/800x600/1a1a1a/ffffff?text=GenAI+Workshop+IIT+Delhi",
    description: "Participated in a hands-on workshop on Generative AI organized by Techgyan Technologies at IIT Delhi."
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "2025",
    image: "https://placehold.co/800x600/1a1a1a/ffffff?text=GenAI+Mastermind",
    description: "Successfully completed the Generative AI Mastermind course, mastering prompt engineering and LLM applications."
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "Simplilearn",
    date: "Sept 2025",
    image: "https://placehold.co/800x600/1a1a1a/ffffff?text=Simplilearn+Data+Analytics",
    description: "Professional certification demonstrating initiative and commitment to deepening skills in Data Analytics."
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP LIFE",
    date: "Sept 2025",
    image: "https://placehold.co/800x600/1a1a1a/ffffff?text=HP+LIFE+Data+Science",
    description: "Completed the HP LIFE online course on Data Science & Analytics, covering essential tools and methodologies."
  },
  {
    title: "JavaScript Bootcamp",
    issuer: "LetsUpgrade",
    date: "Sept 2025",
    image: "https://placehold.co/800x600/1a1a1a/ffffff?text=JS+Bootcamp",
    description: "Successfully completed a 3-day intensive JavaScript Bootcamp in collaboration with ITM Edutech Training Pvt. Ltd."
  },
  {
    title: "Content Writing Internship",
    issuer: "InAmigos Foundation",
    date: "Sept 2025",
    image: "https://placehold.co/800x600/1a1a1a/ffffff?text=InAmigos+Internship",
    description: "Certificate of Internship for successful completion of Content Writing tenure from 11/09/2025 to 24/09/2025."
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFDFD]">
      <MagicText text="Achievements & Certificates" tag="h2" className="text-4xl md:text-6xl font-bold tracking-tighter mb-16" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="relative overflow-hidden rounded-lg shadow-sm border border-[#E5E5E5] aspect-[4/3] mb-6 bg-gray-100">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="flex flex-col space-y-2 flex-grow">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-xl font-bold group-hover:text-[#9C6455] transition-colors duration-300 line-clamp-2">{cert.title}</h3>
                <span className="text-[#707070] text-xs font-mono border border-[#707070] px-2 py-1 rounded-full whitespace-nowrap">{cert.date}</span>
              </div>
              <p className="text-[#5E3A30] text-xs uppercase tracking-widest font-medium">{cert.issuer}</p>
              <p className="text-[#707070] text-sm leading-relaxed line-clamp-3">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
