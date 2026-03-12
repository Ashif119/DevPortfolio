import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

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
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="text-slate-400 hover:text-primary transition-colors">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
