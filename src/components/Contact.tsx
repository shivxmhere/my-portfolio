import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUpRight, Check, Loader2, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState('loading');

        try {
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Fallback to mailto as reliable submission without backend auth
            window.location.href = `mailto:shivamhere6257@gmail.com?subject=Contact from ${name}&body=${message}%0A%0AFrom: ${email}`;

            setFormState('success');
            setTimeout(() => setFormState('idle'), 4000);
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            setFormState('error');
            setErrorMessage('Failed to open mail client.');
            setTimeout(() => setFormState('idle'), 4000);
        }
    };

    return (
        <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[var(--bg-primary)] text-[var(--text-main)] overflow-hidden transition-colors duration-400">

            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-5">
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-20 right-20 text-9xl font-mono text-[var(--accent-1)]"
                >
                    █
                </motion.div>
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-20 left-10 text-8xl font-mono font-bold text-[var(--accent-2)] opacity-30"
                >
                    {`< />`}
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-[var(--accent-1)] font-mono text-[13px] tracking-widest">// 08. lets_connect</span>
                    <h2 className="text-4xl md:text-[48px] font-bold tracking-tighter mt-2 font-[family-name:--font-display]">
                        Got an idea? Let's build something.
                    </h2>
                    <p className="text-[var(--text-muted)] text-lg mt-4 max-w-2xl font-[family-name:--font-sans]">
                        Open to internships, collaborations, and conversations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative">
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg px-6 py-4 text-[var(--text-main)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent-1)] focus:shadow-[0_0_15px_rgba(var(--accent-1),0.2)] transition-all duration-300 backdrop-blur-md"
                                />
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg px-6 py-4 text-[var(--text-main)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent-1)] focus:shadow-[0_0_15px_rgba(var(--accent-1),0.2)] transition-all duration-300 backdrop-blur-md"
                                />
                            </div>

                            <div className="relative group">
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Your Message"
                                    rows={5}
                                    className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg px-6 py-4 text-[var(--text-main)] placeholder-[var(--text-muted)] outline-none focus:border-[var(--accent-1)] focus:shadow-[0_0_15px_rgba(var(--accent-1),0.2)] transition-all duration-300 backdrop-blur-md resize-none"
                                />
                            </div>

                            {/* Form Actions and Error Messages */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 mt-2 h-14">
                                <motion.button
                                    animate={formState === 'error' ? { x: [-10, 10, -10, 10, 0] } : {}}
                                    transition={{ duration: 0.4 }}
                                    disabled={formState === 'loading' || formState === 'success'}
                                    type="submit"
                                    className="w-full sm:w-auto min-w-[160px] h-14 bg-[var(--accent-1)] text-[var(--bg-primary)] font-bold rounded-lg px-8 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_var(--accent-1)] transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed"
                                >
                                    <AnimatePresence mode="wait">
                                        {formState === 'idle' && (
                                            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                Send Message
                                            </motion.span>
                                        )}
                                        {formState === 'loading' && (
                                            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                                <Loader2 className="animate-spin" size={20} />
                                            </motion.span>
                                        )}
                                        {formState === 'success' && (
                                            <motion.span key="success" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                                <Check size={20} /> Sent!
                                            </motion.span>
                                        )}
                                        {formState === 'error' && (
                                            <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-[#ff4b4b]">
                                                <AlertCircle size={20} />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>

                                {formState === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-[#ff4b4b] text-sm font-mono"
                                    >
                                        {errorMessage}
                                    </motion.p>
                                )}
                            </div>
                        </form>
                    </motion.div>

                    {/* Right: Social Links Grid/Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-6 justify-center"
                    >
                        <SocialLink
                            href="https://github.com/shivxmhere"
                            icon={<Github size={28} />}
                            label="GitHub"
                            sublabel="github.com/shivxmhere"
                            hoverColor="group-hover:text-[#2ea043] group-hover:border-[#2ea043] group-hover:shadow-[0_0_20px_rgba(46,160,67,0.3)]"
                        />

                        <SocialLink
                            href="https://linkedin.com/in/shivam-singh-iit-patna/"
                            icon={<Linkedin size={28} />}
                            label="LinkedIn"
                            sublabel="linkedin.com/in/shivam-singh"
                            hoverColor="group-hover:text-[#0a66c2] group-hover:border-[#0a66c2] group-hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]"
                        />

                        <SocialLink
                            href="mailto:shivamhere6257@gmail.com"
                            icon={<Mail size={28} />}
                            label="Email"
                            sublabel="shivamhere6257@gmail.com"
                            hoverColor="group-hover:text-[#00d4ff] group-hover:border-[#00d4ff] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label, sublabel, hoverColor }: { href: string, icon: React.ReactNode, label: string, sublabel: string, hoverColor: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between p-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl backdrop-blur-md transition-all duration-300 w-full ${hoverColor}`}
        >
            <div className="flex items-center gap-6">
                <div className="flex items-center justify-center transition-colors">
                    {icon}
                </div>
                <div>
                    <h4 className="text-xl font-bold font-[family-name:--font-display] transition-colors">{label}</h4>
                    <p className="font-mono text-sm text-[var(--text-muted)] group-hover:opacity-80 transition-opacity mt-1">{sublabel}</p>
                </div>
            </div>

            <div className="w-10 h-10 rounded-full border border-[var(--text-muted)] flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <ArrowUpRight size={20} />
            </div>
        </a>
    );
}
