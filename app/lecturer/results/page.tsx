"use client";
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Button } from "@/components/shared/Button";
import { Table } from "@/components/shared/table";
import { Search, Download, ClipboardList, Award, Users, BookOpen, Home, User } from "lucide-react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

const results = [
    { matric: "U2012345", name: "John Doe", course: "CSC101", score: 78, grade: "A", status: "Graded" },
    { matric: "U2014567", name: "Aisha Bello", course: "CSC101", score: 92, grade: "A", status: "Graded" },
    { matric: "U2017890", name: "Emmanuel Okon", course: "CSC101", score: 65, grade: "B", status: "Graded" },
    { matric: "U2021123", name: "Fatima Yusuf", course: "CSC101", score: 44, grade: "F", status: "Pending" },
];

const page = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("All");

    const filteredResults = results.filter((r) => {
        const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.matric.includes(searchTerm);
        return matchesSearch;
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
                <DashboardHeader onMenuClick={onMenuClick} title="Results & Grading" />
            )}
        >
            <DashboardContent title="Student Results">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name or matric number..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <select
                        className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                    >
                        <option value="All">All Courses</option>
                        <option value="CSC101">CSC101</option>
                        <option value="CSC201">CSC201</option>
                    </select>

                    <Button className="flex items-center">
                        <Download className="mr-2" size={18} /> Export Results
                    </Button>
                </div>

                <Table
                    columns={[
                        { key: "matric", title: "Matric No" },
                        { key: "name", title: "Student Name" },
                        { key: "course", title: "Course" },
                        { key: "score", title: "Score" },
                        { key: "grade", title: "Grade" },
                        { key: "status", title: "Status" },
                        { key: "action", title: "" },
                    ]}
                    data={filteredResults.map((result) => ({
                        ...result,
                        status: (
                            <span className={`px-3 py-1 rounded-full text-xs ${result.status === "Graded" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                                }`}>
                                {result.status}
                            </span>
                        )
                    }))}
                />
            </DashboardContent>
        </DashboardLayout>
    );
};

export default page;