"use client";

import { useState } from "react";
import Card from "@/components/exam/ExamCard";
import QuestionOption from "./QuestionOption";
import { CircleHelp } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  marks?: number;
}

interface Props {
  question: Question;
  current: number;
  total: number;
}

export default function QuestionCard({
  question,
  current,
  total,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Card className="p-0 overflow-hidden">

      {/* Header */}

      <div className="border-b bg-gray-50 px-6 py-4">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Question {current} of {total}
            </p>

          </div>

          <div className="text-right">

            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">

              <CircleHelp size={16} />

              {question.marks ?? 2} Marks

            </span>

          </div>

        </div>

      </div>

      {/* Question */}

      <div className="md:px-8 py-8">

        <h3 className="text-xl font-medium leading-8 text-gray-900">

          {question.question}

        </h3>

        {/* Options */}

        <div className="mt-8 space-y-4">

          {question.options.map((option, index) => (

            <QuestionOption
              key={index}
              letter={String.fromCharCode(65 + index)}
              text={option}
              selected={selected === index}
              onClick={() => setSelected(index)}
            />

          ))}

        </div>

      </div>

    </Card>
  );
}