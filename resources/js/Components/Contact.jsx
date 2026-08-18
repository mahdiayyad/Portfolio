import { useForm, usePage } from '@inertiajs/react';
import Icon from './Icon';
import useReveal from '../hooks/useReveal';

export default function Contact({ profile }) {
    const [headRef, headRevealed] = useReveal();
    const [panelRef, panelRevealed] = useReveal();
    const [formRef, formRevealed] = useReveal();

    const { props } = usePage();
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const submit = (event) => {
        event.preventDefault();
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const statusMessage = recentlySuccessful ? props.flash?.success : null;
    const errorMessage = Object.values(errors)[0];

    return (
        <section id="contact" className="section-bg">
            <div className="container">
                <div className={`section-head ${headRevealed ? 'is-revealed' : ''}`} data-reveal ref={headRef}>
                    <span className="eyebrow">Contact</span>
                    <h2>Let's build something exceptional together</h2>
                    <p>Have a backend that needs to scale, an API that needs designing, or a role I'd be a fit for? Reach out.</p>
                </div>

                <div className="contact-grid">
                    <div className={`contact-panel ${panelRevealed ? 'is-revealed' : ''}`} data-reveal ref={panelRef}>
                        <div className="contact-panel-top">
                            <h3>Let's talk</h3>
                            <p>I typically respond within 24 hours. For freelance work, please include a short project brief.</p>
                        </div>
                        <div className="contact-links">
                            <a className="contact-link" href={`mailto:${profile.email}`}>
                                <Icon name="mail" />
                                {profile.email}
                            </a>
                            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noopener">
                                <Icon name="linkedin" />
                                LinkedIn Profile
                            </a>
                            <a className="contact-link" href={profile.github} target="_blank" rel="noopener">
                                <Icon name="github" />
                                GitHub Profile
                            </a>
                            <a className="contact-link" href={profile.resumeUrl} download>
                                <Icon name="download" />
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className={`contact-form-card ${formRevealed ? 'is-revealed' : ''}`} data-reveal ref={formRef}>
                        <form onSubmit={submit} noValidate>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Jane Doe"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="jane@company.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    placeholder="Let's build something"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Tell me a bit about your project or role..."
                                    required
                                />
                            </div>
                            <p className={`form-status ${statusMessage ? 'success' : errorMessage ? 'error' : ''}`} role="status" aria-live="polite">
                                {statusMessage || errorMessage || ''}
                            </p>
                            <button type="submit" className="btn btn-accent btn-block" disabled={processing}>
                                {processing ? 'Sending…' : 'Send Message'}
                                <Icon name="arrow-right" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
