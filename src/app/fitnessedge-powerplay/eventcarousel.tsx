'use client';

import React from 'react';
import Image from 'next/image';
import armWrestling from '../../../public/images/fitness/armRestling.jpg';
import birdDogExercise from '../../../public/images/fitness/Bird-DogExercise.jpg';
import DeadLift from '../../../public/images/fitness/DeadLift.jpg';
import dumpling from '../../../public/images/fitness/dumpling.jpg';
import burpse from '../../../public/images/fitness/burpse.jpg';
import FreeSquatHold from '../../../public/images/fitness/FreeSquatHold.jpg';
import Kettlebell from '../../../public/images/fitness/Kettlebell.jpg';
import plank from '../../../public/images/fitness/plank.jpg';
import Pushup from '../../../public/images/fitness/Pushup.jpg';
import skipping from '../../../public/images/fitness/skipping.jpg';
import standingBarbell from '../../../public/images/fitness/standingBarbell.jpg';
import trxPushUp from '../../../public/images/fitness/trxPushUp.jpg';
import Card from './card';
import { StaticImageData } from 'next/image';
import RegisterButton from './registerbutton';

interface Event {
  name: string;
  date: string;
  responsibility: string;
  venue: string;
  image: string | StaticImageData;
}

const EventGrid: React.FC = () => {
  const events: Event[] = [
    { name: 'Free Squat Hold', date: '20-01-2025', responsibility: 'Harsh Rao and Nitin Rai', venue: 'DSW', image: FreeSquatHold },
    { name: 'Plank Competition', date: '21-01-2025', responsibility: 'Harsh Rao and Nitin Rai', venue: 'DSW', image: plank },
    { name: 'Arm Wrestling', date: '22-01-2025', responsibility: 'Harsh Rao and Nitin Rai', venue: 'DSW', image: armWrestling },
    { name: 'Deadlift', date: '23-01-2025', responsibility: 'Harsh Rao and Nitin Rai', venue: 'DSW', image: DeadLift },
    { name: 'Standing Barbell', date: '24-01-2025', responsibility: 'Harsh Rao and Nitin Rai', venue: 'DSW', image: standingBarbell },
    { name: 'TRX Pushups', date: '25-01-2025', responsibility: 'Harsh Rao and Nitin Rai', venue: 'DSW', image: trxPushUp },
    { name: 'Burpees', date: '27-01-2025', responsibility: 'Adarsh and Dipesh', venue: 'BH6', image: burpse },
    { name: 'Dumpling', date: '28-01-2025', responsibility: 'Adarsh and Dipesh', venue: 'BH5', image: dumpling },
    { name: 'The Bird-Dog (One-arm, One-Leg Plank)', date: '29-01-2025', responsibility: 'Adarsh and Dipesh', venue: 'BH5, BH2, BH4', image: birdDogExercise },
    { name: 'Pushups', date: '30-01-2025', responsibility: 'Adarsh and Dipesh', venue: 'BH1', image: Pushup },
    { name: 'Skipping', date: '31-01-2025', responsibility: 'Adarsh and Dipesh', venue: 'GH5, GH6', image: skipping },
    { name: 'Kettlebell Competition', date: '01-02-2025', responsibility: 'Adarsh and Dipesh', venue: 'GH1 to GH6', image: Kettlebell },
  ];

  return (
    <div className="dark:bg-gray-300 dark:text-slate-100 bg-black min-h-screen">
      <h1 className="text-center text-gray-200 dark:text-slate-100 text-6xl font-semibold py-24">
        Events
      </h1>
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div key={index} className="w-full">
              <Card
                image={event.image}
                date={event.date}
                name={event.name}
                responsibility={event.responsibility}
                venue={event.venue}
              />
            </div>
          ))}
        </div>

        {/* Centered Register Button */}
        <div className="flex justify-center items-center mt-10">
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};

export default EventGrid;
