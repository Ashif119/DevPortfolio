import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for new opportunities
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Hi, I'm <span className="text-primary neon-text">Ashif</span><br />
            Android Developer.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-lg"
          >
            I build exceptional and accessible digital experiences for the web. Crafting beautiful UIs and robust backends.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a href="#projects" className="px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 neon-border">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 glass-panel rounded-xl font-medium hover:bg-slate-800/80 transition-all hover:scale-105 active:scale-95">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6 mt-8"
          >
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="text-slate-500 hover:text-primary transition-colors hover:scale-110">
                <Icon size={24} />
              </a>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-3xl rotate-6 opacity-50 blur-lg" />
            <div className="absolute inset-0 glass-panel rounded-3xl overflow-hidden border border-white/20 flex items-center justify-center text-9xl">
              👨‍💻
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-panel px-4 py-2 rounded-xl font-bold text-primary"
            >
              Android
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 glass-panel px-4 py-2 rounded-xl font-bold text-purple-500"
            >
              Node.js
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
