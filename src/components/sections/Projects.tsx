"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    title: "House Price Prediction Pipeline",
    category: "Machine Learning",
    description: "Ensemble regression pipeline (Random Forest + XGBoost) trained on 15,000+ records achieving R² = 0.89; boosted accuracy by 12% via feature engineering and hyperparameter tuning.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/Aytsam-Ullah",
  },
  {
    title: "AI-Driven Disease Diagnosis",
    category: "Artificial Intelligence",
    description: "Implemented BFS, DFS, A*, Minimax, Alpha-Beta Pruning, and Neural Networks (K-Means, Perceptron) entirely from scratch without high-level libraries.",
    tech: ["Python", "Algorithms", "Mathematics"],
    github: "https://github.com/Aytsam-Ullah",
  },
  {
    title: "Food Delivery Platform Database",
    category: "Database Architecture",
    description: "Fully normalized (3NF) Oracle relational schema with 15 entities. Engineered PL/SQL triggers for audit logging and built a custom Python web interface for CRUD operations.",
    tech: ["Oracle 11g", "SQL", "PL/SQL", "Python"],
    github: "https://github.com/Aytsam-Ullah",
  },
  {
    title: "School Management System",
    category: "Desktop Application",
    description: "Production desktop application actively used at a school for 2000+ student records. Features automated fee collection and a reports dashboard.",
    tech: ["Python", "MySQL", "Tkinter"],
    github: "https://github.com/Aytsam-Ullah",
  },
  {
    title: "Hospital Management OS",
    category: "Systems Programming",
    description: "Multi-process engine using C and Bash. Leveraged fork(), exec(), shared-memory IPC, and POSIX synchronization (mutex locks & semaphores) to prevent race conditions.",
    tech: ["C", "Bash", "Unix IPC", "Semaphores"],
    github: "https://github.com/Aytsam-Ullah",
  },
  {
    title: "Clash of Kingdoms & Atari Games",
    category: "Game Development",
    description: "Designed OOP-based games with real-time collision detection. Implemented Atari Breakout in x86 Assembly with direct screen-buffer rendering.",
    tech: ["C++", "OOP", "x86 Assembly", "Memory Mgmt"],
    github: "https://github.com/Aytsam-Ullah",
  },
  {
    title: "Gmail Clone Full-Stack Client",
    category: "Web Development",
    description: "Web-based Gmail clone utilizing the Gmail API to securely replicate core functionalities including reading inbox messages and sending emails.",
    tech: ["MERN Stack", "Gmail API", "OAuth 2.0"],
    github: "https://github.com/Aytsam-Ullah",
  }
];

export default function Projects() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-font text-4xl md:text-6xl font-bold mb-16 text-white">
          FEATURED <span className="text-accent">WORK</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative glass-card rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-500 p-8"
          >
            <div className="text-xs text-accent font-bold tracking-widest uppercase mb-4">
              {project.category}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-glow transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-white/70 mb-8 min-h-[80px]">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/90">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group/link">
                <GithubIcon className="w-5 h-5 group-hover/link:text-accent transition-colors" />
                <span>Source</span>
              </a>
            </div>
            
            {/* Hover Glitch Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
