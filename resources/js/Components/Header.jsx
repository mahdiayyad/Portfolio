import { useEffect, useState } from 'react';
import Icon from './Icon';
import useTheme from '../hooks/useTheme';

const NAV_LINKS = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
];

export default function Header() {
    const [, toggleTheme] = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);

        const onScroll = () => {
            setIsScrolled(window.scrollY > 24);

            const scrollPos = window.scrollY + 140;
            let current = null;
            sections.forEach((section) => {
                if (section.offsetTop <= scrollPos) current = section;
            });
            setActiveId(current ? current.id : '');
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeNav = () => setIsNavOpen(false);

    return (
        <header id="header" className={isScrolled ? 'is-scrolled' : ''}>
            <div className="container header-inner">
                <a href="/#hero" className="logo">
                    <span className="logo-mark">MA</span>
                    <span>Mahdi Ayyad</span>
                </a>

                <nav className={`nav-menu ${isNavOpen ? 'is-open' : ''}`} id="navMenu" aria-label="Primary">
                    <ul>
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`/#${link.id}`}
                                    className={`nav-link ${activeId === link.id ? 'active' : ''}`}
                                    onClick={closeNav}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button id="themeToggle" className="theme-toggle" type="button" aria-label="Toggle color theme" onClick={toggleTheme}>
                        <Icon name="sun" className="icon-sun" />
                        <Icon name="moon" className="icon-moon" />
                    </button>
                    <a href="/#contact" className="btn btn-primary btn-sm header-cta">
                        Hire Me
                    </a>
                    <button
                        id="navToggle"
                        className={`nav-toggle ${isNavOpen ? 'is-active' : ''}`}
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isNavOpen}
                        aria-controls="navMenu"
                        onClick={() => setIsNavOpen((open) => !open)}
                    >
                        <Icon name="menu" className="icon-menu" />
                        <Icon name="close" className="icon-close" />
                    </button>
                </div>
            </div>
        </header>
    );
}
