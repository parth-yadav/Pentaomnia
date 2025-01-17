"use client";

import React from "react";
import Image from "next/image";
import gym from "../../../../public/images/fitness/gym.jpg";

const RegistrationPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={gym}
          alt="Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold lg:font-extrabold mb-8 text-center">
          <span className="relative font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-red-500">
            Register Now 
          </span>
        </h1>

        {/* Embedded Google Form */}
        <div className="w-full max-w-3xl bg-black rounded-lg shadow-lg">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCXrY0zsM3MicOv1JIK4uIcdw395RSKhBqUhMHg4T-9l9cpg/viewform?embedded=true" width="640" height="1834"  >Loading…</iframe>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-sm text-gray-300">
          Having trouble? Contact us at <a href="mailto:support@fitnessedge.com" className="underline">support@fitnessedge.com</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
