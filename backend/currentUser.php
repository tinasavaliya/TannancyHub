<?php

require_once './includes/config.php';

// Start the session if it's not already started
if (!session_id()) {
    session_start();
}

// Check if the session variable 'admin_name' is set
if (isset($_SESSION['name'])) {
    $response = [
        'success' => true,
        'name' => $_SESSION['name']
    ];
} else {
    $response = [
        'success' => false,
        'message' => 'Admin not logged in'
    ];
}

// Return the response as JSON
echo json_encode($response);
