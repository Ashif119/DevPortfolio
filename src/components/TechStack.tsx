import { motion } from 'motion/react';

const technologies = [
  { name: 'React', icon: '⚛️', color: 'text-blue-400' },
  { name: 'TypeScript', icon: '📘', color: 'text-blue-600' },
  { name: 'Node.js', icon: '🟩', color: 'text-green-500' },
  { name: 'Next.js', icon: '▲', color: 'text-white' },
  { name: 'Tailwind', icon: '🌊', color: 'text-cyan-400' },
  { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-500' },
  { name: 'MongoDB', icon: '🍃', color: 'text-green-600' },
  { name: 'GraphQL', icon: '🕸️', color: 'text-pink-500' },
  { name: 'Docker', icon: '🐳', color: 'text-blue-500' },
  { name: 'AWS', icon: '☁️', color: 'text-orange-500' },
  { name: 'Figma', icon: '🎨', color: 'text-purple-500' },
  { name: 'Git', icon: '🔀', color: 'text-red-500' },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Tech <span className="text-primary">Stack</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer group"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
              <span className="font-medium text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
