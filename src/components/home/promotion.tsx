import { InstagramIcon, YoutubeIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HomePromotions: React.FC = () => {
    const iconBgColors = ["bg-blue-400", "bg-pink-400", "bg-red-400", "bg-orange-400"];
    interface Promotions {
        name: string;
        description: string;
        icon: string | React.ReactNode;
    }
    const productPromotions: Promotions[] = [
        {
            name: "Social Media Marketing",
            description: "Get the latest tech gadgets at discounted prices.",
            icon: "💻",
        },
        {
            name: "Web Development & Design",
            description: "Upgrade your wardrobe with stylish fashion items.",
            icon: "👗",
        },
        {
            name: "Ads Campaign Management",
            description: "Stock up on study materials for your courses.",
            icon: "📚",
        },
        {
            name: "Product Shoots & Visual Content Creation",
            description: "Stay active with discounted fitness gear and equipment.",
            icon: "🏋️",
        },
        {
            name: "Branding & Identity Development",
            description: "Stay active with discounted fitness gear and equipment.",
            icon: "🏋️",
        },
    ];

    const socialPromotions: Promotions[] = [
        {
            name: "Corporate Events",
            description: "Share your Pentaomnia experience and win prizes!",
            icon: <InstagramIcon size={24} />,
        },
        {
            name: "University & College Events",
            description: "Watch our latest videos on student success stories.",
            icon: <YoutubeIcon size={24} />,
        },
        {
            name: "Product/Service Branding & Promotion Events",
            description: "Watch our latest videos on student success stories.",
            icon: <YoutubeIcon size={24} />,
        },
        {
            name: "Product Launches",
            description: "Watch our latest videos on student success stories.",
            icon: <YoutubeIcon size={24} />,
        },
        {
            name: "Technical Events & Workshops",
            description: "Watch our latest videos on student success stories.",
            icon: <YoutubeIcon size={24} />,
        },
        {
            name: "Private Functions & Celebrations",
            description: "Watch our latest videos on student success stories.",
            icon: <YoutubeIcon size={24} />,
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
                                {socialPromotions.map((item, index) => (
                                    <div key={index} className='flex items-center space-x-4'>
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-full p-3 ${iconBgColors[index % iconBgColors.length]}`}
                                        >
                                            {typeof item.icon === "string" ? (
                                                <span className='text-2xl'>{item.icon}</span>
                                            ) : (
                                                item.icon
                                            )}
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
                                {productPromotions.map((item, index) => (
                                    <div key={index} className='flex items-center space-x-4'>
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-full p-3 ${iconBgColors[index % iconBgColors.length]}`}
                                        >
                                            {typeof item.icon === "string" ? (
                                                <span className='text-2xl'>{item.icon}</span>
                                            ) : (
                                                item.icon
                                            )}
                                        </div>
                                        <div>
                                            <h3 className='font-semibold'>{item.name}</h3>
                                            <p className='text-sm text-gray-400'>
                                                Special student discounts available!
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
