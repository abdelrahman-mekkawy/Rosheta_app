export default function Logo({ size = 22, light = false }) {
  return (
    <span className="logo" style={{ color: light ? "#fff" : "var(--navy)" }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
        <path d="M12 11v6M9 14h6" />
      </svg>
      <span>Rosheta</span>
    </span>
  );
}
