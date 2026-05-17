import { act } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

function BottomNav() {
  const location = useLocation();

  const navItems = [
    {
      key: "home",
      label: "홈",
      path: "/home",
      activePaths: ["/home"],
      activeIcon: "/bottomNav/home-active.svg",
      inactiveIcon: "/bottomNav/home-inactive.svg",
      size: "w-[1.5rem] h-[1.5rem]",
    },
    {
      key: "booth",
      label: "부스",
      path: "/booth",
      activePaths: ["/booth","/booth/:boothId"],
      activeIcon: "/bottomNav/booth-active.svg",
      inactiveIcon: "/bottomNav/booth-inactive.svg",
      size: "w-[1.5rem] h-[1.5rem]",
    },
    {
      key: "reservation",
      label: "예약",
      path: "/reservation",
      activePaths: ["/reservation", "/reservation/:boothId"],
      activeIcon: "/bottomNav/reservation-active.svg",
      inactiveIcon: "/bottomNav/reservation-inactive.svg",
      size: "w-[2rem] h-[1.5rem]",
    },
    {
      key: "performance",
      label: "공연",
      path: "/performance",
      activePaths: ["/performance"],
      activeIcon: "/bottomNav/performance-active.svg",
      inactiveIcon: "/bottomNav/performance-inactive.svg",
      size: "w-[1.5rem] h-[1.5rem]",
    },
    {
      key: "more",
      label: "더보기",
      path: "/more",
      activePaths: ["/more"],
      activeIcon: "/bottomNav/more-active.svg",
      inactiveIcon: "/bottomNav/more-inactive.svg",
      size: "w-[1.5rem] h-[1.5rem]",
    },
  ] as const;

  return (
    <nav className="h-[5.1875rem] border-t border-[#EDEEF0] bg-white flex items-center justify-around">
      {navItems.map((item) => {
        const isActive = item.activePaths.some((activePath) => matchPath(activePath, location.pathname));

        return (
          <Link
            key={item.key}
            to={item.path}
            className="flex flex-col items-center gap-[0.25rem]"
          >
            <img
              src={isActive ? item.activeIcon : item.inactiveIcon}
              alt=""
              className={item.size}
            />

            <span
              className={`text-label ${
                isActive ? "text-[#1E53FF]" : "text-[#868D9A]"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export default BottomNav;