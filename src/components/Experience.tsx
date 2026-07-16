import { motion } from 'motion/react';

const experiences = [
 {
    role: 'Android Developer',
    company: 'FusionCode',
    period: '2025 - Present',
    description: 'Building production Android and Flutter apps with Kotlin, Jetpack Compose, and Clean Architecture. Working on a Compose Multiplatform ERP system (MVI architecture, Koin DI) alongside an existing fintech app, handling everything from feature development to production debugging.',
  },
  {
    role: 'Android Developer',
    company: 'RoundPay Techno Media',
    period: '2022 - 2025',
    description: 'Developed and maintained production Android applications using Kotlin, MVVM architecture, Retrofit, and Room. Debugged critical issues including memory leaks, race conditions in async callbacks, and third-party SDK integrations for fintech workflows.',
  },
  {
    role: 'Junior Android Developer',
    company: 'Mecatradz Technologies',
    period: '2021 - 2022',
    description: 'Started my Android development journey building internal tools and learning core fundamentals — Kotlin, Android SDK, and app architecture basics.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">My <span className="text-primary">Experience</span></h2>
          <p className="text-slate-400">
            A brief look at my professional journey.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 bg-primary rounded-full -left-[13px] md:left-1/2 md:-translate-x-1/2 top-0 border-4 border-slate-900 shadow-lg" />
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                <div className="glass-panel p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-primary font-mono text-sm font-bold mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-slate-400 font-medium mb-4">{exp.company}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/30 -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}
