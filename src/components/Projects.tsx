import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'ModernQRScanner',
    description: 'A modern QR & Barcode Scanner app built with Jetpack Compose and Clean Architecture. Features scan history, copy/share results, and supports all major barcode formats.',
    image: 'https://picsum.photos/seed/qrscanner/800/600',
    tech: ['Kotlin', 'Jetpack Compose', 'CameraX', 'ML Kit', 'Hilt', 'Room'],
    github: 'https://github.com/Ashif119/ModernQRScanner',
    live: '#',
  },
  {
    title: 'B2C Fintech App',
    description: 'A B2C fintech Flutter application with Clean Architecture and GetX state management. Features payment flows, wallet management, and transaction history.',
    image: 'https://picsum.photos/seed/fintech/800/600',
    tech: ['Flutter', 'Dart', 'GetX', 'Dio', 'Hive'],
    github: 'https://github.com/Ashif119/B2CFintechFlutter',
    live: '#',
  },
  {
    title: 'TradeBook',
    description: 'A wholesale business management app for Indian traders. Supports Indian number formatting, GST billing, and inventory tracking.',
    image: 'https://picsum.photos/seed/tradebook/800/600',
    tech: ['Flutter', 'GetX', 'Hive', 'Dio', 'Clean Architecture'],
    github: '#',
    live: '#',
  },
  {
    title: 'HafSales ERP',
    description: 'A mobile ERP solution for wholesale and distribution businesses with product listing, order management, and sales tracking.',
    image: 'https://picsum.photos/seed/hafsales/800/600',
    tech: ['Android', 'Kotlin', 'MVVM', 'Retrofit', 'Room'],
    github: '#',
    live: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass-panel rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 bg-slate-800 rounded-full text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
