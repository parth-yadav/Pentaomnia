import Link from "next/link";

import { Button } from "@/components/ui/button";

export const HomeGetInvolved: React.FC = () => {
    return (
        <section className='w-full bg-gradient-to-r from-black to-primary  py-8 text-white md:py-16 lg:py-24'>
            <div className='container px-4 md:px-6'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                            Your Success is Our Mission — Partner with Us Today
                        </h2>
                        <p className=' md:text-xl'>
                           Whether elevating your brand or organizing unforgettable events, our team is ready to bring your vision to life. Partner with us today and embark on a journey of creativity and success!
                        </p>
                    </div>
                    <Link href='/register' prefetch={false}>
                        <Button className='bg-accent text-white ' size='lg'>
                            Request Services Now
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
