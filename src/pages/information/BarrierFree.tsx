import { useState } from "react";

import TopBar from "../../components/common/TopBar";
import BottomNav from "../../components/common/BottomNav";
import mapImage from "../../assets/map2.png";


export default function BarrierFree() {
  const [isOpen, setIsOpen] = useState(false);

  const facilities = [
    {
      icon: "🚗",
      title: "주차 공간",
      description: "신촌캠퍼스 정문 주차장 내 장애인 전용 주차 구역",
    },
    {
      icon: "🚻",
      title: "화장실",
      description: "백양로 인근 학생회관 1층 장애인 화장실 이용 가능",
    },
    {
      icon: "🎪",
      title: "관람 구역",
      description: "메인 무대 앞 휠체어 전용 관람 구역 마련",
    },
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col relative">
      {/* TopBar */}
      <TopBar title="배리어프리 안내" showBackButton={true} />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-[5rem]">
        <div className="px-[1rem] py-[1rem] space-y-[0.5rem]">
          {/* Info Card */}
          <div className="bg-[#E0FFF3] border border-[#00C070] rounded-[0.875rem] p-[1.5rem] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]">
            <div className="flex gap-[0.625rem]">
              <div className="flex-shrink-0 text-[15px] leading-[1.5]">♿</div>
              <div className="flex-1">
                <p className="text-[15px] font-semibold text-[#0D0F12] leading-[1.5] break-words">
                  모든 분들이 편안하게 대동제를 즐길 수 있도록 배리어프리 구역과 이동 동선을
                  안내드립니다.
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="pt-[0.5rem]">
            <p className="text-[12px] text-[#4A5568] px-[1rem] py-[0.625rem]">
              안내 지도
            </p>
            <div className="bg-white border border-[#EDEEF0] rounded-[0.875rem] overflow-hidden px-[1rem] py-[1rem]">
                <div className="bg-[#E8E8E8] rounded-[0.5rem] aspect-video flex items-center justify-center relative">
                  
                                    <img
                    src={mapImage}
                    alt="배리어프리 안내 지도"
                    className="w-full h-full object-cover rounded-[0.5rem] cursor-zoom-in"
                    onClick={() => setIsOpen(true)}
                  />

                  {/* 확대 버튼 */}
                  <button
                    aria-label="지도 확대"
                    onClick={() => setIsOpen(true)}
                    className="absolute bottom-[0.5rem] right-[0.5rem] bg-black/40 p-[0.375rem] rounded-[0.375rem] cursor-pointer hover:bg-black/50 transition-colors"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6" />
                      <path d="M9 21H3v-6" />
                      <path d="M21 3l-7 7" />
                      <path d="M3 21l7-7" />
                    </svg>
                  </button>
                </div>
              <div className="flex items-center gap-[0.375rem] mt-[1rem]">
                <div className="bg-[#FF5A36] w-[1.5rem] h-[0.5rem] rounded-full" />
                <p className="text-[12px] text-[#0D0F12] font-regular">경사로</p>
              </div>
            </div>
          </div>

          {/* Facilities Section */}
          <div className="pt-[0.5rem]">
            <p className="text-[12px] text-[#4A5568] px-[1rem] py-[0.625rem]">
              배리어프리 시설
            </p>
            <div className="bg-white space-y-0 border border-[#EDEEF0] rounded-[0.875rem] overflow-hidden">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`px-[1rem] py-[0.625rem] flex flex-col gap-[0.125rem] ${
                    index < facilities.length - 1 ? "border-b border-[#EDEEF0]" : ""
                  }`}
                >
                  <div className="flex items-center gap-[0.25rem]">
                    <span className="text-[1.0625rem]">{facility.icon}</span>
                    <p className="text-[17px] font-semibold text-[#0D0F12] leading-[1.3]">
                      {facility.title}
                    </p>
                  </div>
                  <p className="text-[14px] text-[#4A5568] font-regular leading-[1.5]">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
      
      {/* Image lightbox modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          {/* 모달 닫기 버튼 */}
          <button
            className="absolute top-[1.5rem] right-[1.5rem] bg-white/20 p-[0.375rem] rounded-full z-10 hover:bg-white/30 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          
          <div className="w-full h-full p-4 flex items-center justify-center">
            {/* 🌟 수정된 부분: 모달 내부의 확대된 이미지 src도 mapImage를 사용합니다. */}
            <img
              src={mapImage}
              alt="배리어프리 안내 지도 확대"
              className="max-w-full max-h-full object-contain rounded-[0.5rem]"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}