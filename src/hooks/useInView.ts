import { useEffect, useState } from "react";

import { useInView as useFramerInView, UseInViewOptions } from "framer-motion";

export function useInView(ref: React.RefObject<HTMLElement>, options: UseInViewOptions = {}) {
    const isInView = useFramerInView(ref, options);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);

    return hasAnimated;
}
