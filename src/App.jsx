import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Home from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/daten" element={<Datenschutz />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
