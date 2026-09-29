import { profile } from '@/data/portfolio';
import FadeIn from './FadeIn';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <div className="card flex flex-col items-center gap-6 p-12 text-center">
          <p className="section-eyebrow">07 · Get in Touch</p>
          <h2 className="section-heading">Let&apos;s build something together</h2>
          <p className="max-w-md text-slate-400">
            Open to opportunities, collaborations, and conversations about embedded systems, IoT,
            and drones. Reach out any time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
          <p className="font-mono text-sm text-slate-500">
            {profile.phone} · {profile.location}
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
