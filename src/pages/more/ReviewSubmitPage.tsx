import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/common/TopBar";
import BottomNav from "../../components/common/BottomNav";

export default function ReviewSubmitPage() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar title="만족도 평가" showBackButton />

      <div className="flex-1 flex flex-col items-center px-[16px] py-[36px] gap-[24px] overflow-y-auto">
        {/* 캐릭터 + 완료 타이틀 */}
        <div className="flex flex-col items-center gap-[16px] w-full">
          <div className="w-[147px] h-[128px] relative overflow-hidden">
            <img
              src="/img/review-submit-character.png"
              alt="캐릭터"
              className="absolute max-w-none"
              style={{ width: "436.73%", height: "501.56%", top: "-85.16%", left: "-29.25%" }}
            />
          </div>
          <span className="text-heading-1 text-[#1E53FF] text-center">
            만족도 평가 완료
          </span>
        </div>

        {/* 안내 카드 */}
        <div className="w-full bg-[#E9EEFF] border border-[#1E53FF] rounded-[14px] px-[24px] py-[20px] shadow-[0px_1px_4px_rgba(0,0,0,0.08)]">
          <div className="flex gap-[10px] items-start">
            <span className="text-body-1 text-[#0D0F12] shrink-0">🎉</span>
            <div className="text-body-1 text-[#0D0F12]">
              <p className="mb-0 leading-[1.5]">소중한 만족도 평가로 젤리:U가 별을 얻었어요!</p>
              <p className="leading-[1.5]">리뷰까지 남겨주시면 젤리:U가 윙크를 보여준대요</p>
            </div>
          </div>
        </div>

        {/* 피드백 카드 */}
        <div className="w-full bg-white border border-[#EDEEF0] rounded-[14px] px-[24px] py-[20px] shadow-[0px_1px_4px_rgba(0,0,0,0.08)] flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[12px]">
            <span className="text-heading-3 text-[#0D0F12]">
              💬 피드백 및 건의사항
            </span>
            <span className="text-body-2 text-[#4A5568]">
              웹사이트 이용 중 불편한 점이나 개선 아이디어가 있으시면 자유롭게 남겨주세요!
            </span>
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="건의사항을 작성해주세요"
            className="w-full min-h-[120px] bg-[#EDEEF0] rounded-[8px] px-[20px] py-[14px] text-body-2 text-[#4A5568] resize-none outline-none"
          />
        </div>
      </div>

      <div className="px-[16px] pb-[12px] shrink-0">
        <button
          onClick={() => navigate("/more/review-done")}
          className="w-full h-[56px] bg-[#1E53FF] rounded-[15px] flex items-center justify-center"
        >
          <span className="text-heading-3 text-white">제출하기</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
