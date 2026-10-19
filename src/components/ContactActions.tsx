"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

const SUBJECT = "New project inquiry";
const BODY = [
  "Hi NabLabs team,",
  "",
  "I'd like to talk about a project.",
  "",
  "My name:",
  "My business:",
  "What I'm trying to improve:",
  "",
].join("\r\n");

// "Tell Us About Your Project" opens a ready-to-send email. Some visitors have no mail app
// set up, so a Gmail link and a copy button sit right below as backups.
export function ContactActions({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const mailto = `mailto:${email}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
  const gmail =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${encodeURIComponent(email)}` +
    `&su=${encodeURIComponent(SUBJECT)}` +
    `&body=${encodeURIComponent(BODY)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this email address:", email);
    }
  }

  return (
    <>
      <a href={mailto} className="btn btn-ghost">
        <Mail size={18} aria-hidden="true" />
        Tell Us About Your Project
      </a>

      <div className="basis-full" />
      <p className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted">
        <span>Email app didn&apos;t open?</span>
        <a
          href={gmail}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lavender underline-offset-4 hover:underline"
        >
          Open in Gmail
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 text-lavender underline-offset-4 hover:underline"
        >
          {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
          {copied ? "Copied" : email}
        </button>
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? "Email address copied" : ""}
        </span>
      </p>
    </>
  );
}
