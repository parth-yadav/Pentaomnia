export const HomeWho: React.FC = () => {
    return (
        <section
            id='about'
            className='relative bg-center py-12 md:py-24 lg:py-32'
            style={{ backgroundImage: `url('/images/2.jpg')` }}
        >
            <div className='absolute inset-0 bg-black/40 backdrop-blur-lg'></div>{" "}
            {/* Blurred overlay */}
            <div className='container relative z-10 px-4 md:px-6'>
                <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                    <div className='space-y-2'>
                        <h2 className='text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                            Who We Are
                        </h2>
                        <p className='max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                            At Pentaomnia, we empower brands and elevate experiences through a comprehensive suite of services, including corporate events, university and college events, wedding planning, private functions, and product launches. Our expertise extends to brand, product, and service promotions, social media marketing, ad campaigns, SEO, web development, graphics designing, content creation, video editing, and product shoots. With a 360° approach, we seamlessly blend creativity and strategy to deliver unforgettable events, engaging digital experiences, and impactful marketing campaigns. We aim to build lasting partnerships that drive brand value, foster meaningful connections, and set new benchmarks of excellence. Choose Pentaomnia to transform your vision into reality and unlock the full potential of your brand.
                        </p>
                    </div>
                    {/* <Button>Learn More</Button> */}
                </div>
            </div>
        </section>
    );
};
