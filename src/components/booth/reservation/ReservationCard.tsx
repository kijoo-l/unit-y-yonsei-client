type ReservationCardProps = {
  title: string;
  location?: string;
  department: string;
  boothNumber: string;
  imageUrl?: string;
};

function ReservationCard({
  title,
  location,
  department,
  boothNumber,
}: ReservationCardProps) {


  return (
    <div className="relative rounded-[14px] shadow-[0_1px_4px_rgba(0,0,0,0.08)] bg-white border border-[#EDEEF0]">

      <div className="flex overflow-hidden bg-white rounded-[0.88rem]">

        <div className="flex-1 px-6 py-6">
          <div className="flex items-center">
            <span className="text-heading-2">{title}</span>
          </div>
          
          <div className="mt-[10px]">
            <span className="text-body-1 text-[#4A5568]">
              {department} · {location ? `${location} ` : ""}부스 #{boothNumber}
            </span>
          </div>
          </div>
        </div>
      </div>
  );
}

export default ReservationCard;
