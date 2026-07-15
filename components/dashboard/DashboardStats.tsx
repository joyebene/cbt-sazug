interface DashboardStatsProps {
    children: React.ReactNode;
}

export function DashboardStats({
    children,
}: DashboardStatsProps) {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {children}
        </div>
    );
}