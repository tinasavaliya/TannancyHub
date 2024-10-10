<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow requests from your frontend
header("Content-Type: application/json");

// Retrieve the search query
$query = isset($_GET['query']) ? $_GET['query'] : '';

$response = ['success' => false, 'results' => []];

if (!empty($query)) {
    $conn = new mysqli("localhost", "root", "", "tennancyhub");
    
    if ($conn->connect_error) {
        die(json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]));
    }

    $stmt = $conn->prepare("SELECT id, name FROM properties WHERE name LIKE CONCAT('%', ?, '%')");
    $stmt->bind_param("s", $query);
    $stmt->execute();
    $result = $stmt->get_result();
   
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    $response = ['success' => true, 'results' => $data];

    $stmt->close();
    $conn->close();
}

echo json_encode($response);
?>
