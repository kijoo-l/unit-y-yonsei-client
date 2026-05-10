type BoothCardProps = {
  title: string;
  location?: string;
  waiting: string;
  department: string;
  boothNumber: string;
  tags: string[];
  rank?: number;
  showArrow?: boolean;
};

function BoothCard({
  title,
  location,
  waiting,
  department,
  boothNumber,
  tags,
  rank,
  showArrow = false,
}: BoothCardProps) {
  const isTopRank = rank === 1;

  return (
    <div
      className={`relative rounded-[0.88rem] shadow-[0_1px_4px_rgba(0,0,0,0.08)] ${
        isTopRank
          ? "bg-gradient-to-r from-[#1E53FF] to-[#7052FF] p-[0.0625rem]"
          : "bg-white"
      }`}
    >
      {rank && (
        <img
          src={`/booth/rank${rank}.svg`}
          alt=""
          className="absolute top-[0.5rem] left-[0.5rem] z-10 w-[1.125rem] h-[1.125rem]"
        />
      )}

      <div
        className={`flex overflow-hidden bg-white ${
          isTopRank
            ? "rounded-[0.88rem]"
            : "rounded-[0.88rem]"
        }`}
      >
        <div className="w-[5rem] shrink-0 bg-gradient-to-r from-[#E9EEFF] to-[#F1EEFF]" />

        <div className="flex-1 px-[0.75rem] py-[0.75rem]">
          <div className="flex items-center">
            <p className="text-body-1">
              {title}
            </p>

            {location && (
              <span className="ml-[0.75rem] rounded-full bg-[#E9EEFF] px-[0.5rem] py-[0.06rem] text-label text-[#1E53FF]">
                {location}
              </span>
            )}

            <span className="ml-[0.25rem] rounded-full bg-[#FFF8E0] px-[0.5rem] py-[0.06rem] text-label text-[#FFB020]">
              {waiting}
            </span>
          </div>

          <p className="mt-[0.25rem] text-caption text-[#4A5568]">
            {department} · 부스 #{boothNumber}
          </p>

          <div className="mt-[0.38rem] flex gap-[0.25rem]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#EDEEF0] px-[0.5rem] py-[0.125rem] text-label text-[#4A5568]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {showArrow && (
          <div className="mt-[2.75rem] mr-[1rem]">
            <img 
              src="booth/chevron-right-gray.svg"
              alt=""
              className="w-[0.25rem] h-[0.5rem]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BoothCard;