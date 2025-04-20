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
import RelianceMall from "../../public/images/logos/Logo-RelianceMall.png"
import Sbd from "../../public/images/logos/Screenshot_2025-02-26_185423-removebg-preview.png"
import Bbf from "../../public/images/logos/babafatehsinghji.png"
import Yuva from "../../public/images/logos/yuva.png"
import Dominos from "../../public/images/logos/dominos-logo-vector.png"

export interface OurClients {
    id: number;
    name: string;
    logo: string  | StaticImageData;
}

export const CONST_CLIENTS_LIST: OurClients[] = [
    {
        id: 3,
        name: "Castrol Punjab",
        logo: CastrolLogo,
    },
    {
        id: 6,
        name: "Fitness Edge",
        logo: FitnessEdgeLogo,
    },
    {
        id: 4,
        name: "Coca Cola",
        logo: CocaColaLogo,
    },
    {
        id: 9,
        name: "Alephium",
        logo: AlephiumLogo,
    },
    {
        id: 8,
        name: "Harley",
        logo: HarleyLogo,
    },
    {
        id: 7,
        name: "Kawasaki Bikes",
        logo: KawasakiLogo,
    },
    {
        id: 10,
        name: "Yuvaa",
        logo: Yuva,
    },
    {
        id: 1,
        name: "SBD India",
        logo: Sbd,
    },
    {
        id: 5,
        name: "Domino's",
        logo: Dominos,
    },
    {
        id: 2,
        name: "Reliance Mall",
        logo: RelianceMall,
    },
];

// Sort the array in ascending order by the `id` field
CONST_CLIENTS_LIST.sort((a, b) => a.id - b.id);

// Export the sorted array
export default CONST_CLIENTS_LIST;