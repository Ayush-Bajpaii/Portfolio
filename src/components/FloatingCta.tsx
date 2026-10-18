"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * "Let's Connect" button pinned to the bottom-right.
 * Appears once the hero has scrolled out of view, hides again when the footer is reached.
 */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("top");
    const contact = document.querySelector("footer");
    if (!hero) return;

    let heroVisible = true;
    let contactVisible = false;
    const update = () => setVisible(!heroVisible && !contactVisible);

    const heroObs = new IntersectionObserver(
      ([e]) => {
        heroVisible = e.isIntersecting;
        update();
      },
      { threshold: 0.15 },
    );
    heroObs.observe(hero);

    let contactObs: IntersectionObserver | undefined;
    if (contact) {
      contactObs = new IntersectionObserver(
        ([e]) => {
          contactVisible = e.isIntersecting;
          update();
        },
        { threshold: 0.25 },
      );
      contactObs.observe(contact);
    }

    return () => {
      heroObs.disconnect();
      contactObs?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="/contact"
          initial={reduce ? false : { opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-fg pl-5 pr-4 text-sm font-medium text-bg shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)] transition-[background-color,transform] duration-200 ease-out hover:bg-fg/85 active:scale-[0.97] sm:bottom-7 sm:right-7"
        >
          Let&apos;s Connect
          <ArrowUpRight className="size-4" strokeWidth={1.8} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
