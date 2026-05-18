import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./pages/HomePage";
import BoothList from "./pages/booth/BoothList";
import AvailableBoothListPage from "./pages/booth/reservation/AvailableBoothList";
import { InformationMainPage } from "./pages/more/InformationMainPage";
import PerformanceListPage from "./pages/performance/PerformanceListPage";
import PerformanceDetailPage from "./pages/performance/PerformanceDetailPage";
import BoothReservationDetailPage from "./pages/booth/reservation/BoothReservationDetailPage";
import { InformationMainPage } from "./pages/more/InformationMainPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-white shadow-md">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/booth" element={<BoothList />} />
            <Route path="/reservation" element={<AvailableBoothListPage />} />
            <Route
              path="/booths/:boothNumber"
              element={<BoothReservationDetailPage />}
            />
            <Route path="/more" element={<InformationMainPage />} />
            <Route path="/performance" element={<PerformanceListPage />} />
            <Route
              path="/performance/:id"
              element={<PerformanceDetailPage />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
