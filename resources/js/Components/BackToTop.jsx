import { useEffect, useState } from 'react';
import Icon from './Icon';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsVisible(window.scrollY > 480);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button
            className={`back-to-top ${isVisible ? 'is-visible' : ''}`}
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <Icon name="chevron-up" />
        </button>
    );
}
