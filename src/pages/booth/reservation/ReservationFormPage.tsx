import { useState } from "react";
import TopBar from "../../../components/common/TopBar";
import ReservationCard from "../../../components/booth/reservation/ReservationCard";
import WaitingStatusCard from "../../../components/booth/reservation/WaitingStatusCard";
import BottomNav from "../../../components/common/BottomNav";


  function WaitingFormPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [peopleCount, setPeopleCount] = useState(1);
  const [password, setPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const waitingTeamCount = 7;

  const booth = 
    {
      id: 1,
      title: "호프 한잔",
      department: "사회학과",
      boothNumber: "B-07",
      location: "백양로",
    };

  const handleDecrease = () => {
    if (peopleCount <= 1) return;

    setPeopleCount((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setPeopleCount((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    if (!name || !phone || !isAgreed) {
      alert("필수 정보를 입력해주세요.");
      return;
    }

    const requestBody = {
      name,
      phone,
      peopleCount,
      password,
      privacyAgreement: isAgreed,
    };

    console.log(requestBody);
    alert("예약이 완료되었습니다!");};

  return (
    <div className="flex h-screen flex-col bg-white">
      <TopBar 
        title="예약하기" 
        showBackButton />

      <main className="pt-[36px] overflow-y-auto no-scrollbar">
        <section className="px-[16px]">
          <ReservationCard
            title={booth.title}
            department={booth.department}
            boothNumber={booth.boothNumber}
            location={booth.location}
          />

          <WaitingStatusCard count={waitingTeamCount} />
        </section>

        <div className="mt-[36px] h-[12px] bg-[#EDEEF0]" />

        <section>
          <p className="text-heading-2 px-[16px] py-[20px]">
            예약 정보 입력
          </p>

          <div className="flex flex-col px-[16px] gap-[24px]">
            <div>
              <p className="text-caption text-[#4A5568] py-[10px]">
                이름
                <span className="text-[#FF5A36]"> *</span>
              </p>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
                className="
                  mt-[8px]
                  h-[49px]
                  w-full
                  rounded-[10px]
                  bg-[#EDEEF0]
                  px-[20px]
                  py-[14px]
                  text-body-2
                  outline-none
                  placeholder:text-[#ACB1BA]
                "
              />
            </div>

            <div>
              <p className="text-caption text-[#4A5568]">
                연락처
                <span className="text-[#FF5A36]"> *</span>
              </p>

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-0000-0000"
                className="
                  mt-[8px]
                  h-[49px]
                  w-full
                  rounded-[10px]
                  bg-[#EDEEF0]
                  px-[20px]
                  py-[14px]
                  text-body-2
                  outline-none
                  placeholder:text-[#ACB1BA]
                "
              />
            </div>

            <div>
              <p className="text-caption text-[#4A5568]">
                인원 수
                <span className="text-[#FF5A36]"> *</span>
              </p>

              <div className="mt-[8px] flex items-center gap-[32px]">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="
                    flex
                    h-[33px]
                    w-[33px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C7CAD0]
                    text-[20px]
                    text-white
                  "
                >
                  -
                </button>

                <span className="text-heading-3">
                  {peopleCount}
                </span>

                <button
                  type="button"
                  onClick={handleIncrease}
                  className="
                    flex
                    h-[33px]
                    w-[33px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#1F242C]
                    text-[20px]
                    text-white
                  "
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <p className="text-caption text-[#4A5568]">
                비밀번호 (선택)
              </p>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="숫자 4자리 입력"
                maxLength={4}
                className="
                  mt-[8px]
                  h-[49px]
                  w-full
                  rounded-[10px]
                  bg-[#EDEEF0]
                  px-[20px]
                  py-[14px]
                  text-body-2
                  outline-none
                  placeholder:text-[#ACB1BA]
                "
              />

              <div className="mt-[12px] text-caption text-[#4A5568]">
                <p> ⓘ  예약 조회 시 보안을 위해 사용됩니다. 분실에 대비해 비밀번호를 따로 </p>
                
                <p className="px-[15px]">기록해 두시기를 권장합니다.</p>
              </div>
            </div>

            <label
              className="
                flex
                gap-[8px]
                rounded-[14px]
                border
                border-[#1E53FF]
                bg-[#E9EEFF]
                px-[24px]
                py-[20px]
              "
            >
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mt-[4px] h-[16px] w-[16px]"
              />

              <div>
                <p className="text-body-1">
                  개인정보 수집 · 이용에 동의합니다
                <br/>(수집된 정보는 예약 처리 후 즉시 파기됩니다.)
                </p>
              </div>
            </label>

            <button
              type="button"
              onClick={handleSubmit}
              className="
                h-[56px]
                rounded-[15px]
                bg-[#1E53FF]
                text-heading-3
                text-white
              "
            >
              예약 신청하기
            </button>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default WaitingFormPage;