"use client";

import { Button } from "@/components/shared/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuestionNavigationProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onJumpToQuestion: (index: number) => void;
}

export default function QuestionNavigation({
  currentQuestionIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onJumpToQuestion,
}: QuestionNavigationProps) {
  return (
    <div className="bg-white border border-border rounded-xl shadow-sm p-6 space-y-4">
      <h3 className="text-lg font-semibold">Question Navigation</h3>

      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          onClick={onPrevious}
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <span className="font-medium">
          {currentQuestionIndex + 1} / {totalQuestions}
        </span>
        <Button
          variant="secondary"
          onClick={onNext}
          disabled={currentQuestionIndex === totalQuestions - 1}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <Button
            key={index}
            variant={index === currentQuestionIndex ? "primary" : "secondary"}
            onClick={() => onJumpToQuestion(index)}
            size="sm"
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}