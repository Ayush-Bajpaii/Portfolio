import { about, codingProfiles, education } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="About" title={about.title} description={about.lead} />
            <dl className="mt-10 border-t border-border">
              {education.map((e) => (
                <div key={e.degree} className="grid grid-cols-[4rem_1fr] gap-4 border-b border-border py-4 text-sm">
                  <dt className="font-sans text-[13px] font-medium text-fg-dim">{e.year}</dt>
                  <dd>
                    <p className="text-fg">{e.degree}</p>
                    <p className="text-fg-muted">
                      {e.school} · {e.note}
                    </p>
                  </dd>
                </div>
              ))}
              <div className="grid grid-cols-[4rem_1fr] gap-4 border-b border-border py-4 text-sm">
                <dt className="font-sans text-[13px] font-medium text-fg-dim">DSA</dt>
                <dd className="flex flex-wrap gap-x-5 gap-y-1">
                  {codingProfiles.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-fg transition-colors hover:text-hover"
                    >
                      {p.label} <span className="text-fg-muted">{p.value}</span>
                      <ArrowUpRight className="size-3.5 text-fg-dim" strokeWidth={1.5} />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>

          <div>
            <Reveal delay={0.05}>
              <div className="space-y-5 text-base leading-relaxed text-fg-muted">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <ul className="mt-12 grid border-t border-border sm:grid-cols-2 sm:gap-x-10">
              {about.principles.map((p, i) => (
                <Reveal as="li" key={p.title} delay={0.05 * i} className="border-b border-border py-5">
                  <p className="text-sm font-medium text-fg">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{p.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
