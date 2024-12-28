export const HomeWho: React.FC = () => {
    return (
        <section id='about' className='relative bg-gradient-to-r from-black to-primary bg-center py-12 md:py-24 lg:py-32'>
            <div className='absolute inset-0 '></div>

            <div className='container relative z-10 px-4 md:px-6'>
                <div className='flex flex-col-reverse items-center justify-between space-y-8 md:flex-row md:space-x-8 md:space-y-0'>
                    {/* Left Content */}
                    <div className='flex-1 text-center md:text-left'>
                        <h2 className='mb-4 text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                            Who We Are
                        </h2>
                        <p className='max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                            At Pentaomnia, we empower brands and elevate experiences through a
                            comprehensive suite of services, including corporate events, university
                            and college events, wedding planning, private functions, and product
                            launches. Our expertise extends to brand, product, and service
                            promotions, social media marketing, ad campaigns, SEO, web development,
                            graphics designing, content creation, video editing, and product shoots.
                            With a 360° approach, we seamlessly blend creativity and strategy to
                            deliver unforgettable events, engaging digital experiences, and
                            impactful marketing campaigns. We aim to build lasting partnerships that
                            drive brand value, foster meaningful connections, and set new benchmarks
                            of excellence. Choose Pentaomnia to transform your vision into reality
                            and unlock the full potential of your brand.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className='flex-1'>
                        <img
                            src='/images/shahidsir.jpg'
                            alt='Who We Are'
                            className='h-auto w-full rounded-lg shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
