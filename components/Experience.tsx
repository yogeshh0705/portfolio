import { education, experience } from '@/data/portfolio';
import FadeIn from './FadeIn';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="section-eyebrow mb-3">02 · Career</p>
        <h2 className="section-heading mb-12">Experience &amp; Education</h2>
      </FadeIn>

      <div className="grid gap-16 sm:grid-cols-2">
        <div>
          <h3 className="mb-6 font-display text-lg font-semibold text-white">Experience</h3>
          <ol className="space-y-8 border-l border-white/10 pl-6">
            {experience.map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <li className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-brand" />
                  <p className="font-mono text-xs uppercase tracking-wider text-brand">{item.period}</p>
                  <h4 className="mt-1 text-base font-semibold text-white">{item.role}</h4>
                  <p className="text-sm text-slate-400">
                    {item.org}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {item.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="mb-6 font-display text-lg font-semibold text-white">Education</h3>
          <ol className="space-y-8 border-l border-white/10 pl-6">
            {education.map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <li className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-brand" />
                  <p className="font-mono text-xs uppercase tracking-wider text-brand">{item.period}</p>
                  <h4 className="mt-1 text-base font-semibold text-white">{item.degree}</h4>
                  <p className="text-sm text-slate-400">{item.school}</p>
                  {item.details && (
                    <p className="mt-2 text-sm text-slate-300">{item.details}</p>
                  )}
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
