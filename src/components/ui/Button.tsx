import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-[background-color,border-color,color,opacity] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg border border-fg hover:bg-hover",
  secondary: "bg-transparent text-fg border border-border hover:border-fg-muted",
  ghost: "bg-transparent text-fg-muted hover:text-hover border border-transparent",
  link: "h-auto rounded-none border-b border-fg-dim px-0 pb-0.5 text-fg hover:border-fg hover:text-hover",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">)
  | ({ href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">)
);

export function Button({ variant = "primary", size = "md", className, children, ...rest }: Props) {
  const classes = cn(base, variants[variant], variant === "link" ? "text-sm" : sizes[size], className);
  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    const external = /^https?:\/\//.test(href) || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }
  const { href: _href, ...buttonProps } = rest as Extract<Props, { href?: undefined }>;
  void _href;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
