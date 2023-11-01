import React from "react";
import { FormControl, FormField, FormItem } from "./ui/form";
import { SmallInput } from "./ui/input";
import { Control } from "react-hook-form";
import { Invoice } from "./MainForm";

interface FormProps {
  control: Control<Invoice>;
}
interface RecipientInfoFormField {
  form: FormProps;
}

const RecipientInfoFormField: React.FC<RecipientInfoFormField> = ({ form }) => {
  return (
    <div>
      <FormField
        control={form.control}
        name={`recipients.${0}.name`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SmallInput
                placeholder="Name"
                {...field}
                className="capitalize"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`recipients.${0}.phoneNumber`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SmallInput
                placeholder="Phone number"
                {...field}
                className="capitalize"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`recipients.${0}.email`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SmallInput
                placeholder="Email"
                {...field}
                className="capitalize"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`recipients.${0}.address`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SmallInput
                placeholder="Address"
                {...field}
                className="capitalize"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`recipients.${0}.city`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SmallInput
                placeholder="City"
                {...field}
                className="capitalize"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`recipients.${0}.state`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SmallInput
                placeholder="State"
                {...field}
                className="capitalize"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`recipients.${0}.zipCode`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SmallInput
                placeholder="Zip Code"
                {...field}
                className="capitalize"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`recipients.${0}.country`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <SmallInput
                placeholder="Country"
                {...field}
                className="capitalize"
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default RecipientInfoFormField;
