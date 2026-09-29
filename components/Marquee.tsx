import { skills } from '@/data/portfolio';

const keywords = Array.from(new Set(skills.flatMap((s) => s.items)));

export default function Marquee() {
  const track = [...keywords, ...keywords];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
      <div className="flex w-max animate-marquee gap-8">
        {track.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex shrink-0 items-center gap-8 font-mono text-sm uppercase tracking-widest text-slate-400"
          >
            {word}
            <span className="text-brand">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
