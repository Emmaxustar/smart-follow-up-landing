import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "default" | "secondary" | "ghost";
  size?: "default" | "lg";
  href?: string;
  className?: string;
  children?: React.ReactNode;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

export function Button({
  className,
  variant = "default",
  size = "default",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:pointer-events-none disabled:opacity-50",
    variant === "default" &&
      "bg-sky-500 px-5 text-slate-950 shadow-[0_10px_30px_rgba(14,165,233,0.35)] hover:bg-sky-400",
    variant === "secondary" &&
      "border border-white/15 bg-white/8 px-5 text-white hover:bg-white/12",
    variant === "ghost" && "px-4 text-slate-300 hover:text-white",
    size === "default" && "h-11 text-sm",
    size === "lg" && "h-[52px] px-6 text-base",
    className,
  );

  if (href) {
    return (
      <a className={classes} href={href} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
