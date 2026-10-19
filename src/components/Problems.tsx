import { problems } from "@/config/site";

export function Problems() {
  return (
    <section className="section-y" aria-labelledby="problems-title">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow">The problem</p>
          <h2 id="problems-title" className="font-display mt-4 text-4xl leading-[1.08] sm:text-5xl">
            Your Business Shouldn&apos;t Be Held Back by{" "}
            <span className="italic text-lavender">Manual Work.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Do any of these sound familiar? Most growing businesses run into them sooner or later.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {problems.map((p, i) => (
            <li
              key={p.title}
              className={`card p-6 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <span className="font-display text-3xl text-violet" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
