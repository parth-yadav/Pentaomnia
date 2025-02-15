"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Ajit = () => {
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    contactNumber: "",
    email: "",
    courseName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://pentaomnia.com/submitajit.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.message === "Success" && result.insertedId) {
        toast.success("Registration submitted successfully!");
        setIsSubmitted(true);
        setFormData({
          name: "",
          registrationNumber: "",
          contactNumber: "",
          email: "",
          courseName: "",
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

 return (
  <>
   <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#1e293b", // Dark blue-gray background
      color: "#fff", // White text color
    },
  }}
/>

    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/images/ajit.jpg')` }}
    >
      <div className="bg-gradient-to-b m-6 from-gray-900 to-black p-8 rounded-xl shadow-xl shadow-yellow-500/50 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Registration Form
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {["name", "registrationNumber", "contactNumber", "email", "courseName"].map((field) => (
            <div key={field} className="flex flex-col gap-2">
              <label htmlFor={field} className="text-gray-300">
                {field.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
              </label>
              <input
                type={field === "email" ? "email" : field === "contactNumber" ? "tel" : "text"}
                id={field}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
          ))}

          <button
            type="submit"
            className={`w-full py-2 px-4 font-semibold rounded-md shadow-md transition duration-200 ease-in-out ${
              isSubmitted
                ? "bg-green-500 text-white cursor-default"
                : "bg-yellow-500 text-black hover:bg-yellow-600"
            }`}
            disabled={isSubmitting || isSubmitted}
          >
            {isSubmitted ? "Submitted" : isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  </>
);
};

export default Ajit;
