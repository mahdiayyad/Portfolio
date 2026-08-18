import Icon from './Icon';

export default function Hero({ profile }) {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg" aria-hidden="true"></div>
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <span className="eyebrow">Open to Senior Backend / Laravel roles</span>
                        <h1 className="hero-title">
                            Building scalable <span className="text-gradient">Laravel applications</span> that power real businesses
                        </h1>
                        <p className="hero-lede">
                            I'm {profile.name}, a Senior Laravel Developer based in {profile.location}. I design{' '}
                            <strong>REST APIs</strong>, <strong>database architecture</strong>, and{' '}
                            <strong>caching layers</strong> that stay fast and reliable as products and traffic grow —{' '}
                            {profile.experienceYears} years turning business requirements into backend systems that hold up in production.
                        </p>
                        <div className="hero-actions">
                            <a href="#contact" className="btn btn-accent">
                                Hire Me
                                <Icon name="arrow-right" />
                            </a>
                            <a href="#projects" className="btn btn-secondary">
                                View Projects
                            </a>
                            <a href={profile.resumeUrl} className="btn btn-ghost" download>
                                <Icon name="download" />
                                Download Resume
                            </a>
                        </div>
                        <div className="hero-meta">
                            <span className="hero-meta-item">
                                <Icon name="pin" />
                                {profile.location}
                            </span>
                            <span className="hero-meta-item">
                                <Icon name="briefcase" />
                                {profile.experienceYears} years experience
                            </span>
                            <span className="hero-meta-item">
                                <Icon name="calendar" />
                                Available for freelance &amp; full-time
                            </span>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-card">
                            <img
                                src="/images/profile.jpg"
                                width="680"
                                height="850"
                                alt={`Portrait of ${profile.name}, Senior Laravel Developer`}
                            />
                            <div className="hero-status">
                                <span className="status-dot" aria-hidden="true"></span>
                                <span>Open to new opportunities</span>
                            </div>
                        </div>
                        <div className="hero-terminal" aria-hidden="true">
                            <div className="hero-terminal-bar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="hero-terminal-body">
                                <div>
                                    <span className="prompt">$</span> php artisan optimize
                                </div>
                                <div className="muted">✓ Config cached</div>
                                <div className="muted">✓ Routes cached</div>
                                <div>
                                    <span className="key">"response_time"</span>: <span className="string">"41ms"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-scroll-cue" aria-hidden="true">
                <span>Scroll</span>
                <span className="mouse">
                    <span></span>
                </span>
            </div>
        </section>
    );
}
