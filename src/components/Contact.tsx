import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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
                  <a href="tel:+917843821687" className="font-medium hover:text-primary transition-colors">+91 7843821687</a>
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

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.sendForm(
        'service_3uecytf',
        'template_czzg00w',
        formRef.current!,
        'iwJ5378-vlL8HBctn'
      );
      setSuccess(true);
      formRef.current?.reset();
    } catch {
      alert('Failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="md:col-span-3 glass-panel p-8 md:p-10 rounded-3xl"
    >
      {success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center"
        >
          <CheckCircle size={64} className="text-green-500" />
          <h3 className="text-2xl font-bold">Message Sent!</h3>
          <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
          <button onClick={() => setSuccess(false)} className="mt-4 px-6 py-2 glass-panel rounded-xl hover:bg-slate-800/80 transition-all">
            Send Another
          </button>
        </motion.div>
      ) : (
        <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="input-group">
              <input type="text" id="name" name="from_name" placeholder=" " required />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="input-group">
              <input type="email" id="email" name="from_email" placeholder=" " required />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="input-group">
            <input type="text" id="subject" name="subject" placeholder=" " required />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="input-group">
            <textarea id="message" name="message" rows={5} placeholder=" " required className="resize-none" />
            <label htmlFor="message">Your Message</label>
          </div>
          <button type="submit" disabled={sending} className="w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 neon-border disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100">
            {sending ? 'Sending...' : <> Send Message <Send size={18} /> </>}
          </button>
        </form>
      )}
    </motion.div>
  );
}
