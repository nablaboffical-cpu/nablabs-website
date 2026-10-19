import type { ReactNode } from "react";
import type { Service } from "@/config/site";
import { BookCallButton } from "./BookCallButton";

export function ServiceDivision({
  id,
  index,
  eyebrow,
  title,
  accent,
  description,
  services,
  cta,
  tone = "base",
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  services: Service[];
  cta: ReactNode;
  tone?: "base" | "alt";
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section-y ${tone === "alt" ? "border-y border-line bg-bg-2/60" : ""}`}
    >
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">
            {index} &middot; {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="font-display mt-4 text-4xl leading-[1.08] sm:text-5xl">
            {title} <span className="italic text-lavender">{accent}</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{description}</p>
          <div className="mt-8">
            <BookCallButton className="btn btn-primary">{cta}</BookCallButton>
          </div>
        </div>

        <ul className="space-y-4">
          {services.map((s) => (
            <li key={s.title} className="card p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
              <dl className="mt-4 grid gap-4 text-[0.95rem] leading-relaxed sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    The problem
                  </dt>
                  <dd className="mt-1.5 text-muted">{s.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-lavender">
                    How we help
                  </dt>
                  <dd className="mt-1.5 text-ink/90">{s.solution}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                    The benefit
                  </dt>
                  <dd className="mt-1.5 text-muted">{s.benefit}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
