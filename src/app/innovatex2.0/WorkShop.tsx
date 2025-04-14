"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import toast, { Toaster } from "react-hot-toast";

export default function WorkshopRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    contactNumber: "",
    fatherName: "",
    courseName: "",
    residenceType: "",
    passingOutYear: "",
    referredBy: "",
    email: "",
    coreInterest: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    // Validate registration number to ensure it's exactly 8 digits
    if (name === "registrationNumber" && !/^\d{0,8}$/.test(value)) {
      toast.error("Registration Number must be exactly 8 digits.");
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate registration number before submission
    if (formData.registrationNumber.length !== 8) {
      toast.error("Registration Number must be exactly 8 digits.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch("https://pentaomnia.com/workshop.php", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Your registration has been submitted successfully!");
        // Reset form
        setFormData({
          name: "",
          registrationNumber: "",
          contactNumber: "",
          fatherName: "",
          courseName: "",
          residenceType: "",
          passingOutYear: "",
          referredBy: "",
          email: "",
          coreInterest: "",
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Configuration */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1e293b", // Dark blue-gray background
            color: "#fff", // White text color
          },
        }}
      />

      <div className="w-full mx-4 md:w-[50vw] text-white bg-white bg-opacity-10 inline-block rounded-xl">
        <form onSubmit={handleSubmit} className="space-y-6 border rounded-2xl p-6 mx-auto">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name*</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-inherit"
            />
          </div>

          {/* Registration Number */}
          <div className="space-y-2">
            <Label htmlFor="registrationNumber">Registration Number* (8 digits)</Label>
            <Input
              id="registrationNumber"
              name="registrationNumber"
              type="text"
              inputMode="numeric"
              maxLength={8}
              value={formData.registrationNumber}
              onChange={handleInputChange}
              required
              className="w-full bg-inherit"
            />
          </div>

          {/* Contact Number */}
          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number*</Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
              className="w-full bg-inherit"
            />
          </div>

          {/* Father's Name */}
          <div className="space-y-2">
            <Label htmlFor="fatherName">Father's Name*</Label>
            <Input
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              required
              className="w-full bg-inherit"
            />
          </div>

          {/* Course Name (Text Input) */}
          <div className="space-y-2">
            <Label htmlFor="courseName">Course Name*</Label>
            <Input
              id="courseName"
              name="courseName"
              value={formData.courseName}
              onChange={handleInputChange}
              required
              className="w-full bg-inherit"
            />
          </div>

          {/* Residence Type (Dropdown) */}
          <div className="space-y-2">
            <Label htmlFor="residenceType">Residence Type*</Label>
            <Select
              value={formData.residenceType}
              onValueChange={(value) => handleSelectChange("residenceType", value)}
            >
              <SelectTrigger className="w-full bg-inherit">
                <SelectValue placeholder="Select your residence type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hosteler">Hosteler</SelectItem>
                <SelectItem value="day-scholar">Day Scholar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Passing Out Year */}
          <div className="space-y-2">
            <Label htmlFor="passingOutYear">Passing Out Year*</Label>
            <Input
              id="passingOutYear"
              name="passingOutYear"
              type="number"
              value={formData.passingOutYear}
              onChange={handleInputChange}
              required
              className="w-full bg-inherit"
            />
          </div>

          {/* Referred By */}
          <div className="space-y-2">
            <Label htmlFor="referredBy">Referred By*</Label>
            <Input
              id="referredBy"
              name="referredBy"
              value={formData.referredBy}
              onChange={handleInputChange}
              required
              className="w-full bg-inherit"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full bg-inherit"
            />
          </div>

          {/* Core Interest (Dropdown) */}
          <div className="space-y-2">
            <Label htmlFor="coreInterest">What is Your Core Interest in this Workshop?*</Label>
            <Select
              value={formData.coreInterest}
              onValueChange={(value) => handleSelectChange("coreInterest", value)}
            >
              <SelectTrigger className="w-full bg-inherit">
                <SelectValue placeholder="Select your core interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="management">Management</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-accent text-black text-lg font-bold w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </Button>
        </form>
      </div>
    </>
  );
}