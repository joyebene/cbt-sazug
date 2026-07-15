"use client";
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/shared/Button";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { Award, BookOpen, Settings, TrendingUp, Users } from "lucide-react";

const defaultGrading = [
    { grade: "A", min: 70, max: 100, points: 5.0 },
    { grade: "B", min: 60, max: 69, points: 4.0 },
    { grade: "C", min: 50, max: 59, points: 3.0 },
    { grade: "D", min: 45, max: 49, points: 2.0 },
    { grade: "E", min: 40, max: 44, points: 1.0 },
    { grade: "F", min: 0, max: 39, points: 0.0 },
];

const page = () => {
    const [gradingSystem, setGradingSystem] = useState(defaultGrading);
    const [saved, setSaved] = useState(false);

    const updateGrade = (index: number, field: string, value: number) => {
        const updated = [...gradingSystem];
        updated[index] = { ...updated[index], [field]: value };
        setGradingSystem(updated);
    };

    const saveGradingSystem = () => {
        // In real app, save to database
        console.log("Grading System Saved:", gradingSystem);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

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
                <DashboardHeader onMenuClick={onMenuClick} title="System Settings" />
            )}
        >
            <DashboardContent title="Grading System Configuration">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Configure the score ranges and corresponding grades.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-4">Grade</th>
                                    <th className="text-left py-4">Minimum Score</th>
                                    <th className="text-left py-4">Maximum Score</th>
                                    <th className="text-left py-4">Grade Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gradingSystem.map((row, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-4 font-bold text-lg">{row.grade}</td>
                                        <td className="py-4">
                                            <input
                                                type="number"
                                                value={row.min}
                                                onChange={(e) => updateGrade(index, "min", parseInt(e.target.value))}
                                                className="w-24 p-2 border rounded-lg"
                                            />
                                        </td>
                                        <td className="py-4">
                                            <input
                                                type="number"
                                                value={row.max}
                                                onChange={(e) => updateGrade(index, "max", parseInt(e.target.value))}
                                                className="w-24 p-2 border rounded-lg"
                                            />
                                        </td>
                                        <td className="py-4">
                                            <input
                                                type="number"
                                                step="0.1"
                                                value={row.points}
                                                onChange={(e) => updateGrade(index, "points", parseFloat(e.target.value))}
                                                className="w-24 p-2 border rounded-lg"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <Button onClick={saveGradingSystem} className="px-8">
                            {saved ? "✓ Saved Successfully" : "Save Grading System"}
                        </Button>
                    </div>
                </div>
            </DashboardContent>
        </DashboardLayout>
    );
};

export default page;