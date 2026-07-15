import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
}

export function Button({
  variant = "primary",
  loading,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading}
      className={cn(
        "h-11 rounded-md px-5 font-medium transition",
        {
          "bg-primary text-white hover:bg-primary-dark":
            variant === "primary",
          "bg-slate-100 text-slate-900":
            variant === "secondary",
          "bg-red-600 text-white":
            variant === "danger",
        },
        className
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}