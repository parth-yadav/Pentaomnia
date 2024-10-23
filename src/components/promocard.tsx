import { Skeleton } from "@nextui-org/skeleton";
import dayjs from "dayjs";
import { Clock, DollarSign, IndianRupee, Percent, Tag } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { type Promotion } from "@/constants/promotions";

interface BasePromoCardProps {
    className?: string;
    clickCallback?: () => void;
    isPressable?: boolean;
}

interface LoadingProps extends BasePromoCardProps {
    loading: true;
    promo?: Promotion;
}

interface PromoProps extends BasePromoCardProps {
    loading?: false;
    promo: Promotion;
}

type PromoCardProps = LoadingProps | PromoProps;

export const PromoCard: React.FC<PromoCardProps> = ({
    promo,
    loading,
    className,
    clickCallback,
}) => {
    return (
        <div className={`relative flex h-full flex-col ${className}`}>
            {loading ? (
                <Card
                    // isFooterBlurred
                    className={`col-span-12 h-[300px] w-full sm:col-span-5 ${className}`}
                >
                    <Skeleton className='h-full w-full' />
                </Card>
            ) : (
                <Card key={promo.id} className='flex flex-col'>
                    <CardHeader>
                        <Image
                            src={promo.imageSrc}
                            alt={promo.title}
                            width={200}
                            height={200}
                            className='h-48 w-full rounded-t-lg object-cover'
                        />
                    </CardHeader>
                    <CardContent className='flex-grow'>
                        <CardTitle>{promo.title}</CardTitle>
                        <CardDescription className='mt-2'>{promo.description}</CardDescription>
                        <div className='mt-4 space-y-2'>
                            <div className='flex items-center text-sm'>
                                <Tag className='mr-2 h-4 w-4' />
                                <span>{promo.category}</span>
                            </div>
                            <div className='flex items-center text-sm'>
                                <Percent className='mr-2 h-4 w-4' />
                                <span>{promo.discountPercentage}% Off</span>
                            </div>
                            <div className='flex items-center text-sm'>
                                {promo.currency === "INR" ? (
                                    <DollarSign className='mr-2 h-4 w-4' />
                                ) : (
                                    <IndianRupee className='mr-2 h-4 w-4' />
                                )}
                                <span className='line-through'>
                                    {promo.originalPrice.toFixed(2)}
                                </span>
                                <span className='ml-2'>
                                    {(
                                        promo.originalPrice *
                                        (1 - promo.discountPercentage / 100)
                                    ).toFixed(2)}
                                </span>
                            </div>
                            <div className='flex items-center text-sm'>
                                <Clock className='mr-2 h-4 w-4' />
                                <span>Ends: {dayjs(promo.endDate).format("MMM D, YYYY")}</span>
                            </div>
                        </div>
                        <Badge variant='secondary' className='mt-4'>
                            {promo.partnerName}
                        </Badge>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>Claim Offer</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};
