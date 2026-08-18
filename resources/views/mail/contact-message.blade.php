<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, Helvetica, Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
    <h2 style="margin-bottom: 4px;">New portfolio contact message</h2>
    <p style="color: #666; margin-top: 0;">Sent from mahdiayyad.dev</p>

    <table cellpadding="6" cellspacing="0" style="margin: 16px 0;">
        <tr>
            <td style="color: #666;">Name</td>
            <td><strong>{{ $contactMessage->name }}</strong></td>
        </tr>
        <tr>
            <td style="color: #666;">Email</td>
            <td><a href="mailto:{{ $contactMessage->email }}">{{ $contactMessage->email }}</a></td>
        </tr>
        <tr>
            <td style="color: #666;">Subject</td>
            <td>{{ $contactMessage->subject }}</td>
        </tr>
    </table>

    <div style="padding: 16px; background: #f5f5f7; border-radius: 8px; white-space: pre-wrap;">{{ $contactMessage->message }}</div>
</body>
</html>
