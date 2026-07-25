import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/portfolioData";

const tagColors = {
  Flutter: "bg-cyan-500/15 text-cyan-300",
  "Gemini AI": "bg-blue-500/15 text-blue-300",
  API: "bg-violet-500/15 text-violet-300",
  "TMDb API": "bg-blue-500/15 text-blue-300",
  Dart: "bg-cyan-500/15 text-cyan-300",
  Firebase: "bg-orange-500/15 text-orange-300",
  Java: "bg-red-500/15 text-red-300",
  "Swing GUI": "bg-rose-500/15 text-rose-300",
  MySQL: "bg-sky-500/15 text-sky-300",
  Arduino: "bg-teal-500/15 text-teal-300",
  IoT: "bg-emerald-500/15 text-emerald-300",
  Blynk: "bg-green-500/15 text-green-300",
  Laravel: "bg-red-500/15 text-red-300",
  "Tailwind CSS": "bg-cyan-400/15 text-cyan-200",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card rounded-2xl overflow-hidden group cursor-default"
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        boxShadow: hovered
          ? "0 20px 60px rgba(124, 58, 237, 0.2)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent transition-opacity duration-300 ${
            hovered ? "opacity-90" : "opacity-0"
          }`}
        />
        {/* Category Badge */}
        <span className="absolute top-3 right-3 glass-card text-xs font-semibold text-primary px-3 py-1 rounded-full border border-primary/20">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-grotesk font-bold text-white text-lg mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                tagColors[tag] || "bg-white/10 text-white/60"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title text-white-soft">My Projects</h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm max-w-md mx-auto">
            A selection of projects I&apos;ve built — from mobile apps to IoT systems
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
