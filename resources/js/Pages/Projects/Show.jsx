import { Head, Link } from '@inertiajs/react';
import IconSprite from '../../Components/IconSprite';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import BackToTop from '../../Components/BackToTop';
import Icon from '../../Components/Icon';
import useReveal from '../../hooks/useReveal';

function CaseSection({ heading, body }) {
    const [ref, revealed] = useReveal();
    const paragraphs = body.split('\n\n');

    return (
        <div className={`case-section ${revealed ? 'is-revealed' : ''}`} data-reveal ref={ref}>
            <h2>{heading}</h2>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}

export default function Show({ profile, project, previous, next }) {
    return (
        <>
            <Head title={`${project.name} — Case Study | Mahdi Ayyad`}>
                <meta name="description" content={project.summary} />
            </Head>

            <a className="skip-link" href="#main">
                Skip to content
            </a>

            <IconSprite />
            <Header />

            <main id="main">
                <section className="case-hero">
                    <div className="container">
                        <Link href="/#projects" className="case-back-link">
                            <Icon name="arrow-left" />
                            Back to portfolio
                        </Link>
                        <span className="eyebrow">{project.category}</span>
                        <h1 className="case-hero-title">{project.name}</h1>
                        <p className="case-hero-tagline">{project.tagline}</p>
                        <p className="case-hero-summary">{project.summary}</p>

                        <div className="case-hero-meta">
                            <span className="hero-meta-item">
                                <Icon name="briefcase" />
                                {project.role}
                            </span>
                            {project.architecture_summary.map((item) => (
                                <span className="hero-meta-item" key={item}>
                                    <Icon name="layers" />
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="project-tags" style={{ marginTop: 18 }}>
                            {project.tech_tags.map((tag) => (
                                <span className="tag" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {project.website_url && (
                            <div className="hero-actions" style={{ marginTop: 26, marginBottom: 0 }}>
                                <a href={project.website_url} target="_blank" rel="noopener" className="btn btn-accent">
                                    Visit Live Site
                                    <Icon name="external" />
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                <div className="container">
                    {project.preview_image && (
                        <div className="case-hero-image">
                            <img src={`/${project.preview_image}`} alt={`${project.name} preview`} />
                        </div>
                    )}

                    {project.highlight_quote && <blockquote className="highlight-quote case-highlight">{project.highlight_quote}</blockquote>}

                    <div className="case-sections">
                        {project.sections.map((section) => (
                            <CaseSection key={section.heading} {...section} />
                        ))}
                    </div>

                    <nav className="case-project-nav" aria-label="Other projects">
                        {previous ? (
                            <Link href={`/projects/${previous.slug}`} className="case-nav-link case-nav-prev">
                                <Icon name="arrow-left" />
                                <span>
                                    <small>Previous</small>
                                    {previous.name}
                                </span>
                            </Link>
                        ) : (
                            <span />
                        )}
                        {next ? (
                            <Link href={`/projects/${next.slug}`} className="case-nav-link case-nav-next">
                                <span>
                                    <small>Next</small>
                                    {next.name}
                                </span>
                                <Icon name="arrow-right" />
                            </Link>
                        ) : (
                            <span />
                        )}
                    </nav>
                </div>
            </main>

            <Footer profile={profile} />
            <BackToTop />
        </>
    );
}
