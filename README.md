<div align="center">

# Mahdi Ayyad — Portfolio

**Senior Laravel Developer & Backend Engineer**

[mahdiayyad.dev](https://mahdiayyad.dev)

![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?logo=php&logoColor=white)
![Inertia.js](https://img.shields.io/badge/Inertia.js-3-9553E9?logo=inertia&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql&logoColor=white)

</div>

---

A personal portfolio built as a real, production Laravel + React application rather than a static template — a backend engineer's portfolio should double as a work sample, not just describe one.

## Engineering highlights

- **A real backend, not a mockup.** The contact form is a complete request/response cycle — `FormRequest` validation → Eloquent persistence → a queued `Mailable` sent through [Resend](https://resend.com) — not a `mailto:` link pretending to be a feature.
- **Data-driven case studies.** Each featured project is an Eloquent model whose `sections` column holds its entire case-study content (`{heading, body}` pairs). `/projects/{slug}` pages are route-model-bound by slug, server-rendered through Inertia, and carry their own SEO metadata and prev/next navigation — not a hardcoded template repeated four times.
- **Tested.** Feature tests cover contact-form validation, persistence, mail queuing, and rate limiting, plus the case-study routes and their 404 path.
- **A hand-built design system.** No UI framework — a from-scratch dark/light theme driven entirely by CSS custom properties, scroll-reveal and count-up animations via small custom React hooks, and a single inline SVG icon sprite (zero icon-font dependency).
- **Portable by design.** Every migration uses framework-native column types (`string`, `text`, `json`, `boolean`) with nothing SQLite- or MySQL-specific, so the same schema runs unchanged in either environment.

## Structure

```
app/Http/Controllers/HomeController.php     Renders the Home page with all content as Inertia props
app/Http/Controllers/ProjectController.php  Renders a project's case-study page at /projects/{slug}
app/Http/Controllers/ContactController.php  Validates, stores, and emails contact-form submissions
app/Models/{Project,ContactMessage}.php
app/Support/PortfolioContent.php            Static content (experience, skills, services, stats)
database/migrations, database/seeders       Schema + seed data for the featured projects
resources/js/Pages/Home.jsx                 Top-level home page, composes every section
resources/js/Pages/Projects/Show.jsx        Case-study page template, shared across all projects
resources/js/Components/*.jsx               Header, Hero, Skills, Projects, Contact, etc.
resources/js/hooks/*.js                     useReveal (scroll animations), useCountUp, useTheme
resources/css/app.css                       The full design system — dark/light theme via CSS vars
```

**Why some content lives in the database and some doesn't:** projects are an Eloquent model because that's content meant to grow over time, and a case study is really just "more detail about the same project," not a separate concern. Experience, skills, services, and stats live in `App\Support\PortfolioContent` as plain PHP arrays — personal facts with no independent lifecycle, so a database table for them would be pure ceremony.

---

<div align="center">

© Mahdi Ayyad — [GitHub](https://github.com/mahdiayyad) · [LinkedIn](https://www.linkedin.com/in/mahdi-ayyad-943143201)

</div>
