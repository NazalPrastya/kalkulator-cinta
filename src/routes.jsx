import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import KalkulatorCintaPage from "./pages/KalkulatorCintaPage";

export default function RouteComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/check-khodam" element={<LandingPage />} />
        <Route path="/kalkulator-cinta" element={<KalkulatorCintaPage />} />

        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
