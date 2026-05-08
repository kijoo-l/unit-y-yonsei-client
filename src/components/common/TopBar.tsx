import { useNavigate } from "react-router-dom";

type TopBarProps = {
  title: string;
  showBackButton?: boolean;
  showShareButton?: boolean;
};

function TopBar({
  title, 
  /* topbar 사용하실 때 <TopBar title="페이지 제목"/> 이런식으로 쓰시면 제목만 표시되고, 
  페이지 제목 뒤에 showBackButton이나 showShareButton 쓰시면 두 아이콘 다 표시됩니다!! */
  showBackButton = false,
  showShareButton = false,
}: TopBarProps) {
  const navigate = useNavigate();

  return (
    <header className="h-[3.625rem] bg-white flex items-center justify-between px-[1.5rem]">
      <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center">
        {showBackButton && (
          <button type="button" onClick={() => navigate(-1)}>
            <img
              src="/topBar/back.svg"
              alt="뒤로가기"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </button>
        )}
      </div>

      <p className="text-[1.25rem] font-bold">
        {title}
      </p>

      <div className="w-[1.375rem] h-[1.375rem] flex items-center justify-center">
        {showShareButton && (
          <button type="button">
            <img
              src="/topBar/share.svg"
              alt="공유하기"
              className="w-[1.375rem] h-[1.375rem]"
            />
          </button>
        )}
      </div>
    </header>
  );
}

export default TopBar;