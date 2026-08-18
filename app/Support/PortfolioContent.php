<?php

namespace App\Support;

/**
 * Static personal/portfolio content that doesn't need a database table —
 * career history, skills, services, and headline stats rarely change and
 * have no independent lifecycle worth CRUD-ing. Projects and case studies
 * (the content that's actually meant to grow over time) live in the
 * database instead — see the Project model, which also holds each project's
 * full case-study content.
 */
class PortfolioContent
{
    public static function stats(): array
    {
        return [
            ['value' => 4, 'suffix' => '+', 'label' => 'Years Experience'],
            ['value' => 15, 'suffix' => '+', 'label' => 'Projects Delivered'],
            ['value' => 20, 'suffix' => '+', 'label' => 'APIs Designed & Built'],
            ['value' => 5, 'suffix' => '+', 'label' => 'Third-Party Integrations'],
        ];
    }

    public static function techStack(): array
    {
        return [
            'PHP', 'MySQL', 'Redis', 'Docker', 'Git', 'Linux',
            'JavaScript', 'Tailwind', 'Bootstrap', 'Laravel',
        ];
    }

    public static function experience(): array
    {
        return [
            [
                'role' => 'Laravel Backend Developer',
                'company' => 'Qistas',
                'period' => 'May 2023 — Present',
                'icon' => 'briefcase',
                'bullets' => [
                    'Designed and built scalable SaaS backend systems using Laravel for workflow and document management.',
                    'Developed and maintained RESTful APIs for internal services and external integrations.',
                    'Applied Redis caching strategies and queue-based processing to improve performance and system responsiveness.',
                    'Implemented event-driven workflows with Laravel Events & Listeners, and enforced access control with Laravel Policies.',
                    'Optimized SQL queries in MySQL and contributed to CI/CD pipelines using GitHub to streamline deployment.',
                ],
                'tags' => ['Laravel', 'PHP', 'MySQL', 'Redis', 'REST APIs', 'Queues', 'CI/CD'],
            ],
            [
                'role' => 'Backend Developer (PHP/Laravel)',
                'company' => 'NCIT Solutions',
                'period' => 'Mar 2022 — Apr 2023',
                'icon' => 'code',
                'bullets' => [
                    'Built and maintained backend systems using Laravel with a focus on scalability and clean architecture.',
                    'Designed RESTful APIs to support web application functionality.',
                    'Structured and optimized SQL databases for efficient data handling.',
                    'Integrated third-party services and external APIs.',
                    'Improved application performance through caching and query optimization.',
                ],
                'tags' => ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Git'],
            ],
        ];
    }

    public static function skills(): array
    {
        return [
            [
                'category' => 'Backend',
                'icon' => 'server',
                'items' => [
                    ['label' => 'Laravel', 'level' => 95],
                    ['label' => 'PHP', 'level' => 93],
                    ['label' => 'REST APIs', 'level' => 92],
                    ['label' => 'Authentication', 'level' => 88],
                    ['label' => 'Queues & Events', 'level' => 85],
                ],
            ],
            [
                'category' => 'Databases',
                'icon' => 'database',
                'items' => [
                    ['label' => 'MySQL', 'level' => 90],
                    ['label' => 'Query Optimization', 'level' => 85],
                    ['label' => 'Database Design', 'level' => 87],
                ],
            ],
            [
                'category' => 'Caching & Performance',
                'icon' => 'zap',
                'items' => [
                    ['label' => 'Redis', 'level' => 82],
                    ['label' => 'Caching Strategies', 'level' => 84],
                    ['label' => 'Performance Tuning', 'level' => 83],
                ],
            ],
            [
                'category' => 'DevOps',
                'icon' => 'terminal',
                'items' => [
                    ['label' => 'Git', 'level' => 92],
                    ['label' => 'Linux', 'level' => 80],
                    ['label' => 'Deployment & Nginx', 'level' => 78],
                    ['label' => 'CI/CD', 'level' => 75],
                ],
            ],
            [
                'category' => 'Frontend Knowledge',
                'icon' => 'layout',
                'items' => [
                    ['label' => 'HTML & CSS', 'level' => 88],
                    ['label' => 'JavaScript', 'level' => 78],
                    ['label' => 'Tailwind CSS', 'level' => 80],
                    ['label' => 'Bootstrap', 'level' => 85],
                ],
            ],
        ];
    }

    public static function services(): array
    {
        return [
            [
                'icon' => 'code',
                'title' => 'Laravel Development',
                'description' => 'End-to-end Laravel application development — from data modeling to deployment, built on clean architecture.',
            ],
            [
                'icon' => 'plug',
                'title' => 'API Development',
                'description' => 'Well-documented REST APIs with proper authentication, versioning, and rate limiting for internal or public use.',
            ],
            [
                'icon' => 'database',
                'title' => 'Database Optimization',
                'description' => 'Schema design, indexing strategy, and query tuning to eliminate slow endpoints before they become a problem.',
            ],
            [
                'icon' => 'layers',
                'title' => 'Backend Architecture',
                'description' => 'System design for new products — service boundaries, queues, and caching strategy that scale with you.',
            ],
            [
                'icon' => 'cloud',
                'title' => 'SaaS Development',
                'description' => 'Multi-tenant architecture, billing integrations, and the backend infrastructure behind subscription products.',
            ],
            [
                'icon' => 'gauge',
                'title' => 'Performance Audits',
                'description' => "A structured review of your Laravel application's bottlenecks, with a prioritized plan to fix them.",
            ],
            [
                'icon' => 'chat',
                'title' => 'Technical Consulting',
                'description' => 'Architecture reviews, code audits, and hands-on guidance for teams scaling a Laravel codebase.',
            ],
        ];
    }

    public static function profile(): array
    {
        return [
            'name' => 'Mahdi Ayyad',
            'role' => 'Senior Laravel Developer',
            'location' => 'Amman, Jordan',
            'experienceYears' => '4+',
            'languages' => 'Arabic, English',
            'email' => 'mahdiayyad97@gmail.com',
            'github' => 'https://github.com/mahdiayyad',
            'linkedin' => 'https://www.linkedin.com/in/mahdi-ayyad-943143201',
            'resumeUrl' => '/cv/Mahdi-Ayyad-CV.pdf',
        ];
    }
}
