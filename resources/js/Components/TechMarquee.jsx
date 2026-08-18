import Icon from './Icon';

const ICONS = {
    Laravel: 'cube',
    PHP: 'code',
    MySQL: 'database',
    Redis: 'zap',
    Docker: 'workflow',
    Git: 'git-branch',
    Linux: 'terminal',
    JavaScript: 'code',
    Tailwind: 'layout',
    Bootstrap: 'layout',
};

export default function TechMarquee({ techStack }) {
    // Rendered twice back-to-back so the CSS marquee animation loops seamlessly.
    const items = [...techStack, ...techStack];

    return (
        <section className="marquee-band" aria-label="Technologies I work with">
            <p className="marquee-label">Core Technology Stack</p>
            <div className="marquee">
                <div className="marquee-track">
                    {items.map((tech, index) => (
                        <a href="#skills" className="tech-logo" key={`${tech}-${index}`}>
                            <Icon name={ICONS[tech] || 'cube'} />
                            {tech}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
