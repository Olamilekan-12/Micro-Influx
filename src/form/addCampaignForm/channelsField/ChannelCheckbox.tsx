import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Channel = {
  name: string;
  imageUnchecked: string;
  imageChecked: string;
};

type Props = {
  channel: Channel;
  field: ControllerRenderProps<FieldValues, "channels">;
};

const ChannelCheckbox = ({ channel, field }: Props) => {
  const isChecked = field.value.includes(channel.name);

  return (
    <FormItem className="flex flex-row gap-1">
      <FormControl>
        {/* Hidden Checkbox input for the logic */}
        <Checkbox
          className="hidden"
          checked={isChecked}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, channel.name]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== channel.name)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="w-[50px] h-[50px] cursor-pointer">
        <img
          src={isChecked ? channel.imageChecked : channel.imageUnchecked}
          alt={channel.name}
          className="w-full h-full"
        />
      </FormLabel>
    </FormItem>
  );
};

export default ChannelCheckbox;
