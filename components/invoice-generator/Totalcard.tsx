import React, { useEffect } from "react";
import {
  Control,
  UseFormReturn,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { Invoice } from "./MainForm";
import { Card } from "../ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

// import { SelectCurrency } from "./SelectCurrency";

const TotalCard = () => {
  const { control, setValue } = useFormContext<Invoice>();
  const items = useWatch({
    control: control,
    name: "items",
  });

  const taxRate = useWatch({
    control: control,
    name: "taxRate",
  });

  const currency = useWatch({
    control: control,
    name: "currency",
  });

  useEffect(() => {
    let totalAmount = 0;

    items.forEach((item) => {
      const itemAmount = Number(item.amount);
      const itemAmountWithTax = itemAmount + (itemAmount * taxRate) / 100;
      totalAmount += itemAmountWithTax;
    });

    totalAmount = Number(totalAmount.toFixed(2));

    let formattedTotalAmount = totalAmount.toString();

    // Format the total amount only if a currency has been selected
    if (currency) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
      });

      formattedTotalAmount = formatter.format(totalAmount);
    }

    setValue("totalAmount", formattedTotalAmount);
  }, [items, taxRate, setValue, currency]);

  return (
    <Card className="flex flex-col w-[450px] p-5 space-y-2">
      <FormField
        control={control}
        name="taxRate"
        render={({ field }) => (
          <FormItem className="flex items-center space-y-0">
            <FormLabel className="w-1/2">Tax Rate %</FormLabel>
            <FormControl>
              <Input
                type="number"
                inputMode="numeric"
                min={0}
                step="0.1"
                placeholder="0%"
                {...field}
                className="flex-1"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="totalAmount"
        render={({ field }) => (
          <FormItem className="flex items-center space-y-0">
            <FormLabel className="w-1/2">Total Amount</FormLabel>
            <FormControl className="w-1/2">
              <Input
                // type="number"
                // inputMode="numeric"
                // min={0}
                // step="any"
                placeholder="0"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      {/* <SelectForm /> */}
    </Card>
  );
};

export default TotalCard;
