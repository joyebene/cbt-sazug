interface DashboardNoticeProps {
    title: string;
    message: string;
    action?: React.ReactNode;
}

export function DashboardNotice({
    title,
    message,
    action,
}: DashboardNoticeProps) {
    return (
        <div className="rounded-md border border-amber-200 bg-amber-50 p-3 flex justify-between items-center">
            <div>
                <h3 className="font-semibold text-amber-700">
                    {title}
                </h3>

                <p className="text-sm text-amber-600">
                    {message}
                </p>
            </div>

            {action}
        </div>
    );
}