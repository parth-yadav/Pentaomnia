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
            name: "Tech Gadgets",
            description: "Get the latest tech gadgets at discounted prices.",
            icon: "💻",
        },
        {
            name: "Fashion Items",
            description: "Upgrade your wardrobe with stylish fashion items.",
            icon: "👗",
        },
        {
            name: "Study Materials",
            description: "Stock up on study materials for your courses.",
            icon: "📚",
        },
        {
            name: "Fitness Gear",
            description: "Stay active with discounted fitness gear and equipment.",
            icon: "🏋️",
        },
    ];

    const socialPromotions: Promotions[] = [
        {
            name: "Instagram Challenge",
            description: "Share your Pentaomnia experience and win prizes!",
            icon: <InstagramIcon size={24} />,
        },
        {
            name: "YouTube Series",
            description: "Watch our latest videos on student success stories.",
            icon: <YoutubeIcon size={24} />,
        },
    ];

    return (
        <section id='promotions' className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl'>
                    Explore Our Promotions
                </h2>
                <div className='grid gap-6 lg:grid-cols-2'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Product Promotions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='grid gap-4 sm:grid-cols-2'>
                                {productPromotions.map((item, index) => (
                                    <div key={index} className='flex items-center space-x-4'>
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColors[index % iconBgColors.length]}`}
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
                    <Card>
                        <CardHeader>
                            <CardTitle>Social Media Promotions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-4'>
                                {socialPromotions.map((item, index) => (
                                    <div key={index} className='flex items-center space-x-4'>
                                        <div
                                            className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColors[index % iconBgColors.length]}`}
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
                </div>
            </div>
        </section>
    );
};
