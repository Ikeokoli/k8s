import type { EnvironmentFilterValue, Rollout } from "../types";

export function filterRollouts(rollouts: Rollout[], environment: EnvironmentFilterValue): Rollout[] {
  if (environment === "All") return rollouts;
  return rollouts.filter((rollout) => rollout.environment === environment);
}
