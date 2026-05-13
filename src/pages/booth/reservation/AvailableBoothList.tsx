import { useState } from "react";

import BoothCard from "../../../components/booth/BoothCard";
import BottomNav from "../../../components/common/BottomNav";
import TopBar from "../../../components/common/TopBar";
import FilterChip from "../../../components/common/FilterChip";
import SearchBar from "../../../components/common/SearchBar";

const LOCATIONS = ["전체", "백양로", "한글탑"];

const booths = [
  {
    title: "호프 한잔",
    location: "백양로",
    waiting: "대기 2팀",
    department: "사회학과",
    boothNumber: "B-07",
    tags: ["파전", "막걸리"],
  },
  {
    title: "호프 한잔",
    location: "한글탑",
    waiting: "대기 1팀",
    department: "사회학과",
    boothNumber: "H-07",
    tags: ["파전", "막걸리"],
  },
  {
    title: "호프 한잔",
    location: "백양로",
    waiting: "대기 2팀",
    department: "사회학과",
    boothNumber: "B-05",
    tags: ["파전", "막걸리"],
  },
  {
    title: "호프 한잔",
    location: "백양로",
    waiting: "대기 2팀",
    department: "사회학과",
    boothNumber: "B-09",
    tags: ["파전", "막걸리"],
  },
  {
    title: "호프 한잔",
    location: "백양로",
    waiting: "대기 2팀",
    department: "사회학과",
    boothNumber: "B-10",
    tags: ["파전", "막걸리"],
  },
  {
    title: "호프 한잔",
    location: "백양로",
    waiting: "대기 2팀",
    department: "사회학과",
    boothNumber: "B-11",
    tags: ["파전", "막걸리"],
  },
];

function AvailableBoothListPage() {
  const [selectedLocation, setSelectedLocation] = useState("전체");

  const filteredBooths =
    selectedLocation === "전체"
      ? booths
      : booths.filter((booth) => booth.location === selectedLocation);

  return (
    <div className="flex h-screen flex-col bg-white">
      <TopBar title="부스 예약" />

      <div className="h-[4.125rem] bg-white px-[1rem] py-[1.25rem]">
        <p className="text-heading-2">예약 가능 부스</p>
      </div>

      <div className="px-[1rem] mb-[1rem]">
        <SearchBar/>
      </div>

      <div className="flex gap-[0.5rem] px-[1rem] mb-[1rem]">
        {LOCATIONS.map((location) => (
          <FilterChip
            key={location}
            label={location}
            selected={selectedLocation === location}
            onClick={() => setSelectedLocation(location)}
          />
        ))}
      </div>

      <main className="flex-1 overflow-y-auto scrollbar-hide px-[1rem]">
        <div className="mb-[1.25rem] flex flex-col gap-[0.75rem]">
          {filteredBooths.map((booth) => (
            <BoothCard
              key={booth.boothNumber}
              title={booth.title}
              location={booth.location}
              waiting={booth.waiting}
              department={booth.department}
              boothNumber={booth.boothNumber}
              tags={booth.tags}
              showArrow
            />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default AvailableBoothListPage;