"use client";

import { ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { Button } from "@/components/shared/Button";

interface Props {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function QuestionFooter({
  current,
  total,
  onPrevious,
  onNext,
}: Props) {
  return (
    <div className="bg-white rounded-md border border-border p-5 flex justify-between">

      <Button variant="secondary" className="hidden md:flex items-center gap-2">
        <Flag className="w-4 h-4 mr-2" />
        Mark for Review
      </Button>

      <div className="flex gap-3">

        <Button
          variant="secondary"
          onClick={onPrevious}
          disabled={current === 0}
          className="flex items-center gap-2 p-4"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        <Button
          variant="primary"
          onClick={onNext}
          disabled={current === total - 1}
          className="flex items-center gap-2 p-4"
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>

      </div>
    </div>
  );
}