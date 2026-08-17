import { useMemo, useState } from "react";
import "./App.css";
import { ActivityFeed } from "./components/ActivityFeed";
import { ApprovalPanel } from "./components/ApprovalPanel";
import { EnvironmentFilter } from "./components/EnvironmentFilter";
import { RolloutTable } from "./components/RolloutTable";
import { initialRollouts, recentActivity } from "./data/rollouts";
import { useSelection } from "./hooks/useSelection";
import { filterRollouts } from "./lib/filterRollouts";
import { sortRollouts } from "./lib/sortRollouts";
import type { EnvironmentFilterValue, SortDirection } from "./types";

export default function App() {
  const [environment, setEnvironment] = useState<EnvironmentFilterValue>("All");
  const [sortDirection, setSortDirection] = useState<SortDirection>("newest");
  const { selectedIndex, select, clear } = useSelection();
  const visibleRollouts = useMemo(
    () => sortRollouts(filterRollouts(initialRollouts, environment), sortDirection),
    [environment, sortDirection],
  );
  const selectedRollout = selectedIndex === null ? null : (visibleRollouts[selectedIndex] ?? null);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#main-content" aria-label="Cluster Rollout Console home">
          <span className="brand-mark" aria-hidden="true">CR</span><span>Cluster Rollout Console</span>
        </a>
        <span className="cluster-status"><span aria-hidden="true" /> All clusters connected</span>
      </header>
      <main id="main-content">
        <section className="hero">
          <div><p className="eyebrow">Operations / Rollouts</p><h1>Keep every deployment decision attached to the right service.</h1><p>Review readiness, ownership, and release risk across environments.</p></div>
          <div className="metric-card"><strong>{initialRollouts.length}</strong><span>active rollouts</span></div>
        </section>
        <section className="workspace" aria-labelledby="rollouts-title">
          <div className="table-card">
            <div className="section-heading">
              <div><p className="eyebrow">Deployment queue</p><h2 id="rollouts-title">Service rollouts</h2></div>
              <EnvironmentFilter value={environment} onChange={setEnvironment} />
            </div>
            <RolloutTable
              rollouts={visibleRollouts}
              selectedIndex={selectedIndex}
              sortDirection={sortDirection}
              onSort={() => setSortDirection((current) => current === "newest" ? "oldest" : "newest")}
              onSelect={select}
            />
          </div>
          <ApprovalPanel rollout={selectedRollout} onClear={clear} />
        </section>
        <ActivityFeed items={recentActivity} />
      </main>
    </div>
  );
}
