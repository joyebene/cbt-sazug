"use client";

const legend = [
  {
    color: "bg-primary",
    label: "Current",
  },
  {
    color: "bg-green-500",
    label: "Answered",
  },
  {
    color: "bg-yellow-500",
    label: "Review",
  },
  {
    color: "bg-gray-300",
    label: "Not Answered",
  },
];

export default function QuestionLegend() {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-4">

      <h4 className="font-semibold mb-4">
        Legend
      </h4>

      <div className="space-y-3">

        {legend.map((item) => (

          <div
            key={item.label}
            className="flex items-center gap-3"
          >

            <div
              className={`w-4 h-4 rounded ${item.color}`}
            />

            <span className="text-sm">
              {item.label}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}