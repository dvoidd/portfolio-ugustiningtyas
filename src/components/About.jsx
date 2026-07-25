import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, education, experiences } from "../data/portfolioData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function TimelineList({ items, isExperience }) {
  return (
    <ul className="space-y-6 relative pl-7">
      {/* Vertical line */}
      <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
      {items.map((item, i) => (
        <li key={i} className="relative">
          {/* Dot */}
          <span className="absolute -left-7 top-1 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-primary-light to-primary border-2 border-background shadow-[0_0_8px_rgba(167,139,250,0.5)]" />
          <p className="text-xs text-primary/80 font-semibold tracking-wider uppercase mb-1">
            {isExperience ? item.period : item.period}
          </p>
          <p className="text-white font-semibold text-sm">
            {isExperience ? item.company : item.institution}
          </p>
          <p className="text-white/50 text-sm mt-0.5">
            {isExperience ? item.role : item.field}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white-soft">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Bio + Image */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center gap-12 mb-16"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="md:w-[280px] flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-violet-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <img
                src={personalInfo.aboutImage}
                alt="About Ugustiningtyas"
                className="relative w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div variants={itemVariants} className="flex-1">
            <h3 className="font-grotesk font-bold text-2xl text-white mb-4">
              Passionate about building things that{" "}
              <span className="gradient-text">matter</span>
            </h3>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              Hello everyone, I&apos;m{" "}
              <span className="text-primary font-semibold">
                {personalInfo.fullName}
              </span>
              , an undergraduate Computer Engineering student at Universitas
              Negeri Makassar. I&apos;m enthusiastic and highly motivated in the
              field of technology. I have broad curiosity and enjoy exploring new
              things.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Currently, I&apos;m focusing on{" "}
              <span className="text-white font-medium">Flutter Development</span>{" "}
              and the{" "}
              <span className="text-white font-medium">
                Internet of Things (IoT)
              </span>
              , building cross-platform apps and connected hardware systems.
            </p>

            {/* Quick Facts */}
            <div className="flex flex-wrap gap-3">
              {[
                { emoji: "🎓", text: "Computer Engineering" },
                { emoji: "📍", text: "Makassar, Indonesia" },
                { emoji: "📱", text: "Flutter Dev" },
                { emoji: "🔌", text: "IoT Engineer" },
              ].map(({ emoji, text }) => (
                <span
                  key={text}
                  className="glass-card text-white/70 text-sm px-4 py-2 rounded-full border border-primary/15"
                >
                  {emoji} {text}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education & Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Education */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="font-grotesk font-bold text-xl text-white">
                Education
              </h3>
            </div>
            <TimelineList items={education} isExperience={false} />
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-grotesk font-bold text-xl text-white">
                Experience
              </h3>
            </div>
            <TimelineList items={experiences} isExperience={true} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
