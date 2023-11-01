import React from "react";
import { Input } from "./ui/input";
import { Control, UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem } from "./ui/form";
// import { FormData } from "./MainForm";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useState } from "react";
import ItemRowField from "./ItemRowField";
import { Invoice } from "./MainForm";

interface FormProps {
  control: Control<Invoice>;
  setValue: UseFormReturn<Invoice>["setValue"];
}

interface ItemFormFieldProps {
  form: FormProps;
}

const ItemFormField: React.FC<ItemFormFieldProps> = ({ form }) => {
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
      <Card className="flex space-x-2">
        <FormField
          control={form.control}
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
          control={form.control}
          name={`titles.${0}.quantityFieldTitle`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Quantity"
                  defaultValue="Quantity"
                  {...field}
                  className="border-none"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Separator orientation="vertical" className="h-10" />
        <FormField
          control={form.control}
          name={`titles.${0}.rateFieldTitle`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Rate"
                  defaultValue="Rate"
                  {...field}
                  className="border-none"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Separator orientation="vertical" className="h-10" />
        <FormField
          control={form.control}
          name={`titles.${0}.amountFieldTitle`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Amount"
                  defaultValue="Amount"
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
          <ItemRowField
            key={index}
            form={{ control: form.control, setValue: form.setValue }}
            index={index}
          />
        ))}
      </div>
      <Button onClick={duplicateDiv} className="w-full hover:bg-green-200">
        Add Row
      </Button>
      <Button onClick={deleteDiv} className="w-full hover:bg-red-200">
        Delete Row
      </Button>
    </div>
  );
};

export default ItemFormField;
