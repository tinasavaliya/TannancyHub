<?php
include './includes/config.php';

// Check if userId is provided in the request
if(isset($_GET['userId'])) {
    $userId = $_GET['userId'];

    // Delete the user from the database
    $deleteQuery = "DELETE FROM users WHERE userId = '$userId'";
    $result = mysqli_query($conn, $deleteQuery);

    if($result) {
        echo json_encode(['success' => true, 'message' => 'User deleted successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to delete user']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'User ID not provided']);
}

$conn->close();
?>
