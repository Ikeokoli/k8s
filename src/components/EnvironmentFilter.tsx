import type { EnvironmentFilterValue } from "../types";

const options: EnvironmentFilterValue[] = ["All", "Production", "Staging", "Development"];

export function EnvironmentFilter({ value, onChange }: {
  value: EnvironmentFilterValue;
  onChange: (value: EnvironmentFilterValue) => void;
}) {
  return (
    <label className="environment-filter">
      <span>Environment</span>
      <select value={value} onChange={(event) => onChange(event.target.value as EnvironmentFilterValue)}>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}
