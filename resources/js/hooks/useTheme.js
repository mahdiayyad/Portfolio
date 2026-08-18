import { useEffect, useState } from 'react';

export default function useTheme() {
    const [theme, setTheme] = useState(
        () => document.documentElement.getAttribute('data-theme') || 'dark'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {}
    }, [theme]);

    const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'));

    return [theme, toggleTheme];
}
