<?php

namespace Tests\Feature;

use App\Models\Project;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ProjectShowPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_renders_a_project_case_study_by_slug(): void
    {
        Project::factory()->create(['slug' => 'qistas', 'name' => 'Qistas', 'sort_order' => 0]);
        Project::factory()->create(['slug' => 'maktab', 'name' => 'Maktab', 'sort_order' => 1]);

        $this->get('/projects/qistas')
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Projects/Show')
                ->has('profile')
                ->where('project.slug', 'qistas')
                ->where('previous', null)
                ->where('next.slug', 'maktab')
            );
    }

    public function test_it_returns_404_for_an_unknown_project_slug(): void
    {
        $this->get('/projects/does-not-exist')->assertNotFound();
    }
}
