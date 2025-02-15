"use client";

import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
    Youtube,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

function Footer() {
    const [bgClass, setBgClass] = useState("bg-gradient-to-r from-black to-primary");

    useEffect(() => {
        const url = window.location.href;
        if (url.includes("innovatex") || url.includes("fitnessedge")) {
            setBgClass("bg-black");
        }
    }, []);

    return (
        <footer className={`relative w-full py-6 text-white ${bgClass}`}>
            <div className="container px-6 lg:px-12 xl:px-20">
                <hr className="mb-12 border-gray-700" />

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Quick Links Section */}
                    <div className="space-y-4 text-accent">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { href: "#events", label: "Home" },
                                { href: "#promotions", label: "About Us" },
                                { href: "#blog", label: "Our Services" },
                                { href: "#blog", label: "Event Management" },
                                { href: "#blog", label: "Digital Marketing" },
                                { href: "#blog", label: "Case Studies" },
                                { href: "#blog", label: "Testimonials" },
                                { href: "#blog", label: "Blog" },
                                { href: "#blog", label: "Contact Us" },
                                { href: "#blog", label: "FAQs" },
                                { href: "#blog", label: "Request Services" },
                            ].map(({ href, label }) => (
                                <li key={label}>
                                    <Link className="hover:underline" href={href}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="space-y-4 text-accent">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <div className="flex flex-col space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4" />
                                <span>Pentaomnia@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="invisible h-4 w-4" />
                                <span>Marketing@pentaomnia.com</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 mt-4">
                            <Phone className="h-4 w-4" />
                            <span>+91-9592333800</span>
                        </div>
                        <div className="mt-4">
                            <Link
                                className="hover:underline"
                                href="https://www.google.com/maps/search/Room+209,+Block+13+Lovely+Professional+University+Jalandhar,+Punjab+-+144411"
                            >
                                <div className="flex items-center space-x-3">
                                    <MapPin className=" text-white h-4 w-4 text-lg" />
                                    <span className=" text-white font-bold text-lg">Corporate Office</span>
                                </div>
                                <p className="text-sm ">
                                    Room 209, Block 13 Lovely Professional University Jalandhar, Punjab - 144411
                                </p>
                            </Link>
                        </div>
                        <div className="mt-4">
                            <Link
                                className="hover:underline "
                                href="https://www.google.com/maps/place/Pentaomnia+Private+Limited"
                            >
                                <div className="flex items-center space-x-3">
                                    <MapPin className=" text-white h-4 w-4 text-lg" />
                                    <span className=" text-white font-bold text-lg">Headquarters</span>
                                </div>
                                <p className="text-sm">
                                    PENTAOMNIA PRIVATE LIMITED C/o Sh. Naim House No. 24, Ward No. 08 Jhakhra Village, Tola & PO
                                    Baisakhwa BLOCK SIKTA, BETTIAH West Champaran, Bihar, India, 845307
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Follow Us Section */}
                    <div className="space-y-4 text-accent">
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <div className="flex flex-col space-y-4">
                            {[
                                { href: "https://in.linkedin.com/company/pentaomnia", icon: <Linkedin className="h-6 w-6" />, name: "LinkedIn" },
                                { href: "https://www.facebook.com/Pentaomnia/", icon: <Facebook className="h-6 w-6" />, name: "Facebook" },
                                { href: "https://www.instagram.com/pentaomnia/", icon: <Instagram className="h-6 w-6" />, name: "Instagram" },
                                { href: "https://x.com/pentaomnia", icon: <Twitter className="h-6 w-6" />, name: "Twitter" },
                                { href: "https://www.youtube.com/c/PentaOmnia", icon: <Youtube className="h-6 w-6" />, name: "YouTube" },
                            ].map(({ href, icon, name }, idx) => (
                                <Link key={idx} className="flex items-center space-x-2 hover:text-gray-300" href={href}>
                                    {icon}
                                    <span className="text-sm font-medium">{name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-accent">
  <p>© {new Date().getFullYear()} Pentaomnia. All rights reserved.</p>
</div>

            </div>
        </footer>
    );
}

export default Footer;