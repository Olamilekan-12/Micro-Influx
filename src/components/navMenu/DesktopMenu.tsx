import AddCampaign from "../addCampaign/AddCampaign";

const DesktopMenu = () => {
  return (
    <div className="hidden w-[90%] mx-auto h-full lg:flex items-center justify-between">
      <h1 className="font-medium text-lg text-[#053559]">Dashboard</h1>
      <div className="flex items-center justify-center gap-6">
        <AddCampaign />
        <span className="cursor-pointer">
          <img src="/assets/Message.svg" alt="" />
        </span>
        <span className="cursor-pointer">
          <img src="/assets/Notification.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default DesktopMenu;
