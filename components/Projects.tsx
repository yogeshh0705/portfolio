import { projects } from '@/data/portfolio';
import FadeIn from './FadeIn';

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="section-eyebrow mb-3">04 · Work</p>
        <h2 className="section-heading mb-12">Projects</h2>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 100}>
            <div
              className={`card flex h-full flex-col overflow-hidden transition-transform hover:-translate-y-1 ${
                project.featured ? 'ring-1 ring-brand/40' : ''
              }`}
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-2 font-mono text-xs text-slate-500">
                  {slugify(project.title)}.c
                </span>
                {project.featured && (
                  <span className="ml-auto rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.link || project.repo) && (
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    {project.link && (
                      <a href={project.link} className="text-brand hover:underline">
                        Live ↗
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} className="text-slate-300 hover:underline">
                        Code ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
