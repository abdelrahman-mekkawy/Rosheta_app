import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

export default function MyPrescriptions() {
  const { user, prescriptions } = useApp();
  const mine = prescriptions.filter((r) => r.patient === user.name);
  const first = user.name.split(" ")[0];

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Welcome, {first}!</h1>
          <p className="muted">View your prescriptions.</p>
        </div>
      </div>

      <div className="stack">
        {mine.map((r) => (
          <div key={r.id} className="card rx-item">
            <span className="rx-icon" aria-hidden="true">℞</span>
            <div className="grow">
              <strong>{r.date}</strong>
              <p className="muted">{r.doctor}</p>
            </div>
            <Link to={`/prescriptions/${r.id}`} className="btn sm outline">View</Link>
          </div>
        ))}
        {mine.length === 0 && <p className="muted">No prescriptions yet. They will appear here once your doctor writes one.</p>}
      </div>
    </>
  );
}
