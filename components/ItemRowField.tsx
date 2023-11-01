import React, { useEffect } from "react";
import { Control, UseFormReturn, useWatch } from "react-hook-form";
import { FormControl, FormField, FormItem } from "./ui/form";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Invoice } from "./MainForm";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface FormProps {
  control: Control<Invoice>;
  setValue: UseFormReturn<Invoice>["setValue"];
}

interface ItemRowFieldProps {
  form: FormProps;
  index: number;
}

const ItemRowField: React.FC<ItemRowFieldProps> = ({ form, index }) => {
  const itemQty = useWatch({
    control: form.control,
    name: `items.${0}.quantity`,
  });

  const itemRate = useWatch({
    control: form.control,
    name: `items.${0}.rate`,
  });

  useEffect(() => {
    const itemAmt = Number(itemQty) * Number(itemRate);
    form.setValue(`items.${0}.amount`, itemAmt);
  }, [itemQty, itemRate, form, index]);

  return (
    <div key={index} className="relative flex space-x-2">
      <FormField
        control={form.control}
        name={`items.${0}.description`}
        render={({ field }) => (
          <FormItem className="w-4/5">
            <FormControl>
              <Textarea
                placeholder="Enter item name/description"
                className=""
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Separator orientation="vertical" className="h-20" />
      <FormField
        control={form.control}
        name={`items.${0}.quantity`}
        render={({ field }) => (
          <FormItem>
            <FormControl className="">
              <Input
                className=""
                type="number"
                inputMode="numeric"
                min={0}
                placeholder="0"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Separator orientation="vertical" className="h-20" />
      <FormField
        control={form.control}
        name={`items.${0}.rate`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                type="number"
                inputMode="numeric"
                min={0}
                placeholder="0"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Separator orientation="vertical" className="h-20" />
      <TooltipProvider>
        <Tooltip>
          <FormField
            control={form.control}
            name={`items.${0}.amount`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TooltipTrigger>
                    <Input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      placeholder="0"
                      disabled
                      {...field}
                    />
                  </TooltipTrigger>
                </FormControl>
              </FormItem>
            )}
          />
          <TooltipContent>
            <p>Add Quantity and Rate</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ItemRowField;
