import type { Activity, Rollout } from "../types";

export const initialRollouts: Rollout[] = [
  { id: "ROL-431", service: "checkout-api", version: "v3.18.2", environment: "Production", owner: "Maya Chen", startedAt: "2026-08-17T13:28:00Z", risk: "High", status: "Running", readyReplicas: 7, desiredReplicas: 10 },
  { id: "ROL-430", service: "catalog-indexer", version: "v8.4.0", environment: "Staging", owner: "Theo Grant", startedAt: "2026-08-17T12:52:00Z", risk: "Medium", status: "Pending", readyReplicas: 0, desiredReplicas: 4 },
  { id: "ROL-429", service: "identity-gateway", version: "v5.7.9", environment: "Production", owner: "Nia Brooks", startedAt: "2026-08-17T11:46:00Z", risk: "Medium", status: "Completed", readyReplicas: 12, desiredReplicas: 12 },
  { id: "ROL-428", service: "notification-worker", version: "v2.11.3", environment: "Development", owner: "Owen Patel", startedAt: "2026-08-17T10:18:00Z", risk: "Low", status: "Running", readyReplicas: 2, desiredReplicas: 3 },
  { id: "ROL-427", service: "pricing-engine", version: "v6.2.1", environment: "Staging", owner: "Lina Okafor", startedAt: "2026-08-17T09:34:00Z", risk: "High", status: "Pending", readyReplicas: 0, desiredReplicas: 6 },
];

export const recentActivity: Activity[] = [
  { id: "ACT-91", summary: "checkout-api passed the 70% readiness gate", timestamp: "4 min ago" },
  { id: "ACT-90", summary: "pricing-engine requires a second approver", timestamp: "18 min ago" },
  { id: "ACT-89", summary: "identity-gateway rollout completed", timestamp: "1 hr ago" },
];
