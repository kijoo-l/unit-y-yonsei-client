import { useState } from "react";

type MapAccordionProps = {
  title?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

export default function MapAccordion({
  title = "부스 안내 지도",
  children,
  defaultOpen = false,
}: MapAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex w-full flex-col gap-[8px]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex
          h-[45px]
          w-full
          items-center
          justify-between
          self-stretch
          rounded-[10px]
          border
          border-[#EDEEF0]
          bg-white
          px-[14px]
          py-[12px]
        "
      >
        <div className="flex w-full items-center">
          <img 
            src="/map.svg"
            alt="Map"
            className="shrink-0"
          />

          <span className="text-body-2 ml-[8px]">
            {title}
          </span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`shrink-0 ${isOpen ? "" : "rotate-180"}`}
        >
          <path
            d="M12 10L8 6L4 10"
            stroke="#868D9A"
            strokeWidth="1.2"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="
            flex
            h-[216px]
            w-full
            flex-col
            items-start
            justify-center
            gap-[16px]
            rounded-[14px]
            border
            border-[#EDEEF0]
            bg-white
          "
        >
          {children}
        </div>
      )}
    </div>
  );
}