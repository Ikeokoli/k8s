import type { Activity } from "../types";

export function ActivityFeed({ items }: { items: Activity[] }) {
  return (
    <section className="activity-card" aria-labelledby="activity-title">
      <p className="eyebrow">Live trail</p><h2 id="activity-title">Recent activity</h2>
      <ol>{items.map((item) => <li key={item.id}><span>{item.summary}</span><time>{item.timestamp}</time></li>)}</ol>
    </section>
  );
}
