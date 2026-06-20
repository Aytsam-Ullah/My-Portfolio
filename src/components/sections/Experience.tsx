"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024 - Present",
    title: "B.S. Computer Science",
    company: "FAST NUCES",
    description: "Currently in 4th Semester with a CGPA of 3.6/4.0. Core coursework includes Data Structures, Algorithms, OOP, Operating Systems, Database Systems, and AI.",
  },
  {
    year: "2024 - 2026",
    title: "Dean's List Honoree",
    company: "FAST NUCES",
    description: "Recognized for exceptional academic performance by earning a CGPA of 3.5+ in Semesters 1, 2, and 4.",
  },
  {
    year: "2026",
    title: "Certifications",
    company: "Coursera",
    description: "Completed 'Data Analysis with Python' (IBM) and 'AI/ML Specialization' (Stanford University).",
    links: [
      { text: "Data Analysis (IBM) Certificate", url: "https://coursera.org/share/af7d7df833ff453e3116ec5237179db5" },
      { text: "AI/ML (Stanford) Certificate", url: "https://coursera.org/share/6b2b22aef1c35c1020ace5896e39d0e1" }
    ]
  },
  {
    year: "2025",
    title: "Runner-Up",
    company: "FAST Vib-e-Thon",
    description: "Secured runner-up position among 50+ competing teams in a university-wide innovation hackathon.",
  },
  {
    year: "2025",
    title: "Certified Participant",
    company: "FAST AI Hackathon",
    description: "Designed and delivered an AI-powered prototype under a 24-hour constraint, demonstrating applied ML skills.",
  }
];

export default function Experience() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-font text-4xl md:text-6xl font-bold mb-16 text-white text-right">
          THE <span className="text-accent">JOURNEY</span>
        </h2>
      </motion.div>

      <div className="relative border-l border-white/20 ml-4 md:ml-12 pl-8 md:pl-12 space-y-16">
        {timeline.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-accent text-glow shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
            
            <span className="text-accent text-sm font-bold tracking-widest">{item.year}</span>
            <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>
            <h4 className="text-lg text-white/50 mb-4">{item.company}</h4>
            <p className="text-white/60 leading-relaxed max-w-xl">
              {item.description}
            </p>

            {/* Render Links if they exist */}
            {item.links && (
              <div className="flex flex-wrap gap-4 mt-4">
                {item.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 bg-white/5 border border-white/10 rounded-full hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
