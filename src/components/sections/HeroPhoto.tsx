import Image from "next/image";
import { siteConfig } from "@/content/site";

/** Compact identity row: circular avatar with name and role. */
export function HeroPhoto() {
  return (
    <div className="flex items-center gap-4">
      {siteConfig.photo && (
        <span className="relative size-16 shrink-0 overflow-hidden rounded-full border border-border bg-bg-2 sm:size-20">
          <Image src={siteConfig.photo} alt={siteConfig.photoAlt} fill priority sizes="80px" className="object-cover" />
        </span>
      )}
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-dim">
        <span className="text-fg">{siteConfig.name}</span>
        <span className="mx-2.5 text-border">/</span>
        {siteConfig.role}
      </p>
    </div>
  );
}
