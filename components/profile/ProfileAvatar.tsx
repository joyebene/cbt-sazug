"use client";

import { Camera } from "lucide-react";

export default function ProfileAvatar() {
  return (
    <div className="bg-white rounded-md border border-border shadow-sm p-6">

      <div className="flex flex-col items-center">

        <img
          src="/avatar.png"
          alt="Student"
          className="w-36 h-36 rounded-full object-cover border-4 border-primary/20"
        />

        <button
          className="mt-5 flex items-center gap-2 rounded-md border border-border px-4 py-2 hover:bg-gray-50"
        >
          <Camera size={16} />
          Change Photo
        </button>

      </div>

    </div>
  );
}