"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Props = {
  android: { label: string; href: string };
  ios: { label: string; href: string };
  className?: string;
};

function isAppleDevice() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const platform = navigator.platform ?? "";
  const iPadOS = platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return /iPhone|iPad|iPod/.test(ua) || /Mac/.test(platform) || iPadOS;
}

/** Renders the Google Play link by default and swaps to the App Store on Apple devices after mount. */
export function StoreLink({ android, ios, className }: Props) {
  const [target, setTarget] = useState(android);

  useEffect(() => {
    if (isAppleDevice()) setTarget(ios);
  }, [ios]);

  return (
    <a href={target.href} target="_blank" rel="noopener noreferrer" className={className}>
      {target.label}
      <ArrowUpRight
        className="size-3.5 transition-transform duration-200 motion-safe:group-hover:translate-x-px motion-safe:group-hover:-translate-y-px"
        strokeWidth={1.5}
      />
    </a>
  );
}
