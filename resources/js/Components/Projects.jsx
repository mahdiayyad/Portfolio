import { Link } from '@inertiajs/react';
import Icon from './Icon';
import useReveal from '../hooks/useReveal';

function FeaturedProject({ project }) {
    const [ref, revealed] = useReveal();

    return (
        <div className={`project-featured ${revealed ? 'is-revealed' : ''}`} data-reveal ref={ref}>
            <div className="project-featured-media">
                <img src={`/${project.preview_image}`} alt={`${project.name} preview`} loading="lazy" />
                <span className="featured-badge">★ Featured Project</span>
            </div>
            <div className="project-featured-body">
                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-summary">{project.summary}</p>
                {project.highlight_quote && <blockquote className="highlight-quote">{project.highlight_quote}</blockquote>}
                {project.architecture_summary.length > 0 && (
                    <div className="project-architecture">
                        {project.architecture_summary.map((item) => (
                            <span className="tag" key={item}>
                                {item}
                            </span>
                        ))}
                    </div>
                )}
                <div className="project-tags">
                    {project.tech_tags.map((tag) => (
                        <span className="tag" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="hero-actions" style={{ marginBottom: 0 }}>
                    <Link href={`/projects/${project.slug}`} className="btn btn-accent">
                        View Case Study
                        <Icon name="arrow-right" />
                    </Link>
                    {project.website_url && (
                        <a href={project.website_url} target="_blank" rel="noopener" className="btn btn-secondary">
                            Visit Live Site
                            <Icon name="external" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    const [ref, revealed] = useReveal();

    return (
        <article className={`project-card ${revealed ? 'is-revealed' : ''}`} data-reveal ref={ref}>
            <div className="project-media">
                <img src={`/${project.preview_image}`} alt={`${project.name} preview`} loading="lazy" />
            </div>
            <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p>{project.summary}</p>
                <div className="project-tags">
                    {project.tech_tags.map((tag) => (
                        <span className="tag" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="project-links">
                    <Link href={`/projects/${project.slug}`} className="case-study-link">
                        View Case Study
                        <Icon name="arrow-right" />
                    </Link>
                    {project.website_url && (
                        <a
                            href={project.website_url}
                            target="_blank"
                            rel="noopener"
                            className="project-external-link"
                            aria-label={`Visit ${project.name} live site`}
                        >
                            <Icon name="external" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function Projects({ projects }) {
    const [headRef, headRevealed] = useReveal();
    const featured = projects.find((project) => project.is_featured);
    const rest = projects.filter((project) => !project.is_featured);

    return (
        <section id="projects">
            <div className="container">
                <div className={`section-head ${headRevealed ? 'is-revealed' : ''}`} data-reveal ref={headRef}>
                    <span className="eyebrow">Featured Projects</span>
                    <h2>Selected work</h2>
                    <p>Production Laravel platforms across legal tech, e-commerce, and subscription commerce.</p>
                </div>

                {featured && <FeaturedProject project={featured} />}

                <div className="projects-grid">
                    {rest.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
