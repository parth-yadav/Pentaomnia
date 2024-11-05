import { Building2 } from "lucide-react";
import Image from "next/image";

import Logo from "../../public/images/brand.png";

export const BrandIcon = (props: any) => {
    return <Image src={Logo} alt='Brand Logo' width={40} height={40} {...props} />;
};

export const BrandText = (props: any) => {
    return (
        <span {...props} className={`${props.className} mx-4 text-lg font-semibold`}>
            Pentaomnia
        </span>
    );
};
