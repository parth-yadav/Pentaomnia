"use client"

import { useState } from "react"
import { useFormState } from "react-dom"
import { submitForm } from "./action"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Toast, ToastDescription } from "@/components/ui/use-toast"

const services = [
  { id: "social-media", label: "Social Media Marketing" },
  { id: "digital-advertising", label: "Digital Advertising (Meta/Google Ads)" },
  { id: "web-development", label: "Web Development" },
  { id: "seo-content", label: "SEO & Content Marketing" },
  { id: "brand-promotions", label: "Brand Promotions" },
  { id: "event-management", label: "Event Management" },
  { id: "graphic-video", label: "Graphic & Video Editing" },
  { id: "other", label: "Other" },
]

export function ServiceInquiryForm() {
  const [state, formAction] = useFormState(submitForm, null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const handleServiceChange = (checked: boolean | "indeterminate", service: string) => {
  setSelectedServices((prev) => (checked === true ? [...prev, service] : prev.filter((s) => s !== service)))
    }
    

  if (state?.success) {
  Toast({
    title: "Success",
    children: <ToastDescription>{state.success}</ToastDescription>,
  })
}

if (state?.error) {
  Toast({
    title: "Error",
    children: <ToastDescription>{state.error}</ToastDescription>,
    variant: "destructive",
  })
}

  return (
    <form action={formAction} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">1. Contact Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company/Brand Name</Label>
            <Input id="companyName" name="companyName" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" name="phoneNumber" required />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">2. Service Requirements</h2>
        <div className="space-y-2">
          <Label>Which service are you interested in?</Label>
          {services.map((service) => (
            <div className="flex items-center space-x-2" key={service.id}>
              <Checkbox
                id={service.id}
                name="services"
                value={service.id}
                checked={selectedServices.includes(service.id)}
               onCheckedChange={(checked: boolean) => handleServiceChange(checked, service.id)}

              />
              <Label htmlFor={service.id}>{service.label}</Label>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectDescription">Briefly describe your project or requirements</Label>
          <Textarea id="projectDescription" name="projectDescription" required />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">3. Budget & Timeline</h2>
        <div className="space-y-2">
          <Label>Estimated Budget</Label>
          <RadioGroup name="budget" defaultValue="flexible">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10000-50000" id="budget-1" />
              <Label htmlFor="budget-1">₹10,000 - ₹50,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="50000-100000" id="budget-2" />
              <Label htmlFor="budget-2">₹50,000 - ₹1,00,000</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="100000+" id="budget-3" />
              <Label htmlFor="budget-3">₹1,00,000+</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="flexible" id="budget-4" />
              <Label htmlFor="budget-4">Flexible / Not Sure</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate">Preferred Start Date</Label>
            <Input id="startDate" name="startDate" type="date" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="deadline">Deadline (if any)</Label>
            <Input id="deadline" name="deadline" type="date" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">4. Additional Information</h2>
        <div className="space-y-2">
          <Label htmlFor="referralSource">How did you hear about us?</Label>
          <Select name="referralSource">
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="social-media">Social Media</SelectItem>
              <SelectItem value="referral">Referral</SelectItem>
              <SelectItem value="website">Website/Search Engine</SelectItem>
              <SelectItem value="event">Event</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="fileUpload">Upload any reference files (if needed)</Label>
          <Input id="fileUpload" name="fileUpload" type="file" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">5. Confirmation</h2>
        <div className="flex items-center space-x-2">
          <Checkbox id="scheduleConsultation" name="scheduleConsultation" />
          <Label htmlFor="scheduleConsultation">Would you like to schedule a free consultation?</Label>
        </div>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}

