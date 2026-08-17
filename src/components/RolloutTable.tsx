import type { Rollout, SortDirection } from "../types";
import { RolloutRow } from "./RolloutRow";

export function RolloutTable({ rollouts, selectedIndex, sortDirection, onSort, onSelect }: {
  rollouts: Rollout[];
  selectedIndex: number | null;
  sortDirection: SortDirection;
  onSort: () => void;
  onSelect: (index: number) => void;
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
          {rollouts.map((rollout, index) => (
            <RolloutRow key={rollout.id} rollout={rollout} selected={selectedIndex === index} onSelect={() => onSelect(index)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
