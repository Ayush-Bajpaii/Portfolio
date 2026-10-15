import { cn } from "@/lib/utils";

/** Restrained technology label: plain mono text, no badge chrome. */
export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("font-mono text-[12px] text-fg-dim transition-colors", className)}>{children}</span>
  );
}

/** Lays out Tags in a row separated by thin dividers. */
export function TagRow({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-y-1.5", className)}>
      {items.map((item, i) => (
        <li key={item} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="mx-2.5 h-3 w-px bg-border" />}
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
