import { useState } from "react";
import TopBar from "../../components/common/TopBar";
import TabBar from "../../components/common/TabBar";
import SearchBar from "../../components/common/SearchBar";
import FilterChip from "../../components/common/FilterChip";
import BoothCard from "../../components/booth/BoothCard";
import BottomNav from "../../components/common/BottomNav";

const DATE_TABS = [
  { id: "527", label: "5/27 송도" },
  { id: "528", label: "5/28 신촌" },
  { id: "529", label: "5/29 신촌" },
];

const FILTER_CHIPS = [
  { id: "all", label: "전체" },
  { id: "booth", label: "부스" },
  { id: "foodtruck", label: "푸드트럭" },
];

const LOCATION_CHIPS: Record<string, { id: string; label: string }[]> = {
  "527": [],
  "528": [
    { id: "all", label: "전체" },
    { id: "baekyang", label: "백양로" },
    { id: "hangeultap", label: "한글탑" },
  ],
  "529": [
    { id: "all", label: "전체" },
    { id: "baekyang", label: "백양로" },
    { id: "hangeultap", label: "한글탑" },
  ],
};

const MAP_IMAGES: Record<string, string> = {
  "527": "/booth/map-songdo.png",
  "528": "/booth/map-sinchon.png",
  "529": "/booth/map-sinchon.png",
};

const MOCK_BOOTHS = [
  {
    id: 1,
    title: "호프 한잔",
    waiting: "대기 2팀",
    department: "사회학과",
    boothNumber: "B-07",
    tags: ["파전", "막걸리"],
    location: "백양로",
  },
  {
    id: 2,
    title: "호프 한잔",
    waiting: "대기 2팀",
    department: "사회학과",
    boothNumber: "B-07",
    tags: ["파전", "막걸리"],
    location: "백양로",
  },
];

function BoothList() {
  const [activeTab, setActiveTab] = useState("527");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeLocation, setActiveLocation] = useState("all");
  const [isMapOpen, setIsMapOpen] = useState(false);

  function handleTabChange(tab: string) {
    setActiveTab(tab);
    setActiveLocation("all");
    setActiveFilter("all");
    setIsMapOpen(false);
  }

  const locationChips = LOCATION_CHIPS[activeTab] ?? [];

  return (
    <div className="flex flex-col h-screen bg-white">
      <TopBar title="부스" />
      <TabBar tabs={DATE_TABS} activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-5 pt-4 flex flex-col gap-3">
          {locationChips.length > 0 && (
            <div className="flex gap-2">
              {locationChips.map((chip) => (
                <FilterChip
                  key={chip.id}
                  label={chip.label}
                  selected={activeLocation === chip.id}
                  onClick={() => setActiveLocation(chip.id)}
                />
              ))}
            </div>
          )}

          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          <button
            type="button"
            onClick={() => setIsMapOpen((prev) => !prev)}
            className="flex items-center justify-between w-full rounded-lg border border-[#EDEEF0] bg-white px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <img src="/location.svg" alt="" className="w-4 h-4" />
              <span className="text-body-2 text-[#4A5568]">부스 안내 지도</span>
            </div>
            <img
              src="/chevron-down.svg"
              alt=""
              className={`w-4 h-4 transition-transform duration-200 ${isMapOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isMapOpen && (
            <div className="relative rounded-[14px] border border-[#EDEEF0] h-54 overflow-hidden">
              <img
                src={MAP_IMAGES[activeTab]}
                alt="부스 안내 지도"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-[#F7F8FA] flex items-center justify-center -z-10">
                <span className="text-caption text-[#ACB1BA]">지도 영역</span>
              </div>
              <button
                type="button"
                aria-label="지도 확대"
                className="absolute bottom-4.25 right-4.25 w-6 h-6 rounded-sm bg-[rgba(31,36,44,0.5)] flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1H1V5M9 1H13V5M9 13H13V9M1 9V13H5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="px-5 pt-3 pb-3 flex gap-2">
          {FILTER_CHIPS.map((chip) => (
            <FilterChip
              key={chip.id}
              label={chip.label}
              selected={activeFilter === chip.id}
              onClick={() => setActiveFilter(chip.id)}
            />
          ))}
        </div>

        <div className="px-5 pb-6 flex flex-col gap-2">
          {MOCK_BOOTHS.map((booth) => (
            <BoothCard
              key={booth.id}
              title={booth.title}
              waiting={booth.waiting}
              department={booth.department}
              boothNumber={booth.boothNumber}
              tags={booth.tags}
              location={booth.location}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default BoothList;
