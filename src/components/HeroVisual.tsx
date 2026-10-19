// Abstract workflow: inquiries flow into a central system and out as organized next steps.
// Pure SVG and CSS. Decorative only, so it is hidden from assistive technology.
export function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id="hv-line" x1="0" y1="0" x2="520" y2="480" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#C4B5FD" />
        </linearGradient>
        <radialGradient id="hv-core" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#8B5CF6" stopOpacity="0.55" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hv-card" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#2a1c3d" />
          <stop offset="1" stopColor="#1a1028" />
        </linearGradient>
      </defs>

      {/* orbit rings */}
      <circle cx="260" cy="240" r="196" stroke="#3A2D52" strokeWidth="1" strokeDasharray="2 7" />
      <circle cx="260" cy="240" r="128" stroke="#3A2D52" strokeWidth="1" />
      <circle cx="260" cy="240" r="150" fill="url(#hv-core)" />

      {/* connections: inputs left, outputs right */}
      <g stroke="url(#hv-line)" strokeWidth="1.6" strokeLinecap="round" className="nl-flow" opacity="0.9">
        <path d="M78 120 C150 130 190 190 232 226" />
        <path d="M70 250 C130 250 180 245 224 242" />
        <path d="M92 380 C150 350 190 290 234 260" />
        <path d="M290 226 C340 190 390 140 448 110" />
        <path d="M296 242 C350 244 400 250 452 252" />
        <path d="M288 262 C340 300 400 350 440 386" />
      </g>

      {/* input nodes */}
      <g className="nl-float" style={{ animationDelay: "0s" }}>
        <rect x="30" y="92" width="96" height="56" rx="14" fill="url(#hv-card)" stroke="#3A2D52" />
        <rect x="44" y="108" width="44" height="6" rx="3" fill="#C4B5FD" opacity="0.85" />
        <rect x="44" y="124" width="64" height="5" rx="2.5" fill="#B3A9C9" opacity="0.4" />
      </g>
      <g className="nl-float" style={{ animationDelay: "-2s" }}>
        <rect x="22" y="222" width="96" height="56" rx="14" fill="url(#hv-card)" stroke="#3A2D52" />
        <rect x="36" y="238" width="52" height="6" rx="3" fill="#C4B5FD" opacity="0.85" />
        <rect x="36" y="254" width="62" height="5" rx="2.5" fill="#B3A9C9" opacity="0.4" />
      </g>
      <g className="nl-float" style={{ animationDelay: "-4s" }}>
        <rect x="44" y="352" width="96" height="56" rx="14" fill="url(#hv-card)" stroke="#3A2D52" />
        <rect x="58" y="368" width="40" height="6" rx="3" fill="#C4B5FD" opacity="0.85" />
        <rect x="58" y="384" width="66" height="5" rx="2.5" fill="#B3A9C9" opacity="0.4" />
      </g>

      {/* output nodes */}
      <g className="nl-float" style={{ animationDelay: "-1s" }}>
        <rect x="396" y="82" width="104" height="56" rx="14" fill="url(#hv-card)" stroke="#3A2D52" />
        <circle cx="418" cy="110" r="8" fill="#8B5CF6" />
        <rect x="434" y="104" width="50" height="6" rx="3" fill="#F8F7FC" opacity="0.8" />
        <rect x="434" y="116" width="34" height="5" rx="2.5" fill="#B3A9C9" opacity="0.4" />
      </g>
      <g className="nl-float" style={{ animationDelay: "-3s" }}>
        <rect x="402" y="224" width="104" height="56" rx="14" fill="url(#hv-card)" stroke="#3A2D52" />
        <circle cx="424" cy="252" r="8" fill="#C4B5FD" />
        <rect x="440" y="246" width="50" height="6" rx="3" fill="#F8F7FC" opacity="0.8" />
        <rect x="440" y="258" width="34" height="5" rx="2.5" fill="#B3A9C9" opacity="0.4" />
      </g>
      <g className="nl-float" style={{ animationDelay: "-5s" }}>
        <rect x="388" y="364" width="104" height="56" rx="14" fill="url(#hv-card)" stroke="#3A2D52" />
        <circle cx="410" cy="392" r="8" fill="#8B5CF6" />
        <rect x="426" y="386" width="50" height="6" rx="3" fill="#F8F7FC" opacity="0.8" />
        <rect x="426" y="398" width="34" height="5" rx="2.5" fill="#B3A9C9" opacity="0.4" />
      </g>

      {/* central system */}
      <g>
        <rect x="212" y="192" width="96" height="96" rx="26" fill="#21152F" stroke="url(#hv-line)" strokeWidth="1.6" />
        <rect x="204" y="184" width="112" height="112" rx="32" stroke="#8B5CF6" strokeOpacity="0.25" className="nl-pulse" />
        <path
          d="M240 266V214L280 266V214"
          stroke="url(#hv-line)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="240" cy="214" r="6.5" fill="#21152F" stroke="url(#hv-line)" strokeWidth="3.5" />
        <circle cx="280" cy="266" r="6.5" fill="#21152F" stroke="url(#hv-line)" strokeWidth="3.5" />
        <circle cx="240" cy="266" r="4" fill="#8B5CF6" />
        <circle cx="280" cy="214" r="4" fill="#C4B5FD" />
      </g>
    </svg>
  );
}
