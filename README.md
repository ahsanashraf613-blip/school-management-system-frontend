:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --panel-2: #eef4ff;
  --sidebar: #0f172a;
  --sidebar-soft: #1e293b;
  --primary: #4f46e5;
  --primary-soft: rgba(79, 70, 229, 0.1);
  --green: #22c55e;
  --green-soft: rgba(34, 197, 94, 0.12);
  --blue: #3b82f6;
  --blue-soft: rgba(59, 130, 246, 0.12);
  --orange: #f59e0b;
  --orange-soft: rgba(245, 158, 11, 0.12);
  --purple: #8b5cf6;
  --purple-soft: rgba(139, 92, 246, 0.12);
  --text: #0f172a;
  --muted: #6b7280;
  --border: rgba(148, 163, 184, 0.2);
  --shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button {
  font: inherit;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 280px;
  background: linear-gradient(180deg, var(--sidebar) 0%, #111827 100%);
  color: white;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 10px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #a78bfa, var(--primary));
  font-weight: 800;
  font-size: 1.2rem;
}

.brand-wrap h1 {
  margin: 4px 0 0;
  font-size: 1.4rem;
  font-weight: 700;
}

.eyebrow {
  margin: 0;
  color: #94a3b8;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.nav-item {
  appearance: none;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
  border-radius: 12px;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}

.nav-icon {
  width: 22px;
  display: inline-flex;
  justify-content: center;
  opacity: 0.95;
}

.side-card {
  margin-top: auto;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 18px 16px;
}

.side-card h3 {
  margin: 8px 0 8px;
  font-size: 1.3rem;
}

.side-card p {
  margin: 0;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
}

.main-panel {
  flex: 1;
  padding: 26px 28px 32px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
}

.topbar h2 {
  margin: 6px 0 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.search-box {
  min-width: 180px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  color: var(--muted);
  box-shadow: var(--shadow);
}

.action-btn,
.link-btn {
  border: none;
  border-radius: 12px;
  padding: 11px 16px;
  font-weight: 600;
  cursor: pointer;
}

.action-btn {
  background: var(--primary);
  color: white;
}

.action-btn.ghost {
  background: var(--panel);
  color: var(--text);
  border: 1px solid var(--border);
}

.profile-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 8px 12px;
  box-shadow: var(--shadow);
}

.profile-pill strong,
.profile-pill small {
  display: block;
}

.profile-pill small {
  color: var(--muted);
}

.avatar {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #c7d2fe, #a5b4fc);
  color: #1e1b4b;
  font-weight: 700;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 26px;
}

.stat-card {
  background: var(--panel);
  border-radius: 18px;
  padding: 18px 18px 14px;
  display: flex;
  gap: 14px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.stat-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  font-weight: 700;
}

.stat-card p {
  margin: 2px 0;
  color: var(--muted);
}

.stat-card h3 {
  margin: 6px 0;
  font-size: 1.7rem;
}

.stat-card span {
  font-size: 0.8rem;
  font-weight: 600;
}

.stat-card.blue .stat-icon {
  background: var(--blue-soft);
  color: var(--blue);
}

.stat-card.green .stat-icon {
  background: var(--green-soft);
  color: var(--green);
}

.stat-card.orange .stat-icon {
  background: var(--orange-soft);
  color: var(--orange);
}

.stat-card.purple .stat-icon {
  background: var(--purple-soft);
  color: var(--purple);
}

.content-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 20px;
  margin-bottom: 20px;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 18px 18px 16px;
  box-shadow: var(--shadow);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.panel-header h3 {
  margin: 6px 0 0;
  font-size: 1.2rem;
}

.link-btn {
  background: transparent;
  color: var(--primary);
  font-weight: 700;
  padding: 0;
}

.bar-chart {
  height: 220px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  padding-top: 18px;
}

.bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  height: 100%;
}

.bar-track {
  width: 100%;
  height: 180px;
  background: linear-gradient(180deg, #eef2ff, #f8fafc);
  border-radius: 14px 14px 10px 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.bar-fill {
  width: 100%;
  background: linear-gradient(180deg, #818cf8, #4f46e5);
  border-radius: 14px 14px 10px 10px;
}

.bar-item span {
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 600;
}

.announcement-list,
.event-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.announcement-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 10px;
  border-radius: 14px;
  background: #f8fafc;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.blue { background: var(--blue); }
.dot.purple { background: var(--purple); }
.dot.orange { background: var(--orange); }

.announcement-item strong,
.announcement-item small {
  display: block;
}

.announcement-item small {
  color: var(--muted);
  margin-top: 4px;
}

.table-panel table {
  width: 100%;
  border-collapse: collapse;
}

.table-panel th,
.table-panel td {
  text-align: left;
  padding: 14px 10px;
  border-bottom: 1px solid var(--border);
}

.table-panel th {
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
}

.status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}

.status.present {
  background: var(--green-soft);
  color: var(--green);
}

.status.late {
  background: var(--orange-soft);
  color: var(--orange);
}

.status.absent {
  background: #fee2e2;
  color: #dc2626;
}

.event-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 10px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: linear-gradient(180deg, #f8fafc, #f1f5f9);
}

.event-date {
  width: 62px;
  min-width: 62px;
  background: var(--primary-soft);
  border-radius: 12px;
  padding: 10px 0;
  text-align: center;
}

.event-date strong,
.event-date span {
  display: block;
}

.event-date strong {
  font-size: 1.35rem;
  color: var(--primary);
}

.event-date span {
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.event-item p {
  margin: 0;
  font-weight: 600;
}

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .content-grid,
  .bottom-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 820px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .top-actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .search-box {
    flex: 1;
    min-width: 0;
  }
}

@media (max-width: 580px) {
  .main-panel {
    padding: 18px 14px 24px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .bar-chart {
    gap: 8px;
  }

  .table-panel th:nth-child(2),
  .table-panel td:nth-child(2) {
    display: none;
  }
}
