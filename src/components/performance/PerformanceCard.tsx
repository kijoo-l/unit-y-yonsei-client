type PerformanceCardProps = {
  title: string;
  time: string;
  location: string;
  tags: string[];
  isLive?: boolean;
};

function PerformanceCard({
  title,
  time,
  location,
  tags,
  isLive = false,
}: PerformanceCardProps) {
  return (
    <div
      className={`rounded-[0.88rem] shadow-[0_1px_4px_rgba(0,0,0,0.08)] ${
        isLive
          ? "bg-gradient-to-r from-[#7052FF] to-[#FF40A5] p-[0.0625rem]"
          : "bg-[#EDEEF0]"
      }`}
    >
      <div className= {`flex overflow-hidden rounded-[0.82rem] ${
        isLive
        ? "bg-[#FFF0F8]"
        : "bg-white"
      }`}
      
      >
        <div className={`w-[5rem] shrink-0 ${
        isLive
          ? "bg-white"
          : "bg-gradient-to-r from-[#F1EEFF] to-[#FFECF6] p-[0.0625rem]"
      }`}
        
        />

        <div className="flex-1 px-[0.75rem] py-[0.75rem]">
          <div className="flex items-center gap-[0.5rem]">
            {isLive && (
              <span className="rounded-full bg-[#FF40A5] px-[0.5rem] py-[0.06rem] text-[0.625rem] font-semibold text-white">
                LIVE
              </span>
            )}

            <p className="text-[0.9375rem] font-semibold">
              {title}
            </p>
          </div>

          <p className="mt-[0.25rem] text-[0.75rem] text-[#4A5568]">
            {time} · {location}
          </p>

          <div className="mt-[0.38rem] flex gap-[0.25rem]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-[0.5rem] py-[0.125rem] text-[0.6875rem] font-semibold bg-[#FFECF6] text-[#FF40A5]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceCard;