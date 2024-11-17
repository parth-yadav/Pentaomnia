import Image, { StaticImageData } from "next/image";

import AlephiumLogo from "../../public/images/logos/alpheum.png";
import CastrolLogo from "../../public/images/logos/castrol.png";
import CocaColaLogo from "../../public/images/logos/cocacola.png";
import FitnessEdgeLogo from "../../public/images/logos/fitnessedge.jpeg";
import GyanopediaLogo from "../../public/images/logos/gyanopedia.png";
import HarleyLogo from "../../public/images/logos/harley d.jpeg";
import JassRecordsLogo from "../../public/images/logos/JASS RECORDS.png";
import KawasakiLogo from "../../public/images/logos/download (1).png";
import KongLogo from "../../public/images/logos/kong.png";
import ZillionsLogo from "../../public/images/logos/zillionsoftech.jpg";

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