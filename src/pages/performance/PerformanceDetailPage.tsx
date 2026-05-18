import { useParams } from "react-router-dom";
import { useState } from "react";
import BottomNav from "../../components/common/BottomNav";
import { Link } from "react-router-dom";
import { ALL_PERFORMANCES } from "../../mocks/dummyPerformances";

function TopBar() {
  return (
    <div className="relative flex w-full h-[3.5rem] items-center justify-center bg-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.04)] shrink-0 font-suit">
      <Link
        to="/performance"
        className="absolute left-4 w-6 h-6 flex items-center justify-center active:opacity-70 transition-opacity"
      >
        <img
          src="/booth/chevron-left.svg"
          alt="뒤로가기"
          className="w-full h-full object-contain"
        />
      </Link>
      <div className="text-heading-2 leading-6 text-[#1F242C]">
        공연 상세
      </div>
    </div>
  );
}

function PerformanceDetailPage() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false); // 응원 섹션 오픈 상태 추가

  const handleSend = () => {
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  const perf = ALL_PERFORMANCES.find((p) => p.id === Number(id));

  return (
    <div className="flex h-screen flex-col bg-white">
      <TopBar />

      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="sticky top-4 z-50 px-4">
          <div
            className={`transition-all duration-500
      ${
        isSent
          ? "opacity-100 translate-y-0 h-auto mb-0"
          : "opacity-0 -translate-y-2 pointer-events-none h-0 overflow-hidden"
      }`}
          >
            <div className="w-full px-6 py-5 bg-indigo-50 rounded-2xl shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-1px] outline-indigo-500 flex justify-start items-start gap-3">
              <span className="leading-6">💌</span>
              <p className="text-body-1 text-[#1F242C]">
                보내주신 소중한 응원이 공연팀에게 잘 전달되었습니다!
              </p>
            </div>
          </div>
        </div>
        <img src={perf.photo} alt={`${perf.title}팀 사진`} className="w-full" />

        <div className="w-full px-4 py-6 bg-white flex flex-col gap-4 font-suit">
          {/* 헤더 섹션: 타이틀 & 태그 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-heading-2">멋사 OB 밴드</h2>
              <div className="flex gap-1">
                {perf.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#FFECF6] rounded-full text-[#FF40A5] text-body-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-heading-3 text-[#4A5568]">
                {perf.location}
              </div>
              <div className="flex items-center gap-1 pb-0 text-body-2 text-[#4A5568]">
                <img src="/performance/icon-clock.svg" />
                <span>{perf.time}</span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <img src="/performance/icon-instagram.svg" />
                  <span className="px-2 py-0.5 bg-gray-100 rounded-full text-caption text-[#4A5568] ">
                    {perf.instagram}
                  </span>
                </div>
                <div className="flex items-center gap-1 pt-1.5">
                  <img src="/performance/icon-youtube.svg" />
                  <span className="px-2 py-0.5 bg-gray-100 rounded-full text-caption text-[#4A5568]">
                    {perf.youtube}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-body-2 whitespace-pre-wrap">
              {perf.description}
            </p>
          </div>
        </div>
        <div className="w-full h-[12px] bg-[var(---secondary,#EDEEF0)]"></div>
        <div
          data-속성-1="베리언트2"
          className="w-full px-4 py-5 bg-white inline-flex flex-col justify-start items-start gap-3.5"
        >
          {/* 셋리스트 타이틀 */}
          <div className="justify-start text-heading-3">셋리스트</div>

          <div className="flex flex-col justify-start items-start gap-1.5">
            {perf.setlist.map((song, index) => {
              const badgeStyles = [
                { bg: "bg-[#E9EEFF]", text: "text-[#1E53FF]" },
                { bg: "bg-[#F1EEFF]", text: "text-[#7052FF]" },
                { bg: "bg-[#FFECF6]", text: "text-[#FF40A5]" },
              ];
              const { bg, text } = badgeStyles[index % 3];

              return (
                <div
                  key={index}
                  className="w-full px-4 py-3 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#EDEEF0] inline-flex justify-start items-center gap-3.5 overflow-hidden"
                >
                  {/* 번호 배지 */}
                  <div
                    className={`size-4 ${bg} rounded-full flex justify-center items-center gap-2.5`}
                  >
                    <div
                      className={`text-center justify-start ${text} text-label leading-4`}
                    >
                      {index + 1}
                    </div>
                  </div>
                  {/* 곡 정보 */}
                  <div className="inline-flex flex-col justify-start items-start">
                    <div className="justify-start text-body-1">
                      {song.title}
                    </div>
                    <div className="justify-start text-caption">
                      {song.artist}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 응원 섹션 컨테이너 */}
        <div className="inline-flex w-full flex-col items-center justify-start gap-4 bg-white px-4">
          {/* 리뷰 카드 (isReviewOpen이 true일 때만 렌더링) */}
          {isReviewOpen && (
            <div className="flex w-full overflow-hidden flex-col items-start justify-center gap-4 rounded-2xl bg-white p-6 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-1px] outline-gray-100">
              <div className="flex self-stretch flex-col items-start justify-start gap-3">
                <div className="flex w-full flex-col items-start justify-start gap-2">
                  <div className="line-clamp-1 text-heading-3">
                    💕 공연팀에게 응원 보내기
                  </div>
                </div>
              </div>

              {/* 곡 선택 드롭다운 영역 */}
              <div className="flex self-stretch flex-col items-start justify-start gap-2">
                <div className="self-stretch text-body-1">가장 좋았던 곡</div>
                <div className="relative inline-flex self-stretch items-center justify-start gap-4 rounded-[10px] bg-white">
                  <div className="flex flex-1 flex-col items-start justify-start gap-0.5">
                    {/* 셀렉트 박스 상단 (클릭 시 isOpen 상태 변경) */}
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className={`inline-flex self-stretch cursor-pointer items-center justify-between rounded-[10px] bg-white px-3.5 py-3 outline outline-1 outline-offset-[-1px] ${isOpen ? "outline-blue-600" : "outline-gray-100"}`}
                    >
                      <div className="text-body-2 ">
                        {selectedSong || "곡명 선택"}
                      </div>
                      <div
                        className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke="#A1A1AA"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* 드롭다운 리스트 (isOpen일 때만 곡명들 노출) */}
                    {isOpen && (
                      <div className="absolute top-[110%] z-10 flex self-stretch w-full flex-col items-center justify-start overflow-hidden rounded-[10px] bg-white outline outline-1 outline-offset-[-1px] outline-blue-600 shadow-lg">
                        {perf.setlist.map((song, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedSong(song.title);
                              setIsOpen(false);
                            }}
                            className={`flex self-stretch cursor-pointer items-start justify-start gap-4 px-3.5 py-3 hover:bg-indigo-50 ${index === 0 ? "rounded-t-[10px]" : ""} ${index === perf.setlist.length - 1 ? "rounded-b-[10px]" : ""}`}
                          >
                            <div className="text-body-2 leading-5">
                              {song.title}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 응원 메시지 입력 영역 */}
              <div className="flex self-stretch flex-col items-start justify-start gap-2">
                <div className="self-stretch text-body-1">응원 메시지</div>
                <div className="inline-flex self-stretch items-start justify-start gap-2 rounded-lg bg-gray-100 px-5 py-3.5">
                  <textarea
                    className="flex-1 bg-transparent text-body-2 placeholder:text-[#ACB1BA] focus:outline-none resize-none"
                    placeholder="공연자에게 따뜻한 응원 메시지를 남겨주세요 (욕설·비방 등 부적절한 내용은 삭제 조치될 수 있습니다)"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          )}

          {/* 전송 버튼 (클릭 시 응원 섹션을 열거나, 열려있다면 전송 동작 실행) */}
          <button
            onClick={() => {
              if (!isReviewOpen) {
                setIsReviewOpen(true);
              } else {
                handleSend();
              }
            }}
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-indigo-500 px-5 py-2 transition-colors hover:bg-indigo-600"
          >
            <div className="text-center text-heading-3 text-white">
              ♥ 응원메세지 보내기
            </div>
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default PerformanceDetailPage;
