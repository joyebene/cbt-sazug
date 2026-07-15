"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  examId: string;
  disabled: boolean;
}

export default function StartExamButton({
  examId,
  disabled,
}: Props) {
  const router = useRouter();

  const handleStart = async () => {
    try {
      // later call API here
      // await examAPI.startExam(examId);

      router.push(`/student/exam/${examId}/take`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={handleStart}
      className="
      w-full
      bg-primary
      hover:bg-primary-dark
      disabled:bg-gray-300
      disabled:cursor-not-allowed
      transition
      text-white
      py-4
      rounded-md
      font-semibold
      flex
      items-center
      justify-center
      gap-3
      shadow-primary
      "
    >
      Start Examination

      <ArrowRight size={20} />
    </button>
  );
}