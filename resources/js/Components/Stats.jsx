import useCountUp from '../hooks/useCountUp';
import useReveal from '../hooks/useReveal';

function StatCard({ value, suffix, label }) {
    const [ref, revealed] = useReveal({ threshold: 0.5 });
    const count = useCountUp(value, revealed);

    return (
        <div className={`stat-card ${revealed ? 'is-revealed' : ''}`} data-reveal ref={ref}>
            <div className="stat-number">
                {count}
                {suffix}
            </div>
            <div className="stat-label">{label}</div>
        </div>
    );
}

export default function Stats({ stats }) {
    return (
        <section className="stats">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat) => (
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
