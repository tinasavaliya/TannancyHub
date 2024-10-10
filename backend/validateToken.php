<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$conn = new mysqli("localhost", "root", "", "tennancyhub");

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]));
}

$headers = getallheaders();
$token = isset($headers['Authorization']) ? str_replace('Bearer ', '', $headers['Authorization']) : null;

if (!$token) {
    echo json_encode(['success' => false, 'message' => 'No token provided']);
    exit();
}

$stmt = $conn->prepare("SELECT u.userId, u.name FROM tokens t JOIN users u ON t.userId = u.userId WHERE t.token = ? AND t.expires_at > NOW()");
$stmt->bind_param("s", $token);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user) {
    echo json_encode([
        'success' => true,
        'message' => 'Token is valid',
        'name' => $user['name']
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid or expired token'
    ]);
}

$conn->close();
?>



