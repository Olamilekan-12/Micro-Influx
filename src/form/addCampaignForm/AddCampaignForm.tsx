import moment from "moment";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ChannelSection from "./channelsField/ChannelSection";
import { Button } from "@/components/ui/button";
import { useAddCampaign } from "@/api/campaignApi";

const formSchema = z.object({
  campaignTitle: z.string({
    required_error: "Campaign title is required",
  }),
  brandName: z.string({
    required_error: "Brand name is required",
  }),
  campaignCategory: z.string({
    required_error: "Campaign category is required",
  }),
  campaignDescription: z.string({
    required_error: "Campaign description is required",
  }),
  channels: z.array(z.string()).nonempty({
    message: "please select at least one item",
  }),
  minimumBudget: z.coerce.number({
    required_error: "Minimum budget is required",
    invalid_type_error: "must be a valid number",
  }),
  maximumBudget: z.coerce.number({
    required_error: "Minimum budget is required",
    invalid_type_error: "must be a valid number",
  }),
});

export type CampaignFormData = z.infer<typeof formSchema>;

const AddCampaignForm = () => {
  const { addCampaign, isLoading } = useAddCampaign();

  const form = useForm<CampaignFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      channels: [],
    },
  });

  const onSubmit = async (data: CampaignFormData) => {
    const getInitials = () => {
      const name = data.campaignTitle.split(" ");

      if (name?.length > 1) {
        return `${name[0][0]}${name[1][0]}`;
      } else {
        return name[0][0];
      }
    };
    const formData = {
      ...data,
      initials: getInitials(),
      date: moment().startOf("day").fromNow(),
    };
    await addCampaign(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-[20px]  w-full h-auto p-4 space-y-4"
      >
        <FormField
          control={form.control}
          name="campaignTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Campaign Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-transparent border-[#053559] outline-[#053559]"
                  placeholder="Enter your campaign title here"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brandName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-transparent border-[#053559] outline-[#053559]"
                  placeholder="Enter your brand name here"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="campaignCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Campaign Category</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="bg-transparent border-[#053559] outline-[#053559]">
                    <SelectValue placeholder="Select your campaign category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select your campaign category</SelectLabel>
                      <SelectItem value="Product Review">
                        Product Review
                      </SelectItem>
                      <SelectItem value="Product Analysis">
                        Product Analysis
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="campaignDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Campaign Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="bg-transparent border-[#053559] outline-[#053559]"
                  placeholder="Enter your campaign description here"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <ChannelSection />
        <div className="flex w-full justify-between items-center flex-col md:flex-row ">
          <FormField
            control={form.control}
            name="minimumBudget"
            render={({ field }) => (
              <FormItem className="w-full md:w-[47%]">
                <FormLabel>Minimum Budget</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-transparent border-[#053559] outline-[#053559] w-full"
                    placeholder="2000"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maximumBudget"
            render={({ field }) => (
              <FormItem className="w-full md:w-[47%]">
                <FormLabel>Maximum Budget</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-transparent border-[#053559] outline-[#053559] w-full"
                    placeholder="4000"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-[200px] h-[45px] rounded-md flex items-center justify-center bg-[#053559] text-white hover:bg-[#053559e2] hover:text-white mx-auto"
          variant={"ghost"}
          disabled={isLoading}
        >
          Create New Campaign
        </Button>
      </form>
    </Form>
  );
};

export default AddCampaignForm;
