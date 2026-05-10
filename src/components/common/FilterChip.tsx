type FilterChipProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

function FilterChip({
  label,
  selected,
  onClick,
}: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-[0.94rem] py-[0.44rem] text-body-2 ${
        selected
          ? "bg-[#1E53FF] text-white"
          : "bg-[#EDEEF0] text-[#4A5568]"
      }`}
    >
      {label}
    </button>
  );
}

export default FilterChip;