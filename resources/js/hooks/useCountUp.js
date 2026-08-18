import { useEffect, useState } from 'react';

/**
 * Animates from 0 to `target` once `active` becomes true (typically driven
 * by useReveal so the count only plays when scrolled into view).
 */
export default function useCountUp(target, active, duration = 1400) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!active) return;

        let start = null;
        let frame;

        const step = (timestamp) => {
            if (start === null) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) frame = requestAnimationFrame(step);
        };

        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [active, target, duration]);

    return value;
}
