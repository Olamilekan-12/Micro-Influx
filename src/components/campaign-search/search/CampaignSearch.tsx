import DesktopSearchBar from "./DesktopSearchBar";
import MobileSearchBar from "./MobileSearchBar";

const CampaignSearch = () => {
  return (
    <div className="w-full h-[50px] flex items-center justify-between">
      <p className="hidden md:block text-lg font-medium">Explore Campaigns</p>
      <DesktopSearchBar />
      <MobileSearchBar />
    </div>
  );
};

export default CampaignSearch;
