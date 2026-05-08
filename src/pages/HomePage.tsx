import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
        <div className="flex-1 overflow-y-auto">

            <div className="h-[17.5rem] bg-gradient-to-r from-[#1E53FF] to-[#7052FF] text-white p-6 flex flex-col justify-end">
                <p className="text-[1.75rem] font-extrabold leading-[1.2]">2026 연세대학교 <br/> 대동제</p>
                <p className="text-[0.875rem] font-regular mt-1">5월 27일 - 5월 29일</p>

                <div className="mt-[1rem] flex items-center gap-[0.25rem]">
                    <img src="/home/banner index-selected.svg" alt="" />
                    <img src="/home/banner index-unselected.svg" alt="" />
                    <img src="/home/banner index-unselected.svg" alt="" />
                </div>
            </div>

            <div className="space-y-[1.5rem]">

                <section className="px-4 mb-[2.25rem]">
                <div className="flex justify-between items-center mb-5 mt-5">
                    <h2 className="font-bold text-[1.25rem] mt-[0.62rem]">현재 진행 중인 공연</h2>
                    <button className="flex items-center gap-[0.62rem] text-[#1E53FF] text-sm">
                        <Link to="/performance">더보기</Link>
                        <img src="/home/addition-arrow.svg" alt="" className="w-[0.25rem] h-[0.5rem]"/>
                    </button>
                </div>

                <div className="rounded-[0.88rem] bg-gradient-to-r from-[#7052FF] to-[#FF40A5] p-[0.0625rem] shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
                    <div className="flex overflow-hidden rounded-[0.82rem] bg-[#FFF0F8]">
                        <div className="w-[5rem] shrink-0 bg-white" />
                        <div className="flex-1 px-[0.75rem] py-[0.75rem]">
                        <div className="flex items-center gap-[0.5rem]">
                            <span className="rounded-full bg-[#FF40A5] px-[0.5rem] py-[0.06rem] text-[0.625rem] font-semibold text-white">
                            LIVE
                            </span>

                            <p className="text-[0.9375rem] font-semibold text-[#1F242C]">
                            연세 밴드부 YB
                            </p>
                        </div>

                        <p className="mt-[0.25rem] text-[0.75rem] text-[#4A5568]">
                            18:00 ~ 18:40 · 백양로 메인 무대
                        </p>

                        <div className="mt-[0.38rem] flex gap-[0.25rem]">
                            <span className="rounded-full bg-[#FFECF6] px-[0.5rem] py-[0.125rem] text-[0.6875rem] font-semibold text-[#FF40A5]">
                            #인디
                            </span>
                            <span className="rounded-full bg-[#FFECF6] px-[0.5rem] py-[0.125rem] text-[0.6875rem] font-semibold text-[#FF40A5]">
                            #JPOP
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
                </section>

                <div className="h-[0.75rem] bg-[#EDEEF0]" />

                <section className="px-4">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-bold text-[1.25rem]">인기 부스</h2>
                    <button className="flex items-center gap-[0.62rem] text-[#1E53FF] text-sm">
                        <Link to="/booth">더보기</Link>
                        <img src="/home/addition-arrow.svg" alt="" className="w-[0.25rem] h-[0.5rem]"/>
                    </button>
                </div>

                <div className="relative rounded-[0.88rem] bg-gradient-to-r from-[#1E53FF] to-[#7052FF] p-[0.0625rem] shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
                    <img
                        src="/home/rank1.svg"
                        alt=""
                        className="absolute top-[0.5rem] left-[0.5rem] w-[1.125rem] h-[1.125rem]"
                    />
                    <div className="flex overflow-hidden rounded-[0.82rem] bg-white">
                        <div className="w-[5rem] shrink-0 bg-gradient-to-r from-[#E9EEFF] to-[#F1EEFF]" />
                        <div className="flex-1 px-[0.75rem] py-[0.75rem]">
                        <div className="flex items-center">
                            <p className="text-[0.9375rem] font-semibold text-[#1F242C]">
                            호프 한잔
                            </p>
                            <span className="rounded-full bg-[#E9EEFF] px-[0.5rem] py-[0.06rem] text-[0.6875rem] font-semibold text-[#1E53FF] ml-[0.75rem]">
                            백양로
                            </span>
                            <span className="rounded-full bg-[#FFF8E0] px-[0.5rem] py-[0.06rem] text-[0.6875rem] font-semibold text-[#FFB020] ml-[0.25rem]">
                            대기 2팀
                            </span>
                        </div>

                        <p className="mt-[0.25rem] text-[0.75rem] text-[#4A5568]">
                            사회학과 · 부스 #B-07
                        </p>

                        <div className="mt-[0.38rem] flex gap-[0.25rem]">
                            <span className="rounded-full bg-[#EDEEF0] px-[0.5rem] py-[0.125rem] text-[0.6875rem] font-semibold text-[#4A5568]">
                            #파전
                            </span>
                            <span className="rounded-full bg-[#EDEEF0] px-[0.5rem] py-[0.125rem] text-[0.6875rem] font-semibold text-[#4A5568]">
                            #막걸리
                            </span>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-[0.88rem] bg-[#EDEEF0] p-[0.0625rem] shadow-[0_1px_4px_rgba(0,0,0,0.08)] mt-[0.75rem]">
                    <img
                        src="/home/rank2.svg"
                        alt=""
                        className="absolute top-[0.5rem] left-[0.5rem] w-[1.125rem] h-[1.125rem]"
                    />
                    <div className="flex overflow-hidden rounded-[0.82rem] bg-white">
                        <div className="w-[5rem] shrink-0 bg-gradient-to-r from-[#E9EEFF] to-[#F1EEFF]" />
                        <div className="flex-1 px-[0.75rem] py-[0.75rem]">
                        <div className="flex items-center">
                            <p className="text-[0.9375rem] font-semibold text-[#1F242C]">
                            호프 한잔
                            </p>
                            <span className="rounded-full bg-[#E9EEFF] px-[0.5rem] py-[0.06rem] text-[0.6875rem] font-semibold text-[#1E53FF] ml-[0.75rem]">
                            백양로
                            </span>
                            <span className="rounded-full bg-[#FFF8E0] px-[0.5rem] py-[0.06rem] text-[0.6875rem] font-semibold text-[#FFB020] ml-[0.25rem]">
                            대기 2팀
                            </span>
                        </div>

                        <p className="mt-[0.25rem] text-[0.75rem] text-[#4A5568]">
                            사회학과 · 부스 #B-07
                        </p>

                        <div className="mt-[0.38rem] flex gap-[0.25rem]">
                            <span className="rounded-full bg-[#EDEEF0] px-[0.5rem] py-[0.125rem] text-[0.6875rem] font-semibold text-[#4A5568]">
                            #파전
                            </span>
                            <span className="rounded-full bg-[#EDEEF0] px-[0.5rem] py-[0.125rem] text-[0.6875rem] font-semibold text-[#4A5568]">
                            #막걸리
                            </span>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-[0.88rem] bg-[#EDEEF0] p-[0.0625rem] shadow-[0_1px_4px_rgba(0,0,0,0.08)] mt-[0.75rem] mb-[2.25rem]">
                    <img
                        src="/home/rank3.svg"
                        alt=""
                        className="absolute top-[0.5rem] left-[0.5rem] w-[1.125rem] h-[1.125rem]"
                    />
                    <div className="flex overflow-hidden rounded-[0.82rem] bg-white">
                        <div className="w-[5rem] shrink-0 bg-gradient-to-r from-[#E9EEFF] to-[#F1EEFF]" />
                        <div className="flex-1 px-[0.75rem] py-[0.75rem]">
                        <div className="flex items-center">
                            <p className="text-[0.9375rem] font-semibold text-[#1F242C]">
                            호프 한잔
                            </p>
                            <span className="rounded-full bg-[#E9EEFF] px-[0.5rem] py-[0.06rem] text-[0.6875rem] font-semibold text-[#1E53FF] ml-[0.75rem]">
                            백양로
                            </span>
                            <span className="rounded-full bg-[#FFF8E0] px-[0.5rem] py-[0.06rem] text-[0.6875rem] font-semibold text-[#FFB020] ml-[0.25rem]">
                            대기 2팀
                            </span>
                        </div>

                        <p className="mt-[0.25rem] text-[0.75rem] text-[#4A5568]">
                            사회학과 · 부스 #B-07
                        </p>

                        <div className="mt-[0.38rem] flex gap-[0.25rem]">
                            <span className="rounded-full bg-[#EDEEF0] px-[0.5rem] py-[0.125rem] text-[0.6875rem] font-semibold text-[#4A5568]">
                            #파전
                            </span>
                            <span className="rounded-full bg-[#EDEEF0] px-[0.5rem] py-[0.125rem] text-[0.6875rem] font-semibold text-[#4A5568]">
                            #막걸리
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
                </section>

            </div>
        </div>

      <BottomNav/>

    </div>
  );
}

export default Home;