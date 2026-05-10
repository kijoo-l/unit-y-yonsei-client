import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./pages/HomePage";
import AvailableBoothListPage from "./pages/booth/reservation/AvailableBoothList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen bg-white shadow-md">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reservation" element={<AvailableBoothListPage />} />

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;