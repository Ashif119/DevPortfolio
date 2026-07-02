import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-xl tracking-tighter">
          Dev<span className="text-primary">Portfolio</span>
        </div>
        
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Designed & Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Ashif
        </p>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/Ashif119" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ashif119/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
