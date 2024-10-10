<?php
header('Content-Type: application/json');
session_start();
require_once './includes/config.php'; // Ensure this file contains the database connection ($conn)

// Enable error reporting for debugging
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Function to execute query and fetch result
function fetchCount($query, $conn) {
    $result = mysqli_query($conn, $query);
    if (!$result) {
        http_response_code(500); // Internal Server Error
        echo json_encode(['status' => 'error', 'message' => mysqli_error($conn)]);
        exit;
    }
    $row = mysqli_fetch_assoc($result);
    return $row;
}

// Fetch counts
$propertyCount = fetchCount("SELECT COUNT(id) as p_count FROM properties", $conn);
$propertyTypeCount = fetchCount("SELECT COUNT(id) as c_count FROM properties group by category", $conn);
$userCount = fetchCount("SELECT COUNT(userId) as u_count FROM users", $conn);
$bookingCount = fetchCount("SELECT COUNT(id) as b_count FROM bookings", $conn);

// Return JSON response
echo json_encode([
    'properties' => $propertyCount['p_count'],
    'propertyTypes' => $propertyTypeCount['c_count'],
    'users' => $userCount['u_count'],
    'bookings' => $bookingCount['b_count']
]);

// Close the connection
mysqli_close($conn);
