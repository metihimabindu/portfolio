import { motion } from "motion/react";
import { Briefcase, Award, Trophy, CheckCircle2, Languages } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-accent font-mono tracking-widest uppercase mb-4 block font-bold">Proven Experience</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-text-main">Career & Certifications</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 text-text-main">
        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
              <Briefcase size={28} />
            </div>
            <h3 className="text-3xl font-bold">Internships</h3>
          </div>

          <motion.div
            className="glass-card p-8 border-l-4 border-accent border-stone-200"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-2xl font-bold">Frontend Developer</h4>
                <p className="text-accent font-mono font-bold">Repo (@Sheverse)</p>
              </div>
              <span className="text-text-soft font-mono text-sm">Feb 2025 – Mar 2025</span>
            </div>
            <ul className="space-y-4 text-text-soft">
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                <span>Focused on web development in a practical internship applied theoretical knowledge to real-world projects.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                <span>Developed an e-commerce website collaborating on design, coding, and testing of features.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                <span>Mastered HTML, CSS, JavaScript, and Git proficiency through hands-on project work.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Certifications & Achievements */}
        <div className="space-y-12">
          {/* Certs */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                <Award size={28} />
              </div>
              <h3 className="text-3xl font-bold">Certifications</h3>
            </div>

            <div className="grid gap-6">
               <motion.div 
                 className="glass flex items-center gap-6 p-6 rounded-2xl border-stone-200 hover:bg-accent/5 transition-colors"
                 whileHover={{ x: 10 }}
               >
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 border border-accent/20">
                     <Award className="text-accent" size={32} />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg">ServiceNow Certified System Administrator (CSA)</h4>
                     <p className="text-sm text-text-soft font-mono italic">Issued 2026</p>
                  </div>
               </motion.div>

               <motion.div 
                 className="glass flex items-center gap-6 p-6 rounded-2xl border-stone-200 hover:bg-accent/5 transition-colors"
                 whileHover={{ x: 10 }}
               >
                  <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 border border-blue-500/20">
                     <Languages className="text-blue-500" size={32} />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg">STEP (English Profession)</h4>
                     <p className="text-sm text-text-soft font-mono">Communication & Presentation</p>
                  </div>
               </motion.div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                <Trophy size={28} />
              </div>
              <h3 className="text-3xl font-bold">Achievements</h3>
            </div>

            <motion.div 
              className="glass p-8 rounded-2xl border-l-4 border-yellow-400 border-stone-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-2">Hackathon Grand Finalist — Code Rush</h4>
              <p className="text-text-soft">
                Grand Finalist for developing <span className="text-accent underline font-bold">Quick Ride</span>, a student-exclusive travel app focused on affordable transportation and user accessibility.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
