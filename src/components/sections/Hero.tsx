import { ArrowDown, ArrowUpRight } from "lucide-react";
import { experience, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeroPhoto } from "./HeroPhoto";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

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
            <ul className="flex items-center gap-3">
              {[
                { label: "GitHub", href: siteConfig.social.github, Icon: GithubIcon },
                { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
              ].map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-border text-fg transition-colors hover:border-fg-muted hover:text-hover"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
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
