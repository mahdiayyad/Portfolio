import Icon from './Icon';
import useReveal from '../hooks/useReveal';

function SkillCategory({ category, icon, items }) {
    const [ref, revealed] = useReveal();

    return (
        <div className={`skill-category ${revealed ? 'is-revealed' : ''}`} data-reveal ref={ref}>
            <div className="skill-category-head">
                <div className="skill-category-icon">
                    <Icon name={icon} />
                </div>
                <h3>{category}</h3>
            </div>
            <div className={`skill-chip-grid ${revealed ? 'is-revealed' : ''}`} data-reveal-group>
                {items.map((item) => (
                    <span className="skill-chip" key={item}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Skills({ skills }) {
    const [headRef, headRevealed] = useReveal();

    return (
        <section id="skills" className="section-bg">
            <div className="container">
                <div className={`section-head ${headRevealed ? 'is-revealed' : ''}`} data-reveal ref={headRef}>
                    <span className="eyebrow">Skills</span>
                    <h2>Technical proficiency</h2>
                    <p>A senior-level backend toolkit, plus enough frontend fluency to work across the whole stack when needed.</p>
                </div>

                <div className="skills-grid">
                    {skills.map((category) => (
                        <SkillCategory key={category.category} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
}
