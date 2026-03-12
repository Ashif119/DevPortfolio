import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen selection:bg-primary/30 selection:text-primary">
          <CustomCursor />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Experience />
            <Contact />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}
