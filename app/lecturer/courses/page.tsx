"use client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Button } from "@/components/shared/Button";
import { Table } from "@/components/shared/table";
import { Home, BookOpen, Users, Plus, Award, ClipboardList, User } from "lucide-react";

const myCourses = [
  { code: "CSC101", title: "Introduction to Computing", students: 145, semester: "2024/2025" },
  { code: "CSC201", title: "Data Structures", students: 98, semester: "2024/2025" },
  { code: "CSC301", title: "Database Systems", students: 76, semester: "2024/2025" },
  { code: "CSC401", title: "Software Engineering", students: 62, semester: "2024/2025" },
];

const page = () => {
  return (
    <DashboardLayout
      sidebar={(props) => ( <DashboardSidebar
          {...props}
          logo={
            <div className="flex items-center gap-2">
              <img src="/logo.jpg" alt="Logo" className="w-10 h-10" />
              <span className="font-bold">SAZUG CBT</span>
            </div>
          }
          items={[
            {
              label: "Dashboard",
              icon: <Home size={20} />,
              href: "/lecturer",
            },
            {
              label: "My Courses",
              icon: <BookOpen size={20} />,
              href: "/lecturer/courses",
            },
            {
              label: "Students",
              icon: <Users size={20} />,
              href: "/lecturer/students",
            },
            {
              label: "Exams",
              icon: <ClipboardList size={20} />,
              href: "/lecturer/exams",
            },
            {
              label: "Results",
              icon: <Award size={20} />,
              href: "/lecturer/results",
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
        <DashboardHeader onMenuClick={onMenuClick} title="My Courses" />
      )}
    >
      <DashboardContent
        title="All Courses"
        action={
          <Button className="flex items-center">
            <Plus className="mr-2" size={18} /> Create New Course
          </Button>
        }
      >
        <Table
          columns={[
            { key: "code", title: "Course Code" },
            { key: "title", title: "Course Title" },
            { key: "students", title: "Enrolled Students" },
            { key: "semester", title: "Semester" },
            { key: "action", title: "Actions" },
          ]}
          data={myCourses.map((course) => ({
            ...course,
            action: (
              <div className="flex gap-2">
                <Button variant="secondary">View Students</Button>
                <Button>Manage</Button>
              </div>
            ),
          }))}
        />
      </DashboardContent>
    </DashboardLayout>
  );
};

export default page;