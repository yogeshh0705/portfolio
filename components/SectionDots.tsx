'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionDots() {
  const [active, setActive] = useState('top');

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-3"
          aria-current={active === s.id}
        >
          <span className="pointer-events-none whitespace-nowrap rounded-full border border-white/10 bg-ink/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-300 opacity-0 transition-opacity group-hover:opacity-100">
            {s.label}
          </span>
          <span
            className={`h-2 w-2 rounded-full border transition-all ${
              active === s.id
                ? 'scale-125 border-brand bg-brand'
                : 'border-white/30 bg-transparent group-hover:border-white/60'
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
