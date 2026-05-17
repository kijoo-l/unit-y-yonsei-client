import { useState } from "react";

import BoothCard, { type WaitingStatus } from "../../../components/booth/BoothCard";
import BottomNav from "../../../components/common/BottomNav";
import TopBar from "../../../components/common/TopBar";
import FilterChip from "../../../components/common/FilterChip";
import { useNavigate } from "react-router-dom";
import TabBar from "../../../components/common/TabBar";
import SearchBar from "../../../components/common/SearchBar";

type TabId = "songdo" | "sinchon1" | "sinchon2" | "reservation";
type Booth = {
  title: string;
  location: string;
  waiting: string;
  waitingStatus: WaitingStatus;
  department: string;
  boothNumber: string;
  tags: string[];
};

const booths: Booth[] = [
  {
    title: "호프 한잔",
    location: "백양로",
    waiting: "대기 2팀",
    waitingStatus: "대기중",
    department: "사회학과",
    boothNumber: "B-07",
    tags: ["파전", "막걸리"],
  },
  {
    title: "호프 한잔",
    location: "한글탑",
    waiting: "대기 1팀",
    waitingStatus: "대기중",
    department: "사회학과",
    boothNumber: "H-07",
    tags: ["파전", "막걸리"],
  },
  {
    title: "호프 한잔",
    location: "백양로",
    waiting: "대기 2팀",
    waitingStatus: "대기중",
    department: "사회학과",
    boothNumber: "B-05",
    tags: ["파전", "막걸리"],
  },
  {
    title: "호프 한잔",
    location: "백양로",
    waiting: "대기 2팀",
    waitingStatus: "대기중",
    department: "사회학과",
    boothNumber: "B-09",
    tags: ["파전", "막걸리"],
  },
  {
    title: "호프 한잔",
    location: "백양로",
    waiting: "대기 2팀",
    waitingStatus: "입장 완료",
    department: "사회학과",
    boothNumber: "B-10",
    tags: ["파전", "막걸리"],
  },
  {
    title: "호프 한잔",
    location: "백양로",
    waiting: "대기 2팀",
    waitingStatus: "예약 취소",
    department: "사회학과",
    boothNumber: "B-11",
    tags: ["파전", "막걸리"],
  },
];

function AvailableBoothListPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>("songdo");

  const [selectedFilters, setSelectedFilters] = useState<Record<TabId, string>>({
    songdo: "전체",
    sinchon1: "전체",
    sinchon2: "전체",
    reservation: "전체",
  })

  const selectedFilter = selectedFilters[activeTab];

  const filteredBooths =
    selectedFilter === "전체"
      ? booths
      : activeTab === "reservation"
        ? booths.filter((booth) => booth.waitingStatus === selectedFilter)
        : booths.filter((booth) => booth.location === selectedFilter);

   const tabs = [
    { id: "songdo", label: "5/27 송도" },
    { id: "sinchon1", label: "5/28 신촌" },
    { id: "sinchon2", label: "5/29 신촌" },
    { id: "reservation", label: "내 예약" },
  ];

  const filterMap: Record<TabId, string[]> = {
    songdo: [],
    sinchon1: ["전체", "백양로", "한글탑"],
    sinchon2: ["전체", "백양로", "한글탑"],
    reservation: ["전체", "대기중", "예약 취소", "입장 완료"],
  }

  const currentFilters = filterMap[activeTab];
  
  const [searchtext, setSearchtext] = useState("");

  return (
    <div className="flex h-screen flex-col bg-white">
      <TopBar title="부스 예약" />

      <div>
          <TabBar
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={(tab) => setActiveTab(tab as TabId)}
          />
        </div>
      
      {activeTab !== "reservation" && (
        <div className="h-[4.125rem] bg-white px-[1rem] py-[1.25rem]">
          <p className="text-heading-2">예약 가능 부스</p>
        </div>
      )}

      {activeTab === "reservation" && (
        <div className="mb-[16px]"/>
      )}
      
    {currentFilters.length > 0 && (
      <div className="flex gap-[0.5rem] px-[1rem] mb-[1rem]">
        {currentFilters.map((filter) => (
          <FilterChip
            key={filter}
            label={filter}
            selected={selectedFilter === filter}
            onClick={() => setSelectedFilters((prev) => ({ ...prev, [activeTab]: filter }))}
          />
        ))}
      </div>
    )}

      {activeTab !== "reservation" && (
      <div className="px-[1rem] mb-[1rem]">
        <SearchBar
          value={searchtext}
          onChange={setSearchtext}
          />
      </div>
      )}

      <main className="flex-1 overflow-y-auto scrollbar-hide px-[1rem]">
        <div className="mb-[1.25rem] flex flex-col gap-[0.75rem]">
          {filteredBooths.map((booth) => (
            <BoothCard
              key={booth.boothNumber}
              title={booth.title}
              waiting={activeTab === "reservation" ? undefined :booth.waiting}
              waitingStatus={
                activeTab === "reservation" ? booth.waitingStatus : undefined
              }
              department={booth.department}
              boothNumber={booth.boothNumber}
              tags={booth.tags}
              showArrow
              onClick={() => navigate(`/booths/${booth.boothNumber}`)}
            />
          ))}

          {activeTab === "reservation" && (
          <div className="mb-[10px] px-[1rem] text-center">
            <p className="text-caption text-[#ACB1BA]">
              총 {filteredBooths.length}개의 예약이 있습니다
              <br/> 예약 수정·취소는 각 부스별로 확인해주세요
            </p>
          </div>
        )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default AvailableBoothListPage;