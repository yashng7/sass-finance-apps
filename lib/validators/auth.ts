import { z } from "zod";

export const invoiceSchema = z.object({
  formTitle: z.string(),
  invoiceId: z
    .string()
    .min(3, { message: "Invoice ID should be at least 3 characters long." })
    .max(255, { message: "Invoice ID should not exceed 255 characters." }),
  invoiceDate: z.date(),
  dueDate: z.date(),
  clients: z.array(
    z.object({
      name: z
        .string()
        .min(3, {
          message: "Client name should be at least 3 characters long.",
        })
        .max(255, { message: "Client name should not exceed 255 characters." }),
      phoneNumber: z
        .string()
        .min(10)
        .max(15, { message: "Please enter a valid phone number" }),
      email: z
        .string()
        .email({ message: "Please enter a valid email address." }),
      address: z.string().min(1, { message: "Address field cannot be empty." }),
      city: z.string(),
      state: z.string(),
      zipCode: z.string().min(5).max(10, { message: "Add valid zip code" }),
      country: z.string(),
    })
  ),
  recipients: z.array(
    z.object({
      name: z
        .string()
        .min(3, {
          message: "Client name should be at least 3 characters long.",
        })
        .max(255, { message: "Client name should not exceed 255 characters." }),
      phoneNumber: z
        .string()
        .min(10)
        .max(15, { message: "Please enter a valid phone number" }),
      email: z
        .string()
        .email({ message: "Please enter a valid email address." }),
      address: z.string().min(1, { message: "Address field cannot be empty." }),
      city: z.string(),
      state: z.string(),
      zipCode: z.string().min(5).max(10, { message: "Add valid zip code" }),
      country: z.string(),
    })
  ),
  titles: z.array(
    z.object({
      descriptionFieldTitle: z
        .string()
        .min(1)
        .max(30, { message: "Description field Title cannot be empty." }),
      quantityFieldTitle: z
        .string()
        .min(1)
        .max(10, { message: "Quantity field Title cannot be empty." }),
      rateFieldTitle: z
        .string()
        .min(1)
        .max(10, { message: "Rate field Title cannot be empty." }),
      amountFieldTitle: z
        .string()
        .min(1)
        .max(10, { message: "Amount field Title cannot be empty." }),
    })
  ),
  items: z.array(
    z.object({
      description: z
        .string()
        .min(1, { message: "Description field cannot be empty." }),
      quantity: z.number(),
      rate: z.number(),
      amount: z.number(),
    })
  ),
  taxRate: z.number(),
  totalAmount: z.number(),
  termsAndConditions: z.string(),
  notes: z.string(),
});
