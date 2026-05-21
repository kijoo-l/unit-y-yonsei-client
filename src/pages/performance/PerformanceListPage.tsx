import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import BottomNav from "../../components/common/BottomNav";
import TopBar from "../../components/common/TopBar";
import PerformanceCard from "../../components/performance/PerformanceCard";
import { ALL_PERFORMANCES } from "../../mocks/dummyPerformances";
import MapAccordion from "../../components/common/MapAccordion";
import TabBar from "../../components/common/TabBar";

const DAY_TABS = [
  { id: "songdo", label: "5/27 송도" },
  { id: "sinchon1", label: "5/28 신촌" },
  { id: "sinchon2", label: "5/29 신촌" },
];

const LOCATION_TABS = [
  { id: "all", label: "전체" },
  { id: "nocheon", label: "노천극장" },
  { id: "dongmun", label: "동문광장" },
];

const MAP_IMAGES: Record<string, string> = {
  songdo: "/performance/map-songdo.svg",
  all: "/performance/map-sinchon-all.svg",
  nocheon: "/performance/map-sinchon-nocheon.svg",
  dongmun: "/performance/map-sinchon-dongmun.svg",
};

function PerformanceListPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeDay = new URLSearchParams(location.search).get("day") || "songdo";
  const [activeLocation, setActiveLocation] = useState("all");

  const isSinchon = activeDay === "sinchon1" || activeDay === "sinchon2";
  const currentMap = isSinchon
    ? MAP_IMAGES[activeLocation]
    : MAP_IMAGES["songdo"];

  const handleDayChange = (id: string) => {
    navigate(`?day=${id}`, { replace: true });
    setActiveLocation("all"); // 날짜 바뀌면 장소 탭 초기화
  };

  const livePerformance = ALL_PERFORMANCES.find((perf) => perf.isLive);

  return (
    <div className="flex h-screen flex-col bg-white">
      <TopBar title="공연" />

      <main className="flex-1 overflow-y-auto scrollbar-hide">
        {/* 날짜 탭바 */}
        <TabBar
          tabs={DAY_TABS}
          activeTab={activeDay}
          onTabChange={handleDayChange}
        />

        {/* 라이브 공연 섹션 */}
        {livePerformance && (
          <section className="bg-gradient-to-b from-[#7052FF] to-[#FF40A5] pb-[20px]">
            <div className="px-4">
              <p className="py-5 text-heading-2 text-white">
                현재 진행 중인 공연
              </p>
              <Link
                to={`/performance/${livePerformance.id}`}
                className="block active:opacity-70 transition-opacity"
              >
                <PerformanceCard
                  title={livePerformance.title}
                  time={livePerformance.time}
                  location={livePerformance.location}
                  tags={livePerformance.tags}
                  isLive={livePerformance.isLive}
                />
              </Link>
            </div>
          </section>
        )}

        <div className="self-stretch px-4 py-5 bg-white inline-flex justify-start items-center gap-28">
          <div className="justify-start text-heading-2">공연 타임테이블</div>
        </div>

        <div className="flex flex-col px-4">
          {/* 신촌일 때만 장소 탭 표시 */}
          {isSinchon && (
            <div className="flex gap-2 pb-4">
              {LOCATION_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveLocation(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-body-2 transition-colors
              ${
                activeLocation === tab.id
                  ? "bg-[#1E53FF] text-white"
                  : "bg-[#EDEEF0] text-[#4A5568]"
              }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
          <MapAccordion title="공연 장소 안내 지도">
            <img
              src={currentMap}
              alt="공연 장소 안내 지도"
              className="w-full object-cover"
            />
          </MapAccordion>
        </div>

        {/* 공연 리스트 섹션 */}
        <section className="flex flex-col pt-4">
          {ALL_PERFORMANCES.map((perf) => (
            <div
              key={perf.id}
              className={`flex w-full flex-col py-4 border-l-[4px] ${
                perf.isLive
                  ? "bg-gradient-to-r from-[#F1EEFF] to-[#FFECF6]"
                  : "border-[#868D9A] bg-white"
              }`}

              style={{
                borderImage: perf.isLive 
                  ? 'linear-gradient(180deg, #7052FF 0%, #FF40A5 100%) 1' 
                  : 'none',
              }}
            >
              <div className="flex flex-col gap-[8px] pl-[12px] pr-4">
                <p className="text-[#4A5568] text-caption">{perf.time}</p>
                <Link
                  to={`/performance/${perf.id}`}
                  className="block active:opacity-70 transition-opacity"
                >
                  <PerformanceCard
                    title={perf.title}
                    time={perf.time}
                    location={perf.location}
                    tags={perf.tags}
                    isLive={perf.isLive}
                  />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default PerformanceListPage;
