<?php
include './includes/config.php'; // Make sure this includes the database connection

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['old_pass'], $data['new_pass'], $data['userId'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

$userId = $data['userId'];
$old_pass = $data['old_pass'];
$new_pass = $data['new_pass'];

// Fetch user from database
$result = mysqli_query($conn, "SELECT password FROM users WHERE userId = '$userId'");
if (!$result) {
    echo json_encode(['success' => false, 'message' => 'Query preparation failed: ' . mysqli_error($conn)]);
    exit;
}

$user = mysqli_fetch_assoc($result);

if (!$user) {
    echo json_encode(['success' => false, 'message' => 'User not found']);
    exit;
}

if (!password_verify($old_pass, $user['password'])) {
    echo json_encode(['success' => false, 'message' => 'Old password is incorrect']);
    exit;
}

// Validate new password
if (strlen($new_pass) < 8) {
    echo json_encode(['success' => false, 'message' => 'New password must be at least 8 characters long']);
    exit;
}

// Update password
$new_pass_hash = password_hash($new_pass, PASSWORD_DEFAULT);
$update_query = "UPDATE users SET password = '$new_pass_hash' WHERE userId = '$userId'";
$result = mysqli_query($conn, $update_query); // Use $conn here

if ($result) {
    echo json_encode(['success' => true, 'message' => 'Password changed successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to change password: ' . mysqli_error($conn)]);
}
?>
