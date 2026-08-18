<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Support\PortfolioContent;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Home', [
            'profile' => PortfolioContent::profile(),
            'stats' => PortfolioContent::stats(),
            'techStack' => PortfolioContent::techStack(),
            'experience' => PortfolioContent::experience(),
            'skills' => PortfolioContent::skills(),
            'services' => PortfolioContent::services(),
            'projects' => Project::ordered()->get(),
        ]);
    }
}
