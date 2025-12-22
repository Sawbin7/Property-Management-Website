import { z } from "zod";

/**
 * Helpers (Zod v4 compatible)
 */
const optionalString = z
  .union([z.string().min(1), z.literal("")])
  .optional()
  .transform((v) => (v === "" ? undefined : v));

const optionalEnum = <T extends [string, ...string[]]>(values: T) =>
  z
    .union([z.enum(values), z.literal("")])
    .optional()
    .transform((v) => (v === "" ? undefined : v));

export const userRegister = z
  .object({
    // Required fields
    first_name: z.string().min(2, "First Name must be at least 2 characters"),
    last_name: z.string().min(2, "Last Name must be at least 2 characters"),
    email: z.string().email("Enter Valid E-mail"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_password: z
      .string()
      .min(6, "Confirm Password Need to match with password"),
    phone: z.string().regex(/^\d{10}$/, "Enter Valid Phone Number"),

    // Optional fields
    middle_name: optionalString,
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

    dob: z
      .union([z.string(), z.literal("")])
      .optional()
      .transform((v) => (v === "" ? undefined : v))
      .refine(
        (v) => {
          if (!v) return true;
          const d = new Date(v);
          return !isNaN(d.getTime()) && d <= new Date();
        },
        { message: "Date of Birth cannot be in the future" }
      ),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type userRegisterType = z.infer<typeof userRegister>;
