"use client";

import ReadOnlyInput from "./ReadOnlyInput";

export default function AcademicInfoCard() {
  return (
    <div className="bg-white rounded-md border border-border shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Academic Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <ReadOnlyInput
          label="Full Name"
          value="Joy Ebene"
        />

        <ReadOnlyInput
          label="Matric Number"
          value="CST/23/CSC/00123"
        />

        <ReadOnlyInput
          label="Faculty"
          value="Faculty of Computing"
        />

        <ReadOnlyInput
          label="Department"
          value="Computer Science"
        />

        <ReadOnlyInput
          label="Programme"
          value="B.Sc Computer Science"
        />

        <ReadOnlyInput
          label="Level"
          value="400"
        />

        <ReadOnlyInput
          label="Academic Session"
          value="2025/2026"
        />

        <ReadOnlyInput
          label="Semester"
          value="Second Semester"
        />

      </div>

    </div>
  );
}