import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const RegistrationClosed = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-slate-600 p-4 rounded-lg text-center">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Registrations Are Full</h1>

      {/* Description */}
      <p className="text-white text-lg mb-6">
        Thank you for your interest! Unfortunately, registrations for this event are now full.
      </p>

      {/* Follow Message */}
      <p className="text-white text-base mb-6">
        Follow
        
          Pentaomnia
        for participating in more such events.
      </p>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/Pentaomnia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition-colors duration-200"
          aria-label="Follow Pentaomnia on Facebook"
        >
          <Facebook size={24} />
        </a>

        {/* Twitter (X) Icon */}
        <a
          href="https://x.com/pentaomnia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-sky-500 transition-colors duration-200"
          aria-label="Follow Pentaomnia on Twitter"
        >
          <Twitter size={24} />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/pentaomnia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors duration-200"
          aria-label="Follow Pentaomnia on Instagram"
        >
          <Instagram size={24} />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/company/pentaomnia/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-700 transition-colors duration-200"
          aria-label="Follow Pentaomnia on LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default RegistrationClosed;