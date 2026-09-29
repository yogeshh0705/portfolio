import { about } from '@/data/portfolio';
import FadeIn from './FadeIn';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="section-eyebrow mb-3">01 · About Me</p>
        <h2 className="section-heading mb-10">Who I am</h2>
      </FadeIn>

      <div className="grid gap-12 sm:grid-cols-3">
        <div className="sm:col-span-2 space-y-4 text-slate-300 leading-relaxed">
          {about.summary.map((p, i) => (
            <FadeIn key={i} delay={i * 100}>
              <p>{p}</p>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
          {about.highlights.map((h, i) => (
            <FadeIn key={h.label} delay={i * 100} className="card p-5 text-center sm:text-left">
              <p className="font-display text-3xl font-bold text-brand">{h.value}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-400">{h.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
