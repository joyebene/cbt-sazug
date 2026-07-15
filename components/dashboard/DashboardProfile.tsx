import { Card } from "../shared/card";

interface DashboardProfileProps {
    name: string;
    matric?: string;
    department?: string;
    level?: string;
    image?: React.ReactNode;
}

export function DashboardProfile({
    name,
    matric,
    department,
    level,
    image,
}: DashboardProfileProps) {
    return (
        <Card>
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        Welcome back, {name}
                    </h2>

                    <div className="flex gap-8 mt-4 text-gray-500">
                        {matric && <span>{matric}</span>}
                        {department && <span>{department}</span>}
                        {level && <span>{level}</span>}
                    </div>
                </div>

                {image}
            </div>
        </Card>
    );
}