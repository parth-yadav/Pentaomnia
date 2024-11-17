import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'


export default function Footer() {
    return (
        <footer id='footer' className='relative w-full bg-gray-800 py-6 text-white'>
            <div className='container px-4 md:px-6'>
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
                        <p>Email: Pentaomnia@gmail.com</p>
                        <p className="ml-12">Marketing@pentaomnia.com</p>
                        <p>Phone: +91-9592333800</p>
                        <p>Address:</p>
                        <p>
                             <Link className='hover:underline' href='#blog'>
                                    {" "}
                            Corporate Office: Room 209, Block 13 Lovely Professional University
                            Jalandhar, Punjab - 144411
                                </Link>
                           
                        </p>
                        <p>
                             <Link className='hover:underline' href='#blog'>
                                    {" "}
                            Headquarters: PENTAOMNIA PRIVATE LIMITED C/o Sh. Naim House No. 24, Ward
                            No. 08 Jhakhra Village, Tola & PO Baisakhwa BLOCK SIKTA, BETTIAH West
                            Champaran, Bihar, India, 845307
                                </Link>
                            
                           
                        </p>
                    </div>
                    <div className='space-y-2 text-accent'>
      <h3 className='text-lg font-semibold'>Follow Us</h3>
      <div className='flex space-x-4'>
        <Link className='hover:text-gray-300' href='#'>
          <Facebook className='h-6 w-6' />
          <span className='sr-only'>Facebook</span>
        </Link>
        <Link className='hover:text-gray-300' href='#'>
          <Instagram className='h-6 w-6' />
          <span className='sr-only'>Instagram</span>
        </Link>
        <Link className='hover:text-gray-300' href='#'>
          <Twitter className='h-6 w-6' />
          <span className='sr-only'>Twitter</span>
        </Link>
        <Link className='hover:text-gray-300' href='#'>
          <Linkedin className='h-6 w-6' />
          <span className='sr-only'>LinkedIn</span>
        </Link>
        <Link className='hover:text-gray-300' href='#'>
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
