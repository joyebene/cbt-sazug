interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex gap-2">
      {Array.from(
        { length: totalPages },
        (_, index) => (
          <button
            key={index}
            onClick={() =>
              onPageChange(index + 1)
            }
            className={`h-9 w-9 rounded ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-slate-100"
            }`}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
}