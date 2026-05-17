import { Link, useNavigate } from "react-router-dom";
import BottomNav from "../components/common/BottomNav";
import BoothCard from "../components/booth/BoothCard";
import PerformanceCard from "../components/performance/PerformanceCard";

const booth = [
  {
    title: "호프 한잔",
    waiting: "대기 2팀",
    department: "사회학과",
    boothNumber: "B-07",
    tags: ["파전", "막걸리"],
    rank: 1,
  },
  {
    title: "호프 한 잔",
    waiting: "대기 1팀",
    department: "컴퓨터과학과",
    boothNumber: "B-08",
    tags: ["소주"],
    rank: 2,
  },
  {
    title: "호프 한잔",
    waiting: "대기 2팀",
    department: "사회학과",
    boothNumber: "B-09",
    tags: ["파전", "막걸리"],
    rank: 3,
  },
];

function Home() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen bg-gray-50">
        <div className="flex-1 overflow-y-auto scrollbar-hide">

            <div className="h-[17.5rem] bg-gradient-to-r from-[#1E53FF] to-[#7052FF] text-white p-6 flex flex-col justify-end">
                <p className="text-display leading-[1.2]">2026 연세대학교 <br/> 대동제</p>
                <p className="text-body-2 mt-1">5월 27일 - 5월 29일</p>

                <div className="mt-[1rem] flex items-center gap-[0.25rem]">
                    <img src="/home/banner index-selected.svg" alt="" />
                    <img src="/home/banner index-unselected.svg" alt="" />
                    <img src="/home/banner index-unselected.svg" alt="" />
                </div>
            </div>

            <div className="space-y-[1.5rem]">

                <section className="px-4 mb-[2.25rem]">
                <div className="flex justify-between items-center mb-5 mt-5">
                    <p className="text-heading-2 mt-[0.62rem]">현재 진행 중인 공연</p>
                    <button className="flex items-center gap-[0.62rem] text-[#1E53FF] text-body-1 mt-[0.62rem]">
                        <Link to="/performance">더보기</Link>
                        <img src="/home/addition-arrow.svg" alt="" className="w-[0.5rem] h-[0.5rem]"/>
                    </button>
                </div>

                <PerformanceCard
                    title="연세 밴드부 YB"
                    time="18:00 ~ 18:40"
                    location="백양로 메인 무대"
                    tags={["인디", "JPOP"]}
                    isLive
                />
                </section>

                <div className="h-[0.75rem] bg-[#EDEEF0]" />

                <section className="px-4">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-heading-2">인기 부스</h2>
                    <button className="flex items-center gap-[0.62rem] text-[#1E53FF] text-body-1">
                        <Link to="/booth">더보기</Link>
                        <img src="/home/addition-arrow.svg" alt="" className="w-[0.5rem] h-[0.5rem]"/>
                    </button>
                </div>

                <div className="flex flex-col gap-[0.75rem] mb-[2.25rem]">
                    {booth.map((booth, index) => (
                        <BoothCard

                            key={booth.boothNumber}
                            title={booth.title}
                            waiting={booth.waiting}
                            department={booth.department}
                            boothNumber={booth.boothNumber}
                            tags={booth.tags}
                            rank={booth.rank}
                            onClick={() => navigate(`/booths/${booth.boothNumber}`)}
                        />
                    ))}
                </div>
                </section>

            </div>
        </div>

      <BottomNav/>

    </div>
  );
}

export default Home;