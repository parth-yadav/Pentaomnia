import Image, { StaticImageData } from "next/image";

import AlephiumLogo from "../../public/images/eventimages/alpheum.jpg";
import CastrolLogo from "../../public/images/eventimages/alpheum.jpg";
import CocaColaLogo from "../../public/images/eventimages/alpheum.jpg";
import FitnessEdgeLogo from "../../public/images/eventimages/alpheum.jpg";
import GyanopediaLogo from "../../public/images/eventimages/alpheum.jpg";
import HarleyLogo from "../../public/images/eventimages/alpheum.jpg";
import JassRecordsLogo from "../../public/images/eventimages/alpheum.jpg";
import KawasakiLogo from "../../public/images/eventimages/alpheum.jpg";
import KongLogo from "../../public/images/eventimages/alpheum.jpg";
import ZillionsLogo from "../../public/images/eventimages/alpheum.jpg";

export interface OurClients {
    id: number;
    name: string;
    logo: string  | StaticImageData;
}

export const CONST_CLIENTS_LIST: OurClients[] = [
    {
        id: 1,
        name: "Castrol Punjab",
        logo: CastrolLogo,
    },
    {
        id: 2,
        name: "Fitness Edge",
        logo: FitnessEdgeLogo,
    },
    {
        id: 3,
        name: "Coca Cola",
        logo: CocaColaLogo,
    },
    {
        id: 4,
        name: "Alephium",
        logo: AlephiumLogo,
    },
    {
        id: 5,
        name: "Harley",
        logo: HarleyLogo,
    },
    {
        id: 6,
        name: "Kawasaki Bikes",
        logo: KawasakiLogo,
    },
    {
        id: 7,
        name: "Zillions of Tech",
        logo: ZillionsLogo,
    },
    {
        id: 8,
        name: "Jass Records",
        logo: JassRecordsLogo,
    },
    {
        id: 9,
        name: "Kong Arm Wrestling",
        logo: KongLogo,
    },
    {
        id: 10,
        name: "Gyanopedia",
        logo: GyanopediaLogo,
    },
];