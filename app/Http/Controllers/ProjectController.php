<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Support\PortfolioContent;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function show(Project $project): Response
    {
        $siblings = Project::ordered()->get(['id', 'slug', 'name', 'sort_order']);
        $index = $siblings->search(fn ($item) => $item->id === $project->id);

        return Inertia::render('Projects/Show', [
            'profile' => PortfolioContent::profile(),
            'project' => $project,
            'previous' => $index > 0 ? $siblings[$index - 1] : null,
            'next' => $index < $siblings->count() - 1 ? $siblings[$index + 1] : null,
        ]);
    }
}
