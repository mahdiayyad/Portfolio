<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactMessageRequest;
use App\Mail\ContactMessageReceived;
use App\Models\ContactMessage;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(StoreContactMessageRequest $request)
    {
        $contactMessage = ContactMessage::create([
            ...$request->validated(),
            'ip_address' => $request->ip(),
        ]);

        Mail::to(config('mail.contact_recipient'))
            ->queue(new ContactMessageReceived($contactMessage));

        return back()->with('success', "Thanks {$contactMessage->name} — your message is in. I'll reply within 24 hours.");
    }
}
