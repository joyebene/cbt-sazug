import Card from "@/components/exam/ExamCard";
import {
  Clock3,
  BookOpen,
  CheckCircle2,
  Trophy,
} from "lucide-react";

interface ExamInfoCardProps {
  courseCode: string;
  courseTitle: string;
  semester: string;
  session: string;
  duration: number;
  questions: number;
  passMark: number;
}

export default function ExamInfoCard({
  courseCode,
  courseTitle,
  semester,
  session,
  duration,
  questions,
  passMark,
}: ExamInfoCardProps) {
  return (
    <Card>
      <div className="space-y-6">

        <div>
          <p className="text-sm text-muted">
            {courseCode}
          </p>

          <h1 className="text-3xl font-bold mt-1">
            {courseTitle}
          </h1>

          <p className="text-muted mt-2">
            {semester} Semester • {session}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <InfoItem
            icon={<Clock3 className="w-5 h-5 text-primary" />}
            label="Duration"
            value={`${duration} mins`}
          />

          <InfoItem
            icon={<BookOpen className="w-5 h-5 text-primary" />}
            label="Questions"
            value={questions}
          />

          <InfoItem
            icon={<CheckCircle2 className="w-5 h-5 text-primary" />}
            label="Attempts"
            value="1"
          />

          <InfoItem
            icon={<Trophy className="w-5 h-5 text-primary" />}
            label="Pass Mark"
            value={`${passMark}%`}
          />

        </div>

      </div>
    </Card>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-border bg-slate-50 p-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-sm text-muted">
          {label}
        </span>
      </div>

      <p className="text-xl font-semibold">
        {value}
      </p>
    </div>
  );
}