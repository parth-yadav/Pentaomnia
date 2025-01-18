import React from 'react';
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData | string;
  date: string;
  name: string;
  responsibility: string;
  venue: string;
}

const Card: React.FC<CardProps> = ({ image, date, name, responsibility, venue }) => {
  return (
    <div className="bg-white border border-red-500 rounded-lg shadow-lg overflow-hidden h-[325px] flex flex-col">
      {/* Event Date */}
      <div className="bg-red-600 text-white px-4 py-2 text-center font-semibold">
        <h6>{name}</h6>
      </div>

      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt="Event Thumbnail"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Event Details */}
      <div className=" p-4 flex flex-col text-center ">
        <div>
          {/* <h2 className="text-xl font-bold text-red-600 mb-2 text-center">
            {name}
          </h2> */}
          {/* <p className="text-gray-700 mb-2">
            <span className="font-semibold">Responsibility:</span> {responsibility}
          </p> */}
          <p className="text-gray-700">
            <span className="font-semibold">Date:</span> {date}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Venue:</span> {venue}
          </p>
        </div>
        {/* <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300">
          Learn More
        </button> */}
      </div>
    </div>
  );
};

export default Card;

