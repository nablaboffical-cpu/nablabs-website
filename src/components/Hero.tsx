import { ArrowRight, Check } from "lucide-react";
import { benefits } from "@/config/site";
import { BookCallButton } from "./BookCallButton";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        <div>
          <p className="eyebrow">Your Business Growth Lab</p>
          <h1 className="font-display mt-5 text-[2.9rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4.6rem]">
            Turn Business Bottlenecks <span className="italic text-lavender">Into Growth.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            We build intelligent AI systems and high-performing websites that help your business
            win customers, save time, and scale with confidence.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <BookCallButton className="btn btn-primary">Book a Free Discovery Call</BookCallButton>
            <a href="#ai-solutions" className="btn btn-ghost">
              Explore Our Services
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <HeroVisual className="h-auto w-full" />
        </div>
      </div>

      <div className="relative border-y border-line bg-bg-2/60">
        <ul className="container-x grid gap-3 py-5 sm:grid-cols-3 sm:gap-6">
          {benefits.map((b) => (
            <li key={b} className="flex items-center justify-center gap-2.5 text-sm font-medium text-ink sm:justify-start">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-violet/20 text-lavender">
                <Check size={14} aria-hidden="true" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
