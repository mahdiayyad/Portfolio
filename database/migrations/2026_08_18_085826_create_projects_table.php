<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->string('category');
            $table->string('tagline');
            $table->text('summary');
            $table->text('highlight_quote')->nullable();
            $table->string('role');
            $table->json('architecture_summary');
            $table->json('tech_tags');
            $table->string('website_url')->nullable();
            $table->string('github_url')->nullable();
            $table->string('preview_image')->nullable();
            $table->json('sections');
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_placeholder')->default(true);
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
