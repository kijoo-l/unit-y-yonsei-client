import { useState } from 'react';
import TopBar from '../../components/common/TopBar';
import BottomNav from '../../components/common/BottomNav';

const bannerSlides = [
  '/notice/notice1.png',
  '/notice/notice2.png',
  '/notice/notice3.png',
];

// TODO: API 연동 후 useParams로 id 받아서 실제 데이터 fetch
const mockNotice = {
  title: '동문 광장 공연 참가 신청 안내',
  createdAt: '2026.05.01',
  content: `[개교 제141주년 무악대동제: 너와 내가 하나되는 연세의 축제, <UNIT:Y> 개최 공지]

안녕하세요, 개교 제141주년 무악대동제 <UNIT:Y> 기획단입니다.

봄날의 설렘이 청춘의 빛나는 웃음소리로 물들 5월 말, 우리 모두가 기다려온 무악대동제가 펼쳐집니다.

26일, 총학생회 체육부와 함께하는 블루런으로 푸른 설렘의 서막을 열고
27일엔 국제캠퍼스에서 더위를 단숨에 날려버릴 워터슬라이드 등 액티비티와 풍성한 공연과 먹거리,
28일과 29일에는 신촌 백양로를 빼곡하게 수놓은 부스와 반짝이는 공연들이 어우러져 신촌의 낮과 밤을 온통 축제의 열기로 물들일 예정입니다.

흩어져 있던 청춘의 조각들이 한 곳에 모여
각자의 색으로 하나의 장면을 완성해 내고,

그 겹겹의 색들이 어우러져
연세라는 하나의 이름이 됩니다.

이제 우리가 하나되는 순간으로 여러분을 초대합니다.

UNIT:Y,
너와 내가 하나되는 연세의 축제

개교 제141주년 무악대동제 <UNIT:Y> 기획단`,
  instagramUrl: 'https://www.instagram.com',
};

export default function NoticeDetailPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, bannerSlides.length - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="공지사항" showBackButton />

      <main className="flex-1 overflow-y-auto pb-[83px]">

        {/* 제목 + 날짜 */}
        <section className="px-[24px] py-[8px] bg-white flex flex-col gap-[4px]">
          <h1 className="text-heading-2">{mockNotice.title}</h1>
          <span className="text-caption text-[#ACB1BA]">{mockNotice.createdAt}</span>
        </section>

        {/* 배너 슬라이더 */}
        <section className="h-[496px] mt-[24px] bg-white">
          <div
            className="w-full h-full overflow-hidden relative bg-[#EDEEF0]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* 슬라이드 트랙 */}
            <div
              className="flex h-full transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {bannerSlides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`공지 이미지 ${i + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>

            {/* 좌측 하단 dot indicator */}
            <div className="absolute bottom-[16px] left-[20px] flex gap-[6px] items-center">
              {bannerSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`슬라이드 ${i + 1}`}
                  onClick={() => setCurrentIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-[16px] h-[6px] bg-white'
                      : 'w-[6px] h-[6px] bg-white opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 본문 내용 */}
        <section className="px-[24px] pt-[24px] pb-[20px] bg-white">
          <p className="text-body-2 whitespace-pre-line">{mockNotice.content}</p>
        </section>

        {/* 인스타그램 바로가기 버튼 */}
        <div className="px-[16px] pt-[24px] pb-[20px] bg-white">
          <button
            type="button"
            onClick={() => window.open(mockNotice.instagramUrl, '_blank')}
            className="w-full h-[56px] rounded-[15px] flex items-center justify-center gap-[10px] text-white"
            style={{ background: 'linear-gradient(to right, #7052FF, #FF40A5)' }}
          >
            <img src="/svg/iconoir_instagram.svg" alt="" className="w-[24px] h-[24px]" />
            공지 인스타그램 바로가기
          </button>
        </div>

      </main>

      <BottomNav />
    </div>
  );
}
