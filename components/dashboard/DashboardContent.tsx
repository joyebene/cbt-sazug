import { Card } from "../shared/card";

interface DashboardContentProps {
    title: string;
    description?: string;
    action?: React.ReactNode;
    children: React.ReactNode;
}

export function DashboardContent({
    title,
    description,
    action,
    children,
}: DashboardContentProps) {
    return (
        <Card>
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-xl font-bold">
                        {title}
                    </h2>

                    {description && (
                        <p className="text-gray-500">
                            {description}
                        </p>
                    )}
                </div>

                {action}
            </div>

            {children}
        </Card>
    );
}