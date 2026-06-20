"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal, Cpu } from "lucide-react";

export default function About() {
  const skills = [
    { 
      name: "Languages & Tools", 
      icon: <Terminal className="w-6 h-6 text-accent" />,
      details: "Python, C++, C, x86 Assembly, MySQL, Git, VS Code, AntiGravity"
    },
    { 
      name: "Data & ML", 
      icon: <Cpu className="w-6 h-6 text-accent" />,
      details: "Neural Networks, Scikit-learn, Pandas, NumPy, Data Wrangling, EDA"
    },
    { 
      name: "OS & Systems", 
      icon: <Database className="w-6 h-6 text-accent" />,
      details: "Unix System Calls, IPC, POSIX Synchronization, Bash Scripting"
    },
    { 
      name: "Web Development", 
      icon: <Code2 className="w-6 h-6 text-accent" />,
      details: "MERN Stack, OAuth 2.0, APIs, HTML/CSS, Tailwind CSS, Next.js"
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-font text-4xl md:text-6xl font-bold mb-6 text-white">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-900">
              THE FUTURE
            </span>
          </h2>
          <div className="space-y-6 text-white/70 text-lg">
            <p>
              I am a Computer Science junior at FAST National University, blending rigorous academics with hands-on development in machine learning pipelines, system programming, and modern web architectures.
            </p>
            <p>
              My focus lies in building real-world solutions that perform flawlessly while delivering a premium user experience. I thrive on solving complex architectural challenges.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
             <div className="glass px-6 py-4 rounded-lg flex flex-col">
                <span className="text-3xl font-black heading-font text-white text-glow">3.6</span>
                <span className="text-xs text-white/50 tracking-wider">CGPA</span>
             </div>
             <div className="glass px-6 py-4 rounded-lg flex flex-col">
                <span className="text-3xl font-black heading-font text-white text-glow">20+</span>
                <span className="text-xs text-white/50 tracking-wider">PROJECTS</span>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl flex flex-col items-start justify-start gap-3 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-accent/20 p-3 rounded-lg">
                {skill.icon}
              </div>
              <h3 className="font-bold text-white tracking-wide text-lg">{skill.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{skill.details}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
