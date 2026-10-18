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
$product  = clean_header($_POST['product'] ?? '');
$quantity = (int)($_POST['quantity'] ?? 1);
$message  = trim((string)($_POST['message'] ?? ''));

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please provide your name and a valid email address.']);
    exit;
}
if ($quantity < 1) $quantity = 1;

$to      = 'support@socialreviewstands.com';
$subject = 'New enquiry — ' . $name;
$body    = "New enquiry from socialreviewstands.com\n\n"
         . "Name: {$name}\n"
         . "Email: {$email}\n"
         . "Business: {$business}\n"
         . "Product: {$product}\n"
         . "Quantity: {$quantity}\n\n"
         . "Message:\n{$message}\n";
$headers = "From: Social Media Review Stands <support@socialreviewstands.com>\r\n"
         . "Reply-To: {$name} <{$email}>\r\n";

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
    // Instant confirmation to the customer
    $safeName    = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $safeProduct = htmlspecialchars($product, ENT_QUOTES, 'UTF-8');
    $customerSubject = 'We got your message — Social Media Review Stands';
    $customerBody = <<<HTML
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f6f4ef;font-family:Georgia,'Times New Roman',serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
    <div style="background:#0A0B0E;border-radius:16px;padding:32px;border:1px solid #D4AF37;">
      <p style="color:#D4AF37;font-size:12px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px;">Social Media Review Stands</p>
      <h1 style="color:#F8F9FA;font-size:24px;margin:0 0 20px;">Thanks, {$safeName} — we're on it.</h1>
      <p style="color:#C9CED6;font-size:15px;line-height:1.6;margin:0 0 16px;">
        Your message just landed in our inbox. A real person (not a bot) will get back to you
        <b style="color:#F3E5AB;">within 24 hours</b> with pricing, delivery details, and answers to anything you asked.
      </p>
      <div style="background:#12141C;border:1px solid rgba(212,175,55,0.3);border-radius:12px;padding:16px 20px;margin:0 0 20px;">
        <p style="color:#94A3B8;font-size:12px;text-transform:uppercase;letter-spacing:2px;margin:0 0 6px;">You asked about</p>
        <p style="color:#F8F9FA;font-size:16px;margin:0;">{$safeProduct}</p>
      </div>
      <p style="color:#C9CED6;font-size:14px;line-height:1.6;margin:0 0 4px;">In a hurry? Just reply to this email — it goes straight to our team.</p>
      <p style="color:#C9CED6;font-size:14px;line-height:1.6;margin:0;">
        — The Social Media Review Stands team<br>
        <a href="https://socialreviewstands.com" style="color:#D4AF37;">socialreviewstands.com</a>
      </p>
    </div>
    <p style="color:#9aa0a6;font-size:11px;text-align:center;margin:16px 0 0;">
      You received this because you sent us a message at socialreviewstands.com
    </p>
  </div>
</body>
</html>
HTML;
    $customerHeaders = "MIME-Version: 1.0\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "From: Social Media Review Stands <support@socialreviewstands.com>\r\n"
        . "Reply-To: support@socialreviewstands.com\r\n";
    @mail($email, $customerSubject, $customerBody, $customerHeaders);

    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not send right now. Please email us directly at support@socialreviewstands.com.']);
}
