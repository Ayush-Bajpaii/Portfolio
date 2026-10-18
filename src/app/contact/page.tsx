import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { LinkedinIcon, MailFilledIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { CopyButton } from "@/components/ui/CopyButton";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} on LinkedIn, WhatsApp, or email.`,
};

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const options = [
  { label: "LinkedIn", value: bare(siteConfig.social.linkedin), href: siteConfig.social.linkedin, cta: "View profile", Icon: LinkedinIcon, color: "#0A66C2", copy: siteConfig.social.linkedin },
  { label: "WhatsApp", value: siteConfig.phone, href: `https://wa.me/${phoneDigits}`, cta: "Open WhatsApp", Icon: WhatsappIcon, color: "#25D366", copy: siteConfig.phone },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, cta: "Write an email", Icon: MailFilledIcon, color: "#FF4F5E", copy: siteConfig.email },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1 pt-14">
        <section className="py-16 sm:py-24">
          <Container>
            <FadeIn>
              <h1 className="text-4xl font-light tracking-[-0.03em] text-fg sm:text-5xl">Let&apos;s connect.</h1>
              <p className="mt-4 text-base text-fg-muted sm:text-lg">{siteConfig.location}</p>
            </FadeIn>

            <ul className="mt-12 border-t border-border">
              {options.map((o, i) => {
                const external = o.href.startsWith("http");
                return (
                  <FadeIn as="li" key={o.label} delay={0.08 + 0.05 * i} className="border-b border-border">
                    <div className="group relative flex items-center justify-between gap-6 py-6 sm:py-7">
                      <a
                        href={o.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        aria-label={`${o.cta} via ${o.label}`}
                        className="absolute inset-0 z-10"
                      />
                      <div className="min-w-0">
                        <p className="flex items-center gap-3 text-base font-medium leading-none text-fg sm:text-lg">
                          <o.Icon className="size-7 shrink-0" style={{ color: o.color }} aria-hidden="true" />
                          {o.label}
                        </p>
                        <p className="-mt-0.5 flex h-5 items-center gap-1 pl-10 text-sm leading-none text-fg-muted">
                          <span className="truncate">{o.value}</span>
                          {o.copy && (
                            <span className="relative z-20 shrink-0">
                              <CopyButton value={o.copy} label={`Copy ${o.label.toLowerCase()}`} />
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg">
                          <span className="hidden sm:inline">{o.cta}</span>
                          <ArrowUpRight
                            className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                            strokeWidth={1.8}
                          />
                        </span>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
