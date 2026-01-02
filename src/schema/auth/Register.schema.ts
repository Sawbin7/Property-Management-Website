import { z } from "zod";

const optionalString = z
  .string()
  .min(1)
  .or(z.literal(""))
  .transform((v) => (v === "" ? undefined : v)); // string | undefined

const optionalEnum = <T extends [string, ...string[]]>(values: T) =>
  z
    .enum(values)
    .or(z.literal(""))
    .transform((v) => (v === "" ? undefined : v)); // string | undefined

export const userRegister = z
  .object({
    first_name: z.string().min(2),
    last_name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
    phone: z.string().regex(/^\d{10}$/),
    middle_name: optionalString, // required in type but can be undefined
    city: optionalString,
    address: optionalString,
    gender: optionalEnum(["male", "female", "other"]),
    state: optionalEnum([
      "Province-1 Koshi",
      "Province-2 Madhesh",
      "Province-3 Bagmati",
      "Province-4 Gandaki",
      "Province-5 Lumbini",
      "Province-6 Karnali",
      "Province-7 Susurpashchim",
    ]),
    dob: optionalString.refine(
      (v) => {
        if (!v) return true;
        const d = new Date(v);
        return !isNaN(d.getTime()) && d <= new Date();
      },
      { message: "DOB cannot be in the future" }
    ),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type userRegisterType = z.infer<typeof userRegister>;
