<?php
include './includes/config.php'; // Database connection

header('Content-Type: application/json');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['userId'])) {
    echo json_encode(['status' => 'error', 'message' => 'User ID is missing']);
    exit;
}

$userId = $data['userId'];

// SQL query to fetch bookings and join properties table
$query = "
    SELECT b.property_id, b.start_date, b.end_date, b.status, p.name, p.image, p.price 
    FROM bookings b 
    JOIN properties p ON b.property_id = p.id 
    WHERE b.userId = '$userId'
";

$result = mysqli_query($conn, $query);

if ($result) {
    $bookings = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $bookings[] = $row;
    }
    echo json_encode(['status' => 'success', 'bookings' => $bookings]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to fetch bookings: ' . mysqli_error($conn)]);
}

mysqli_close($conn);
?>
