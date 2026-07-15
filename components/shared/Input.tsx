import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-200 mb-1.5 block">
          {label}
        </label>
      )}

      <input
        className={cn(
          "w-full h-11 rounded-lg border border-gray-50 px-4 text-gray-200 placeholder-gray-400 focus:outline-none",
          "focus:ring-2 focus:ring-blue-500",
          error && "border-red-500",
          className
        )}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}