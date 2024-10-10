<?php
include './includes/config.php'; // Ensure this includes the database connection

header('Content-Type: application/json');

// Get userId from the request body (via POST)
$data = json_decode(file_get_contents('php://input'), true);

// Check if userId is provided
if (!isset($data['userId'])) {
    echo json_encode(['status' => 'error', 'message' => 'User ID is missing']);
    exit;
}

$userId = mysqli_real_escape_string($conn, $data['userId']); // Sanitize input

// Fetch user from the database
$query = "SELECT name, email, role FROM users WHERE userId = '$userId'";
$result = mysqli_query($conn, $query);

if (!$result) {
    echo json_encode(['status' => 'error', 'message' => 'Failed to fetch user: ' . mysqli_error($conn)]);
    exit;
}

$user = mysqli_fetch_assoc($result);

if ($user) {
    echo json_encode(['status' => 'success', 'user' => $user]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'User not found']);
}
?>
