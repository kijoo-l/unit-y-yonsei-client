import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/common/TopBar";
import BottomNav from "../../components/common/BottomNav";

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={filled ? "#1E53FF" : "none"}
        stroke={filled ? "#1E53FF" : "#C7CAD0"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReviewPage() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar title="만족도 평가" showBackButton />

      <div className="flex-1 flex flex-col items-center py-[40px] gap-[60px] overflow-y-auto">
        {/* 별점 */}
        <div className="flex flex-col items-center w-full">
          <div className="h-[66px] flex items-center justify-center">
            <span className="text-heading-2 text-[#1E53FF]">별점을 선택해주세요</span>
          </div>
          <div className="flex items-center justify-center gap-[4px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                onClick={() => {
                  setRating(i);
                  navigate("/more/review-submit");
                }}
                className="p-[1px]"
              >
                <StarIcon filled={i <= rating} />
              </button>
            ))}
          </div>
        </div>

        {/* 캐릭터 + 말풍선 */}
        <div className="flex flex-col items-center gap-[12px] w-full px-[16px]">
          <div className="flex items-end self-center">
            <div className="bg-[#EDEEF0] rounded-[16px] px-[18px] py-[12px] mr-[-12px]">
              <span className="text-body-2 text-[#4A5568]">별이 없어서 슬퍼요 🥺</span>
            </div>
            <svg width="17" height="21" viewBox="0 0 17 21" fill="none">
              <path d="M0.5 1C0.5 1 5.5 9 1 20.5L16.5 13.5L0.5 1Z" fill="#EDEEF0" />
            </svg>
          </div>

          <div className="w-[147px] h-[131px] relative overflow-hidden">
            <img
              src="/img/review-character.png"
              alt="캐릭터"
              className="absolute max-w-none"
              style={{ width: "201.36%", height: "225.95%", top: "-56.49%", left: "-59.18%" }}
            />
          </div>

          <div className="flex items-center justify-center py-[10px] w-full">
            <span className="text-body-1 text-[#4A5568] text-center">
              서비스가 마음에 들었다면,<br />별점으로 젤리:U를 응원해 주세요!
            </span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
