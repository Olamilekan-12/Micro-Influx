import { campaignType } from "@/page/Dashboard";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const useGetCampaign = () => {
  const getCampaignRequest = async () => {
    const response = await fetch(`${API_BASE_URL}/campaigns`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  };

  const { data: campaigns, isLoading } = useQuery(
    "fetchCampaigns",
    getCampaignRequest,
    {
      onError: () => {
        toast.success("Unable to fetch campaigns");
      },
    }
  );

  return {
    campaigns,
    isLoading,
  };
};

export const useAddCampaign = () => {
  const queryClient = useQueryClient();
  const addCampaignRequest = async (campaign: campaignType) => {
    const response = await fetch(`${API_BASE_URL}/campaigns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(campaign),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  };

  const { mutateAsync: addCampaign, isLoading } = useMutation(
    addCampaignRequest,
    {
      onSuccess: () => {
        toast.success("Campaign added successfully");
        queryClient.invalidateQueries("fetchCampaigns");
      },
      onError: () => {
        toast.error("Failed to add campaign");
      },
    }
  );

  return {
    addCampaign,
    isLoading,
  };
};
