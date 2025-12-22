import { z } from "zod";

export const ContactSchema = z.object({
  userName: z.string().min(3, "User Name Must be larger than 5 Character."),
  email: z.email("Must be Valid E-mail"),
  message: z
    .string()
    .min(5, "Message need to be larger than 5 character")
    .max(150, "Must be Less than 150 Character."),
});

export type ContactType = z.infer<typeof ContactSchema>;
