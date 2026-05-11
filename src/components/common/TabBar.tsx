type Tab = {
  id: string;
  label: string;
};

type TabBarProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
};

export default function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="flex">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
<button
  key={tab.id}
  type="button"
  onClick={() => onTabChange(tab.id)}
  className={`
    box-border
    flex
    h-[56px]
    w-[130px]
    shrink-0
    items-center
    justify-center
    border-b
    bg-white
    px-[16px]
    py-[12px]
    text-[15px]
    font-semibold
    leading-[150%]
    tracking-[-0.3px]
    ${
      isActive
        ? "border-b-[#1E53FF] text-[#1E53FF]"
        : "border-b-[#EDEEF0] text-[#ACB1BA]"
    }
  `}
>
  {tab.label}
</button>
        );
      })}
    </div>
  );
}