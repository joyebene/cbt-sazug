import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({
  title,
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "bg-card rounded-md border border-border shadow-sm overflow-hidden",
        className
      )}
    >
      {title && (
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
      )}

      <div className="p-6">{children}</div>
    </div>
  );
}