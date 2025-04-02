"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const positions = [
  { id: "hr", label: "HR" },
  { id: "web-development", label: "Web Development" },
  { id: "content-writer", label: "Content Writer" },
  { id: "contnet-creator", label: "Content Creator" },
  { id: "filming", label: "Filming" },
  { id: "event-management", label: "Event Management" },
  { id: "video-editor", label: "Video Editor" },
  { id: "vfx-artist", label: "VFX Artist" },
  { id: "3d-vfx", label: "3D VFX Artist" },
  { id: "sfx", label: "SFX Artist" },
  { id: "graphic-designer", label: "Graphic Designer" },
  { id: "cinematic", label: "Cinematic Videographer" },
  { id: "marketing", label: "Marketing" },
  { id: "sales", label: "Sales" },
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
    cvFile: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]; // Safely access the first file
  setFormData((prev) => ({
    ...prev,
    cvFile: file || null, // Explicitly assign `null` if no file is selected
  }));
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
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("yearOfGraduation", formData.yearOfGraduation);
      formDataToSend.append("registrationNumber", formData.registrationNumber);
      formDataToSend.append("contactNumber", formData.contactNumber);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("selectedPositions", formData.selectedPositions.join(","));
      if (formData.cvFile) {
        formDataToSend.append("cvFile", formData.cvFile);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formDataToSend,
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
          cvFile: null,
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
    <div className="text-black w-full bg-white bg-opacity-10 inline-block rounded-xl">
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

        {/* CV Upload */}
        <div className="space-y-2">
          <Label htmlFor="cvFile">Upload Your CV*</Label>
          <Input
            id="cvFile"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
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