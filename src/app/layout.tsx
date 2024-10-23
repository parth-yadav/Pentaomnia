import "../styles/globals.css";
import "../styles/globals.scss";

import type { Metadata, Viewport } from "next";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RootProvider from "@/providers/root";

import packageJson from "../../package.json";

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

export const metadata: Metadata = {
    title: typedPackageJson.name ?? "Next.js TypeScript & shadcn/ui — Template",
    description: typedPackageJson.description ?? "Next.js TypeScript & shadcn/ui — Template",
    
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
