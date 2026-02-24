import { motion } from 'motion/react';
import { Instagram, Linkedin, Github, ExternalLink } from 'lucide-react';
import MagicText from './MagicText';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0909] text-[#FDFDFD] px-6 py-20 md:py-32 min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9C6455] opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 flex-grow z-10">
        {/* Left Panel - The Human Element */}
        <div className="flex flex-col justify-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-[#707070] text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF0000] rounded-full animate-pulse"></span>
              Currently Listening To
            </h3>
            <motion.a
              href="https://music.youtube.com/playlist?list=PLE0Jo6NF_JYO5-phess8GKafKMtPv3tfZ&si=IIjhVL5R2xtKoCMM"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 border border-[#333] rounded-xl bg-[#111] max-w-md hover:border-[#9C6455] transition-colors duration-300 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-[#333] rounded-lg overflow-hidden relative flex-shrink-0 flex items-center justify-center">
                {/* Raj Shamani / YouTube Music Icon */}
                <img src="https://yt3.googleusercontent.com/strLdMSfOLMsaJU50IFOnVXgzolGmGSbtmczTIEi_gFt7IX6sBqNDGBM6AKzCCBDAN5weIBE=s900-c-k-c0x00ffffff-no-rj" alt="Raj Shamani" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity absolute inset-0" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#FF0000" strokeWidth="1.5" fill="rgba(255,0,0,0.15)" />
                    <polygon points="10,8 16,12 10,16" fill="#FF0000" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg font-medium group-hover:text-[#CEB3A6] transition-colors">Raj Shamani Podcast</p>
                <p className="text-[#707070] text-sm flex items-center gap-1">
                  YouTube Music <ExternalLink size={12} />
                </p>
              </div>
            </motion.a>
          </div>

          <div className="space-y-8">
            <div className="group">
              <h3 className="text-[#707070] text-sm uppercase tracking-widest mb-2 group-hover:text-[#CEB3A6] transition-colors">Currently Watching</h3>
              <MagicText text="CodeWithHarry" className="text-2xl font-serif italic text-[#FDFDFD] group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <div className="group">
              <h3 className="text-[#707070] text-sm uppercase tracking-widest mb-2 group-hover:text-[#CEB3A6] transition-colors">Daily Fuel</h3>
              <MagicText text="Reading 'Atomic Habits'" className="text-xl text-[#FDFDFD] group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Right Panel - Contact */}
        <div className="flex flex-col justify-center items-start md:items-end text-left md:text-right">
          <MagicText text="Let's" tag="h2" className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none tracking-tighter" />
          <MagicText text="Connect." tag="h2" className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none tracking-tighter mb-8" delay={0.2} />

          <a
            href="mailto:shivamhere6257@gmail.com"
            className="text-xl md:text-3xl border-b border-[#707070] pb-2 hover:text-[#CEB3A6] hover:border-[#CEB3A6] transition-all duration-300"
          >
            shivamhere6257@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-20 border-t border-[#333] pt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-[#707070] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Shivam Singh
          </div>

          <div className="flex gap-6">
            <SocialLink href="https://www.linkedin.com/in/shivam-singh-2503cdh287" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://github.com/shivxmhere" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://instagram.com/shivxm._.s" icon={<Instagram size={20} />} label="shivxm._.s" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="flex items-center gap-2 text-[#FDFDFD] hover:text-[#CEB3A6] transition-colors group"
    >
      <div className="p-3 border border-[#333] rounded-full bg-[#111] group-hover:border-[#CEB3A6] transition-colors">
        {icon}
      </div>
      <span className="text-sm uppercase tracking-widest font-medium hidden md:block opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        {label}
      </span>
    </motion.a>
  );
}
