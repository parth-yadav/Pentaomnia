import { Building2 } from "lucide-react";

export const BrandIcon = (props: any) => {
    return <Building2 {...props} />;
};

export const BrandText = (props: any) => {
    return (
        <span {...props} className={`${props.className} mx-4 text-lg font-semibold`}>
            Pentaomnia
        </span>
    );
};
