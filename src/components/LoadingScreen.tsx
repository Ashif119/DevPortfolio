import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="font-display font-bold text-4xl tracking-tighter text-white mb-8">
        Dev<span className="text-primary">Portfolio</span>
      </div>
      
      <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute top-0 left-0 bottom-0 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
      <div className="mt-4 text-primary font-mono text-sm">
        {Math.min(progress, 100)}%
      </div>
    </motion.div>
  );
}
