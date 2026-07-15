import { X } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarItem {
    label: string;
    icon: React.ReactNode;
    href: string;
}

interface DashboardSidebarProps {
    logo: React.ReactNode;
    items: SidebarItem[];
    footer?: React.ReactNode;
    onClose?: () => void;
}

export function DashboardSidebar({
    logo,
    items,
    footer,
    onClose,
}: DashboardSidebarProps) {
    const pathname = usePathname();
    return (
        <aside className="w-72 bg-white border-r border-gray-300 flex flex-col fixed h-full z-50">
            <div className="p-6 flex items-center justify-between">
                {logo}

                <button
                    onClick={onClose}
                    className="lg:hidden"
                >
                    {<X />}
                </button>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {items.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-md px-4 py-3 hover:bg-blue-50 ${
                            pathname === item.href ? "bg-blue-100 text-blue-700" : ""
                        }`}
                    >
                        {item.icon}
                        {item.label}
                    </a>
                ))}
            </nav>

            {footer}
        </aside>
    );
}