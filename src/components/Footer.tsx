import { Mail } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Year } from "@/components/ui/Year";

const links = [
  { label: "GitHub", href: siteConfig.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "Email", href: `mailto:${siteConfig.email}`, Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-fg">{siteConfig.name}</p>
          <p className="text-sm text-fg-dim">{siteConfig.role}</p>
        </div>
        <ul className="flex items-center gap-1">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-9 place-items-center text-fg-dim transition-colors hover:text-hover"
              >
                <Icon className="size-4" strokeWidth={1.5} />
              </a>
            </li>
          ))}
        </ul>
        <p className="font-sans text-[13px] text-fg-dim">
          © <Year /> {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
