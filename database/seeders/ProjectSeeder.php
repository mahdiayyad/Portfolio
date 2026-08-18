<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $projects = [
            [
                'slug' => 'qistas',
                'name' => 'Qistas',
                'category' => 'LegalTech · Enterprise SaaS',
                'tagline' => 'Legal Research & Intelligence Platform',
                'summary' => 'A legal research platform providing a comprehensive, cross-referenced database of legislative and judicial content across 9 Arab jurisdictions — giving legal professionals, law firms, and institutions a trusted research environment.',
                'highlight_quote' => 'A legal research platform serving legal professionals across 9 Arab jurisdictions.',
                'role' => 'Laravel Full-Stack Developer',
                'architecture_summary' => [],
                'tech_tags' => ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
                'website_url' => 'https://qistas.ai/',
                'github_url' => null,
                'preview_image' => 'images/projects/qistas.jpg',
                'is_featured' => true,
                'is_placeholder' => false,
                'sort_order' => 1,
                'sections' => [
                    [
                        'heading' => 'The Problem',
                        'body' => "Legal professionals — lawyers, firms, and institutions — need to search and navigate enormous volumes of legislative and judicial content efficiently. Legal research across multiple jurisdictions is traditionally slow and fragmented, with content that's difficult to cross-reference and hard to trust without careful verification.",
                    ],
                    [
                        'heading' => 'The Solution',
                        'body' => "Qistas centralizes legislative and judicial content across 9 Arab jurisdictions into a single legal research platform, combining advanced search, analysis, and cross-referencing so legal professionals can move from a question to verified legal answers faster.\n\nThe same research engine also underpins other Qistas legal products, which means the underlying data and architecture had to be built as a stable foundation for more than one application — not just a single-purpose search tool.",
                    ],
                    [
                        'heading' => 'Engineering',
                        'body' => "Qistas is built as a full Laravel application, backend and frontend. On the backend, that meant modeling large volumes of highly structured legislative and judicial data in a way that supports advanced search, complex filtering, and cross-referencing between related legal sources, while keeping the codebase maintainable as the platform's content and feature set grew.\n\nOn the frontend — also rendered through Laravel — the focus was on presenting complex, hierarchical legal information in a way that's actually usable for professional researchers, not just technically correct. Search-oriented architecture and data organization were central concerns throughout: the platform exists to make dense legal content navigable, so the data model and query patterns had to be designed around real research workflows, not generic CRUD screens.\n\nBecause the research engine also powers other Qistas products, architectural decisions — how content is structured, indexed, and related — had to hold up as a shared foundation rather than a one-off implementation.",
                    ],
                    [
                        'heading' => 'My Contribution',
                        'body' => "I worked as a Laravel full-stack developer on Qistas, contributing across backend data architecture and frontend implementation. Qistas is built and maintained by a team, not by a single engineer — my role was hands-on full-stack development within that team, working on the Laravel application that powers the platform's legal research experience.",
                    ],
                ],
            ],
            [
                'slug' => 'aroma-gift-center',
                'name' => 'Aroma Gift Center',
                'category' => 'E-commerce · Saudi Market',
                'tagline' => 'Premium Saudi E-commerce Platform',
                'summary' => 'A Saudi-based e-commerce platform for fragrances, floral arrangements, beauty products, skincare, makeup, and accessories — pairing a premium brand experience with production checkout, order, and payment workflows.',
                'highlight_quote' => 'A production e-commerce platform built for the Saudi market with integrated payment and BNPL solutions.',
                'role' => 'Laravel Full-Stack Developer',
                'architecture_summary' => ['Laravel', 'Redis', 'Firebase', 'Events & Listeners', 'Policies', 'Payment gateway integrations', 'Admin Dashboard', 'Google OAuth & OTP'],
                'tech_tags' => ['Laravel', 'PHP', 'Redis', 'Firebase', 'Moyasar', 'Tabby', 'Tamara'],
                'website_url' => 'https://aromagiftcenter.com/',
                'github_url' => null,
                'preview_image' => 'images/projects/aroma.jpg',
                'is_featured' => false,
                'is_placeholder' => false,
                'sort_order' => 2,
                'sections' => [
                    [
                        'heading' => 'Overview',
                        'body' => 'Aroma is a Saudi-based brand spanning fragrances, floral arrangements, beauty products, skincare, makeup, and accessories. The platform pairs a premium brand experience with the full mechanics of a production e-commerce business — catalog, cart, checkout, orders, and payments.',
                    ],
                    [
                        'heading' => 'Business Requirements',
                        'body' => 'A Saudi-market e-commerce platform needs more than a product catalog and a checkout button — it needs a checkout ecosystem built around the payment methods customers in that market actually expect, including Buy Now, Pay Later options alongside standard payment processing.',
                    ],
                    [
                        'heading' => 'Architecture',
                        'body' => 'The platform is built on Laravel for both backend and frontend. Redis supports caching and performance, Firebase handles notification delivery, an events-and-listeners architecture decouples side effects from core request handling, and Laravel Policies govern authorization across the application — alongside integrations with multiple payment providers.',
                    ],
                    [
                        'heading' => 'My Role',
                        'body' => 'I worked as a Laravel full-stack developer on Aroma, contributing across backend business logic and frontend implementation.',
                    ],
                    [
                        'heading' => 'E-commerce Engineering',
                        'body' => 'Backend work centered on core e-commerce business logic: product management, cart and checkout workflows, and order handling, built on Laravel and structured to stay maintainable as the catalog and feature set grew. The platform also includes an internal admin dashboard for managing products, orders, and day-to-day store operations.',
                    ],
                    [
                        'heading' => 'Payment Integrations',
                        'body' => "Integrated multiple payment and Buy Now, Pay Later providers to support the platform's checkout ecosystem: Moyasar for payment processing, and Tabby and Tamara for BNPL — reflecting the payment methods customers expect in the Saudi market.",
                    ],
                    [
                        'heading' => 'Redis',
                        'body' => 'Implemented Redis-based caching and application-level performance optimizations where appropriate.',
                    ],
                    [
                        'heading' => 'Notifications',
                        'body' => 'Integrated Firebase for notification delivery across customer-facing workflows.',
                    ],
                    [
                        'heading' => 'Authentication & Authorization',
                        'body' => 'Customer sign-in supports both Google OAuth and OTP-based login alongside standard authentication. Laravel Policies control access to resources across the platform, including the internal admin dashboard.',
                    ],
                    [
                        'heading' => 'Challenges',
                        'body' => 'Coordinating multiple third-party payment and BNPL providers within a single, coherent checkout flow — each with its own integration details — while keeping the codebase maintainable as catalog and order logic grew alongside it.',
                    ],
                    [
                        'heading' => 'Engineering Decisions',
                        'body' => 'Structuring events and listeners to decouple side effects, like notifications, from core order and checkout logic, and using policies to keep authorization logic centralized rather than scattered across controllers.',
                    ],
                    [
                        'heading' => 'Outcome',
                        'body' => 'A production e-commerce platform live in the Saudi market, with integrated local payment and Buy Now, Pay Later options built into the checkout experience.',
                    ],
                ],
            ],
            [
                'slug' => 'maktab',
                'name' => 'Maktab',
                'category' => 'LegalTech · Enterprise SaaS',
                'tagline' => 'Legal Practice & Firm Operations Platform',
                'summary' => 'A unified legal workspace bringing matters, people, governance, and performance together in one Laravel platform — instead of forcing law firms to manage practice and operations through disconnected tools.',
                'highlight_quote' => 'A unified workspace connecting legal practice with firm operations.',
                'role' => 'Laravel Full-Stack Developer',
                'architecture_summary' => ['Laravel', 'API Microservices', 'Multi-Tenant', 'On-Premise Deployment', 'Redis', 'Firebase Notifications', 'Events & Listeners', 'Policies & Authorization'],
                'tech_tags' => ['Laravel', 'PHP', 'Redis', 'Firebase'],
                'website_url' => 'https://maktab.ai/',
                'github_url' => null,
                'preview_image' => 'images/projects/maktab.jpg',
                'is_featured' => false,
                'is_placeholder' => false,
                'sort_order' => 3,
                'sections' => [
                    [
                        'heading' => 'Product Overview',
                        'body' => 'Maktab unifies the practice and business of law in one environment — bringing matters, people, governance, and performance together instead of treating legal work and firm operations as separate systems.',
                    ],
                    [
                        'heading' => 'Business Problem',
                        'body' => 'Legal work and firm operations are deeply connected in practice, yet many systems treat them as separate worlds — forcing firms to manage disconnected tools instead of one coherent workspace.',
                    ],
                    [
                        'heading' => 'Solution',
                        'body' => 'Maktab provides a unified legal workspace designed around how legal work is actually delivered and managed, bringing matter management together with the operational and governance side of running a firm.',
                    ],
                    [
                        'heading' => 'Architecture',
                        'body' => 'The application is built on Laravel for both backend and frontend, designed as a multi-tenant platform that can also be deployed on-premise for firms with stricter data residency or infrastructure requirements. Backend functionality is exposed through API-driven microservices, with Redis supporting caching and performance, Firebase delivering notifications, and an events-and-listeners architecture keeping background and notification behavior decoupled from core application logic.',
                    ],
                    [
                        'heading' => 'My Role',
                        'body' => 'I worked as a Laravel full-stack developer on Maktab, contributing across backend and frontend.',
                    ],
                    [
                        'heading' => 'Laravel Engineering',
                        'body' => "Backend work involved structuring the application's core domain — matters, people, and firm data — so that practice-management and operations features could share a coherent data model, and building the frontend on Laravel alongside it.",
                    ],
                    [
                        'heading' => 'Redis & Performance',
                        'body' => 'Implemented Redis-based caching and application-level performance optimizations where appropriate.',
                    ],
                    [
                        'heading' => 'Notifications Architecture',
                        'body' => 'Integrated Firebase for notifications, keeping users informed of relevant activity within the platform.',
                    ],
                    [
                        'heading' => 'Events & Listeners',
                        'body' => "Used Laravel's events and listeners to create decoupled application behavior — triggering downstream actions, like notifications, without coupling that logic directly into core request handling.",
                    ],
                    [
                        'heading' => 'Authorization & Policies',
                        'body' => 'Used Laravel Policies to implement authorization and control access to resources — a natural fit for a platform handling sensitive matter and firm data across different user roles.',
                    ],
                    [
                        'heading' => 'Challenges',
                        'body' => 'Keeping practice-management and firm-operations features architecturally coherent as they grew side by side, rather than letting the platform split into two loosely connected systems.',
                    ],
                    [
                        'heading' => 'Results / Outcome',
                        'body' => 'A production Laravel platform unifying legal practice management and firm operations in a single workspace.',
                    ],
                ],
            ],
            [
                'slug' => 'epicured',
                'name' => 'Epicured',
                'category' => 'Subscription Commerce',
                'tagline' => 'Subscription Meal Delivery Platform',
                'summary' => 'A subscription-based meal delivery service specializing in Low FODMAP and gluten-free prepared foods, built on a Laravel API backend consumed by a decoupled Vue.js frontend.',
                'highlight_quote' => null,
                'role' => 'Laravel Backend Developer',
                'architecture_summary' => ['Laravel REST API backend', 'Vue.js frontend (decoupled)'],
                'tech_tags' => ['Laravel', 'PHP', 'Vue.js', 'REST API'],
                'website_url' => 'https://epicured.com/',
                'github_url' => null,
                'preview_image' => 'images/projects/epicured.jpg',
                'is_featured' => false,
                'is_placeholder' => false,
                'sort_order' => 4,
                'sections' => [
                    [
                        'heading' => 'Overview',
                        'body' => 'Epicured is a subscription meal delivery service specializing in Low FODMAP and gluten-free prepared foods, built around a decoupled architecture: a Laravel API backend consumed by a separate Vue.js frontend.',
                    ],
                    [
                        'heading' => 'Business Challenge',
                        'body' => 'Subscription food businesses need to manage recurring orders, meal customization, and customer accounts reliably, while keeping the customer-facing experience fast and free to evolve independently of backend release cycles.',
                    ],
                    [
                        'heading' => 'Technical Architecture',
                        'body' => 'The platform separates concerns between a Laravel API backend and a Vue.js frontend, communicating over REST. That decoupled approach lets the backend focus on business logic, data integrity, and stable API contracts, while the frontend iterates on the customer experience independently.',
                    ],
                    [
                        'heading' => 'My Contributions',
                        'body' => 'I worked as a Laravel backend developer on the API layer powering the platform.',
                    ],
                    [
                        'heading' => 'Backend Engineering',
                        'body' => 'Backend responsibilities centered on designing and maintaining REST API endpoints, structuring the underlying data models, and supporting the subscription-oriented business logic that a recurring, customizable meal-delivery product depends on — along with the data management and authentication concerns that come with a customer-facing API.',
                    ],
                    [
                        'heading' => 'Key Technical Decisions',
                        'body' => 'Building the API as a distinct, maintainable layer consumed by a separate Vue.js application, so backend and frontend concerns stay cleanly separated and able to evolve independently.',
                    ],
                    [
                        'heading' => 'Challenges',
                        'body' => 'Structuring subscription-based data and business logic — recurring orders, customization, account state — behind a clean, predictable API contract for a frontend built and iterated on separately.',
                    ],
                    [
                        'heading' => 'Outcome',
                        'body' => "A production Laravel API backend that continues to power Epicured's subscription meal delivery platform.",
                    ],
                ],
            ],
        ];

        foreach ($projects as $project) {
            Project::updateOrCreate(['slug' => $project['slug']], $project);
        }
    }
}
