"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  /** Words rendered in the primary text colour. */
  lead: string;
  /** Words rendered in the muted colour, after the lead. */
  tail?: string;
  className?: string;
  delay?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

/** Headline whose words rise out of a clipped line one after another. */
export function AnimatedHeadline({ lead, tail = "", className, delay = 0.15 }: Props) {
  const reduce = useReducedMotion();
  const words = [
    ...lead.split(" ").map((w) => ({ w, muted: false })),
    ...(tail ? tail.split(" ").map((w) => ({ w, muted: true })) : []),
  ];

  return (
    <motion.h1
      className={cn("flex flex-wrap", className)}
      initial={reduce ? false : "hidden"}
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
      aria-label={[lead, tail].filter(Boolean).join(" ")}
    >
      {words.map(({ w, muted }, i) => (
        <span key={i} className="mr-[0.26em] inline-block overflow-hidden pb-[0.08em] -mb-[0.08em]" aria-hidden="true">
          <motion.span
            className={cn("inline-block", muted && "text-fg-dim")}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease } },
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
