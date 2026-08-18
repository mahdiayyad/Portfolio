import Icon from './Icon';
import useReveal from '../hooks/useReveal';

const PHILOSOPHY = [
    {
        icon: 'layers',
        title: 'Clean Architecture & SOLID',
        text: "Code organized around business rules, not frameworks — so it's easy to test, extend, and hand off.",
    },
    {
        icon: 'zap',
        title: 'Performance by default',
        text: "Query optimization, indexing, and caching aren't an afterthought — they're part of the initial design.",
    },
    {
        icon: 'gauge',
        title: 'Pragmatic problem-solving',
        text: "The simplest solution that meets the real requirement beats the cleverest one that doesn't ship.",
    },
    {
        icon: 'workflow',
        title: 'Code quality & collaboration',
        text: "Clean git history, reviewed code, and clear documentation — a codebase should get easier to work in over time, not harder.",
    },
];

function PhilosophyItem({ icon, title, text }) {
    const [ref, revealed] = useReveal();
    return (
        <div className={`philosophy-item ${revealed ? 'is-revealed' : ''}`} data-reveal ref={ref}>
            <div className="philosophy-icon">
                <Icon name={icon} />
            </div>
            <div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default function About({ profile }) {
    const [cardRef, cardRevealed] = useReveal();

    return (
        <section id="about" className="section-bg">
            <div className="container">
                <div className="about-grid">
                    <div className={`about-visual ${cardRevealed ? 'is-revealed' : ''}`} data-reveal ref={cardRef}>
                        <div className="about-card">
                            <dl>
                                <div className="about-card-row">
                                    <dt>Name</dt>
                                    <dd>{profile.name}</dd>
                                </div>
                                <div className="about-card-row">
                                    <dt>Role</dt>
                                    <dd>{profile.role}</dd>
                                </div>
                                <div className="about-card-row">
                                    <dt>Location</dt>
                                    <dd>{profile.location}</dd>
                                </div>
                                <div className="about-card-row">
                                    <dt>Experience</dt>
                                    <dd>{profile.experienceYears} Years</dd>
                                </div>
                                <div className="about-card-row">
                                    <dt>Languages</dt>
                                    <dd>{profile.languages}</dd>
                                </div>
                                <div className="about-card-row">
                                    <dt>Availability</dt>
                                    <dd className="available">Open to opportunities</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <div>
                        <div className="section-head" style={{ marginBottom: 28 }}>
                            <span className="eyebrow">About</span>
                            <h2>I engineer backend systems, not just features.</h2>
                        </div>
                        <div className="about-body">
                            <p>
                                I'm a backend-focused software engineer with <strong>{profile.experienceYears} years of professional experience</strong>,
                                currently building and maintaining production Laravel backend systems at <strong>Qistas</strong>, a legal-tech
                                SaaS platform. Before that, I spent just over a year at <strong>NCIT Solutions</strong> building Laravel backend
                                systems focused on scalability and clean architecture.
                            </p>
                            <p>
                                Today my focus is almost entirely backend: designing <strong>REST APIs</strong>, modeling{' '}
                                <strong>relational databases</strong> that stay fast as they grow, and building the{' '}
                                <strong>caching, queueing, and authentication</strong> layers that let an application survive contact with real
                                users. I hold a Bachelor's degree in Computer Science from Al-Ahliyya Amman University, with a focus on
                                algorithms, data structures, and distributed systems.
                            </p>
                            <p>
                                I think about software the way I think about infrastructure: every model, migration, and endpoint is a decision
                                that either compounds in your favor or quietly becomes technical debt. I'd rather spend an extra hour on the
                                schema now than firefight a slow query in production later.
                            </p>
                        </div>

                        <div className="philosophy-list">
                            {PHILOSOPHY.map((item) => (
                                <PhilosophyItem key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
