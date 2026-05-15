import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/common/SearchBar";
import BottomNav from "../../components/common/BottomNav";

type LostItem = {
  id: string;
  title: string;
  location: string;
  timestamp: string;
  isNew?: boolean;
};

const LOST_ITEMS: LostItem[] = [
  {
    id: "1",
    title: "검정 크로스백",
    location: "백양로 푸드트럭 앞",
    timestamp: "05.21 14:32 등록",
    isNew: true,
  },
  {
    id: "2",
    title: "파란 여행 가방",
    location: "중앙도서관 앞",
    timestamp: "05.20 18:10 등록",
  },
  {
    id: "3",
    title: "흰색 이어폰 케이스",
    location: "학생회관 로비",
    timestamp: "05.19 11:05 등록",
  },
  {
    id: "4",
    title: "검정 크로스백",
    location: "100주년 기념관 앞",
    timestamp: "05.18 09:22 등록",
  },
];

const MASCOT_ICON_SRC = "/mascot-lost.svg";

function LostFoundCard({ item }: { item: LostItem }) {
  return (
    <article className="rounded-[1rem] border border-[#EDEEF0] bg-white px-[1rem] py-[0.95rem] shadow-[0_1px_4px_rgba(31,36,44,0.08)]">
      <div className="flex items-start justify-between gap-[0.75rem]">
        <div className="flex gap-[0.75rem] min-w-0">
          <div className="flex h-[80px] w-[80px] flex-shrink-0 items-center justify-center rounded-[1rem] bg-[#F4F5F7] shadow-[0_10px_20px_rgba(112,82,255,0.08)]">
            <img
              src={MASCOT_ICON_SRC}
              alt="분실물 마스코트 아이콘"
              className="h-[58px] w-[58px] object-contain"
            />
          </div>

          <div className="min-w-0">
            <p className="text-body-1 font-semibold text-[#1F242C] truncate">{item.title}</p>
            <p className="mt-[0.25rem] text-caption text-[#4A5568] truncate">{item.location}</p>
            <p className="mt-[0.5rem] text-caption text-[#ACB1BA]">{item.timestamp}</p>
          </div>
        </div>

        {item.isNew ? (
          <span className="rounded-full bg-[#E9EEFF] px-[0.65rem] py-[0.14rem] text-label font-semibold text-[#1E53FF]">
            New
          </span>
        ) : null}
      </div>
    </article>
  );
}

export default function LostFound() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(
    () =>
      LOST_ITEMS.filter(
        (item) =>
          item.title.includes(searchTerm) || item.location.includes(searchTerm),
      ),
    [searchTerm],
  );

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="flex-1 pb-[6.5rem]">
        <div className="px-[1rem] pt-[1rem] pb-[1.5rem]">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-[0.75rem] bg-[#F8F9FB]"
              aria-label="뒤로가기"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 3.5L5.5 7L9.5 10.5"
                  stroke="#1F242C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <h1 className="text-heading-2 font-bold text-[#1F242C]">분실물 안내</h1>

            <div className="h-[2.5rem] w-[2.5rem]" />
          </div>

          <section className="mt-[1rem] rounded-[1rem] border border-[#EDEEF0] bg-[#FFF8E0] p-[1rem]">
            <div className="flex flex-col gap-[1rem]">
              <div className="flex items-center gap-[0.75rem] rounded-[0.75rem] border border-[#EDEEF0] bg-white px-[0.75rem] py-[0.75rem]">
                <span className="flex h-[1.75rem] w-[1.75rem] items-center justify-center rounded-full bg-[#FFE7F1]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.72 19.72 0 0 1-8.63-3.07 19.43 19.43 0 0 1-6-6A19.72 19.72 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.22 12.22 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.22 12.22 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"
                      fill="#E6396E"
                    />
                  </svg>
                </span>
                <p className="text-body-1 font-semibold text-[#1F242C]">
                  총학생회 분실물 센터
                </p>
              </div>

              <div className="rounded-[0.75rem] bg-white px-[1rem] py-[0.95rem] text-body-1 font-semibold text-[#1F242C] border border-[#EDEEF0]">
                010-0000-0000
              </div>

              <p className="text-caption leading-[1.5] text-[#4A5568]">
                물건을 잃어버리셨나요? 위 번호로 연락주시면 분실물 등록 여부를 확인해드립니다.
              </p>
            </div>
          </section>

          <div className="mt-[1rem]">
            <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="분실물 검색" />
          </div>

          <div className="mt-[1.25rem]">
            <p className="text-body-1 font-semibold text-[#1F242C]">습득 분실물 목록</p>

            <div className="mt-[0.75rem] space-y-[0.75rem]">
              {filteredItems.map((item) => (
                <LostFoundCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
