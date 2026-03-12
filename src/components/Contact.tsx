import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl space-y-8">
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-500 mb-1">Email</h4>
                  <a href="mailto:ashifkadr@gmail.com" className="font-medium hover:text-primary transition-colors">ashifkadr@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-500 mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="font-medium hover:text-primary transition-colors">+91 7843821687</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-500 mb-1">Location</h4>
                  <p className="font-medium">Lucknow UP India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass-panel p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="input-group">
                  <input type="text" id="name" placeholder=" " required />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="input-group">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              
              <div className="input-group">
                <input type="text" id="subject" placeholder=" " required />
                <label htmlFor="subject">Subject</label>
              </div>
              
              <div className="input-group">
                <textarea id="message" rows={5} placeholder=" " required className="resize-none" />
                <label htmlFor="message">Your Message</label>
              </div>
              
              <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 neon-border">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
