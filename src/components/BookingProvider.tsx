"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ExternalLink, X } from "lucide-react";
import { calendlyUrl } from "@/config/site";

type BookingContextValue = { open: () => void };
const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}

// The one and only place the Calendly URL is read and checked.
function resolveCalendly(raw: string): { page: string; embed: string } | null {
  if (!raw || /YOUR-USERNAME/i.test(raw)) return null;
  try {
    const u = new URL(raw);
    const host = u.hostname.toLowerCase();
    if (u.protocol !== "https:") return null;
    if (host !== "calendly.com" && !host.endsWith(".calendly.com")) return null;
    const embed = new URL(u.toString());
    embed.searchParams.set("hide_gdpr_banner", "1");
    embed.searchParams.set("background_color", "1a1028");
    embed.searchParams.set("text_color", "f8f7fc");
    embed.searchParams.set("primary_color", "8b5cf6");
    return { page: u.toString(), embed: embed.toString() };
  } catch {
    return null;
  }
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const calendly = useMemo(() => resolveCalendly(calendlyUrl), []);

  const open = useCallback(() => {
    setIsOpen(true);
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setIsOpen(false);
      document.documentElement.style.overflow = "";
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="booking-title"
        onClick={(e) => {
          // Click on the dimmed backdrop closes the dialog.
          if (e.target === dialogRef.current) close();
        }}
        className="m-auto h-[min(46rem,92dvh)] w-[min(44rem,94vw)] overflow-hidden rounded-2xl border border-line bg-bg-2 p-0 text-ink shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
            <h2 id="booking-title" className="text-base font-semibold">
              Book a Free Discovery Call
            </h2>
            <button
              type="button"
              onClick={close}
              aria-label="Close booking window"
              className="rounded-lg p-2 text-muted transition hover:bg-white/5 hover:text-ink"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <div className="min-h-0 flex-1">
            {calendly ? (
              isOpen && (
                <iframe
                  title="Book a call with NabLabs"
                  src={calendly.embed}
                  className="h-full w-full border-0"
                />
              )
            ) : (
              <div className="h-full overflow-y-auto p-6 sm:p-8">
                <p className="eyebrow">Setup needed</p>
                <h3 className="mt-3 text-xl font-semibold">
                  The booking link has not been added yet
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  This is a development placeholder. Visitors will see the real
                  Calendly calendar here once the link is set.
                </p>
                <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted">
                  <li>
                    Copy your Calendly event link. It looks like{" "}
                    <code className="rounded bg-white/5 px-1.5 py-0.5 text-lavender">
                      https://calendly.com/your-name/your-event
                    </code>
                    .
                  </li>
                  <li>
                    Locally: put{" "}
                    <code className="rounded bg-white/5 px-1.5 py-0.5 text-lavender">
                      NEXT_PUBLIC_CALENDLY_URL=your link
                    </code>{" "}
                    in a file named{" "}
                    <code className="rounded bg-white/5 px-1.5 py-0.5 text-lavender">
                      .env.local
                    </code>{" "}
                    and restart.
                  </li>
                  <li>
                    On Vercel: Project, Settings, Environment Variables. Add{" "}
                    <code className="rounded bg-white/5 px-1.5 py-0.5 text-lavender">
                      NEXT_PUBLIC_CALENDLY_URL
                    </code>
                    , then redeploy.
                  </li>
                </ol>
              </div>
            )}
          </div>

          {calendly && (
            <div className="border-t border-line px-5 py-3 text-sm">
              <a
                href={calendly.page}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-lavender hover:underline"
              >
                Calendar not loading? Open it in a new tab
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </dialog>
    </BookingContext.Provider>
  );
}
