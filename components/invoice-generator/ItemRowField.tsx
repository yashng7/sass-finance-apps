import React, { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Invoice } from "./MainForm";

interface ItemRowFieldProps {
  index: number;
}

const ItemRowField: React.FC<ItemRowFieldProps> = ({ index }) => {
  const { control, setValue } = useFormContext<Invoice>();

  // const currency = useWatch({
  //   control: control,
  //   name: "currency",
  // })

  // const amount = useWatch({
  //   control: control,
  //   name: `items.${index}.amount`,
  // })

  // useEffect(() => {
  //   let amount = 0

  //   if (currency && amount) {
  //     const formatter = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: currency,
  //     });

  //     const formattedAmount = formatter.format(amount);

  //     setValue(`items.${index}.amount`, formattedAmount);
  //   }
  // }, [currency, amount, setValue]);

  return (
    <div className="relative flex space-x-2">
      <FormField
        control={control}
        name={`items.${index}.description`}
        render={({ field }) => (
          <FormItem className="w-4/5">
            <FormControl>
              <Textarea placeholder="Enter item name/description" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <Separator orientation="vertical" className="h-20" />
      <FormField
        control={control}
        name={`items.${index}.quantity`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="0" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Separator orientation="vertical" className="h-20" />
      <FormField
        control={control}
        name={`items.${index}.rate`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="0" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Separator orientation="vertical" className="h-10" />

      <FormField
        control={control}
        name={`items.${index}.amount`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                type="number"
                step="any"
                inputMode="numeric"
                min={0}
                placeholder="0"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ItemRowField;
