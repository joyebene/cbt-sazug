"use client";

import { useState } from "react";

import ExamInfoCard from "@/components/exam/ExamInfoCard";
import CandidateCard from "@/components/exam/CandidateCard";
import InstructionCard from "@/components/exam/InstructionCard";
import SystemCheckCard from "@/components/exam/SystemCheckCard";
import InstructionCheckbox from "@/components/exam/InstructionCheckbox";
import StartExamButton from "@/components/exam/StartExamButton";
import ExamLayout from "@/components/exam/ExamLayout";

export default function ExamInstructionsPage() {
  const [accepted, setAccepted] = useState(false);

  return (
    <ExamLayout>
      <div className="max-w-7xl mx-auto py-5 space-y-8">

        <ExamInfoCard
          courseCode="CSC301"
          courseTitle="Computer Science II"
          semester="First"
          session="2025/2026"
          duration={90}
          questions={50}
          passMark={50}
        />

        <div className="grid lg:grid-cols-2 gap-6">

          <CandidateCard
            name="Joy Ebene"
            matricNumber="UG20CSC001"
            department="Computer Science"
            level="300 Level"
          />

          <SystemCheckCard />

        </div>

        <InstructionCard />

        <InstructionCheckbox
          checked={accepted}
          onChange={setAccepted}
        />

        <StartExamButton
          examId="123456"
          disabled={!accepted}
        />

      </div>
    </ExamLayout>
  );
}