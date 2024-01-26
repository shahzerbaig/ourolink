import { z } from "zod";

const contactUsSchema = z.object({
  //  FIRST NAME
  firstName: z
    .string()
    .trim()
    .min(1, {
      message: "First name cannot be empty",
    })
    .max(20, {
      message: "Only 20 characters are allowed",
    }),

  //  LAST NAME
  lastName: z
    .string()
    .trim()
    .min(1, {
      message: "Last name cannot be empty",
    })
    .max(20, {
      message: "Only 20 characters are allowed",
    }),

  //  EMAIL
  email: z
    .string()
    .trim()
    .min(1, {
      message: "Email cannot be empty",
    })
    .email({
      message: "Please enter a valid email",
    }),

  //  PHONE
  phone: z
    .number({
      invalid_type_error: "Please enter your phone number",
    })
    .positive({
      message: "Please enter a valid phone number",
    }),

  //  ORGANIZATION
  organization: z
    .string()
    .trim()
    .min(1, {
      message: "Organization cannot be empty",
    })
    .max(40, {
      message: "Only 40 characters are allowed",
    }),

  //  MESSAGE
  message: z
    .string()
    .trim()
    .min(1, {
      message: "Please enter a message",
    })
    .max(40, {
      message: "Maximum 700 characters are allowed",
    }),
});

export type ContactUsDetailsFormData = z.infer<typeof contactUsSchema>;

export default contactUsSchema;
