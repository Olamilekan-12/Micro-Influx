import { formatCurrency } from "@/lib/utils";
import DashboardExpensesInfo from "./dashboard-expenses-info/DashboardExpensesInfo";
import { Dot } from "lucide-react";

const DashboardOverviewCard = () => {
  return (
    <div className="w-[100%] xl:w-[66%] h-full bg-[#053559] px-[24px] py-[16px] text-white rounded-lg">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className="flex items-center justify-between">
            <span>Financial Overview</span>
            <span className="flex items-center gap-2 text-xs opacity-75 cursor-pointer">
              <span>View all campaigns</span>
              <span>
                <img src="/assets/external-link.svg" alt="" />
              </span>
            </span>
          </p>
          <p className="w-full h-[1px] bg-white rounded-md"></p>
        </div>
        <div className="flex items-center gap-[60px]">
          <DashboardExpensesInfo amount={62932} title="Total Income" />
          <DashboardExpensesInfo amount={62231} title="Funds In Escrow" />
          <DashboardExpensesInfo amount={3542} title="Ave. Income Monthly" />
        </div>
        <div className="flex items-center gap-4">
          <p>January Summary: </p>
          <p className="flex items-center gap-1">
            <span className=" opacity-70">Total Fund in Escrow</span>
            <span>
              <Dot />
            </span>
            <span>{formatCurrency(350)}</span>
          </p>
          <p className="flex items-center gap-1">
            <span className=" opacity-70">Total Income</span>
            <span>
              <Dot />
            </span>
            <span>{formatCurrency(850)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverviewCard;
