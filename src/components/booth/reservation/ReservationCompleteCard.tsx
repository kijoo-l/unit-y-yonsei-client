type ReservationComplete = {
  boothName: string;
  department: string;
  boothNumber: string;
  waitingOrder: number;
  name: string;
  phone: string;
  peopleCount: number;
  date: string;
  time: string;
};

type ReservationCompleteCardProps = {
  reservation: ReservationComplete;
};

export default function ReservationCompleteCard({
  reservation,
}: ReservationCompleteCardProps) {
  return (
    <article className="rounded-[14px] border border-[#EDEEF0] bg-white px-[24px] py-[24px] shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-heading-2">
            {reservation.boothName}
          </h2>

          <p className="mt-[8px] text-body-1 text-[#4A5568]">
            {reservation.department} · 부스 #{reservation.boothNumber}
          </p>
        </div>

        <span className="rounded-full bg-[#FFF8E0] px-[10px] py-[4px] text-body-2 text-[#FFB020]">
          대기 {reservation.waitingOrder}팀
        </span>
      </div>

      <div className="my-[20px] h-[1px] bg-[#EDEEF0]" />

      <div className="flex flex-col gap-[10px]">
        <InfoRow label="예약자" value={reservation.name} />
        <InfoRow label="연락처" value={reservation.phone} />
        <InfoRow label="인원 수" value={`${reservation.peopleCount}명`} />
        <InfoRow label="예약 날짜" value={reservation.date} />
        <InfoRow label="예약 시간" value={reservation.time} />
      </div>
    </article>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-body-2 text-[#4A5568]">{label}</span>
      <span className="text-body-2">{value}</span>
    </div>
  );
}