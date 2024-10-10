<?php
// Connect to the database
include './includes/config.php'; 

header('Content-Type: application/json');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['bookingId']) || !isset($data['status'])) {
    echo json_encode(['status' => 'error', 'message' => 'Booking ID or status is missing']);
    exit;
}

$bookingId = $data['bookingId'];
$status = $data['status'];

// If the status is 'canceled', delete the booking from the bookings table
if ($status === 'canceled') {
    // Delete the booking from the table
    $query = "DELETE FROM bookings WHERE id = '$bookingId'";
    $result = mysqli_query($conn, $query);

    if ($result) {
        echo json_encode(['status' => 'success', 'message' => 'canceled property booking']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to cancel booking: ' . mysqli_error($conn)]);
    }
} else {
    // For 'approved' status, update the booking status
    $query = "UPDATE bookings SET status = '$status' WHERE id = '$bookingId'";
    $result = mysqli_query($conn, $query);

    if ($result) {
        echo json_encode(['status' => 'success', 'message' => 'approved success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update booking status: ' . mysqli_error($conn)]);
    }
}

mysqli_close($conn);
?>
