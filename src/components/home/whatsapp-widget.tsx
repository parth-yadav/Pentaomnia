import { MessageCircleMore } from "lucide-react";





export default function Whatsapp({ phoneNumber = "919592333800" }: { phoneNumber?: string }) {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <div className='flex'>
            <a
                href={whatsappUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='fixed bottom-4 right-4 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition-colors duration-300 hover:bg-green-600'
                aria-label='Chat on WhatsApp'
            >
                <MessageCircleMore className='h-6 w-6' />
            </a>
        </div>
    );
}