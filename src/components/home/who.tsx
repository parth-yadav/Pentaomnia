export const HomeWho: React.FC = () => {
    return (
        <section id='about' className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                            Who We Are
                        </h2>
                        <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                            Pentaomnia is a dynamic college club dedicated to fostering innovation,
                            leadership, and professional growth among students. We provide a
                            platform for networking, skill development, and real-world experience
                            through diverse events and partnerships.
                        </p>
                    </div>
                    {/* <Button>Learn More</Button> */}
                </div>
            </div>
        </section>
    );
};
