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
import Event16Image from "../../public/images/eventimages/musclemania.jpg";
import Event5Image from "../../public/images/eventimages/arcana20.jpg";
import Event4Image from "../../public/images/eventimages/armwrestle.jpg";
import Event6Image from "../../public/images/eventimages/innovateex.jpg";
import Event12Image from "../../public/images/eventimages/kuch khatta hojaye.jpg";

export interface Event {
    id: number;
    name: string;
    description: string;
    startDateTime: string;
    endDateTime?: string;
    location: string;
    imageSrc: string | StaticImageData;
}

export const CONST_EVENTS: Event[] = [
    // {
    //     id: 1,
    //     name: "Friday Bliss",
    //     description:
    //         "On 30th August 2024, Pentaomnia Private Limited transformed the Lovely Professional University (LPU) campus into a lively hub of music and lights by inviting a renowned international DJ artist. The event, filled with electrifying beats and vibrant energy, brought students together for an unforgettable evening. This musical extravaganza not only entertained but also fostered a sense of community and engagement within the campus",
    //     startDateTime: "2024-10-20T12:00:00",
    //     endDateTime: "2024-8-30T14:00:00",
    //     location: "UniMall",
    //     imageSrc: Event1Image,
    // },
    // {
    //     id: 2,
    //     name: "Comic Junction",
    //     description:
    //         "Pentaomnia hosted the celebrated female comedian Ms. Gurleen Pannu on 20th October 2023 at Lovely Professional University. The event was a roaring success, with the audience erupting in laughter and thoroughly enjoying her hilarious performance. It was a memorable evening that highlighted the power of humor to bring people together and relieve stress.",
    //     startDateTime: "2024-10-22T15:00:00",
    //     endDateTime: "2024-10-20T17:00:00",
    //     location: "LPU",
    //     imageSrc: Event2Image,
    // },
    {
        id: 3,
        name: "Alephium Workshop",
        description:
            "On 31st August 2024, Pentaomnia introduced a cutting-edge Web3 Technology workshop and training session conducted by Alephium officials at LPU. The workshop provided students with hands-on experience in blockchain technology, equipping them with skills that are highly relevant in the evolving tech industry. The event marked a significant step towards bridging the gap between academic learning and industry demands.",
        startDateTime: "2024-10-25T18:00:00",
        endDateTime: "2024-8-31T20:00:00",
        location: "LPU",
        imageSrc: Event3Image,
    },
    {
        id: 4,
        name: "Arm Wrestling Championship 3.0",
        description:
            "Held on 16th and 17th September 2024, the Arm Wrestling Championship 3.0 brought together over 300 participants from across India to compete in this national-level event at LPU. The fierce competition showcased remarkable strength, determination, and sportsmanship, culminating in the crowning of the 'Champion of Champions.' The event drew a large audience and elevated the profile of arm wrestling as a competitive sport.",
        startDateTime: "2024-9-16T19:00:00",
        endDateTime: "2024-9-17T21:00:00",
        location: "LPU",
        imageSrc: Event4Image,
    },
    {
        id: 5,
        name: "Arcana 2.0",
        description:
            "From *12th to 14th November 2024, Pentaomnia Private Limited orchestrated *Arcana 2.0, a *National Level Quiz Competition* that brought together talented students from across the country. Competing fiercely to showcase their intellect and skills, participants vied for coveted certificates and exciting goodies. The event fostered healthy competition, celebrated knowledge, and left an indelible mark of excellence.",
        startDateTime: "2024-11-12T18:00:00",
        endDateTime: "2024-11-14T21:00:00",
        location: "LPU",
        imageSrc: Event5Image,
    },
    {
        id: 6,
        name: "InnovateX",
        description:
            "InnovateX, a 24-hour hackathon held on 30th and 31st March 2024, challenged participants to innovate and develop impactful projects. The event concluded with the selection of three exceptional participants who earned placement offers with ZillionsofTech. InnovateX highlighted the creative and problem-solving capabilities of the students while offering them a pathway to professional success.",
        startDateTime: "2024-3-30T19:00:00",
        endDateTime: "2024-3-31T22:00:00",
        location: "LPU",
        imageSrc: Event6Image,
    },
    // {
    //     id: 7,
    //     name: "Flaming Friday",
    //     description:
    //         "On 17th September 2022, Pentaomnia organized Flaming Friday, an electrifying EDM festival featuring a Wonderland DJ artist. The event attracted a massive crowd of over 10,000 attendees who reveled in the energetic music and vibrant atmosphere. It was a landmark event that underscored the cultural vibrancy and engagement potential of campus life.",
    //     startDateTime: "2024-8-17T10:00:00",
    //     endDateTime: "2024-8-17T15:00:00",
    //     location: "LPU",
    //     imageSrc: Event7Image,
    // },

    // {
    //     id: 9,
    //     name: "Salesforce Nexus",
    //     description:
    //         "Pentaomnia hosted Salesforce officials on 13th September 2024 at LPU for a hands-on training session. The workshop focused on live projects, allowing students to gain practical exposure to Salesforce technologies. This initiative empowered students with valuable skills and insights, preparing them for careers in the ever-evolving tech industry.",
    //     startDateTime: "2024-8-10T10:00:00",
    //     endDateTime: "2024-8-10T15:00:00",
    //     location: "LPU",
    //     imageSrc: Event9Image,
    // },
    // {
    //     id: 10,
    //     name: "Jahankilla Movie Promotion",
    //     description:
    //         "On 30th August 2024, Pentaomnia successfully promoted the Punjabi movie 'Jahankilla' at LPU. The event created significant buzz and played a key role in the movie's worldwide success. Students and attendees got a unique opportunity to engage with the cast and crew, making it a memorable experience.",
    //     startDateTime: "2024-8-30T10:00:00",
    //     endDateTime: "2024-8-30T15:00:00",
    //     location: "LPU",
    //     imageSrc: Event10Image,
    // },
    // {
    //     id: 11,
    //     name: "Mauja Hi Mauja",
    //     description:
    //         "On 17th October 2024, Pentaomnia organized a movie promotion event for Gippy Grewal's latest release at LPU. The event created excitement and engagement among students, further enhancing the movie's visibility and reach among the youth",
    //     startDateTime: "2024-9-17T10:00:00",
    //     endDateTime: "2024-9-17T15:00:00",
    //     location: "LPU",
    //     imageSrc: Event11Image,
    // },
    {
        id: 12,
        name: "Kuchh Khatta Ho Jaye",
        description:
            "Pentaomnia conducted a movie promotion event for Guru Randhawa's movie 'Kuchh Khatta Ho Jaye' at LPU. The event brought together students and film enthusiasts, offering them an exclusive glimpse into the movie and its making.",
        startDateTime: "2024-9-17T10:00:00",
        endDateTime: "2024-9-17T15:00:00",
        location: "LPU",
        imageSrc: Event12Image,
    },
    // {
    //     id: 13,
    //     name: "Wonderland Trip",
    //     description:
    //         "On 10th August 2024, Pentaomnia organized a fun-cum-educational trip to Wonderland, Jalandhar. The trip was filled with joy, water activities, and adventure, culminating in a vibrant party. It provided students with a much-needed break and an opportunity to bond in an exciting environment.",
    //     startDateTime: "2024-8-10T10:00:00",
    //     endDateTime: "2024-8-10T15:00:00",
    //     location: "WonderLand Jalandhar",
    //     imageSrc: Event13Image,
    // },
    // {
    //     id: 14,
    //     name: "Tableau Workshop",
    //     description:
    //         "In 2019, Pentaomnia brought trainers from an international company to LPU for a Tableau Workshop. The session involved live project training, equipping students with data visualization and analytical tools. The workshop was a stepping stone for students looking to excel in the field of data analytics.",
    //     startDateTime: "2019-8-10T10:00:00",
    //     endDateTime: "2019-8-10T15:00:00",
    //     location: "LPU",
    //     imageSrc: Event14Image,
    // },
    // {
    //     id: 15,
    //     name: "Pentaomnia Film Festival",
    //     description:
    //         "The Pentaomnia Film Festival showcased over 50 short films, recognizing outstanding contributions across multiple categories. The event celebrated creativity and storytelling, providing filmmakers with a platform to share their work with a wider audience.",
    //     startDateTime: "2024-9-17T10:00:00",
    //     endDateTime: "2024-9-17T15:00:00",
    //     location: "LPU",
    //     imageSrc: Event15Image,
    // },
    // {
    //     id: 16,
    //     name: "Pentaomnia Literature Festival",
    //     description:
    //         "The Pentaomnia Literature Festival brought together literature lovers from around the world at LPU. This event celebrated the beauty of words and ideas, offering a platform for participants to express themselves and connect with like-minded individuals.",
    //     startDateTime: "2024-9-17T10:00:00",
    //     endDateTime: "2024-9-17T15:00:00",
    //     location: "LPU",
    //     imageSrc: Event16Image,
    // },
    {
        id: 16,
        name: "Muscle Mania: Punjab’s Fitness Fiesta",
        description:
            "In *March 2024, Pentaomnia Private Limited championed the cause of health and fitness by hosting *Muscle Mania, an adrenaline-pumping event that attracted fitness enthusiasts from across Punjab. Over the course of a thrilling week, participants engaged in *15+ competitions* designed to test their strength, endurance, and athleticism. With lakhs worth of goodies distributed, this event truly celebrated the spirit of fitness and determination.",
        startDateTime: "2024-3-17T10:00:00",
        endDateTime: "2024-3-17T15:00:00",
        location: "LPU",
        imageSrc: Event16Image,
    },
];
