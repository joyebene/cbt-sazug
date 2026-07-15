"use client";

import {
  Clipboard,
  Home,
  User,
} from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileAvatar from "@/components/profile/ProfileAvatar";
import PersonalInfoCard from "@/components/profile/PersonalInfoCard";
import AcademicInfoCard from "@/components/profile/AcademicInfoCard";

export default function StudentProfilePage() {
  return (
    <DashboardLayout
      sidebar={(props) => (
        <DashboardSidebar
          {...props}
          logo={
            <div className="flex items-center gap-2">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-10 h-10"
              />
              <span className="font-bold">SAZUG CBT</span>
            </div>
          }
          items={[
            {
              label: "Dashboard",
              icon: <Home size={20} />,
              href: "/student",
            },
            {
              label: "Exams",
              icon: <Clipboard size={20} />,
              href: "/student/exam",
            },
            {
              label: "Profile",
              icon: <User size={20} />,
              href: "/student/profile",
            },
          ]}
        />
      )}
      header={({ onMenuClick }) => (
        <DashboardHeader
          onMenuClick={onMenuClick}
          title="Student Profile"
          subtitle="Manage your personal information"
        />
      )}
    >
      <div className="space-y-6">

        <ProfileHeader />

        <div className="grid xl:grid-cols-[400px_1fr] gap-6">

          <div className="space-y-6">

            <ProfileAvatar />

            <AcademicInfoCard />

          </div>

          <PersonalInfoCard />

        </div>

      </div>
    </DashboardLayout>
  );
}