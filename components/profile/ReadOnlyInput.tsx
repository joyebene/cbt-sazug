interface Props {
  label: string;
  value: string;
}

export default function ReadOnlyInput({
  label,
  value,
}: Props) {
  return (
    <div>

      <label className="block text-sm text-muted mb-2">
        {label}
      </label>

      <input
        readOnly
        value={value}
        placeholder="enter value"
        className="w-full rounded-md border border-border bg-gray-100 px-4 py-3 outline-none"
      />

    </div>
  );
}