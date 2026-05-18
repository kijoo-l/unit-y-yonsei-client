import chevronRight from '../../../public/svg/Chevron_Right_MD.svg';

interface ServiceCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export const ServiceCard = ({ title, description, onClick }: ServiceCardProps) => {
  return (
    <button
      onClick={onClick}
      // 1. 전체 카드 부모 박스
      className="flex w-full h-[96px] px-0 items-center gap-[12px] border border-[#EDEEF0] bg-white shadow-[0_1px_4px_0_rgba(0,0,0,0.08)] transition-transform active:scale-[0.98] rounded-[14px]"
    >
      {/* 2. [Left Thumbnail]*/}
      <div className="w-[80px] h-full shrink-0 bg-gradient-to-r from-[#E9EEFF] to-[#F1EEFF] rounded-l-[14px]" />

      {/* 3. [Right Content] */}
      <div className="flex-1 flex flex-col justify-center pr-[16px] py-[12px] text-left">
        <div className="flex items-center justify-between">
          <p className="text-heading-3">
            {title}
          </p>
          <img 
            src={chevronRight}
            alt="이동"
            className="w-[24px] h-[24px]"
          />
        </div>
        <p className="mt-[4px] text-body-2 text-[#4A5568]">
          {description}
        </p>
      </div>
    </button>
  );
};
