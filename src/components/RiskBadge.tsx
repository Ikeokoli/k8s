import type { RolloutRisk } from "../types";

export function RiskBadge({ risk }: { risk: RolloutRisk }) {
  return <span className={`risk risk--${risk.toLowerCase()}`}>{risk} risk</span>;
}
