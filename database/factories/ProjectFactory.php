<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->unique()->company();

        return [
            'slug' => Str::slug($name),
            'name' => $name,
            'category' => 'Web Platform',
            'tagline' => $this->faker->catchPhrase(),
            'summary' => $this->faker->paragraph(),
            'highlight_quote' => $this->faker->sentence(),
            'role' => 'Laravel Full-Stack Developer',
            'architecture_summary' => ['Laravel backend', 'Laravel frontend'],
            'tech_tags' => ['Laravel', 'MySQL'],
            'website_url' => $this->faker->url(),
            'github_url' => null,
            'preview_image' => 'images/projects/qistas.jpg',
            'sections' => [
                ['heading' => 'Overview', 'body' => $this->faker->paragraph()],
                ['heading' => 'Engineering', 'body' => $this->faker->paragraph()],
            ],
            'is_featured' => false,
            'is_placeholder' => false,
            'sort_order' => 0,
        ];
    }
}
