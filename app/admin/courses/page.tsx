"use client";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Table } from "@/components/shared/table";
import { Button } from "@/components/shared/Button";
import { BookOpen, Users, Plus, Award, TrendingUp, Settings } from "lucide-react";

const courses = [
    { code: "CSC101", title: "Introduction to Computing", department: "Computer Science", students: 145, lecturer: "Dr. Adebayo" },
    { code: "CSC201", title: "Data Structures", department: "Computer Science", students: 98, lecturer: "Prof. Okonkwo" },
    { code: "MTH101", title: "Calculus I", department: "Mathematics", students: 210, lecturer: "Dr. Fatima" },
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
            header={({ onMenuClick }) => <DashboardHeader onMenuClick={onMenuClick} title="Courses Management" />}
        >
            <DashboardContent
                title="All Courses"
                action={
                    <Button className="flex items-center">
                        <Plus className="mr-2" size={18} /> Add New Course
                    </Button>
                }
            >
                <Table
                    columns={[
                        { key: "code", title: "Course Code" },
                        { key: "title", title: "Course Title" },
                        { key: "department", title: "Department" },
                        { key: "students", title: "Enrolled" },
                        { key: "lecturer", title: "Lecturer" },
                        { key: "action", title: "" },
                    ]}
                    data={courses.map(course => ({
                        ...course,
                        action: <Button>Assign Lecturer</Button>,
                    }))}
                />
            </DashboardContent>
        </DashboardLayout>
    );
};

export default page;