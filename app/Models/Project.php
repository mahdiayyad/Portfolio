<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'name',
        'category',
        'tagline',
        'summary',
        'highlight_quote',
        'role',
        'architecture_summary',
        'tech_tags',
        'website_url',
        'github_url',
        'preview_image',
        'sections',
        'is_featured',
        'is_placeholder',
        'sort_order',
    ];

    protected $casts = [
        'architecture_summary' => 'array',
        'tech_tags' => 'array',
        'sections' => 'array',
        'is_featured' => 'boolean',
        'is_placeholder' => 'boolean',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('id');
    }
}
