import Icon from './Icon';
import useReveal from '../hooks/useReveal';

function TimelineItem({ role, company, period, icon, bullets, tags }) {
    const [ref, revealed] = useReveal();

    return (
        <div className={`timeline-item ${revealed ? 'is-revealed' : ''}`} data-reveal ref={ref}>
            <div className="timeline-dot">
                <Icon name={icon} />
            </div>
            <div className="timeline-card">
                <div className="timeline-top">
                    <span className="timeline-role">{role}</span>
                    <span className="timeline-period">{period}</span>
                </div>
                <p className="timeline-company">{company}</p>
                <ul className="timeline-list">
                    {bullets.map((bullet) => (
                        <li key={bullet}>
                            <Icon name="check" />
                            {bullet}
                        </li>
                    ))}
                </ul>
                <div className="timeline-tags">
                    {tags.map((tag) => (
                        <span className="tag" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Experience({ experience }) {
    const [headRef, headRevealed] = useReveal();

    return (
        <section id="experience">
            <div className="container">
                <div className={`section-head ${headRevealed ? 'is-revealed' : ''}`} data-reveal ref={headRef}>
                    <span className="eyebrow">Experience</span>
                    <h2>Career timeline</h2>
                    <p>Two roles, one continuous focus: designing and maintaining production Laravel backend systems.</p>
                </div>

                <div className="timeline">
                    {experience.map((entry) => (
                        <TimelineItem key={entry.role + entry.period} {...entry} />
                    ))}
                </div>
            </div>
        </section>
    );
}
