import { leadership } from '@/data/portfolio';
import FadeIn from './FadeIn';

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="section-eyebrow mb-3">06 · Beyond the Lab</p>
        <h2 className="section-heading mb-12">Leadership &amp; Extracurricular</h2>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2">
        {leadership.map((item, i) => (
          <FadeIn key={item.role + item.org} delay={i * 100}>
            <div className="card h-full p-6">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-white">{item.role}</h3>
                <span className="font-mono text-xs font-medium text-brand">{item.period}</span>
              </div>
              <p className="mb-3 text-sm text-slate-400">{item.org}</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
                {item.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
