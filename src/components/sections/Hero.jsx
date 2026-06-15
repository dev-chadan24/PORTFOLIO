/**
 * Hero.jsx — Bold editorial hero with neumorphic inset details
 */
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { TechPill } from '../ui/TechPill';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { PERSONAL } from '../../data/portfolio';

export function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-7 relative z-10">

        {/* Profile location */}
        <motion.div variants={fadeUp} custom={0} className="flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold"
            style={{
              background: 'var(--canvas-alt)',
              border: '1px solid var(--card-border)',
              color: 'var(--text-secondary)',
              boxShadow: 'var(--neuro-inset)',
            }}
          >
            <MapPin size={11} style={{ color: 'var(--emerald)' }} />
            {PERSONAL.location}
          </span>
          {PERSONAL.available && (
            <TechPill label="Open to Work" color="emerald" dot />
          )}
        </motion.div>

        {/* Name — bold display typography */}
        <motion.div variants={fadeUp} custom={1}>
          <h1
            className="text-hero"
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              letterSpacing: '-0.015em',
              lineHeight: 1.05,
              marginBottom: '0.6rem',
            }}
          >
            Chandan{' '}
            <span className="gradient-text">Mahapatra</span>
          </h1>
          <p
            className="text-sm sm:text-base font-semibold"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: '"Space Grotesk", sans-serif',
              letterSpacing: '0.015em',
            }}
          >
            {PERSONAL.title}
            <span className="mx-2 opacity-25">|</span>
            {PERSONAL.specialisms}
          </p>
        </motion.div>

        {/* Bio — neumorphic inset panel */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="neuro-inset p-5 sm:p-6"
        >
          <p
            className="text-sm sm:text-[15px] leading-[1.85] font-medium"
            style={{ color: 'var(--text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: PERSONAL.bio }}
          />
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="flex flex-wrap items-center gap-2.5"
        >
          <MagneticButton
            href={`mailto:${PERSONAL.email}`}
            ariaLabel="Send Email"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold"
            style={{
              background: 'var(--canvas-alt)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--neuro-shadow)',
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            <Mail size={13} style={{ color: 'var(--emerald)' }} />
            Email
          </MagneticButton>

          <MagneticButton
            href={PERSONAL.github}
            ariaLabel="GitHub Profile"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold"
            style={{
              background: 'var(--canvas-alt)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--neuro-shadow)',
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            <GithubIcon size={13} />
            GitHub
          </MagneticButton>

          <MagneticButton
            href={PERSONAL.linkedin}
            ariaLabel="LinkedIn Profile"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold"
            style={{
              background: 'var(--canvas-alt)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              boxShadow: 'var(--neuro-shadow)',
              fontFamily: '"Space Grotesk", sans-serif',
            }}
          >
            <LinkedinIcon size={13} />
            LinkedIn
          </MagneticButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
