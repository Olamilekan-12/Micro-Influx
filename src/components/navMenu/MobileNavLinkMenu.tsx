import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRight, ChevronsUpDown, Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { CAMPAIGN_SHORTCUT, SIDEBAR_MENU } from "../sideNav/data";
import { truncateText } from "@/lib/utils";
import AddCampaign from "../addCampaign/AddCampaign";

const MobileNavLinkMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-[#053559]" />
      </SheetTrigger>
      <SheetContent className="w-[360px]">
        <div className="flex bg-white z-20 h-screen flex-col justify-between py-[20px]">
          <div className="w-full h-full flex flex-col gap-4 px-[5px] ">
            <div className="flex items-center justify-between">
              <Link to={"/"} className="font-bold text-2xl">
                Micro-Influx
              </Link>
              <img src="/assets/Notification.svg" alt="" />
            </div>

            <div className="flex h-[50px] w-full justify-between">
              <div className="flex items-center justify-center gap-2">
                <img
                  src="/assets/User.svg"
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
            <AddCampaign />
          </div>

          <div className="w-full h-[400px] flex flex-col gap-6 px-[5px] ">
            <div className="flex items-center justify-between h-[45px]">
              <span className="font-medium">Campaign Shortcuts</span>
              <span className="text-[9px] p-2 bg-[#E7F5FF] rounded-md cursor-pointer">
                View all
              </span>
            </div>
            <div className="w-full h-[150px] flex flex-col gap-4 overflow-y-scroll scrollbar-none">
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavLinkMenu;
