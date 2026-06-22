interface CardProps {
  children: React.ReactNode;
}

export function Card({
  children,
}: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {children}
    </div>
  );
}