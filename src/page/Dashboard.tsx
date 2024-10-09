import { useGetCampaign } from "@/api/campaignApi";
import { useEffect, useState } from "react";
import CampaignCard from "@/components/campaign-card/CampaignCard";
import CampaignCardSkeleton from "@/components/campaign-card/CampaignCardSkeleton";
import CampaignFilter from "@/components/campaign-search/filter/CampaignFilter";
import CampaignSearch from "@/components/campaign-search/search/CampaignSearch";
import DashboardOverviewCard from "@/components/dashboard-overview-card/DashboardOverviewCard";
import DashboardProfileCard from "@/components/dashboard-profile-card/DashboardProfileCard";
import { Separator } from "@/components/ui/separator";

export type campaignType = {
  initials: string;
  campaignTitle: string;
  brandName: string;
  campaignCategory: string;
  date: string;
  campaignDescription: string;
  channels: string[];
  minimumBudget: number;
  maximumBudget: number;
};

const Dashboard = () => {
  const { campaigns, isLoading } = useGetCampaign();
  const [campaignItems, setCampaignItems] = useState<campaignType[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  // Update campaignItems when campaigns data is loaded
  useEffect(() => {
    if (campaigns) {
      setCampaignItems(campaigns);
    }
  }, [campaigns]);

  console.log(campaignItems);

  const handleSearch = () => {
    const filteredCampaign = campaignItems?.filter((item: campaignType) =>
      item.campaignTitle.toLowerCase().includes(searchText.toLowerCase())
    );

    if (searchText.length > 1) {
      setCampaignItems(filteredCampaign);
    } else {
      setCampaignItems(campaigns);
    }
  };

  const handleReset = () => {
    setCampaignItems(campaigns);
    setSearchText("");
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full lg:w-[calc(100%-320px)] lg:ml-auto h-full">
        <div className="w-[95%] lg:w-[90%] h-full mx-auto">
          <div className="hidden lg:flex items-center justify-between h-[250px]">
            <DashboardOverviewCard />
            <DashboardProfileCard />
          </div>
        </div>
        {/* campaigns */}
        <div className="w-[95%] lg:w-[90%] h-full mx-auto lg:mt-[24px] space-y-[14px]">
          <CampaignSearch
            searchText={searchText}
            setSearchText={setSearchText}
            handleSearch={handleSearch}
            handleReset={handleReset}
          />
          <CampaignFilter campaignItems={campaignItems} />
          <div className="w-full h-auto flex flex-wrap gap-y-[20px] gap-x-[20px]">
            {isLoading && (
              <>
                <CampaignCardSkeleton />
                <CampaignCardSkeleton />
                <CampaignCardSkeleton />
                <CampaignCardSkeleton />
              </>
            )}
            {!isLoading &&
              campaignItems?.map((item: campaignType) => (
                <>
                  <CampaignCard
                    key={item.campaignTitle} // Add a unique key
                    initials={item.initials}
                    fullName={item.campaignTitle}
                    product={item.brandName}
                    date={item.date}
                    category={item.campaignCategory}
                    text={item.campaignDescription}
                    channels={item.channels}
                    budgetOne={item.minimumBudget}
                    budgetTwo={item.maximumBudget}
                  />
                  <Separator className="block md:hidden" />
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
