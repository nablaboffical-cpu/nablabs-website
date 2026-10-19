import { labItems, type LabItem } from "@/config/site";

// Small abstract illustrations for each concept. Decorative, so hidden from screen readers.
function Illustration({ kind }: { kind: LabItem["kind"] }) {
  const common = { viewBox: "0 0 320 160", fill: "none", "aria-hidden": true, focusable: false } as const;
  const panel = "#21152F";
  const line = "#3A2D52";
  if (kind === "workflow") {
    return (
      <svg {...common} className="h-full w-full">
        <path d="M56 80H120M200 80H264" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 5" />
        <rect x="20" y="58" width="44" height="44" rx="12" fill={panel} stroke={line} />
        <rect x="138" y="52" width="56" height="56" rx="16" fill={panel} stroke="#8B5CF6" />
        <path d="M154 92V68L178 92V68" stroke="#C4B5FD" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="256" y="30" width="44" height="30" rx="9" fill={panel} stroke={line} />
        <rect x="256" y="100" width="44" height="30" rx="9" fill={panel} stroke={line} />
        <path d="M194 80C226 80 232 46 256 46M194 80C226 80 232 114 256 114" stroke="#8B5CF6" strokeWidth="1.5" />
      </svg>
    );
  }
  if (kind === "inbox") {
    return (
      <svg {...common} className="h-full w-full">
        <rect x="24" y="22" width="150" height="34" rx="12" fill={panel} stroke={line} />
        <rect x="38" y="35" width="70" height="7" rx="3.5" fill="#B3A9C9" opacity="0.5" />
        <rect x="146" y="68" width="150" height="34" rx="12" fill="#2d1d45" stroke="#8B5CF6" />
        <rect x="160" y="81" width="96" height="7" rx="3.5" fill="#C4B5FD" opacity="0.9" />
        <rect x="24" y="114" width="150" height="30" rx="12" fill={panel} stroke={line} />
        <rect x="38" y="125" width="54" height="7" rx="3.5" fill="#B3A9C9" opacity="0.5" />
      </svg>
    );
  }
  if (kind === "landing") {
    return (
      <svg {...common} className="h-full w-full">
        <rect x="40" y="16" width="240" height="128" rx="14" fill={panel} stroke={line} />
        <rect x="40" y="16" width="240" height="22" rx="14" fill="#2a1c3d" />
        <rect x="64" y="56" width="120" height="12" rx="6" fill="#F8F7FC" opacity="0.85" />
        <rect x="64" y="76" width="88" height="8" rx="4" fill="#B3A9C9" opacity="0.5" />
        <rect x="64" y="100" width="64" height="20" rx="8" fill="#8B5CF6" />
        <circle cx="230" cy="94" r="30" fill="#8B5CF6" opacity="0.22" />
        <circle cx="230" cy="94" r="14" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg {...common} className="h-full w-full">
      <rect x="20" y="16" width="64" height="128" rx="12" fill={panel} stroke={line} />
      <rect x="30" y="30" width="44" height="6" rx="3" fill="#C4B5FD" opacity="0.8" />
      <rect x="30" y="46" width="36" height="5" rx="2.5" fill="#B3A9C9" opacity="0.4" />
      <rect x="30" y="58" width="40" height="5" rx="2.5" fill="#B3A9C9" opacity="0.4" />
      <rect x="96" y="16" width="204" height="56" rx="12" fill={panel} stroke={line} />
      <path d="M110 58C138 50 150 34 176 40C202 46 214 28 240 30C262 31 274 36 288 28" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      <rect x="96" y="84" width="98" height="60" rx="12" fill={panel} stroke={line} />
      <rect x="202" y="84" width="98" height="60" rx="12" fill={panel} stroke={line} />
      <rect x="110" y="122" width="12" height="12" rx="3" fill="#8B5CF6" opacity="0.8" />
      <rect x="128" y="108" width="12" height="26" rx="3" fill="#C4B5FD" opacity="0.8" />
      <rect x="146" y="100" width="12" height="34" rx="3" fill="#8B5CF6" opacity="0.8" />
    </svg>
  );
}

export function Lab() {
  return (
    <section id="lab" aria-labelledby="lab-title" className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow">The Lab</p>
          <h2 id="lab-title" className="font-display mt-4 text-4xl leading-[1.08] sm:text-5xl">
            Concept builds that show <span className="italic text-lavender">how we think.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            These are concept demonstrations, not client projects. They show the kind of systems and
            interfaces we design. Real case studies will take their place as projects are completed.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {labItems.map((item) => (
            <li key={item.title} className="card overflow-hidden">
              <div className="relative h-44 border-b border-line bg-gradient-to-br from-bg-2 to-bg p-5">
                <span className="absolute right-4 top-4 rounded-full border border-line bg-bg/80 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-lavender">
                  Concept demo
                </span>
                <Illustration kind={item.kind} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
