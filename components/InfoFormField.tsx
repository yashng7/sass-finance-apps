import { Control } from "react-hook-form";
import { FieldNames, FormData } from "./Form";
import { FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";

type CreateFormFieldProps = {
    control: Control<FormData>;
    name: FieldNames;
    placeholder: string;
  };
  
  export const CreateFormField: React.FC<CreateFormFieldProps> = ({ control, name, placeholder }) => {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                value={field.value?.toString() || ""}
              />
            </FormControl>
          </FormItem>
        )}
      />
    );
  };