<?php
$host = "db";
$user = "root";
$password = "root";
$database = "farm_management_system";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>