import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { contact, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const links = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, Icon: Mail },
  { label: "LinkedIn", value: "Connect", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", value: "Follow", href: siteConfig.social.github, Icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-fg-dim">Contact</p>
              <h2 className="mt-4 text-balance text-3xl font-light tracking-[-0.025em] text-fg sm:text-[2.75rem] sm:leading-[1.12]">
                {contact.heading}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">{contact.body}</p>
            </div>

            <ul className="border-t border-border lg:self-end">
              {links.map(({ label, value, href, Icon }) => {
                const external = !href.startsWith("mailto:");
                return (
                  <li key={label} className="border-b border-border">
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center justify-between gap-4 py-5 text-fg transition-colors hover:text-hover"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="size-4 text-fg-dim transition-colors group-hover:text-hover" />
                        <span className="text-sm">{label}</span>
                      </span>
                      <span className="flex items-center gap-2 font-sans text-[13px] text-fg-muted">
                        {value}
                        <ArrowUpRight
                          className="size-3.5 text-fg-dim transition-transform duration-200 motion-safe:group-hover:translate-x-px motion-safe:group-hover:-translate-y-px"
                          strokeWidth={1.5}
                        />
                      </span>
                    </a>
                  </li>
                );
              })}
              <li className="py-4 font-sans text-[13px] text-fg-dim">
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-hover">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
