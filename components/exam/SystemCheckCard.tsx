"use client";

import { useEffect, useState } from "react";
import Card from "@/components/exam/ExamCard";
import {
  CheckCircle2,
  XCircle,
  Monitor,
  Wifi,
  Maximize,
  Globe,
} from "lucide-react";

interface Status {
  browser: boolean;
  internet: boolean;
  fullscreen: boolean;
  cookies: boolean;
}

export default function SystemCheckCard() {
  const [status, setStatus] = useState<Status>({
    browser: true,
    internet: true,
    fullscreen: false,
    cookies: true,
  });

  useEffect(() => {
    const updateStatus = () => {
      setStatus({
        browser: true,
        internet: navigator.onLine,
        fullscreen: document.fullscreenEnabled,
        cookies: navigator.cookieEnabled,
      });
    };

    updateStatus();

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return (
    <Card title="System Check">
      <div className="space-y-5">

        <Item
          icon={<Globe className="w-5 h-5 text-primary" />}
          title="Browser Supported"
          passed={status.browser}
        />

        <Item
          icon={<Wifi className="w-5 h-5 text-primary" />}
          title="Internet Connection"
          passed={status.internet}
        />

        <Item
          icon={<Monitor className="w-5 h-5 text-primary" />}
          title="Cookies Enabled"
          passed={status.cookies}
        />

        <Item
          icon={<Maximize className="w-5 h-5 text-primary" />}
          title="Fullscreen Supported"
          passed={status.fullscreen}
        />

      </div>
    </Card>
  );
}

function Item({
  icon,
  title,
  passed,
}: {
  icon: React.ReactNode;
  title: string;
  passed: boolean;
}) {
  return (
    <div className="flex items-center justify-between border rounded-lg px-4 py-3">

      <div className="flex items-center gap-3">
        {icon}
        <span>{title}</span>
      </div>

      {passed ? (
        <CheckCircle2 className="text-green-600" />
      ) : (
        <XCircle className="text-red-500" />
      )}
    </div>
  );
}