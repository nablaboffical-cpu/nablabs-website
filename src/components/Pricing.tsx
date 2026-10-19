import { Check, Info } from "lucide-react";
import { aiPlans, pricingNotes, webPlans, type Plan } from "@/config/site";
import { BookCallButton } from "./BookCallButton";

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <li
      className={`card flex flex-col p-6 sm:p-7 ${
        plan.highlight ? "!border-violet/70 shadow-[0_24px_60px_-30px_rgba(139,92,246,0.7)]" : ""
      }`}
    >
      <h4 className="text-lg font-semibold text-ink">{plan.name}</h4>
      <p className="mt-1.5 min-h-[2.75rem] text-sm leading-relaxed text-muted">{plan.summary}</p>

      <p className="mt-6 flex items-baseline gap-2">
        <span className="text-xs font-medium uppercase tracking-wider text-muted">Starting at</span>
      </p>
      <p className="mt-1 flex items-baseline gap-2">
        <span className="font-display text-5xl text-ink">${plan.price}</span>
        <span className="text-sm font-medium text-lavender">USD</span>
      </p>

      <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6 text-sm leading-relaxed text-ink/90">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3">
            <Check size={17} className="mt-0.5 shrink-0 text-violet" aria-hidden="true" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <BookCallButton className={`btn mt-7 w-full ${plan.highlight ? "btn-primary" : "btn-ghost"}`}>
        Discuss This Package
      </BookCallButton>
    </li>
  );
}

function PlanGroup({ title, plans }: { title: string; plans: Plan[] }) {
  return (
    <div>
      <h3 className="font-display text-3xl text-ink sm:text-4xl">{title}</h3>
      <ul className="mt-6 grid gap-5 lg:grid-cols-3">
        {plans.map((p) => (
          <PlanCard key={p.name} plan={p} />
        ))}
      </ul>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow">Pricing</p>
          <h2 id="pricing-title" className="font-display mt-4 text-4xl leading-[1.08] sm:text-5xl">
            Clear starting points, <span className="italic text-lavender">tailored to your scope.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every price below is a starting price in USD. Your final fee depends on scope,
            integrations, complexity and agreed deliverables.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          <PlanGroup title="AI Solutions & Business Automation" plans={aiPlans} />
          <PlanGroup title="Full-Stack Web Development" plans={webPlans} />
        </div>

        <aside
          aria-label="Pricing notes"
          className="mt-12 rounded-2xl border border-line bg-bg-2/70 p-6 sm:p-7"
        >
          <p className="flex items-center gap-2 text-sm font-semibold text-ink">
            <Info size={17} className="text-lavender" aria-hidden="true" />
            Good to know
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
            {pricingNotes.map((n) => (
              <li key={n} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lavender" aria-hidden="true" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="mt-14 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-bg-2 p-8 text-center sm:p-12">
          <h3 className="font-display text-3xl sm:text-4xl">Not Sure What Your Business Needs?</h3>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Tell us what you&apos;re trying to improve. We&apos;ll discuss your goals and help
            identify a practical next step.
          </p>
          <div className="mt-8">
            <BookCallButton className="btn btn-primary">Book a Free Discovery Call</BookCallButton>
          </div>
        </div>
      </div>
    </section>
  );
}
