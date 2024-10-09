import { formatCurrency } from "@/lib/utils";

type Props = {
  title: string;
  amount: number;
};

const DashboardExpensesInfo = ({ title, amount }: Props) => {
  return (
    <div className="w-auto h-[55px] flex flex-col gap-1">
      <span className="text-xs opacity-75 cursor-pointer">{title}</span>
      <span className="font-bold text-2xl cursor-pointer">
        {formatCurrency(amount)}
      </span>
    </div>
  );
};

export default DashboardExpensesInfo;
