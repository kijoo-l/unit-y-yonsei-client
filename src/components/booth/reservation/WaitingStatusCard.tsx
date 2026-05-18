type WaitingStatusCardProps = {
  count: number;
};

export default function WaitingStatusCard({
  count,
}: WaitingStatusCardProps) {
  const getStatus = () => {
    if (count <= 5) {
      return {
        text: "여유",
        color: "#00C070",
        gaugeWidth: "25%",
      };
    }

    if (count <= 8) {
      return {
        text: "보통",
        color: "#FFB020",
        gaugeWidth: "65%",
      };
    }

    return {
      text: "혼잡",
      color: "#FF5A36",
      gaugeWidth: "100%",
    };
  };

  const status = getStatus();

  return (
    <div
      className="
        mt-[12px]
        rounded-[10px]
        border
        border-[#EDEEF0]
        bg-white
        px-[19px]
        py-[13px]
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px] font-regular text-[#4A5568]">
            현재 대기
          </p>
        </div>

        <p
          className="text-[20px] font-semibold"
          style={{ color: status.color }}
        >
          {count}팀
        </p>
      </div>

      <div className="mt-[8px] h-[8px] w-full rounded-full bg-[#EDEEF0]">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: status.gaugeWidth,
            backgroundColor: status.color,
          }}
        />
      </div>
    </div>
  );
}