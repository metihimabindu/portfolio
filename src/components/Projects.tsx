import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Layers, ListTodo, GraduationCap, X, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "sheverse",
    title: "Sheverse",
    description: "Built a full-stack e-commerce web application using HTML, CSS, JavaScript, and React with dynamic product listings, reusable components, and responsive layouts. Focused on clean UI design, optimized front-end performance, and enhanced user experience.",
    tech: ["React", "JavaScript", "HTML", "CSS", "E-commerce"],
    icon: <Layers className="text-accent" />,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/metihimabindu/Sheverse-project",
    fullDetails: "This project showcases a complete shopping experience with features like product filtering, a shopping cart, and a responsive checkout flow. The frontend is built with React, leveraging state management for a seamless user journey. Performance was optimized using code-splitting and asset minification."
  },
  {
    id: "hackfusion",
    title: "LMS HackFusion",
    description: "Developed a web-based Learning Management System (LMS) to manage courses, student enrollment, and structured online learning workflows. Applied software development lifecycle concepts including requirement analysis, development, testing, and deployment.",
    tech: ["Web Tech", "LMS", "DBMS", "SDLC"],
    icon: <GraduationCap className="text-accent" />,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/metihimabindu/Lms-project",
    fullDetails: "HackFusion LMS provides a robust platform for educators and students. It includes role-based access control, course management, and progress tracking. The system was designed with a focus on scalability and intuitive navigation, ensuring a positive learning environment."
  },
  {
    id: "todo-list",
    title: "TODO-List",
    description: "Designed a dynamic TODO-List web app using HTML, CSS, and JavaScript enabling users to create, manage, and track daily tasks. Implemented CRUD operations using JavaScript DOM manipulation and event handling.",
    tech: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    icon: <ListTodo className="text-accent" />,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/metihimabindu/todo_list",
    fullDetails: "A high-performance productivity tool that allows users to organize their daily life. Features include task prioritization, categories, and browser local storage persistence. The UI is minimalist and focused on reducing distractions while managing complex task lists."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-accent font-mono tracking-widest uppercase mb-4 block font-bold">Recent Work</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-text-main">Projects</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            id={`project-card-${project.id}`}
            className="glass-card flex flex-col group h-full relative overflow-hidden text-text-main border-stone-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="p-8 flex flex-col h-full relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all shrink-0">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
              </div>
              
              <p className="text-text-soft mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-widest bg-stone-100 border border-stone-200 px-3 py-1 rounded-full text-text-soft">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-stone-100">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-hover transition-colors cursor-pointer"
                >
                  <ExternalLink size={16} />
                  Details
                </button>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-text-soft hover:text-text-main transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>

            <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-2xl transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            <motion.div 
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors text-stone-700"
              >
                <X size={20} />
              </button>

              <div className="md:w-1/2 relative bg-stone-100 overflow-hidden min-h-[300px]">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-text-main">{selectedProject.title}</h3>
                    <p className="text-accent font-mono text-xs uppercase tracking-tighter mt-1 font-semibold">Featured Project</p>
                  </div>
                </div>

                <div className="prose prose-stone mb-8">
                  <p className="text-text-soft leading-relaxed">
                    {selectedProject.fullDetails}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-text-main mb-3 uppercase tracking-widest flex items-center gap-2">
                       <ChevronRight size={14} className="text-accent" />
                       Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono uppercase tracking-widest bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-lg text-text-soft font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-stone-100 flex gap-4">
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-accent text-white py-4 px-6 rounded-2xl font-bold text-center hover:bg-accent-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                    >
                      <Github size={18} />
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
