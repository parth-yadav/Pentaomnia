export const HomeWho: React.FC = () => {
    return (
        <section
            id='about'
            className='relative bg-center py-12 md:py-24 lg:py-32'
            style={{ backgroundImage: `url('/images/2.jpg')` }}
        >
            <div className='absolute inset-0 bg-black/30 backdrop-blur-lg'></div>{" "}
            {/* Blurred overlay */}
            <div className='container relative z-10 px-4 md:px-6'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                            Who We Are
                        </h2>
                        <p className='max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                            At Pentaomnia, we empower brands through events and digital marketing.
                            We offer comprehensive services like event planning, promotions, and
                            creative solutions to elevate experiences and drive lasting
                            partnerships.
                        </p>
                    </div>
                    {/* <Button>Learn More</Button> */}
                </div>
            </div>
        </section>
    );
};
