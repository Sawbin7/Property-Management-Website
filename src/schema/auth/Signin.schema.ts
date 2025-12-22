import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Enter Valid E-mail Address"),
  password: z.string().min(6, "Minimum Length 6"),
});

export type signInType = z.infer<typeof signInSchema>;
