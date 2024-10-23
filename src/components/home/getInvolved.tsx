import Link from "next/link";

import { Button } from "@/components/ui/button";

export const HomeGetInvolved: React.FC = () => {
    return (
        <section className='w-full bg-gradient-to-r from-gray-500 to-teal-700 py-8 text-white md:py-16 lg:py-24'>
            <div className='container px-4 md:px-6'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                            Get Involved!
                        </h2>
                        <p className='max-w-[600px] md:text-xl'>
                            Join Pentaomnia today and unlock a world of opportunities. Connect with
                            like-minded students, participate in exciting events, and boost your
                            career prospects.
                        </p>
                    </div>
                    <Link href='/register' prefetch={false}>
                        <Button variant='secondary' size='lg'>
                            Become a Member
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
