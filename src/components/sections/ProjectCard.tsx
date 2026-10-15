import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/site";
import { TagRow } from "@/components/ui/Tag";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group grid gap-8 border-b border-border py-12 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16">
      <div className="min-w-0">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] text-fg-dim">{String(index + 1).padStart(2, "0")}</span>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">{project.category}</p>
        </div>
        <h3 className="mt-4 text-2xl font-normal tracking-[-0.02em] text-fg sm:text-[1.75rem]">{project.name}</h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-fg-muted">{project.description}</p>

        <dl className="mt-7 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">Role</dt>
            <dd className="mt-2 text-sm leading-relaxed text-fg-muted">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">Engineering challenge</dt>
            <dd className="mt-2 text-sm leading-relaxed text-fg-muted">{project.challenge}</dd>
          </div>
        </dl>

        <TagRow items={project.stack} className="mt-7" />

        {project.links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-6">
            {project.links.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 border-b border-fg-dim pb-0.5 text-sm text-fg transition-colors hover:border-fg hover:text-hover"
              >
                {l.label}
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-200 motion-safe:group-hover:translate-x-px motion-safe:group-hover:-translate-y-px"
                  strokeWidth={1.5}
                />
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="aspect-[16/10] min-w-0 lg:aspect-[4/3] lg:self-start">
        <ProjectVisual kind={project.visual} />
      </div>
    </article>
  );
}
