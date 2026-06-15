# Portfolio Design System — Plan & Update Log

## Developer Profile
- Name: Chandan Mahapatra
- Location: Jeypore, Koraput, Odisha, India
- Current Status: MCA student seeking 45–60 day summer internship
- Reach Out: cmahapatra2400@gmail.com · github.com/dev-chadan24 · linkedin.com/in/chandan-mahapatra
- Engineering Toolkit: Python, JavaScript, HTML5/CSS3, React, Bootstrap, MySQL, NumPy/Pandas, Git, VS Code

---

## Design Philosophy

### Design Paradigms Applied
1. **Neumorphism** — Dual-shadow depth system. Dark mode: `8px 8px 20px rgba(0,0,0,0.7), -4px -4px 12px rgba(255,255,255,0.025)`. Light mode: `8px 8px 20px #c5c9d6, -5px -5px 14px #ffffff`. Cards appear physically extruded from their canvas.
2. **Glassmorphism** — Semi-transparent card backgrounds with `backdrop-filter: blur(20px) saturate(160%)`. Inner glass sheen via `::before` linear-gradient. Top rim catch-light via `::after`.
3. **Bold Typography** — DM Serif Display (hero name), Playfair Display (editorial headings), Space Grotesk (UI labels/buttons), Inter (body), JetBrains Mono (code/footer).
4. **Flat Design** — Section coord tags (§01–§07), clean uppercase tracking labels, no excessive decoration.
5. **Animation / Motion as UI** — Framer Motion throughout: blur-in fadeUp, spring cardReveal, scalePop for pills, parallax blobs, AnimatePresence icon swap in ThemeToggle.

---

## Layout & Grid Structure
- Component Architecture: Single max-w-5xl glass card container with inner section spacing. Cards use border-radius: 24px over neumorphic shadow canvas.
- Navigation: Fixed floating pill navbar (centered), frosted glass, pulsing emerald status beacon, "Let's Connect" CTA button.
- Section Coordinates: Each section prefixed with §01–§07 coord tags (JetBrains Mono).
- Micro-Interactions: hover lift (y: -4px), box-shadow transition, border-color glow, scale spring on pills.
- Future Beacon: Represented by the "More Innovations Loading..." pattern via the existing Projects grid.

---

## Palette & Color System

### Dark Theme (`:root.dark`)
| Token | Value |
|---|---|
| `--canvas` | `#0e0e14` |
| `--canvas-alt` | `#12121a` |
| `--card-bg` | `rgba(22,22,34,0.85)` |
| `--text-primary` | `#f0f0f8` |
| `--text-secondary` | `#9090a8` |
| `--text-accent` | `#a5b4fc` |
| `--accent` | `#6366f1` |
| `--emerald` | `#10b981` |

### Light Theme (`:root.light`)
| Token | Value |
|---|---|
| `--canvas` | `#edf0f7` (exact mid-tone for neumorphism) |
| `--canvas-alt` | `#e8ecf4` |
| `--card-bg` | `rgba(237,240,247,0.92)` |
| `--text-primary` | `#1a1a2e` |
| `--text-secondary` | `#4a4a6a` |
| `--text-accent` | `#4f46e5` |
| `--accent` | `#4f46e5` |
| `--emerald` | `#059669` |

---

## Typography Scale
- **Hero Name**: DM Serif Display · `clamp(2.8rem, 6vw, 5rem)` · weight 400 · tracking -0.015em
- **Section Labels**: Space Grotesk · 10px · weight 700 · tracking 0.22em · UPPERCASE
- **Body**: Inter · 14–15px · weight 500 · line-height 1.85
- **Code / Footer**: JetBrains Mono · 10–11px · weight 400–500
- **Buttons / Pills**: Space Grotesk · 11–13px · weight 700

---

## Animation System (`src/utils/animations.js`)
| Variant | Use Case |
|---|---|
| `fadeUp` | General child entrance with blur(6px) → clear |
| `cardReveal` | Section card scroll reveal (scale 0.97 → 1) |
| `scalePop` | Skill pills, badges |
| `staggerContainer` | Parent orchestration |
| `slideInLeft/Right` | Horizontal slide-ins |
| `fadeIn` | Pure opacity reveals |

Spring config: `stiffness: 260, damping: 28, mass: 0.8`

---

## Bug Fixes Applied
- **R² tag**: Changed `'$R^2$: 0.956 | RMSE: 29.85'` (broken LaTeX) → `'R²: 0.956 • RMSE: 29.85'` (Unicode U+00B2 superscript + U+2022 bullet) in `src/data/portfolio.js`.
- **ThemeToggle import**: Created `src/components/layout/ThemeToggle.jsx` (was missing, causing `[plugin:vite:import-analysis]` crash).
- **useScrolled**: Fixed import path in Navbar.jsx (`../../hooks/useScrolled`).
- **Bio HTML**: Updated `PERSONAL.bio` to use CSS variable inline styles instead of hardcoded `text-white` (works in both themes).
- **Emoji removal**: All native emojis replaced with lucide-react SVG icons.

---

## File Manifest (Modified / Created)

| File | Change |
|---|---|
| `src/index.css` | Complete rewrite — dual neumorphic/glass CSS variable system, 4 font families, coord tags, glass-card/neuro-inset classes |
| `src/utils/animations.js` | Rewrite — premium spring library with blur-in, scalePop, slideIn, stagger |
| `src/data/portfolio.js` | R² Unicode fix, bio theme-safe inline styles |
| `src/App.jsx` | CSS-variable background, motion entrance, Lenis 1.3s scroll |
| `src/components/layout/ThemeToggle.jsx` | Created — AnimatePresence icon swap, glow ring, spring spring |
| `src/components/layout/Navbar.jsx` | Pill-shaped frosted glass, status beacon, CTA button |
| `src/components/layout/SplashScreen.jsx` | Cinematic blur-in, ambient glow, progress bar |
| `src/components/layout/Footer.jsx` | Monospace tech stack line |
| `src/components/ui/FluidBackground.jsx` | Separate dark/light blob configs, 52px blur |
| `src/components/ui/SectionLabel.jsx` | Neumorphic icon box, Space Grotesk label |
| `src/components/sections/Hero.jsx` | DM Serif name, neumorphic inset bio, coord tag |
| `src/components/sections/Experience.jsx` | Neumorphic cards, pulsing active dot, coord tag |
| `src/components/sections/Skills.jsx` | Neumorphic group cards, icon boxes, scalePop pills |
| `src/components/sections/Projects.jsx` | Gradient header bands, glass cards, coord tag |
| `src/components/sections/ResearchEducation.jsx` | Fixed R² tag, neumorphic inset description panel |
| `src/components/sections/Contact.jsx` | Glassmorphic gradient banner, DM Serif headline |

---

## Build Status
- `npm run build` → ✅ 0 errors · 2163 modules · built in 2.00s
- Dev server: `npm run dev` → http://localhost:5174