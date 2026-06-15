/**
 * ResearchEducation.jsx — Research & Education with fixed R² rendering
 */
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { TechPill } from '../ui/TechPill';
import { cardReveal, fadeUp, viewportConfig } from '../../utils/animations';
import { RESEARCH, EDUCATION } from '../../data/portfolio';

export function ResearchEducation() {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">

      {/* ── Research Card ── */}
      <motion.section
        className="glass-card p-5 sm:p-8 relative overflow-hidden"
        variants={cardReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        whileHover={{ y: -3, boxShadow: 'var(--neuro-hover)' }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      >
        {/* Accent glow orb */}
        <div
          className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)' }}
        />

        <div className="flex items-center justify-between mb-1">
          <SectionLabel
            icon={BookOpen}
            label="Research"
            className="text-orange-400"
          />
        </div>

        <h3
          className="text-base sm:text-lg font-black mb-3 leading-tight"
          style={{
            color: 'var(--text-primary)',
            fontFamily: '"Space Grotesk", sans-serif',
          }}
        >
          {RESEARCH.title}
        </h3>

        {/* Tags — R² now renders as proper Unicode superscript */}
        <div className="flex flex-wrap gap-2 mb-4">
          {RESEARCH.tags.map(tag => (
            <TechPill key={tag.label} label={tag.label} color={tag.color} dot />
          ))}
        </div>

        {/* Description — neumorphic inset panel */}
        <div
          className="neuro-inset p-4 sm:p-5 mb-4"
        >
          <p
            className="text-sm font-medium leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {RESEARCH.description}
          </p>
        </div>

        <p
          className="font-mono-code text-[11px]"
          style={{ color: 'var(--text-muted)' }}
        >
          {RESEARCH.footer}
        </p>
      </motion.section>

      {/* ── Education Card ── */}
      <motion.section
        className="glass-card p-5 sm:p-8"
        variants={cardReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="flex items-center justify-between mb-1">
          <SectionLabel
            icon={GraduationCap}
            label="Education"
            className="text-blue-400"
          />
        </div>

        <div className="space-y-3 mt-2">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.id}
              className="p-4 sm:p-5 rounded-2xl relative overflow-hidden"
              style={{
                background: 'var(--canvas-alt)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--neuro-inset)',
              }}
              variants={fadeUp}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{
                borderColor: 'rgba(99,102,241,0.3)',
                boxShadow: 'var(--neuro-shadow)',
                y: -2,
              }}
              transition={{ duration: 0.25 }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                style={{ background: edu.accentGradient ?? 'var(--text-muted)' }}
              />

              <div className="pl-4 flex flex-col gap-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div
                    className="font-black text-sm"
                    style={{
                      color: 'var(--text-primary)',
                      fontFamily: '"Space Grotesk", sans-serif',
                    }}
                  >
                    {edu.degree}
                  </div>
                  <TechPill label={edu.badge} color={edu.badgeColor} />
                </div>
                <div
                  className="text-xs font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {edu.institution}
                </div>
                <time
                  className="text-[10px] font-bold font-mono-code"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {edu.period}
                </time>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
