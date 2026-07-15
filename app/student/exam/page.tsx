"use client";

import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  Clock3,
  ArrowRight,
  Home,
  User,
  Clipboard,
  Settings
} from "lucide-react";
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

const exams = [
  {
    id: "1",
    code: "CSC301",
    title: "Computer Science II",
    lecturer: "Dr. Ibrahim Musa",
    date: "15 July 2026",
    time: "09:00 AM",
    duration: 90,
    questions: 50,
    status: "Available",
  },
  {
    id: "2",
    code: "CSC305",
    title: "Database Management",
    lecturer: "Dr. Abdullahi",
    date: "18 July 2026",
    time: "01:00 PM",
    duration: 120,
    questions: 60,
    status: "Upcoming",
  },
  {
    id: "3",
    code: "CSC309",
    title: "Compiler Construction",
    lecturer: "Dr. Yakubu",
    date: "20 July 2026",
    time: "10:30 AM",
    duration: 60,
    questions: 40,
    status: "Completed",
  },
];

export default function ExamsPage() {
  return (
    <DashboardLayout
      sidebar={(props) => (
        <DashboardSidebar
          {...props}
          logo={
            <div className="flex items-center gap-2">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-10 h-10"
              />
              <span className="font-bold">SAZUG CBT</span>
            </div>
          }
          items={[
            {
              label: "Dashboard",
              icon: <Home size={20} />,
              href: "/student",
            },

            {
              label: "Exams",
              icon: <Clipboard size={20} />,
              href: "/student/exam",
            },
            {
              label: "Profile",
              icon: <User size={20} />,
              href: "/profile",
            },
          ]}
        />
      )}
      header={({ onMenuClick }) => (
        <DashboardHeader
          onMenuClick={onMenuClick}
          title="CBT Examination Portal"
          subtitle="Student Dashboard"
        />
      )}
    >
      <div className="space-y-8">

        {/* Page Header */}

        <div>
          <h1 className="text-3xl font-bold">
            My Examinations
          </h1>

          <p className="text-muted mt-2">
            View your available examinations and begin your CBT.
          </p>
        </div>

        {/* Statistics */}

        <div className="grid gap-6 md:grid-cols-3">

          <StatCard
            title="Available"
            value="1"
          />

          <StatCard
            title="Upcoming"
            value="1"
          />

          <StatCard
            title="Completed"
            value="1"
          />

        </div>

        {/* Exams */}

        <div className="grid gap-6">

          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white border border-border rounded-md shadow-sm p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                <div className="space-y-4">

                  <div className="flex items-center gap-3">

                    <div className="bg-primary/10 p-3 rounded-md">

                      <BookOpen className="text-primary" />

                    </div>

                    <div>

                      <h2 className="text-xl font-bold">
                        {exam.title}
                      </h2>

                      <p className="text-muted">
                        {exam.code}
                      </p>

                    </div>

                  </div>

                  <div className="grid md:grid-cols-2 gap-4">

                    <Info
                      label="Lecturer"
                      value={exam.lecturer}
                    />

                    <Info
                      label="Questions"
                      value={`${exam.questions}`}
                    />

                    <Info
                      label="Date"
                      value={exam.date}
                      icon={<CalendarDays size={16} />}
                    />

                    <Info
                      label="Duration"
                      value={`${exam.duration} mins`}
                      icon={<Clock3 size={16} />}
                    />

                  </div>

                </div>

                <div className="flex flex-col items-end gap-4">

                  <Status status={exam.status} />

                  {exam.status === "Available" ? (
                    <Link
                      href={`/student/exam/${exam.id}`}
                      className="bg-primary hover:bg-primary-dark transition text-white rounded-md px-6 py-3 flex items-center gap-2"
                    >
                      Start Examination

                      <ArrowRight size={18} />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-300 text-gray-600 rounded-xl px-6 py-3 cursor-not-allowed"
                    >
                      {exam.status}
                    </button>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white border border-border rounded-md p-6 shadow-sm">
      <p className="text-muted">{title}</p>

      <h2 className="text-3xl font-bold mt-2 text-primary">
        {value}
      </h2>
    </div>
  );
}

function Info({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm text-muted flex items-center gap-2">
        {icon}
        {label}
      </p>

      <p className="font-medium">
        {value}
      </p>
    </div>
  );
}

function Status({
  status,
}: {
  status: string;
}) {
  const colors = {
    Available:
      "bg-green-100 text-green-700",

    Upcoming:
      "bg-yellow-100 text-yellow-700",

    Completed:
      "bg-gray-200 text-gray-700",
  };

  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-medium ${colors[status as keyof typeof colors]
        }`}
    >
      {status}
    </span>
  );
}