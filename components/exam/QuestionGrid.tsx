"use client";

interface Props {
  total: number;
  current: number;
  onJump: (index: number) => void;
}

export default function QuestionGrid({
  total,
  current,
  onJump,
}: Props) {
  return (
    <div className="grid grid-cols-5 gap-2">

      {Array.from({ length: total }).map((_, index) => (

        <button
          key={index}
          onClick={() => onJump(index)}
          className={`
            h-10
            rounded-md
            font-semibold
            transition

            ${
              current === index
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }
          `}
        >
          {index + 1}
        </button>

      ))}

    </div>
  );
}