import { ArrowUpRight } from "lucide-react";
import { website } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TagRow } from "@/components/ui/Tag";
import { WebsiteVisual } from "./WebsiteVisual";

export function Website() {
  return (
    <section id="website" className="scroll-mt-24 border-t border-border bg-bg-2 py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <div className="max-w-2xl">
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-fg-dim">{website.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-normal tracking-[-0.02em] text-fg sm:text-4xl">{website.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">{website.tagline}</p>
            </div>
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-fg px-4 text-sm font-medium text-bg transition-[background-color,transform,opacity] duration-200 ease-out hover:bg-fg/85 active:scale-[0.98]"
            >
              Visit the live site
              <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 border-t border-border pt-12 lg:grid-cols-[1fr_minmax(0,34rem)] lg:gap-16">
          <div className="min-w-0">
            <Reveal delay={0.05}>
              <p className="text-[15px] leading-relaxed text-fg-muted">{website.description}</p>
              <dl className="mt-8">
                <dt className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-fg-dim">Role</dt>
                <dd className="mt-2 text-sm leading-relaxed text-fg-muted">{website.role}</dd>
              </dl>
            </Reveal>

            <dl className="mt-10 border-t border-border">
              {website.capabilities.map((c, i) => (
                <Reveal as="div" key={c.title} delay={0.05 * i} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <dt className="text-sm text-fg">{c.title}</dt>
                  <dd className="text-sm leading-relaxed text-fg-muted">{c.body}</dd>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.1}>
              <TagRow items={website.stack} className="mt-8" />
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-w-0 lg:self-start">
            <div className="aspect-[4/3] min-w-0 lg:aspect-auto lg:h-[30rem]">
              <WebsiteVisual />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
