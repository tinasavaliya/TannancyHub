<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

// Handle the form submission via POST method
include './includes/config.php';

header("Content-Type: application/json");

// Check if JSON payload is received correctly
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["error" => "Invalid JSON data."]);
    exit();
}

// Validate inputs
if (
    empty($data['name']) || 
    empty($data['email']) || 
    empty($data['propertymanagement']) || 
    empty($data['phone']) || 
    empty($data['message'])
) {
    echo json_encode(["error" => "All fields are required."]);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$propertyManagement = htmlspecialchars($data['propertymanagement']);
$phone = htmlspecialchars($data['phone']);
$messageContent = htmlspecialchars($data['message']);

// Initialize PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'tinadiv2@gmail.com';  // Your email
    $mail->Password = 'taxf ngfc ixtr sapf';  // Your email password or app password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Email content
    $mail->setFrom($email, $name);
    $mail->addAddress('tinadiv2@gmail.com'); // Recipient email
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Request';
    $mail->Body = "
        <strong>Name:</strong> $name <br>
        <strong>Email:</strong> $email <br>
        <strong>Phone:</strong> $phone <br>
        <strong>Service Requested:</strong> $propertyManagement <br>
        <strong>Message:</strong> $messageContent
    ";

    // Send email
    $mail->send();

    // Return success response
    echo json_encode(["message" => "Thank you for contacting us. We will get back to you shortly"]);
} catch (Exception $e) {
    echo json_encode(["error" => "Mailer Error: {$mail->ErrorInfo}"]);
}
