;

// "use client";

// import { useEffect, useRef } from "react";

// import Image from "next/image";

// import { CONST_CLIENTS_LIST } from "@/constants/ourclients";

// export const HomePartners: React.FC = () => {
//     const scrollRef = useRef<HTMLUListElement>(null);

//     useEffect(() => {
//         const scrollContainer = scrollRef.current;
//         if (!scrollContainer) return;

//         let animationFrameId: number;
//         let scrollPosition = 0;

//         const scroll = () => {
//             scrollPosition += 0.5; // Adjust this value to change scroll speed
//             if (scrollPosition >= scrollContainer.scrollWidth / 2) {
//                 scrollPosition = 0;
//             }
//             scrollContainer.scrollLeft = scrollPosition;
//             animationFrameId = requestAnimationFrame(scroll);
//         };

//         scroll();

//         return () => {
//             if (animationFrameId) {
//                 cancelAnimationFrame(animationFrameId);
//             }
//         };
//     }, []);
//     return (
//         <section
//             id='partners'
//             className='w-full bg-gradient-to-r from-primary to-black py-12 md:py-24 lg:py-32'
//         >
//             <div className='container px-4 md:px-6'>
//                 <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
//                     Our Clients
//                 </h2>

//                 <div className='space-y-4 overflow-hidden px-4 py-8 text-center'>
//                     <p className='text-sm text-gray-200 md:text-base lg:text-lg xl:text-xl'>
//                         We collaborate with leading companies to bring you the best opportunities
//                         and experiences.
//                     </p>
//                     <div className='relative'>
//                         <div className='absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-primary to-transparent' />
//                         <div className='absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-black to-transparent' />
//                         <ul
//                             ref={scrollRef}
//                             className='flex w-full space-x-8 overflow-x-hidden py-4'
//                             style={{ WebkitOverflowScrolling: "touch" }}
//                         >
//                             {[...CONST_CLIENTS_LIST, ...CONST_CLIENTS_LIST].map((client, index) => (
//                                 <li
//                                     key={`${client.id}-${index}`}
//                                     className='flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md'
//                                 >
//                                     {typeof client.logo === "string" ? (
//                                         <Image
//                                             src={client.logo}
//                                             alt={client.name}
//                                             width={48}
//                                             height={48}
//                                             className='h-8 w-8 object-contain md:h-12 md:w-12'
//                                         />
//                                     ) : (
//                                         client.logo
//                                     )}
//                                     <span className='text-sm md:text-base'>{client.name}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>

//                 <div className='mt-12 space-y-4'>
//                     <h3 className='text-center text-2xl font-bold text-white'>
//                         What Our Partners Say
//                     </h3>
//                     <blockquote className='text-center italic text-gray-300'>
//                         &quot;Pentaomnia has been an incredible source of talent and innovation for
//                         our company. The students are passionate, skilled, and always bring fresh
//                         perspectives to our projects.&quot;
//                     </blockquote>
//                     <p className='text-center font-semibold text-gray-400'>
//                         - Jane Doe, CEO of TechCorp
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };
import { Facebook, Instagram, SlackIcon, Twitter, Youtube } from "lucide-react";












interface OurClients {
    id: number;
    name: string;
    logo: string | React.ReactNode;
}

const CONST_CLIENTS_LIST: OurClients[] = [
    {
        id: 1,
        name: "TechCorp",
        logo: <SlackIcon size={48} />,
    },
    {
        id: 2,
        name: "FitLife",
        logo: <Instagram size={48} />,
    },
    {
        id: 3,
        name: "EduSolutions",
        logo: <Twitter size={48} />,
    },
    {
        id: 4,
        name: "CreativeMinds",
        logo: <Facebook size={48} />,
    },
    {
        id: 5,
        name: "InnovateCo",
        logo: <Youtube size={48} />,
    },
    {
        id: 6,
        name: "TechCorp",
        logo: <SlackIcon size={48} />,
    },
    {
        id: 7,
        name: "FitLife",
        logo: <Instagram size={48} />,
    },
    {
        id: 8,
        name: "EduSolutions",
        logo: <Twitter size={48} />,
    },
    {
        id: 9,
        name: "CreativeMinds",
        logo: <Facebook size={48} />,
    },
    {
        id: 10,
        name: "InnovateCo",
        logo: <Youtube size={48} />,
    },
];

export const HomePartners: React.FC = () => {
    return (
        <div className='container mx-auto px-4 py-16'>
            <h2 className='mb-12 text-center text-3xl font-bold'>Our Clients</h2>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5'>
                {CONST_CLIENTS_LIST.slice(0, 12).map((client) => (
                    <div
                        key={client.id}
                        className='flex flex-col items-center  rounded-lg bg-white p-2 shadow-md transition-all duration-300 hover:shadow-lg'
                    
                    >
                        <div className='mb-4 text-primary'>{client.logo}</div>
                        <h3 className='text-center text-lg font-semibold'>{client.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};