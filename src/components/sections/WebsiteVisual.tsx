/**
 * Growth-stack pipeline for the marketing site:
 * campaign click (UTM) -> page -> GTM -> GA4 / Meta / Clarity, with Razorpay checkout.
 * Pure SVG, animated with the shared viz-* CSS classes.
 */
export function WebsiteVisual() {
  const mono = "var(--font-mono)";
  const sinks = [
    { y: 70, label: "GA4", sub: "events · goals" },
    { y: 120, label: "Meta Pixel", sub: "ads · CAPI" },
    { y: 170, label: "Clarity", sub: "session replay" },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border-[1.5px] border-fg-muted/60 bg-bg" aria-hidden="true">
      <svg viewBox="0 0 344 300" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
        <defs>
          <marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="var(--fg-muted)" />
          </marker>
        </defs>

        {/* Campaign click */}
        <rect x="16" y="104" width="76" height="40" rx="5" fill="var(--card)" stroke="var(--border)" />
        <text x="24" y="120" fontSize="7" fontFamily={mono} fill="var(--fg)">
          Ad click
        </text>
        <text x="24" y="131" fontSize="5.6" fontFamily={mono} fill="var(--fg-dim)">
          ?utm_source=meta
        </text>
        <text x="24" y="139" fontSize="5.6" fontFamily={mono} fill="var(--fg-dim)">
          &amp;utm_campaign=…
        </text>

        {/* Page */}
        <rect x="112" y="44" width="92" height="160" rx="6" fill="var(--bg-2)" stroke="var(--border)" />
        <rect x="112" y="44" width="92" height="16" rx="6" fill="var(--card)" />
        <rect x="112" y="59" width="92" height="1" fill="var(--border)" />
        <circle cx="121" cy="52" r="1.8" fill="var(--border)" />
        <circle cx="127" cy="52" r="1.8" fill="var(--border)" />
        <circle cx="133" cy="52" r="1.8" fill="var(--border)" />
        <rect x="140" y="48.5" width="58" height="7" rx="3.5" fill="var(--bg)" stroke="var(--border)" />
        <text x="169" y="54" textAnchor="middle" fontSize="4.4" fontFamily={mono} fill="var(--fg-dim)">
          mysmartassistant.ai
        </text>
        {/* hero lines */}
        <rect x="122" y="72" width="60" height="6" rx="2" fill="var(--fg)" />
        <rect x="122" y="82" width="44" height="6" rx="2" fill="var(--fg)" />
        <rect x="122" y="94" width="70" height="3" rx="1.5" fill="var(--border)" />
        <rect x="122" y="100" width="56" height="3" rx="1.5" fill="var(--border)" />
        <rect x="122" y="110" width="34" height="10" rx="2" fill="var(--fg)" />
        <text x="139" y="117" textAnchor="middle" fontSize="5" fontFamily={mono} fill="var(--bg)">
          Get MySA
        </text>
        {/* schema / meta chips */}
        {[
          { y: 132, t: "<meta og:…>" },
          { y: 143, t: "ld+json FAQ" },
          { y: 154, t: "canonical" },
        ].map((c) => (
          <g key={c.t}>
            <rect x="122" y={c.y - 7} width="70" height="9" rx="2" fill="var(--card)" stroke="var(--border)" />
            <text x="126" y={c.y - 0.6} fontSize="4.8" fontFamily={mono} fill="var(--fg-muted)">
              {c.t}
            </text>
          </g>
        ))}
        {/* checkout */}
        <rect x="122" y="166" width="70" height="26" rx="3" fill="var(--bg)" stroke="var(--fg-dim)" />
        <text x="127" y="176" fontSize="5.6" fontFamily={mono} fill="var(--fg)">
          Razorpay
        </text>
        <text x="127" y="186" fontSize="4.8" fontFamily={mono} fill="var(--fg-dim)">
          checkout · ₹ plan
        </text>
        <circle className="viz-pulse" cx="184" cy="179" r="2" fill="var(--fg)" />

        {/* Click -> page */}
        <line className="viz-flow" x1="92" y1="124" x2="110" y2="124" stroke="var(--fg-muted)" strokeDasharray="3 4" markerEnd="url(#arr2)" />

        {/* GTM */}
        <rect x="224" y="108" width="40" height="32" rx="5" fill="var(--card)" stroke="var(--border)" />
        <text x="244" y="122" textAnchor="middle" fontSize="7" fontFamily={mono} fill="var(--fg)">
          GTM
        </text>
        <text x="244" y="132" textAnchor="middle" fontSize="4.8" fontFamily={mono} fill="var(--fg-dim)">
          tag layer
        </text>
        <line className="viz-flow" x1="204" y1="124" x2="222" y2="124" stroke="var(--fg-muted)" strokeDasharray="3 4" markerEnd="url(#arr2)" />

        {/* Sinks */}
        {sinks.map((s) => (
          <g key={s.label}>
            <path
              className="viz-flow"
              d={`M264 124 C 276 124, 276 ${s.y + 12}, 284 ${s.y + 12}`}
              fill="none"
              stroke="var(--fg-muted)"
              strokeDasharray="3 4"
              markerEnd="url(#arr2)"
            />
          </g>
        ))}
        {/* Sink labels drawn right-aligned so they stay inside the frame */}
        {sinks.map((s) => (
          <g key={s.label + "-l"}>
            <rect x="286" y={s.y - 2} width="50" height="28" rx="4" fill="var(--card)" stroke="var(--border)" />
            <text x="311" y={s.y + 10} textAnchor="middle" fontSize="5.4" fontFamily={mono} fill="var(--fg)">
              {s.label}
            </text>
            <text x="311" y={s.y + 19} textAnchor="middle" fontSize="4.4" fontFamily={mono} fill="var(--fg-dim)">
              {s.sub}
            </text>
          </g>
        ))}

        {/* Performance footer */}
        <rect x="16" y="224" width="320" height="1" fill="var(--border)" />
        {[
          { x: 16, t: "static HTML · critical CSS inlined" },
          { x: 150, t: "scripts deferred" },
          { x: 254, t: "SDKs on demand" },
        ].map((f) => (
          <text key={f.t} x={f.x} y="238" fontSize="5.6" fontFamily={mono} fill="var(--fg-dim)">
            {f.t}
          </text>
        ))}
        <rect x="16" y="250" width="320" height="1" fill="var(--border)" />
        <rect className="viz-progress" x="16" y="250" width="320" height="1" fill="var(--fg)" />
        <text x="16" y="264" fontSize="5.6" fontFamily={mono} fill="var(--fg-dim)">
          first paint
        </text>
        <text x="336" y="264" textAnchor="end" fontSize="5.6" fontFamily={mono} fill="var(--fg-dim)">
          interactive
        </text>

        {/* Answer-engine note */}
        <text x="16" y="284" fontSize="5.6" fontFamily={mono} fill="var(--fg-dim)">
          SEO · AEO · agentic browsing ready
        </text>
      </svg>
    </div>
  );
}
