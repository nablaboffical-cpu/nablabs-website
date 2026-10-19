import { site } from "@/config/site";
import { BookCallButton } from "./BookCallButton";
import { ContactActions } from "./ContactActions";

export function FinalCta() {
  const email = site.contactEmail;

  return (
    <section id="contact" aria-labelledby="cta-title" className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-surface via-bg-2 to-bg p-8 text-center sm:p-14">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-violet/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 id="cta-title" className="font-display text-4xl leading-[1.08] sm:text-6xl">
              Ready to Build <span className="italic text-lavender">What&apos;s Next?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Whether you want to automate repetitive work or build a better website, let&apos;s
              explore what makes sense for your business.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <BookCallButton className="btn btn-primary">Book Your Free Discovery Call</BookCallButton>
              {email ? (
                <ContactActions email={email} />
              ) : (
                <a href="#contact-info" className="btn btn-ghost">
                  Tell Us About Your Project
                </a>
              )}
            </div>

            {!email && (
              <div id="contact-info" className="mx-auto mt-10 max-w-md scroll-mt-28 text-sm">
                <p className="rounded-xl border border-dashed border-line px-4 py-3 text-muted">
                  Setup needed: no contact email has been added yet. Set{" "}
                  <code className="text-lavender">NEXT_PUBLIC_CONTACT_EMAIL</code> to turn this
                  button into a working email link. Until then, use the booking button above.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
