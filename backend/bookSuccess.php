<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

include './includes/config.php';
header("Content-Type: application/json");

// Get the Authorization header from the request
$headers = getallheaders();
$token = isset($headers['Authorization']) ? str_replace('Bearer ', '', $headers['Authorization']) : null;

if (empty($token)) {
    echo json_encode(["error" => "Token is missing"]);
    exit;
}

$stmt = $conn->prepare("SELECT userId FROM tokens WHERE token = ?");
$stmt->bind_param("s", $token);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["error" => "Invalid token or user not found"]);
    exit;
}

$row = $result->fetch_assoc();
$userId = $row['userId'];

$input = json_decode(file_get_contents('php://input'), true);

if (
    !isset($input['propertyId'], $input['name'], $input['email'], $input['message'], $input['startDate'], $input['endDate']) ||
    empty($input['propertyId']) || empty($input['name']) || empty($input['email']) || empty($input['message']) ||
    empty($input['startDate']) || empty($input['endDate'])
) {
    echo json_encode(["error" => "All fields are required"]);
    exit;
}

$propertyId = $input['propertyId'];
$name = $input['name'];
$email = $input['email'];
$phone = $input['phone'];
$message = $input['message'];
$startDate = $input['startDate'];
$endDate = $input['endDate'];

$checkStmt = $conn->prepare(
    "SELECT * FROM bookings WHERE property_id = ? AND 
     (start_date <= ? AND end_date >= ?) AND status != 'Cancelled'"
);
$checkStmt->bind_param("iss", $propertyId, $endDate, $startDate);
$checkStmt->execute();
$checkResult = $checkStmt->get_result();

if ($checkResult->num_rows > 0) {
    echo json_encode(["error" => "This property is already booked for the selected dates. Please choose another property or date range."]);
    exit;
}

$insertStmt = $conn->prepare(
    "INSERT INTO bookings (tenant_id, property_id, userId, start_date, end_date, status, created_at, updated_at) 
     VALUES (?, ?, ?, ?, ?, 'Pending', NOW(), NOW())"
);
$insertStmt->bind_param("iiiss", $userId, $propertyId, $userId,$startDate, $endDate);

if ($insertStmt->execute()) {
    // Prepare email using PHPMailer
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'tinadiv2@gmail.com';
        $mail->Password = 'taxf ngfc ixtr sapf'; // Use an App Password if you have 2FA enabled
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom($email);
        $mail->addAddress('tinadiv2@gmail.com');

        // Content
        $mail->isHTML(false);
        $mail->Subject = 'Property Booking Request';
        $mail->Body    = "A new booking request has been made.\n\n" .
                          "Name: $name\n" .
                          "Email: $email\n" .
                          "phone: $phone\n" .
                          "Property ID: $propertyId\n" .
                          "Start Date: $startDate\n" .
                          "End Date: $endDate\n" .
                          "Message: $message\n";

        $mail->send();
        echo json_encode(["message" => "Booking successful. An email has been sent."]);
    } catch (Exception $e) {
        echo json_encode(["error" => "Booking successful, but failed to send email. Mailer Error: " . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["error" => "Database error: " . $insertStmt->error]);
}

$stmt->close();
$checkStmt->close();
$insertStmt->close();
$conn->close();
?>
