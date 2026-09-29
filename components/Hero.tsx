import { profile } from '@/data/portfolio';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-signal/10 blur-3xl" />

      {/* Corner HUD brackets — a nod to a flight-computer readout / drone targeting frame. */}
      <div className="pointer-events-none absolute inset-6 hidden sm:block">
        <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-white/15" />
        <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-white/15" />
        <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-white/15" />
        <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-white/15" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="mb-6 font-mono text-sm text-slate-500">
            <span className="text-signal">$</span> whoami
            <span className="ml-1 inline-block h-4 w-2 animate-blink bg-brand align-middle" />
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-8xl">
            {profile.name}
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <h2 className="mt-4 font-mono text-lg text-brand sm:text-xl">
            <span className="text-white/30">// </span>
            {profile.title}
          </h2>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {profile.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              View Projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
