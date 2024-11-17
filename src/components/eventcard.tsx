import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton";
import dayjs from "dayjs";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { type Event } from "@/constants/events";

interface BaseEventCardProps {
    className?: string;
    clickCallback?: () => void;
    locationOnTop?: boolean;
    showDescription?: boolean;
    isPressable?: boolean;
    isDatevisible?: boolean;
    showRegisterButton?: boolean;
    truncateDescription?: boolean;
}

// When loading is provided, event is optional
interface LoadingProps extends BaseEventCardProps {
    loading: true;
    event?: Event; // Optional when loading is true
}

// When loading is not provided, event is required
interface EventProps extends BaseEventCardProps {
    loading?: false; // loading is optional and false by default
    event: Event; // Required when loading is false
}

// Combined type
type EventCardProps = LoadingProps | EventProps;

const EventCard: React.FC<EventCardProps> = ({
    // description,
    className,
    loading,
    event,
    clickCallback,
    locationOnTop = true,
    showDescription,
    isDatevisible = false,
    isPressable = false,
    showRegisterButton = false,
    truncateDescription = false,
}) => {
    const RegisterButton: React.FC<{ className?: string }> = ({ className }) => (
        <div
            className={`${className} flex cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-secondary`}
            color='primary'
        >
            View
        </div>
    );

    const DetailsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <div className={`flex items-center space-x-2 text-xs ${showDescription ? "ml-2" : ""}`}>
            {children}
        </div>
    );

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
                <Card
                    isPressable={isPressable}
                    onPress={() => clickCallback && clickCallback()}
                    className={`relative col-span-12 h-[300px] w-full transform overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 sm:col-span-5 ${className}`}
                >
                    <CardHeader className='absolute top-4 z-20 flex-col items-start'>
                        {locationOnTop && (
                            <div className='text-tiny font-bold text-white/70'>
                                <Badge
                                    variant='default'
                                    className='rounded-full bg-gray-800 bg-opacity-70 p-2'
                                >
                                    <p className='flex items-center gap-1'>
                                        <MapPin size={16} />
                                        {event.location}
                                    </p>
                                </Badge>
                            </div>
                        )}
                    </CardHeader>

                    <div className='relative h-full w-full'>
                        <Image
                            src={event.imageSrc}
                            alt={event.name}
                            fill
                            className='object-cover' // Changed from object-contain to object-cover
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            priority={true} // Optional: for important images above the fold
                        />
                        <div className='absolute inset-0 z-10 bg-black opacity-30 transition-opacity duration-300 hover:opacity-50' />
                    </div>

                    <CardFooter className='absolute bottom-0 z-20 justify-between border-t border-gray-300 bg-white bg-opacity-90 p-4 backdrop-blur-md'>
                        <div className='flex flex-col space-y-2'>
                            <h4 className='text-left text-2xl font-semibold text-black'>
                                {event.name}
                            </h4>
                            {showDescription && (
                                <div className='text-md'>
                                    <div className='flex flex-col items-start gap-2'>
                                        <span>
                                            {truncateDescription
                                                ? event.description.slice(0, 86) + "..."
                                                : event.description}
                                        </span>
                                    </div>
                                    <Divider className='my-3' />
                                </div>
                            )}
                            {!locationOnTop && (
                                <div className='flex justify-between'>
                                    <div className='space-y-2'>
                                        {!locationOnTop && (
                                            <DetailsWrapper>
                                                <p className='flex items-center space-x-2'>
                                                    <MapPin size={16} />
                                                    <span>{event.location}</span>
                                                </p>
                                            </DetailsWrapper>
                                        )}
                                        <DetailsWrapper>
                                            <Calendar className='h-4 w-4 text-gray-600' />
                                            <span className='text-gray-700'>
                                                {dayjs(event.startDateTime).format("MMM D, YYYY")}
                                            </span>
                                            {dayjs(event.startDateTime).format("MMM D, YYYY") !==
                                                dayjs(event.endDateTime).format("MMM D, YYYY") && (
                                                <span className='text-gray-500'>
                                                    -{" "}
                                                    {dayjs(event.endDateTime).format("MMM D, YYYY")}
                                                </span>
                                            )}
                                        </DetailsWrapper>
                                        <DetailsWrapper>
                                            <Clock className='h-4 w-4 text-gray-600' />
                                            <span className='text-gray-700'>
                                                {dayjs(event.startDateTime).format("h:mm A")}
                                            </span>
                                            {dayjs(event.startDateTime).format("h:mm A") !==
                                                dayjs(event.endDateTime).format("h:mm A") && (
                                                <span className='text-gray-500'>
                                                    - {dayjs(event.endDateTime).format("h:mm A")}
                                                </span>
                                            )}
                                        </DetailsWrapper>
                                    </div>
                                    <div>
                                        <DetailsWrapper>
                                            {showRegisterButton && <RegisterButton />}
                                        </DetailsWrapper>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default EventCard;
