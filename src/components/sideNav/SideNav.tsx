import { ChevronRight, ChevronsUpDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { CAMPAIGN_SHORTCUT, SIDEBAR_MENU } from "./data";
import { truncateText } from "@/lib/utils";

const SideNav = () => {
  return (
    <div className="hidden lg:flex fixed left-0 top-0 w-[320px] bg-white shadow-md z-20 h-screen flex-col justify-between py-[20px]">
      <div className="w-full h-full flex flex-col gap-6 px-[40px] ">
        <Link to={"/"} className="font-bold">
          Micro-Influx
        </Link>
        <div className="flex h-[50px] w-full justify-between">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/assets/Profile.svg"
              className="w-[50px] h-[50px] object-cover rounded-md"
              alt=""
            />
            <p className="flex flex-col gap-[1px]">
              <span>Olivia Jacobs</span>
              <span className="text-xs">Lifestyle Influencer</span>
            </p>
          </div>
          <span className="text-xs cursor-pointer">
            <ChevronsUpDown />
          </span>
        </div>
        <div className="flex flex-col gap-1">
          {SIDEBAR_MENU.map((item) => (
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-white bg-[#053559] h-[50px] rounded-md p-2 font-medium"
                  : "flex items-center gap-2 h-[50px] rounded-md p-2 font-medium"
              }
            >
              <span>
                <img
                  src={item.iconActive}
                  alt=""
                  className="w-[20px] h-[20px]"
                />
              </span>
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full h-[300px] flex flex-col gap-6 px-[40px] ">
        <div className="flex items-center justify-between h-[45px]">
          <span className="font-medium">Campaign Shortcuts</span>
          <span className="text-[9px] p-2 bg-[#E7F5FF] rounded-md cursor-pointer">
            View all
          </span>
        </div>
        <div className="w-full h-[200px] flex flex-col gap-6 overflow-y-scroll scrollbar-none">
          {CAMPAIGN_SHORTCUT.map((item) => (
            <Link to={"/"} className="flex items-center justify-between">
              <p className="flex items-center gap-1">
                <img src={item.img} alt="" />
                <span className="text-xs font-semibold">
                  {truncateText(item.title, 20)}
                </span>
              </p>
              <span>
                <ChevronRight />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
