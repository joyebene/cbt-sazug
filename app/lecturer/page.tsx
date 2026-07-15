"use client";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardProfile } from "@/components/dashboard/DashboardProfile";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import {
    Home,
    Users,
    BookOpen,
    ClipboardList,
    Award,
    Bell,
    User
} from "lucide-react";
import React from "react";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Button } from "@/components/shared/Button";
import { Table } from "@/components/shared/table";
import { DashboardNotice } from "@/components/dashboard/DashboardNotice";

const courses = [
    {
        code: "CSC101",
        title: "Introduction to Computing",
        students: 145,
        status: "Active",
    },
    {
        code: "CSC201",
        title: "Data Structures & Algorithms",
        students: 98,
        status: "Active",
    },
    {
        code: "CSC301",
        title: "Database Systems",
        students: 76,
        status: "Active",
    },
];

const upcomingExams = [
    {
        course: "CSC101",
        title: "Mid-Semester Test",
        date: "2024-07-18",
        time: "10:00 AM",
        students: 145,
    },
    {
        course: "CSC201",
        title: "Data Structures Exam",
        date: "2024-07-22",
        time: "02:00 PM",
        students: 98,
    },
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
                <DashboardHeader
                    onMenuClick={onMenuClick}
                    title="Lecturer Portal"
                    subtitle="Dr. Adebayo Olawale"
                />
            )}
        >
            {/* Profile */}
            <DashboardProfile
                name="Dr. Adebayo Olawale"
                matric="LEC-4782"
                department="Computer Science"
                level="Senior Lecturer"
            // isLecturer={true}
            />

            {/* Stats */}
            <DashboardStats>
                <DashboardStatCard
                    title="Courses Taught"
                    value={5}
                    icon={<BookOpen />}
                    color="bg-purple-600"
                />
                <DashboardStatCard
                    title="Total Students"
                    value={319}
                    icon={<Users />}
                    color="bg-blue-600"
                />
                <DashboardStatCard
                    title="Exams Created"
                    value={12}
                    icon={<ClipboardList />}
                    color="bg-amber-600"
                />
                <DashboardStatCard
                    title="Pending Grading"
                    value={47}
                    icon={<Award />}
                    color="bg-rose-600"
                />
            </DashboardStats>

            {/* My Courses */}
            <DashboardContent
                title="My Courses"
                action={
                    <Button className="text-sm sm:text-base">Manage Courses</Button>
                }
            >
                <Table
                    columns={[
                        { key: "code", title: "Course Code" },
                        { key: "title", title: "Course Title" },
                        { key: "students", title: "Students" },
                        { key: "status", title: "Status" },
                        { key: "action", title: "Action" },
                    ]}
                    data={courses.map((course) => ({
                        ...course,
                        action: (
                            <Button variant="primary">
                                View Details
                            </Button>
                        ),
                    }))}
                />
            </DashboardContent>

            {/* Upcoming Exams */}
            <DashboardContent
                title="Upcoming Exams"
                action={
                    <Button className="text-sm sm:text-base">Create New Exam</Button>
                }
            >
                <Table
                    columns={[
                        { key: "course", title: "Course" },
                        { key: "title", title: "Exam Title" },
                        { key: "date", title: "Date" },
                        { key: "time", title: "Time" },
                        { key: "students", title: "Students" },
                        { key: "action", title: "Action" },
                    ]}
                    data={upcomingExams.map((exam) => ({
                        ...exam,
                        action: (
                            <div className="flex gap-2">
                                <Button variant="secondary">Edit</Button>
                                <Button>Start</Button>
                            </div>
                        ),
                    }))}
                />
            </DashboardContent>

            <DashboardNotice
                title="Reminder"
                message="Please upload exam questions for CSC301 before July 15th, 2024."
            />
        </DashboardLayout>
    );
};

export default page;