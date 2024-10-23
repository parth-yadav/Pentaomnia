import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import EventCard from "@/components/eventcard";
import { type Event } from "@/constants/events";

interface EventPopupInterface {
    onClose: () => void;
    layoutId: string;
    event: Event;
}

const EventPopup: React.FC<EventPopupInterface> = ({ onClose, layoutId, event }) => {
    const { push } = useRouter();
    const fixedStyles = {
        outerMotionDiv:
            "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm",
        innerDiv: "relative overflow-hidden rounded-lg bg-white p-4 shadow-lg dark:bg-transparent",
    };
    return (
        <motion.div
            className={`${fixedStyles.outerMotionDiv}`}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className={`${fixedStyles.innerDiv} w-[90%] min-w-[300px] max-w-3xl sm:w-[75%] md:w-[60%] lg:w-[35%]`}
                onClick={(e) => e.stopPropagation()}
                layoutId={layoutId}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
            >
                <EventCard
                    showDescription
                    locationOnTop={false}
                    event={event}
                    loading={false}
                    className='h-[60vh]'
                />
                <div className='mt-4 flex items-center justify-end gap-2'>
                    <Button
                        // radius='full'
                        onClick={onClose}
                    >
                        Close
                    </Button>
                    <Button
                        color='primary'
                        variant='solid'
                        // radius='full'
                        onClick={() => push(`/events/register/${event?.id}`)}
                    >
                        Register
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default EventPopup;
