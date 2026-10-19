import { useId } from "react";

// Symbol: an abstract N built from four connected nodes, like a small lab graph.
export function LogoMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const id = useId();
  const g = `nl-grad-${id}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id={g} x1="6" y1="34" x2="34" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#C4B5FD" />
        </linearGradient>
      </defs>
      <path
        d="M9 31V9L31 31V9"
        stroke={`url(#${g})`}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="4" fill="#10091B" stroke={`url(#${g})`} strokeWidth="2.4" />
      <circle cx="31" cy="31" r="4" fill="#10091B" stroke={`url(#${g})`} strokeWidth="2.4" />
      <circle cx="9" cy="31" r="2.6" fill="#8B5CF6" />
      <circle cx="31" cy="9" r="2.6" fill="#C4B5FD" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={34} />
      <span className="text-[1.35rem] font-semibold leading-none tracking-tight text-ink">
        Nab<span className="text-lavender">Labs</span>
      </span>
    </span>
  );
}
