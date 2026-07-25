import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="section-title text-white-soft">My Skills</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-sm mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.05 + i * 0.06, duration: 0.45, ease: "easeOut" }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="skill-card flex flex-col items-center gap-3 cursor-default place-self-center"
            >
              {/* Icon Box */}
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  hoveredSkill === skill.name
                    ? "bg-primary shadow-primary/30 scale-110"
                    : "bg-accent"
                }`}
              >
                {skill.img ? (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-12 h-5 object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                ) : (
                  <div
                    className="w-12 h-12"
                    dangerouslySetInnerHTML={{ __html: skill.svg }}
                  />
                )}
              </div>
              {/* Name */}
              <span
                className={`text-sm font-medium transition-all duration-200 ${
                  hoveredSkill === skill.name ? "text-white" : "text-white/50"
                }`}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
