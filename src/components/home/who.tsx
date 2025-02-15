import InfiniteScroll from "./infintescroll/components_InfiniteScroll";

export const HomeWho: React.FC = () => {
    return (
        <section
            id="about"
            className="relative bg-gradient-to-r from-black to-primary bg-center pt-12 pb-12 md:pt-24 lg:pt-16"
        >
            {/* Gradient Background Effects */}
            <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-gradient-to-r from-accent via-yellow-200 to-transparent opacity-30"></div>
            <div className="absolute top-2/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 via-teal-200 to-transparent opacity-20"></div>
            <div className="absolute top-1/2 left-2/3 w-72 h-72 rounded-full bg-gradient-to-r from-black via-teal-500 to-transparent opacity-25"></div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-x-8 md:space-y-0">
                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="mb-4 text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                            Who We Are
                        </h2>
                        <p className="max-w-[900px] text-gray-200 md:text-xl lg:text-lg xl:text-xl">
                            At Pentaomnia, we empower brands and elevate experiences through a
                            comprehensive suite of services, including corporate events, university
                            and college events, wedding planning, private functions, and product
                            launches. Our expertise extends to brand, product, and service
                            promotions, social media marketing, ad campaigns, SEO, web development,
                            graphics designing, content creation, video editing, and product shoots.
                            With a 360° approach, we seamlessly blend creativity and strategy to
                            deliver unforgettable events, engaging digital experiences, and impactful
                            marketing campaigns. Choose Pentaomnia to transform your vision into
                            reality and unlock the full potential of your brand.
                        </p>
                    </div>

                  {/* Right Image */}
<div className="flex-1">
    <img
        src="/images/shahidsir.jpg"
        alt="Who We Are"
        className="h-auto w-full rounded-b-none rounded-lg shadow-lg"
    />
    <p className=" p-2 text-center bg-white rounded-t-none rounded-lg text-gray-600">
        Founder and CEO: Mr. Shahid in Bihar Business Connect 2024 with Mr. Azhar Iquabal Founder and MD of Inshorts News App.
    </p>
</div>

                </div>
            </div>

        </section>
    );
};
