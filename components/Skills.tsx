import { skills } from '@/data/portfolio';
import FadeIn from './FadeIn';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="section-eyebrow mb-3">05 · Toolbox</p>
        <h2 className="section-heading mb-12">Skills</h2>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-3">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 100}>
            <div className="card h-full p-6">
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
