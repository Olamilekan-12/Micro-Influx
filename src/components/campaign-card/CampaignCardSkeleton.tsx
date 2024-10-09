import { Skeleton } from "@/components/ui/skeleton";

const CampaignCardSkeleton = () => {
  return (
    <div className="w-full md:w-[45%] xl:w-[30%] h-[300px] bg-white md:rounded-md md:shadow-md p-4 flex-grow cursor-pointer">
      <div className="flex flex-col space-y-3 w-full h-full">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default CampaignCardSkeleton;
