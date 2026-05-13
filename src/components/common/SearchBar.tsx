type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "부스명, 단체명, 메뉴명 검색",
}: SearchBarProps) {
  return (
    <div className="flex h-[45px] w-full items-center gap-[10px] rounded-[8px] bg-[#EDEEF0] px-[20px] py-[12px]">
      <img 
        src="/search.svg"
        alt="Search"
        className="shrink-0"
      />

      <input
        className="flex-1 bg-transparent text-[14px] font-normal leading-[150%] tracking-[-0.28px] outline-none placeholder:text-[#ACB1BA]"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}