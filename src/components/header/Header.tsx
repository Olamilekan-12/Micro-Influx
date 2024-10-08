import DesktopMenu from "../navMenu/DesktopMenu";
import MobileMenu from "../navMenu/MobileMenu";

const Header = () => {
  return (
    <header className="fixed h-[70px] right-0  left-0 top-0 z-10 bg-[#FAFAFA] w-full">
      <div className="w-full lg:w-[calc(100%-320px)] lg:ml-auto  h-full ">
        {/* desktop menu */}
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
