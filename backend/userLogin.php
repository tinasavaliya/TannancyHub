<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$response = ['success' => false, 'message' => 'Unknown error'];

try {
    $conn = new mysqli("localhost", "root", "", "tennancyhub");
    if ($conn->connect_error) {
        throw new Exception('Connection failed: ' . $conn->connect_error);
    }

    $input = json_decode(file_get_contents('php://input'), true);
    if (isset($input['email']) && isset($input['password'])) {
        $email = $input['email'];
        $password = $input['password'];

        $stmt = $conn->prepare("SELECT userId, name, password, role FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();

        if ($user && password_verify($password, $user['password'])) {
            $token = bin2hex(random_bytes(32)); // Generate token
            $expiresAt = date('Y-m-d H:i:s', strtotime('+1 hour')); // Token expiry

            $insertStmt = $conn->prepare("INSERT INTO tokens (userId, token, expires_at) VALUES (?, ?, ?)");
            $insertStmt->bind_param('iss', $user['userId'], $token, $expiresAt);
            $insertStmt->execute();

            $response = [
                'success' => true,
                'token' => $token,
                'name' => $user['name'], // Return the user's name
                'role' => $user['role'],  // Return the user's role
                'userId' => $user['userId'],
                'message' => 'Login successful!'
            ];
        } else {
            $response = ['success' => false, 'message' => 'Invalid email or password.'];
        }
    } else {
        $response = ['success' => false, 'message' => 'Email and password are required.'];
    }
} catch (Exception $e) {
    $response = ['success' => false, 'message' => $e->getMessage()];
}

echo json_encode($response);
?>
