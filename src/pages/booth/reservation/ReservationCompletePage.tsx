import ReservationCompleteCard from "../../../components/booth/reservation/ReservationCompleteCard";
import BottomNav from "../../../components/common/BottomNav";
import TopBar from "../../../components/common/TopBar";

function ReservationCompletePage() {
  const reservation = {
    boothName: "치킨 세상",
    department: "경영학과",
    boothNumber: "B-07",
    waitingOrder: 2,
    name: "홍길동",
    phone: "010-0000-0000",
    peopleCount: 2,
    date: "5월 27일",
    time: "14:30",
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <TopBar 
        title="예약 완료"
        showBackButton />

      <main className="overflow-y-auto no-scrollbar pt-[26px] pb-[32px]">
        <section className="flex flex-col items-center px-[16px]">
          <img
            src="/character/reservation-complete-character.svg"
            alt="예약 완료 캐릭터"
            className="h-[128px] w-[147px]"
          />

          <h1 className="mt-[16px] text-heading-1 text-[#1E53FF]">
            대기 순서 {reservation.waitingOrder}번째
          </h1>

          <div className="mt-[24px] w-full rounded-[14px] border border-[#1E53FF] bg-[#E9EEFF] px-[24px] py-[20px] text-center">
            <p className="text-body-1">
              📞 본인 차례가 되면 부스에서 전화드립니다.
              <br />
              전화를 받지 않으면 자동으로 취소될 수 있습니다.
            </p>
          </div>
        </section>

        <div className="mt-[36px] h-[12px] bg-[#EDEEF0]" />

        <section className="px-[16px] pt-[35px]">
          <ReservationCompleteCard reservation={reservation} />

          <div className="mt-[24px] flex gap-[12px]">
            <button className="h-[56px] px-[20px] py-[8px] flex-1 rounded-[18px] bg-[#1E53FF] text-heading-3 text-white">
              예약 정보 수정
            </button>

            <button className="h-[56px] px-[20px] py-[8px] flex-1 rounded-[18px] bg-[#FFF0EC] text-heading-3 text-[#FF5A36]">
              예약 취소
            </button>
          </div>

          <button className="mt-[12px] h-[56px] w-full rounded-[15px] bg-[#EDEEF0] text-heading-3 mb-[36px]">
            예약 목록으로
          </button>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default ReservationCompletePage;