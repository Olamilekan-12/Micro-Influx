import { Skeleton } from "@/components/ui/skeleton";

const CampaignCardSkeleton = () => {
  return (
    <div className="w-full md:w-[45%] xl:w-[30%] h-[300px] bg-white md:rounded-md md:shadow-md p-4 flex-grow cursor-pointer">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Skeleton
              className={`w-[50px] h-[50px]  text-white font-bold flex items-center justify-center rounded-md cursor-pointer`}
            ></Skeleton>
            <Skeleton className="flex flex-col gap-1">
              <Skeleton className="font-bold text-xs"></Skeleton>
              <span className="flex items-center gap-[1px] text-xs">
                <Skeleton className="text-[11px]"></Skeleton>
                <span></span>
                <Skeleton className="text-[11px]"></Skeleton>
              </span>
            </Skeleton>
          </div>
          <p className="flex  gap-1 font-semibold">
            <Skeleton className="text-[11px]"></Skeleton>
            <Skeleton className="cursor-pointer"></Skeleton>
          </p>
        </div>
        <Skeleton className="text-sm"></Skeleton>
        <div className="flex flex-col gap-2">
          <p className="font-bold"></p>
          <Skeleton className="flex items-center gap-2"></Skeleton>
        </div>
        <Skeleton className="flex items-center justify-between"></Skeleton>
      </div>
    </div>
  );
};

export default CampaignCardSkeleton;
