import { processSteps } from "@/config/site";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="section-y border-y border-line bg-bg-2/60"
    >
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow">How we work</p>
          <h2 id="process-title" className="font-display mt-4 text-4xl leading-[1.08] sm:text-5xl">
            A Clear Process.{" "}
            <span className="italic text-lavender">Solutions Built Around Your Business.</span>
          </h2>
        </div>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-4 lg:gap-5">
          {/* connecting line, desktop only */}
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-6 hidden h-px bg-gradient-to-r from-transparent via-violet/50 to-transparent lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 lg:block">
              <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-violet/60 bg-surface font-display text-xl text-lavender">
                {i + 1}
              </div>
              <div className="lg:mt-6">
                <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
