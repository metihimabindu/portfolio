import { motion } from "motion/react";
import { Send, Linkedin, Github, Mail, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto text-text-main">
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-accent font-mono tracking-widest uppercase mb-4 block font-bold">Get In Touch</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Reach Out</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact info */}
        <div>
           <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-6">Let's connect!</h3>
              <p className="text-text-soft text-lg leading-relaxed max-w-md">
                 I'm always open to discussing new opportunities, collaborations, or just a coffee chat about tech.
              </p>

              <div className="space-y-6 pt-10">
                 <a href="mailto:metihimabindu@gmail.com" className="flex items-center gap-4 group w-fit">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                       <Mail size={24} />
                    </div>
                    <div>
                       <p className="text-sm font-mono uppercase tracking-widest text-text-soft">Email Me</p>
                       <p className="text-xl font-bold">metihimabindu@gmail.com</p>
                    </div>
                 </a>

                 <a href="tel:+917396378003" className="flex items-center gap-4 group w-fit">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                       <Phone size={24} />
                    </div>
                    <div>
                       <p className="text-sm font-mono uppercase tracking-widest text-text-soft">Call Me</p>
                       <p className="text-xl font-bold">+91 7396378003</p>
                    </div>
                 </a>
              </div>

              <div className="flex gap-4 pt-10">
                 {[
                    { icon: <Linkedin />, name: "LinkedIn", url: "https://linkedin.com/in/himabindu-meti" },
                    { icon: <Github />, name: "GitHub", url: "https://github.com/metihimabindu" },
                    { icon: <ExternalLink />, name: "LeetCode", url: "https://leetcode.com/himabindumeti" },
                 ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 glass border-stone-200 flex items-center justify-center rounded-xl text-text-soft hover:text-accent hover:border-accent/40 transition-all font-bold"
                      whileHover={{ y: -5 }}
                      aria-label={social.name}
                    >
                       {social.icon}
                    </motion.a>
                 ))}
              </div>
           </div>
        </div>

        {/* Form */}
        <motion.div
           className="glass-card p-10 border-stone-200"
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                 <label className="text-sm font-mono tracking-widest uppercase text-text-soft">Your Name</label>
                 <input 
                   type="text" 
                   className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 outline-none focus:border-accent/40 transition-colors text-text-main"
                   placeholder="Hima Bindu"
                 />
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-mono tracking-widest uppercase text-text-soft">Your Email</label>
                 <input 
                   type="email" 
                   className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 outline-none focus:border-accent/40 transition-colors text-text-main"
                   placeholder="meti@example.com"
                 />
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-mono tracking-widest uppercase text-text-soft">Message</label>
                 <textarea 
                   rows={5}
                   className="w-full bg-stone-50 border border-stone-200 rounded-xl px-6 py-4 outline-none focus:border-accent/40 transition-colors resize-none text-text-main"
                   placeholder="Hi Hima, I saw your portfolio and..."
                 />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-accent text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-accent-hover shadow-lg shadow-accent/20 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                 <Send size={18} />
                 Send Message
              </motion.button>
           </form>
        </motion.div>
      </div>
    </section>
  );
}
