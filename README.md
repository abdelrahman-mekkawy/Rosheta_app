# Rosheta – Prescription System (Frontend)

React + Vite + React Router. بيانات وهمية دلوقتي (src/context/AppContext.jsx).

## تشغيل
    npm install
    npm run dev

## تجربة
- Login كـ Doctor أو Patient (أي إيميل صحيح + باسورد 6 حروف أو أكتر).
- Doctor: Dashboard ← Patients ← Add Patient ← Write Prescription ← Print
- Patient: My Prescriptions ← View ← Print

## الربط مع الباك إند
دور على `TODO` في AppContext.jsx واستبدل كل واحدة بـ fetch/axios:
login → POST /login | addPatient → POST /patients | addPrescription → POST /prescriptions
وخزّن الـ token في localStorage وابعته في Authorization header.
