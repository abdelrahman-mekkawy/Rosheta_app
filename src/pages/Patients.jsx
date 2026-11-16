import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

function AddPatientModal({ onClose }) {
  const { addPatient } = useApp();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const save = (e) => {
    e.preventDefault();
    addPatient(form);
    onClose();
  };

  return (
    <div className="overlay" onClick={onClose}>
      <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={save} role="dialog" aria-label="Add new patient">
        <div className="modal-head">
          <h3>Add New Patient</h3>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">×</button>
        </div>
        <label className="field">Full name
          <input required placeholder="Enter patient name" value={form.name} onChange={set("name")} />
        </label>
        <label className="field">Email address
          <input required type="email" placeholder="patient@example.com" value={form.email} onChange={set("email")} />
        </label>
        <label className="field">Phone number
          <input required placeholder="Enter phone number" value={form.phone} onChange={set("phone")} />
        </label>
        <div className="row">
          <button className="btn primary grow" type="submit">Save Patient</button>
          <button className="btn outline grow" type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default function Patients() {
  const { patients, prescriptions } = useApp();
  const [q, setQ] = useState("");
  const location = useLocation();
  const [open, setOpen] = useState(!!location.state?.openAdd);

  const list = patients.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.phone.includes(q));

  // آخر روشتة للمريض عشان زرار View
  const lastRx = (name) => prescriptions.find((r) => r.patient === name);

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Patients</h1>
          <p className="muted">Manage your patients</p>
        </div>
        <div className="row">
          <Link to="/write-prescription" className="btn outline">Write Prescription</Link>
          <button className="btn primary" onClick={() => setOpen(true)}>+ Add Patient</button>
        </div>
      </div>

      <input className="search" placeholder="Search patients..." value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search patients" />

      <div className="card table-wrap">
        <table>
          <thead>
            <tr><th>Patient Name</th><th>Phone Number</th><th>Last Visit</th><th>Action</th></tr>
          </thead>
          <tbody>
            {list.map((p) => {
              const rx = lastRx(p.name);
              return (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.phone}</td>
                  <td>{p.lastVisit}</td>
                  <td>
                    {rx ? <Link to={`/prescriptions/${rx.id}`} className="btn sm outline">View</Link> : <span className="muted">No prescriptions</span>}
                  </td>
                </tr>
              );
            })}
            {list.length === 0 && (
              <tr><td colSpan="4" className="muted center">No patients match your search.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {open && <AddPatientModal onClose={() => setOpen(false)} />}
    </>
  );
}
