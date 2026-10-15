"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => String(new Date().getFullYear());
const getServerSnapshot = () => "";

/** Renders the current year on the client only, so the static shell stays deterministic. */
export function Year() {
  const year = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <>{year}</>;
}
