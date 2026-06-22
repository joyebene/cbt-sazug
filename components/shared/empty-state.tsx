interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="py-16 text-center">
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="text-slate-500 mt-2">
        {description}
      </p>
    </div>
  );
}