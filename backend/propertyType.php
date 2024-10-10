<?php
include('./includes/config.php');

// SQL query to select categories and count occurrences
$sql = "SELECT price,category, COUNT(*) as count FROM properties GROUP BY category";

$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row; // Each row contains category and count
    }
} else {
    $data = ['message' => 'No records found'];
}

echo json_encode($data);
$conn->close();
