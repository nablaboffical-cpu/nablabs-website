"use client";

import type { ReactNode } from "react";
import { useBooking } from "./BookingProvider";

export function BookCallButton({
  children,
  className = "btn btn-primary",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useBooking();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
