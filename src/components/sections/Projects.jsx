/**
 * Projects.jsx — Glass project cards with 3D spatial scrolling
 */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Zap, LayoutTemplate, Activity, ExternalLink } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { TechPill } from '../ui/TechPill';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon } from '../ui/Icons';
import { cardReveal, viewportConfig } from '../../utils/animations';
import { PROJECTS } from '../../data/portfolio';

const ICON_MAP = { Zap, LayoutTemplate, Activity };

function ProjectCard({ project }) {
  const ref = useRef(null);
  const Icon = ICON_MAP[project.labelIcon] || Zap;

  // Track the card's position in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"] // Starts when top of element hits bottom of viewport, ends when bottom hits top
  });

  // Spatial scroll transforms
  // rotateX: 15deg (entering from bottom) -> 0deg (center) -> -15deg (leaving top)
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  // scale: 0.92 (entering) -> 1 (center) -> 0.92 (leaving)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  
  return (
    <motion.div
      ref={ref}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.section
        className="glass-card flex flex-col overflow-hidden h-full"
        style={{
          rotateX,
          scale,
        }}
        variants={cardReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        whileHover={{ y: -5, boxShadow: 'var(--neuro-hover)' }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      >
        {/* Gradient accent band */}
        <div
          className="h-1.5 w-full shrink-0"
          style={{ background: project.gradient }}
        />

        <div className="p-5 sm:p-7 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-4">
            <SectionLabel
              icon={Icon}
              label={project.label}
              className={`${project.labelColor} mb-0`}
            />
          </div>

          <h3
            className="text-lg sm:text-xl font-black mb-3 tracking-tight"
            style={{
              color: 'var(--text-primary)',
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            {project.title}
          </h3>

          <ul className="space-y-2.5 mb-5 flex-1">
            {project.bullets.map((text, bi) => (
              <li
                key={bi}
                className="flex gap-2 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className={`${project.labelColor} mt-0.5 shrink-0 text-xs`}>▸</span>
                {text}
              </li>
            ))}
          </ul>

          {/* Tech pills */}
          <div className="mb-5">
            <p className="section-label mb-2.5" style={{ color: 'var(--text-muted)' }}>
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.pills.map(pill => (
                <TechPill key={pill.label} label={pill.label} color={pill.color} dot />
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2.5 mt-auto">
            <MagneticButton
              href={project.liveUrl}
              className="flex-1 flex items-center justify-center gap-1.5 text-white text-xs font-bold px-4 py-2.5 rounded-xl"
              style={{ background: project.gradient, fontFamily: '"Space Grotesk", sans-serif' }}
            >
              <ExternalLink size={12} /> Live Demo
            </MagneticButton>
            <MagneticButton
              href={project.sourceUrl}
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl"
              style={{
                background: 'var(--canvas-alt)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)',
                boxShadow: 'var(--neuro-inset)',
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              <GithubIcon size={12} /> Source Code
            </MagneticButton>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export function Projects() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0"
            style={{
              background: 'var(--canvas-alt)',
              border: '1px solid var(--card-border)',
              boxShadow: 'var(--neuro-inset)',
            }}
          >
            <Zap size={14} className="text-yellow-400" />
          </span>
          <span className="section-label" style={{ color: 'var(--text-muted)' }}>
            Featured Projects
          </span>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
