import { useState } from "react";
import TopBar from "../../components/common/TopBar";
import TabBar from "../../components/common/TabBar";
import SearchBar from "../../components/common/SearchBar";
import FilterChip from "../../components/common/FilterChip";
import BoothCard from "../../components/booth/BoothCard";
import BottomNav from "../../components/common/BottomNav";
import { useNavigate } from "react-router-dom";
import MapAccordion from "../../components/common/MapAccordion";

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

  const navigate = useNavigate();

  function handleTabChange(tab: string) {
    setActiveTab(tab);
    setActiveLocation("all");
    setActiveFilter("all");
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

          <MapAccordion/>
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
              onClick={() => navigate(`/booths/${booth.boothNumber}`)}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default BoothList;
