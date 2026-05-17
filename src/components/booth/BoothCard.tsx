export type WaitingStatus =  "대기중" | "예약 취소" | "입장 완료";

type BoothCardProps = {
  title: string;
  location?: string;
  waiting?: string;
  waitingStatus?: WaitingStatus;
  department: string;
  boothNumber: string;
  tags: string[];
  rank?: number;
  showArrow?: boolean;
  imageUrl?: string;
  onClick?: () => void;
};

function BoothCard({
  title,
  location,
  waiting,
  waitingStatus,
  department,
  boothNumber,
  tags,
  rank,
  showArrow = false,
  imageUrl,
  onClick,
}: BoothCardProps) {
  const isTopRank = rank === 1;

  const waitingStatusStyle = {
    "대기중": "bg-[#FFF8E0] text-[#FFB020]",
    "예약 취소": "bg-[#EDEEF0] text-[#4A5568]",
    "입장 완료": "bg-[#E0FFF3] text-[#00C070]",
  };

  return (
    <div
      onClick={onClick}
      className={`relative rounded-[0.88rem] shadow-[0_1px_4px_rgba(0,0,0,0.08)] ${
        isTopRank
          ? "bg-linear-to-r from-[#1E53FF] to-[#7052FF] p-px"
          : "bg-white border border-[#EDEEF0]"
      }`}
    >
      {rank && (
        <img
          src={`/booth/rank${rank}.svg`}
          alt=""
          className="absolute top-2 left-2 z-10 w-4.5 h-4.5"
        />
      )}

      <div className="flex overflow-hidden bg-white rounded-[0.88rem]">
        <div className="w-20 shrink-0 bg-linear-to-r from-[#E9EEFF] to-[#F1EEFF] flex items-end justify-center overflow-hidden">
          {imageUrl && (
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          )}
        </div>

        <div className="flex-1 px-3 py-3">
          <div className="flex items-center gap-1">
            <p className="text-body-1">{title}</p>

            {location && (
              <span className="ml-[0.75rem] rounded-full bg-[#E9EEFF] px-[0.5rem] py-[0.06rem] text-label text-[#1E53FF]">
                {location}
              </span>
            )}

            {waiting && (
              <span className="ml-[0.25rem] rounded-full bg-[#FFF8E0] px-[0.5rem] py-[0.06rem] text-label text-[#FFB020]">
                {waiting}
              </span>
            )}

            {waitingStatus && (
              <span className={`ml-[0.25rem] rounded-full px-[0.5rem] py-[0.06rem] text-label ${waitingStatusStyle[waitingStatus]}`}>
                {waitingStatus}
              </span>
            )}
          </div>

          <p className="mt-1 text-caption text-[#4A5568]">
            {department} · {location ? `${location} ` : ""}부스 #{boothNumber}
          </p>

          <div className="mt-1.5 flex gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#EDEEF0] px-2 py-0.5 text-label text-[#4A5568]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {showArrow && (
          <div className="mt-11 mr-4">
            <img
              src="booth/chevron-right-gray.svg"
              alt=""
              className="w-1 h-2"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BoothCard;
