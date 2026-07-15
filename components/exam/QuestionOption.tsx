"use client";

interface Props {
  letter: string;
  text: string;
  selected: boolean;
  onClick: () => void;
}

export default function QuestionOption({
  letter,
  text,
  selected,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        flex
        items-center
        gap-5
        rounded-md
        border
        px-5
        py-4
        text-left
        transition-all

        ${
          selected
            ? "border-primary bg-primary/5"
            : "border-gray-200 hover:border-primary hover:bg-gray-50"
        }
      `}
    >

      <div
        className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border-2
          font-semibold

          ${
            selected
              ? "border-primary bg-primary text-white"
              : "border-gray-300 text-gray-600"
          }
        `}
      >
        {letter}
      </div>

      <span className="text-base text-gray-800">
        {text}
      </span>

    </button>
  );
}