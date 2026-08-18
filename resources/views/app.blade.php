<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title inertia>Mahdi Ayyad — Senior Laravel Developer &amp; Backend Engineer</title>
        <meta
            name="description"
            content="Mahdi Ayyad is a Senior Laravel Developer based in Amman, Jordan, specializing in scalable REST APIs, MySQL performance tuning, and Redis-backed caching for production applications. 4+ years building backend systems that hold up under real traffic."
        />
        <meta name="theme-color" content="#08090d" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mahdi Ayyad — Senior Laravel Developer & Backend Engineer" />
        <meta property="og:description" content="Senior Laravel Developer specializing in scalable APIs, database architecture, and performance-tuned backend systems." />
        <meta property="og:image" content="{{ asset('images/og-image.jpg') }}" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mahdi Ayyad — Senior Laravel Developer & Backend Engineer" />
        <meta name="twitter:description" content="Senior Laravel Developer specializing in scalable APIs, database architecture, and performance-tuned backend systems." />
        <meta name="twitter:image" content="{{ asset('images/og-image.jpg') }}" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@@400;500;600;700;800&family=JetBrains+Mono:wght@@400;500;600;700&display=swap"
            rel="stylesheet"
        />

        <script>
            (function () {
                try {
                    var stored = localStorage.getItem('theme');
                    var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                    document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
            })();
        </script>

        <script type="application/ld+json">
        @verbatim
            {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Mahdi Ayyad",
                "jobTitle": "Senior Laravel Developer",
                "description": "Senior Laravel Developer and backend engineer specializing in scalable REST APIs, database architecture, and performance optimization.",
                "url": "https://mahdiayyad.dev/",
                "email": "mailto:mahdiayyad97@gmail.com",
                "address": { "@type": "PostalAddress", "addressLocality": "Amman", "addressCountry": "Jordan" },
                "worksFor": { "@type": "Organization", "name": "Qistas" },
                "alumniOf": { "@type": "CollegeOrUniversity", "name": "Al-Ahliyya Amman University" },
                "knowsAbout": ["Laravel", "PHP", "MySQL", "Redis", "REST API Design", "Database Optimization", "Backend Architecture"],
                "sameAs": [
                    "https://github.com/mahdiayyad",
                    "https://www.linkedin.com/in/mahdi-ayyad-943143201"
                ]
            }
        @endverbatim
        </script>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
