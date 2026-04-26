/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffect from "./components/BackgroundEffect";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-hidden">
      {/* Background and UI Overlay */}
      <BackgroundEffect />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-[0%]"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        
        {/* Animated Divider */}
        <div className="max-w-7xl mx-auto px-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <About />
        
        <div className="max-w-7xl mx-auto px-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <Projects />
        
        <div className="max-w-7xl mx-auto px-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <Experience />
        
        <div className="max-w-7xl mx-auto px-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

