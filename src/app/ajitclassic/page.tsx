"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Ajit = () => {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    contactNumber: '',
    email: '',
    courseName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://pentaomnia.com/submitajit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Registration submitted successfully!');
        setFormData({
          name: '',
          registrationNumber: '',
          contactNumber: '',
          email: '',
          courseName: '',
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/images/ajit.jpg')` }}
    >
      <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl shadow-xl shadow-yellow-500/50 w-full max-w-md">
  <h1 className="text-3xl font-bold mb-6 text-center text-white">Registration Form</h1>
  <form className="space-y-4" onSubmit={handleSubmit}>
    
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="text-gray-300">Full Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" 
        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="registrationNumber" className="text-gray-300">Registration Number</label>
      <input type="text" id="registrationNumber" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} placeholder="Enter your registration number" 
        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="contactNumber" className="text-gray-300">Contact Number</label>
      <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Enter your contact number" 
        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="text-gray-300">Email Address</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your mail ID" 
        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
    </div>

    <div className="flex flex-col gap-2">
      <label htmlFor="courseName" className="text-gray-300">Course Name</label>
      <input type="text" id="courseName" name="courseName" value={formData.courseName} onChange={handleChange} placeholder="Enter your course name" 
        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
    </div>

    <button type="submit" className="w-full py-2 px-4 bg-yellow-500 text-black font-semibold rounded-md shadow-md hover:bg-yellow-600 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed" disabled={isSubmitting}>
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
    
  </form>
</div>

    </div>
  );
};

export default Ajit;