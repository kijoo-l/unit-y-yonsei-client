import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/common/TopBar';
import BottomNav from '../../components/common/BottomNav';
import TabBar from '../../components/common/TabBar';
import FilterChip from '../../components/common/FilterChip';
import chevronRight from '../../../public/svg/Chevron_Right_MD.svg';

const tabs = [
  { id: '5/26', label: '5/26 블루런' },
  { id: '5/27', label: '5/27 송도' },
  { id: '5/28', label: '5/28 신촌' },
  { id: '5/29', label: '5/29 신촌' },
];

const filterChips = ['전체', '부스', '공연'];

const mockNotices = [
  { id: 1, title: '우천 시 일정 변경 공지', createdAt: '2026.05.10', isNew: true },
  { id: 2, title: '우천 시 일정 변경 공지', createdAt: '2026.05.10', isNew: false },
  { id: 3, title: '우천 시 일정 변경 공지', createdAt: '2026.05.10', isNew: false },
  { id: 4, title: '우천 시 일정 변경 공지', createdAt: '2026.05.10', isNew: false },
  { id: 5, title: '우천 시 일정 변경 공지', createdAt: '2026.05.10', isNew: false },
  { id: 6, title: '우천 시 일정 변경 공지', createdAt: '2026.05.10', isNew: false },
];

export default function NoticePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('5/26');
  const [activeFilter, setActiveFilter] = useState('전체');

  const showFilterChips = activeTab !== '5/26';

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setActiveFilter('전체');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="공지사항" showBackButton />

      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="flex-1 overflow-y-auto pb-[83px]">
        {showFilterChips && (
          <div className="flex gap-[10px] px-[16px] py-[16px] bg-white">
            {filterChips.map((chip) => (
              <FilterChip
                key={chip}
                label={chip}
                selected={activeFilter === chip}
                onClick={() => setActiveFilter(chip)}
              />
            ))}
          </div>
        )}

        <div className="bg-white px-[16px]">
          {mockNotices.map((notice) => (
            <button
              key={notice.id}
              type="button"
              onClick={() => navigate(`/more/notice/${notice.id}`)}
              className="flex flex-col gap-[8px] py-[16px] border-b border-[#EDEEF0] w-full text-left"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-[8px]">
                  {notice.isNew && (
                    <span className="px-[8px] py-[1px] text-label text-[#1E53FF] bg-[#E9EEFF] rounded-full">
                      NEW
                    </span>
                  )}
                  <span className="text-heading-3">{notice.title}</span>
                </div>
                <img src={chevronRight} alt="이동" className="w-[24px] h-[24px]" />
              </div>
              <span className="text-caption text-[#ACB1BA]">{notice.createdAt}</span>
            </button>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
