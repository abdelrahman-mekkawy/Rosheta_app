import { Link, useNavigate, useParams } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import Logo from "../components/Logo.jsx";

export default function PrescriptionDetails() {
  const { id } = useParams();
  const { prescriptions, user } = useApp();
  const navigate = useNavigate();
  const rx = prescriptions.find((r) => String(r.id) === id);

  // المريض يشوف روشتاته بس
  if (!rx || (user.role === "patient" && rx.patient !== user.name)) {
    return (
      <div>
        <p>This prescription doesn't exist or you don't have access to it.</p>
        <Link to="/" className="btn outline">Go back</Link>
      </div>
    );
  }

  return (
    <>
      <div className="between no-print">
        <button className="link" onClick={() => navigate(-1)}>← Back</button>
        <button className="btn sm outline" onClick={() => window.print()}>Print</button>
      </div>

      <div className="print-area">
        <h1>Prescription Details</h1>
        <div className="card pad">
          <Logo />
          <dl className="meta">
            <div><dt>Patient</dt><dd>{rx.patient}</dd></div>
            <div><dt>Doctor</dt><dd>{rx.doctor}</dd></div>
            <div><dt>Date</dt><dd>{rx.date}</dd></div>
          </dl>
        </div>

        <h4>Medication</h4>
        <div className="med">
          <strong>{rx.medication}</strong>
          <p>Dosage: {rx.dosage}</p>
          <p>Frequency: {rx.frequency}</p>
          <p>Duration: {rx.duration}</p>
        </div>

        <h4>Additional Instructions</h4>
        <p className="muted">{rx.notes || "—"}</p>
      </div>

      <button className="btn primary block no-print" style={{ marginTop: 24 }} onClick={() => window.print()}>
        Print Prescription
      </button>
    </>
  );
}
