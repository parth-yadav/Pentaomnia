import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id='footer' className='relative w-full bg-gradient-to-r from-black to-primary py-6 text-white'>
            <div className='container px-4 md:px-6'>
                <hr className="mb-12 border-gray-700" />

                <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
                    <div className='space-y-2 text-accent'>
                        <h3 className='text-lg font-semibold'>Quick Links</h3>
                        <ul className='space-y-1'>
                            <li>
                                <Link className='hover:underline' href='#events'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className='hover:underline' href='#promotions'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link className='hover:underline' href='#blog'>
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link className='hover:underline' href='#blog'>
                                    Event Management
                                </Link>
                            </li>
                            <li>
                                <Link className='hover:underline' href='#blog'>
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link className='hover:underline' href='#blog'>
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link className='hover:underline' href='#blog'>
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link className='hover:underline' href='#blog'>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link className='hover:underline' href='#blog'>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link className='hover:underline' href='#blog'>
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link className='hover:underline' href='#blog'>
                                    Request Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='space-y-2 text-accent'>
                        <h3 className='text-lg font-semibold'>Contact Us</h3>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex items-center space-x-2'>
                                <Mail className='h-3 w-3' />
                                <h2>Pentaomnia@gmail.com</h2>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <Mail className='invisible h-3 w-3' />
                                <p>Marketing@pentaomnia.com</p>
                            </div>
                        </div>

                        <br></br>
                        <div className='flex items-center space-x-2'>
                            <Phone className='h-3 w-3' />
                            <h2 className=''>+91-9592333800</h2>
                        </div>
                        {/* <p>Phone: +91-9592333800</p> */}
                        <br></br>
                        <div>
                            <Link
                                className='hover:underline'
                                href='https://www.google.com/maps/search/Room+209,+Block+13+Lovely+Professional+University+Jalandhar,+Punjab+-+144411/@31.3191751,75.569771,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D'
                            >
                                {" "}
                                <div className='flex items-center space-x-2'>
                                    <MapPin className='h-3 w-3' />
                                    <h2 className='font-bold'>Corporate Office</h2>
                                </div>
                                Room 209, Block 13 Lovely Professional University Jalandhar, Punjab
                                - 144411
                            </Link>
                        </div>
                        <br></br>
                        <div>
                            <Link
                                className='hover:underline'
                                href='https://www.google.com/maps/place/Pentaomnia+Private+Limited/@26.8720702,84.4650253,12z/data=!4m10!1m2!2m1!1sPENTAOMNIA+PRIVATE+LIMITED+C%2Fo+Sh.+Naim+House+No.+24,+Ward+No.+08+Jhakhra+Village,+Tola+%26+PO+Baisakhwa+BLOCK+SIKTA,+BETTIAH+West+Champaran,+Bihar,+India,+845307!3m6!1s0x39935d372f986775:0x767b5b740b2ac36b!8m2!3d26.9639379!4d84.6143963!15sCqABUEVOVEFPTU5JQSBQUklWQVRFIExJTUlURUQgQy9vIFNoLiBOYWltIEhvdXNlIE5vLiAyNCwgV2FyZCBOby4gMDggSmhha2hyYSBWaWxsYWdlLCBUb2xhICYgUE8gQmFpc2FraHdhIEJMT0NLIFNJS1RBLCBCRVRUSUFIIFdlc3QgQ2hhbXBhcmFuLCBCaWhhciwgSW5kaWEsIDg0NTMwN5IBGGV2ZW50X21hbmFnZW1lbnRfY29tcGFueeABAA!16s%2Fg%2F11j0vqz_gm?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D'
                            >
                                {" "}
                                <div className='flex items-center space-x-2'>
                                    <MapPin className='h-3 w-3' />
                                    <h2 className='font-bold'>Headquarters</h2>
                                </div>
                                PENTAOMNIA PRIVATE LIMITED C/o Sh. Naim House No. 24, Ward No. 08
                                Jhakhra Village, Tola & PO Baisakhwa BLOCK SIKTA, BETTIAH West
                                Champaran, Bihar, India, 845307
                            </Link>
                        </div>
                    </div>
                    <div className='space-y-2 text-accent'>
                        <h3 className='text-lg font-semibold'>Follow Us</h3>
                        <div className='flex space-x-4'>
                            <Link
                                className='hover:text-gray-300'
                                href='https://in.linkedin.com/company/pentaomnia'
                            >
                                <Linkedin className='h-6 w-6' />
                                <span className='sr-only'>LinkedIn</span>
                            </Link>
                            <Link
                                className='hover:text-gray-300'
                                href='https://www.facebook.com/Pentaomnia/'
                            >
                                <Facebook className='h-6 w-6' />
                                <span className='sr-only'>Facebook</span>
                            </Link>
                            <Link
                                className='hover:text-gray-300'
                                href='https://www.instagram.com/pentaomnia/'
                            >
                                <Instagram className='h-6 w-6' />
                                <span className='sr-only'>Instagram</span>
                            </Link>
                            <Link className='hover:text-gray-300' href='https://x.com/pentaomnia'>
                                <Twitter className='h-6 w-6' />
                                <span className='sr-only'>Twitter</span>
                            </Link>

                            <Link
                                className='hover:text-gray-300'
                                href='https://www.youtube.com/c/PentaOmnia'
                            >
                                <Youtube className='h-6 w-6' />
                                <span className='sr-only'>Youtube</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 text-center text-accent'>
                    <p>© 2024 Pentaomnia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
