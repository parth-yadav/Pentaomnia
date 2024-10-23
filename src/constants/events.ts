export interface Event {
    id: number;
    name: string;
    description: string;
    startDateTime: string;
    endDateTime?: string;
    location: string;
    imageSrc?: string;
}

export const CONST_EVENTS: Event[] = [
    {
        id: 1,
        name: "Fall Fest Carnival",
        description:
            "Join us for a day of fun, games, and food at the annual Fall Fest Carnival! Enjoy live music, food trucks, and various activities.",
        startDateTime: "2024-10-20T12:00:00",
        endDateTime: "2024-10-20T14:00:00",
        location: "UniMall",
        imageSrc: "https://picsum.photos/1000?random=1",
    },
    {
        id: 2,
        name: "Guest Lecture: Innovations in Technology",
        description:
            "A renowned tech entrepreneur will discuss the latest innovations in technology and their impact on society. Don't miss this opportunity!",
        startDateTime: "2024-10-22T15:00:00",
        endDateTime: "2024-10-23T17:00:00",
        location: "UniPolis",
        imageSrc: "https://picsum.photos/1000?random=2",
    },
    {
        id: 3,
        name: "Midterm Study Marathon",
        description:
            "Join us for a collaborative study session to prepare for midterms! Snacks and coffee will be provided.",
        startDateTime: "2024-10-25T18:00:00",
        endDateTime: "2024-10-25T20:00:00",
        location: "Block 6, Room 9",
        imageSrc: "https://picsum.photos/1000?random=3",
    },
    {
        id: 4,
        name: "Open Mic Night",
        description:
            "Showcase your talent at Open Mic Night! Musicians, poets, and performers are welcome to share their work. Sign up at the door.",
        startDateTime: "2024-10-27T19:00:00",
        endDateTime: "2024-10-27T21:00:00",
        location: "SDM Auditorium",
        imageSrc: "https://picsum.photos/1000?random=4",
    },
    {
        id: 5,
        name: "Halloween Costume Contest",
        description:
            "Get ready for a spooktacular evening! Dress in your best costume for a chance to win amazing prizes. Enjoy haunted activities and treats!",
        startDateTime: "2024-10-31T18:00:00",
        endDateTime: "2024-10-31T21:00:00",
        location: "UniPolis",
        imageSrc: "https://picsum.photos/1000?random=5",
    },
    {
        id: 6,
        name: "Film Screening: Cult Classics",
        description:
            "Join us for a night of cult classic films! Enjoy popcorn and discussions about the movies after each screening.",
        startDateTime: "2024-11-03T19:00:00",
        endDateTime: "2024-11-03T22:00:00",
        location: "Cinema 5",
        imageSrc: "https://picsum.photos/1000?random=6",
    },
    {
        id: 7,
        name: "Wellness Workshop: Mindfulness and Meditation",
        description:
            "Learn techniques for mindfulness and meditation to improve your mental well-being. Open to all skill levels.",
        startDateTime: "2024-11-05T16:00:00",
        endDateTime: "2024-11-05T18:00:00",
        location: "Wellness Center",
        imageSrc: "https://picsum.photos/1000?random=7",
    },
    {
        id: 8,
        name: "Career Fair 2024",
        description:
            "Connect with employers and explore internship and job opportunities. Bring your resumes and network with industry professionals.",
        startDateTime: "2024-11-10T10:00:00",
        endDateTime: "2024-11-10T15:00:00",
        location: "Expo Hall",
        imageSrc: "https://picsum.photos/1000?random=8",
    },
];
