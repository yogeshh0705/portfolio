import Image from 'next/image';
import { research } from '@/data/portfolio';
import FadeIn from './FadeIn';

function Panel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative border border-brand/20 bg-white/[0.02] p-6 sm:p-8 ${className}`}>
      <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-brand" />
      <span className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-brand" />
      <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-brand" />
      <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-brand" />
      {children}
    </div>
  );
}

export default function Research() {
  return (
    <section id="research" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="section-eyebrow mb-3">03 · Research</p>
          <h2 className="section-heading mb-10">Research</h2>
        </FadeIn>

        <FadeIn>
          <Panel>
            <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
              Status: {research.status}
            </div>

            <div className="grid gap-8 sm:grid-cols-5">
              <div className="sm:col-span-3">
                <h3 className="font-display text-2xl font-bold text-white">{research.title}</h3>
                <p className="mb-4 mt-1 text-sm text-slate-400">{research.subtitle}</p>
                <p className="mb-6 leading-relaxed text-slate-300">{research.overview}</p>
                <ul className="space-y-2">
                  {research.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:col-span-2">
                <Image
                  src={research.image}
                  alt="Hybrid fixed-wing VTOL concept render"
                  width={1250}
                  height={800}
                  className="mb-6 w-full rounded-lg bg-white/5 object-contain"
                />
                <dl className="space-y-2">
                  {research.specs.map((s) => (
                    <div key={s.label} className="flex justify-between gap-4 border-b border-white/5 pb-1 text-sm">
                      <dt className="text-slate-500">{s.label}</dt>
                      <dd className="text-right font-mono text-slate-200">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {research.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-brand/50 bg-brand/10 px-3 py-1.5 font-mono text-xs text-brand"
                >
                  {t}
                </span>
              ))}
            </div>
          </Panel>
        </FadeIn>
      </div>
    </section>
  );
}
