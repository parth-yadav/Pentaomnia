"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const positions = [
  { id: "frontend-developer", label: "Frontend Developer" },
  { id: "backend-developer", label: "Backend Developer" },
  { id: "product-designer", label: "Product Designer" },
  { id: "marketing-specialist", label: "Marketing Specialist" },
  { id: "customer-success-manager", label: "Customer Success Manager" },
];

export default function CareerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    yearOfGraduation: "",
    registrationNumber: "",
    contactNumber: "",
    email: "",
    address: "",
    selectedPositions: [] as string[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean, position: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedPositions: checked
        ? [...prev.selectedPositions, position]
        : prev.selectedPositions.filter((p) => p !== position),
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Your application has been submitted successfully!");
        // Reset form
        setFormData({
          name: "",
          yearOfGraduation: "",
          registrationNumber: "",
          contactNumber: "",
          email: "",
          address: "",
          selectedPositions: [],
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
    <div className="text-black w-full max-w-md bg-white bg-opacity-10 inline-block p-4 rounded-xl">
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

        {/* Year of Graduation */}
        <div className="space-y-2">
          <Label htmlFor="yearOfGraduation">Year of Graduation*</Label>
          <Input
            id="yearOfGraduation"
            name="yearOfGraduation"
            type="number"
            value={formData.yearOfGraduation}
            onChange={handleInputChange}
            required
            className="w-full bg-inherit"
          />
        </div>

        {/* Registration Number */}
        <div className="space-y-2">
          <Label htmlFor="registrationNumber">Registration Number*</Label>
          <Input
            id="registrationNumber"
            name="registrationNumber"
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

        {/* Positions to Apply */}
        <div className="space-y-2">
          <Label>Positions You Are Applying For*</Label>
          {positions.map((position) => (
            <div key={position.id} className="flex text-black items-center space-x-2">
              <Checkbox
                className="text-black border border-black"
                id={position.id}
                name="selectedPositions"
                checked={formData.selectedPositions.includes(position.id)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(checked === true, position.id)
                }
              />
              <Label htmlFor={position.id}>{position.label}</Label>
            </div>
          ))}
        </div>

        {/* Email */}
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

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address">Address*</Label>
          <Textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full bg-inherit"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-accent text-black text-lg font-bold w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  );
}