"use client";
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Button } from "@/components/shared/Button";
import { Table } from "@/components/shared/table";
import { Plus, Edit, Trash2, Eye, Users, Home, BookOpen, ClipboardList, Award, User } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

const exams = [
    {
        id: 1,
        course: "CSC101",
        title: "Introduction to Computing - Mid Semester",
        date: "2024-07-18",
        duration: "2 Hours",
        status: "Upcoming",
        participants: 145,
    },
    {
        id: 2,
        course: "CSC201",
        title: "Data Structures Exam",
        date: "2024-07-22",
        duration: "2.5 Hours",
        status: "Upcoming",
        participants: 98,
    },
    {
        id: 3,
        course: "CSC301",
        title: "Database Systems Test",
        date: "2024-06-15",
        duration: "1.5 Hours",
        status: "Completed",
        participants: 76,
    },
];

const page = () => {
    const [filter, setFilter] = useState<"all" | "upcoming" | "completed">("all");

    const filteredExams = exams.filter(exam => {
        if (filter === "upcoming") return exam.status === "Upcoming";
        if (filter === "completed") return exam.status === "Completed";
        return true;
    });

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
            header={({ onMenuClick }) => (
                <DashboardHeader onMenuClick={onMenuClick} title="Exams Management" />
            )}
        >
            <DashboardContent
                title="All Exams"
                action={
                    <Button className="flex items-center">
                        <Plus className="mr-2" size={18} /> Create New Exam
                    </Button>
                }
            >
                <div className="flex gap-2 mb-6">
                    {(["all", "upcoming", "completed"] as const).map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${filter === f
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200"
                                }`}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

                <Table
                    columns={[
                        { key: "course", title: "Course" },
                        { key: "title", title: "Exam Title" },
                        { key: "date", title: "Date" },
                        { key: "duration", title: "Duration" },
                        { key: "participants", title: "Participants" },
                        { key: "status", title: "Status" },
                        { key: "action", title: "Actions" },
                    ]}
                    data={filteredExams.map((exam) => ({
                        ...exam,
                        status: (
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${exam.status === "Upcoming"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-green-100 text-green-700"
                                    }`}
                            >
                                {exam.status}
                            </span>
                        ),
                        action: (
                            <div className="flex gap-2">
                                <Button variant="secondary">
                                    <Eye size={16} />
                                </Button>
                                <Button variant="secondary">
                                    <Edit size={16} />
                                </Button>
                                <Button variant="secondary" className="text-red-600">
                                    <Trash2 size={16} />
                                </Button>
                            </div>
                        ),
                    }))}
                />
            </DashboardContent>
        </DashboardLayout>
    );
};

export default page;