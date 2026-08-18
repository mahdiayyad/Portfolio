import Icon from './Icon';

export default function Footer({ profile }) {
    return (
        <footer id="footer">
            <div className="container footer-inner">
                <p className="footer-copy">© {new Date().getFullYear()} {profile.name}. Built with care in Amman, Jordan.</p>
                <div className="footer-social">
                    <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub">
                        <Icon name="github" />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                        <Icon name="linkedin" />
                    </a>
                    <a href={`mailto:${profile.email}`} aria-label="Email">
                        <Icon name="mail" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
