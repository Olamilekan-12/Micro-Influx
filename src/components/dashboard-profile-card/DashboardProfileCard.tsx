import { useState } from "react";
import { Progress } from "../ui/progress";

const DashboardProfileCard = () => {
  const [progress] = useState(15);

  return (
    <div className="w-[30%] hidden xl:block h-full bg-white rounded-lg px-[24px] py-[16px]">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className="flex items-center justify-between">
            <span>Personal Information</span>
            <span className="flex items-center gap-2 text-xs opacity-75 cursor-pointer">
              <span>
                <img src="/assets/profile-external-link.svg" alt="" />
              </span>
            </span>
          </p>
          <p className="w-full h-[1px] bg-[#BFBFBF] rounded-md"></p>
        </div>
        <div className="flex   justify-between">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/assets/Profile.svg"
              className="w-[50px] h-[50px] object-cover rounded-md"
              alt=""
            />
            <p className="w-full flex flex-col gap-[1px]">
              <span>Olivia Jacobs Jacobs</span>
              <p className="text-xs flex items-center gap-2 w-full justify-between">
                <Progress
                  value={progress}
                  className="min-w-[150px] max-h-[8px] bg-[#B4DFFF]"
                />
                <span>15%</span>
              </p>
            </p>
          </div>
        </div>
        <p className="  text-xs">
          Complete your profile with details showcasing your skills and
          personality. Stand out and attract more opportunities.
        </p>
      </div>
    </div>
  );
};

export default DashboardProfileCard;
