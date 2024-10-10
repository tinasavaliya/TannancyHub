<?php
include './includes/config.php';

$qry = mysqli_query($conn, "SELECT id,name,category FROM properties ORDER BY category ASC");
$classes = [];

if (mysqli_num_rows($qry) > 0) {
    while ($rows = mysqli_fetch_assoc($qry)) {
        $properties[] = [
            'id' => $rows['id'],
            'name' => $rows['name'],
            'category' => $rows['category']
        ];
    }
}

echo json_encode(['success' => true, 'data' => $properties]);
$conn->close();
