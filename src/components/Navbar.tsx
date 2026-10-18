"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronLeft, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navLinks, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const onHome = pathname === "/";
  // Section links are hashes on the home page; from other pages they must go home first.
  const to = (href: string) => (href.startsWith("#") && !onHome ? `/${href}` : href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border transition-[background-color] duration-300",
        scrolled || open ? "bg-bg/90 backdrop-blur-sm" : "bg-bg",
      )}
    >
      {!onHome && (
        <a
          href="/"
          aria-label="Back to portfolio"
          className="absolute left-1 top-7 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full text-fg transition-colors hover:bg-bg-2 sm:left-5"
        >
          <ChevronLeft className="size-7" strokeWidth={2.4} />
        </a>
      )}
      <Container className="flex h-14 items-center justify-between">
        <div className={cn("flex items-center gap-2", !onHome && "pl-8 sm:pl-0")}>
        <a
          href={onHome ? "#top" : "/"}
          onClick={(e) => {
            if (!onHome) return; // let the browser navigate to "/"
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
            if (window.location.hash) history.replaceState(null, "", window.location.pathname);
          }}
          className="group flex items-center gap-2.5 font-sans text-[12.5px] font-medium uppercase tracking-[0.12em] text-fg transition-colors hover:text-hover"
          aria-label={`${siteConfig.name}, back to top`}
        >
          {siteConfig.photo && (
            <Image
              src={siteConfig.photo}
              alt=""
              width={28}
              height={28}
              className="size-7 rounded-full object-cover ring-1 ring-border transition-[box-shadow] duration-300 group-hover:ring-fg-muted"
            />
          )}
          <span>{siteConfig.name}</span>
        </a>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={to(link.href)}
              aria-current={active === link.href ? "true" : undefined}
              className={cn(
                "relative py-2 font-sans text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-200",
                active === link.href ? "text-fg" : "text-fg-dim hover:text-hover",
              )}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 36 }}
                  className="absolute inset-x-0 -bottom-[17px] h-px bg-fg"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {onHome && (
            <Link
              href="/contact"
              className="hidden font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-fg-muted transition-colors hover:text-hover sm:inline-flex"
            >
              Let&apos;s Connect
              <span aria-hidden="true" className="ml-1.5">
                ↗
              </span>
            </Link>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center text-fg-muted transition-colors hover:text-hover md:hidden"
          >
            {open ? <X className="size-4" strokeWidth={1.5} /> : <Menu className="size-4" strokeWidth={1.5} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-bg md:hidden"
          >
            <Container className="flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={to(link.href)}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 font-sans text-[12.5px] font-medium uppercase tracking-[0.12em] text-fg-muted transition-colors last:border-b-0 hover:text-hover"
                >
                  {link.label}
                </Link>
              ))}
              {onHome && (
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="py-4 font-sans text-[12.5px] font-medium uppercase tracking-[0.12em] text-fg"
                >
                  Let&apos;s Connect ↗
                </Link>
              )}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
