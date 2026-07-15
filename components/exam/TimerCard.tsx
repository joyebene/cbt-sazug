"use client";

import { Clock3 } from "lucide-react";

interface Props {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export default function TimerCard({
  hours = 1,
  minutes = 23,
  seconds = 45,
}: Props) {
  const Item = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="flex-1 rounded-md bg-primary text-white py-3 text-center">
      <div className="text-2xl font-bold">
        {String(value).padStart(2, "0")}
      </div>

      <div className="text-xs uppercase tracking-wider opacity-80 mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <div className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">

      <div className="flex items-center gap-2 mb-4">

        <Clock3 className="text-primary w-5 h-5" />

        <h3 className="font-semibold">
          Time Remaining
        </h3>

      </div>

      <div className="flex gap-2">

        <Item value={hours} label="Hours" />

        <Item value={minutes} label="Minutes" />

        <Item value={seconds} label="Seconds" />

      </div>

    </div>
  );
}