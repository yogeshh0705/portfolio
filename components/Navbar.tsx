'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/data/portfolio';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold text-white">
          {profile.name}
          <span className="text-brand">.</span>
        </a>

        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-slate-400 sm:flex">
          {links.map((link, i) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-brand">
                <span className="text-white/20">{String(i + 1).padStart(2, '0')}·</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          className="hidden rounded-full border border-brand/40 px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand/10 sm:inline-block"
        >
          Resume
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white sm:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink px-6 pb-6 sm:hidden">
          <ul className="flex flex-col gap-4 pt-4 text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                className="inline-block rounded-full border border-brand/40 px-4 py-2 text-sm font-semibold text-brand"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
