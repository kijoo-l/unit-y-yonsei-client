import BottomNav from "../../../components/BottomNav";
import TopBar from "../../../components/TopBar";

function ReservationBoothListPage() {
  return (
    <div className="flex flex-col h-screen bg-[#F7F8FA]">
      <TopBar
        title="부스 예약"
      />

      <main className="flex-1 overflow-y-auto">
        {/* 날짜 탭 */}
        {/* 필터 */}
        {/* 예약 가능 부스 목록 */}
      </main>

      <BottomNav />
    </div>
  );
}

export default ReservationBoothListPage;