import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
const CampaignFilter = () => {
  return (
    <div className="hidden w-full h-[50px] md:flex items-center justify-between">
      <p className="hidden md:flex  font-medium gap-4 text-base">
        <span>Search results: </span>
        <span>{458} Blog Post Campaigns</span>
      </p>
      <div className="hidden md:flex items-center gap-4">
        <span>Sort by: </span>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 border-none outline-none">
            <span>Category</span>
            <span>
              <ChevronDown />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Price</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Product</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Date</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center gap-2">
          <img src="/assets/Grid-View.svg" alt="" className="cursor-pointer" />
          <img src="/assets/List-View.svg" alt="" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CampaignFilter;
