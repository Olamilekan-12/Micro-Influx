import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { CHANNEL_DATA } from "./channelData";
import { useFormContext } from "react-hook-form";
import ChannelCheckbox from "./ChannelCheckbox";

const ChannelSection = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="channels"
      render={({ field }) => (
        <FormItem>
          <div className="flex gap-2">
            {CHANNEL_DATA.map((channelItem) => (
              <ChannelCheckbox channel={channelItem} field={field} />
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ChannelSection;
