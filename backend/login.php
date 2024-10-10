<?php
include './config.php';
session_start(); // Start the session

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (!empty($username) && !empty($password)) {
        // Query the user table for the given username
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $res = $conn->query($sql);

        if ($res->num_rows > 0) {
            $row = $res->fetch_assoc();
            // Check the password
            if (!password_verify($password, $row['password'])) {
                $result = "Invalid password";
            } else {
                // User credentials are valid, generate a custom token
                $token = bin2hex(random_bytes(32)); // 64 characters long token
                $expiresAt = date('Y-m-d H:i:s', strtotime('+1 hour')); // Token valid for 1 hour

                // Store token in the database
                $insertStmt = $conn->prepare("INSERT INTO tokens (userId, token, expires_at) VALUES (?, ?, ?)");
                $insertStmt->bind_param('iss', $row['id'], $token, $expiresAt);
                $insertStmt->execute();

                $_SESSION['name'] = $username; // Set session variable

                $result = "Login successful! Redirecting...";
                $response = array(
                    "result" => $result,
                    "success" => true,
                    "token" => $token
                );
            }
        } else {
            $result = "Invalid user or password";
            $response = array("result" => $result, "success" => false);
        }
    } else {
        $result = "Enter user and password";
        $response = array("result" => $result, "success" => false);
    }
} else {
    http_response_code(405);
    $response = array("result" => "Method not allowed", "success" => false);
}

// Close the database connection
$conn->close();

echo json_encode($response);
?>

