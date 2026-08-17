import type { Rollout } from "../types";

export function ApprovalPanel({ rollout, onClear }: { rollout: Rollout | null; onClear: () => void }) {
  if (!rollout) {
    return (
      <aside className="approval-panel approval-panel--empty" aria-label="Rollout review">
        <p className="eyebrow">Decision desk</p><h2>Select a rollout</h2>
        <p>Review ownership, replica readiness, and risk before approving a change.</p>
      </aside>
    );
  }

  const readiness = Math.round((rollout.readyReplicas / rollout.desiredReplicas) * 100);
  return (
    <aside className="approval-panel" aria-label="Rollout review">
      <div className="panel-heading">
        <div><p className="eyebrow">Decision desk</p><h2>{rollout.service}</h2></div>
        <button className="text-button" type="button" onClick={onClear}>Clear</button>
      </div>
      <dl className="detail-grid">
        <div><dt>Release</dt><dd>{rollout.version}</dd></div>
        <div><dt>Owner</dt><dd>{rollout.owner}</dd></div>
        <div><dt>Environment</dt><dd>{rollout.environment}</dd></div>
        <div><dt>Readiness</dt><dd>{rollout.readyReplicas}/{rollout.desiredReplicas} replicas</dd></div>
      </dl>
      <div className="meter" aria-label={`${readiness}% ready`}><span style={{ width: `${readiness}%` }} /></div>
      <button className="approve-button" type="button" disabled={rollout.status === "Completed"}>
        {rollout.status === "Completed" ? "Already completed" : "Approve rollout"}
      </button>
    </aside>
  );
}
