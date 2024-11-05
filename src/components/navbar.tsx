"use client";

import { useState } from "react";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";

import { BrandIcon, BrandText } from "@/components/brand";
import { useIsMobile } from "@/hooks/use-mobile";

interface LinkProps {
    name: string;
    href: string;
    disabled?: boolean;
}

const Links: LinkProps[] = [
    { name: "Events", href: "/events" },
    { name: "Promotions", href: "/promos" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "#footer" },
    { name: "Register", href: "/register" },
];

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    return (
        <Navbar
            isBlurred={!isMenuOpen}
            isBordered
            onMenuOpenChange={setIsMenuOpen}
            className={isMobile ? "flex-col items-start" : ""}
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className={isMobile ? "block" : "hidden"}
                />
                <Link href='/'>
                    <NavbarBrand>
                        <BrandIcon />
                        <BrandText />
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent className={`${isMobile ? "hidden" : "flex"} gap-8`} justify='center'>
                {Links.map(({ name, href }) => (
                    <Link key={name} href={href}>
                        <NavbarItem className='transition-colors duration-300 hover:text-accent'>
                            {name}
                        </NavbarItem>
                    </Link>
                ))}
            </NavbarContent>

            <NavbarMenu className={`${isMobile ? "flex" : "hidden"} flex-col pt-4`}>
                {Links.map(({ name, href }) => (
                    <Link key={name} href={href}>
                        <NavbarMenuItem className='w-full transition-colors duration-300 hover:text-accent'>
                            {name}
                        </NavbarMenuItem>
                    </Link>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
