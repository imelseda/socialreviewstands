<?php
// Enquiry form handler — runs natively on HostGator (Apache + PHP).
// Delivers "Reserve My Stand" submissions to support@socialreviewstands.com.

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Honeypot: hidden field humans never fill — bots do. Fake success and discard.
if (!empty($_POST['company'])) {
    echo json_encode(['ok' => true]);
    exit;
}

function clean_header($v) {
    // Single-line, header-injection safe (for subject/reply-to headers)
    return str_replace(["\r", "\n"], ' ', trim((string)$v));
}

$name     = clean_header($_POST['name'] ?? '');
$email    = clean_header($_POST['email'] ?? '');
$business = clean_header($_POST['business_name'] ?? '');
$variant  = clean_header($_POST['variant'] ?? '');
$quantity = (int)($_POST['quantity'] ?? 1);
$message  = trim((string)($_POST['message'] ?? ''));

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please provide your name and a valid email address.']);
    exit;
}
if ($quantity < 1) $quantity = 1;

$to      = 'support@socialreviewstands.com';
$subject = 'New stand enquiry — ' . $name;
$body    = "New enquiry from socialreviewstands.com\n\n"
         . "Name: {$name}\n"
         . "Email: {$email}\n"
         . "Business: {$business}\n"
         . "Style: {$variant}\n"
         . "Quantity: {$quantity}\n\n"
         . "Message:\n{$message}\n";
$headers = "From: Social Media Review Stands <noreply@socialreviewstands.com>\r\n"
         . "Reply-To: {$name} <{$email}>\r\n";

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not send right now. Please email us directly at support@socialreviewstands.com.']);
}
