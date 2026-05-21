import MenuCard from "../../components/booth/MenuCard";
import WaitingStatusCard from "../../components/booth/reservation/WaitingStatusCard";
import BottomNav from "../../components/common/BottomNav";
import TopBar from "../../components/common/TopBar";

function BoothDetailPage() {
  const booth = {
    name: "호프 한 잔",
    department: "사회학과",
    location: "백양로",
    boothNumber: "B-07",
    description: "사회학과에서 준비한 맛있는 음식과 즐거운 체험을 즐겨보세요!",
    tags: ["파전", "막걸리"],
    imageUrl: "/character/booth-character.svg",
    waitingTeamCount: 2,
  };

  const menus = [
    {
      id: 1,
      name: "슈크림 붕어빵 (3개)",
      description: "신선한 재료로 만드는 따뜻한 붕어빵",
      price: 2500,
      Status: "판매중" as const,
    },
    {
      id: 2,
      name: "슈크림 붕어빵 (3개)",
      description: "신선한 재료로 만드는 따뜻한 붕어빵",
      price: 2500,
      Status: "판매중" as const,
    },
    {
      id: 3,
      name: "슈크림 붕어빵 (3개)",
      description: "신선한 재료로 만드는 따뜻한 붕어빵",
      price: 2500,
      Status: "마감" as const,
    },
  ];

  return (
    <div className="flex h-screen flex-col bg-white">
      <TopBar title="부스 상세" showBackButton />

      <main className="flex-1 overflow-y-auto no-scrollbar pb-[12px]">
        <section>
          <div className="h-[260px] overflow-hidden bg-[#EDEEF0]">
            <img
              src={booth.imageUrl}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="px-[16px] py-[20px]">
            <div className="flex items-center gap-[12px]">
              <h1 className="text-heading-2 text-[#1F242C]">
                {booth.name}
              </h1>

              <span className="rounded-full bg-[#E0FFF3] px-[10px] py-[4px] text-body-2 text-[#00C070]">
                예약 가능
              </span>
            </div>

            <p className="mt-[16px] text-heading-3 text-[#4A5568]">
              {booth.department} · {booth.location} 부스 #{booth.boothNumber}
            </p>

            <p className="mt-[8px] text-body-2 text-[#4A5568]">
              ◷ 12:00 - 21:00
            </p>

            <p className="mt-[12px] text-body-2">
              {booth.description}
            </p>

            <div className="mt-[16px] rounded-[14px] border border-[#00C070] bg-[#E0FFF3] px-[24px] py-[20px] pb-[20px]">
              <p className="text-body-1">
                📢 테이블 이용 시 메인 메뉴를 하나 이상 주문해주셔야 합니다.
              </p>
            </div>
          </div>
        </section>

        <div className="h-[12px] bg-[#EDEEF0]" />

        <section className="px-[16px] py-[20px]">
          <div className="flex flex-col gap-[12px]">
            {menus.map((menu) => (
              <MenuCard
                key={menu.id}
                title={menu.name}
                description={menu.description}
                price={menu.price}
                Status={menu.Status}
              />
            ))}
          </div>
        </section>

        <div className="h-[12px] bg-[#EDEEF0]" />

        <section className="px-[16px] mt-[20px] mb-[20px]">
          <WaitingStatusCard count={booth.waitingTeamCount} />

          <button
            type="button"
            className="mt-[6px] h-[58px] w-full rounded-[18px] bg-[#C9CDD4] text-body-1 font-bold text-white"
          >
            입장 완료
          </button>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default BoothDetailPage;