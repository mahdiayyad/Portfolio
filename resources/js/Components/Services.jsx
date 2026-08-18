import Icon from './Icon';
import useReveal from '../hooks/useReveal';

function ServiceCard({ icon, title, description }) {
    const [ref, revealed] = useReveal();

    return (
        <div className={`service-card ${revealed ? 'is-revealed' : ''}`} data-reveal ref={ref}>
            <div className="service-icon">
                <Icon name={icon} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default function Services({ services }) {
    const [headRef, headRevealed] = useReveal();

    return (
        <section id="services">
            <div className="container">
                <div className={`section-head ${headRevealed ? 'is-revealed' : ''}`} data-reveal ref={headRef}>
                    <span className="eyebrow">Services</span>
                    <h2>How I can help</h2>
                    <p>Focused backend engineering services for startups, agencies, and product teams.</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
