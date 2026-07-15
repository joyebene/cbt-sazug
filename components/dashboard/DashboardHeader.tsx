"use client";

import { Menu } from "lucide-react";

interface DashboardHeaderProps {
    title: string;
    subtitle?: string;
    rightContent?: React.ReactNode;
    onMenuClick?: () => void;
}

export function DashboardHeader({
    title,
    subtitle,
    rightContent,
    onMenuClick,
}: DashboardHeaderProps) {
    return (
        <header className="bg-primary text-white px-6 lg:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden"
                >
                    {<Menu size={35} />}
                </button>

                <div>
                    <h1 className="text-xl md:text-2xl font-bold">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-sm sm:text-base text-blue-100">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {rightContent}
        </header>
    );
}