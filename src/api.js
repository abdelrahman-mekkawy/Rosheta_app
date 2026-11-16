import { NavLink, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import Logo from "./Logo.jsx";

export default function Layout({ children }) {
  const { user, logout } = useApp();
  const navigate = useNavigate();

  const links =
    user.role === "doctor"
      ? [
          { to: "/dashboard", label: "Dashboard" },
          { to: "/patients", label: "Patients" },
          { to: "/write-prescription", label: "Write Prescription" },
        ]
      : [{ to: "/my-prescriptions", label: "My Prescriptions" }];

  return (
    <div className="shell">
      <aside className="sidebar no-print">
        <div className="sidebar-logo"><Logo light /></div>
        <nav>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              {l.label}
            </NavLink>
          ))}
          <button className="nav-link" onClick={() => { logout(); navigate("/"); }}>
            Logout
          </button>
        </nav>
      </aside>

      <div className="main">
        <header className="topbar no-print">
          <div className="user-chip">
            <span className="avatar">{user.initials}</span>
            <span>{user.name}</span>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
