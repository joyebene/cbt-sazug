"use client";

interface InstructionCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function InstructionCheckbox({
  checked,
  onChange,
}: InstructionCheckboxProps) {
  return (
    <div className="bg-white border border-border rounded-md p-5 flex items-start gap-4">
      <input
        id="accept"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-5 w-5 accent-var(--primary) cursor-pointer"
      />

      <label
        htmlFor="accept"
        className="text-gray-700 cursor-pointer leading-7"
      >
        I have carefully read and understood all the examination
        instructions and agree to abide by the examination rules.
      </label>
    </div>
  );
}