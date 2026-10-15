import { skillGroups } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TagRow } from "@/components/ui/Tag";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border bg-bg-2 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I reach for"
            description="Grouped by what they're used for, not by how long the list is."
          />
        </Reveal>

        <dl className="mt-14 border-t border-border">
          {skillGroups.map((g, i) => (
            <Reveal
              as="div"
              key={g.title}
              delay={0.04 * i}
              className="grid gap-3 border-b border-border py-5 sm:grid-cols-[16rem_1fr] sm:gap-8"
            >
              <dt className="text-sm text-fg">{g.title}</dt>
              <dd>
                <TagRow items={g.items} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
