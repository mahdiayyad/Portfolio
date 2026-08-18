import { Head } from '@inertiajs/react';
import IconSprite from '../Components/IconSprite';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import TechMarquee from '../Components/TechMarquee';
import Stats from '../Components/Stats';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Services from '../Components/Services';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import BackToTop from '../Components/BackToTop';

export default function Home({ profile, stats, techStack, experience, skills, services, projects }) {
    return (
        <>
            <Head title="Mahdi Ayyad — Senior Laravel Developer & Backend Engineer" />

            <a className="skip-link" href="#main">
                Skip to content
            </a>

            <IconSprite />
            <Header />

            <main id="main">
                <Hero profile={profile} />
                <TechMarquee techStack={techStack} />
                <Stats stats={stats} />
                <About profile={profile} />
                <Experience experience={experience} />
                <Skills skills={skills} />
                <Projects projects={projects} />
                <Services services={services} />
                <Contact profile={profile} />
            </main>

            <Footer profile={profile} />
            <BackToTop />
        </>
    );
}
