// app/lecturer/students/page.tsx
"use client";
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Table } from "@/components/shared/table";
import { Button } from "@/components/shared/Button";
import { Award, ClipboardList, Search, Users, BookOpen, Home, User } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

const students = [
  { id: "STU001", name: "John Doe", matric: "U2012345", level: "400L", course: "CSC101", score: 78 },
  { id: "STU002", name: "Aisha Bello", matric: "U2014567", level: "300L", course: "CSC201", score: 85 },
  // Add more...
];

const page = () => {
  const [search, setSearch] = useState("");

  const filtered = students.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.matric.includes(search)
  );

  return (
    <DashboardLayout
      sidebar={(props) => (
        <DashboardSidebar
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
      header={({ onMenuClick }) => <DashboardHeader onMenuClick={onMenuClick} title="Students" />}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-80">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search students..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button>Export CSV</Button>
      </div>

      <Table
        columns={[
          { key: "matric", title: "Matric No" },
          { key: "name", title: "Student Name" },
          { key: "level", title: "Level" },
          { key: "course", title: "Course" },
          { key: "score", title: "Current Score" },
          { key: "action", title: "" },
        ]}
        data={filtered.map(student => ({
          ...student,
          action: <Button variant="secondary">View Record</Button>
        }))}
      />
    </DashboardLayout>
  );
};

export default page;