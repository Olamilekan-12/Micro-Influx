import { Link } from "react-router-dom";
import MobileNavLinkMenu from "./MobileNavLinkMenu";

const MobileMenu = () => {
  return (
    <div className="w-[95%] mx-auto h-full block lg:hidden">
      <div className="w-full h-full flex items-center justify-between">
        <Link to={"/"}>
          <img src="/assets/User.svg" alt="" />
        </Link>
        <Link to={"/"} className="font-bold text-[#053559] text-2xl">
          Micro Influx
        </Link>
        <MobileNavLinkMenu />
      </div>
    </div>
  );
};

export default MobileMenu;
