import React from "react";
import Image from "next/image";
import gym from "../assets/gym.jpg";

const HeroSection: React.FC = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${gym.src})` }} // Using Next.js Image source for the background
    >
      <div className="flex items-center min-h-full text-slate-200">
        <div>
          <h1 className="lg:pl-10 lg:my-8 pl-5 my-4 md:pl-1 lg:text-3xl md:text-2xl text-2xl font-bold lg:font-extrabold lg:max-w-2xl">
            Transform Your Body, Transform Your Life
          </h1>
          <h2 className="lg:pl-10 lg:my-8 pl-5 my-4 md:pl-1 lg:text-xl text-base md:text-lg font-medium lg:font-semibold lg:max-w-2xl max-w-sm">
            Join FitZone Gym today and start your journey to a healthier, stronger you.
          </h2>
          <div className="w-full md:flex md:justify-end">
            <button className="ml-10 text-white w-48 h-12 bg-red-600 hover:bg-red-900">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
