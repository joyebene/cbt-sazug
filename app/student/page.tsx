"use client";

import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardProfile } from "@/components/dashboard/DashboardProfile";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import {
    Home,
    Book,
    BookCheck,
    Clipboard,
    ClipboardList,
    User
} from "lucide-react";
import React from "react";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardStatCard } from "@/components/dashboard/DashboardStatCard";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Button } from "@/components/shared/Button";
import { Table } from "@/components/shared/table";
import { DashboardNotice } from "@/components/dashboard/DashboardNotice";


const exams = [
    {
        course: "Introduction to Computing",
        date: "2024-05-20",
        duration: "2 hours",
        status: "Upcoming",
    },
    {
        course: "Data Structures",
        date: "2024-05-22",
        duration: "1.5 hours",
        status: "Upcoming",
    },
    {
        course: "Algorithms",
        date: "2024-05-25",
        duration: "2.5 hours",
        status: "Upcoming",
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
            <DashboardProfile
                name="John Doe"
                matric="123456"
                department="Computer Science"
                level="400 Level"
            />

            <DashboardStats>
                <DashboardStatCard
                    title="Courses Registered"
                    value={12}
                    icon={<Book />}
                    color="bg-blue-500"
                />
                <DashboardStatCard
                    title="Exams Taken"
                    value={8}
                    icon={<BookCheck />}
                    color="bg-green-500"
                />
                <DashboardStatCard
                    title="Pending Exams"
                    value={4}
                    icon={<ClipboardList />}
                    color="bg-yellow-500"
                />
                <DashboardStatCard
                    title="Total Exams"
                    value={12}
                    icon={<Clipboard />}
                    color="bg-indigo-500"
                />
            </DashboardStats>

            <DashboardContent
                title="Available Exams"
                action={<Button className="text-sm sm:text-base">View All</Button>}
            >
                <Table
                    columns={[
                        { key: "course", title: "Course" },
                        { key: "date", title: "Date" },
                        { key: "duration", title: "Duration" },
                        { key: "status", title: "Status" },
                        { key: "action", title: "Action" },
                    ]}
                    data={exams.map((exam) => ({
                        ...exam,
                        action: (
                            <Button className="text-sm sm:text-base">
                                Start Exam
                            </Button>
                        ),
                    }))}
                />
            </DashboardContent>

            <DashboardNotice
                title="Important Notice"
                message="Ensure you have a stable internet connection before starting your exam."
            />
        </DashboardLayout>
    );
};

export default page;