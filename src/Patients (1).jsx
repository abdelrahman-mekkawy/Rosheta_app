import { Navigate, Route, Routes } from "react-router-dom";
import { useApp } from "./context/AppContext.jsx";
import Layout from "./components/Layout.jsx";
import Auth from "./pages/Auth.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Patients from "./pages/Patients.jsx";
import WritePrescription from "./pages/WritePrescription.jsx";
import MyPrescriptions from "./pages/MyPrescriptions.jsx";
import PrescriptionDetails from "./pages/PrescriptionDetails.jsx";

// حماية الـ routes حسب الدور
function Protected({ role, children }) {
  const { user } = useApp();
  if (!user) return <Navigate to="/" replace />;
  if (role && user.role !== role) return <Navigate to={home(user)} replace />;
  return <Layout>{children}</Layout>;
}
const home = (u) => (u.role === "doctor" ? "/dashboard" : "/my-prescriptions");

export default function App() {
  const { user } = useApp();
  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to={home(user)} replace /> : <Auth />} />
      <Route path="/dashboard" element={<Protected role="doctor"><Dashboard /></Protected>} />
      <Route path="/patients" element={<Protected role="doctor"><Patients /></Protected>} />
      <Route path="/write-prescription" element={<Protected role="doctor"><WritePrescription /></Protected>} />
      <Route path="/my-prescriptions" element={<Protected role="patient"><MyPrescriptions /></Protected>} />
      <Route path="/prescriptions/:id" element={<Protected><PrescriptionDetails /></Protected>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
