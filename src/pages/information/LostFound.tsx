import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../../components/common/BottomNav";
import SearchBar from "../../components/common/SearchBar";
import TopBar from "../../components/common/TopBar";

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

function LostFoundCard({ item }: { item: LostItem }) {
  return (
    <article className="w-full rounded-[14px] border border-[#EDEEF0] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)] overflow-clip">
      <div className="flex items-center">
        
        <div
          className="relative h-[96px] w-[80px] shrink-0 rounded-l-[14px] overflow-hidden flex items-center justify-center"
          style={{
            background: 'linear-gradient(129.80557109226518deg, rgb(233, 238, 255) 0%, rgb(241, 238, 255) 100%)',
          }}
        >
          <img
            src="/character/question-character.svg"
            alt="item"
            className="max-w-none "
            style={{
              width: '136%',
              height: 'auto', 
              objectFit: 'contain',
            }}
            loading="lazy"
          />
        </div>
        {/* ------------------------- */}

        <div className="flex flex-1 flex-col gap-[8px] h-full items-start justify-center p-[12px] min-w-0">
          
          {/* 수정된 부분: 제목과 배지를 한 줄로, 위치를 그 아래로 배치 */}
          <div className="flex flex-col justify-center w-full min-w-0 h-[46px]">
            <div className="flex items-center justify-between w-full gap-2">
              <p className="text-body-1 text-[#0D0F12] truncate">
                {item.title}
              </p>
              {item.isNew ? (
                <span className="shrink-0 rounded-full bg-[#E9EEFF] px-[8px] py-px text-label text-[#1E53FF]">
                  New
                </span>
              ) : null}
            </div>
            <p className="mt-[0.25rem] text-body-2 text-[#4A5568] truncate">
              {item.location}
            </p>
          </div>
          
          <div className="rounded-full bg-[#EDEEF0] px-[8px] py-px text-label text-[#4A5568]">
            {item.timestamp}
          </div>
        </div>
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
    <div className="flex flex-col h-screen bg-white">
      <TopBar title="분실물 안내" showBackButton />

      <div className="pb-[45px] overflow-y-auto no-scrollbar">
        <div className="px-[16px] pt-[1rem] pb-[1rem] space-y-[1rem]">
          <section className="rounded-[14px] border border-[#FFB020] bg-[#FFF8E0] p-[1.5rem] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-[0.75rem]">
              
              <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-[0.75rem] bg-[#FFF3D3]">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="text-[#1F242C]"
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" 
                  />
                </svg>
              </div>

              <p className="text-heading-3 text-[#1F242C]">
                총학생회 분실물 센터
              </p>
            </div>

            <div className="mt-[12px] rounded-[8px] bg-[#EDEEF0] px-[20px] py-[14px] text-heading-3">
              010-0000-0000
            </div>

            <p className="mt-[12px] text-body-2 text-[#4A5568]">
              물건을 잃어버리셨나요? 위 번호로 연락주시면 분실물 등록 여부를 확인해드립니다.
            </p>
          </section>

          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="분실물 검색"
          />

          <div>
            <p className="text-caption text-[#4A5568]">
              습득 분실물 목록
            </p>

            <div className="mt-[8px] gap-[12px] flex flex-col">
              {filteredItems.map((item) => (
                <LostFoundCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}