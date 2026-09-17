import { z } from "zod";

export const signupSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, "Full name is required")
      .min(3, "Name must be at least 3 characters"),

    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Invalid email address"),

    phone: z
      .string()
      .trim()
      .min(1, "Phone number is required")
      // বাংলাদেশের নাম্বার ফরম্যাট: 01xxxxxxxxx অথবা +8801xxxxxxxxx
      .regex(/^(?:\+88|88)?(01[3-9]\d{8})$/, "Invalid phone number"),

    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
