import { formatCurrency } from "@/lib/utils";

const DashboardExpensesInfo = () => {
  return (
    <div className="w-auto h-[55px] flex flex-col gap-1">
      <span className="text-xs opacity-75 cursor-pointer">Total Income</span>
      <span className="font-bold text-2xl cursor-pointer">
        {formatCurrency(62932)}
      </span>
    </div>
  );
};

export default DashboardExpensesInfo;
