import React from "react";
import Image from "next/image";
import gym from "../../../public/images/fitness/gym.jpg";
import hero from "../../../public/images/fitness/hero.jpg"
import RegisterButton from "./registerbutton";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Hidden on Mobile */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={gym}
          alt="Gym background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Gradient Background - Visible only on Mobile */}
      <div 
        className="absolute inset-0 md:hidden "
        
      >
        <Image
          src={hero}
        alt="Gym background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"/>
        
      </div>  

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-full text-slate-200 bg-black/40 md:bg-black/40">
        <div className="text-center md:text-left px-4 md:px-8 lg:px-12 w-full max-w-7xl">
         
          <h1 className="text-6xl font-bold lg:font-extrabold max-w-2xl mb-4 md:mb-6">
          Pentaomnia X Fitness Edge 
          </h1>
         
           
         <h1
  className="text-2xl md:text-3xl lg:text-4xl font-bold lg:font-extrabold max-w-2xl mb-4 md:mb-6 relative z-10 text-white"
>
  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-red-500">
    Powerplay: Transform Resolutions into Reality
  </span>
  <div
    className="absolute inset-0 -z-10 bg-red-300 bg-gradient-to-t from-red-300/70 to-transparent blur-3xl opacity-90"
    aria-hidden="true"
  />
</h1>

          <h2 className="text-base md:text-lg lg:text-xl font-medium lg:font-semibold max-w-2xl mb-8">
            Fuel Your Potential, Shape Your Future—Wellness Redefined
          </h2>
          <h1 className="text-4xl  font-extrabold mb-6">
          Win Prizes Worth {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-500">
            ₹20,000
          </span>
        </h1>
          <div className="w-full flex justify-center md:justify-start">
           <RegisterButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;