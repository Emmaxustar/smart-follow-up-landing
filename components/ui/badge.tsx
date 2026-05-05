import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-sky-200",
        className,
      )}
      {...props}
    />
  );
}
