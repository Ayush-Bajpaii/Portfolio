import { ArrowDown, ArrowUpRight } from "lucide-react";
import { experience, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { HeroPhoto } from "./HeroPhoto";
import { GithubIcon, LinkedinIcon, MailFilledIcon, WhatsappIcon } from "@/components/ui/BrandIcons";

const current = experience[0];

/** Strip protocol, www and trailing slash for a readable tooltip. */
const pretty = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const meta = [
  { label: "Now", value: `${current.role}, ${current.company}` },
  { label: "Based", value: siteConfig.location },
  { label: "Stack", value: "Flutter · Kotlin · Java · Native Android" },
];

export function Hero() {
  // Split the headline so the second clause can be set in a quieter tone.
  const [lead, ...rest] = siteConfig.headline.split(" using ");
  const tail = rest.length ? `using ${rest.join(" using ")}` : "";

  return (
    <section id="top" className="relative flex min-h-svh flex-col pt-24 pb-10 sm:pt-26 sm:pb-12">
      <Container className="flex flex-1 flex-col">
        {/* Status row */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-border pb-6">
            <HeroPhoto />
            <ul className="flex items-center gap-3">
              {[
                { label: "GitHub", href: siteConfig.social.github, Icon: GithubIcon, show: pretty(siteConfig.social.github), color: "#181717" },
                { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon, show: pretty(siteConfig.social.linkedin), color: "#0A66C2" },
                { label: `Email ${siteConfig.email}`, href: `mailto:${siteConfig.email}`, Icon: MailFilledIcon, show: siteConfig.email, color: "#FF4F5E" },
                { label: `WhatsApp ${siteConfig.phone}`, href: `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`, Icon: WhatsappIcon, show: siteConfig.phone, color: "#25D366" },
              ].map(({ label, href, Icon, show, color }) => (
                <li key={label} className="group relative">
                  <a
                    href={href}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-border bg-bg transition-[border-color,background-color] duration-200 hover:border-fg-muted hover:bg-bg-2"
                    style={{ color }}
                  >
                    <Icon className="size-5" />
                  </a>
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-bg-2 px-2.5 py-1 font-sans text-[12.5px] font-medium text-fg opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                  >
                    {show}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Display headline */}
        <AnimatedHeadline
          lead={lead}
          tail={tail}
          className="mt-10 max-w-[22ch] text-[clamp(2.1rem,4vw,3.5rem)] font-light leading-[1.06] tracking-[-0.03em] text-fg sm:mt-12"
        />

        {/* Intro + actions */}
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{siteConfig.intro}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Button href="#projects" variant="link">
                View Projects
                <ArrowDown className="size-3.5" strokeWidth={1.5} />
              </Button>
              <Button href="/contact" variant="link" className="border-transparent text-fg-muted">
                Contact Me
                <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
              </Button>
          </div>
        </Reveal>

        {/* Ruled meta strip */}
        <Reveal delay={0.18} className="mt-auto">
          <dl className="mt-10 grid gap-y-4 border-t border-border pt-6 sm:mt-12 sm:grid-cols-3 sm:gap-x-8">
            {meta.map((m) => (
              <div key={m.label} className="grid grid-cols-[4.5rem_1fr] gap-4 sm:block">
                <dt className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-fg-dim">{m.label}</dt>
                <dd className="text-sm text-fg-muted sm:mt-2">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
