"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Toast } from "@/components/ui/taost"

import type React from "react"

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
 
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    projectDescription: "",
    budget: "",
    startDate: "",
    deadline: "",
    referralSource: "",
    scheduleConsultation: false,
  })

  const handleServiceChange = (checked: boolean | "indeterminate", service: string) => {
    setSelectedServices((prev) => (checked === true ? [...prev, service] : prev.filter((s) => s !== service)))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (isStepComplete()) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    } else {
      // Toast({
      //   title: "Required Fields",
      //   // description: "Please fill in all required fields before proceeding.",
      //   variant: "destructive",
      // })
    }
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const isStepComplete = () => {
    switch (currentStep) {
      case 0:
        return (
          formData.fullName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phoneNumber.trim() !== ""
        )
      case 1:
        return selectedServices.length > 0 && formData.projectDescription.trim() !== ""
      case 2:
        return formData.budget !== "" && formData.startDate !== ""
      case 3:
        return formData.referralSource !== ""
      default:
        return true
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://pentaomnia.com/submit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedServices: selectedServices.join(',')
        })
      })

      const result = await response.json()

      if (result.success) {
        // Toast({
        //   title: "Success",
        //   // description: "Your inquiry has been submitted successfully!",
        // })
        // Reset form
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          projectDescription: "",
          budget: "",
          startDate: "",
          deadline: "",
          referralSource: "",
          scheduleConsultation: false,
        })
        setSelectedServices([])
        setCurrentStep(0)
      } else {
        throw new Error(result.message || 'Submission failed')
      }
    } catch (error) {
      // Toast({
      //   title: "Error",
      //   // description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
      //   variant: "destructive",
      // })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">1. Contact Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name*</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-inherit"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company/Brand Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full bg-inherit"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address*</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-inherit w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number*</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="bg-inherit w-full"
                />
              </div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">2. Service Requirements*</h2>
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
              <Textarea
                id="projectDescription"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">3. Budget & Timeline*</h2>
            <div className="space-y-2">
              <Label>Estimated Budget</Label>
              <RadioGroup
                name="budget"
                value={formData.budget}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10000-50000" id="budget-1" className="border-white" />
                  <Label htmlFor="budget-1">₹10,000 - ₹50,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50000-100000" id="budget-2" className="border-white" />
                  <Label htmlFor="budget-2">₹50,000 - ₹1,00,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="100000+" id="budget-3" className="border-white" />
                  <Label htmlFor="budget-3">₹1,00,000+</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="flexible" id="budget-4" className="border-white" />
                  <Label htmlFor="budget-4">Flexible / Not Sure</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Preferred Start Date</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                  className="w-auto max-w-xs text-black"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline (if any)</Label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-auto max-w-xs text-black"
                />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">4. Additional Information</h2>
            <div className="space-y-2">
              <Label htmlFor="referralSource">How did you hear about us?</Label>
              <Select
                name="referralSource"
                value={formData.referralSource}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, referralSource: value }))}
              >
                <SelectTrigger className="w-full">
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
              <Input id="fileUpload" name="fileUpload" type="file" className="w-full" />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">5. Confirmation</h2>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="scheduleConsultation"
                name="scheduleConsultation"
                checked={formData.scheduleConsultation}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, scheduleConsultation: checked as boolean }))
                }
              />
              <Label htmlFor="scheduleConsultation">Would you like to schedule a free consultation?</Label>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="text-white w-full max-w-md bg-white bg-opacity-10 inline-block p-4 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-6 border rounded-2xl p-6 mx-auto">
        {renderStep()}
        <div className="flex flex-wrap justify-between gap-4 mt-6">
          {currentStep > 0 && (
            <Button 
              type="button" 
              onClick={handlePrevious}
              disabled={isSubmitting}
            >
              Previous
            </Button>
          )}
          {currentStep < 4 && (
            <Button 
              className="bg-white text-black" 
              type="button" 
              onClick={handleNext} 
              disabled={!isStepComplete() || isSubmitting}
            >
              Next
            </Button>
          )}
          {currentStep === 4 && (
            <Button 
              type="submit" 
              className="bg-accent text-black text-lg font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}