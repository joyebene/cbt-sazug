"use client";

import TimerCard from "./TimerCard";
import QuestionLegend from "./QuestionLegend";
import QuestionGrid from "./QuestionGrid";
import { Button } from "@/components/shared/Button";
import { CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/shared/modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  current: number;
  total: number;
  onJump: (index: number) => void;
}

export default function QuestionSidebar({
  current,
  total,
  onJump,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    // TODO: Implement actual submission logic (e.g., API call to submit exam data)
    console.log("Submitting examination...");

    // Simulate API call
    setTimeout(() => {
      alert("Examination submitted successfully!");
      setIsModalOpen(false);
      router.push("/student"); // Redirect to the student home page
    }, 1000);
  };

  return (
    <aside className="space-y-4">

      <TimerCard />

      <QuestionLegend />

      <div className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">

        <div className="flex items-center justify-between mb-4">

          <h3 className="font-semibold">
            Questions
          </h3>

          <span className="text-sm text-gray-500">
            {current + 1}/{total}
          </span>

        </div>

        <QuestionGrid
          total={total}
          current={current}
          onJump={onJump}
        />

      </div>

      <Button
        variant="primary"
        className="w-full h-12 text-base flex items-center justify-center gap-2"
        onClick={() => setIsModalOpen(true)}
      >
        <CheckCircle2 className="w-5 h-5" />
        Submit Examination
      </Button>

      <Modal
        open={isModalOpen}
        title="Confirm Submission"
        onClose={() => setIsModalOpen(false)}
      >
        <div className="text-center">
          <p>Are you sure you want to submit the examination?</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>

    </aside>
  );
}