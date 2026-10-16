import { cn } from "@/lib/utils";

/**
 * Technology label rendered as a quiet chip.
 * A translucent tint keeps it legible on both the white page and the
 * light-gray section backgrounds, with a gentle darken on hover.
 */
export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-full bg-fg/[0.05] px-3 font-sans text-[13px] font-medium text-fg-muted",
        "transition-[background-color,color] duration-300 ease-out hover:bg-fg/[0.09] hover:text-fg",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Lays out Tags as a wrapping row of chips. */
export function TagRow({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
