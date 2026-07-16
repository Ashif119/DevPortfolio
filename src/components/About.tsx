import { motion } from 'motion/react';

const skills = [
  { name: 'Android Development', level: 90 },
  { name: 'Kotlin', level: 85 },
  { name: 'Jetpack Compose', level: 80 },
  { name: 'Flutter', level: 75 },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-slate-400"
          >
            <p>
  Hello! I'm <b>Ashif Kadri</b>, an Android Developer with 3+ years of experience
  building scalable, production-grade mobile applications for fintech and
  enterprise clients.
</p>

<p>
  I specialize in Kotlin, Jetpack Compose, and modern Android architecture
  (MVVM, Clean Architecture) — with hands-on experience shipping apps that
  handle real-money transactions, offline-first sync, and complex state
  management. I'm also expanding into Flutter for cross-platform development
  and Android reverse engineering as a specialized parallel skill.
</p>

<p>
  I use AI-assisted development tools to accelerate delivery on boilerplate
  and exploration — but architectural decisions, debugging root causes, and
  code quality remain mine to own. Currently building toward SDE-2 level
  roles, sharing my journey, and building in public.
</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 glass-panel p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-display font-bold mb-6">My Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between font-medium">
                  <span>{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
