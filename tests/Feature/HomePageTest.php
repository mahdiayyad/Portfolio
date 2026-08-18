<?php

namespace Tests\Feature;

use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class HomePageTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_renders_with_expected_props(): void
    {
        Project::factory()->create(['sort_order' => 0]);

        $this->get('/')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Home')
                ->has('profile')
                ->has('stats')
                ->has('techStack')
                ->has('experience')
                ->has('skills')
                ->has('services')
                ->has('projects', 1)
                ->where('profile.name', 'Mahdi Ayyad')
            );
    }
}
