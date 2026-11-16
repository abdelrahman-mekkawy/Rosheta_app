import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import Logo from "../components/Logo.jsx";

const frequencies = ["Once daily", "Twice daily", "Three times daily", "Every 8 hours", "As needed"];
const durations = ["3 days", "5 days", "7 days", "10 days", "14 days", "1 month"];

export default function WritePrescription() {
  const { user, patients, addPrescription } = useApp();
  const navigate = useNavigate();
  const [f, setF] = useState({
    patient: patients[0]?.name ?? "",
    medication: "", dosage: "", frequency: "", duration: "", notes: "",
  });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const save = (e) => {
    e.preventDefault();
    addPrescription(f);
    navigate("/dashboard");
  };

  const today = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return (
    <>
      <div className="page-head no-print">
        <div>
          <h1>Write Prescription</h1>
          <p className="muted">Create a new prescription for your patient</p>
        </div>
      </div>

      <div className="split">
        <form className="card pad no-print" onSubmit={save}>
          <label className="field">Patient name
            <select value={f.patient} onChange={set("patient")} required>
              {patients.map((p) => <option key={p.id}>{p.name}</option>)}
            </select>
          </label>
          <label className="field">Medication name
            <input required placeholder="Enter medication name" value={f.medication} onChange={set("medication")} />
          </label>
          <div className="grid3">
            <label className="field">Dosage
              <input required placeholder="e.g. 500 mg" value={f.dosage} onChange={set("dosage")} />
            </label>
            <label className="field">Frequency
              <select required value={f.frequency} onChange={set("frequency")}>
                <option value="">e.g. Twice daily</option>
                {frequencies.map((x) => <option key={x}>{x}</option>)}
              </select>
            </label>
            <label className="field">Duration
              <select required value={f.duration} onChange={set("duration")}>
                <option value="">e.g. 5 days</option>
                {durations.map((x) => <option key={x}>{x}</option>)}
              </select>
            </label>
          </div>
          <label className="field">Additional instructions
            <textarea rows="4" placeholder="Write instructions here..." value={f.notes} onChange={set("notes")} />
          </label>
          <div className="row">
            <button className="btn primary" type="submit">Save Prescription</button>
            <button className="btn outline" type="button" onClick={() => navigate("/dashboard")}>Cancel</button>
          </div>
        </form>

        <section className="card pad print-area">
          <div className="between">
            <h3>Prescription Preview</h3>
            <button className="btn sm outline no-print" onClick={() => window.print()}>Print</button>
          </div>
          <Logo />
          <dl className="meta">
            <div><dt>Patient</dt><dd>{f.patient || "—"}</dd></div>
            <div><dt>Doctor</dt><dd>{user.name}</dd></div>
            <div><dt>Date</dt><dd>{today}</dd></div>
          </dl>
          <h4>Medication</h4>
          <div className="med">
            <strong>{f.medication || "Medication name"}</strong>
            <p>Dosage: {f.dosage || "—"}</p>
            <p>Frequency: {f.frequency || "—"}</p>
            <p>Duration: {f.duration || "—"}</p>
          </div>
          <h4>Additional Instructions</h4>
          <p className="muted">{f.notes || "—"}</p>
        </section>
      </div>
    </>
  );
}
