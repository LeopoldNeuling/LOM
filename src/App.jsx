import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Impressum from "./pages/external/Impressum";
import Datenschutz from "./pages/external/Datenschutz";
import Home from "./Home";
import Webtipps from "./pages/external/Webtipps";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/daten" element={<Datenschutz />} />
        <Route path="/links" element={<Webtipps />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
