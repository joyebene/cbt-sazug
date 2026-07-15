import Card from "@/components/exam/ExamCard";
import Image from "next/image";

interface CandidateCardProps {
  name: string;
  matricNumber: string;
  department: string;
  level: string;
  image?: string;
}

export default function CandidateCard({
  name,
  matricNumber,
  department,
  level,
  image,
}: CandidateCardProps) {
  return (
    <Card title="Candidate Information">

      <div className="flex gap-5 items-center">

        <Image
          src={image || "/avatar.png"}
          alt={name}
          width={90}
          height={90}
          className="rounded-full border-4 border-primary object-cover"
        />

        <div className="space-y-2">

          <h3 className="text-xl font-semibold">
            {name}
          </h3>

          <Info label="Registration Number" value={matricNumber} />

          <Info label="Department" value={department} />

          <Info label="Level" value={level} />

        </div>

      </div>

    </Card>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <span className="text-muted text-sm">
        {label}
      </span>

      <p className="font-medium">
        {value}
      </p>
    </div>
  );
}