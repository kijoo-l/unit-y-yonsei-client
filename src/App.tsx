import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./pages/HomePage";
import BoothList from "./pages/booth/BoothList";
import AvailableBoothListPage from "./pages/booth/reservation/AvailableBoothList";
import LostFound from "./pages/information/LostFound";
import BarrierFree from "./pages/information/BarrierFree";
import BoothReservationDetailPage from "./pages/booth/reservation/BoothReservationDetailPage";
import { InformationMainPage } from './pages/more/InformationMainPage';
import ReservationFormPage from "./pages/booth/reservation/ReservationFormPage";
import ReservationCompletePage from "./pages/booth/reservation/ReservationCompletePage";



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
            <Route path="/more/lost-found" element={<LostFound />} />
            <Route path="/more/barrier-free" element={<BarrierFree />} />
            <Route path="/booths/:boothNumber" element={<BoothReservationDetailPage />} />
            <Route path="/more" element={<InformationMainPage />} />
            <Route path="/reservation/:boothNumber" element={<ReservationFormPage />} />
            <Route path="/reservation-complete" element={<ReservationCompletePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;