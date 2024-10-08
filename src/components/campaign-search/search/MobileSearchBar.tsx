import { Search } from "lucide-react";

const MobileSearchBar = () => {
  return (
    <div className="flex xl:hidden w-[450px] h-full  items-center justify-between overflow-hidden rounded-md">
      <button className="w-[50px] h-[50px] flex items-center justify-center rounded-md bg-[#E7F5FF] text-[#053559]">
        <Search />
      </button>
      <input
        className="bg-[#E7F5FF] h-full w-[calc(100%-50px)] px-2 border-none outline-none text-[#053559]"
        placeholder="Search Campaigns"
      />
    </div>
  );
};

export default MobileSearchBar;
