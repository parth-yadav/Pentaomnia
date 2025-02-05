"use server"

import { z } from "zod"

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  projectDescription: z.string().min(1, "Project description is required"),
  budget: z.enum(["10000-50000", "50000-100000", "100000+", "flexible"]),
  startDate: z.string().min(1, "Start date is required"),
  deadline: z.string().optional(),
  referralSource: z.enum(["social-media", "referral", "website", "event", "other"]),
  scheduleConsultation: z.boolean(),
})

export async function submitForm(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    fullName: formData.get("fullName"),
    companyName: formData.get("companyName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    services: formData.getAll("services"),
    projectDescription: formData.get("projectDescription"),
    budget: formData.get("budget"),
    startDate: formData.get("startDate"),
    deadline: formData.get("deadline"),
    referralSource: formData.get("referralSource"),
    scheduleConsultation: formData.get("scheduleConsultation") === "on",
  })

  if (!validatedFields.success) {
    return { error: "Invalid form data. Please check your inputs." }
  }

  // Here you would typically save the form data to a database
  // and possibly send an email notification

  return { success: "Form submitted successfully!" }
}

