import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { Invoice } from "./MainForm";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export function AddLogo() {
  const { control } = useFormContext<Invoice>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex items-center">
      {!selectedImage && (
        <FormField
          control={control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  {...field}
                  onChange={handleImageChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      {selectedImage && (
        <div className="flex space-x-2">
          <Image src={selectedImage} alt="Preview" width={100} height={100} className="rounded-md"/>
          <Button onClick={handleRemoveImage} variant="destructive">
            <X />
          </Button>
        </div>
      )}
    </div>
  );
}
