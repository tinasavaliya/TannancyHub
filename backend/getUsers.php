<?php
include './includes/config.php';

// Fetch users from the database
// $result = mysqli_query($conn, "SELECT * FROM users");
$result = mysqli_query($conn, "SELECT * FROM users");
if(mysqli_num_rows($result) > 0){
    $users = [];
    while($row = mysqli_fetch_assoc($result)){
        $users[] = [
            'userId' => $row['userId'],
            'name' => $row['name'],
            'email' => $row['email'],
            'password' => $row['password'],
            'role' => $row['role'],
        ];
    }
    // Return JSON response
    echo json_encode(['success' => true, 'data' => $users]);
} else {
    echo json_encode(['success' => false, 'message' => 'No users found']);
}

$conn->close();
?>

