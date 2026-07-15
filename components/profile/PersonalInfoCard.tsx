"use client";

import { Button } from "@/components/shared/Button";

export default function PersonalInfoCard() {
  return (
    <div className="bg-white rounded-md border border-border shadow-sm p-6">

      <h2 className="text-xl font-semibold mb-6">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <Field
          label="Email Address"
          type="email"
          defaultValue="joy@sazug.edu.ng"
        />

        <Field
          label="Phone Number"
          defaultValue="08012345678"
        />

        <Field
          label="Date of Birth"
          type="date"
        />

        <Field
          label="Gender"
        />

        <div className="md:col-span-2">

          <label className="block text-sm text-muted mb-2">
            Address
          </label>

          <textarea
            rows={4}
            placeholder="enter value"
            className="w-full rounded-md border border-border px-4 py-3"
          />

        </div>

        <Field
          label="Emergency Contact"
        />

        <Field
          label="Emergency Phone"
        />

      </div>

      <div className="flex justify-end mt-8">

        <Button variant="primary">
          Save Changes
        </Button>

      </div>

    </div>
  );
}

function Field({
  label,
  defaultValue,
  type = "text",
}: {
  label: string;
  defaultValue?: string;
  type?: string;
}) {
  return (
    <div>

      <label className="block text-sm text-muted mb-2">
        {label}
      </label>

      <input
        type={type}
        defaultValue={defaultValue}
        placeholder="enter value"
        className="w-full rounded-md border border-border px-4 py-3"
      />

    </div>
  );
}