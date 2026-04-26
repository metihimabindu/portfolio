import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, Code, Database, Layout, Terminal } from "lucide-react";

const skills = [
  { category: "Languages", icon: <Terminal size={20} />, items: ["Java", "Python", "C"] },
  { category: "Web Technologies", icon: <Layout size={20} />, items: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "Core CS", icon: <Code size={20} />, items: ["Data Structures", "Algorithms", "DBMS", "OOP", "Problem Solving"] },
  { category: "Databases", icon: <Database size={20} />, items: ["MySQL", "MongoDB"] },
  { category: "Tools", icon: <Award size={20} />, items: ["Git", "GitHub", "VS Code", "ServiceNow"] },
];

const education = [
  {
    institution: "Mohan Babu University",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 – Present",
    result: "CGPA: 9.45",
    icon: <BookOpen />,
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate (MPC)",
    period: "2021 – 2023",
    result: "Percentage: 98.4%",
    icon: <GraduationCap />,
  },
  {
    institution: "Ravindra Bharathi School",
    degree: "Secondary Education",
    period: "2020",
    result: "CGPA: 10",
    icon: <Award />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-accent font-mono tracking-widest uppercase mb-4 block font-bold">Personal Story</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-text-main">About Me</h2>
        <p className="text-xl text-text-soft max-w-3xl mx-auto leading-relaxed">
          Highly motivated Computer Science student aspiring to work as a Software Development Engineer (SDE). 
          Passionate about building efficient and scalable software solutions with a solid foundation 
          in programming fundamentals, problem-solving, and web development.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Skills Section */}
        <motion.div
          id="skills-section"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
              <Code size={28} />
            </div>
            <h3 className="text-3xl font-bold text-text-main">Tech Stack</h3>
          </div>

          <div className="space-y-8">
            {skills.map((skillGroup, i) => (
              <div key={skillGroup.category}>
                <div className="flex items-center gap-2 mb-4 text-accent font-mono text-sm uppercase tracking-widest font-bold">
                  {skillGroup.icon}
                  {skillGroup.category}
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 glass rounded-full text-sm border-stone-200 text-text-soft hover:border-accent/40 hover:bg-accent/5 hover:text-accent transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          id="education-section"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-3xl font-bold text-text-main">Education</h3>
          </div>

          <div className="relative border-l border-accent/20 ml-6 pl-10 space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={item.institution}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute -left-[54px] top-0 w-8 h-8 bg-white border border-accent/40 rounded-full flex items-center justify-center text-accent shadow-sm">
                  {item.icon}
                </div>
                <div className="glass-card p-6 border-stone-100">
                  <span className="text-accent font-mono text-xs mb-2 block font-bold">{item.period}</span>
                  <h4 className="text-xl font-bold mb-1 text-text-main">{item.institution}</h4>
                  <p className="text-text-soft mb-3">{item.degree}</p>
                  <span className="inline-block px-3 py-1 bg-accent/10 rounded text-accent text-sm font-bold">
                    {item.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
