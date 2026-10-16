import { experience } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagRow } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border bg-bg-2 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've shipped"
            description="Production Android work across a consumer AI assistant and real-time multiplayer games."
          />
        </Reveal>

        <ol className="mt-14 border-t border-border">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={0.06 * i} className="border-b border-border">
              <article className="grid gap-6 py-10 lg:grid-cols-[14rem_1fr] lg:gap-12">
                <header>
                  <p className="font-sans text-[13px] text-fg-dim">
                    {job.start} — {job.end}
                  </p>
                  <h3 className="mt-2 text-lg font-medium tracking-tight text-fg">{job.company}</h3>
                  <p className="text-sm text-fg-muted">
                    {job.role} · {job.location}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-fg-dim lg:max-w-[12rem]">{job.summary}</p>
                </header>
                <div>
                  <ul className="space-y-3">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-fg-muted">
                        <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-fg/25" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <TagRow items={job.stack} className="mt-7" />
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
