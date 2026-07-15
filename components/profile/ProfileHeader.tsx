"use client";

import { BadgeCheck } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="bg-white rounded-md border border-border shadow-sm p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <div>

          <h1 className="text-3xl font-bold">
            Joy Ebene
          </h1>

          <p className="text-muted mt-2">
            CST/23/CSC/00123
          </p>

          <p className="text-muted">
            Computer Science
          </p>

        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700 font-medium">

          <BadgeCheck size={18} />

          Active Student

        </div>

      </div>

    </div>
  );
}