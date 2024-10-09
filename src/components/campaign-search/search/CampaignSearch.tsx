import { Dispatch, SetStateAction } from "react";
import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";

const CampaignSearch = ({
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
    <div className="w-full h-[50px] flex items-center justify-between">
      <p className="hidden md:block text-lg font-medium">Explore Campaigns</p>
      <DesktopSearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <MobileSearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
    </div>
  );
};

export default CampaignSearch;
