:root {
  --teal: #0f8f83;
  --teal-dark: #0b7a70;
  --teal-soft: #e3f4f2;
  --navy: #0d3b5c;
  --ink: #17324a;
  --muted: #6b8096;
  --line: #dfe8ee;
  --bg: #f4f8fa;
  --card: #fff;
  --danger: #c0392b;
  color-scheme: light;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* التصميم الأصلي فاتح؛ سيبناه فاتح عمداً */ }
}
* { box-sizing: border-box; }
body { margin: 0; font-family: Inter, "Segoe UI", system-ui, sans-serif; background: var(--bg); color: var(--ink); font-size: 15px; }
h1 { font-size: 24px; margin: 0 0 4px; color: var(--navy); }
h3, h4 { color: var(--navy); margin: 16px 0 8px; }
p { margin: 4px 0; }
.muted { color: var(--muted); font-size: 14px; }
.center { text-align: center; }
:focus-visible { outline: 2px solid var(--teal); outline-offset: 2px; }

/* buttons & forms */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 18px; border-radius: 8px; border: 1px solid var(--teal); font: inherit; font-weight: 600; cursor: pointer; text-decoration: none; background: #fff; color: var(--teal); }
.btn.primary { background: var(--teal); color: #fff; }
.btn.primary:hover { background: var(--teal-dark); }
.btn.outline:hover { background: var(--teal-soft); }
.btn.sm { padding: 5px 16px; font-size: 13px; }
.btn.block { width: 100%; }
.link { background: none; border: 0; color: var(--teal); cursor: pointer; font: inherit; padding: 0; }
.icon-btn { background: none; border: 0; font-size: 22px; cursor: pointer; color: var(--muted); }
.field { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; margin-bottom: 14px; color: var(--ink); }
input, select, textarea { font: inherit; font-weight: 400; padding: 10px 12px; border: 1px solid var(--line); border-radius: 8px; background: #fff; color: var(--ink); width: 100%; }
textarea { resize: vertical; }
.pw { position: relative; display: block; }
.pw .link { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); font-size: 13px; }
.error { color: var(--danger); font-size: 13px; margin-bottom: 10px; }
.row { display: flex; gap: 10px; flex-wrap: wrap; }
.grow { flex: 1; }
.between { display: flex; justify-content: space-between; align-items: center; }
.grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }

/* auth */
.auth { display: grid; grid-template-columns: 1fr 1.2fr; min-height: 100vh; }
.auth-brand { background: var(--teal-soft); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; }
.auth-brand .logo { font-size: 42px; flex-direction: column; font-weight: 700; }
.auth-brand p { color: var(--teal-dark); }
.auth-form-wrap { display: flex; align-items: center; justify-content: center; padding: 24px; background: #fff; }
.auth-form { width: 100%; max-width: 400px; }
.tabs { display: flex; border-bottom: 1px solid var(--line); margin-bottom: 24px; }
.tab { flex: 1; padding: 12px; background: none; border: 0; border-bottom: 2px solid transparent; font: inherit; color: var(--muted); cursor: pointer; }
.tab.active { color: var(--teal); border-color: var(--teal); font-weight: 600; }
.roles { border: 0; padding: 0; margin: 0 0 16px; display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
.roles legend { font-size: 13px; font-weight: 600; width: 100%; padding: 0; margin-bottom: 8px; }
.radio { display: flex; align-items: center; gap: 6px; }
.radio input { width: auto; accent-color: var(--teal); }
.forgot, .switch { display: block; text-align: center; font-size: 13px; margin-top: 14px; color: var(--teal); text-decoration: none; }
.switch { color: var(--muted); }

/* layout */
.shell { display: flex; min-height: 100vh; }
.sidebar { width: 220px; background: var(--navy); padding: 20px 14px; flex-shrink: 0; }
.sidebar-logo { padding: 4px 10px 24px; }
.logo { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; font-size: 18px; }
.nav-link { display: block; width: 100%; text-align: left; padding: 11px 14px; border-radius: 8px; color: #cfe0ec; text-decoration: none; background: none; border: 0; font: inherit; cursor: pointer; margin-bottom: 4px; }
.nav-link:hover { background: rgba(255,255,255,.08); }
.nav-link.active { background: var(--teal); color: #fff; }
.main { flex: 1; min-width: 0; }
.topbar { display: flex; justify-content: flex-end; padding: 14px 32px; background: #fff; border-bottom: 1px solid var(--line); }
.user-chip { display: flex; align-items: center; gap: 10px; font-size: 14px; }
.avatar { width: 32px; height: 32px; border-radius: 50%; background: var(--navy); color: #fff; display: grid; place-items: center; font-size: 12px; font-weight: 600; }
.content { padding: 28px 32px; max-width: 1100px; }
.page-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; }

/* cards & tables */
.card { background: var(--card); border: 1px solid var(--line); border-radius: 12px; }
.pad { padding: 20px; }
.search { margin-bottom: 16px; max-width: 100%; }
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; min-width: 520px; }
th { text-align: left; font-size: 13px; color: var(--muted); font-weight: 600; }
th, td { padding: 14px 18px; border-bottom: 1px solid var(--line); }
tr:last-child td { border-bottom: 0; }
.split { display: grid; grid-template-columns: 1.1fr 1fr; gap: 20px; align-items: start; }
.meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 16px 0; }
.meta dt { font-size: 12px; color: var(--muted); }
.meta dd { margin: 2px 0 0; font-weight: 600; }
.med { background: var(--bg); border-radius: 10px; padding: 14px 16px; }
.med p { color: var(--muted); font-size: 14px; }
.stack { display: flex; flex-direction: column; gap: 14px; max-width: 640px; }
.rx-item { display: flex; align-items: center; gap: 16px; padding: 18px 20px; }
.rx-icon { width: 40px; height: 40px; border-radius: 8px; background: var(--teal-soft); color: var(--teal); display: grid; place-items: center; font-size: 20px; font-weight: 700; }

.stat-row { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 8px; }
.stat { display: flex; align-items: center; gap: 14px; }
.stat p { margin: 0; }
.big { font-size: 28px; color: var(--navy); }

/* modal */
.overlay { position: fixed; inset: 0; background: rgba(13,59,92,.35); display: grid; place-items: center; padding: 16px; z-index: 10; }
.modal { background: #fff; border-radius: 12px; padding: 20px; width: 100%; max-width: 420px; }
.modal-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.modal-head h3 { margin: 0; }

/* responsive */
@media (max-width: 820px) {
  .auth { grid-template-columns: 1fr; }
  .auth-brand { padding: 32px 0; }
  .shell { flex-direction: column; }
  .sidebar { width: 100%; padding: 12px; }
  .sidebar-logo { padding-bottom: 8px; }
  .sidebar nav { display: flex; flex-wrap: wrap; gap: 4px; }
  .nav-link { width: auto; margin: 0; }
  .split { grid-template-columns: 1fr; }
  .grid3, .meta { grid-template-columns: 1fr; }
  .content, .topbar { padding-left: 16px; padding-right: 16px; }
}

/* print */
@media print {
  .no-print { display: none !important; }
  body { background: #fff; }
  .content { padding: 0; max-width: none; }
  .card { border: 0; }
  .split { display: block; }
}
