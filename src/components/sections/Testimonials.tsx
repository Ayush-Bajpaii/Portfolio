import Image from "next/image";
import { testimonials } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkedinIcon } from "@/components/ui/BrandIcons";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

export function Testimonials() {
  // Never render empty entries: a testimonial needs a name and a quote.
  const items = testimonials.filter((t) => t.name.trim() && t.quote.trim());
  if (items.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 border-t border-border bg-bg-2 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What colleagues say"
            description="Words from people I've built, shipped, and studied with."
          />
        </Reveal>

        {/* Mobile: horizontal snap carousel that bleeds to the screen edges. Desktop: 3-column grid. */}
        <ul className="no-scrollbar mt-14 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {items.map((t, i) => (
            <Reveal as="li" key={t.linkedin || t.name} delay={0.08 * i} className="h-full w-[86%] shrink-0 snap-center sm:w-[70%] md:w-auto">
              <figure className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl bg-bg after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-2xl after:ring-1 after:ring-inset after:ring-border after:content-[''] transition-[transform,box-shadow] duration-500 ease-out motion-safe:hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)]">
                {/* Portrait */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-bg-2">
                  {t.photo ? (
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="grid h-full w-full place-items-center text-5xl font-light text-fg-dim"
                    >
                      {initials(t.name)}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <blockquote className="relative flex-1 px-7 pb-6 pt-7 text-[15px] leading-relaxed text-fg md:min-h-[15.5rem]">
                  <span aria-hidden="true" className="mb-4 block text-[#0A66C2]">
                    <svg viewBox="0 0 24 24" className="size-8" fill="currentColor">
                      <path d="M7.2 6.5C4.9 7.6 3.5 9.6 3.5 12.3V17.5h5.8v-5.8H6.1c0-1.6.8-2.7 2.3-3.4L7.2 6.5Zm9 0c-2.3 1.1-3.7 3.1-3.7 5.8v5.2h5.8v-5.8h-3.2c0-1.6.8-2.7 2.3-3.4l-1.2-1.8Z" />
                    </svg>
                  </span>
                  {t.quote}
                </blockquote>

                {/* Person */}
                <figcaption className="flex items-start justify-between gap-4 border-t border-border px-7 py-5 md:min-h-[8.5rem]">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-fg">{t.name}</p>
                    {t.role && <p className="mt-0.5 text-[13px] leading-snug text-fg-muted">{t.role}</p>}
                    {t.relation && <p className="mt-1 text-[12.5px] leading-snug text-fg-dim">{t.relation}</p>}
                  </div>
                  {t.linkedin && (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.name} on LinkedIn`}
                      className="group/link mt-0.5 grid size-11 shrink-0 place-items-center rounded-full border border-border text-fg-muted transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                    >
                      <LinkedinIcon className="size-5 text-[#0A66C2] transition-colors group-hover/link:text-white" />
                    </a>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
