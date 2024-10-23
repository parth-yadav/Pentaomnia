export const HomePartners: React.FC = () => {
    return (
        <section id='partners' className='w-full bg-gray-100 py-12 md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter sm:text-5xl'>
                    Our Partners
                </h2>
                <div className='space-y-4 text-center'>
                    <p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                        We collaborate with leading companies to bring you the best opportunities
                        and experiences.
                    </p>
                    <ul className='mt-8 flex flex-wrap justify-center gap-8'>
                        {["TechCorp", "FitLife", "EduSolutions", "CreativeMinds", "InnovateCo"].map(
                            (partner) => (
                                <li
                                    key={partner}
                                    className='flex h-20 w-40 items-center justify-center rounded-lg bg-white shadow'
                                >
                                    {partner}
                                </li>
                            ),
                        )}
                    </ul>
                </div>
                <div className='mt-12 space-y-4'>
                    <h3 className='text-center text-2xl font-bold'>What Our Partners Say</h3>
                    <blockquote className='text-center italic text-gray-500'>
                        &quot;Pentaomnia has been an incredible source of talent and innovation for
                        our company. The students are passionate, skilled, and always bring fresh
                        perspectives to our projects.&quot;
                    </blockquote>
                    <p className='text-center font-semibold'>- Jane Doe, CEO of TechCorp</p>
                </div>
            </div>
        </section>
    );
};
