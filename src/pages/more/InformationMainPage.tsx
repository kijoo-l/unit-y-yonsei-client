import React from 'react';
import { ServiceCard } from '../../components/service/ServiceCard';
// 💡 팀원분이 만드신 공통 컴포넌트 불러오기 (경로나 이름은 실제 폴더 구조에 맞게 수정해 주세요!)
import TopBar from '../../components/common/TopBar'; 
import BottomNav from '../../components/common/BottomNav';
import chevronRight from '../../../public/svg/Chevron_Right_MD.svg'; // 공지사항 꺾쇠 아이콘


// 연동 전 임시 Mock Data
const mockData = {
  noticeList: [
    { id: 1, title: "우천 시 일정 변경 공지", createdAt: "2026.05.10", isNew: true },
    { id: 2, title: "우천 시 일정 변경 공지", createdAt: "2026.05.10", isNew: false },
    { id: 3, title: "우천 시 일정 변경 공지", createdAt: "2026.05.10", isNew: false }
  ],
  supportServiceList: [
    { id: 1, title: "분실물 안내", description: "습득 분실물 확인" },
    { id: 2, title: "배리어프리 이동 동선", description: "휠체어 이동 약자 안내 지도" },
    { id: 3, title: "만족도 평가 및 리뷰", description: "대동제 웹서비스가 만족스러우셨나요?" },
    { id: 4, title: "만든이들", description: "IT창업동아리 멋쟁이사자처럼 연세 14기 🦁" }
  ]
};

export const InformationMainPage = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      
      {/* 1. 상단 바 */}
      <TopBar title="정보" showBackButton />

      {/* 메인 스크롤 영역 (상/하단바 제외 남은 영역 꽉 채우기) */}
      <main className="flex-1 overflow-y-auto pb-[80px]"> {/* 하단바 높이만큼 하단 여백(pb) 확보 */}
        
        {/* 2. 공지사항 섹션 (흰색 배경) */}
        <section className="bg-white px-[16px] pt-[12px] pb-[12px]">
          <div className="flex items-center justify-between mb-[16px]">
            <h2 className="text-heading-2">공지사항</h2>
            <button className="flex items-center text-body-1 text-[#1E53FF]">
              전체보기
              <svg className="w-[16px] h-[16px] ml-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col">
            {mockData.noticeList.map((notice) => (
              <div 
                key={notice.id} 
                className= "flex flex-col py-[16px] border-b border-[#EDEEF0]"
              >
                <div className="flex items-center justify-between w-full mb-[2px]">
                  <div className="flex items-center gap-[8px]">
                    {/* isNew가 true일 때만 NEW 뱃지 표시 */}
                    {notice.isNew && (
                      <span className="px-[6px] py-[2px] text-label text-[#1E53FF] bg-[#E9EEFF] rounded-full">
                        NEW
                      </span>
                    )}
                    <span className="text-heading-3">{notice.title}</span>
                  </div>
                
                  {/* 꺾쇠 아이콘 */}
                  <img
                    src={chevronRight}
                    alt="이동"
                    className="w-[24px] h-[24px]"
                  />
                </div>

                <span className="text-caption text-[#4A5568]">{notice.createdAt}</span>
                
              </div>
            ))}
          </div>
        </section>

        {/* 3. 지원 서비스 섹션 (흰색 배경) */}
        <section className="bg-white px-[16px] ">
          <h2 className="text-caption text-[#4A5568] py-[10px] ">지원 서비스</h2>
          
          <div className="flex flex-col gap-[12px]">
            {mockData.supportServiceList.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                onClick={() => console.log(`${service.title} 페이지로 이동`)}
              />
            ))}
          </div>
        </section>

      </main>

      {/* 4. 하단 네비게이션 바 */}
      <BottomNav />
      
    </div>
  );
};