import {
    BuildingIcon,
    CameraIcon,
    CodeIcon,
    GraduationCapIcon,
    InstagramIcon,
    MonitorIcon,
    PaletteIcon,
    PartyPopperIcon,
    PenToolIcon,
    RocketIcon,
    ShoppingBagIcon,
    SpeakerIcon,
    YoutubeIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HomePromotions: React.FC = () => {
    const iconBgColors = ["bg-accent"];
    interface Promotions {
        name: string;
        description: string;
        icon: React.ReactNode;
    }
    const productPromotions: Promotions[] = [
        {
            name: "Social Media Marketing",
            description: "Boost your online presence with targeted campaigns.",
            icon: <InstagramIcon size={24} />,
        },
        {
            name: "Web Development & Design",
            description: "Create stunning and functional websites.",
            icon: <MonitorIcon size={24} />,
        },
        {
            name: "Ads Campaign Management",
            description: "Optimize your ad spend with expert management.",
            icon: <SpeakerIcon size={24} />,
        },
        {
            name: "Product Shoots & Visual Content Creation",
            description: "Capture your products in the best light.",
            icon: <CameraIcon size={24} />,
        },
        {
            name: "Branding & Identity Development",
            description: "Establish a strong and memorable brand identity.",
            icon: <PaletteIcon size={24} />,
        },
    ];

    const socialPromotions: Promotions[] = [
        {
            name: "Corporate Events",
            description: "Organize professional and impactful corporate gatherings.",
            icon: <BuildingIcon size={24} />,
        },
        {
            name: "University & College Events",
            description: "Create memorable experiences for academic institutions.",
            icon: <GraduationCapIcon size={24} />,
        },
        {
            name: "Product/Service Branding & Promotion Events",
            description: "Showcase your offerings with tailored events.",
            icon: <ShoppingBagIcon size={24} />,
        },
        {
            name: "Product Launches",
            description: "Make a splash with exciting product launch events.",
            icon: <RocketIcon size={24} />,
        },
        {
            name: "Technical Events & Workshops",
            description: "Facilitate learning and networking in tech-focused events.",
            icon: <CodeIcon size={24} />,
        },
        {
            name: "Private Functions & Celebrations",
            description: "Create unforgettable moments for personal milestones.",
            icon: <PartyPopperIcon size={24} />,
        },
    ];

    return (
        <section id='promotions' className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl'>
                    Our Services
                </h2>
                <div className='grid gap-6 lg:grid-cols-2'>
                    <Card className='shadow-lg shadow-primary'>
                        <CardHeader>
                            <CardTitle className='flex items-center justify-center'>
                                360° Marketing Agency
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='grid gap-4 sm:grid-cols-2'>
                                {productPromotions.map((item, index) => (
                                    <div key={index} className='flex items-center space-x-4'>
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-full p-3 ${iconBgColors[index % iconBgColors.length]}`}
                                        >
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>{item.name}</h3>
                                            <p className='text-sm text-gray-400'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='shadow-lg shadow-primary'>
                        <CardHeader className='flex items-center justify-center'>
                            <CardTitle>Event Management Services Provider</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='grid gap-4 sm:grid-cols-2'>
                                {socialPromotions.map((item, index) => (
                                    <div key={index} className='flex items-center space-x-4'>
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-full p-3 ${iconBgColors[index % iconBgColors.length]}`}
                                        >
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>{item.name}</h3>
                                            <p className='text-sm text-gray-400'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
