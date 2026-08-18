import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element (fade/translate via CSS) the first time it scrolls
 * into view, mirroring the static build's [data-reveal] behavior.
 */
export default function useReveal(options = {}) {
    const ref = useRef(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (!('IntersectionObserver' in window)) {
            setRevealed(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return [ref, revealed];
}
