import { createContext, useContext, useState } from "react";

/* ---------- Mock data (استبدلها بالـ API لما الباك إند يجهز) ---------- */
const initialPatients = [
  { id: 1, name: "Sarah Mohamed", phone: "01012345678", email: "sarah@example.com", lastVisit: "Apr 20, 2025" },
  { id: 2, name: "Omar Khaled", phone: "01098765432", email: "omar@example.com", lastVisit: "Apr 18, 2025" },
  { id: 3, name: "Layla Ahmed", phone: "01112345678", email: "layla@example.com", lastVisit: "Apr 15, 2025" },
  { id: 4, name: "Ali Hassan", phone: "01234567890", email: "ali@example.com", lastVisit: "Apr 10, 2025" },
];

const initialPrescriptions = [
  { id: 1, patient: "Sarah Mohamed", doctor: "Dr. Ahmed Hassan", date: "Apr 20, 2025", medication: "Paracetamol 500 mg", dosage: "1 tablet", frequency: "Twice daily", duration: "5 days", notes: "Take after meals and drink plenty of water." },
  { id: 2, patient: "Sarah Mohamed", doctor: "Dr. Fatima Ali", date: "Mar 28, 2025", medication: "Amoxicillin 500 mg", dosage: "1 capsule", frequency: "Three times daily", duration: "7 days", notes: "Finish the full course." },
  { id: 3, patient: "Sarah Mohamed", doctor: "Dr. Ahmed Hassan", date: "Feb 15, 2025", medication: "Ibuprofen 400 mg", dosage: "1 tablet", frequency: "Once daily", duration: "3 days", notes: "Take with food." },
];

const demoUsers = {
  doctor: { name: "Dr. Ahmed Hassan", initials: "AH", role: "doctor" },
  patient: { name: "Sarah Mohamed", initials: "SM", role: "patient" },
};

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);

const today = () =>
  new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user")); } catch { return null; }
  });
  const [patients, setPatients] = useState(initialPatients);
  const [prescriptions, setPrescriptions] = useState(initialPrescriptions);

  // TODO: استبدل بـ POST /login وخزّن الـ token
  const login = (role) => {
    const u = demoUsers[role];
    setUser(u);
    localStorage.setItem("user", JSON.stringify(u));
    return u;
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // TODO: POST /patients
  const addPatient = (p) =>
    setPatients((prev) => [{ id: Date.now(), lastVisit: "—", ...p }, ...prev]);

  // TODO: POST /prescriptions
  const addPrescription = (rx) => {
    const created = { id: Date.now(), doctor: user.name, date: today(), ...rx };
    setPrescriptions((prev) => [created, ...prev]);
    setPatients((prev) => prev.map((p) => (p.name === rx.patient ? { ...p, lastVisit: created.date } : p)));
  };

  return (
    <Ctx.Provider value={{ user, login, logout, patients, addPatient, prescriptions, addPrescription }}>
      {children}
    </Ctx.Provider>
  );
}
