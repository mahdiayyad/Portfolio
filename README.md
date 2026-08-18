# Mahdi Ayyad — Portfolio

Personal portfolio for Mahdi Ayyad, Senior Laravel Developer & Backend Engineer — built as a real Laravel + React application rather than a static page, since a backend engineer's portfolio doubles as a work sample.

**Stack:** Laravel 12 + Inertia.js + React 19, SQLite for local dev (MySQL-compatible migrations), Vite.

## Why Laravel + Inertia + React

Inertia lets Laravel controllers return React pages directly — one app, one repo, no separate REST API to maintain for what is fundamentally a single-owner site. It's the same stack Laravel's own official React starter kit uses. The contact form is real: `POST /contact` → validated by a `FormRequest` → persisted via Eloquent → a `ShouldQueue` Mailable dispatched through the queue — not a `mailto:` link.

## Project structure

```
app/Http/Controllers/HomeController.php     Renders the Home Inertia page with all content as props
app/Http/Controllers/ProjectController.php  Renders a project's case-study page at /projects/{slug}
app/Http/Controllers/ContactController.php  Handles contact form submissions
app/Models/{Project,ContactMessage}.php
app/Support/PortfolioContent.php            Static content (experience, skills, services, stats) — see note below
database/migrations, database/seeders       Schema + seed data for the four featured projects
resources/js/Pages/Home.jsx                 Top-level home page, composes all sections
resources/js/Pages/Projects/Show.jsx        Case-study page template (shared by all projects)
resources/js/Components/*.jsx               Header, Hero, Skills, Projects, Contact, etc.
resources/js/hooks/*.js                     useReveal (scroll animations), useCountUp, useTheme
resources/css/app.css                       The full hand-built design system (dark/light theme via CSS vars)
```

**Why some content is in the database and some isn't:** Projects are an Eloquent model with migrations/seeders — each row holds both its portfolio-card summary and its full case-study content (as a `sections` JSON column of `{heading, body}` pairs), since that's content meant to grow over time and case studies are really just "more detail about the same project," not a separate concern. Experience, skills, services, and stats live in `App\Support\PortfolioContent` as plain PHP arrays — they're personal facts with no independent lifecycle, so a database table for them would be pure ceremony.

## Projects & case studies

The four featured projects (Qistas, Aroma Gift Center, Maktab, Epicured) are seeded in `database/seeders/ProjectSeeder.php` with real case-study content — problem, architecture, engineering decisions, and outcome, written from the actual role/stack/architecture on each project, with no invented metrics. Qistas is marked `is_featured` and gets the large card treatment; the others render in the grid below it, ordered by `sort_order`. Each project card links to a dedicated `/projects/{slug}` page (`ProjectController@show`, route-model-bound by slug) with its own SEO title/description and prev/next navigation between projects.

Project preview images are real screenshots of the live sites (`public/images/projects/*.jpg`), not mockups — update them (and `preview_image` in the seeder) if a site's design changes.

To add a new project: add an entry to the `$projects` array in `ProjectSeeder.php` (slug, category, tagline, summary, role, architecture_summary, tech_tags, website_url, a `sections` array of `{heading, body}` pairs, `sort_order`), add its preview image to `public/images/projects/`, then `php artisan db:seed --class=ProjectSeeder`.

## Local setup

Requires PHP ≥ 8.2, Composer ≥ 2.2, Node ≥ 20.

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed
npm run build   # or `npm run dev` for hot reload alongside `php artisan serve`
php artisan serve
```

Run the test suite with `php artisan test` (covers the contact form's validation, storage, mail-queueing, and rate-limiting; the home page's Inertia props; and each project's case-study page, including the 404 for an unknown slug).

## Before publishing — personalization checklist

- [ ] **Stats** (`PortfolioContent::stats()`) — confirm "Projects Delivered" and "APIs Designed & Built" reflect real numbers. "Years Experience" and "Third-Party Integrations" are grounded in the CV as written.
- [ ] **Mail delivery** — `MAIL_MAILER` defaults to `log` (messages land in `storage/logs/laravel.log`, nothing is actually sent). Set real SMTP/Resend/Postmark credentials in `.env` before going live, and run a queue worker (`php artisan queue:work`) or switch `QUEUE_CONNECTION` to `sync`.
- [ ] **Canonical URL** — `resources/views/app.blade.php`'s JSON-LD `url` field is a placeholder (`https://mahdiayyad.dev/`); update it once deployed.
- [ ] **Testimonials** — intentionally omitted until there are real ones to feature (no fabricated quotes).

## Notes

- Theme respects a saved preference, falling back to system `prefers-color-scheme`; toggled via `useTheme` and applied to `<html data-theme>` before first paint (inline script in `app.blade.php`) to avoid a flash of the wrong theme.
- Icons are a single inline SVG sprite (`IconSprite.jsx`) — no icon-font/library dependency.
- Switching from SQLite to MySQL for production is a `.env` change only (`DB_CONNECTION=mysql` + credentials) — every migration uses portable column types.
