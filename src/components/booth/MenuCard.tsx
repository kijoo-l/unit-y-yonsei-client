export type MenuStatus =  "판매중" | "마감" ;

type MenuCardProps = {
  title: string;
  Status?: MenuStatus;
  description: string;
  price: number;
  imageUrl?: string;
};

function MenuCard({
  title,
  Status = "판매중",
  description,
  price,
  imageUrl,
}: MenuCardProps) {

  const isSoldOut = Status === "마감";

  return (
    <div
      className= {`relative rounded-[0.88rem] shadow-[0_1px_4px_rgba(0,0,0,0.08)] 
      
      ${
      isSoldOut 
      ? "bg-[#EDEEF0]" 
      : "bg-white"

      }`}
    >

      <div className="flex overflow-hidden rounded-[0.88rem]">
        <div className="flex shrink-0 items-end justify-center overflow-hidden bg-linear-to-r from-[#E9EEFF] to-[#F1EEFF]">
            <img
              src={imageUrl || "/character/booth-character.svg"}
              alt=""
              className="h-[87px] w-[80px] object-contain"
            />
        </div>

        <div className="flex flex-1 items-center justify-between px-3 py-3">
          <div>
            <p className={`text-body-1 ${isSoldOut ? "text-[#4A5568]" : "text-[#1F242C]"}`}>
              {title}
            </p>
            
            <p className="mt-1 text-caption text-[#4A5568]">
            {description}
          </p>
          </div>

          

          <p
            className={`shrink-0 text-heading-3 ${
              isSoldOut ? "text-[#1F242C]" : "text-[#1E53FF]"
            }`}
          >
            {isSoldOut ? "마감" : `${price.toLocaleString()}원`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
