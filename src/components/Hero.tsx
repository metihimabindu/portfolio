import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronDown, FileText, Briefcase } from "lucide-react";

const roles = ["Frontend Developer", "Java Programmer", "Problem Solver", "SDE Aspirant"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const targetText = isDeleting 
      ? currentRole.substring(0, displayText.length - 1)
      : currentRole.substring(0, displayText.length + 1);

    const timer = setTimeout(() => {
      setDisplayText(targetText);

      if (!isDeleting && targetText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && targetText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <motion.div
        id="hero-content"
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-text-main pt-12">
          Hi, I'm <span className="text-glow text-accent">Hima Bindu</span> <span className="animate-bounce inline-block">👩‍🎓</span>
        </h1>
        
        <div className="h-10 mb-8">
          <p className="text-xl md:text-3xl font-mono text-text-soft">
            I'm a <span className="text-text-main border-r-2 border-accent pr-1">{displayText}</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <motion.a
            id="view-work-cta"
            href="#projects"
            className="group flex items-center gap-2 bg-accent text-white font-bold py-4 px-8 rounded-full hover:bg-accent-hover shadow-lg shadow-accent/20 transition-all transform hover:scale-105 active:scale-95"
            whileHover={{ y: -2 }}
          >
            <Briefcase size={20} />
            View My Portfolio
          </motion.a>
          
          <motion.a
            id="download-resume-cta"
            href="/resume.pdf" 
            download="Hima_Bindu_Resume.pdf"
            className="group flex items-center gap-2 bg-white text-text-main border border-stone-200 font-bold py-4 px-8 rounded-full hover:bg-stone-50 shadow-sm transition-all transform hover:scale-105 active:scale-95"
            whileHover={{ y: -2 }}
          >
            <FileText size={20} className="text-accent" />
            Download CV
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        id="scroll-indicator"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-mono tracking-widest uppercase mb-1">Scroll Down</span>
        <ChevronDown size={20} className="text-accent" />
      </motion.div>
    </section>
  );
}
