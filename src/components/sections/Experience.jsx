/**
 * Experience.jsx — Timeline with neumorphic cards and glassmorphic details
 */
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { cardReveal, fadeUp, viewportConfig } from '../../utils/animations';
import { EXPERIENCE } from '../../data/portfolio';

export function Experience() {
  return (
    <motion.section
      className="glass-card p-6 sm:p-8"
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="flex items-center justify-between mb-1">
        <SectionLabel
          icon={Briefcase}
          label="Professional Experience"
          className="text-indigo-400"
        />
      </div>

      <div className="relative space-y-6 sm:space-y-8 mt-2">
        {/* Timeline vertical line */}
        <div
          className="absolute left-0 sm:left-[5.5rem] top-4 bottom-4 w-px hidden sm:block"
          style={{
            background: `linear-gradient(to bottom, var(--emerald) 0%, var(--card-border) 100%)`,
          }}
        />

        {EXPERIENCE.map((job, idx) => (
          <motion.div
            key={job.id}
            className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-6"
            variants={fadeUp}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Date column */}
            <div className="hidden sm:flex flex-col items-end w-20 pt-1 shrink-0">
              <span
                className="text-xs font-black"
                style={{ color: 'var(--text-secondary)', fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {job.year}
              </span>
              <span className="text-[10px] font-medium" style={{ color: 'var(--text-muted)' }}>
                {job.yearSub}
              </span>
            </div>

            {/* Timeline dot */}
            <motion.div
              className="hidden sm:flex absolute left-[5.5rem] w-4 h-4 rounded-full mt-1 -translate-x-1/2 z-10 border-2"
              style={{
                background: job.active ? 'var(--emerald)' : 'var(--text-muted)',
                borderColor: 'var(--canvas)',
                boxShadow: job.active ? '0 0 0 5px var(--emerald-glow)' : 'none',
              }}
              animate={job.active ? { scale: [1, 1.15, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Card */}
            <motion.div
              className="flex-1 sm:ml-2 p-5 sm:p-6 rounded-2xl w-full"
              style={{
                background: 'var(--canvas-alt)',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--neuro-inset)',
                backdropFilter: 'blur(12px)',
              }}
              whileHover={{
                borderColor: job.active ? 'rgba(16,185,129,0.35)' : 'rgba(99,102,241,0.25)',
                boxShadow: 'var(--neuro-hover)',
                y: -2,
              }}
              transition={{ duration: 0.25 }}
            >
              {/* Mobile period */}
              <div className="flex sm:hidden items-center gap-2 mb-2.5">
                <span
                  className="text-[10px] font-black px-2.5 py-1 rounded-full"
                  style={{
                    background: job.active ? 'rgba(16,185,129,0.1)' : 'var(--canvas)',
                    color: job.active ? 'var(--emerald)' : 'var(--text-muted)',
                    border: `1px solid ${job.active ? 'rgba(16,185,129,0.2)' : 'var(--card-border)'}`,
                  }}
                >
                  {job.period}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                <h3
                  className="font-black text-base tracking-tight"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                >
                  {job.company}
                </h3>
                <span
                  className="text-[11px] font-bold px-3 py-1 rounded-lg border w-max shrink-0"
                  style={job.active ? {
                    color: 'var(--emerald)',
                    background: 'rgba(16,185,129,0.08)',
                    borderColor: 'rgba(16,185,129,0.2)',
                  } : {
                    background: 'var(--canvas)',
                    borderColor: 'var(--card-border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {job.role}
                </span>
              </div>

              {job.location && (
                <p
                  className="text-xs font-semibold mb-4"
                  style={{ color: 'var(--text-muted)', fontFamily: '"JetBrains Mono", monospace' }}
                >
                  {job.location}
                </p>
              )}

              <ul className="space-y-3">
                {job.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex gap-2.5 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <span
                      className="mt-[3px] shrink-0 text-xs font-black"
                      style={{ color: job.active ? 'var(--emerald)' : 'var(--text-muted)' }}
                    >
                      ▸
                    </span>
                    <span>
                      {b.label && (
                        <strong
                          className="font-bold"
                          style={{ color: 'var(--text-primary)', fontFamily: '"Space Grotesk", sans-serif' }}
                        >
                          {b.label}{' '}
                        </strong>
                      )}
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
