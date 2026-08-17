import type { Rollout } from "../types";
import { RiskBadge } from "./RiskBadge";

export function RolloutRow({ rollout, selected, onSelect }: {
  rollout: Rollout;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <tr className={selected ? "is-selected" : undefined}>
      <td><strong>{rollout.service}</strong><span className="cell-detail">{rollout.version}</span></td>
      <td>{rollout.environment}</td>
      <td>{rollout.owner}</td>
      <td><RiskBadge risk={rollout.risk} /></td>
      <td><span className={`status-dot status-dot--${rollout.status.toLowerCase()}`} aria-hidden="true" />{rollout.status}</td>
      <td>{new Date(rollout.startedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
      <td>
        <button className="review-button" type="button" aria-pressed={selected} onClick={onSelect}>
          {selected ? "Selected" : "Review"}
        </button>
      </td>
    </tr>
  );
}
