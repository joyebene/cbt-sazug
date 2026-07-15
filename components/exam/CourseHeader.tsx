"use client";

import { BookOpen, GraduationCap } from "lucide-react";

interface Props {
  courseCode: string;
  courseTitle: string;
  department?: string;
  duration?: string;
}

export default function CourseHeader({
  courseCode,
  courseTitle,
  department = "Computer Science Department",
  duration = "2 Hours",
}: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm">

      <div className="px-6 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-2 text-primary">

            <BookOpen className="w-5 h-5" />

            <span className="font-semibold text-lg">
              {courseCode}
            </span>

          </div>

          <h1 className="text-2xl font-bold mt-1">
            {courseTitle}
          </h1>

          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">

            <span className="flex items-center gap-2">
              <GraduationCap size={16} />
              {department}
            </span>

            <span>
              Duration: {duration}
            </span>

          </div>

        </div>

        <div className="hidden lg:flex flex-col items-end">

          <span className="text-xs uppercase tracking-wider text-gray-400">
            Examination
          </span>

          <span className="font-semibold text-primary">
            Secure CBT Session
          </span>

        </div>

      </div>

    </div>
  );
}