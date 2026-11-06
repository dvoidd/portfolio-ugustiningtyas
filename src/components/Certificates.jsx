import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certificates } from "../data/portfolioData";
import { getImageUrl } from "../utils/assets";

// Duplicate for seamless infinite scroll
const doubled = [...certificates, ...certificates];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certificates" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-14" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title text-white-soft">Certificates</h2>
          <div className="section-divider" />
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Hover to pause · Verified credentials from leading platforms
          </p>
        </motion.div>
      </div>

      {/* Scroll Track */}
      <div className="scrolling-container">
        <div className="scrolling-track">
          {doubled.map((cert, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] glass-card rounded-2xl p-5 mx-3 group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-4 bg-white/5">
                <img
                  src={getImageUrl(cert.image)}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Info */}
              <h3 className="font-semibold text-white text-sm leading-snug mb-1 line-clamp-2">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <p className="text-white/40 text-xs">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
