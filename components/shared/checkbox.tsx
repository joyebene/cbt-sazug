interface CheckboxProps {
  checked?: boolean;
  onChange?: () => void;
  label?: string;
}

export function Checkbox({
  checked,
  onChange,
  label,
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}