"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

/** Small icon-only copy control; shows a green tick briefly after copying. */
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      aria-label={copied ? "Copied" : label}
      title={copied ? "Copied" : label}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
        } catch {
          /* clipboard unavailable; the value is visible beside the button */
        }
      }}
      className="grid size-7 place-items-center rounded-md text-fg-dim transition-colors hover:bg-bg-2 hover:text-fg"
    >
      {copied ? <Check className="size-4 text-[#22C55E]" strokeWidth={2} /> : <Copy className="size-4" strokeWidth={1.6} />}
    </button>
  );
}
