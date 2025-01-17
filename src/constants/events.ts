import { StaticImageData } from "next/image";



// Event Image Imports
import Event2Image from "../../public/images/eventimages/alpheum.jpg";
import Event3Image from "../../public/images/eventimages/alpheum.jpg";
import Event7Image from "../../public/images/eventimages/alpheum.jpg";
//import Event8Image from "../../public/images/eventimages/alpheum.jpg";
import Event9Image from "../../public/images/eventimages/alpheum.jpg";
import Event1Image from "../../public/images/eventimages/alpheum.jpg";
import Event10Image from "../../public/images/eventimages/alpheum.jpg";
import Event11Image from "../../public/images/eventimages/alpheum.jpg";
import Event13Image from "../../public/images/eventimages/alpheum.jpg";
import Event14Image from "../../public/images/eventimages/alpheum.jpg";
import Event15Image from "../../public/images/eventimages/alpheum.jpg";
import Event5Image from "../../public/images/eventimages/arcana20.jpg";
import Event4Image from "../../public/images/eventimages/armwrestle.jpg";
import Event6Image from "../../public/images/eventimages/innovateex.jpg";
import Event12Image from "../../public/images/eventimages/kuchkhattahojaye.jpg";
import Event16Image from "../../public/images/eventimages/musclemania.jpg";
import EventFit from "../../public/images/eventimages/fitness.jpg"

export interface Event {
    id: number;
    title: string;
    description: string;
    startDateTime: string;
    endDateTime?: string;
    location: string;
    url: string;
    src: string | StaticImageData;
    color: string;
}

export const CONST_EVENTS: Event[] = [
    {
        id: 2,
        title: "Powerplay: Transform Resolutions into Reality",
        description:
            "Pentaomnia aims to promote health and fitness among students through a series of engaging activities. This initiative is designed to encourage students to embrace a healthier lifestyle, foster a culture of wellness on campus, and create awareness about the benefits of regular physical activity. By integrating fun challenges and fitness education, the event seeks to inspire participants to prioritize their wellbeing and achieve their fitness goals.",
        startDateTime: "2025-1-20T18:00:00",
        endDateTime: "2025-2-1T20:00:00",
        location: "LPU",
        url: "google.com",  
        src: EventFit,
        color: "#BBACAF",
    },
    {
        id: 3,
        title: "Alephium Workshop",
        description:
            "On 31st August 2024, Pentaomnia introduced a cutting-edge Web3 Technology workshop and training session conducted by Alephium officials at LPU. The workshop provided students with hands-on experience in blockchain technology, equipping them with skills that are highly relevant in the evolving tech industry. The event marked a significant step towards bridging the gap between academic learning and industry demands.",
        startDateTime: "2024-10-25T18:00:00",
        endDateTime: "2024-8-31T20:00:00",
        location: "LPU",
        url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",

        src: Event3Image,
        color: "#BBACAF",
    },
    {
        id: 4,
        title: "Arm Wrestling Championship 3.0",
        description:
            "Held on 16th and 17th September 2024, the Arm Wrestling Championship 3.0 brought together over 300 participants from across India to compete in this national-level event at LPU. The fierce competition showcased remarkable strength, determination, and sportsmanship, culminating in the crowning of the 'Champion of Champions.' The event drew a large audience and elevated the profile of arm wrestling as a competitive sport.",
        startDateTime: "2024-9-16T19:00:00",
        endDateTime: "2024-9-17T21:00:00",
        location: "LPU",
        url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",

        src: Event4Image,
        color: "#BBACAF",
    },
    {
        id: 5,
        title: "Arcana 2.0",
        description:
            "From *12th to 14th November 2024, Pentaomnia Private Limited orchestrated *Arcana 2.0, a *National Level Quiz Competition* that brought together talented students from across the country. Competing fiercely to showcase their intellect and skills, participants vied for coveted certificates and exciting goodies. The event fostered healthy competition, celebrated knowledge, and left an indelible mark of excellence.",
        startDateTime: "2024-11-12T18:00:00",
        endDateTime: "2024-11-14T21:00:00",
        location: "LPU",
        url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",

        src: Event5Image,
        color: "#BBACAF",
    },
    {
        id: 6,
        title: "InnovateX",
        description:
            "InnovateX, a 24-hour hackathon held on 30th and 31st March 2024, challenged participants to innovate and develop impactful projects. The event concluded with the selection of three exceptional participants who earned placement offers with ZillionsofTech. InnovateX highlighted the creative and problem-solving capabilities of the students while offering them a pathway to professional success.",
        startDateTime: "2024-3-30T19:00:00",
        endDateTime: "2024-3-31T22:00:00",
        location: "LPU",
        url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",

        src: Event6Image,
        color: "#BBACAF",
    },

    {
        id: 12,
        title: "Kuchh Khatta Ho Jaye",
        description:
            "Pentaomnia conducted a movie promotion event for Guru Randhawa's movie 'Kuchh Khatta Ho Jaye' at LPU. The event brought together students and film enthusiasts, offering them an exclusive glimpse into the movie and its making.",
        startDateTime: "2024-9-17T10:00:00",
        endDateTime: "2024-9-17T15:00:00",
        location: "LPU",
        url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",

        src: Event12Image,
        color: "#BBACAF",
    },

    {
        id: 16,
        title: "Muscle Mania: Punjab’s Fitness Fiesta",
        description:
            "In *March 2024, Pentaomnia Private Limited championed the cause of health and fitness by hosting *Muscle Mania, an adrenaline-pumping event that attracted fitness enthusiasts from across Punjab. Over the course of a thrilling week, participants engaged in *15+ competitions* designed to test their strength, endurance, and athleticism. With lakhs worth of goodies distributed, this event truly celebrated the spirit of fitness and determination.",
        startDateTime: "2024-3-17T10:00:00",
        endDateTime: "2024-3-17T15:00:00",
        location: "LPU",
        url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",

        src: Event16Image,
        color: "#BBACAF",
    },
    
];