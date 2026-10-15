import { ArrowDown, ArrowUpRight } from "lucide-react";
import { experience, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeroPhoto } from "./HeroPhoto";

const current = experience[0];

const meta = [
  { label: "Now", value: `${current.role}, ${current.company}` },
  { label: "Based", value: siteConfig.location },
  { label: "Stack", value: "Flutter · Kotlin · Java · Native Android" },
];

export function Hero() {
  // Split the headline so the second clause can be set in a quieter tone.
  const [lead, ...rest] = siteConfig.headline.split(" that ");
  const tail = rest.length ? `that ${rest.join(" that ")}` : "";

  return (
    <section id="top" className="relative pt-24 pb-14 sm:pt-28 sm:pb-16">
      <Container>
        {/* Status row */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-border pb-6">
            <HeroPhoto />
            <p className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">
              <span className="size-1.5 rounded-full bg-fg" aria-hidden="true" />
              {siteConfig.availability}
            </p>
          </div>
        </Reveal>

        {/* Eyebrow + display headline */}
        <Reveal delay={0.05}>
          <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-dim sm:mt-16">{siteConfig.eyebrow}</p>
        </Reveal>
        <AnimatedHeadline
          lead={lead}
          tail={tail}
          className="mt-5 max-w-[22ch] text-[clamp(2.25rem,4.6vw,4rem)] font-light leading-[1.06] tracking-[-0.03em] text-fg"
        />

        {/* Intro + actions */}
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{siteConfig.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Button href="#projects" variant="link">
                View Projects
                <ArrowDown className="size-3.5" strokeWidth={1.5} />
              </Button>
              <Button href="#contact" variant="link" className="border-transparent text-fg-muted">
                Contact Me
                <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
              </Button>
          </div>
        </Reveal>

        {/* Ruled meta strip */}
        <Reveal delay={0.18}>
          <dl className="mt-16 grid gap-y-4 border-t border-border pt-6 sm:mt-20 sm:grid-cols-3 sm:gap-x-8">
            {meta.map((m) => (
              <div key={m.label} className="grid grid-cols-[4.5rem_1fr] gap-4 sm:block">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">{m.label}</dt>
                <dd className="text-sm text-fg-muted sm:mt-2">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
