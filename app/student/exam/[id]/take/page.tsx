"use client";

import { useState } from "react";
import ExamLayout from "@/components/exam/ExamLayout";
import AntiCheatBanner from "@/components/exam/AntiCheatBanner";
import QuestionCard from "@/components/exam/QuestionCard";
import QuestionSidebar from "@/components/exam/QuestionSidebar";
import QuestionFooter from "@/components/exam/QuestionFooter";
import CourseHeader from "@/components/exam/CourseHeader";

const dummyQuestions = [
  {
    id: 1,
    subject: "Computer Science",
    marks: 2,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    id: 2,
    subject: "Computer Science",
    marks: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
  },
  {
    id: 3,
    subject: "Computer Science",
    marks: 2,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
  },
];

export default function TakeExamPage() {
  const [current, setCurrent] = useState(0);

  return (
    <ExamLayout>
      <div className="space-y-4">

        <CourseHeader
          courseCode="CSC 401"
          courseTitle="Data Structures & Algorithms"
        />

        <AntiCheatBanner />

        <div className="grid lg:grid-cols-[1fr_300px] gap-6">

          <QuestionCard
            question={dummyQuestions[current]}
            current={current + 1}
            total={dummyQuestions.length}
          />

          <QuestionSidebar
            current={current}
            total={dummyQuestions.length}
            onJump={setCurrent}
          />

        </div>

        <QuestionFooter
          current={current}
          total={dummyQuestions.length}
          onPrevious={() => setCurrent((p) => Math.max(0, p - 1))}
          onNext={() =>
            setCurrent((p) =>
              Math.min(dummyQuestions.length - 1, p + 1)
            )
          }
        />

      </div>
    </ExamLayout>
  );
}