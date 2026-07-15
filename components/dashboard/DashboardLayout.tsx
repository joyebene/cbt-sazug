"use client";

import React, { useState } from "react";

interface DashboardLayoutProps {
    sidebar: (props: { onClose: () => void }) => React.ReactNode;
    header: (props: { onMenuClick: () => void }) => React.ReactNode;
    children: React.ReactNode;
}

export default function DashboardLayout({
    sidebar,
    header,
    children,
}: DashboardLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // const sidebarWithProps = React.cloneElement(sidebar, {
    //     onClose: () => setIsSidebarOpen(false),
    // });

    // const headerWithProps = React.cloneElement(header, {
    //     onMenuClick: () => setIsSidebarOpen(true),
    // });

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="hidden lg:block">
                {sidebar({
                    onClose: () => setIsSidebarOpen(false),
                })}
            </div>

            {isSidebarOpen && (
                <div className="lg:hidden">
                    <div
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                    {sidebar({
                        onClose: () => setIsSidebarOpen(false),
                    })}
                </div>
            )}

            <main className="lg:ml-72">
                {header({
                    onMenuClick: () => setIsSidebarOpen(true),
                })}

                <div className="p-6 space-y-6">
                    {children}
                </div>
            </main>
        </div>
    );
}