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

interface LinkProps {
    name: string;
    href: string;
    disabled?: boolean;
}
const Links: LinkProps[] = [
    { name: "Events", href: "/events" },
    { name: "Promotions", href: "/promos" },
    // { name: "Partners", href: "/partners" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "#footer" },
    { name: "Register", href: "/register" },
];

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Navbar isBlurred={!isMenuOpen} isBordered onMenuOpenChange={setIsMenuOpen}>
            <Link href='/'>
                <NavbarBrand>
                    <BrandIcon />
                    <BrandText />
                </NavbarBrand>
            </Link>
            <NavbarContent className='hidden gap-8 sm:flex' justify='center'>
                {Links.map(({ name, href }) => (
                    <Link key={name} href={href}>
                        <NavbarItem>{name}</NavbarItem>
                    </Link>
                ))}
                {/* <ThemeToggle /> */}
            </NavbarContent>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className='sm:hidden'
            />
            <NavbarMenu>
                {Links.map(({ name, href }) => (
                    <Link key={name} href={href}>
                        <NavbarMenuItem>{name}</NavbarMenuItem>
                    </Link>
                ))}
                {/* <ThemeToggle /> */}
            </NavbarMenu>
        </Navbar>
    );
}
