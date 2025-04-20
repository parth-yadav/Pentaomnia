import "../styles/globals.css";
import "../styles/globals.scss";
import { Inter , Poppins, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});




import { Metadata, Viewport } from "next";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RootProvider from "@/providers/root";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.pentaomnia.com"),
    title: "Pentaomnia - Event Management & Digital Marketing Solutions",
    description:
        "Transforming events and digital marketing in Jalandhar and Phagwara. We provide innovative solutions to elevate your business and create memorable experiences.", // More descriptive description
    keywords:
        "event management, digital marketing, event organization, Jalandhar, Phagwara, business solutions, marketing services",
    openGraph: {
        title: "Pentaomnia - Event Management & Digital Marketing Solutions",
        description:
            "Transforming events and digital marketing in Jalandhar and Phagwara. We provide innovative solutions to elevate your business and create memorable experiences.",
        url: "https://www.pentaomnia.com",
        siteName: "Pentaomnia",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Pentaomnia - Event Management and Digital Marketing",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@yourtwitterhandle",
        title: "Pentaomnia - Event Management & Digital Marketing Solutions",
        description:
            "Transforming events and digital marketing in Jalandhar and Phagwara. We provide innovative solutions to elevate your business and create memorable experiences.",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: "#000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className={` ${inter.variable} ${poppins.variable} ${playfair.variable}`} suppressHydrationWarning >

            <body className='flex h-screen flex-col'>
                <RootProvider>
                    <div className='flex h-full flex-col'>
                        <Navbar />
                        <main className=''>{children}</main>
                        <div className=''>
                            <Footer />
                        </div>
                    </div>
                </RootProvider>
            </body>
        </html>
    );
}
