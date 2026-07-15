import { Card } from "../shared/card";

interface DashboardStatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: React.ReactNode;
    color?: string;
}

export function DashboardStatCard({
    title,
    value,
    subtitle,
    icon,
    color = "bg-blue-500",
}: DashboardStatCardProps) {
    return (
        <Card>
            <div className="flex items-center gap-4">
                <div
                    className={` w-10 h-10 sm:w-14 sm:h-14 rounded-full ${color} flex items-center justify-center text-white`}
                >
                    {icon}
                </div>

                <div>
                    <p>{title}</p>

                    <h2 className="text-2xl sm:text-3xl font-bold">
                        {value}
                    </h2>

                    {subtitle && (
                        <p className="text-gray-500 text-sm">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </Card>
    );
}