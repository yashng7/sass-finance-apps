import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Invoice } from "./MainForm";
import { useFormContext } from "react-hook-form";

const InvoiceInfoField = () => {
  const { control } = useFormContext<Invoice>();
  return (
    <div className="flex flex-col w-1/3 space-y-2">
      <FormField
        control={control}
        name="invoiceId"
        render={({ field }) => (
          <FormItem className="flex items-center space-y-0">
            <FormLabel className="w-1/2">Invoice No.</FormLabel>
            <FormControl>
              <Input
                placeholder="3001"
                {...field}
                className="w-1/2 text-secondary-foreground"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="invoiceDate"
        render={({ field }) => (
          <FormItem className="flex items-center space-y-0">
            <FormLabel className="w-1/2 ">Invoice Date</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal w-1/2",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PP")
                    ) : (
                      <span>Invoice Date</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="dueDate"
        render={({ field }) => (
          <FormItem className="flex items-center space-y-0">
            <FormLabel className="w-1/2">Due Date</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal w-1/2",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PP")
                    ) : (
                      <span>Due Date</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InvoiceInfoField;
