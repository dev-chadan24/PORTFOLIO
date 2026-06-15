/**
 * Skills.jsx — Neumorphic skill category cards with hover lift
 */
import { motion } from 'framer-motion';
import { Code2, LayoutDashboard, Database, PenTool } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { TechPill } from '../ui/TechPill';
import { cardReveal, fadeUp, viewportConfig, scalePop } from '../../utils/animations';
import { SKILLS } from '../../data/portfolio';

const ICON_MAP = { LayoutDashboard, Database, PenTool };

export function Skills() {
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
          icon={Code2}
          label="Technical Skill Toolkit"
          className="text-violet-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        {SKILLS.map((group, idx) => {
          const Icon = ICON_MAP[group.icon];
          return (
            <motion.div
              key={group.id}
              className="p-5 rounded-2xl"
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
                y: -4,
                boxShadow: 'var(--neuro-shadow)',
                borderColor: 'var(--glass-border)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: group.bgColor,
                    border: `1px solid ${group.borderColor}`,
                  }}
                >
                  {Icon && <Icon size={15} className={group.iconColor} />}
                </div>
                <h3
                  className="text-sm font-black"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: '"Space Grotesk", sans-serif',
                  }}
                >
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    variants={scalePop}
                    custom={si}
                  >
                    <TechPill label={skill} color={group.pillColor} />
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
