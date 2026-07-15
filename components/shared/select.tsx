interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
}

export function Select({
  label,
  options,
}: SelectProps) {
  return (
    <div className="space-y-2">
      {label && <label>{label}</label>}

      <select title={label} className="w-full h-11 border rounded-lg px-4">
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}