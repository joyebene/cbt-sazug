"use client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Table } from "@/components/shared/table";
import { Users, BookOpen, Award, TrendingUp, Settings } from "lucide-react";

const departments = [
  { name: "Computer Science", students: 1240, lecturers: 28, exams: 87 },
  { name: "Mathematics", students: 890, lecturers: 15, exams: 54 },
  { name: "Physics", students: 670, lecturers: 12, exams: 41 },
];

const recentActivity = [
  { action: "New Exam Created", details: "CSC401 - Software Engineering", time: "2 hours ago" },
  { action: "Grading Completed", details: "CSC101 Mid-Semester", time: "Yesterday" },
  { action: "New Student Registered", details: "U2023789 - Amina Yusuf", time: "3 hours ago" },
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
      header={({ onMenuClick }) => (
        <DashboardHeader onMenuClick={onMenuClick} title="Admin Portal" subtitle="System Overview" />
      )}
    >
      <DashboardStats>
        <DashboardStatCard title="Total Students" value={2840} icon={<Users />} color="bg-blue-600" />
        <DashboardStatCard title="Total Lecturers" value={67} icon={<BookOpen />} color="bg-purple-600" />
        <DashboardStatCard title="Active Exams" value={43} icon={<Award />} color="bg-amber-600" />
        <DashboardStatCard title="Departments" value={8} icon={<TrendingUp />} color="bg-emerald-600" />
      </DashboardStats>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardContent title="Departments Overview">
          <Table
            columns={[
              { key: "name", title: "Department" },
              { key: "students", title: "Students" },
              { key: "lecturers", title: "Lecturers" },
              { key: "exams", title: "Exams" },
            ]}
            data={departments}
          />
        </DashboardContent>

        <DashboardContent title="Recent Activity">
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{activity.details}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </DashboardContent>
      </div>
    </DashboardLayout>
  );
};

export default page;