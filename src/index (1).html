import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import Logo from "../components/Logo.jsx";

export default function Auth() {
  const [tab, setTab] = useState("login");
  const [role, setRole] = useState("doctor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { login } = useApp();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      setError("Enter a valid email and a password of at least 6 characters.");
      return;
    }
    setError("");
    const u = login(role);
    navigate(u.role === "doctor" ? "/dashboard" : "/my-prescriptions");
  };

  return (
    <div className="auth">
      <section className="auth-brand">
        <Logo size={56} />
        <p>Your prescriptions, simplified.</p>
      </section>

      <section className="auth-form-wrap">
        <form className="auth-form" onSubmit={submit}>
          <div className="tabs" role="tablist">
            {["login", "signup"].map((t) => (
              <button type="button" key={t} role="tab" aria-selected={tab === t}
                className={tab === t ? "tab active" : "tab"} onClick={() => setTab(t)}>
                {t === "login" ? "Login" : "Create Account"}
              </button>
            ))}
          </div>

          <fieldset className="roles">
            <legend>I am a</legend>
            {["doctor", "patient"].map((r) => (
              <label key={r} className="radio">
                <input type="radio" name="role" checked={role === r} onChange={() => setRole(r)} />
                {r === "doctor" ? "Doctor" : "Patient"}
              </label>
            ))}
          </fieldset>

          {tab === "signup" && (
            <label className="field">Full name
              <input placeholder="Enter your full name" required />
            </label>
          )}

          <label className="field">Email address
            <input type="email" placeholder="example@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label className="field">Password
            <span className="pw">
              <input type={show ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="button" className="link" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
            </span>
          </label>

          {error && <p className="error" role="alert">{error}</p>}

          <button className="btn primary block" type="submit">
            {tab === "login" ? "Login" : "Create account"}
          </button>

          {tab === "login" && <a className="forgot" href="#!">Forgot password?</a>}
          <p className="switch">
            {tab === "login" ? "Don't have an account? " : "Already have an account? "}
            <button type="button" className="link" onClick={() => setTab(tab === "login" ? "signup" : "login")}>
              {tab === "login" ? "Create one" : "Log in"}
            </button>
          </p>
        </form>
      </section>
    </div>
  );
}
