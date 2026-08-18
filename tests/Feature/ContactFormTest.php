<?php

namespace Tests\Feature;

use App\Mail\ContactMessageReceived;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactFormTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_rejects_an_incomplete_submission(): void
    {
        $response = $this->post('/contact', [
            'name' => '',
            'email' => 'not-an-email',
            'subject' => '',
            'message' => '',
        ]);

        $response->assertSessionHasErrors(['name', 'email', 'subject', 'message']);
        $this->assertDatabaseCount('contact_messages', 0);
    }

    public function test_it_stores_a_valid_submission_and_queues_a_notification_email(): void
    {
        Mail::fake();

        $response = $this->post('/contact', [
            'name' => 'Jane Recruiter',
            'email' => 'jane@company.com',
            'subject' => 'Senior Laravel role',
            'message' => 'Loved your portfolio, want to chat about an opening.',
        ]);

        $response->assertSessionHas('success');

        $this->assertDatabaseHas('contact_messages', [
            'name' => 'Jane Recruiter',
            'email' => 'jane@company.com',
            'subject' => 'Senior Laravel role',
        ]);

        Mail::assertQueued(ContactMessageReceived::class, function (ContactMessageReceived $mail) {
            return $mail->contactMessage->email === 'jane@company.com';
        });
    }

    public function test_it_is_rate_limited_after_five_submissions(): void
    {
        $payload = [
            'name' => 'Jane Recruiter',
            'email' => 'jane@company.com',
            'subject' => 'Senior Laravel role',
            'message' => 'Loved your portfolio, want to chat about an opening.',
        ];

        for ($i = 0; $i < 5; $i++) {
            $this->post('/contact', $payload);
        }

        $this->post('/contact', $payload)->assertStatus(429);
    }
}
