"use client";
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Table } from "@/components/shared/table";
import { Button } from "@/components/shared/Button";
import { Search, UserPlus } from "lucide-react";
import { Award, BookOpen, Settings, TrendingUp, Users } from "lucide-react";

const users = [
  { id: "STU001", name: "John Doe", type: "Student", matric: "U2012345", department: "Computer Science", status: "Active" },
  { id: "LEC001", name: "Dr. Adebayo Olawale", type: "Lecturer", matric: "LEC-4782", department: "Computer Science", status: "Active" },
  { id: "STU002", name: "Aisha Bello", type: "Student", matric: "U2014567", department: "Mathematics", status: "Active" },
];

const page = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "student" | "lecturer">("all");

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) || 
                         user.matric.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || user.type.toLowerCase() === filter;
    return matchesSearch && matchesFilter;
  });

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
      header={({ onMenuClick }) => <DashboardHeader onMenuClick={onMenuClick} title="Users Management" />}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-96">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Button className="flex items-center">
          <UserPlus className="mr-2" size={18} /> Add New User
        </Button>
      </div>

      <div className="flex gap-2 mb-6">
        {["all", "student", "lecturer"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-6 py-2 rounded-xl text-sm ${filter === f ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            {f === "all" ? "All Users" : f.charAt(0).toUpperCase() + f.slice(1) + "s"}
          </button>
        ))}
      </div>

      <Table
        columns={[
          { key: "matric", title: "ID" },
          { key: "name", title: "Name" },
          { key: "type", title: "Role" },
          { key: "department", title: "Department" },
          { key: "status", title: "Status" },
          { key: "action", title: "" },
        ]}
        data={filteredUsers.map(user => ({
          ...user,
          status: <span className="text-green-600 font-medium">Active</span>,
          action: <Button>Edit</Button>,
        }))}
      />
    </DashboardLayout>
  );
};

export default page;