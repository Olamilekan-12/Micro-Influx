import { Dispatch, SetStateAction } from "react";

const MobileSearchBar = ({
  searchText,
  setSearchText,
  handleSearch,
  handleReset,
}: {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
  handleReset: () => void;
}) => {
  return (
    <div className="flex lg:hidden w-full min-w-[350px] h-full  items-center justify-between overflow-hidden rounded-md">
      <input
        className="bg-[#E7F5FF] h-full w-[calc(100%-50px)] px-2 border-none outline-none"
        placeholder="Search Campaigns"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="w-[50px] h-[50px] flex items-center justify-center rounded-md bg-[#E7F5FF] text-black"
        onClick={handleReset}
      >
        X
      </button>
      <button
        className="w-[50px] h-[50px] flex items-center justify-center rounded-md bg-[#053559]"
        onClick={handleSearch}
      >
        <img src="/assets/search-light.svg" alt="" />
      </button>
    </div>
  );
};

export default MobileSearchBar;
