import { site } from "@/config/site";
import { Logo } from "./Logo";

const links = [
  { label: "AI Solutions", href: "#ai-solutions" },
  { label: "Web Development", href: "#web-development" },
  { label: "Pricing", href: "#pricing" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const socials = site.socials.filter((s) => s.href);
  return (
    <footer className="border-t border-line bg-bg-2/60">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="#top" aria-label="NabLabs, back to top">
            <Logo />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            AI solutions and full-stack web development for businesses that want to win customers,
            save time, and scale with confidence.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-ink">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-ink">Get in touch</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.contactEmail && (
              <li>
                <a href={`mailto:${site.contactEmail}`} className="text-muted hover:text-ink">
                  {site.contactEmail}
                </a>
              </li>
            )}
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
            {!site.contactEmail && socials.length === 0 && (
              <li className="text-muted">
                Use the booking button to start a conversation.
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="container-x py-5 text-xs text-muted">
          &copy; {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
