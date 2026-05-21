import { useNavigate } from "react-router-dom";

type TopBarProps = {
  title: string;
  showBackButton?: boolean;
  showShareButton?: boolean;
};

function TopBar({
  title, 
  showBackButton = false,
  showShareButton = false,
}: TopBarProps) {
  const navigate = useNavigate();

  return (
    <header className="h-[3.625rem] bg-white flex items-center justify-between px-[16px] py-[20px]">
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

      <p className="text-heading-2">
        {title}
      </p>

      <div className="w-[1.5rem] h-[1.5rem] flex items-center justify-center">
        {showShareButton && (
          <button type="button">
            <img
              src="/topBar/share.svg"
              alt="공유하기"
              className="w-[1.5rem] h-[1.5rem]"
            />
          </button>
        )}
      </div>
    </header>
  );
}

export default TopBar;