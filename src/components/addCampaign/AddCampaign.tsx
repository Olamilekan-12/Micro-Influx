import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddCampaignForm from "@/form/addCampaignForm/AddCampaignForm";
import { Plus } from "lucide-react";

const AddCampaign = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-[200px] h-[45px] rounded-md flex items-center justify-center gap-2 bg-[#053559] text-white hover:bg-[#053559e2] hover:text-white"
          variant={"ghost"}
        >
          <span>
            <Plus />
          </span>
          <span className="text-xs">Create A New Campaign</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[660px] min-h-[90vh]">
        <div className="w-full h-full ">
          <h2 className="text-2xl font-bold">Create Campaign</h2>
          <AddCampaignForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCampaign;
