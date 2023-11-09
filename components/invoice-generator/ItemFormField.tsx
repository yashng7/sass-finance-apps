import React from "react";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useState } from "react";
import ItemRowField from "./ItemRowField";
import { Invoice } from "./MainForm";
import TotalCard from "./Totalcard";
import { SelectCurrency } from "./SelectCurrency";

const ItemFormField = () => {
  const { control } = useFormContext<Invoice>();
  const [numItems, setNumItems] = useState(1);

  const duplicateDiv = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNumItems(numItems + 1);
  };

  const deleteDiv = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (numItems > 1) {
      setNumItems(numItems - 1);
    }
  };

  return (
    <div className="space-y-3">
      <SelectCurrency />
      <Card className="flex space-x-2">
        <FormField
          control={control}
          name={`titles.${0}.descriptionFieldTitle`}
          render={({ field }) => (
            <FormItem className="flex flex-col w-4/5">
              <FormControl>
                <Input
                  placeholder="Item Name / Description"
                  {...field}
                  className="border-none"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Separator orientation="vertical" className="h-10" />
        <FormField
          control={control}
          name={`titles.${0}.quantityFieldTitle`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Quantity"
                  {...field}
                  className="border-none"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Separator orientation="vertical" className="h-10" />
        <FormField
          control={control}
          name={`titles.${0}.rateFieldTitle`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Rate" {...field} className="border-none" />
              </FormControl>
            </FormItem>
          )}
        />
        <Separator orientation="vertical" className="h-10" />
        <FormField
          control={control}
          name={`titles.${0}.amountFieldTitle`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Amount"
                  {...field}
                  className="border-none"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </Card>

      <div className="space-y-3">
        {Array.from({ length: numItems }, (_, index) => (
          <ItemRowField key={index} index={index} />
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex flex-col w-full space-y-2">
          <Button
            onClick={duplicateDiv}
            className=" hover:bg-green-200 hover:dark:text-primary-foreground"
            variant="outline"
          >
            Add Row
          </Button>
          <Button
            onClick={deleteDiv}
            className=" hover:bg-red-200 hover:dark:text-primary-foreground"
            variant="outline"
          >
            Delete Row
          </Button>
        </div>
        <TotalCard />
      </div>
    </div>
  );
};

export default ItemFormField;
