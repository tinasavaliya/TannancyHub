<?php
// Connect to the database
include './includes/config.php'; 

header('Content-Type: application/json');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['userId']) || !isset($data['name']) || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(['status' => 'error', 'message' => 'User ID is missing']);
    exit;
}

$userId = $data['userId'];  
$name = $data['name'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT); // Hash the password for security

$query = "UPDATE users SET name = '$name', email = '$email', password = '$password' WHERE userId = '$userId'";
$result = mysqli_query($conn, $query);

if ($result) {
    echo json_encode(['status' => 'success', 'message' => 'User updated successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to update user: ' . mysqli_error($conn)]);
}

mysqli_close($conn);
?>
