import { profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-sm text-slate-400 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href={profile.github} className="hover:text-white" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} className="hover:text-white" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
