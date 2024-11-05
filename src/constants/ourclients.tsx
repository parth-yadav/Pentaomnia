import { Facebook, Instagram, SlackIcon, Twitter, Youtube } from "lucide-react";

interface OurClients {
    id: number;
    name: string;
    logo: string | React.ReactNode;
}

export const CONST_CLIENTS_LIST: OurClients[] = [
    {
        id: 1,
        name: "TechCorp",
        logo: <SlackIcon size={48} />,
    },
    {
        id: 2,
        name: "FitLife",
        logo: <Instagram size={48} />,
    },
    {
        id: 3,
        name: "EduSolutions",
        logo: <Twitter size={48} />,
    },
    {
        id: 4,
        name: "CreativeMinds",
        logo: <Facebook size={48} />,
    },
    {
        id: 5,
        name: "InnovateCo",
        logo: <Youtube size={48} />,
    },
];
