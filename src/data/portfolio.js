/**
 * portfolio.js — Single source of truth for all portfolio data
 * R² fix: Using proper Unicode superscript (R²) instead of LaTeX notation
 */

export const PERSONAL = {
  name: 'Chandan Mahapatra',
  title: 'Full‑Stack Developer',
  specialisms: 'Python · React · UI/UX · SQL',
  location: 'Bhubaneswar, India',
  email: 'cmahapatra2400@gmail.com',
  github: 'https://github.com/dev-chadan24',
  linkedin: 'https://linkedin.com/in/chandan-mahapatra',
  available: true,
  bio: 'I engineer fault-tolerant systems built on <strong style="color:var(--text-primary);font-weight:700">predictable logic</strong> and zero-friction user flows. My expertise bridges <strong style="color:var(--text-primary);font-weight:700">scalable backend infrastructure</strong> with accessible, high-performance UI architectures. I prioritize clean logs, <strong style="color:var(--text-primary);font-weight:700">deterministic state</strong>, and shipping robust software that simply works.',
};

export const EXPERIENCE = [
  {
    id: 'assetmagnets',
    company: 'ASSETMAGNETS',
    role: 'Full‑Stack Software Engineering Intern',
    period: 'Feb 2026 – Present',
    year: '2026',
    yearSub: 'Present',
    location: 'On-site · Bhubaneswar',
    active: true,
    bullets: [
      {
        label: 'UI/UX & Web Scale:',
        text: 'Architected high-fidelity user-experience frameworks, translating Figma wireframes into polished, production-ready React and React Native components.',
      },
      {
        label: 'API Architecture:',
        text: 'Engineered and consumed real-time RESTful APIs — handling request/response pipelines, OAuth authentication protocols, and rigorous error handling.',
      },
      {
        label: 'State & Collaboration:',
        text: 'Orchestrated complex client-side routing, performance optimisations, and Git/GitHub collaborative workflows including branching strategies, PR reviews, and CI feedback loops.',
      },
    ],
  },
  {
    id: 'qspiders',
    company: 'QSPIDERS',
    role: 'Full‑Stack Trainee & Intern',
    period: 'Feb 2025 – Dec 2025',
    year: '2025',
    yearSub: 'Feb – Dec',
    location: '',
    active: false,
    bullets: [
      {
        label: null,
        text: 'Mastered advanced Python OOP, relational SQL database design, and automated testing principles through rigorous hands-on lab environments — covering HTML5, CSS3, and JavaScript scripting pipelines.',
      },
      {
        label: null,
        text: 'Cultivated a disciplined debugging and quality-assurance mindset, applying systematic test-driven development practices across real-world web application scenarios.',
      },
    ],
  },
];

export const SKILLS = [
  {
    id: 'frontend',
    icon: 'LayoutDashboard',
    iconColor: 'text-indigo-400',
    bgColor: 'rgba(99,102,241,0.06)',
    borderColor: 'rgba(99,102,241,0.12)',
    title: 'Frontend',
    pillColor: 'indigo',
    items: ['TypeScript', 'React.js (Hooks)', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'backend',
    icon: 'Database',
    iconColor: 'text-emerald-400',
    bgColor: 'rgba(16,185,129,0.06)',
    borderColor: 'rgba(16,185,129,0.12)',
    title: 'Backend & Databases',
    pillColor: 'emerald',
    items: ['Python (OOP)', 'FastAPI', 'Node.js', 'SQL', 'Database Design'],
  },
  {
    id: 'practices',
    icon: 'PenTool',
    iconColor: 'text-rose-400',
    bgColor: 'rgba(244,63,94,0.06)',
    borderColor: 'rgba(244,63,94,0.12)',
    title: 'Tools & Practices',
    pillColor: 'rose',
    items: ['Git & GitHub', 'Testing & Debugging', 'Wireframing', 'Figma', 'Responsive Design'],
  },
];

export const PROJECTS = [
  {
    id: 'samarth',
    label: 'Accessibility',
    labelColor: 'text-indigo-400',
    labelIcon: 'Zap',
    title: 'SAMARTH',
    gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    bullets: [
      'Engineered an Assistive Learning Platform utilising React and Python, leveraging OpenCV eye-tracking pipelines to enhance web inclusivity and digital autonomy for motor-impaired users.',
      'Architected accessible UI feedback loops with real-time computer vision integration, reducing interaction friction for users with limited mobility.',
    ],
    accentColor: 'indigo',
    pills: [
      { label: 'React', color: 'indigo' },
      { label: 'Python', color: 'blue' },
      { label: 'OpenCV', color: 'yellow' },
      { label: 'FastAPI', color: 'emerald' },
    ],
    liveUrl: 'https://github.com/dev-chadan24',
    sourceUrl: 'https://github.com/dev-chadan24',
  },
  {
    id: 'expenseso',
    label: 'Finance',
    labelColor: 'text-emerald-400',
    labelIcon: 'LayoutTemplate',
    title: 'ExpenseSO',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    bullets: [
      'Built a highly responsive React.js financial tracker with robust local-storage integration and real-time budget visualisation.',
      'Architected complex dynamic state pipelines for live charting, category breakdowns, and seamless dark/light mode theming.',
    ],
    accentColor: 'emerald',
    pills: [
      { label: 'React', color: 'emerald' },
      { label: 'JavaScript', color: 'yellow' },
      { label: 'CSS3', color: 'blue' },
      { label: 'LocalStorage', color: 'violet' },
    ],
    liveUrl: 'https://github.com/dev-chadan24',
    sourceUrl: 'https://github.com/dev-chadan24',
  },
  {
    id: 'harvestiq',
    label: 'Fintech',
    labelColor: 'text-rose-400',
    labelIcon: 'Activity',
    title: 'HarvestIQ Tax Dashboard',
    gradient: 'linear-gradient(135deg, #f43f5e, #e11d48)',
    bullets: [
      'Designed a comprehensive fintech metrics dashboard handling dense numerical tax data with precision-optimised data tables and chart visualisations.',
      'Streamlined API request pipelines, drastically reducing time-to-interactive and improving perceived performance for end-users.',
    ],
    accentColor: 'rose',
    pills: [
      { label: 'TypeScript', color: 'blue' },
      { label: 'React', color: 'indigo' },
      { label: 'REST APIs', color: 'rose' },
      { label: 'Recharts', color: 'emerald' },
    ],
    liveUrl: 'https://github.com/dev-chadan24',
    sourceUrl: 'https://github.com/dev-chadan24',
  },
];

export const RESEARCH = {
  title: 'Cracking the Transmission Curve',
  tags: [
    { label: 'Data Science Research', color: 'yellow' },
    // R² rendered as proper Unicode — no LaTeX notation
    { label: 'R\u00B2: 0.956 \u2022 RMSE: 29.85', color: 'emerald' },
  ],
  description:
    'Deployed Bayesian-optimized LightGBM leaf-wise tree frameworks against legacy additive statistical models to eliminate temporal sequence illusions in short-term smart grid demand telemetry. Successfully mapped volatile human consumption anomalies, achieving an exceptional coefficient of determination of 0.956 without relying on computationally crushing, deep hardware-dependent architectures.',
  footer: 'Co-Authored with: Soumyashree Dash, Ms. Anugnya Pravamanajari, Arjun Kumar Sahu | Srusti Academy of Management',
};

export const EDUCATION = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications',
    institution: 'Srusti Academy of Management',
    period: '2025 – 2027',
    badge: 'Ongoing · 2025–2027',
    badgeColor: 'indigo',
    accentGradient: 'linear-gradient(to bottom, #6366f1, #10b981)',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications',
    institution: 'Kalam Institute of Management Studies',
    period: '2022 – 2025',
    badge: 'CGPA 8.5 / 10',
    badgeColor: 'emerald',
    accentGradient: null,
  },
];
