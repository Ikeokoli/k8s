import type { Rollout, SortDirection } from "../types";
import { RolloutRow } from "./RolloutRow";

export function RolloutTable({ rollouts, selectedId, sortDirection, onSort, onSelect }: {
  rollouts: Rollout[];
  selectedId: string | null;
  sortDirection: SortDirection;
  onSort: () => void;
  onSelect: (id: string) => void;
}) {
  if (rollouts.length === 0) return <p className="empty-state">No rollouts match this environment.</p>;

  return (
    <div className="table-scroll">
      <table>
        <caption className="sr-only">Active service rollouts</caption>
        <thead><tr>
          <th scope="col">Service</th><th scope="col">Environment</th><th scope="col">Owner</th>
          <th scope="col">Risk</th><th scope="col">Status</th>
          <th scope="col">
            <button className="sort-button" type="button" onClick={onSort}>
              Started <span aria-hidden="true">{sortDirection === "newest" ? "↓" : "↑"}</span>
              <span className="sr-only">, {sortDirection === "newest" ? "newest first" : "oldest first"}</span>
            </button>
          </th>
          <th scope="col"><span className="sr-only">Actions</span></th>
        </tr></thead>
        <tbody>
          {rollouts.map((rollout) => (
            <RolloutRow key={rollout.id} rollout={rollout} selected={selectedId === rollout.id} onSelect={() => onSelect(rollout.id)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
