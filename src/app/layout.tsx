import "../styles/globals.css";
import "../styles/globals.scss";

import type { Metadata, Viewport } from "next";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RootProvider from "@/providers/root";

import packageJson from "../../package.json";

// Optional interface for the package.json structure, if needed
interface PackageJson {
    name: string;
    description: string;
    author: {
        name: string;
        email: string;
    };
    keywords: string[];
}

const typedPackageJson = packageJson as PackageJson;

// Set your custom site description and SEO keywords here
export const metadata: Metadata = {
    title: "Pentaomnia", // Title for the site
    description: "Pentaomnia is a cutting-edge platform for innovative web applications.", // Custom description
    keywords: "event management, deigital marketing, event organistion, jalandhar, phagwara,", // Custom SEO keywords
    openGraph: {
        title: "Pentaomnia", // OpenGraph title
        description: "Pentaomnia is a cutting-edge platform for innovative web applications.", // OpenGraph description
        url: "https://www.pentaomnia.com",
        siteName: "Pentaomnia",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Open Graph Image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@yourtwitterhandle",
        title: "Pentaomnia", // Twitter title
        description: "Pentaomnia is a cutting-edge platform for innovative web applications.", // Twitter description
        // Uncomment if you have a Twitter image
        // image: "/images/og-image.jpg",
    },
};

export const viewport: Viewport = {
    themeColor: "#000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className='flex h-screen flex-col'>
                <RootProvider>
                    <div className='flex h-full flex-col'>
                        <Navbar />
                        <main className='min-h-[calc(100vh-4rem)] flex-1'>{children}</main>
                        <div className='bg-gray-800 p-4 text-white'>
                            <Footer />
                        </div>
                    </div>
                </RootProvider>
            </body>
        </html>
    );
}
