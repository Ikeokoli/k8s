export type Environment = "Production" | "Staging" | "Development";
export type EnvironmentFilterValue = Environment | "All";
export type RolloutRisk = "Low" | "Medium" | "High";
export type RolloutStatus = "Pending" | "Running" | "Completed";
export type SortDirection = "newest" | "oldest";

export interface Rollout {
  id: string;
  service: string;
  version: string;
  environment: Environment;
  owner: string;
  startedAt: string;
  risk: RolloutRisk;
  status: RolloutStatus;
  readyReplicas: number;
  desiredReplicas: number;
}

export interface Activity {
  id: string;
  summary: string;
  timestamp: string;
}
