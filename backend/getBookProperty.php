<?php
// Connect to the database
include './includes/config.php';

// Function to fetch all booking details with corresponding property data
function getBookings($conn) {
    // SQL query to join the properties and bookings tables based on the property ID
    // $sql = "SELECT properties.id, properties.name, properties.description, properties.image, bookings.start_date, bookings.end_date 
    //         FROM bookings 
    //         INNER JOIN properties ON properties.id = bookings.property_id";
    $sql = "SELECT bookings.id, properties.name, properties.description, properties.image, bookings.start_date, bookings.end_date FROM bookings INNER JOIN properties ON properties.id = bookings.property_id";


    $result = mysqli_query($conn, $sql);

    // Check if the query was successful
    if ($result) {
        $bookings = [];

        // Fetch data from the result set
        while ($row = mysqli_fetch_assoc($result)) {
            $bookings[] = $row;
        }

        // Return the bookings in JSON format
        echo json_encode(['status' => 'success', 'data' => $bookings]);
    } else {
        // Return an error message if something goes wrong
        echo json_encode(['status' => 'error', 'message' => 'Failed to retrieve data: ' . mysqli_error($conn)]);
    }
}

// Call the function to get bookings
getBookings($conn);

// Close the database connection
mysqli_close($conn);
?>
