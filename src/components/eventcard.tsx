"use client";

import React, { useRef } from "react";
import Link from 'next/link';

import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton";
import dayjs from "dayjs";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Calendar, Clock, MapPin } from 'lucide-react';
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { type Event } from "@/constants/events";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

interface BaseEventCardProps {
    className?: string;
    href: string;
    locationOnTop?: boolean;
    showDescription?: boolean;
    isPressable?: boolean;
    isDatevisible?: boolean;
    showRegisterButton?: boolean;
    truncateDescription?: boolean;
    
}

interface LoadingProps extends BaseEventCardProps {
    loading: true;
    event?: Event;
}

interface EventProps extends BaseEventCardProps {
    loading?: false;
    event: Event;
}

type EventCardProps = LoadingProps | EventProps;

const EventCard: React.FC<EventCardProps> = ({
    className,
    loading,
    event,
    locationOnTop = true,
    showDescription,
    isDatevisible = false,
    isPressable = false,
    showRegisterButton = false,
    truncateDescription = false,
    
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const RegisterButton: React.FC<{ className?: string; href: string }> = ({ className, href }) => (
        <a
            href={href}
            className={`${className} flex cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-secondary`}
            color='primary'
        >
            View
        </a>
    );

    const DetailsWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <div className={`flex items-center space-x-2 text-xs ${showDescription ? "ml-2" : ""}`}>
            {children}
        </div>
    );

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className={`relative flex h-full flex-col ${className}`}
        >
            {loading ? (
                <Card className={`col-span-12 h-[300px] w-full sm:col-span-5 ${className}`}>
                    <Skeleton className='h-full w-full' />
                </Card>
            ) : (
                <Link href={event.url} passHref legacyBehavior>
                    <Card
                        isPressable={isPressable}
                        className={`relative col-span-12 h-[300px] w-full transform overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 sm:col-span-5 ${className}`}
                    >
                        <div className='relative h-full w-full'>
                            <Image
                                src={event.src || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                className='object-cover'
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                priority={true}
                            />
                            <div className='absolute inset-0 z-10 bg-black opacity-30 transition-opacity duration-300 hover:opacity-50' />
                        </div>

                        <CardFooter className='absolute bottom-0 z-20 justify-between border-t border-gray-300 bg-white bg-opacity-90 p-4 backdrop-blur-md'>
                            <div className='flex flex-col space-y-2'>
                                <h4 className='text-left text-2xl font-semibold text-black'>
                                    {event.title}
                                </h4>
                                {showDescription && (
                                    <div className='text-md'>
                                        <div className='flex flex-col items-start gap-2'>
                                            <span>
                                                {truncateDescription
                                                    ? event.description.slice(0, 160) + "..."
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
                                                {showRegisterButton && <RegisterButton href={event.url} />}
                                            </DetailsWrapper>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardFooter>
                    </Card>
                </Link>
            )}
        </motion.div>
    );
};

export default EventCard;

