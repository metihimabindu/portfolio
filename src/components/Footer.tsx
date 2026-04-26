import { motion } from "motion/react";
import { ChevronUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-stone-200 relative text-text-main">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
           <h4 className="font-mono font-bold text-xl tracking-tighter mb-2">
              HIMA <span className="text-accent underline decoration-2 underline-offset-4">BINDU</span>
           </h4>
           <p className="text-text-soft text-sm">
              © {new Date().getFullYear()} Hima Bindu Meti. All rights reserved.
           </p>
        </div>

        <div className="flex items-center gap-2 text-text-soft text-sm uppercase tracking-widest font-mono">
           Curated with <Heart size={14} className="text-accent-secondary fill-accent-secondary" /> by Hima Bindu
        </div>

        <motion.button
          id="back-to-top"
          onClick={scrollToTop}
          className="w-12 h-12 glass border-stone-200 flex items-center justify-center rounded-xl text-accent hover:border-accent/40 transition-all shadow-sm"
          whileHover={{ y: -5 }}
        >
           <ChevronUp />
        </motion.button>
      </div>
    </footer>
  );
}
