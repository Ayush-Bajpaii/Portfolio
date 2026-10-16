import type { Project } from "@/content/site";

/**
 * Small, custom illustrations for each project category.
 * Pure SVG/markup so they stay crisp, themeable, and tiny.
 */
export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  switch (kind) {
    case "assistant":
      return <AssistantVisual />;
    case "native":
      return <NativeVisual />;
    case "payments":
      return <PaymentsVisual />;
    case "game":
      return <GameVisual />;
    case "blog":
      return <BlogVisual />;
    case "apartment":
      return <ApartmentVisual />;
    default:
      return <WebVisual />;
  }
}

const frame = "relative h-full w-full overflow-hidden rounded-md border border-border bg-bg";

function AssistantVisual() {
  // MySA: a tall phone handled by the assistant, with feature labels either side.
  return (
    <div className={frame} aria-hidden="true">
      <svg viewBox="38 8 244 232" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
        {/* Phone */}
        <rect x="96" y="14" width="128" height="226" rx="14" fill="var(--bg-2)" stroke="var(--border)" />
        <rect x="140" y="22" width="40" height="5" rx="2.5" fill="var(--border)" />

        {/* Call assist card */}
        <g className="viz-seq-1">
        <rect x="106" y="38" width="108" height="54" rx="5" fill="var(--card)" stroke="var(--border)" />
        <circle className="viz-ring" cx="122" cy="56" r="8" fill="none" stroke="var(--fg-muted)" />
        <circle cx="122" cy="56" r="8" fill="var(--bg)" stroke="var(--fg-muted)" />
        <path d="M119 53.5 l2 2 l4 -4" stroke="var(--fg)" strokeWidth="1.2" fill="none" />
        <text x="136" y="54" fontSize="6.4" fontFamily="var(--font-mono)" fill="var(--fg)">
          Incoming call
        </text>
        <text x="136" y="63" fontSize="5.9" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          Unknown · +91 98…
        </text>
        <rect x="112" y="72" width="46" height="13" rx="2" fill="var(--fg)" />
        <text x="135" y="81" textAnchor="middle" fontSize="5.5" fontFamily="var(--font-mono)" fill="var(--bg)">
          MySA answers
        </text>
        <rect x="162" y="72" width="46" height="13" rx="2" fill="var(--bg)" stroke="var(--border)" />
        <text x="185" y="81" textAnchor="middle" fontSize="5.5" fontFamily="var(--font-mono)" fill="var(--fg-muted)">
          Take it
        </text>
        </g>

        {/* Chat */}
        <g className="viz-seq-2">
        <g className="viz-float">
          <rect x="134" y="102" width="80" height="18" rx="4" fill="var(--card)" stroke="var(--border)" />
          <text x="140" y="113.5" fontSize="5.9" fontFamily="var(--font-mono)" fill="var(--fg-muted)">
            what did they want?
          </text>
        </g>
        </g>
        <g className="viz-seq-3">
        <rect x="106" y="126" width="108" height="40" rx="4" fill="var(--bg)" stroke="var(--fg-dim)" />
        <text x="112" y="138" fontSize="5.7" fontFamily="var(--font-mono)" fill="var(--fg)">
          Delivery query, order
        </text>
        <text x="112" y="148" fontSize="5.7" fontFamily="var(--font-mono)" fill="var(--fg)">
          #4821. Slot confirmed,
        </text>
        <text x="112" y="158" fontSize="5.7" fontFamily="var(--font-mono)" fill="var(--fg)">
          reminder set for 18:00.
        </text>
        </g>

        {/* Reminders */}
        <g className="viz-seq-4">
        <text x="106" y="182" fontSize="5.5" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          TODAY
        </text>
        {[
          { t: "Call back vendor", s: "escalates 18:00" },
          { t: "Passport renewal", s: "expires in 12d" },
        ].map((r, i) => (
          <g key={r.t}>
            <rect x="106" y={188 + i * 20} width="108" height="16" rx="3" fill="var(--card)" stroke="var(--border)" />
            <circle className={i === 0 ? "viz-pulse" : undefined} cx="114" cy={196 + i * 20} r="2" fill={i === 0 ? "var(--fg)" : "var(--fg-dim)"} />
            <text x="120" y={195 + i * 20} fontSize="5.5" fontFamily="var(--font-mono)" fill="var(--fg)">
              {r.t}
            </text>
            <text x="120" y={201.5 + i * 20} fontSize="4.6" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
              {r.s}
            </text>
          </g>
        ))}
        </g>

        {/* Side labels */}
        {[
          { y: 60, t: "Call Assist" },
          { y: 140, t: "Ask MySA" },
          { y: 196, t: "Reminders" },
        ].map((l) => (
          <g key={l.t}>
            <rect x="44" y={l.y - 1} width="46" height="1" fill="var(--border)" />
            <text x="44" y={l.y - 5} fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
              {l.t}
            </text>
          </g>
        ))}
        {[
          { y: 60, t: "19+ langs" },
          { y: 140, t: "WhatsApp" },
          { y: 196, t: "Calendar" },
        ].map((l) => (
          <g key={l.t}>
            <rect x="230" y={l.y - 1} width="46" height="1" fill="var(--border)" />
            <text x="230" y={l.y - 5} fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
              {l.t}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

type Tok = { t: string; c?: "kw" | "ty" | "fn" | "str" | "cm" };
const tokTone: Record<NonNullable<Tok["c"]>, string> = {
  kw: "var(--fg-muted)",
  ty: "var(--fg)",
  fn: "var(--fg)",
  str: "var(--fg-muted)",
  cm: "var(--fg-dim)",
};

function CodePanel({
  x,
  y,
  w,
  title,
  lang,
  lines,
}: {
  x: number;
  y: number;
  w: number;
  title: string;
  lang: string;
  lines: Tok[][];
}) {
  const mono = "var(--font-mono)";
  const lineH = 10.5;
  const h = 18 + lines.length * lineH + 4;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="5" fill="var(--bg-2)" stroke="var(--border)" />
      <rect x={x} y={y} width={w} height="15" rx="5" fill="var(--card)" />
      <rect x={x} y={y + 14} width={w} height="1" fill="var(--border)" />
      <text x={x + 9} y={y + 10} fontSize="6" fontFamily={mono} fill="var(--fg-muted)">
        {title}
      </text>
      <text x={x + w - 9} y={y + 10} textAnchor="end" fontSize="5" fontFamily={mono} fill="var(--fg-dim)">
        {lang}
      </text>
      {lines.map((line, i) => (
        <text key={i} x={x + 9} y={y + 28 + i * lineH} fontSize="6.4" fontFamily={mono} xmlSpace="preserve">
          {line.map((tk, j) => (
            <tspan key={j} fill={tk.c ? tokTone[tk.c] : "var(--fg-muted)"}>
              {tk.t}
            </tspan>
          ))}
        </text>
      ))}
    </g>
  );
}

function NativeVisual() {
  // Dart on top, Kotlin below, joined by the MethodChannel / EventChannel bridge.
  const dart: Tok[][] = [
    [{ t: "// call_bridge.dart", c: "cm" }],
    [{ t: "const", c: "kw" }, { t: " _ch = " }, { t: "MethodChannel", c: "ty" }, { t: "(" }, { t: "'aivo/calls'", c: "str" }, { t: ");" }],
    [{ t: "Future", c: "ty" }, { t: "<" }, { t: "void", c: "kw" }, { t: "> " }, { t: "start", c: "fn" }, { t: "() => _ch." }, { t: "invokeMethod", c: "fn" }, { t: "(" }, { t: "'start'", c: "str" }, { t: ");" }],
    [{ t: "Stream", c: "ty" }, { t: "<" }, { t: "CallEvent", c: "ty" }, { t: "> " }, { t: "events", c: "fn" }, { t: "() => _events" }],
    [{ t: "    ." }, { t: "receiveBroadcastStream", c: "fn" }, { t: "()." }, { t: "map", c: "fn" }, { t: "(" }, { t: "CallEvent", c: "ty" }, { t: ".fromJson);" }],
  ];
  const kotlin: Tok[][] = [
    [{ t: "// CallBridge.kt", c: "cm" }],
    [{ t: "class", c: "kw" }, { t: " " }, { t: "CallBridge", c: "ty" }, { t: " : " }, { t: "MethodCallHandler", c: "ty" }, { t: " {" }],
    [{ t: "  " }, { t: "override fun", c: "kw" }, { t: " " }, { t: "onMethodCall", c: "fn" }, { t: "(call: " }, { t: "MethodCall", c: "ty" }, { t: ", result: " }, { t: "Result", c: "ty" }, { t: ") =" }],
    [{ t: "    " }, { t: "when", c: "kw" }, { t: " (call.method) {" }],
    [{ t: "      " }, { t: "\"start\"", c: "str" }, { t: " -> " }, { t: "startService", c: "fn" }, { t: "(result)" }],
    [{ t: "      " }, { t: "\"stop\"", c: "str" }, { t: "  -> " }, { t: "stopService", c: "fn" }, { t: "(result)" }],
    [{ t: "      " }, { t: "else", c: "kw" }, { t: "    -> result." }, { t: "notImplemented", c: "fn" }, { t: "()" }],
    [{ t: "    }" }],
    [{ t: "}" }],
  ];
  const mono = "var(--font-mono)";
  return (
    <div className={frame} aria-hidden="true">
      <svg viewBox="0 0 320 320" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="var(--fg-muted)" />
          </marker>
        </defs>

        <CodePanel x={14} y={12} w={292} title="call_bridge.dart" lang="DART" lines={dart} />

        {/* Bridge row */}
        {/* Riverpod chip */}
        <rect x="14" y="110" width="96" height="30" rx="4" fill="var(--card)" stroke="var(--border)" />
        <text x="22" y="123" fontSize="6" fontFamily={mono} fill="var(--fg)">
          Riverpod provider
        </text>
        <text x="22" y="132" fontSize="4.8" fontFamily={mono} fill="var(--fg-dim)">
          CallEvent stream → UI
        </text>

        {/* Channel */}
        <rect x="124" y="118" width="72" height="14" rx="7" fill="var(--bg)" stroke="var(--border)" />
        <text x="160" y="127.5" textAnchor="middle" fontSize="5.6" fontFamily={mono} fill="var(--fg)">
          aivo/calls
        </text>
        {/* down: invokeMethod */}
        <line className="viz-flow" x1="146" y1="88" x2="146" y2="116" stroke="var(--fg-muted)" strokeDasharray="3 4" markerEnd="url(#arr)" />
        <line className="viz-flow" x1="146" y1="134" x2="146" y2="162" stroke="var(--fg-muted)" strokeDasharray="3 4" markerEnd="url(#arr)" />
        <circle r="2" fill="var(--fg)">
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M146 88 L146 160" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.2s" repeatCount="indefinite" />
        </circle>
        {/* up: EventChannel */}
        <line className="viz-flow" x1="174" y1="162" x2="174" y2="134" stroke="var(--fg-muted)" strokeDasharray="3 4" markerEnd="url(#arr)" />
        <line className="viz-flow" x1="174" y1="116" x2="174" y2="88" stroke="var(--fg-muted)" strokeDasharray="3 4" markerEnd="url(#arr)" />
        <circle r="2" fill="var(--fg)">
          <animateMotion dur="2.2s" begin="1.1s" repeatCount="indefinite" path="M174 162 L174 90" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.2s" begin="1.1s" repeatCount="indefinite" />
        </circle>
        <text x="140" y="104" textAnchor="end" fontSize="4.8" fontFamily={mono} fill="var(--fg-dim)">
          invokeMethod
        </text>
        <text x="180" y="150" fontSize="4.8" fontFamily={mono} fill="var(--fg-dim)">
          EventChannel
        </text>

        {/* ForegroundService chip */}
        <rect x="210" y="110" width="96" height="30" rx="4" fill="var(--card)" stroke="var(--border)" />
        <circle className="viz-ring" cx="220" cy="125" r="2.2" fill="none" stroke="var(--fg-muted)" />
        <circle cx="220" cy="125" r="2.2" fill="var(--fg)" />
        <text x="226" y="123" fontSize="6" fontFamily={mono} fill="var(--fg)">
          ForegroundService
        </text>
        <text x="226" y="132" fontSize="4.8" fontFamily={mono} fill="var(--fg-dim)">
          calls · notifications
        </text>

        <CodePanel x={14} y={164} w={292} title="CallBridge.kt" lang="KOTLIN" lines={kotlin} />

        <text x="160" y="310" textAnchor="middle" fontSize="5" fontFamily={mono} fill="var(--fg-dim)">
          Flutter UI  ·  typed Dart API  ·  Kotlin platform code
        </text>
      </svg>
    </div>
  );
}

function PaymentsVisual() {
  const rows = [
    { k: "sku", v: "pro_monthly", s: "ok" },
    { k: "state", v: "PURCHASED", s: "ok" },
    { k: "ack", v: "true", s: "ok" },
    { k: "referrer", v: "utm=invite_42", s: "info" },
  ];
  return (
    <div className={frame} aria-hidden="true">
      <div className="viz-fast absolute inset-5 flex flex-col justify-between">
        <div className="flex items-center justify-between font-mono text-[10px] text-fg-muted">
          <span>BillingClient</span>
          <span className="rounded border border-border px-1.5 py-0.5">v7</span>
        </div>
        <ul className="space-y-1.5">
          {rows.map((r, i) => (
            <li
              key={r.k}
              className={`viz-seq-${i + 1} flex items-center justify-between rounded border border-border bg-card px-2.5 py-1.5 font-mono text-[10px]`}
            >
              <span className="text-fg-muted">{r.k}</span>
              <span className={r.s === "ok" ? "text-accent-2" : "text-fg"}>{r.v}</span>
            </li>
          ))}
        </ul>
        <div className="viz-seq-5 flex items-center justify-between rounded-md border border-accent/40 bg-bg-2 px-3 py-2 font-mono text-[10px]">
          <span className="text-fg">Entitlement</span>
          <span className="inline-flex items-center gap-1.5 text-accent">
            <span className="viz-pulse size-1.5 rounded-full bg-fg" />
            active
          </span>
        </div>
      </div>
    </div>
  );
}

function GameVisual() {
  // Two players, a shared board, a live round timer, and a socket sync line.
  const tiles = [
    [0, 1, 0, 0, 1, 0],
    [0, 0, 2, 0, 0, 1],
    [1, 0, 0, 0, 2, 0],
    [0, 2, 0, 1, 0, 0],
  ];
  return (
    <div className={frame} aria-hidden="true">
      <svg viewBox="0 0 320 240" className="h-full w-full">
        {/* HUD */}
        <text x="20" y="26" fontSize="9" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          ROUND 3 / 5
        </text>
        <text x="160" y="26" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="var(--fg)">
          00:42
        </text>
        <text x="300" y="26" textAnchor="end" fontSize="9" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          60 FPS
        </text>
        <rect x="20" y="34" width="280" height="1" fill="var(--border)" />
        <rect className="viz-progress" x="20" y="34" width="280" height="1" fill="var(--fg)" />

        {/* Player one */}
        <circle cx="34" cy="64" r="10" fill="var(--bg-2)" stroke="var(--fg-muted)" />
        <text x="34" y="67.5" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--fg)">
          P1
        </text>
        <text x="52" y="61" fontSize="8" fontFamily="var(--font-mono)" fill="var(--fg-muted)">
          you
        </text>
        <text x="52" y="71" fontSize="9" fontFamily="var(--font-mono)" fill="var(--fg)">
          1,240
        </text>

        {/* Player two */}
        <circle cx="286" cy="64" r="10" fill="var(--bg-2)" stroke="var(--border)" />
        <text x="286" y="67.5" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--fg-muted)">
          P2
        </text>
        <text x="268" y="61" textAnchor="end" fontSize="8" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          rival
        </text>
        <text x="268" y="71" textAnchor="end" fontSize="9" fontFamily="var(--font-mono)" fill="var(--fg-muted)">
          1,180
        </text>

        {/* Board */}
        {tiles.map((row, r) =>
          row.map((v, c) => {
            const x = 52 + c * 38;
            const y = 90 + r * 30;
            return (
              <g key={`${r}-${c}`}>
                <rect
                  x={x}
                  y={y}
                  width="32"
                  height="24"
                  rx="3"
                  fill={v === 1 ? "var(--fg)" : v === 2 ? "var(--fg-dim)" : "var(--bg-2)"}
                  stroke={v ? "none" : "var(--border)"}
                />
              </g>
            );
          }),
        )}

        {/* Tiles being claimed */}
        <rect className="viz-claim" x="128" y="90" width="32" height="24" rx="3" fill="var(--fg)" />
        <rect className="viz-claim" style={{ animationDelay: "2.5s" }} x="204" y="180" width="32" height="24" rx="3" fill="var(--fg-dim)" />

        {/* Sync line */}
        <rect x="20" y="214" width="280" height="1" fill="var(--border)" />
        <circle className="viz-ring" cx="26" cy="226" r="2" fill="none" stroke="var(--fg-muted)" />
        <circle cx="26" cy="226" r="2" fill="var(--fg)" />
        <text x="34" y="229" fontSize="8" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          socket · state synced 18ms
        </text>
      </svg>
    </div>
  );
}

function BlogVisual() {
  // Article page beside a compact sign-in card: OTP and Google OAuth.
  return (
    <div className={frame} aria-hidden="true">
      <svg viewBox="0 0 320 240" className="h-full w-full">
        {/* Browser chrome */}
        <rect x="16" y="16" width="288" height="208" rx="6" fill="var(--bg-2)" stroke="var(--border)" />
        <rect x="16" y="16" width="288" height="22" rx="6" fill="var(--card)" />
        <rect x="16" y="37" width="288" height="1" fill="var(--border)" />
        <circle cx="30" cy="27" r="2.5" fill="var(--border)" />
        <circle cx="39" cy="27" r="2.5" fill="var(--border)" />
        <circle cx="48" cy="27" r="2.5" fill="var(--border)" />
        <rect x="120" y="22" width="80" height="10" rx="5" fill="var(--bg)" stroke="var(--border)" />

        {/* Article column */}
        <rect x="32" y="52" width="150" height="7" rx="2" fill="var(--fg)" />
        <rect x="32" y="63" width="104" height="7" rx="2" fill="var(--fg)" />
        <circle cx="38" cy="83" r="5" fill="var(--fg-dim)" />
        <rect x="48" y="80" width="54" height="5" rx="2" fill="var(--fg-dim)" />
        {/* Cover image from S3 */}
        <rect x="32" y="96" width="150" height="62" rx="3" fill="var(--card)" stroke="var(--border)" />
        <path className="viz-shimmer" d="M44 148 L78 118 L102 140 L118 128 L170 148 Z" fill="var(--border)" />
        <circle className="viz-shimmer" style={{ animationDelay: "1.2s" }} cx="150" cy="112" r="6" fill="var(--border)" />
        <text x="36" y="154" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          s3://blog-media
        </text>
        {[170, 180, 190, 200].map((y, i) => (
          <rect key={y} x="32" y={y} width={i === 3 ? 90 : 150} height="4" rx="2" fill="var(--border)" />
        ))}

        {/* Sign-in card */}
        <rect x="198" y="52" width="92" height="150" rx="4" fill="var(--card)" stroke="var(--border)" />
        <text x="208" y="68" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--fg)">
          Sign in
        </text>
        <rect x="208" y="78" width="72" height="14" rx="2" fill="var(--bg)" stroke="var(--border)" />
        <text x="213" y="88" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          email
        </text>
        <rect className="viz-blink" x="233" y="81" width="1" height="8" fill="var(--fg-muted)" />
        {/* OTP boxes */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={208 + i * 12.2} y="100" width="10" height="14" rx="2" fill="var(--bg)" stroke="var(--border)" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle
            key={i}
            className="viz-step"
            style={{ "--i": i } as React.CSSProperties}
            cx={213 + i * 12.2}
            cy="107"
            r="1.5"
            fill="var(--fg)"
          />
        ))}
        <text x="208" y="125" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          OTP sent · 00:58
        </text>
        <rect x="208" y="134" width="72" height="16" rx="2" fill="var(--fg)" />
        <text x="244" y="145" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="var(--bg)">
          Verify
        </text>
        <rect x="208" y="160" width="72" height="1" fill="var(--border)" />
        <rect x="208" y="170" width="72" height="16" rx="2" fill="var(--bg)" stroke="var(--border)" />
        <circle cx="219" cy="178" r="4" fill="none" stroke="var(--fg-muted)" />
        <text x="228" y="181" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--fg-muted)">
          Google
        </text>
      </svg>
    </div>
  );
}

function ApartmentVisual() {
  // Role-based dashboard: sidebar of roles, visitors table, live entry/exit log.
  const rows = [
    { name: "R. Mehta", unit: "B-402", type: "Visitor", state: "IN" },
    { name: "DL 3C 1234", unit: "A-108", type: "Vehicle", state: "OUT" },
    { name: "Courier", unit: "C-210", type: "Delivery", state: "IN" },
    { name: "S. Verma", unit: "B-115", type: "Tenant", state: "IN" },
  ];
  return (
    <div className={frame} aria-hidden="true">
      <svg viewBox="0 0 320 240" className="h-full w-full">
        <rect x="16" y="16" width="288" height="208" rx="6" fill="var(--bg-2)" stroke="var(--border)" />

        {/* Sidebar */}
        <rect x="16" y="16" width="78" height="208" fill="var(--card)" />
        <rect x="93" y="16" width="1" height="208" fill="var(--border)" />
        <text x="28" y="36" fontSize="7" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          ROLES
        </text>
        {[
          { l: "Admin", on: true },
          { l: "Secretary", on: false },
          { l: "Security", on: false },
        ].map((r, i) => (
          <g key={r.l}>
            {r.on && <rect x="22" y={46 + i * 20} width="66" height="16" rx="3" fill="var(--bg)" />}
            <circle cx="32" cy={54 + i * 20} r="2" fill={r.on ? "var(--fg)" : "var(--fg-dim)"} />
            <text x="40" y={57 + i * 20} fontSize="7.5" fontFamily="var(--font-mono)" fill={r.on ? "var(--fg)" : "var(--fg-muted)"}>
              {r.l}
            </text>
          </g>
        ))}
        <rect x="22" y="112" width="66" height="1" fill="var(--border)" />
        {["Tenants", "Visitors", "Vehicles", "Entry / Exit"].map((l, i) => (
          <text key={l} x="28" y={128 + i * 16} fontSize="7" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
            {l}
          </text>
        ))}

        {/* Header */}
        <text x="106" y="36" fontSize="8" fontFamily="var(--font-mono)" fill="var(--fg)">
          Entry / Exit log
        </text>
        <circle className="viz-ring" cx="196" cy="33" r="2" fill="none" stroke="var(--fg-muted)" />
        <circle className="viz-pulse" cx="196" cy="33" r="2" fill="var(--fg)" />
        <rect x="236" y="27" width="56" height="12" rx="2" fill="var(--fg)" />
        <text x="264" y="35.5" textAnchor="middle" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--bg)">
          + New entry
        </text>

        {/* Stats */}
        {[
          { k: "Inside", v: "128" },
          { k: "Visitors", v: "14" },
          { k: "Vehicles", v: "41" },
        ].map((s, i) => (
          <g key={s.k}>
            <rect x={106 + i * 64} y="46" width="58" height="30" rx="3" fill="var(--card)" stroke="var(--border)" />
            <text x={112 + i * 64} y="58" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
              {s.k}
            </text>
            <text x={112 + i * 64} y="70" fontSize="9" fontFamily="var(--font-mono)" fill="var(--fg)">
              {s.v}
            </text>
          </g>
        ))}

        {/* Table */}
        <rect x="106" y="88" width="186" height="1" fill="var(--border)" />
        {["NAME", "UNIT", "TYPE", "STATE"].map((h, i) => (
          <text key={h} x={[108, 170, 206, 266][i]} y="100" fontSize="6" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
            {h}
          </text>
        ))}
        <rect x="106" y="106" width="186" height="1" fill="var(--border)" />
        {rows.map((r, i) => (
          <g key={r.name} className={`viz-seq-${i + 1}`}>
            <text x="108" y={120 + i * 20} fontSize="7" fontFamily="var(--font-mono)" fill="var(--fg)">
              {r.name}
            </text>
            <text x="170" y={120 + i * 20} fontSize="7" fontFamily="var(--font-mono)" fill="var(--fg-muted)">
              {r.unit}
            </text>
            <text x="206" y={120 + i * 20} fontSize="7" fontFamily="var(--font-mono)" fill="var(--fg-muted)">
              {r.type}
            </text>
            <rect
              x="264"
              y={112 + i * 20}
              width="26"
              height="11"
              rx="2"
              fill={r.state === "IN" ? "var(--fg)" : "var(--bg)"}
              stroke={r.state === "IN" ? "none" : "var(--border)"}
            />
            <text
              x="277"
              y={120 + i * 20}
              textAnchor="middle"
              fontSize="6"
              fontFamily="var(--font-mono)"
              fill={r.state === "IN" ? "var(--bg)" : "var(--fg-muted)"}
            >
              {r.state}
            </text>
            <rect x="106" y={126 + i * 20} width="186" height="1" fill="var(--border)" />
          </g>
        ))}
        <text x="108" y="212" fontSize="6.5" fontFamily="var(--font-mono)" fill="var(--fg-dim)">
          Spring Boot · MySQL · role guard: ADMIN
        </text>
      </svg>
    </div>
  );
}

function WebVisual() {
  return (
    <div className={frame} aria-hidden="true">
      <div className="absolute inset-4 overflow-hidden rounded border border-border bg-card">
        <div className="flex items-center gap-1.5 border-b border-border px-2.5 py-1.5">
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
          <span className="ml-2 h-2 w-24 rounded bg-border" />
        </div>
        <div className="grid grid-cols-[5rem_1fr] gap-3 p-3">
          <div className="space-y-2">
            {[20, 14, 18, 12].map((w, i) => (
              <div key={i} className="h-2 rounded bg-border" style={{ width: `${w * 4}%` }} />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-3 w-1/2 rounded bg-fg-muted/40" />
            <div className="h-2 w-full rounded bg-border" />
            <div className="h-2 w-5/6 rounded bg-border" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-[4/3] rounded border border-border bg-bg-2" />
              ))}
            </div>
            <div className="mt-2 h-6 w-20 rounded bg-accent/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
