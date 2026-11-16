// طبقة الربط مع الباك إند (axios).
// لسه مش مستخدمة في الصفحات؛ الفرونت شغال بالداتا الوهمية في AppContext.
// أول ما الـ API يجهز: بدّل الدوال اللي فيها TODO في AppContext بالدوال دي.
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// ابعت الـ token مع كل request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// لو الـ token انتهى أو غلط: امسح الجلسة وارجع للـ login
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && !err.config.url.includes("/auth/")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/";
    }
    return Promise.reject(err);
  }
);

// رسالة الخطأ اللي تتعرض للمستخدم
export const errorMessage = (err) =>
  err.response?.data?.message || "Something went wrong. Please try again.";

/* ---------- Auth ---------- */
export const loginApi = (email, password) =>
  api.post("/auth/login", { email, password }).then((r) => r.data); // { token, user }
export const registerApi = (data) =>
  api.post("/auth/register", data).then((r) => r.data); // { token, user }
export const meApi = () => api.get("/auth/me").then((r) => r.data.user);

/* ---------- Patients ---------- */
export const getPatients = (q = "") =>
  api.get("/patients", { params: { q } }).then((r) => r.data);
export const createPatient = (data) =>
  api.post("/patients", data).then((r) => r.data); // { name, email, phone }

/* ---------- Prescriptions ---------- */
export const getPrescriptions = () =>
  api.get("/prescriptions").then((r) => r.data);
export const getPrescription = (id) =>
  api.get(`/prescriptions/${id}`).then((r) => r.data);
export const createPrescription = (data) =>
  api.post("/prescriptions", data).then((r) => r.data);
// { patientId, medication, dosage, frequency, duration, notes }
