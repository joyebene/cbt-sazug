"use client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Table } from "@/components/shared/table";
import { Button } from "@/components/shared/Button";
import { BookOpen, Users, Award, TrendingUp, Settings } from "lucide-react";

const exams = [
  { course: "CSC101", title: "Mid-Semester Examination", date: "2024-07-18", status: "Completed", participants: 145 },
  { course: "CSC201", title: "Data Structures Test", date: "2024-07-22", status: "Active", participants: 98 },
  { course: "PHY301", title: "Quantum Physics", date: "2024-07-25", status: "Upcoming", participants: 67 },
];

const page = () => {
  return (
    <DashboardLayout
      sidebar={(props) => (
                <DashboardSidebar
                    {...props}
                    logo={
                        <div className="flex items-center gap-2">
                            <img src="/logo.jpg" alt="Logo" className="w-10 h-10" />
                            <span className="font-bold">SAZUG ADMIN</span>
                        </div>
                    }
                    items={[
                        { label: "Dashboard", icon: <TrendingUp size={20} />, href: "/admin" },
                        { label: "Users", icon: <Users size={20} />, href: "/admin/users" },
                        { label: "Courses", icon: <BookOpen size={20} />, href: "/admin/courses" },
                        { label: "Exams", icon: <Award size={20} />, href: "/admin/exams" },
                        { label: "Settings", icon: <Settings size={20} />, href: "/admin/settings" }
                    ]}
                />
            )}
      header={({ onMenuClick }) => <DashboardHeader onMenuClick={onMenuClick} title="Exams Overview" />}
    >
      <DashboardContent title="All System Exams">
        <Table
          columns={[
            { key: "course", title: "Course" },
            { key: "title", title: "Exam Title" },
            { key: "date", title: "Date" },
            { key: "participants", title: "Participants" },
            { key: "status", title: "Status" },
            { key: "action", title: "" },
          ]}
          data={exams.map(exam => ({
            ...exam,
            status: <span className={`px-4 py-1 rounded-full text-xs ${exam.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{exam.status}</span>,
            action: <Button>View Results</Button>,
          }))}
        />
      </DashboardContent>
    </DashboardLayout>
  );
};

export default page;