import { Plus } from "lucide-react";
import { faqs } from "@/config/site";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="section-y border-y border-line bg-bg-2/60"
    >
      <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title" className="font-display mt-4 text-4xl leading-[1.08] sm:text-5xl">
            Questions, <span className="italic text-lavender">answered plainly.</span>
          </h2>
        </div>

        <div className="divide-y divide-line rounded-2xl border border-line bg-bg/40">
          {faqs.map((f) => (
            <details key={f.q} className="group px-5 sm:px-7">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-semibold text-ink hover:text-lavender sm:text-lg">
                {f.q}
                <Plus
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-violet transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="pb-6 pr-8 text-[0.97rem] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
