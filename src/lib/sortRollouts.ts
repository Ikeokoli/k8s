import type { Rollout, SortDirection } from "../types";

export function sortRollouts(rollouts: Rollout[], direction: SortDirection): Rollout[] {
  return [...rollouts].sort((left, right) => {
    const difference = Date.parse(right.startedAt) - Date.parse(left.startedAt);
    return direction === "newest" ? difference : -difference;
  });
}
