type Currencies = "INR" | "USD";
export interface Promotion {
    id: number;
    title: string;
    description: string;
    category: string;
    discountPercentage: number;
    originalPrice: number;
    currency: Currencies;
    endDate: Date;
    imageSrc: string;
    partnerName: string;
}
export const CONST_PROMOS: Promotion[] = [
    {
        id: 1,
        title: "50% Off Study Guides",
        description:
            "Get half off on all study guides for midterms and finals. Limited time offer!",
        category: "Academic",
        discountPercentage: 50,
        originalPrice: 399,
        currency: "INR",
        endDate: new Date(2024, 4, 30),
        imageSrc: "https://picsum.photos/1000?random=1",
        partnerName: "Campus Bookstore",
    },
    {
        id: 2,
        title: "Free Month of Gym Membership",
        description: "Sign up for a 6-month gym membership and get your first month free!",
        category: "Fitness",
        discountPercentage: 16,
        originalPrice: 18,
        currency: "USD",
        endDate: new Date(2024, 5, 15),
        imageSrc: "https://picsum.photos/1000?random=2",
        partnerName: "University Fitness Center",
    },
    {
        id: 3,
        title: "20% Off Laptops",
        description: "Upgrade your tech with 20% off select laptop models. Perfect for students!",
        category: "Technology",
        discountPercentage: 20,
        originalPrice: 999.99,
        currency: "USD",
        endDate: new Date(2024, 6, 1),
        imageSrc: "https://picsum.photos/1000?random=3",
        partnerName: "TechMart",
    },
    {
        id: 4,
        title: "Buy One, Get One Free Coffee",
        description: "Start your day right with our BOGO coffee deal. Valid at all campus cafes.",
        category: "Food & Drink",
        discountPercentage: 50,
        originalPrice: 199,
        currency: "INR",
        endDate: new Date(2024, 5, 30),
        imageSrc: "https://picsum.photos/1000?random=4",
        partnerName: "Campus Cafe",
    },
    {
        id: 5,
        title: "30% Off Art Supplies",
        description: "Express your creativity with 30% off all art supplies. Stock up now!",
        category: "Art",
        discountPercentage: 30,
        originalPrice: 299,
        currency: "INR",
        endDate: new Date(2024, 7, 15),
        imageSrc: "https://picsum.photos/1000?random=5",
        partnerName: "Creative Corner",
    },
    {
        id: 6,
        title: "Discounted Movie Tickets",
        description: "Enjoy the latest blockbusters for less with our discounted movie tickets.",
        category: "Entertainment",
        discountPercentage: 25,
        originalPrice: 12.99,
        currency: "USD",
        endDate: new Date(2024, 8, 1),
        imageSrc: "https://picsum.photos/1000?random=6",
        partnerName: "CinePlex",
    },
];
