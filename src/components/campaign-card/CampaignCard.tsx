import { Bookmark, Dot } from "lucide-react";
import { Button } from "../ui/button";
import { formatCurrency, generateHexColor, truncateText } from "@/lib/utils";
import { useMemo, useState } from "react";
import { CHANNEL_DATA } from "@/form/addCampaignForm/channelsField/channelData";

type Props = {
  initials: string;
  fullName: string;
  product: string;
  date: string;
  text: string;
  channels: string[];
  budgetOne: number;
  budgetTwo: number;
  category: string;
};
const CampaignCard = (items: Props) => {
  const [bookMarked, setBookmarked] = useState<boolean>(false);
  const randomColor = useMemo(() => generateHexColor(), []);
  return (
    <div className="w-full md:w-[45%] xl:w-[30%] h-[300px] bg-white md:rounded-md md:shadow-md p-4 flex-grow cursor-pointer">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <p
              className={`w-[50px] h-[50px]  text-white font-bold flex items-center justify-center rounded-md cursor-pointer`}
              style={{
                backgroundColor: randomColor,
              }}
            >
              {items.initials}
            </p>
            <p className="flex flex-col gap-1">
              <span className="font-bold text-xs">{items.fullName}</span>
              <span className="flex items-center gap-[1px] text-xs">
                <span className="text-[11px]">{items.product}</span>
                <span>
                  <Dot />
                </span>
                <span className="text-[11px]">{items.category}</span>
              </span>
            </p>
          </div>
          <p className="flex  gap-1 font-semibold">
            <span className="text-[11px]">Posted {items.date}</span>
            <span className="cursor-pointer">
              {!bookMarked ? (
                <Bookmark
                  onClick={() => setBookmarked(true)}
                  className="w-[20px] h-[20px]"
                />
              ) : (
                <img
                  src="/assets/bookmark.svg"
                  alt=""
                  onClick={() => setBookmarked(false)}
                  className="w-[20px] h-[20px]"
                />
              )}
            </span>
          </p>
        </div>
        <p className="text-sm">{truncateText(items.text, 153)}</p>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Channels</p>
          <div className="flex items-center gap-2">
            {items.channels.map((channel) => {
              const channelItem = CHANNEL_DATA.find(
                (item) => item.name === channel
              );

              if (channelItem) {
                return (
                  <img
                    key={channel}
                    src={channelItem.imageChecked}
                    alt={channelItem.name}
                  />
                );
              }
              return null;
            })}
            {/* <span className="cursor-pointer text-xs">+ 2 more</span> */}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold flex flex-col gap-2">
            <span className="font-medium text-sm">Budget</span>
            <span className="flex items-center gap-1 text-sm text-[#053559] font-bold">
              <span>{formatCurrency(items.budgetOne)}</span>
              <span>-</span>
              <span>{formatCurrency(items.budgetTwo)}</span>
            </span>
          </p>
          <Button className="bg-[#053559]">Apply Now</Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
