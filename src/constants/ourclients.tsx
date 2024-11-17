import { Facebook, Instagram, SlackIcon, Twitter, Youtube } from "lucide-react";





interface OurClients {
    id: number;
    name: string;
    logo: string | React.ReactNode;
}

export const CONST_CLIENTS_LIST: OurClients[] = [
    {
        id: 1,
        name: "Castrol Punjab",
        logo: <SlackIcon size={48} />,
    },
    {
        id: 2,
        name: "Fitness Edge",
        logo: <Instagram size={48} />,
    },
    {
        id: 3,
        name: "Coca Cola",
        logo: <Twitter size={48} />,
    },
    {
        id: 4,
        name: "Alephium",
        logo: <Facebook size={48} />,
    },
    {
        id: 5,
        name: "Harley",
        logo: <Youtube size={48} />,
    },
    {
        id: 6,
        name: "Kawasaki Bikes",
        logo: <SlackIcon size={48} />,
    },
    {
        id: 7,
        name: "Zillions of Tech",
        logo: <Instagram size={48} />,
    },
    {
        id: 8,
        name: "Jass Records",
        logo: <Twitter size={48} />,
    },
    {
        id: 9,
        name: "Kong Arm Wrestling",
        logo: <Facebook size={48} />,
    },
    {
        id: 10,
        name: "Gyanopedia",
        logo: <Youtube size={48} />,
    },
];