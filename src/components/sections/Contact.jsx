/**
 * Contact.jsx — Premium CTA banner with glassmorphic gradient overlay
 */
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { cardReveal } from '../../utils/animations';
import { PERSONAL } from '../../data/portfolio';

export function Contact() {
  return (
    <motion.section
      className="relative overflow-hidden rounded-[1.75rem]"
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ scale: 1.005 }}
      transition={{ type: 'spring', stiffness: 200, damping: 28 }}
    >
      {/* Gradient background — theme-adaptive */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 35%, #0ea5e9 65%, #10b981 100%)',
        }}
      />
      {/* Glass overlay sheen */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0,0,0,0.18)',
          backdropFilter: 'blur(2px)',
        }}
      />
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />


      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 py-10 px-8 sm:px-12">
        {/* Copy */}
        <div className="space-y-3 text-center sm:text-left max-w-lg">
          <div className="inline-flex items-center gap-2 text-white/80 text-[10px] font-black uppercase tracking-[0.22em] mb-1">
            <Sparkles size={12} className="text-white/70" />
            Currently Available
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
            style={{ fontFamily: '"DM Serif Display", serif', fontWeight: 400 }}
          >
            Let's build something great.
          </h2>
          <p className="text-white/80 font-medium text-sm sm:text-base leading-relaxed max-w-md">
            Actively seeking opportunities to bring my technical expertise to a forward-thinking team.
            Whether it's a rigorous internship or a collaborative project — let's talk.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-4 shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
          <MagneticButton
            href={`mailto:${PERSONAL.email}?subject=Let's%20Build%20Something%20Great&body=Hi%20Chandan,`}
            ariaLabel="Send email"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-black text-sm shadow-xl"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            <Send size={15} />
            Drop an Email
          </MagneticButton>

          <div className="flex items-center gap-3">
            <MagneticButton
              href={PERSONAL.linkedin}
              ariaLabel="Connect on LinkedIn"
              className="p-4 rounded-full text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 transition-colors"
            >
              <LinkedinIcon size={20} />
            </MagneticButton>
            <MagneticButton
              href={PERSONAL.github}
              ariaLabel="View GitHub"
              className="p-4 rounded-full text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 transition-colors"
            >
              <GithubIcon size={20} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
