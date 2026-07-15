import Card from "@/components/exam/ExamCard";
import { ShieldCheck } from "lucide-react";

const instructions = [
  "Read every question carefully before selecting an answer.",
  "The examination timer starts immediately after clicking Start Examination.",
  "Do not refresh or close the browser during the examination.",
  "Switching tabs or minimizing the browser will be recorded.",
  "Answers are automatically saved.",
  "Each question carries equal marks unless stated otherwise.",
  "Use the Question Navigator to move between questions.",
  "Click Submit Examination before the timer expires.",
];

export default function InstructionCard() {
  return (
    <Card title="Examination Instructions">

      <div className="space-y-4">

        {instructions.map((instruction, index) => (

          <div
            key={index}
            className="flex items-start gap-3"
          >

            <div className="bg-primary/10 p-2 rounded-full">

              <ShieldCheck className="w-5 h-5 text-primary" />

            </div>

            <p className="leading-7 text-gray-700">
              {instruction}
            </p>

          </div>

        ))}

      </div>

    </Card>
  );
}