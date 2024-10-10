<?php
include('./includes/config.php');


// Check if 'id' is provided in the query string

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Prepare the SQL query to fetch the property with the specific ID
    $stmt = $conn->prepare("SELECT * FROM properties WHERE id = ?");
    if ($stmt) {
        // Bind the ID parameter as an integer
        $stmt->bind_param("i", $id);

        // Execute the prepared statement
        $stmt->execute();

        // Get the result of the query
        $result = $stmt->get_result();

        // Check if a record was found
        if ($result->num_rows > 0) {
            // Fetch the single row as an associative array
            $row = $result->fetch_assoc();

            // Return the result as JSON
            echo json_encode($row);
        } else {
            // If no record is found, return a message
            echo json_encode(['message' => 'No records found']);
        }

        // Close the statement
        $stmt->close();
    } else {
        // Error preparing the SQL statement
        echo json_encode(['message' => 'Failed to prepare the SQL statement']);
    }
} else {
    // If 'id' is not set in the query string, return an error message
    echo json_encode(['message' => 'No ID provided']);
}

// Close the database connection
$conn->close();
