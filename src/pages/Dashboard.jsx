import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

export default function Dashboard() {
  const { user, patients, prescriptions } = useApp();
  const first = user.name.replace("Dr. ", "").split(" ")[0];
  const recent = patients.slice(0, 4);
  const lastRx = (name) => prescriptions.find((r) => r.patient === name);

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Welcome back, Dr. {first}!</h1>
          <p className="muted">Here's an overview of your clinic.</p>
        </div>
      </div>

      <div className="card pad stat-row">
        <div className="stat">
          <span className="rx-icon" aria-hidden="true">👥</span>
          <div>
            <p className="muted">Total Patients</p>
            <strong className="big">{patients.length}</strong>
          </div>
        </div>
        <div className="row">
          <Link to="/patients" state={{ openAdd: true }} className="btn outline">Add Patient</Link>
          <Link to="/write-prescription" className="btn primary">Write Prescription</Link>
        </div>
      </div>

      <h3>Recent Patients</h3>
      <div className="card table-wrap">
        <table>
          <thead>
            <tr><th>Patient Name</th><th>Last Visit</th><th>Action</th></tr>
          </thead>
          <tbody>
            {recent.map((p) => {
              const rx = lastRx(p.name);
              return (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.lastVisit}</td>
                  <td>
                    {rx ? <Link to={`/prescriptions/${rx.id}`} className="btn sm outline">View</Link> : <span className="muted">No prescriptions</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
