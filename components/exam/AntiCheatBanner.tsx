"use client";

import {
  ShieldCheck,
  Copy,
  MousePointerClick,
  Monitor,
  Code2,
} from "lucide-react";

const items = [
  {
    icon: <Monitor size={14} />,
    label: "Tab Switching Disabled",
  },
  {
    icon: <MousePointerClick size={14} />,
    label: "Right Click Disabled",
  },
  {
    icon: <Copy size={14} />,
    label: "Copy Disabled",
  },
  {
    icon: <Code2 size={14} />,
    label: "Developer Tools Blocked",
  },
];

export default function AntiCheatBanner() {
  return (
    <div className="bg-amber-50 border border-amber-100 rounded-sm px-5 py-2">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">

        <div className="flex items-center gap-2">

          <ShieldCheck
            className="text-amber-600"
            size={18}
          />

          <span className="font-medium text-amber-900">
            Secure Examination Mode Enabled
          </span>

        </div>

        <div className="flex flex-wrap gap-2">

          {items.map((item) => (

            <div
              key={item.label}
              className="flex items-center gap-2 bg-white border border-amber-200 rounded-full px-3 py-1 text-xs"
            >
              {item.icon}
              {item.label}
            </div>

          ))}

        </div>

      </div>

    </div>
  );
}